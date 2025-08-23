-- BROADCAST 카테고리 샘플 기사 추가
INSERT INTO articles (title, content, slug, author_id, category_id, featured_image_url) 
SELECT 
  '제주한라대학교 방송국 2024년 활동 계획 발표',
  '제주한라대학교 방송국이 2024년 새로운 활동 계획을 발표했습니다. 올해는 더욱 다양한 프로그램과 콘텐츠로 학생들과 소통할 예정입니다. 

방송국은 학내 주요 행사 중계, 교수 인터뷰 프로그램, 학생 토크쇼 등 다양한 콘텐츠를 준비하고 있습니다. 특히 올해는 유튜브 채널을 활성화하여 더 많은 학생들이 방송을 접할 수 있도록 할 계획입니다.

김민수 방송국장은 "올해는 학생들의 목소리를 더욱 적극적으로 담아내는 방송국이 되겠다"고 포부를 밝혔습니다. 또한 "새로운 PD 모집도 진행 중이니 많은 관심 부탁드린다"고 덧붙였습니다.

방송국은 매주 정기 방송을 진행하며, 특별 프로그램도 수시로 제작할 예정입니다. 학생들의 많은 참여와 관심을 기대합니다.',
  'broadcast-2024-plan',
  1,
  (SELECT category_id FROM categories WHERE slug = 'broadcast-intro'),
  'https://picsum.photos/800/400?random=101'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'broadcast-2024-plan');

INSERT INTO articles (title, content, slug, author_id, category_id) 
SELECT 
  '방송국 50년 역사와 새로운 편성 안내',
  '제주한라대학교 방송국이 개국 50주년을 맞아 특별 편성을 준비했습니다. 1974년 설립된 방송국은 그동안 수많은 인재를 배출했습니다.

새로운 편성표에는 아침 정보 프로그램, 점심 음악방송, 저녁 토크쇼 등이 포함됩니다. 특히 학생들의 요청이 많았던 심야 라디오 프로그램도 신설됩니다.

역대 방송국 출신 선배들의 축하 메시지도 이어지고 있습니다. MBC 아나운서로 활동 중인 이영희 선배는 "모교 방송국이 50년의 역사를 이어온 것을 축하한다"고 전했습니다.',
  'broadcast-50years-history',
  1,
  (SELECT category_id FROM categories WHERE slug = 'broadcast-history'),
  'https://picsum.photos/800/400?random=102'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'broadcast-50years-history');

INSERT INTO articles (title, content, slug, author_id, category_id) 
SELECT 
  '2024년 방송국 조직 개편 및 새로운 제작진 소개',
  '제주한라대학교 방송국이 2024년 새로운 조직으로 개편되었습니다. 이번 개편으로 더욱 효율적인 방송 제작이 가능해질 전망입니다.

새로운 조직도에는 뉴스부, 교양부, 예능부, 기술부 등 4개 부서가 있으며, 각 부서별로 전문 PD들이 배치되었습니다. 

국장: 김민수 (신문방송학과 3학년)
뉴스부장: 이지은 (언론정보학과 3학년)
교양부장: 박성호 (미디어콘텐츠학과 2학년)
예능부장: 최유진 (방송영상학과 3학년)
기술부장: 정태영 (컴퓨터공학과 2학년)

각 부서는 협력하여 양질의 콘텐츠를 제작할 예정입니다.',
  'broadcast-organization-2024',
  1,
  (SELECT category_id FROM categories WHERE slug = 'broadcast-organization'),
  'https://picsum.photos/800/400?random=103'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'broadcast-organization-2024');

-- PRESS 카테고리 샘플 기사 추가
INSERT INTO articles (title, content, slug, author_id, category_id) 
SELECT 
  '제주한라대학교 신문사 창간 45주년 기념식 개최',
  '제주한라대학교 신문사가 창간 45주년을 맞아 기념식을 개최했습니다. 이날 행사에는 역대 편집장들과 기자들이 참석했습니다.

신문사는 1979년 창간 이래 꾸준히 학내 소식을 전달하며 대학 언론의 역할을 충실히 수행해왔습니다. 특히 학생들의 권익 신장과 대학 발전을 위한 비판적 목소리를 내는 데 앞장서왔습니다.

현재 편집장인 김서연 학생은 "선배들이 쌓아온 전통을 이어받아 더욱 발전하는 신문사가 되겠다"고 다짐했습니다.',
  'press-45th-anniversary',
  1,
  (SELECT category_id FROM categories WHERE slug = 'press-intro'),
  'https://picsum.photos/800/400?random=104'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'press-45th-anniversary');

INSERT INTO articles (title, content, slug, author_id, category_id) 
SELECT 
  '신문사 월간 발행 체제 전환 및 디지털 플랫폼 강화',
  '제주한라대학교 신문사가 기존 격주 발행에서 월간 발행 체제로 전환합니다. 대신 온라인 기사는 매일 업데이트하여 신속한 뉴스 전달에 주력할 계획입니다.

이번 변화는 변화하는 미디어 환경에 적응하고, 더 깊이 있는 기획 기사를 생산하기 위한 결정입니다. 월간 인쇄 신문은 심층 기획과 분석 기사 중심으로 구성됩니다.

디지털 플랫폼도 대폭 개선됩니다. 모바일 최적화된 웹사이트와 SNS 채널을 통해 실시간 소식을 전달할 예정입니다.',
  'press-monthly-publication',
  1,
  (SELECT category_id FROM categories WHERE slug = 'press-history'),
  'https://picsum.photos/800/400?random=105'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'press-monthly-publication');

-- 캠퍼스 카테고리 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id, featured_image_url) 
SELECT 
  '2024학년도 신입생 오리엔테이션 성황리 개최',
  '제주한라대학교 2024학년도 신입생 오리엔테이션이 성황리에 개최되었습니다. 약 1,500명의 신입생이 참석한 가운데 다양한 프로그램이 진행되었습니다.

오리엔테이션에서는 대학 생활 안내, 학과별 소개, 동아리 박람회 등이 진행되었습니다. 특히 선배들의 멘토링 프로그램이 신입생들에게 큰 호응을 얻었습니다.

총학생회장 이준호 학생은 "신입생 여러분을 환영하며, 즐거운 대학 생활을 위해 총학생회가 최선을 다하겠다"고 환영사를 전했습니다.',
  'campus-2024-orientation',
  1,
  (SELECT category_id FROM categories WHERE slug = 'university-news'),
  'https://picsum.photos/800/400?random=106'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'campus-2024-orientation');

-- 쇼츠 카테고리 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id, featured_image_url) 
SELECT 
  '[한컷뉴스] 도서관 24시간 개방 시작',
  '기말고사 기간 도서관 24시간 개방이 시작되었습니다. 

📍 기간: 12월 1일 ~ 12월 20일
📍 장소: 중앙도서관 1-3층
📍 이용: 학생증 필수 지참

많은 이용 바랍니다!',
  'shorts-library-24hours',
  1,
  (SELECT category_id FROM categories WHERE slug = 'one-cut-news'),
  'https://picsum.photos/800/400?random=107'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'shorts-library-24hours');

-- 기획보도 카테고리 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id, featured_image_url) 
SELECT 
  '[기획] 졸업생 취업률 85% 달성, 성공 비결은?',
  '제주한라대학교가 졸업생 취업률 85%를 달성하며 제주 지역 대학 중 최고 수준을 기록했습니다. 이러한 성과의 비결을 심층 분석해봤습니다.

첫째, 산학협력 강화입니다. 대학은 지역 기업들과 적극적인 산학협력을 통해 현장 실습 기회를 확대했습니다. 

둘째, 맞춤형 취업 지원 프로그램입니다. 학과별 특성에 맞는 취업 준비 프로그램을 운영하여 실질적인 도움을 제공했습니다.

셋째, 창업 지원 확대입니다. 창업을 희망하는 학생들을 위한 다양한 지원 프로그램을 운영하여 창업 성공 사례를 늘렸습니다.',
  'special-employment-success',
  1,
  (SELECT category_id FROM categories WHERE slug = 'career-employment'),
  'https://picsum.photos/800/400?random=108'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'special-employment-success');

-- 제주소식 카테고리 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id, featured_image_url) 
SELECT 
  '제주도, 청년 지원 정책 대폭 확대',
  '제주특별자치도가 청년 지원 정책을 대폭 확대한다고 발표했습니다. 주거, 일자리, 문화 등 다양한 분야에서 청년들을 지원할 예정입니다.

특히 청년 월세 지원금이 기존 20만원에서 30만원으로 인상되며, 청년 창업 지원금도 최대 5천만원까지 지원됩니다.

제주도 관계자는 "청년들이 제주에서 안정적으로 정착할 수 있도록 지속적으로 지원을 확대하겠다"고 밝혔습니다.',
  'jeju-youth-support',
  1,
  (SELECT category_id FROM categories WHERE slug = 'jeju-news-main'),
  'https://picsum.photos/800/400?random=109'
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'jeju-youth-support');

-- 오피니언 카테고리 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
SELECT 
  '[사설] 대학 교육의 미래, 우리가 준비해야 할 것들',
  'AI 시대를 맞아 대학 교육도 큰 변화를 맞이하고 있습니다. 단순한 지식 전달을 넘어 창의적 사고와 문제 해결 능력을 기르는 교육으로 전환이 필요합니다.

제주한라대학교도 이러한 변화에 적극적으로 대응해야 합니다. 첫째, 교육과정의 혁신이 필요합니다. AI와 협업할 수 있는 능력을 기르는 교육이 중요합니다.

둘째, 실무 중심 교육을 강화해야 합니다. 이론과 실무의 균형 잡힌 교육으로 현장에서 바로 활용 가능한 인재를 양성해야 합니다.

셋째, 평생교육 체계를 구축해야 합니다. 급변하는 시대에 지속적인 학습이 가능한 환경을 만들어야 합니다.',
  'opinion-future-education',
  1,
  (SELECT category_id FROM categories WHERE slug = 'editorial-column')
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'opinion-future-education');

-- 에세이 카테고리 샘플 기사
INSERT INTO articles (title, content, slug, author_id, category_id) 
SELECT 
  '제주의 봄, 캠퍼스에 피어난 벚꽃 이야기',
  '4월의 제주한라대학교 캠퍼스는 벚꽃으로 가득합니다. 하얀 꽃잎이 바람에 흩날리는 모습은 마치 눈이 내리는 것 같습니다.

벚꽃 아래서 친구들과 도시락을 먹으며 웃고 떠드는 시간. 이런 소소한 순간들이 모여 대학 생활의 추억이 됩니다.

제주의 봄은 육지보다 일찍 찾아옵니다. 2월 말부터 시작되는 봄의 전령은 우리에게 새로운 시작을 알립니다.

벚꽃이 지고 나면 여름이 옵니다. 하지만 지금 이 순간, 벚꽃 아래서의 시간을 충분히 즐기고 싶습니다. 제주에서 보내는 대학 시절, 이보다 더 아름다울 수 있을까요?',
  'essay-jeju-spring',
  1,
  (SELECT category_id FROM categories WHERE slug = 'time-in-jeju')
WHERE NOT EXISTS (SELECT 1 FROM articles WHERE slug = 'essay-jeju-spring');