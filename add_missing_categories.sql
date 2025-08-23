-- PRESS 서브카테고리 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES 
('한라춘추', 'halla-essay', 'press'),
('캠퍼스이슈', 'campus-issues', 'press'),
('제주뉴스', 'jeju-news', 'press'),
('오피니언', 'opinion', 'press'),
('문화', 'culture', 'press'),
('인물포커스', 'people-focus', 'press');

-- BROADCAST 서브카테고리 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES 
('방송국소개', 'introduction', 'broadcast'),
('CHEBS뉴스', 'chebs-news', 'broadcast'),
('제작프로그램', 'production', 'broadcast'),
('언론정보', 'press-info', 'broadcast'),
('방송편성표', 'schedule', 'broadcast'),
('수상작·공모전', 'awards', 'broadcast');