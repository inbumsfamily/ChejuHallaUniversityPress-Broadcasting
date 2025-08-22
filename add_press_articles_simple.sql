-- PRESS 카테고리에 샘플 기사 추가
-- 각 서브카테고리에 최소 2개씩 기사 추가

-- 신문사소개 카테고리 기사 추가
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('제주한라대학교 신문사, 새로운 도약을 위한 비전 발표', 'jeju-halla-press-new-vision', '<p>제주한라대학교 신문사가 2025년 새로운 비전을 발표했습니다. 조인범 지도교수는 "디지털 시대에 맞춰 온라인 콘텐츠를 강화하고, 학생 기자들의 역량 개발에 힘쓸 것"이라고 밝혔습니다.</p><p>박혜서 주간은 "학생들의 목소리를 더욱 적극적으로 담아내는 신문을 만들겠다"고 포부를 전했습니다. 신문사는 웹사이트 개편과 함께 유튜브 채널도 새롭게 운영할 예정입니다.</p><p>박한샘 부주간은 "제주 지역 이슈를 심도 있게 다루며 지역사회와 소통하는 언론이 되겠다"고 강조했습니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'press/신문사소개'), 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=800', 142, datetime('now', '-5 days'));

INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('한라춘추, 디지털 전환으로 새로운 도약', 'halla-chunchu-digital-transformation', '<p>제주한라대학교 신문 한라춘추가 전면 디지털 전환을 선언했습니다. 종이신문과 함께 온라인 플랫폼을 강화하여 더 많은 독자들과 소통할 계획입니다.</p><p>신문사는 모바일 최적화된 웹사이트와 함께 SNS 채널을 활성화하여 실시간 뉴스 전달에 나설 예정입니다. 특히 제주 지역의 주요 이슈를 심층 취재하는 탐사보도팀도 새롭게 구성됩니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'press/신문사소개'), 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800', 89, datetime('now', '-3 days'));

-- 연혁·발행안내 카테고리 기사 추가
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('한라춘추 창간 50주년 특별 기획전 개최', 'halla-chunchu-50th-anniversary', '<p>제주한라대학교 신문사가 한라춘추 창간 50주년을 맞아 특별 기획전을 개최합니다. 지난 50년간의 역사를 되돌아보며 미래 비전을 제시하는 자리가 마련됩니다.</p><p>박혜서 교수는 "반세기 동안 대학 언론의 역할을 충실히 수행해온 한라춘추의 발자취를 돌아보는 의미 있는 행사"라고 설명했습니다.</p>', 3, (SELECT category_id FROM categories WHERE slug = 'press/연혁·발행안내'), 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800', 234, datetime('now', '-10 days'));

INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('2025년 한라춘추 발행 일정 안내', 'halla-chunchu-2025-schedule', '<p>2025년 한라춘추 발행 일정이 확정되었습니다. 월간 발행을 기본으로 하며, 특별호와 증간호도 예정되어 있습니다.</p><p>3월 신입생 환영호, 5월 축제 특집호, 10월 개교기념 특별호 등이 계획되어 있으며, 매월 첫째 주 월요일에 정기 발행됩니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'press/연혁·발행안내'), 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800', 156, datetime('now', '-7 days'));

-- 조직도·만드는 사람들 카테고리 기사 추가
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('2025년 신문사 새 편집국장 임명', 'new-editor-chief-2025', '<p>제주한라대학교 신문사의 새로운 편집국장으로 관광경영학과 3학년 김민수 학생이 임명되었습니다. 김 편집국장은 "학생들의 목소리를 대변하는 언론이 되도록 노력하겠다"고 포부를 밝혔습니다.</p><p>조인범 지도교수는 "열정과 능력을 갖춘 새로운 리더십으로 신문사가 한 단계 도약할 것으로 기대한다"고 격려했습니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'press/조직도·만드는 사람들'), 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800', 198, datetime('now', '-4 days'));

INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('신문사 기자단, 언론인 워크숍 참가', 'press-workshop-participation', '<p>한라춘추 기자단이 제주언론인클럽 주최 워크숍에 참가했습니다. 박한샘 부주간을 비롯한 10명의 기자들이 참여하여 취재 기법과 기사 작성법을 배웠습니다.</p><p>이번 워크숍에서는 디지털 저널리즘과 데이터 저널리즘에 대한 특강도 진행되어 큰 호응을 얻었습니다.</p>', 3, (SELECT category_id FROM categories WHERE slug = 'press/조직도·만드는 사람들'), 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800', 167, datetime('now', '-2 days'));

-- 신문사 활동기 카테고리 기사 추가
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('한라춘추 기자단, 제주 올레길 탐방 취재', 'press-olle-trail-coverage', '<p>한라춘추 기자단이 제주 올레길 7코스를 탐방하며 특별 취재를 진행했습니다. 제주의 자연과 문화를 담은 심층 기사를 준비 중입니다.</p><p>박혜서 지도교수는 "현장 취재를 통해 생생한 기사를 작성하는 것이 중요하다"며 기자들을 격려했습니다. 이번 취재 내용은 다음 호 특집 기사로 게재될 예정입니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'press/신문사 활동기'), 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800', 289, datetime('now', '-6 days'));

INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('신문사 봉사활동, 지역 어르신들과 함께', 'press-volunteer-activity', '<p>한라춘추 기자단이 제주시 노인복지관에서 봉사활동을 펼쳤습니다. 어르신들의 인생 이야기를 듣고 기록하는 "우리동네 역사 프로젝트"의 일환입니다.</p><p>참여한 기자들은 "어르신들의 소중한 이야기를 기록으로 남길 수 있어 뜻깊었다"고 소감을 전했습니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'press/신문사 활동기'), 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800', 176, datetime('now', '-1 day'));

-- 기자모집·공지 카테고리 기사 추가
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('2025년 상반기 한라춘추 신입기자 모집', 'recruit-new-reporters-2025', '<p>제주한라대학교 신문사 한라춘추에서 2025년 상반기 신입기자를 모집합니다. 취재기자, 사진기자, 영상기자 등 다양한 분야에서 활동할 인재를 찾고 있습니다.</p><p>지원 자격은 제주한라대학교 재학생이며, 언론에 관심과 열정이 있는 학생이라면 누구나 지원 가능합니다. 서류 마감은 3월 15일까지입니다.</p><p>조인범 지도교수는 "새로운 시각과 열정을 가진 학생들의 많은 지원을 바란다"고 전했습니다.</p>', 3, (SELECT category_id FROM categories WHERE slug = 'press/기자모집·공지'), 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800', 412, datetime('now', '-8 days'));

INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('한라춘추 편집회의 정기 일정 안내', 'editorial-meeting-schedule', '<p>2025년 한라춘추 편집회의 일정을 안내합니다. 매주 화요일 오후 5시 신문사 회의실에서 진행되며, 모든 기자단의 참석이 필요합니다.</p><p>회의에서는 기사 아이템 선정, 취재 계획 수립, 원고 검토 등이 이루어집니다.</p>', 1, (SELECT category_id FROM categories WHERE slug = 'press/기자모집·공지'), 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800', 234, datetime('now'));

-- PDF·지난호 아카이브 카테고리 기사 추가
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('한라춘추 디지털 아카이브 구축 완료', 'digital-archive-complete', '<p>한라춘추의 과거 발행물을 디지털화한 아카이브 시스템이 구축 완료되었습니다. 1975년 창간호부터 최근호까지 모든 신문을 온라인에서 열람할 수 있습니다.</p><p>박한샘 기술팀장은 "PDF 형식으로 저장된 자료들을 쉽게 검색하고 다운로드할 수 있도록 시스템을 구성했다"고 설명했습니다.</p>', 2, (SELECT category_id FROM categories WHERE slug = 'press/PDF·지난호 아카이브'), 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800', 345, datetime('now', '-9 days'));

INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, featured_image_url, view_count, created_at) VALUES
('특별 기획: 한라춘추 50년 명작선 발간', 'special-edition-50years', '<p>한라춘추 창간 50주년을 기념하여 지난 50년간의 명작 기사를 모은 특별판이 발간됩니다. 시대별 주요 기사와 화제작을 선별하여 수록했습니다.</p><p>박혜서 편집위원장은 "대학 언론의 역사를 한눈에 볼 수 있는 소중한 자료가 될 것"이라고 기대감을 표했습니다.</p>', 3, (SELECT category_id FROM categories WHERE slug = 'press/PDF·지난호 아카이브'), 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800', 567, datetime('now', '-11 days'));