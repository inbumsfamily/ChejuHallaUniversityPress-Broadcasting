-- Disable foreign key checks temporarily
PRAGMA foreign_keys = OFF;

-- Clear existing data that depends on categories
DELETE FROM articles;
DELETE FROM comments;

-- Clear existing categories
DELETE FROM categories;

-- Re-enable foreign key checks
PRAGMA foreign_keys = ON;

-- Insert main categories
INSERT INTO categories (category_id, name, slug, parent_category_id, display_order) VALUES
  (1, '홈', 'home', NULL, 1),
  (2, '방송국', 'broadcast', NULL, 2),
  (3, '신문사', 'newspaper', NULL, 3),
  (4, '캠퍼스', 'campus', NULL, 4),
  (5, '쇼츠', 'shorts', NULL, 5),
  (6, '기획보도', 'special-report', NULL, 6),
  (7, '제주소식', 'jeju-news', NULL, 7),
  (8, '오피니언', 'opinion', NULL, 8),
  (9, '에세이', 'essay', NULL, 9);

-- Insert sub-categories for 방송국
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('방송국소개', 'broadcast-intro', 2, 1),
  ('한라뉴스', 'halla-news', 2, 2),
  ('한라인터뷰', 'halla-interview', 2, 3),
  ('전공특집', 'major-special', 2, 4),
  ('캠퍼스투어', 'campus-tour', 2, 5),
  ('문화·예술(방송)', 'culture-art-broadcast', 2, 6),
  ('라디오·팟캐스트', 'radio-podcast', 2, 7),
  ('방송국 활동기', 'broadcast-activities', 2, 8);

-- Insert sub-categories for 신문사
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('신문사소개', 'newspaper-intro', 3, 1),
  ('현장취재', 'field-coverage', 3, 2),
  ('캠퍼스 리포트', 'campus-report', 3, 3),
  ('신문사 활동기', 'newspaper-activities', 3, 4);

-- Insert sub-categories for 캠퍼스
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('대학소식', 'university-news', 4, 1),
  ('지우전(지금 우리 전공은)', 'our-major-now', 4, 2),
  ('동아리', 'clubs', 4, 3),
  ('학생활동', 'student-activities', 4, 4),
  ('캠퍼스 라이프', 'campus-life', 4, 5),
  ('장학·복지·지원', 'scholarship-welfare', 4, 6),
  ('X-파일', 'x-file', 4, 7),
  ('졸업생 인터뷰', 'alumni-interview', 4, 8);

-- Insert sub-categories for 쇼츠
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('한컷 뉴스', 'one-cut-news', 5, 1),
  ('이슈 브리핑', 'issue-briefing', 5, 2),
  ('익명소식', 'anonymous-news', 5, 3),
  ('재학생 꿀팁', 'student-tips', 5, 4);

-- Insert sub-categories for 기획보도
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('진로·취업', 'career-employment', 6, 1),
  ('청년·지역', 'youth-region', 6, 2),
  ('복지·권익', 'welfare-rights', 6, 3),
  ('학술·연구', 'academic-research', 6, 4);

-- Insert sub-categories for 제주소식
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('제주이슈', 'jeju-issue', 7, 1),
  ('문화탐방', 'culture-exploration', 7, 2),
  ('환경과 자연', 'environment-nature', 7, 3),
  ('청년 창업', 'youth-startup', 7, 4),
  ('제주전통마을', 'jeju-traditional-village', 7, 5);

-- Insert sub-categories for 오피니언
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('사설·칼럼', 'editorial-column', 8, 1),
  ('교수 칼럼', 'professor-column', 8, 2),
  ('독자 의견·제안', 'reader-opinion', 8, 3),
  ('익명 목소리', 'anonymous-voice', 8, 4),
  ('함께 읽는 책·영화 추천', 'book-movie-recommendation', 8, 5);

-- Insert sub-categories for 에세이
INSERT INTO categories (name, slug, parent_category_id, display_order) VALUES
  ('제주에서 보내는 시간', 'time-in-jeju', 9, 1),
  ('꿈과 희망', 'dreams-hopes', 9, 2),
  ('여행과 탐방', 'travel-exploration', 9, 3),
  ('문학과 예술', 'literature-art', 9, 4),
  ('이달의 테마 에세이', 'monthly-theme-essay', 9, 5),
  ('나만의 생각 정리', 'my-thoughts', 9, 6);