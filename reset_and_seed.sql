-- Clear existing data
DELETE FROM articles WHERE 1=1;
DELETE FROM categories WHERE 1=1;
DELETE FROM users WHERE 1=1;

-- Reset sequences
DELETE FROM sqlite_sequence WHERE name='articles';
DELETE FROM sqlite_sequence WHERE name='categories';
DELETE FROM sqlite_sequence WHERE name='users';

-- Insert default users
INSERT INTO users (email, password, nickname, role) VALUES 
  ('admin@jeju-halla.ac.kr', 'password123', '관리자', 'admin'),
  ('editor1@jeju-halla.ac.kr', 'password123', '편집부 기자', 'editor'),
  ('editor2@jeju-halla.ac.kr', 'password123', '취재부 기자', 'editor'),
  ('student1@jeju-halla.ac.kr', 'password123', '학생기자', 'student'),
  ('student2@jeju-halla.ac.kr', 'password123', '학생PD', 'student');

-- Insert all categories with correct structure
-- BROADCAST categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('방송국소개', 'broadcast/방송국소개', 'broadcast'),
  ('연혁·편성안내', 'broadcast/연혁·편성안내', 'broadcast'),
  ('조직도·만드는 사람들', 'broadcast/조직도·만드는 사람들', 'broadcast'),
  ('PD모집·공지', 'broadcast/PD모집·공지', 'broadcast'),
  ('VOD·아카이브', 'broadcast/VOD·아카이브', 'broadcast'),
  ('방송국 활동기', 'broadcast/방송국 활동기', 'broadcast');

-- PRESS categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('신문사소개', 'press/신문사소개', 'press'),
  ('연혁·발행안내', 'press/연혁·발행안내', 'press'),
  ('조직도·만드는 사람들', 'press/조직도·만드는 사람들', 'press'),
  ('기자모집·공지', 'press/기자모집·공지', 'press'),
  ('PDF·지난호 아카이브', 'press/PDF·지난호 아카이브', 'press'),
  ('신문사 활동기', 'press/신문사 활동기', 'press');

-- CAMPUS categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('대학소식', 'university-news', 'campus'),
  ('지우전(지금 우리 전공은)', 'our-major-now', 'campus'),
  ('동아리', 'clubs', 'campus'),
  ('학생활동', 'student-activities', 'campus'),
  ('캠퍼스 라이프', 'campus-life', 'campus'),
  ('장학·복지·지원', 'scholarship-welfare', 'campus'),
  ('X-파일', 'x-file', 'campus'),
  ('졸업생 인터뷰', 'alumni-interview', 'campus');

-- SHORTS categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('한컷 뉴스', 'one-cut-news', 'shorts'),
  ('이슈 브리핑', 'issue-briefing', 'shorts'),
  ('익명소식', 'anonymous-news', 'shorts'),
  ('재학생 꿀팁', 'student-tips', 'shorts');

-- SPECIAL categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('기획보도', 'special-report', 'special'),
  ('심층취재', 'deep-coverage', 'special'),
  ('인터뷰', 'interview', 'special'),
  ('리뷰', 'review', 'special');

-- JEJU categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('제주 청년 문화', 'jeju-youth-culture', 'jeju'),
  ('제주도 탐방', 'jeju-exploration', 'jeju'),
  ('관광과 여행', 'tourism-travel', 'jeju'),
  ('제주의 환경', 'jeju-environment', 'jeju');

-- ESSAY categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('제주에서보내는시간', 'time-in-jeju', 'essay'),
  ('꿈과 희망', 'dreams-hopes', 'essay'),
  ('여행과 탐방', 'travel-exploration', 'essay'),
  ('문학과 예술', 'literature-art', 'essay'),
  ('이달의 테마 에세이', 'monthly-theme-essay', 'essay'),
  ('나만의 생각 정리', 'my-thoughts', 'essay');

-- OPINION categories
INSERT INTO categories (name, slug, parent_category) VALUES 
  ('사설·칼럼', 'editorial-column', 'opinion'),
  ('교수칼럼', 'professor-column', 'opinion'),
  ('독자기고', 'reader-contribution', 'opinion'),
  ('익명의 목소리', 'anonymous-voice', 'opinion'),
  ('함께 읽는 책·영화 추천', 'book-movie-recommendation', 'opinion');