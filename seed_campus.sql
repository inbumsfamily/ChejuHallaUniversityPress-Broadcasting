-- Insert Campus categories if not exists
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES 
  ('대학소식', 'university-news', 'campus'),
  ('지우전(지금 우리 전공은)', 'our-major-now', 'campus'),
  ('동아리', 'clubs', 'campus'),
  ('학생활동', 'student-activities', 'campus'),
  ('캠퍼스 라이프', 'campus-life', 'campus'),
  ('장학·복지·지원', 'scholarship-welfare', 'campus'),
  ('X-파일', 'x-file', 'campus'),
  ('졸업생 인터뷰', 'alumni-interview', 'campus');

-- Campus: 대학소식 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('2025학년도 신입생 오리엔테이션 성황리 개최', 
   'campus-news-1', 
   '제주한라대학교가 2025학년도 신입생 오리엔테이션을 성황리에 개최했다. 2월 26일부터 28일까지 3일간 진행된 이번 행사에는 신입생 1,200여 명이 참여했다.\n\n첫날에는 대학 생활 안내와 학과별 교육과정 소개가 진행됐으며, 둘째 날에는 선배들과의 멘토링 시간이 마련됐다. 특히 올해는 AI 시대를 대비한 디지털 리터러시 특강이 새롭게 추가되어 큰 호응을 얻었다.\n\n조인범 교수(교무처장)는 "신입생들이 대학 생활에 빠르게 적응하고 자신의 꿈을 펼칠 수 있도록 다양한 프로그램을 준비했다"며 "4년간의 대학 생활이 인생의 전환점이 되길 바란다"고 전했다.', 
   (SELECT category_id FROM categories WHERE slug = 'university-news'), 
   1, 892, 
   'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
   datetime('now', '-15 days')),
   
  ('제주한라대, 교육부 대학혁신지원사업 3년 연속 선정', 
   'campus-news-2', 
   '우리 대학이 교육부 대학혁신지원사업에 3년 연속 선정되는 쾌거를 이뤘다. 이번 선정으로 향후 3년간 총 120억원의 국비를 지원받게 된다.\n\n대학은 이번 사업비를 활용해 ▲AI 융합 교육과정 개발 ▲스마트 강의실 구축 ▲글로벌 역량 강화 프로그램 ▲창업 지원 센터 확대 등에 투자할 계획이다.\n\n박혜서 교수(기획처장)는 "학생 중심의 혁신적인 교육 모델을 구축하는 데 중점을 둘 것"이라며 "특히 제주 지역 특성을 살린 관광·서비스 분야와 IT를 융합한 교육과정을 강화하겠다"고 밝혔다.', 
   (SELECT category_id FROM categories WHERE slug = 'university-news'), 
   2, 756, 
   'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
   datetime('now', '-14 days')),
   
  ('한라대-제주도, 청년 일자리 창출 MOU 체결', 
   'campus-news-3', 
   '제주한라대학교와 제주특별자치도가 청년 일자리 창출을 위한 업무협약을 체결했다. 3월 5일 대학 본관에서 진행된 협약식에는 총장과 도지사를 비롯한 관계자 50여 명이 참석했다.\n\n이번 협약으로 양 기관은 ▲청년 창업 인큐베이팅 ▲지역 기업 인턴십 프로그램 ▲취업 역량 강화 교육 ▲일자리 매칭 플랫폼 구축 등에 협력하기로 했다.\n\n특히 제주도는 우리 대학 졸업생을 대상으로 한 '제주 청년 정착 지원금' 제도를 신설해 월 50만원씩 1년간 지원할 예정이다.', 
   (SELECT category_id FROM categories WHERE slug = 'university-news'), 
   3, 634, 
   'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
   datetime('now', '-13 days'));

-- Campus: 지우전(지금 우리 전공은) 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, youtube_embed_id, created_at) VALUES 
  ('컴퓨터공학과, AI 개발자 양성 특별 프로그램 시작', 
   'major-now-1', 
   '컴퓨터공학과가 AI 시대를 선도할 개발자 양성을 위한 특별 프로그램을 시작했다. 이 프로그램은 구글, 네이버 등 대기업과 협력하여 실무 중심의 교육을 제공한다.\n\n박한샘 부처장(컴퓨터공학과)은 "단순한 코딩 교육을 넘어 AI 윤리, 프로젝트 관리, 창업까지 아우르는 종합적인 교육과정"이라며 "졸업 전 최소 2개 이상의 실제 프로젝트를 완성하게 된다"고 설명했다.\n\n프로그램 참여 학생들은 여름방학 중 협력 기업에서 인턴십 기회를 얻으며, 우수 학생에게는 졸업 후 정규직 채용 기회도 제공된다.', 
   (SELECT category_id FROM categories WHERE slug = 'our-major-now'), 
   4, 523, 
   'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800',
   'dQw4w9WgXcQ',
   datetime('now', '-12 days')),
   
  ('호텔관광경영학과, 5성급 호텔 현장실습 100% 달성', 
   'major-now-2', 
   '호텔관광경영학과가 재학생 전원의 5성급 호텔 현장실습을 달성했다. 롯데호텔 제주, 신라호텔, 해비치호텔 등 제주 지역 특급 호텔들과의 산학협력을 통해 이뤄낸 성과다.\n\n조인범 교수(호텔관광경영학과)는 "이론과 실무를 겸비한 호텔리어 양성이 목표"라며 "학생들이 졸업 전 최소 6개월 이상 현장 경험을 쌓도록 커리큘럼을 설계했다"고 말했다.\n\n실습에 참여한 3학년 김민지 학생은 "교과서에서 배운 내용을 실제로 적용해보니 훨씬 이해가 빠르다"며 "졸업 후 진로가 명확해졌다"고 소감을 전했다.', 
   (SELECT category_id FROM categories WHERE slug = 'our-major-now'), 
   5, 467, 
   'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800',
   null,
   datetime('now', '-11 days'));

-- Campus: 동아리 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('댄스동아리 'HALLA WAVE', 전국 대학 댄스 배틀 우승', 
   'club-1', 
   '우리 대학 댄스동아리 HALLA WAVE가 전국 대학 댄스 배틀 대회에서 우승을 차지했다. 서울에서 열린 이번 대회에는 전국 52개 대학이 참가했다.\n\nHALLA WAVE는 제주 해녀를 모티브로 한 창작 안무로 심사위원들의 극찬을 받았다. 팀 리더 이준호(무용학과 3학년) 학생은 "제주의 정체성을 춤으로 표현하고 싶었다"며 "6개월간 준비한 보람이 있다"고 말했다.\n\n우승 상금 500만원은 동아리 발전기금과 제주 지역 문화예술 봉사활동에 사용될 예정이다.', 
   (SELECT category_id FROM categories WHERE slug = 'clubs'), 
   1, 789, 
   'https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800',
   datetime('now', '-10 days')),
   
  ('봉사동아리 '한라 나눔터', 1000시간 봉사 달성', 
   'club-2', 
   '봉사동아리 한라 나눔터가 창립 3년 만에 누적 봉사시간 1000시간을 달성했다. 동아리는 매주 토요일 지역 아동센터와 요양원을 방문해 봉사활동을 펼쳐왔다.\n\n특히 코로나19 기간에도 비대면 학습 멘토링, 마스크 제작 배포 등 다양한 방식으로 봉사를 이어갔다. 박혜서 교수(지도교수)는 "학생들의 따뜻한 마음이 지역사회를 밝게 만들고 있다"고 격려했다.\n\n동아리 회장 김서연(사회복지학과 4학년) 학생은 "봉사를 통해 더 많이 받고 배운다"며 "졸업 후에도 나눔을 실천하겠다"고 다짐했다.', 
   (SELECT category_id FROM categories WHERE slug = 'clubs'), 
   2, 456, 
   'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800',
   datetime('now', '-9 days'));

-- Campus: 학생활동 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('총학생회, 등록금 동결 이끌어내', 
   'student-activity-1', 
   '제52대 총학생회가 2025학년도 등록금 동결을 이끌어냈다. 학생회는 지난 3개월간 대학 본부와 10차례 이상 협상을 진행했다.\n\n총학생회장 박준영(경영학과 4학년) 학생은 "물가 상승으로 어려움을 겪는 학생들의 부담을 덜 수 있게 되어 다행"이라며 "앞으로도 학생 권익 보호에 최선을 다하겠다"고 밝혔다.\n\n대학 측은 등록금 동결과 함께 장학금 규모를 20% 확대하기로 했으며, 학생 복지 시설 개선에도 10억원을 투자할 계획이다.', 
   (SELECT category_id FROM categories WHERE slug = 'student-activities'), 
   3, 923, 
   'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800',
   datetime('now', '-8 days')),
   
  ('학생 창업팀 3팀, 정부 지원사업 선정', 
   'student-activity-2', 
   '우리 대학 학생 창업팀 3팀이 중소벤처기업부 예비창업패키지에 선정됐다. 각 팀은 최대 1억원의 창업 지원금을 받게 된다.\n\n선정된 팀은 ▲제주 특산물 활용 화장품 개발팀 ▲AI 기반 관광 추천 앱 개발팀 ▲친환경 포장재 제조팀이다. 이들은 모두 창업동아리에서 활동하며 아이디어를 발전시켜왔다.\n\n창업지원센터장은 "학생들의 참신한 아이디어가 실제 사업으로 이어질 수 있도록 체계적으로 지원하겠다"고 밝혔다.', 
   (SELECT category_id FROM categories WHERE slug = 'student-activities'), 
   4, 678, 
   'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800',
   datetime('now', '-7 days'));