-- Roles table
CREATE TABLE IF NOT EXISTS roles (
  role_id INTEGER PRIMARY KEY AUTOINCREMENT,
  role_name TEXT UNIQUE NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Users table
CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  nickname TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role_id INTEGER NOT NULL DEFAULT 5,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (role_id) REFERENCES roles(role_id)
);

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  category_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  parent_category_id INTEGER,
  display_order INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (parent_category_id) REFERENCES categories(category_id)
);

-- Articles table
CREATE TABLE IF NOT EXISTS articles (
  article_id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  author_id INTEGER NOT NULL,
  category_id INTEGER NOT NULL,
  status TEXT CHECK(status IN ('draft', 'published', 'archived')) DEFAULT 'draft',
  featured_image_url TEXT,
  youtube_embed_id TEXT,
  article_type TEXT CHECK(article_type IN ('normal', 'shorts')) DEFAULT 'normal',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  published_at DATETIME,
  view_count INTEGER DEFAULT 0,
  FOREIGN KEY (author_id) REFERENCES users(user_id),
  FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

-- Comments table
CREATE TABLE IF NOT EXISTS comments (
  comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT NOT NULL,
  article_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,
  parent_comment_id INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  is_deleted BOOLEAN DEFAULT 0,
  FOREIGN KEY (article_id) REFERENCES articles(article_id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (parent_comment_id) REFERENCES comments(comment_id)
);

-- Academic calendar events table
CREATE TABLE IF NOT EXISTS academic_calendar_events (
  event_id INTEGER PRIMARY KEY AUTOINCREMENT,
  event_date_start DATE NOT NULL,
  event_date_end DATE,
  title TEXT NOT NULL,
  description TEXT,
  source TEXT CHECK(source IN ('scraped', 'manual')) DEFAULT 'manual',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Site settings table
CREATE TABLE IF NOT EXISTS site_settings (
  setting_id INTEGER PRIMARY KEY AUTOINCREMENT,
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT,
  setting_type TEXT CHECK(setting_type IN ('text', 'json', 'boolean', 'number')) DEFAULT 'text',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_articles_status ON articles(status);
CREATE INDEX IF NOT EXISTS idx_articles_category ON articles(category_id);
CREATE INDEX IF NOT EXISTS idx_articles_author ON articles(author_id);
CREATE INDEX IF NOT EXISTS idx_articles_published_at ON articles(published_at);
CREATE INDEX IF NOT EXISTS idx_articles_slug ON articles(slug);
CREATE INDEX IF NOT EXISTS idx_comments_article ON comments(article_id);
CREATE INDEX IF NOT EXISTS idx_comments_user ON comments(user_id);
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_academic_events_date ON academic_calendar_events(event_date_start);

-- Insert default roles
INSERT OR IGNORE INTO roles (role_id, role_name) VALUES 
  (1, '관리자'),
  (2, '편집기자'),
  (3, '방송PD'),
  (4, '프리미엄회원'),
  (5, '일반회원');

-- Insert default categories
INSERT OR IGNORE INTO categories (slug, name, parent_category_id, display_order) VALUES
  -- Main categories
  ('broadcasting', '방송국', NULL, 1),
  ('newspaper', '신문사', NULL, 2),
  ('special-report', '기획보도', NULL, 3),
  ('shorts', '쇼츠', NULL, 4),
  ('campus', '캠퍼스', NULL, 5),
  
  -- Broadcasting subcategories
  ('halla-news', '한라뉴스', 1, 1),
  ('field-coverage', '현장취재', 1, 2),
  ('studio-program', '스튜디오', 1, 3),
  
  -- Newspaper subcategories
  ('news', '뉴스', 2, 1),
  ('column', '칼럼', 2, 2),
  ('culture', '문화', 2, 3),
  ('interview', '인터뷰', 2, 4),
  
  -- Special report subcategories
  ('investigation', '탐사보도', 3, 1),
  ('series', '연재기획', 3, 2),
  
  -- Shorts subcategories
  ('one-cut-news', '한컷뉴스', 4, 1),
  ('issue-briefing', '이슈브리핑', 4, 2),
  
  -- Campus subcategories
  ('notice', '공지사항', 5, 1),
  ('student-activities', '학생활동', 5, 2),
  ('academic-calendar', '학사일정', 5, 3);

-- Insert default site settings
INSERT OR IGNORE INTO site_settings (setting_key, setting_value, setting_type) VALUES
  ('site_title', '제주한라대학교 신문방송사', 'text'),
  ('site_description', '제주한라대학교 신문방송사 공식 웹사이트', 'text'),
  ('contact_email', 'news@chu.ac.kr', 'text'),
  ('contact_phone', '064-741-7000', 'text'),
  ('address', '제주특별자치도 제주시 한라대학로 38', 'text'),
  ('maintenance_mode', 'false', 'boolean'),
  ('posts_per_page', '12', 'number');