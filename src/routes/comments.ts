import { Hono } from 'hono';
import { z } from 'zod';
import { requireAuth } from '../middleware/auth';
import { canComment } from '../utils/rbac';
import type { CloudflareBindings, Comment, JWTPayload } from '../types';

const commentsRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Validation schemas
const createCommentSchema = z.object({
  content: z.string().min(1).max(1000),
  article_id: z.number(),
  parent_comment_id: z.number().nullable().optional()
});

const updateCommentSchema = z.object({
  content: z.string().min(1).max(1000)
});

// Get comments for an article
commentsRouter.get('/article/:articleId', async (c) => {
  try {
    const db = c.env.DB;
    const articleId = parseInt(c.req.param('articleId'));
    
    const { results } = await db.prepare(`
      SELECT 
        c.*,
        u.nickname as user_nickname
      FROM comments c
      JOIN users u ON c.user_id = u.user_id
      WHERE c.article_id = ? AND c.is_deleted = 0
      ORDER BY c.created_at DESC
    `).bind(articleId).all();
    
    // Build comment tree
    const comments = results as (Comment & { user_nickname: string })[];
    const commentMap = new Map<number, Comment>();
    const rootComments: Comment[] = [];
    
    // First pass: create map
    comments.forEach(comment => {
      commentMap.set(comment.comment_id, { ...comment, replies: [] });
    });
    
    // Second pass: build hierarchy
    comments.forEach(comment => {
      const mappedComment = commentMap.get(comment.comment_id)!;
      if (comment.parent_comment_id === null) {
        rootComments.push(mappedComment);
      } else {
        const parent = commentMap.get(comment.parent_comment_id);
        if (parent) {
          parent.replies!.push(mappedComment);
        }
      }
    });
    
    return c.json({ comments: rootComments });
    
  } catch (error) {
    console.error('Get comments error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Create new comment (requires authentication)
commentsRouter.post('/', requireAuth, async (c) => {
  try {
    const user = c.get('user') as JWTPayload;
    
    if (!canComment(user)) {
      return c.json({ error: 'Insufficient permissions to comment' }, 403);
    }
    
    const body = await c.req.json();
    const validation = createCommentSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    const { content, article_id, parent_comment_id } = validation.data;
    const db = c.env.DB;
    
    // Check if article exists
    const article = await db.prepare(
      'SELECT article_id FROM articles WHERE article_id = ?'
    ).bind(article_id).first();
    
    if (!article) {
      return c.json({ error: 'Article not found' }, 404);
    }
    
    // Check if parent comment exists (if provided)
    if (parent_comment_id) {
      const parentComment = await db.prepare(
        'SELECT comment_id FROM comments WHERE comment_id = ? AND article_id = ?'
      ).bind(parent_comment_id, article_id).first();
      
      if (!parentComment) {
        return c.json({ error: 'Parent comment not found' }, 404);
      }
    }
    
    const result = await db.prepare(`
      INSERT INTO comments (content, article_id, user_id, parent_comment_id)
      VALUES (?, ?, ?, ?)
      RETURNING comment_id
    `).bind(content, article_id, user.user_id, parent_comment_id).first();
    
    if (!result) {
      return c.json({ error: 'Failed to create comment' }, 500);
    }
    
    return c.json({
      message: 'Comment created successfully',
      comment_id: result.comment_id
    }, 201);
    
  } catch (error) {
    console.error('Create comment error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Update comment (requires authentication)
commentsRouter.put('/:id', requireAuth, async (c) => {
  try {
    const user = c.get('user') as JWTPayload;
    const commentId = parseInt(c.req.param('id'));
    const db = c.env.DB;
    
    // Get comment to check ownership
    const comment = await db.prepare(
      'SELECT * FROM comments WHERE comment_id = ?'
    ).bind(commentId).first() as Comment | null;
    
    if (!comment) {
      return c.json({ error: 'Comment not found' }, 404);
    }
    
    // Check if user owns the comment or is admin
    if (comment.user_id !== user.user_id && user.role_id !== 1) {
      return c.json({ error: 'Insufficient permissions' }, 403);
    }
    
    const body = await c.req.json();
    const validation = updateCommentSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    await db.prepare(`
      UPDATE comments 
      SET content = ?, updated_at = CURRENT_TIMESTAMP
      WHERE comment_id = ?
    `).bind(validation.data.content, commentId).run();
    
    return c.json({ message: 'Comment updated successfully' });
    
  } catch (error) {
    console.error('Update comment error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Delete comment (soft delete, requires authentication)
commentsRouter.delete('/:id', requireAuth, async (c) => {
  try {
    const user = c.get('user') as JWTPayload;
    const commentId = parseInt(c.req.param('id'));
    const db = c.env.DB;
    
    // Get comment to check ownership
    const comment = await db.prepare(
      'SELECT * FROM comments WHERE comment_id = ?'
    ).bind(commentId).first() as Comment | null;
    
    if (!comment) {
      return c.json({ error: 'Comment not found' }, 404);
    }
    
    // Check if user owns the comment or is admin
    if (comment.user_id !== user.user_id && user.role_id !== 1) {
      return c.json({ error: 'Insufficient permissions' }, 403);
    }
    
    // Soft delete
    await db.prepare(`
      UPDATE comments 
      SET is_deleted = 1, updated_at = CURRENT_TIMESTAMP
      WHERE comment_id = ?
    `).bind(commentId).run();
    
    return c.json({ message: 'Comment deleted successfully' });
    
  } catch (error) {
    console.error('Delete comment error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default commentsRouter;