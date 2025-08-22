import { Hono } from 'hono';
import { z } from 'zod';
import { createSlug, extractYoutubeId } from '../utils/auth';
import { canManageArticle, canCreateContent } from '../utils/rbac';
import { requireAuth } from '../middleware/auth';
import type { CloudflareBindings, Article, JWTPayload } from '../types';

const articlesRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Validation schemas
const createArticleSchema = z.object({
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  category_id: z.number(),
  status: z.enum(['draft', 'published', 'archived']).optional().default('draft'),
  featured_image_url: z.string().url().optional().nullable(),
  youtube_url: z.string().optional().nullable(),
  article_type: z.enum(['normal', 'shorts']).optional().default('normal')
});

const updateArticleSchema = createArticleSchema.partial();

// Get articles list with pagination and filtering
articlesRouter.get('/', async (c) => {
  try {
    const db = c.env.DB;
    const page = parseInt(c.req.query('page') || '1');
    const limit = parseInt(c.req.query('limit') || '12');
    const category = c.req.query('category');
    
    const offset = (page - 1) * limit;
    
    let query = `
      SELECT 
        a.*,
        u.nickname as author_name,
        c.name as category_name,
        c.slug as category_slug
      FROM articles a
      JOIN users u ON a.author_id = u.user_id
      JOIN categories c ON a.category_id = c.category_id
      WHERE 1=1
    `;
    
    const params: any[] = [];
    
    if (category) {
      // Check if it's a parent category
      const parentCategories = ['broadcast', 'press', 'campus', 'shorts', 'special-report', 'jeju-news', 'opinion', 'essay'];
      
      if (parentCategories.includes(category)) {
        // Get all subcategories for this parent category
        query += ` AND c.parent_category = ?`;
      } else {
        query += ' AND c.slug = ?';
      }
      params.push(category);
    }

    
    // Get total count
    const countQuery = query.replace(
      'SELECT a.*, u.nickname as author_name, c.name as category_name, c.slug as category_slug',
      'SELECT COUNT(*) as total'
    );
    const countResult = await db.prepare(countQuery).bind(...params).first();
    const total = countResult?.total || 0;
    
    // Get articles
    query += ' ORDER BY a.created_at DESC LIMIT ? OFFSET ?';
    params.push(limit, offset);
    
    const { results } = await db.prepare(query).bind(...params).all();
    
    return c.json({
      articles: results || [],
      pagination: {
        page,
        limit,
        total: total,
        totalPages: Math.ceil(total / limit)
      }
    });
    
  } catch (error) {
    console.error('Get articles error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get single article by slug
articlesRouter.get('/:slug', async (c) => {
  try {
    const db = c.env.DB;
    const slug = c.req.param('slug');
    
    const article = await db.prepare(`
      SELECT 
        a.*,
        u.nickname as author_name,
        c.name as category_name,
        c.slug as category_slug
      FROM articles a
      JOIN users u ON a.author_id = u.user_id
      JOIN categories c ON a.category_id = c.category_id
      WHERE a.slug = ?
    `).bind(slug).first();
    
    if (!article) {
      return c.json({ error: 'Article not found' }, 404);
    }
    
    // Increment view count
    await db.prepare(
      'UPDATE articles SET view_count = view_count + 1 WHERE slug = ?'
    ).bind(slug).run();
    
    return c.json({ article });
    
  } catch (error) {
    console.error('Get article error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Create new article (requires authentication)
articlesRouter.post('/', requireAuth, async (c) => {
  try {
    const user = c.get('user') as JWTPayload;
    
    if (!canCreateContent(user)) {
      return c.json({ error: 'Insufficient permissions' }, 403);
    }
    
    const body = await c.req.json();
    const validation = createArticleSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    const data = validation.data;
    const db = c.env.DB;
    
    // Generate slug
    const baseSlug = createSlug(data.title);
    let slug = baseSlug;
    let counter = 1;
    
    // Ensure unique slug
    while (await db.prepare('SELECT 1 FROM articles WHERE slug = ?').bind(slug).first()) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }
    
    // Extract YouTube ID if URL provided
    const youtubeEmbedId = data.youtube_url ? extractYoutubeId(data.youtube_url) : null;
    
    // Set published_at if status is published
    const publishedAt = data.status === 'published' ? new Date().toISOString() : null;
    
    const result = await db.prepare(`
      INSERT INTO articles (
        title, slug, content, author_id, category_id, 
        status, featured_image_url, youtube_embed_id, article_type, published_at
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING article_id
    `).bind(
      data.title,
      slug,
      data.content,
      user.user_id,
      data.category_id,
      data.status,
      data.featured_image_url,
      youtubeEmbedId,
      data.article_type,
      publishedAt
    ).first();
    
    if (!result) {
      return c.json({ error: 'Failed to create article' }, 500);
    }
    
    return c.json({
      message: 'Article created successfully',
      article_id: result.article_id,
      slug
    }, 201);
    
  } catch (error) {
    console.error('Create article error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Update article (requires authentication)
articlesRouter.put('/:id', requireAuth, async (c) => {
  try {
    const user = c.get('user') as JWTPayload;
    const articleId = parseInt(c.req.param('id'));
    const db = c.env.DB;
    
    // Get article to check permissions
    const article = await db.prepare(`
      SELECT a.*, c.slug as category_slug
      FROM articles a
      JOIN categories c ON a.category_id = c.category_id
      WHERE a.article_id = ?
    `).bind(articleId).first() as any;
    
    if (!article) {
      return c.json({ error: 'Article not found' }, 404);
    }
    
    // Check permissions
    if (!canManageArticle(user, article.category_slug, 'update')) {
      // Check if user is the author
      if (article.author_id !== user.user_id) {
        return c.json({ error: 'Insufficient permissions' }, 403);
      }
    }
    
    const body = await c.req.json();
    const validation = updateArticleSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    const data = validation.data;
    const updates: string[] = [];
    const values: any[] = [];
    
    if (data.title !== undefined) {
      updates.push('title = ?');
      values.push(data.title);
    }
    
    if (data.content !== undefined) {
      updates.push('content = ?');
      values.push(data.content);
    }
    
    if (data.category_id !== undefined) {
      updates.push('category_id = ?');
      values.push(data.category_id);
    }
    
    if (data.status !== undefined) {
      updates.push('status = ?');
      values.push(data.status);
      
      // Update published_at if changing to published
      if (data.status === 'published' && article.status !== 'published') {
        updates.push('published_at = ?');
        values.push(new Date().toISOString());
      }
    }
    
    if (data.featured_image_url !== undefined) {
      updates.push('featured_image_url = ?');
      values.push(data.featured_image_url);
    }
    
    if (data.youtube_url !== undefined) {
      const youtubeEmbedId = data.youtube_url ? extractYoutubeId(data.youtube_url) : null;
      updates.push('youtube_embed_id = ?');
      values.push(youtubeEmbedId);
    }
    
    if (data.article_type !== undefined) {
      updates.push('article_type = ?');
      values.push(data.article_type);
    }
    
    if (updates.length === 0) {
      return c.json({ message: 'No updates provided' });
    }
    
    updates.push('updated_at = CURRENT_TIMESTAMP');
    values.push(articleId);
    
    await db.prepare(
      `UPDATE articles SET ${updates.join(', ')} WHERE article_id = ?`
    ).bind(...values).run();
    
    return c.json({ message: 'Article updated successfully' });
    
  } catch (error) {
    console.error('Update article error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Delete article (requires authentication)
articlesRouter.delete('/:id', requireAuth, async (c) => {
  try {
    const user = c.get('user') as JWTPayload;
    const articleId = parseInt(c.req.param('id'));
    const db = c.env.DB;
    
    // Get article to check permissions
    const article = await db.prepare(`
      SELECT a.*, c.slug as category_slug
      FROM articles a
      JOIN categories c ON a.category_id = c.category_id
      WHERE a.article_id = ?
    `).bind(articleId).first() as any;
    
    if (!article) {
      return c.json({ error: 'Article not found' }, 404);
    }
    
    // Check permissions
    if (!canManageArticle(user, article.category_slug, 'delete')) {
      return c.json({ error: 'Insufficient permissions' }, 403);
    }
    
    await db.prepare('DELETE FROM articles WHERE article_id = ?').bind(articleId).run();
    
    return c.json({ message: 'Article deleted successfully' });
    
  } catch (error) {
    console.error('Delete article error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default articlesRouter;