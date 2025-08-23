import { Hono } from 'hono';
import type { CloudflareBindings, Category } from '../types';

const categoriesRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Get all categories with hierarchy
categoriesRouter.get('/', async (c) => {
  try {
    const db = c.env.DB;
    
    const { results } = await db.prepare(`
      SELECT * FROM categories 
      ORDER BY parent_category, name
    `).all();
    
    // Group categories by parent
    const categoryGroups: { [key: string]: any[] } = {};
    
    if (results) {
      results.forEach((cat: any) => {
        const parent = cat.parent_category || 'root';
        if (!categoryGroups[parent]) {
          categoryGroups[parent] = [];
        }
        categoryGroups[parent].push(cat);
      });
    }
    
    // Build hierarchical structure
    const rootCategories = categoryGroups['root'] || [];
    
    // Add children to parent categories
    rootCategories.forEach((parent: any) => {
      parent.children = categoryGroups[parent.slug] || [];
    });
    
    return c.json({ categories: results || [] });
    
  } catch (error) {
    console.error('Get categories error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get single category by slug
categoriesRouter.get('/:slug', async (c) => {
  try {
    const db = c.env.DB;
    const slug = c.req.param('slug');
    
    const category = await db.prepare(`
      SELECT * FROM categories WHERE slug = ?
    `).bind(slug).first();
    
    if (!category) {
      return c.json({ error: 'Category not found' }, 404);
    }
    
    // Get children categories
    const { results: children } = await db.prepare(`
      SELECT * FROM categories 
      WHERE parent_category = ?
      ORDER BY name
    `).bind((category as any).slug).all();
    
    return c.json({ 
      category: {
        ...category,
        children
      }
    });
    
  } catch (error) {
    console.error('Get category error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default categoriesRouter;