export interface User {
  user_id: number;
  email: string;
  nickname: string;
  password_hash?: string;
  role_id: number;
  role_name?: string;
  created_at: string;
  updated_at: string;
}

export interface Role {
  role_id: number;
  role_name: string;
  created_at: string;
}

export interface Category {
  category_id: number;
  name: string;
  slug: string;
  parent_category_id: number | null;
  display_order: number;
  created_at: string;
  children?: Category[];
}

export interface Article {
  article_id: number;
  title: string;
  slug: string;
  content: string;
  author_id: number;
  author_name?: string;
  category_id: number;
  category_name?: string;
  status: 'draft' | 'published' | 'archived';
  featured_image_url: string | null;
  youtube_embed_id: string | null;
  article_type: 'normal' | 'shorts';
  created_at: string;
  updated_at: string;
  published_at: string | null;
  view_count: number;
}

export interface Comment {
  comment_id: number;
  content: string;
  article_id: number;
  user_id: number;
  user_nickname?: string;
  parent_comment_id: number | null;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  replies?: Comment[];
}

export interface AcademicCalendarEvent {
  event_id: number;
  event_date_start: string;
  event_date_end: string | null;
  title: string;
  description: string | null;
  source: 'scraped' | 'manual';
  created_at: string;
  last_updated: string;
}

export interface SiteSetting {
  setting_id: number;
  setting_key: string;
  setting_value: string | null;
  setting_type: 'text' | 'json' | 'boolean' | 'number';
  updated_at: string;
}

export interface JWTPayload {
  user_id: number;
  email: string;
  nickname: string;
  role_id: number;
  role_name: string;
  exp: number;
  iat: number;
}

export interface CloudflareBindings {
  DB: D1Database;
  R2: R2Bucket;
  JWT_SECRET?: string;
}