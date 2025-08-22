-- Comprehensive seed data for all categories
-- Clear existing articles for fresh start
DELETE FROM articles WHERE 1=1;

-- CAMPUS CATEGORY ARTICLES
-- 대학소식
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('2025학년도 제주한라대학교 입학식 성황리 개최', 
   'campus-entrance-2025', 
   '제주한라대학교가 2025학년도 신입생 입학식을 성황리에 개최했다. 조인범 교무처장은 "신입생들이 대학 생활에 빠르게 적응할 수 있도록 최선을 다하겠다"고 밝혔다.', 
   (SELECT category_id FROM categories WHERE slug = 'university-news'), 
   1, 523, 
   'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
   datetime('now', '-10 days')),
   
  ('제주한라대, 교육부 대학혁신지원사업 선정', 
   'innovation-project-2025', 
   '우리 대학이 교육부 대학혁신지원사업에 선정됐다. 박혜서 교수는 "학생 중심의 혁신적인 교육 모델을 구축하겠다"고 포부를 밝혔다.', 
   (SELECT category_id FROM categories WHERE slug = 'university-news'), 
   2, 412, 
   'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
   datetime('now', '-9 days'));

-- 지우전(지금 우리 전공은)
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, youtube_embed_id, created_at) VALUES 
  ('컴퓨터공학과 AI 개발자 양성 프로그램', 
   'cs-ai-program', 
   '컴퓨터공학과가 AI 시대를 선도할 개발자 양성 프로그램을 시작했다. 박한샘 부처장은 "실무 중심의 교육으로 경쟁력 있는 인재를 키우겠다"고 설명했다.', 
   (SELECT category_id FROM categories WHERE slug = 'our-major-now'), 
   3, 356, 
   'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800',
   'dQw4w9WgXcQ',
   datetime('now', '-8 days'));

-- 동아리
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('댄스동아리 HALLA WAVE 전국대회 우승', 
   'dance-club-victory', 
   '우리 대학 댄스동아리가 전국 대학 댄스 배틀에서 우승했다. 제주 해녀를 모티브로 한 창작 안무로 심사위원들의 극찬을 받았다.', 
   (SELECT category_id FROM categories WHERE slug = 'clubs'), 
   4, 678, 
   'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800',
   datetime('now', '-7 days'));

-- BROADCAST CATEGORY ARTICLES
-- 방송국소개
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, youtube_embed_id, created_at) VALUES 
  ('CHEBS 방송국 새단장 완료', 
   'chebs-renewal', 
   '제주한라대학교 교육방송국 CHEBS가 새로운 스튜디오와 장비로 새단장을 완료했다. 조인범 교수는 "최신 방송 장비로 더 나은 콘텐츠를 제작할 수 있게 됐다"고 말했다.', 
   (SELECT category_id FROM categories WHERE slug = 'broadcast/방송국소개'), 
   1, 456, 
   'dQw4w9WgXcQ',
   datetime('now', '-6 days'));

-- 연혁·편성안내
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('2025년 CHEBS 봄학기 편성표 공개', 
   'chebs-spring-schedule', 
   'CHEBS가 2025년 봄학기 정규 편성표를 공개했다. 새로운 프로그램들이 대거 추가되어 더욱 다채로운 방송을 선보일 예정이다.', 
   (SELECT category_id FROM categories WHERE slug = 'broadcast/연혁·편성안내'), 
   2, 234, 
   'https://images.unsplash.com/photo-1598743400863-0201c7e1445b?w=800',
   datetime('now', '-5 days'));

-- PRESS CATEGORY ARTICLES
-- 신문사소개
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주한라대 신문사 창간 50주년 기념식', 
   'press-50th-anniversary', 
   '우리 대학 신문사가 창간 50주년을 맞이했다. 박혜서 교수는 "반세기 동안 대학 언론의 중추 역할을 해온 신문사의 전통을 이어가겠다"고 축사를 전했다.', 
   (SELECT category_id FROM categories WHERE slug = 'press/신문사소개'), 
   3, 789, 
   'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
   datetime('now', '-4 days'));

-- 기자모집·공지
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('2025년 상반기 학생기자 모집', 
   'reporter-recruitment-2025', 
   '제주한라대 신문사가 2025년 상반기 학생기자를 모집한다. 박한샘 부처장은 "열정 있는 학생들의 많은 지원을 바란다"고 전했다.', 
   (SELECT category_id FROM categories WHERE slug = 'press/기자모집·공지'), 
   4, 345, 
   'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800',
   datetime('now', '-3 days'));

-- SHORTS CATEGORY ARTICLES
-- 한컷 뉴스
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('도서관 24시간 개방 시작', 
   'library-24hours', 
   '시험기간을 맞아 중앙도서관이 24시간 개방을 시작했다. 학생들의 학습 편의를 위한 조치다.', 
   (SELECT category_id FROM categories WHERE slug = 'one-cut-news'), 
   1, 567, 
   'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800',
   datetime('now', '-2 days'));

-- SPECIAL CATEGORY ARTICLES
-- 기획보도
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주 청년 일자리 현황 심층 분석', 
   'jeju-youth-employment', 
   '제주 지역 청년 일자리 문제를 심층 분석했다. 조인범 교수는 "지역 특성을 살린 일자리 창출이 필요하다"고 조언했다.', 
   (SELECT category_id FROM categories WHERE slug = 'special-report'), 
   2, 890, 
   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
   datetime('now', '-1 days'));

-- JEJU CATEGORY ARTICLES
-- 제주 청년 문화
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주 청년들의 문화 공간 탐방', 
   'jeju-youth-culture-space', 
   '제주도 내 청년들이 즐겨 찾는 문화 공간들을 소개한다. 박혜서 교수는 "청년 문화 활성화가 지역 발전의 원동력"이라고 말했다.', 
   (SELECT category_id FROM categories WHERE slug = 'jeju-youth-culture'), 
   3, 456, 
   'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800',
   datetime('now'));

-- ESSAY CATEGORY ARTICLES
-- 제주에서보내는시간
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('한라산 정상에서 바라본 새해', 
   'hallasan-new-year', 
   '한라산 정상에서 맞이한 2025년 새해 일출. 제주에서의 특별한 순간을 담았다.', 
   (SELECT category_id FROM categories WHERE slug = 'time-in-jeju'), 
   4, 234, 
   'https://images.unsplash.com/photo-1635776063043-47fa55bcd02c?w=800',
   datetime('now', '-12 days'));

-- OPINION CATEGORY ARTICLES
-- 교수칼럼
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('[교수칼럼] AI 시대, 대학교육의 방향', 
   'professor-column-ai-education', 
   '조인범 교수가 전하는 AI 시대 대학교육의 방향. "기술과 인문학의 융합이 핵심"이라고 강조했다.', 
   (SELECT category_id FROM categories WHERE slug = 'professor-column'), 
   1, 678, 
   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
   datetime('now', '-11 days'));