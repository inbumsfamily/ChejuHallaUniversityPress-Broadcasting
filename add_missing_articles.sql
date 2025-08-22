-- JEJU 카테고리 기사 추가
-- 제주 문화·예술
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('제주 해녀 문화, UNESCO 인류무형문화유산의 가치', 'jeju-haenyeo-unesco', '<p>제주 해녀 문화가 UNESCO 인류무형문화유산으로 지정된 지 8년째를 맞이했습니다. 조인범 교수는 "해녀 문화는 제주의 정체성을 대표하는 소중한 유산"이라고 강조했습니다.</p><p>박혜서 문화평론가는 "해녀들의 공동체 문화와 생태적 지혜는 현대 사회가 배워야 할 중요한 가치"라고 평가했습니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'jeju-culture-art'), 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', 234, datetime('now', '-5 days'));

INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('제주 4·3 미술제, 역사와 예술의 만남', 'jeju-43-art-festival', '<p>제주 4·3 미술제가 올해로 15회를 맞이했습니다. 박한샘 큐레이터는 "예술을 통해 역사적 아픔을 치유하고 기억하는 의미 있는 전시"라고 소개했습니다.</p><p>이번 미술제에는 국내외 작가 50여 명이 참여하여 4·3의 역사를 다양한 시각으로 재해석한 작품들을 선보입니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'jeju-culture-art'), 'https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800', 189, datetime('now', '-3 days'));

-- 제주소식
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('제주도, 탄소중립 2030 로드맵 발표', 'jeju-carbon-neutral-2030', '<p>제주도가 2030년까지 탄소중립을 달성하기 위한 구체적인 로드맵을 발표했습니다. 조인범 환경정책 교수는 "제주가 대한민국 탄소중립의 선도 모델이 될 것"이라고 전망했습니다.</p><p>주요 계획으로는 전기차 100% 전환, 재생에너지 확대, 스마트그리드 구축 등이 포함되어 있습니다.</p>', 3, (SELECT category_id FROM categories WHERE slug = 'jeju-news-main'), 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=800', 567, datetime('now', '-10 days'));

-- 관광·맛집
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('제주 흑돼지 거리, 미식 관광의 새로운 명소로', 'jeju-black-pork-street', '<p>제주시 흑돼지 거리가 미식 관광객들의 필수 코스로 자리잡았습니다. 박혜서 관광학과 교수는 "제주 흑돼지는 이제 세계적인 미식 브랜드가 되었다"고 평가했습니다.</p><p>특히 외국인 관광객들 사이에서 제주 흑돼지 구이는 한국 방문 시 꼭 먹어봐야 할 음식으로 꼽히고 있습니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'jeju-tour-food'), 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800', 892, datetime('now', '-2 days'));

-- OPINION 카테고리 기사 추가
-- 사설·칼럼
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('[사설] 대학 교육의 미래, 변화가 필요한 시점', 'editorial-future-education', '<p>4차 산업혁명 시대를 맞아 대학 교육의 패러다임 전환이 시급합니다. 조인범 교육혁신센터장은 "기존의 주입식 교육에서 벗어나 창의적 문제해결 능력을 기르는 교육으로 전환해야 한다"고 강조했습니다.</p><p>특히 AI와 빅데이터 시대에 맞는 융합형 인재 양성이 대학의 새로운 과제로 떠오르고 있습니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'editorial-column'), 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', 445, datetime('now', '-7 days'));

-- 교수칼럼
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('[교수칼럼] 지속가능한 제주 관광의 미래 - 박혜서 교수', 'professor-column-sustainable-tourism', '<p>제주 관광이 양적 성장에서 질적 성장으로 전환해야 할 시점입니다. 박혜서 관광경영학과 교수는 "오버투어리즘 문제를 해결하고 지속가능한 관광 모델을 구축해야 한다"고 제언했습니다.</p><p>특히 지역주민과 관광객이 상생할 수 있는 관광 생태계 조성이 중요하다고 강조했습니다.</p>', 3, (SELECT category_id FROM categories WHERE slug = 'professor-column'), 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', 356, datetime('now', '-4 days'));

-- 학생기고
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('[학생기고] 청년의 눈으로 본 제주의 미래', 'student-view-jeju-future', '<p>제주한라대학교 학생회장 김민수입니다. 청년의 시각에서 본 제주의 미래는 도전과 기회가 공존하는 곳입니다. 박한샘 청년정책 연구원은 "청년들이 제주에 정착할 수 있는 환경 조성이 중요하다"고 조언했습니다.</p><p>일자리 창출, 주거 문제 해결, 창업 지원 등 청년 정책의 확대가 필요한 시점입니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'student-contribution'), 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800', 278, datetime('now', '-1 day'));

-- ESSAY 카테고리 기사 추가
-- 제주에서보내는시간
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('[에세이] 한라산 정상에서 만난 나', 'essay-hallasan-myself', '<p>새벽 4시, 한라산 등반을 시작했습니다. 조인범 교수와 함께한 이번 등반은 단순한 산행이 아닌 자아 성찰의 시간이었습니다.</p><p>백록담에 도착했을 때의 그 감동은 말로 표현할 수 없었습니다. "산은 우리에게 겸손을 가르쳐준다"는 교수님의 말씀이 가슴 깊이 새겨졌습니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'time-in-jeju'), 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800', 423, datetime('now', '-6 days'));

-- 꿈과 희망
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('[에세이] 제주에서 꿈꾸는 청춘의 이야기', 'essay-youth-dreams-jeju', '<p>제주에서 대학 생활을 시작한 지 3년, 이곳은 나에게 꿈을 키우는 터전이 되었습니다. 박혜서 교수님은 "청춘의 꿈은 어디서든 피어날 수 있다"고 격려해주셨습니다.</p><p>제주의 아름다운 자연과 따뜻한 사람들 속에서 나의 꿈은 더욱 선명해지고 있습니다.</p>', 3, (SELECT category_id FROM categories WHERE slug = 'dreams-hopes'), 'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800', 345, datetime('now', '-8 days'));

-- SPECIAL 카테고리 기사 추가
-- 기획기사
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('[기획] 제주한라대학교 창립 50주년, 그 발자취를 돌아보다', 'special-chu-50years', '<p>제주한라대학교가 창립 50주년을 맞이했습니다. 조인범 총장은 "지난 50년간 제주 지역 인재 양성의 요람 역할을 충실히 수행해왔다"고 평가했습니다.</p><p>박혜서 기획처장은 "앞으로 50년은 글로벌 대학으로 도약하는 시기가 될 것"이라고 전망했습니다. 박한샘 동문회장은 "모교의 발전을 위해 동문들이 적극 지원하겠다"고 약속했습니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'special-report-main'), 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', 789, datetime('now', '-12 days'));

-- 심층취재
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('[심층취재] 제주 청년 일자리 문제, 해법은 있는가', 'in-depth-youth-employment', '<p>제주 청년 실업률이 전국 평균을 웃도는 가운데, 청년 일자리 문제 해결이 시급한 과제로 떠올랐습니다. 3개월간의 심층 취재 결과를 공개합니다.</p><p>박한샘 고용노동청장은 "산학협력을 통한 맞춤형 인재 양성이 핵심"이라고 강조했습니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'in-depth-coverage'), 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800', 567, datetime('now', '-9 days'));