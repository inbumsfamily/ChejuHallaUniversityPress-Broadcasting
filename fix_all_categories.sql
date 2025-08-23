-- 모든 카테고리 삭제하고 처음부터 다시 생성
DELETE FROM categories;

-- BROADCAST 서브카테고리 (올바른 구조)
INSERT INTO categories (name, slug, parent_category) VALUES 
('방송국소개', 'broadcast-intro', 'broadcast'),
('연혁·편성안내', 'broadcast-history', 'broadcast'),
('조직도·만드는 사람들', 'broadcast-organization', 'broadcast'),
('PD모집·공지', 'broadcast-recruit', 'broadcast'),
('VOD·아카이브', 'broadcast-vod', 'broadcast'),
('방송국 활동기', 'broadcast-activities', 'broadcast');

-- PRESS 서브카테고리 (올바른 구조)
INSERT INTO categories (name, slug, parent_category) VALUES 
('신문사소개', 'press-intro', 'press'),
('연혁·발행안내', 'press-history', 'press'),
('조직도·만드는 사람들', 'press-organization', 'press'),
('기자모집·공지', 'press-recruit', 'press'),
('PDF·아카이브', 'press-archive', 'press'),
('신문사 활동기', 'press-activities', 'press');

-- 기존 PRESS 콘텐츠 카테고리들 (한라춘추 등)
INSERT INTO categories (name, slug, parent_category) VALUES 
('한라춘추', 'halla-essay', 'press'),
('캠퍼스이슈', 'campus-issues', 'press'),
('제주뉴스', 'jeju-news', 'press'),
('오피니언', 'opinion', 'press'),
('문화', 'culture', 'press'),
('인물포커스', 'people-focus', 'press');

-- 기존 BROADCAST 콘텐츠 카테고리들 (CHEBS뉴스 등)
INSERT INTO categories (name, slug, parent_category) VALUES 
('CHEBS뉴스', 'chebs-news', 'broadcast'),
('제작프로그램', 'production', 'broadcast'),
('언론정보', 'press-info', 'broadcast'),
('방송편성표', 'schedule', 'broadcast'),
('수상작·공모전', 'awards', 'broadcast');

-- 캠퍼스 카테고리
INSERT INTO categories (name, slug, parent_category) VALUES 
('대학소식', 'university-news', 'campus'),
('지우전(지금 우리 전공은)', 'our-major-now', 'campus'),
('동아리', 'clubs', 'campus'),
('학생활동', 'student-activities', 'campus'),
('캠퍼스 라이프', 'campus-life', 'campus'),
('장학·복지·지원', 'scholarship-welfare', 'campus'),
('X-파일', 'x-file', 'campus'),
('졸업생 인터뷰', 'alumni-interview', 'campus');

-- 쇼츠 카테고리
INSERT INTO categories (name, slug, parent_category) VALUES 
('한컷 뉴스', 'one-cut-news', 'shorts'),
('이슈 브리핑', 'issue-briefing', 'shorts'),
('익명소식', 'anonymous-news', 'shorts'),
('재학생 꿀팁', 'student-tips', 'shorts');

-- 기획보도 카테고리
INSERT INTO categories (name, slug, parent_category) VALUES 
('진로·취업', 'career-employment', 'special-report'),
('청년·지역', 'youth-region', 'special-report'),
('복지·권익', 'welfare-rights', 'special-report'),
('학술·연구', 'academic-research', 'special-report');

-- 제주소식 카테고리
INSERT INTO categories (name, slug, parent_category) VALUES 
('제주소식', 'jeju-news-main', 'jeju-news'),
('제주 문화·예술', 'jeju-culture-art', 'jeju-news'),
('관광·맛집', 'jeju-tour-food', 'jeju-news');

-- 오피니언 카테고리
INSERT INTO categories (name, slug, parent_category) VALUES 
('사설·칼럼', 'editorial-column', 'opinion'),
('교수칼럼', 'professor-column', 'opinion'),
('독자기고', 'reader-contribution', 'opinion'),
('익명의 목소리', 'anonymous-voice', 'opinion'),
('함께 읽는 책·영화 추천', 'book-movie-recommendation', 'opinion');

-- 에세이 카테고리
INSERT INTO categories (name, slug, parent_category) VALUES 
('제주에서보내는시간', 'time-in-jeju', 'essay'),
('꿈과 희망', 'dreams-hopes', 'essay'),
('여행과 탐방', 'travel-exploration', 'essay'),
('문학과 예술', 'literature-art', 'essay'),
('이달의 테마 에세이', 'monthly-theme-essay', 'essay'),
('나만의 생각 정리', 'my-thoughts', 'essay');