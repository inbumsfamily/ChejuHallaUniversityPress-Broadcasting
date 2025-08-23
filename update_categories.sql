-- 기사들의 카테고리 ID를 새로운 카테고리로 업데이트
UPDATE articles SET category_id = 89 WHERE category_id = 1;  -- 방송국소개
UPDATE articles SET category_id = 90 WHERE category_id = 2;  -- CHEBS뉴스
UPDATE articles SET category_id = 91 WHERE category_id = 3;  -- 제작프로그램
UPDATE articles SET category_id = 92 WHERE category_id = 4;  -- 언론정보
UPDATE articles SET category_id = 93 WHERE category_id = 5;  -- 방송편성표
UPDATE articles SET category_id = 94 WHERE category_id = 6;  -- 수상작·공모전

-- 이제 old 카테고리 삭제
DELETE FROM categories WHERE category_id IN (1, 2, 3, 4, 5, 6);