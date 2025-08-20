-- 샘플 기사 생성 SQL - Part 1: 방송국 카테고리 (20-27)
-- 각 카테고리별로 6개씩 기사 생성

-- 방송국소개 (category_id: 20)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('제주한라대 방송국, 새로운 시작을 알리다', 'broadcast-new-start-2025', '제주한라대학교 방송국이 2025년 새로운 도약을 준비하고 있습니다. 최신 방송 장비를 도입하고 학생들의 창의적인 콘텐츠 제작을 위한 스튜디오를 리모델링했습니다. 방송국장 김민수 학생은 "이번 시설 개선으로 더욱 전문적인 방송 콘텐츠를 제작할 수 있게 되었다"고 말했습니다.', 3, 20, 'published', 'normal', datetime('now', '-5 days'), 342),
('방송국 신입 기자 모집 안내', 'broadcast-recruit-2025', '제주한라대 방송국에서 열정 넘치는 신입 기자를 모집합니다. 방송에 관심 있는 학생이라면 누구나 지원 가능하며, 선발된 학생들은 전문적인 방송 교육을 받게 됩니다.', 3, 20, 'published', 'normal', datetime('now', '-4 days'), 567),
('디지털 스튜디오 오픈, 유튜브 콘텐츠 제작 본격화', 'digital-studio-open', '제주한라대 방송국이 유튜브 전용 디지털 스튜디오를 오픈했습니다. 최신 조명과 음향 장비를 갖춘 이 스튜디오에서는 다양한 온라인 콘텐츠를 제작할 예정입니다.', 3, 20, 'published', 'normal', datetime('now', '-3 days'), 892),
('방송국 30주년 특별 다큐멘터리 제작', 'broadcast-30th-documentary', '올해로 창립 30주년을 맞는 제주한라대 방송국이 특별 다큐멘터리를 제작합니다. 지난 30년간의 역사와 함께 미래 비전을 담을 예정입니다.', 3, 20, 'published', 'normal', datetime('now', '-2 days'), 445),
('라이브 스트리밍 시스템 구축 완료', 'live-streaming-system', '제주한라대 방송국이 실시간 라이브 스트리밍 시스템을 구축했습니다. 이제 학교 주요 행사를 실시간으로 중계할 수 있게 되었습니다.', 3, 20, 'published', 'normal', datetime('now', '-1 days'), 234),
('방송국 OB 특강: 방송 PD가 되는 길', 'broadcast-ob-lecture', 'KBS PD로 활동 중인 졸업생 이정호 선배가 후배들을 위한 특강을 진행했습니다. 방송 PD가 되기 위한 준비 과정과 현장 경험을 공유했습니다.', 3, 20, 'published', 'normal', datetime('now'), 678);

-- 한라뉴스 (category_id: 21)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('2025학년도 입학식 성황리에 개최', 'entrance-ceremony-2025', '제주한라대학교 2025학년도 입학식이 성황리에 개최되었습니다. 1,500여 명의 신입생들이 참석한 가운데, 총장님의 환영사와 함께 새로운 대학 생활의 시작을 알렸습니다.', 3, 21, 'published', 'normal', datetime('now', '-6 days'), 1234),
('제주한라대, 취업률 85% 달성 쾌거', 'employment-rate-85', '제주한라대학교가 2024년 졸업생 취업률 85%를 달성하며 역대 최고 기록을 세웠습니다. 특히 관광학과와 간호학과의 취업률이 90%를 넘어서며 우수한 성과를 보였습니다.', 3, 21, 'published', 'normal', datetime('now', '-5 days'), 2341),
('AI 융합관 신축 공사 착공', 'ai-building-construction', '제주한라대학교가 AI 융합관 신축 공사를 시작했습니다. 2026년 완공 예정인 이 건물은 최첨단 AI 교육 시설을 갖출 예정입니다.', 3, 21, 'published', 'normal', datetime('now', '-4 days'), 876),
('국제교류 협정 체결, 글로벌 캠퍼스로 도약', 'international-exchange', '제주한라대가 일본, 중국, 베트남 등 5개국 대학과 국제교류 협정을 체결했습니다. 학생 교환 프로그램과 공동 연구가 활발히 진행될 예정입니다.', 3, 21, 'published', 'normal', datetime('now', '-3 days'), 543),
('총장배 e스포츠 대회 개최', 'esports-championship', '제1회 총장배 e스포츠 대회가 성황리에 개최되었습니다. 리그오브레전드, 발로란트 등 3개 종목에 200여 명의 학생이 참가했습니다.', 3, 21, 'published', 'normal', datetime('now', '-2 days'), 1876),
('도서관 24시간 개방 시범 운영', 'library-24hours', '중간고사 기간을 맞아 중앙도서관이 24시간 개방 시범 운영을 시작했습니다. 학생들의 학습 편의를 위한 이번 조치는 큰 호응을 얻고 있습니다.', 3, 21, 'published', 'normal', datetime('now', '-1 days'), 2234);

-- 한라인터뷰 (category_id: 22)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[인터뷰] 신임 총장 "학생 중심의 대학 만들겠다"', 'president-interview-2025', '제주한라대학교 신임 총장과의 인터뷰를 진행했습니다. "학생들의 목소리에 귀 기울이고, 실질적인 변화를 만들어가겠다"는 포부를 밝혔습니다.', 3, 22, 'published', 'normal', datetime('now', '-6 days'), 3421),
('[인터뷰] 전국 기능대회 금메달리스트 김서연 학생', 'skill-competition-gold', '전국 기능경기대회에서 금메달을 수상한 호텔조리과 김서연 학생을 만났습니다. "교수님들의 열정적인 지도 덕분"이라며 수상 소감을 전했습니다.', 3, 22, 'published', 'normal', datetime('now', '-5 days'), 1234),
('[인터뷰] 창업 성공 스토리 - 카페 창업한 졸업생', 'startup-success-cafe', '제주 시내에 성공적으로 카페를 창업한 관광경영과 졸업생 박준호 씨의 창업 스토리를 들어봤습니다.', 3, 22, 'published', 'normal', datetime('now', '-4 days'), 876),
('[인터뷰] 외국인 교환학생이 본 제주한라대', 'exchange-student-interview', '베트남에서 온 교환학생 응웬 티 흐엉 학생이 제주한라대에서의 생활과 한국 문화 체험을 이야기합니다.', 3, 22, 'published', 'normal', datetime('now', '-3 days'), 654),
('[인터뷰] 봉사왕 선정된 사회복지과 이민정 학생', 'volunteer-king-interview', '1년간 500시간 이상 봉사활동을 한 사회복지과 이민정 학생의 봉사 이야기를 들어봤습니다.', 3, 22, 'published', 'normal', datetime('now', '-2 days'), 432),
('[인터뷰] 제주한라대 최초 변호사 시험 합격자', 'first-lawyer-interview', '제주한라대 출신 최초로 변호사 시험에 합격한 법학과 졸업생 최민수 씨의 합격 수기를 들어봤습니다.', 3, 22, 'published', 'normal', datetime('now', '-1 days'), 2876);

-- 전공특집 (category_id: 23)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[전공특집] 간호학과, 국가고시 100% 합격 비결', 'nursing-exam-100', '간호학과가 3년 연속 간호사 국가고시 100% 합격률을 달성했습니다. 체계적인 교육 과정과 실습 프로그램의 성과를 분석합니다.', 3, 23, 'published', 'normal', datetime('now', '-6 days'), 4321),
('[전공특집] AI소프트웨어과 신설, 미래를 준비하다', 'ai-software-new', '2025년 신설된 AI소프트웨어과의 교육 과정과 비전을 소개합니다. 산업체와 연계한 실무 중심 교육이 특징입니다.', 3, 23, 'published', 'normal', datetime('now', '-5 days'), 2341),
('[전공특집] 호텔조리과, 미슐랭 셰프 특강', 'hotel-cooking-michelin', '호텔조리과에서 미슐랭 스타 셰프를 초청해 특별 강의를 진행했습니다. 세계적 수준의 요리 기술을 배우는 기회였습니다.', 3, 23, 'published', 'normal', datetime('now', '-4 days'), 1876),
('[전공특집] 관광경영과, 제주 관광의 미래를 이끌다', 'tourism-management-future', '제주 관광 산업의 중심에서 활약할 인재를 양성하는 관광경영과의 특별한 교육 프로그램을 소개합니다.', 3, 23, 'published', 'normal', datetime('now', '-3 days'), 1234),
('[전공특집] 사회복지과, 지역사회와 함께하는 실습', 'social-welfare-practice', '사회복지과 학생들이 제주 지역 복지시설에서 진행하는 현장 실습 프로그램을 취재했습니다.', 3, 23, 'published', 'normal', datetime('now', '-2 days'), 987),
('[전공특집] 뷰티아트과, K-뷰티 전문가 양성', 'beauty-art-kbeauty', '글로벌 K-뷰티 시장을 선도할 전문가를 양성하는 뷰티아트과의 특화 교육을 살펴봅니다.', 3, 23, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 캠퍼스투어 (category_id: 24)  
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[캠퍼스투어] 새롭게 단장한 중앙도서관', 'campus-tour-library', '리모델링을 마친 중앙도서관의 새로운 모습을 소개합니다. 스터디룸, 미디어존 등 최신 시설을 갖췄습니다.', 3, 24, 'published', 'normal', datetime('now', '-6 days'), 2134),
('[캠퍼스투어] 학생회관 편의시설 완벽 가이드', 'campus-tour-student-center', '학생회관에 있는 다양한 편의시설을 소개합니다. 카페, 서점, 휴게실 등 학생들을 위한 공간들을 둘러봅니다.', 3, 24, 'published', 'normal', datetime('now', '-5 days'), 1567),
('[캠퍼스투어] 최첨단 실습실 탐방 - 간호학과', 'campus-tour-nursing-lab', '실제 병원과 똑같은 환경을 구현한 간호학과 실습실을 탐방합니다. 최신 의료 장비와 시뮬레이터를 갖췄습니다.', 3, 24, 'published', 'normal', datetime('now', '-4 days'), 1234),
('[캠퍼스투어] 숨은 명소 - 옥상 정원', 'campus-tour-rooftop-garden', '학생들의 휴식 공간인 옥상 정원을 소개합니다. 제주의 아름다운 풍경을 한눈에 볼 수 있는 명소입니다.', 3, 24, 'published', 'normal', datetime('now', '-3 days'), 987),
('[캠퍼스투어] 체육관 시설 이용 안내', 'campus-tour-gym', '새로 개관한 체육관의 다양한 운동 시설과 이용 방법을 안내합니다. 헬스장, 농구장, 배드민턴장 등을 갖췄습니다.', 3, 24, 'published', 'normal', datetime('now', '-2 days'), 765),
('[캠퍼스투어] 기숙사 생활 엿보기', 'campus-tour-dormitory', '제주한라대 기숙사의 시설과 생활을 소개합니다. 2인실, 4인실 구조와 편의시설을 살펴봅니다.', 3, 24, 'published', 'normal', datetime('now', '-1 days'), 543);

-- 문화·예술(방송) (category_id: 25)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[문화예술] 제주한라대 밴드 페스티벌 성황리 개최', 'band-festival-2025', '제5회 제주한라대 밴드 페스티벌이 성황리에 개최되었습니다. 10개 팀이 참가해 열정적인 무대를 선보였습니다.', 3, 25, 'published', 'normal', datetime('now', '-6 days'), 1876),
('[문화예술] 대학 연극제, 창작극 "제주의 바람" 공연', 'theater-jeju-wind', '연극동아리가 창작극 "제주의 바람"을 공연했습니다. 제주의 역사와 문화를 담은 감동적인 작품이었습니다.', 3, 25, 'published', 'normal', datetime('now', '-5 days'), 1234),
('[문화예술] 미술전시회 "청춘의 색채" 개최', 'art-exhibition-youth', '미술동아리 학생들의 작품 전시회가 열렸습니다. 청춘의 열정과 도전을 담은 30여 점의 작품이 전시되었습니다.', 3, 25, 'published', 'normal', datetime('now', '-4 days'), 987),
('[문화예술] K-POP 댄스 경연대회 우승팀 인터뷰', 'kpop-dance-winner', '전국 대학 K-POP 댄스 경연대회에서 우승한 댄스팀의 성공 비결을 들어봤습니다.', 3, 25, 'published', 'normal', datetime('now', '-3 days'), 765),
('[문화예술] 영화제작 동아리, 단편영화 상영회', 'film-screening', '영화제작 동아리가 만든 단편영화 3편을 상영했습니다. 학생들의 창의적인 시각이 돋보였습니다.', 3, 25, 'published', 'normal', datetime('now', '-2 days'), 543),
('[문화예술] 버스킹 공연, 캠퍼스를 음악으로 물들이다', 'busking-campus', '매주 수요일 점심시간, 학생들의 버스킹 공연이 캠퍼스에 활기를 불어넣고 있습니다.', 3, 25, 'published', 'normal', datetime('now', '-1 days'), 432);

-- 라디오·팟캐스트 (category_id: 26)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[라디오] "한라FM" 개국, 24시간 인터넷 방송 시작', 'halla-fm-launch', '제주한라대 인터넷 라디오 "한라FM"이 개국했습니다. 24시간 음악과 토크쇼를 제공합니다.', 3, 26, 'published', 'normal', datetime('now', '-6 days'), 2341),
('[팟캐스트] "대학생활 꿀팁" 시리즈 인기몰이', 'podcast-tips-series', '재학생들이 제작하는 팟캐스트 "대학생활 꿀팁"이 큰 인기를 얻고 있습니다. 실용적인 정보가 가득합니다.', 3, 26, 'published', 'normal', datetime('now', '-5 days'), 1876),
('[라디오] 심야 음악방송 "달빛 세레나데" 시작', 'moonlight-serenade', '매일 밤 10시부터 자정까지 방송되는 "달빛 세레나데"가 학생들의 밤을 위로합니다.', 3, 26, 'published', 'normal', datetime('now', '-4 days'), 1234),
('[팟캐스트] 교수님과 함께하는 진로 토크쇼', 'career-talk-professor', '각 학과 교수님들이 출연하는 진로 상담 팟캐스트가 시작되었습니다.', 3, 26, 'published', 'normal', datetime('now', '-3 days'), 987),
('[라디오] 영어 회화 방송 "English Time" 론칭', 'english-time-launch', '원어민 교수님과 함께하는 영어 회화 방송이 시작되었습니다. 매일 아침 8시 방송됩니다.', 3, 26, 'published', 'normal', datetime('now', '-2 days'), 765),
('[팟캐스트] 제주 맛집 탐방기 "한라의 맛"', 'halla-taste-podcast', '제주의 숨은 맛집을 소개하는 팟캐스트 "한라의 맛"이 미식가들의 관심을 받고 있습니다.', 3, 26, 'published', 'normal', datetime('now', '-1 days'), 543);

-- 방송국 활동기 (category_id: 27)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[활동기] 방송국 MT, 단합과 우정을 다지다', 'broadcast-mt-2025', '방송국 MT가 성산일출봉에서 진행되었습니다. 1박 2일간 단합과 우정을 다지는 시간이었습니다.', 3, 27, 'published', 'normal', datetime('now', '-6 days'), 1234),
('[활동기] 타 대학 방송국과 교류 프로그램 진행', 'broadcast-exchange', '부산대, 경북대 방송국과 교류 프로그램을 진행했습니다. 서로의 노하우를 공유하는 유익한 시간이었습니다.', 3, 27, 'published', 'normal', datetime('now', '-5 days'), 987),
('[활동기] 방송제 준비 현장 스케치', 'broadcast-festival-prep', '제30회 방송제 준비 현장을 스케치했습니다. 밤낮없이 준비하는 학생들의 열정이 대단합니다.', 3, 27, 'published', 'normal', datetime('now', '-4 days'), 765),
('[활동기] 신입 기자 교육 프로그램 완료', 'new-reporter-training', '2주간의 신입 기자 교육 프로그램이 완료되었습니다. 15명의 새로운 기자들이 탄생했습니다.', 3, 27, 'published', 'normal', datetime('now', '-3 days'), 543),
('[활동기] 방송국 봉사활동, 지역사회와 함께', 'broadcast-volunteer', '방송국원들이 제주 요양원에서 봉사활동을 진행했습니다. 어르신들께 즐거움을 선사했습니다.', 3, 27, 'published', 'normal', datetime('now', '-2 days'), 432),
('[활동기] 연말 시상식, 올해의 방송인상 시상', 'broadcast-awards-2024', '2024년 방송국 시상식이 열렸습니다. 올해의 방송인상은 김지현 PD가 수상했습니다.', 3, 27, 'published', 'normal', datetime('now', '-1 days'), 321);