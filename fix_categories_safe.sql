-- 기사들을 임시로 NULL로 설정
UPDATE articles SET category_id = NULL;

-- 모든 카테고리 삭제
DELETE FROM categories;

-- BROADCAST 서브카테고리 (방송국 정보)
INSERT INTO categories (name, slug, parent_category) VALUES 
('방송국소개', 'broadcast-intro', 'broadcast'),
('연혁·편성안내', 'broadcast-history', 'broadcast'),
('조직도·만드는 사람들', 'broadcast-organization', 'broadcast'),
('PD모집·공지', 'broadcast-recruit', 'broadcast'),
('VOD·아카이브', 'broadcast-vod', 'broadcast'),
('방송국 활동기', 'broadcast-activities', 'broadcast');

-- PRESS 서브카테고리 (신문사 정보)
INSERT INTO categories (name, slug, parent_category) VALUES 
('신문사소개', 'press-intro', 'press'),
('연혁·발행안내', 'press-history', 'press'),
('조직도·만드는 사람들', 'press-organization', 'press'),
('기자모집·공지', 'press-recruit', 'press'),
('PDF·아카이브', 'press-archive', 'press'),
('신문사 활동기', 'press-activities', 'press');