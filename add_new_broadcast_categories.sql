-- Delete old broadcast categories
DELETE FROM categories WHERE parent_category = 'broadcast';

-- Add new broadcast categories
INSERT INTO categories (name, slug, parent_category) VALUES
('방송국소개', 'broadcast/방송국소개', 'broadcast'),
('CHEBS뉴스', 'broadcast/CHEBS뉴스', 'broadcast'),
('제작프로그램', 'broadcast/제작프로그램', 'broadcast'),
('언론정보', 'broadcast/언론정보', 'broadcast'),
('방송편성표', 'broadcast/방송편성표', 'broadcast'),
('수상작·공모전', 'broadcast/수상작·공모전', 'broadcast');