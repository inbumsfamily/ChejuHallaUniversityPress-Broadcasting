-- BROADCAST 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('제주한라대학교 방송국 2024년 활동 계획 발표', '방송국이 2024년 새로운 활동 계획을 발표했습니다.', 'broadcast-2024-plan', 1, (SELECT category_id FROM categories WHERE slug = 'broadcast-intro')),
('방송국 50년 역사와 새로운 편성 안내', '방송국이 개국 50주년을 맞아 특별 편성을 준비했습니다.', 'broadcast-50years', 1, (SELECT category_id FROM categories WHERE slug = 'broadcast-history')),
('2024년 방송국 조직 개편', '방송국이 2024년 새로운 조직으로 개편되었습니다.', 'broadcast-org-2024', 1, (SELECT category_id FROM categories WHERE slug = 'broadcast-organization'));

-- PRESS 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('제주한라대학교 신문사 창간 45주년', '신문사가 창간 45주년을 맞아 기념식을 개최했습니다.', 'press-45th', 1, (SELECT category_id FROM categories WHERE slug = 'press-intro')),
('신문사 월간 발행 체제 전환', '신문사가 월간 발행 체제로 전환합니다.', 'press-monthly', 1, (SELECT category_id FROM categories WHERE slug = 'press-history')),
('신문사 새 편집진 소개', '2024년 신문사 새 편집진을 소개합니다.', 'press-new-team', 1, (SELECT category_id FROM categories WHERE slug = 'press-organization'));

-- 캠퍼스 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('2024학년도 신입생 오리엔테이션', '신입생 오리엔테이션이 성황리에 개최되었습니다.', 'campus-orientation', 1, (SELECT category_id FROM categories WHERE slug = 'university-news')),
('컴퓨터공학과 AI 경진대회 우승', '우리 대학 컴퓨터공학과 학생들이 전국 AI 경진대회에서 우승했습니다.', 'cs-ai-winner', 1, (SELECT category_id FROM categories WHERE slug = 'our-major-now'));

-- 쇼츠 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('[한컷뉴스] 도서관 24시간 개방', '기말고사 기간 도서관 24시간 개방이 시작되었습니다.', 'shorts-library', 1, (SELECT category_id FROM categories WHERE slug = 'one-cut-news')),
('[이슈브리핑] 학생회 선거 일정 확정', '2024년 학생회 선거 일정이 확정되었습니다.', 'shorts-election', 1, (SELECT category_id FROM categories WHERE slug = 'issue-briefing'));

-- 기획보도 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('[기획] 졸업생 취업률 85% 달성', '졸업생 취업률 85%를 달성한 비결을 분석합니다.', 'special-employment', 1, (SELECT category_id FROM categories WHERE slug = 'career-employment')),
('[기획] 제주 청년 정책 심층 분석', '제주도의 청년 지원 정책을 심층 분석했습니다.', 'special-youth', 1, (SELECT category_id FROM categories WHERE slug = 'youth-region'));

-- 제주소식 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('제주도 청년 지원 정책 확대', '제주도가 청년 지원 정책을 대폭 확대합니다.', 'jeju-youth-support', 1, (SELECT category_id FROM categories WHERE slug = 'jeju-news-main')),
('제주 국제 영화제 개막', '제주 국제 영화제가 성대하게 개막했습니다.', 'jeju-film-festival', 1, (SELECT category_id FROM categories WHERE slug = 'jeju-culture-art'));

-- 오피니언 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('[사설] 대학 교육의 미래', 'AI 시대 대학 교육의 방향을 제시합니다.', 'opinion-future', 1, (SELECT category_id FROM categories WHERE slug = 'editorial-column')),
('[교수칼럼] 지속가능한 발전을 위해', '김영수 교수가 지속가능한 발전에 대해 논합니다.', 'prof-column-1', 1, (SELECT category_id FROM categories WHERE slug = 'professor-column'));

-- 에세이 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
VALUES 
('제주의 봄, 캠퍼스 벚꽃', '캠퍼스에 핀 벚꽃 이야기를 전합니다.', 'essay-spring', 1, (SELECT category_id FROM categories WHERE slug = 'time-in-jeju')),
('꿈을 향한 첫걸음', '대학생활의 첫 시작을 되돌아봅니다.', 'essay-dream', 1, (SELECT category_id FROM categories WHERE slug = 'dreams-hopes'));