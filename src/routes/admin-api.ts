import { Hono } from 'hono';
import type { CloudflareBindings } from '../types';

const adminApiRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Test endpoint
adminApiRouter.get('/test', (c) => {
  return c.json({ message: 'Admin API is working!' });
});

// Articles CRUD for admin (demo version without auth)

// Get all articles
adminApiRouter.get('/articles', async (c) => {
  try {
    const db = c.env.DB;
    
    const { results } = await db.prepare(`
      SELECT 
        a.article_id,
        a.title,
        a.slug,
        a.content,
        a.author_id,
        a.category_id,
        a.created_at,
        a.updated_at,
        a.is_featured,
        a.featured_image_url,
        a.youtube_embed_id,
        a.status,
        c.name as category_name,
        u.nickname as author_name
      FROM articles a
      LEFT JOIN categories c ON a.category_id = c.category_id
      LEFT JOIN users u ON a.author_id = u.user_id
      ORDER BY a.created_at DESC
    `).all();
    
    return c.json({ articles: results || [] });
    
  } catch (error) {
    console.error('Admin get articles error:', error);
    return c.json({ error: 'Internal server error', details: error.message }, 500);
  }
});

// Create new article
adminApiRouter.post('/articles', async (c) => {
  try {
    const db = c.env.DB;
    const body = await c.req.json();
    
    const {
      title,
      content,
      category_id,
      author_id,
      is_featured,
      featured_image_url,
      youtube_embed_id,
      slug
    } = body;
    
    // Validate required fields
    if (!title || !content || !category_id || !author_id) {
      return c.json({ error: 'Missing required fields' }, 400);
    }
    
    const result = await db.prepare(`
      INSERT INTO articles (
        title, slug, content, author_id, category_id, 
        is_featured, featured_image_url, youtube_embed_id, 
        created_at, updated_at, view_count
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'), 0)
    `).bind(
      title,
      slug || `${title.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}`,
      content,
      author_id,
      category_id,
      is_featured || 0,
      featured_image_url,
      youtube_embed_id
    ).run();
    
    return c.json({ 
      message: 'Article created successfully',
      article_id: result.meta.last_row_id 
    }, 201);
    
  } catch (error) {
    console.error('Admin create article error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

adminApiRouter.put('/articles/:id', async (c) => {
  try {
    const db = c.env.DB;
    const articleId = c.req.param('id');
    const body = await c.req.json();
    
    const {
      title,
      content,
      category_id,
      author_id,
      is_featured,
      featured_image_url,
      youtube_embed_id
    } = body;
    
    await db.prepare(`
      UPDATE articles SET 
        title = ?, content = ?, category_id = ?, author_id = ?,
        is_featured = ?, featured_image_url = ?, youtube_embed_id = ?,
        updated_at = datetime('now')
      WHERE article_id = ?
    `).bind(
      title,
      content,
      category_id,
      author_id,
      is_featured || 0,
      featured_image_url,
      youtube_embed_id,
      articleId
    ).run();
    
    return c.json({ message: 'Article updated successfully' });
    
  } catch (error) {
    console.error('Admin update article error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

adminApiRouter.delete('/articles/:id', async (c) => {
  try {
    const db = c.env.DB;
    const articleId = c.req.param('id');
    
    await db.prepare('DELETE FROM articles WHERE article_id = ?')
      .bind(articleId).run();
    
    return c.json({ message: 'Article deleted successfully' });
    
  } catch (error) {
    console.error('Admin delete article error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Categories management
adminApiRouter.get('/categories', async (c) => {
  try {
    const db = c.env.DB;
    const { results } = await db.prepare('SELECT * FROM categories ORDER BY name').all();
    
    return c.json({ categories: results || [] });
    
  } catch (error) {
    console.error('Get categories error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

adminApiRouter.post('/categories', async (c) => {
  try {
    const db = c.env.DB;
    const body = await c.req.json();
    const { name, slug, parent_category } = body;
    
    if (!name || !slug) {
      return c.json({ error: 'Name and slug are required' }, 400);
    }
    
    const result = await db.prepare(`
      INSERT INTO categories (name, slug, parent_category, created_at)
      VALUES (?, ?, ?, datetime('now'))
    `).bind(name, slug, parent_category).run();
    
    return c.json({ 
      message: 'Category created successfully',
      category_id: result.meta.last_row_id 
    }, 201);
    
  } catch (error) {
    console.error('Create category error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Users management
adminApiRouter.get('/users', async (c) => {
  try {
    const db = c.env.DB;
    const { results } = await db.prepare(`
      SELECT 
        user_id,
        username,
        email,
        full_name,
        role,
        created_at,
        is_active
      FROM users 
      ORDER BY created_at DESC
    `).all();
    
    return c.json({ users: results || [] });
    
  } catch (error) {
    console.error('Get users error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Dashboard statistics
adminApiRouter.get('/dashboard-stats', async (c) => {
  try {
    console.log('Dashboard stats API called');
    const db = c.env.DB;
    console.log('DB instance:', !!db);
    
    // Get counts
    const articlesCount = await db.prepare('SELECT COUNT(*) as count FROM articles').first();
    console.log('Articles count:', articlesCount);
    const usersCount = await db.prepare('SELECT COUNT(*) as count FROM users').first();
    console.log('Users count:', usersCount);
    const commentsCount = await db.prepare('SELECT COUNT(*) as count FROM comments').first();
    console.log('Comments count:', commentsCount);
    
    return c.json({
      totalArticles: articlesCount?.count || 0,
      totalUsers: usersCount?.count || 0,
      totalComments: commentsCount?.count || 0,
      todayVisitors: 1234 // Mock data
    });
    
  } catch (error) {
    console.error('Dashboard stats error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

adminApiRouter.put('/categories/:id', async (c) => {
  try {
    const db = c.env.DB;
    const categoryId = c.req.param('id');
    const body = await c.req.json();
    const { name, slug, parent_category } = body;
    
    await db.prepare(`
      UPDATE categories SET name = ?, slug = ?, parent_category = ?
      WHERE category_id = ?
    `).bind(name, slug, parent_category, categoryId).run();
    
    return c.json({ message: 'Category updated successfully' });
    
  } catch (error) {
    console.error('Update category error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

adminApiRouter.delete('/categories/:id', async (c) => {
  try {
    const db = c.env.DB;
    const categoryId = c.req.param('id');
    
    // Check if category has articles
    const articlesCount = await db.prepare(
      'SELECT COUNT(*) as count FROM articles WHERE category_id = ?'
    ).bind(categoryId).first();
    
    if (articlesCount && articlesCount.count > 0) {
      return c.json({ error: 'Cannot delete category with existing articles' }, 400);
    }
    
    await db.prepare('DELETE FROM categories WHERE category_id = ?')
      .bind(categoryId).run();
    
    return c.json({ message: 'Category deleted successfully' });
    
  } catch (error) {
    console.error('Delete category error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Users management (demo data)
adminApiRouter.get('/users', async (c) => {
  try {
    const db = c.env.DB;
    
    // Try to get users from database, if fails return demo data
    try {
      const users = await db.prepare(`
        SELECT user_id, email, nickname, role_id, created_at 
        FROM users ORDER BY created_at DESC
      `).all();
      
      return c.json({ users: users.results });
    } catch {
      // Return demo users if table doesn't exist
      const demoUsers = [
        { user_id: 1, email: 'admin@jejuhalla.ac.kr', nickname: '편집장', role_id: 1, created_at: '2024-01-01T00:00:00Z' },
        { user_id: 2, email: 'editor@jejuhalla.ac.kr', nickname: '김기자', role_id: 2, created_at: '2024-01-02T00:00:00Z' },
        { user_id: 3, email: 'reporter@jejuhalla.ac.kr', nickname: '이기자', role_id: 3, created_at: '2024-01-03T00:00:00Z' },
        { user_id: 4, email: 'writer@jejuhalla.ac.kr', nickname: '박기자', role_id: 3, created_at: '2024-01-04T00:00:00Z' },
        { user_id: 5, email: 'manager@jejuhalla.ac.kr', nickname: '관리자', role_id: 1, created_at: '2024-01-05T00:00:00Z' }
      ];
      
      return c.json({ users: demoUsers });
    }
    
  } catch (error) {
    console.error('Get users error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Dashboard statistics
adminApiRouter.get('/dashboard-stats', async (c) => {
  try {
    const db = c.env.DB;
    
    // Get articles count
    const articlesCount = await db.prepare('SELECT COUNT(*) as count FROM articles').first();
    
    // Get categories count
    const categoriesCount = await db.prepare('SELECT COUNT(*) as count FROM categories').first();
    
    // Get recent articles
    const recentArticles = await db.prepare(`
      SELECT a.*, u.nickname as author_name, c.name as category_name
      FROM articles a
      LEFT JOIN users u ON a.author_id = u.user_id
      LEFT JOIN categories c ON a.category_id = c.category_id
      ORDER BY a.created_at DESC
      LIMIT 10
    `).all();
    
    return c.json({
      stats: {
        articles: articlesCount?.count || 0,
        categories: categoriesCount?.count || 0,
        users: 5, // Demo count
        comments: 0 // Placeholder
      },
      recentArticles: recentArticles.results || []
    });
    
  } catch (error) {
    console.error('Get dashboard stats error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default adminApiRouter;