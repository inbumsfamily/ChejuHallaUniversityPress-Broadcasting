-- 누락된 카테고리 추가
-- JEJU 관련 카테고리 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES
('제주소식', 'jeju-news-main', 'jeju'),
('제주 문화·예술', 'jeju-culture-art', 'jeju'),
('관광·맛집', 'jeju-tour-food', 'jeju');

-- OPINION 관련 카테고리 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES
('사설·칼럼', 'editorial-column', 'opinion'),
('교수칼럼', 'professor-column', 'opinion'),
('학생기고', 'student-contribution', 'opinion'),
('자유발언대', 'free-speech', 'opinion'),
('독자투고', 'reader-submission', 'opinion'),
('함께 읽는 책·영화 추천', 'book-movie-recommendation', 'opinion');

-- ESSAY 관련 카테고리 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES
('제주에서보내는시간', 'time-in-jeju', 'essay'),
('꿈과 희망', 'dreams-hopes', 'essay'),
('여행과 탐방', 'travel-exploration', 'essay'),
('문학과 예술', 'literature-art', 'essay'),
('이달의 테마 에세이', 'monthly-theme-essay', 'essay'),
('나만의 생각 정리', 'my-thoughts', 'essay');

-- SPECIAL 관련 카테고리 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES
('기획기사', 'special-report-main', 'special'),
('심층취재', 'in-depth-coverage', 'special'),
('연재기획', 'series-planning', 'special'),
('이슈분석', 'issue-analysis', 'special'),
('인터뷰 특집', 'interview-special', 'special'),
('데이터 저널리즘', 'data-journalism', 'special');

-- CAMPUS 카테고리 확인 및 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES
('대학소식', 'university-news', 'campus'),
('지우전(지금 우리 전공은)', 'our-major-now', 'campus'),
('동아리', 'clubs', 'campus'),
('학생활동', 'student-activities', 'campus'),
('캠퍼스 라이프', 'campus-life', 'campus'),
('장학·복지·지원', 'scholarship-welfare', 'campus');

-- SHORTS 카테고리 확인 및 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES
('단신뉴스', 'short-news', 'shorts'),
('오늘의 한마디', 'todays-word', 'shorts'),
('캠퍼스 스케치', 'campus-sketch', 'shorts'),
('SNS 화제', 'sns-trending', 'shorts'),
('숏폼 비디오', 'short-form-video', 'shorts'),
('카드뉴스', 'card-news', 'shorts');