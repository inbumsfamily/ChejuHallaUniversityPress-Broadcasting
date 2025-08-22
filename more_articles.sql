-- More comprehensive articles for all categories

-- CAMPUS - 학생활동
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('총학생회 2025년 등록금 동결 협상 성공', 
   'student-council-tuition-freeze', 
   '제52대 총학생회가 2025학년도 등록금 동결을 이끌어냈다. 학생회장은 "학생들의 부담을 덜 수 있게 되어 다행"이라고 밝혔다.', 
   (SELECT category_id FROM categories WHERE slug = 'student-activities'), 
   1, 1234, 
   'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
   datetime('now', '-15 days'));

-- CAMPUS - 캠퍼스 라이프
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주한라대 벚꽃 명소 BEST 5', 
   'campus-cherry-blossom-spots', 
   '봄을 맞아 캠퍼스 내 벚꽃 명소를 소개한다. 박혜서 교수는 "아름다운 캠퍼스가 학생들의 자부심"이라고 말했다.', 
   (SELECT category_id FROM categories WHERE slug = 'campus-life'), 
   2, 567, 
   'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800',
   datetime('now', '-14 days'));

-- CAMPUS - 장학·복지·지원
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('2025년 신규 장학금 제도 안내', 
   'new-scholarship-2025', 
   '우리 대학이 2025년부터 새로운 장학금 제도를 시행한다. 조인범 교수는 "더 많은 학생들이 혜택을 받을 수 있도록 확대했다"고 설명했다.', 
   (SELECT category_id FROM categories WHERE slug = 'scholarship-welfare'), 
   3, 890, 
   'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800',
   datetime('now', '-13 days'));

-- CAMPUS - X-파일
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('캠퍼스 미스터리: 도서관 3층의 비밀', 
   'library-mystery', 
   '도서관 3층에서 들리는 이상한 소리의 정체는? 학생들 사이에서 화제가 되고 있는 캠퍼스 미스터리를 파헤쳐본다.', 
   (SELECT category_id FROM categories WHERE slug = 'x-file'), 
   4, 456, 
   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
   datetime('now', '-12 days'));

-- CAMPUS - 졸업생 인터뷰
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('삼성전자 입사한 컴공과 졸업생 인터뷰', 
   'alumni-samsung-interview', 
   '삼성전자에 입사한 컴퓨터공학과 졸업생을 만났다. 박한샘 부처장은 "후배들의 롤모델이 되어 자랑스럽다"고 축하했다.', 
   (SELECT category_id FROM categories WHERE slug = 'alumni-interview'), 
   1, 789, 
   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
   datetime('now', '-11 days'));

-- BROADCAST - 조직도·만드는 사람들
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('2025년 CHEBS 신임 국장단 선출', 
   'chebs-new-directors', 
   'CHEBS 방송국의 새로운 국장단이 선출됐다. 조인범 교수는 "열정적인 학생들이 방송국을 이끌어갈 것"이라고 기대감을 표했다.', 
   (SELECT category_id FROM categories WHERE slug = 'broadcast/조직도·만드는 사람들'), 
   2, 345, 
   'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800',
   datetime('now', '-10 days'));

-- BROADCAST - PD모집·공지
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, youtube_embed_id, created_at) VALUES 
  ('CHEBS 신입 PD 모집 안내', 
   'chebs-pd-recruitment', 
   '방송국이 2025년 신입 PD를 모집한다. 영상 제작에 관심 있는 학생들의 많은 지원을 바란다.', 
   (SELECT category_id FROM categories WHERE slug = 'broadcast/PD모집·공지'), 
   3, 234, 
   'dQw4w9WgXcQ',
   datetime('now', '-9 days'));

-- BROADCAST - VOD·아카이브
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, youtube_embed_id, created_at) VALUES 
  ('2024년 CHEBS 방송 하이라이트', 
   'chebs-2024-highlights', 
   '2024년 한 해 동안 CHEBS가 제작한 방송 프로그램 하이라이트를 공개한다.', 
   (SELECT category_id FROM categories WHERE slug = 'broadcast/VOD·아카이브'), 
   4, 567, 
   'dQw4w9WgXcQ',
   datetime('now', '-8 days'));

-- BROADCAST - 방송국 활동기
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('CHEBS 워크숍 in 서귀포', 
   'chebs-workshop-seogwipo', 
   '방송국 구성원들이 서귀포에서 워크숍을 진행했다. 박혜서 교수는 "팀워크를 다지는 좋은 기회였다"고 평가했다.', 
   (SELECT category_id FROM categories WHERE slug = 'broadcast/방송국 활동기'), 
   1, 456, 
   'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800',
   datetime('now', '-7 days'));

-- PRESS - 연혁·발행안내
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주한라대 신문 500호 발행', 
   'press-500th-issue', 
   '우리 대학 신문이 500호를 발행했다. 조인범 교수는 "대학 언론의 역사를 이어가는 중요한 이정표"라고 축하했다.', 
   (SELECT category_id FROM categories WHERE slug = 'press/연혁·발행안내'), 
   2, 678, 
   'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
   datetime('now', '-6 days'));

-- PRESS - 조직도·만드는 사람들
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('신문사 편집부 새 체제 출범', 
   'press-new-editorial', 
   '신문사 편집부가 새로운 체제로 출범했다. 박한샘 부처장은 "젊은 감각으로 신선한 기사를 제공하겠다"고 포부를 밝혔다.', 
   (SELECT category_id FROM categories WHERE slug = 'press/조직도·만드는 사람들'), 
   3, 345, 
   'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?w=800',
   datetime('now', '-5 days'));

-- SHORTS - 이슈 브리핑
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('이번 주 캠퍼스 핫이슈 TOP 3', 
   'weekly-hot-issues', 
   '이번 주 캠퍼스에서 가장 화제가 된 이슈들을 정리했다.', 
   (SELECT category_id FROM categories WHERE slug = 'issue-briefing'), 
   4, 890, 
   'https://images.unsplash.com/photo-1495020689067-958852a7765e?w=800',
   datetime('now', '-4 days'));

-- SPECIAL - 심층취재
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주 관광산업과 대학생 일자리', 
   'jeju-tourism-jobs', 
   '제주 관광산업이 대학생 일자리에 미치는 영향을 심층 분석했다. 박혜서 교수는 "지역 산업과 대학의 연계가 중요하다"고 강조했다.', 
   (SELECT category_id FROM categories WHERE slug = 'deep-coverage'), 
   1, 1234, 
   'https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?w=800',
   datetime('now', '-3 days'));

-- JEJU - 제주도 탐방
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주 올레길 완주 도전기', 
   'jeju-olle-trail', 
   '제주 올레길 전 코스를 완주한 학생들의 도전기. 제주의 아름다운 자연을 만끽했다.', 
   (SELECT category_id FROM categories WHERE slug = 'jeju-exploration'), 
   2, 567, 
   'https://images.unsplash.com/photo-1635776063043-47fa55bcd02c?w=800',
   datetime('now', '-2 days'));

-- ESSAY - 꿈과 희망
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('나의 꿈을 향한 도전', 
   'my-dream-challenge', 
   '의사가 되고 싶은 간호학과 학생의 진솔한 이야기. 조인범 교수는 "꿈을 향한 열정이 아름답다"고 격려했다.', 
   (SELECT category_id FROM categories WHERE slug = 'dreams-hopes'), 
   3, 456, 
   'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800',
   datetime('now', '-1 days'));

-- OPINION - 사설·칼럼
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('[사설] 대학 혁신의 시대, 우리의 선택은', 
   'editorial-university-innovation', 
   '대학 혁신이 필요한 시대, 제주한라대학교가 나아가야 할 방향을 제시한다.', 
   (SELECT category_id FROM categories WHERE slug = 'editorial-column'), 
   4, 789, 
   'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800',
   datetime('now'));