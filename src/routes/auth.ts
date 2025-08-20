import { Hono } from 'hono';
import { z } from 'zod';
import { hashPassword, verifyPassword, createJWT } from '../utils/auth';
import type { CloudflareBindings, User } from '../types';

const authRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Validation schemas
const registerSchema = z.object({
  email: z.string().email(),
  nickname: z.string().min(2).max(20),
  password: z.string().min(8).max(50)
});

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string()
});

// Register endpoint
authRouter.post('/register', async (c) => {
  try {
    const body = await c.req.json();
    const validation = registerSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    const { email, nickname, password } = validation.data;
    const db = c.env.DB;
    
    // Check if email or nickname already exists
    const existingUser = await db.prepare(
      'SELECT user_id FROM users WHERE email = ? OR nickname = ?'
    ).bind(email, nickname).first();
    
    if (existingUser) {
      return c.json({ error: 'Email or nickname already exists' }, 409);
    }
    
    // Hash password and create user
    const passwordHash = await hashPassword(password);
    const result = await db.prepare(
      `INSERT INTO users (email, nickname, password_hash, role_id) 
       VALUES (?, ?, ?, 5) RETURNING user_id`
    ).bind(email, nickname, passwordHash).first();
    
    if (!result) {
      return c.json({ error: 'Failed to create user' }, 500);
    }
    
    // Get user with role info
    const user = await db.prepare(
      `SELECT u.*, r.role_name 
       FROM users u 
       JOIN roles r ON u.role_id = r.role_id 
       WHERE u.user_id = ?`
    ).bind(result.user_id).first() as User & { role_name: string };
    
    // Create JWT token
    const token = await createJWT({
      user_id: user.user_id,
      email: user.email,
      nickname: user.nickname,
      role_id: user.role_id,
      role_name: user.role_name
    });
    
    return c.json({
      message: 'User registered successfully',
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
        nickname: user.nickname,
        role_name: user.role_name
      }
    }, 201);
    
  } catch (error) {
    console.error('Registration error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Login endpoint
authRouter.post('/login', async (c) => {
  try {
    const body = await c.req.json();
    const validation = loginSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    const { email, password } = validation.data;
    const db = c.env.DB;
    
    // Get user with role info
    const user = await db.prepare(
      `SELECT u.*, r.role_name 
       FROM users u 
       JOIN roles r ON u.role_id = r.role_id 
       WHERE u.email = ?`
    ).bind(email).first() as (User & { role_name: string }) | null;
    
    if (!user) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }
    
    // Verify password
    const isValid = await verifyPassword(password, user.password_hash!);
    if (!isValid) {
      return c.json({ error: 'Invalid credentials' }, 401);
    }
    
    // Create JWT token
    const token = await createJWT({
      user_id: user.user_id,
      email: user.email,
      nickname: user.nickname,
      role_id: user.role_id,
      role_name: user.role_name
    });
    
    return c.json({
      message: 'Login successful',
      token,
      user: {
        user_id: user.user_id,
        email: user.email,
        nickname: user.nickname,
        role_name: user.role_name
      }
    });
    
  } catch (error) {
    console.error('Login error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get current user endpoint
authRouter.get('/me', async (c) => {
  const user = c.get('user');
  
  if (!user) {
    return c.json({ error: 'Not authenticated' }, 401);
  }
  
  return c.json({ user });
});

export default authRouter;