import { Hono } from 'hono';
import type { CloudflareBindings, Category } from '../types';

const categoriesRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Get all categories with hierarchy
categoriesRouter.get('/', async (c) => {
  try {
    const db = c.env.DB;
    
    const { results } = await db.prepare(`
      SELECT * FROM categories 
      ORDER BY display_order, name
    `).all();
    
    // Build hierarchy
    const categories = results as Category[];
    const categoryMap = new Map<number, Category>();
    const rootCategories: Category[] = [];
    
    // First pass: create map
    categories.forEach(cat => {
      categoryMap.set(cat.category_id, { ...cat, children: [] });
    });
    
    // Second pass: build hierarchy
    categories.forEach(cat => {
      const category = categoryMap.get(cat.category_id)!;
      if (cat.parent_category_id === null) {
        rootCategories.push(category);
      } else {
        const parent = categoryMap.get(cat.parent_category_id);
        if (parent) {
          parent.children!.push(category);
        }
      }
    });
    
    return c.json({ categories: rootCategories });
    
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
      WHERE parent_category_id = ?
      ORDER BY display_order, name
    `).bind((category as Category).category_id).all();
    
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