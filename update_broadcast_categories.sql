-- Update existing categories
UPDATE categories SET name = 'CHEBS뉴스', slug = 'broadcast/CHEBS뉴스' 
WHERE slug = 'broadcast/연혁·편성안내';

UPDATE categories SET name = '제작프로그램', slug = 'broadcast/제작프로그램' 
WHERE slug = 'broadcast/조직도·만드는 사람들';

UPDATE categories SET name = '언론정보', slug = 'broadcast/언론정보' 
WHERE slug = 'broadcast/PD모집·공지';

UPDATE categories SET name = '방송편성표', slug = 'broadcast/방송편성표' 
WHERE slug = 'broadcast/VOD·아카이브';

UPDATE categories SET name = '수상작·공모전', slug = 'broadcast/수상작·공모전' 
WHERE slug = 'broadcast/방송국 활동기';

-- Check if categories exist and insert if not
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES
('방송국소개', 'broadcast/방송국소개', 'broadcast'),
('CHEBS뉴스', 'broadcast/CHEBS뉴스', 'broadcast'),
('제작프로그램', 'broadcast/제작프로그램', 'broadcast'),
('언론정보', 'broadcast/언론정보', 'broadcast'),
('방송편성표', 'broadcast/방송편성표', 'broadcast'),
('수상작·공모전', 'broadcast/수상작·공모전', 'broadcast');