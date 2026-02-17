import { Hono } from 'hono';
import { z } from 'zod';
import { requireAuth, requireRole } from '../middleware/auth';
import { defaultSiteMenuConfig, siteMenuConfigSchema } from '../utils/site-config';
import type { CloudflareBindings } from '../types';

const adminRouter = new Hono<{ Bindings: CloudflareBindings }>();

const updateRoleSchema = z.object({
  role_id: z.number().int().min(1).max(5)
});

const updateSiteConfigSchema = z.object({
  config: siteMenuConfigSchema
});

async function ensureSiteSettingsTable(db: D1Database) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS site_settings (
      setting_id INTEGER PRIMARY KEY AUTOINCREMENT,
      setting_key TEXT UNIQUE NOT NULL,
      setting_value TEXT,
      setting_type TEXT DEFAULT 'json',
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `).run();
}

async function getSiteMenuConfig(db: D1Database) {
  await ensureSiteSettingsTable(db);

  const row = await db
    .prepare('SELECT setting_value FROM site_settings WHERE setting_key = ?')
    .bind('site_menu_config')
    .first<{ setting_value: string }>();

  if (!row?.setting_value) {
    return defaultSiteMenuConfig;
  }

  try {
    const parsed = JSON.parse(row.setting_value);
    const validated = siteMenuConfigSchema.safeParse(parsed);
    if (!validated.success) {
      return defaultSiteMenuConfig;
    }
    return validated.data;
  } catch {
    return defaultSiteMenuConfig;
  }
}

adminRouter.get('/site-config/public', async (c) => {
  const db = c.env.DB;
  const config = await getSiteMenuConfig(db);
  return c.json({ config });
});

adminRouter.get('/roles', requireAuth, requireRole(1), async (c) => {
  const db = c.env.DB;
  const { results } = await db.prepare('SELECT role_id, role_name FROM roles ORDER BY role_id ASC').all();
  return c.json({ roles: results || [] });
});

adminRouter.get('/users', requireAuth, requireRole(1), async (c) => {
  const db = c.env.DB;
  const { results } = await db.prepare(`
    SELECT u.user_id, u.email, u.nickname, u.role_id, r.role_name, u.created_at
    FROM users u
    JOIN roles r ON u.role_id = r.role_id
    ORDER BY u.created_at DESC
  `).all();

  return c.json({ users: results || [] });
});

adminRouter.put('/users/:id/role', requireAuth, requireRole(1), async (c) => {
  const userId = Number(c.req.param('id'));

  if (!Number.isInteger(userId) || userId <= 0) {
    return c.json({ error: 'Invalid user id' }, 400);
  }

  const body = await c.req.json();
  const parsed = updateRoleSchema.safeParse(body);

  if (!parsed.success) {
    return c.json({ error: 'Invalid input', details: parsed.error.flatten() }, 400);
  }

  const db = c.env.DB;

  const roleExists = await db.prepare('SELECT role_id FROM roles WHERE role_id = ?').bind(parsed.data.role_id).first();
  if (!roleExists) {
    return c.json({ error: 'Role not found' }, 404);
  }

  const targetUser = await db.prepare('SELECT user_id FROM users WHERE user_id = ?').bind(userId).first();
  if (!targetUser) {
    return c.json({ error: 'User not found' }, 404);
  }

  await db.prepare('UPDATE users SET role_id = ?, updated_at = CURRENT_TIMESTAMP WHERE user_id = ?')
    .bind(parsed.data.role_id, userId)
    .run();

  return c.json({ message: 'User role updated successfully' });
});

adminRouter.get('/site-config', requireAuth, requireRole(1), async (c) => {
  const db = c.env.DB;
  const config = await getSiteMenuConfig(db);
  return c.json({ config });
});

adminRouter.put('/site-config', requireAuth, requireRole(1), async (c) => {
  const body = await c.req.json();
  const parsed = updateSiteConfigSchema.safeParse(body);

  if (!parsed.success) {
    return c.json({ error: 'Invalid site config input', details: parsed.error.flatten() }, 400);
  }

  const db = c.env.DB;
  await ensureSiteSettingsTable(db);

  await db.prepare(`
    INSERT INTO site_settings (setting_key, setting_value, setting_type, updated_at)
    VALUES (?, ?, 'json', CURRENT_TIMESTAMP)
    ON CONFLICT(setting_key)
    DO UPDATE SET setting_value = excluded.setting_value, updated_at = CURRENT_TIMESTAMP
  `).bind('site_menu_config', JSON.stringify(parsed.data.config)).run();

  return c.json({ message: 'Site menu config updated successfully', config: parsed.data.config });
});

export default adminRouter;
