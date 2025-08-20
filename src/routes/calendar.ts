import { Hono } from 'hono';
import { z } from 'zod';
import { requireAuth, requireRole } from '../middleware/auth';
import type { CloudflareBindings, AcademicCalendarEvent } from '../types';

const calendarRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Validation schemas
const createEventSchema = z.object({
  event_date_start: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  event_date_end: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).nullable().optional(),
  title: z.string().min(1).max(255),
  description: z.string().optional().nullable(),
  source: z.enum(['scraped', 'manual']).optional().default('manual')
});

const updateEventSchema = createEventSchema.partial();

// Get calendar events
calendarRouter.get('/', async (c) => {
  try {
    const db = c.env.DB;
    const year = c.req.query('year');
    const month = c.req.query('month');
    
    let query = `
      SELECT * FROM academic_calendar_events
      WHERE 1=1
    `;
    const params: any[] = [];
    
    if (year && month) {
      query += ` AND (
        strftime('%Y-%m', event_date_start) = ? OR
        strftime('%Y-%m', event_date_end) = ? OR
        (event_date_start <= ? AND event_date_end >= ?)
      )`;
      const yearMonth = `${year}-${month.padStart(2, '0')}`;
      const monthStart = `${yearMonth}-01`;
      const monthEnd = `${yearMonth}-31`;
      params.push(yearMonth, yearMonth, monthEnd, monthStart);
    } else if (year) {
      query += ` AND strftime('%Y', event_date_start) = ?`;
      params.push(year);
    }
    
    query += ' ORDER BY event_date_start ASC';
    
    const { results } = await db.prepare(query).bind(...params).all();
    
    return c.json({ events: results });
    
  } catch (error) {
    console.error('Get calendar events error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Get single event
calendarRouter.get('/:id', async (c) => {
  try {
    const db = c.env.DB;
    const eventId = parseInt(c.req.param('id'));
    
    const event = await db.prepare(
      'SELECT * FROM academic_calendar_events WHERE event_id = ?'
    ).bind(eventId).first();
    
    if (!event) {
      return c.json({ error: 'Event not found' }, 404);
    }
    
    return c.json({ event });
    
  } catch (error) {
    console.error('Get event error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Create new event (admin only)
calendarRouter.post('/', requireAuth, requireRole(1), async (c) => {
  try {
    const body = await c.req.json();
    const validation = createEventSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    const data = validation.data;
    const db = c.env.DB;
    
    const result = await db.prepare(`
      INSERT INTO academic_calendar_events (
        event_date_start, event_date_end, title, description, source
      ) VALUES (?, ?, ?, ?, ?)
      RETURNING event_id
    `).bind(
      data.event_date_start,
      data.event_date_end,
      data.title,
      data.description,
      data.source
    ).first();
    
    if (!result) {
      return c.json({ error: 'Failed to create event' }, 500);
    }
    
    return c.json({
      message: 'Event created successfully',
      event_id: result.event_id
    }, 201);
    
  } catch (error) {
    console.error('Create event error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Update event (admin only)
calendarRouter.put('/:id', requireAuth, requireRole(1), async (c) => {
  try {
    const eventId = parseInt(c.req.param('id'));
    const db = c.env.DB;
    
    // Check if event exists
    const event = await db.prepare(
      'SELECT * FROM academic_calendar_events WHERE event_id = ?'
    ).bind(eventId).first();
    
    if (!event) {
      return c.json({ error: 'Event not found' }, 404);
    }
    
    const body = await c.req.json();
    const validation = updateEventSchema.safeParse(body);
    
    if (!validation.success) {
      return c.json({ error: 'Invalid input', details: validation.error.flatten() }, 400);
    }
    
    const data = validation.data;
    const updates: string[] = [];
    const values: any[] = [];
    
    if (data.event_date_start !== undefined) {
      updates.push('event_date_start = ?');
      values.push(data.event_date_start);
    }
    
    if (data.event_date_end !== undefined) {
      updates.push('event_date_end = ?');
      values.push(data.event_date_end);
    }
    
    if (data.title !== undefined) {
      updates.push('title = ?');
      values.push(data.title);
    }
    
    if (data.description !== undefined) {
      updates.push('description = ?');
      values.push(data.description);
    }
    
    if (data.source !== undefined) {
      updates.push('source = ?');
      values.push(data.source);
    }
    
    if (updates.length === 0) {
      return c.json({ message: 'No updates provided' });
    }
    
    updates.push('last_updated = CURRENT_TIMESTAMP');
    values.push(eventId);
    
    await db.prepare(
      `UPDATE academic_calendar_events SET ${updates.join(', ')} WHERE event_id = ?`
    ).bind(...values).run();
    
    return c.json({ message: 'Event updated successfully' });
    
  } catch (error) {
    console.error('Update event error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

// Delete event (admin only)
calendarRouter.delete('/:id', requireAuth, requireRole(1), async (c) => {
  try {
    const eventId = parseInt(c.req.param('id'));
    const db = c.env.DB;
    
    // Check if event exists
    const event = await db.prepare(
      'SELECT * FROM academic_calendar_events WHERE event_id = ?'
    ).bind(eventId).first();
    
    if (!event) {
      return c.json({ error: 'Event not found' }, 404);
    }
    
    await db.prepare(
      'DELETE FROM academic_calendar_events WHERE event_id = ?'
    ).bind(eventId).run();
    
    return c.json({ message: 'Event deleted successfully' });
    
  } catch (error) {
    console.error('Delete event error:', error);
    return c.json({ error: 'Internal server error' }, 500);
  }
});

export default calendarRouter;