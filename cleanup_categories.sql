-- 잘못된 slug를 가진 old 카테고리 삭제
DELETE FROM categories WHERE slug LIKE 'broadcast/%' AND slug LIKE '%한글%';
DELETE FROM categories WHERE slug LIKE 'broadcast/방송국소개';
DELETE FROM categories WHERE slug LIKE 'broadcast/CHEBS뉴스';
DELETE FROM categories WHERE slug LIKE 'broadcast/제작프로그램';
DELETE FROM categories WHERE slug LIKE 'broadcast/언론정보';
DELETE FROM categories WHERE slug LIKE 'broadcast/방송편성표';
DELETE FROM categories WHERE slug LIKE 'broadcast/수상작·공모전';

-- 올바른 카테고리만 유지 (영어 slug)
-- introduction, chebs-news, production, press-info, schedule, awards