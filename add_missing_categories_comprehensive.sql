-- 누락된 카테고리들 추가

-- CAMPUS 관련 카테고리 추가
INSERT OR IGNORE INTO categories (name, slug, parent_category, created_at) VALUES
('대학소식', 'university-news', 'campus', '2024-08-25 12:00:00'),
('지우전(지금 우리 전공은)', 'our-major-now', 'campus', '2024-08-25 12:00:00'),
('동아리', 'clubs', 'campus', '2024-08-25 12:00:00'),
('학생활동', 'student-activities', 'campus', '2024-08-25 12:00:00'),
('캠퍼스 라이프', 'campus-life', 'campus', '2024-08-25 12:00:00'),
('장학·복지·지원', 'scholarship-welfare', 'campus', '2024-08-25 12:00:00'),
('X-파일', 'x-file', 'campus', '2024-08-25 12:00:00'),
('졸업생 인터뷰', 'alumni-interview', 'campus', '2024-08-25 12:00:00'),

-- SPECIAL REPORT 관련 카테고리 추가  
('진로·취업', 'career-employment', 'special', '2024-08-25 12:00:00'),
('청년·지역', 'youth-region', 'special', '2024-08-25 12:00:00'),
('복지·권익', 'welfare-rights', 'special', '2024-08-25 12:00:00'),
('학술·연구', 'academic-research', 'special', '2024-08-25 12:00:00'),

-- SHORTS 관련 카테고리 추가
('한컷 뉴스', 'one-cut-news', 'shorts', '2024-08-25 12:00:00'),
('이슈 브리핑', 'issue-briefing', 'shorts', '2024-08-25 12:00:00'),
('익명소식', 'anonymous-news', 'shorts', '2024-08-25 12:00:00'),
('재학생 꿀팁', 'student-tips', 'shorts', '2024-08-25 12:00:00'),

-- JEJU NEWS 관련 카테고리 추가
('제주소식', 'jeju-news-main', 'jeju', '2024-08-25 12:00:00'),
('제주 문화·예술', 'jeju-culture-art', 'jeju', '2024-08-25 12:00:00'),
('관광·맛집', 'jeju-tour-food', 'jeju', '2024-08-25 12:00:00'),

-- ESSAY 관련 카테고리 추가
('제주에서보내는시간', 'time-in-jeju', 'essay', '2024-08-25 12:00:00'),
('꿈과 희망', 'dreams-hopes', 'essay', '2024-08-25 12:00:00'),
('여행과 탐방', 'travel-exploration', 'essay', '2024-08-25 12:00:00'),
('문학과 예술', 'literature-art', 'essay', '2024-08-25 12:00:00'),
('이달의 테마 에세이', 'monthly-theme-essay', 'essay', '2024-08-25 12:00:00'),
('나만의 생각 정리', 'my-thoughts', 'essay', '2024-08-25 12:00:00'),

-- OPINION 관련 카테고리 추가
('사설·칼럼', 'editorial-column', 'opinion', '2024-08-25 12:00:00'),
('교수칼럼', 'professor-column', 'opinion', '2024-08-25 12:00:00'),
('독자기고', 'reader-contribution', 'opinion', '2024-08-25 12:00:00'),
('익명의 목소리', 'anonymous-voice', 'opinion', '2024-08-25 12:00:00'),
('함께 읽는 책·영화 추천', 'book-movie-recommendation', 'opinion', '2024-08-25 12:00:00');