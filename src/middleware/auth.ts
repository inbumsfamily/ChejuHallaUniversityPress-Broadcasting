import { Context, Next } from 'hono';
import { verifyJWT } from '../utils/auth';
import { hasPermission, type Permission, type Section } from '../utils/rbac';
import type { JWTPayload } from '../types';

export async function authMiddleware(c: Context, next: Next) {
  const authHeader = c.req.header('Authorization');
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    c.set('user', null);
    return next();
  }
  
  const token = authHeader.substring(7);
  const user = await verifyJWT(token);
  
  c.set('user', user);
  return next();
}

export function requireAuth(c: Context, next: Next) {
  const user = c.get('user') as JWTPayload | null;
  
  if (!user) {
    return c.json({ error: 'Authentication required' }, 401);
  }
  
  return next();
}

export function requirePermission(section: Section, permission: Permission) {
  return async (c: Context, next: Next) => {
    const user = c.get('user') as JWTPayload | null;
    
    if (!hasPermission(user, section, permission)) {
      return c.json({ error: 'Insufficient permissions' }, 403);
    }
    
    return next();
  };
}

export function requireRole(...roleIds: number[]) {
  return async (c: Context, next: Next) => {
    const user = c.get('user') as JWTPayload | null;
    
    if (!user || !roleIds.includes(user.role_id)) {
      return c.json({ error: 'Insufficient role permissions' }, 403);
    }
    
    return next();
  };
}