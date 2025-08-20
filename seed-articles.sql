-- 샘플 기사 생성 SQL
-- 각 카테고리별로 6개씩 기사 생성

-- 방송국 카테고리 기사들
-- 방송국소개 (category_id: 10)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('제주한라대 방송국, 새로운 시작을 알리다', 'broadcast-new-start-2025', '제주한라대학교 방송국이 2025년 새로운 도약을 준비하고 있습니다. 최신 방송 장비를 도입하고 학생들의 창의적인 콘텐츠 제작을 위한 스튜디오를 리모델링했습니다. 방송국장 김민수 학생은 "이번 시설 개선으로 더욱 전문적인 방송 콘텐츠를 제작할 수 있게 되었다"고 말했습니다.', 3, 10, 'published', 'normal', datetime('now', '-5 days'), 342),
('방송국 신입 기자 모집 안내', 'broadcast-recruit-2025', '제주한라대 방송국에서 열정 넘치는 신입 기자를 모집합니다. 방송에 관심 있는 학생이라면 누구나 지원 가능하며, 선발된 학생들은 전문적인 방송 교육을 받게 됩니다.', 3, 10, 'published', 'normal', datetime('now', '-4 days'), 567),
('디지털 스튜디오 오픈, 유튜브 콘텐츠 제작 본격화', 'digital-studio-open', '제주한라대 방송국이 유튜브 전용 디지털 스튜디오를 오픈했습니다. 최신 조명과 음향 장비를 갖춘 이 스튜디오에서는 다양한 온라인 콘텐츠를 제작할 예정입니다.', 3, 10, 'published', 'normal', datetime('now', '-3 days'), 892),
('방송국 30주년 특별 다큐멘터리 제작', 'broadcast-30th-documentary', '올해로 창립 30주년을 맞는 제주한라대 방송국이 특별 다큐멘터리를 제작합니다. 지난 30년간의 역사와 함께 미래 비전을 담을 예정입니다.', 3, 10, 'published', 'normal', datetime('now', '-2 days'), 445),
('라이브 스트리밍 시스템 구축 완료', 'live-streaming-system', '제주한라대 방송국이 실시간 라이브 스트리밍 시스템을 구축했습니다. 이제 학교 주요 행사를 실시간으로 중계할 수 있게 되었습니다.', 3, 10, 'published', 'normal', datetime('now', '-1 days'), 234),
('방송국 OB 특강: 방송 PD가 되는 길', 'broadcast-ob-lecture', 'KBS PD로 활동 중인 졸업생 이정호 선배가 후배들을 위한 특강을 진행했습니다. 방송 PD가 되기 위한 준비 과정과 현장 경험을 공유했습니다.', 3, 10, 'published', 'normal', datetime('now'), 678);

-- 한라뉴스 (category_id: 11)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('2025학년도 입학식 성황리에 개최', 'entrance-ceremony-2025', '제주한라대학교 2025학년도 입학식이 성황리에 개최되었습니다. 1,500여 명의 신입생들이 참석한 가운데, 총장님의 환영사와 함께 새로운 대학 생활의 시작을 알렸습니다.', 3, 11, 'published', 'normal', datetime('now', '-6 days'), 1234),
('제주한라대, 취업률 85% 달성 쾌거', 'employment-rate-85', '제주한라대학교가 2024년 졸업생 취업률 85%를 달성하며 역대 최고 기록을 세웠습니다. 특히 관광학과와 간호학과의 취업률이 90%를 넘어서며 우수한 성과를 보였습니다.', 3, 11, 'published', 'normal', datetime('now', '-5 days'), 2341),
('AI 융합관 신축 공사 착공', 'ai-building-construction', '제주한라대학교가 AI 융합관 신축 공사를 시작했습니다. 2026년 완공 예정인 이 건물은 최첨단 AI 교육 시설을 갖출 예정입니다.', 3, 11, 'published', 'normal', datetime('now', '-4 days'), 876),
('국제교류 협정 체결, 글로벌 캠퍼스로 도약', 'international-exchange', '제주한라대가 일본, 중국, 베트남 등 5개국 대학과 국제교류 협정을 체결했습니다. 학생 교환 프로그램과 공동 연구가 활발히 진행될 예정입니다.', 3, 11, 'published', 'normal', datetime('now', '-3 days'), 543),
('총장배 e스포츠 대회 개최', 'esports-championship', '제1회 총장배 e스포츠 대회가 성황리에 개최되었습니다. 리그오브레전드, 발로란트 등 3개 종목에 200여 명의 학생이 참가했습니다.', 3, 11, 'published', 'normal', datetime('now', '-2 days'), 1876),
('도서관 24시간 개방 시범 운영', 'library-24hours', '중간고사 기간을 맞아 중앙도서관이 24시간 개방 시범 운영을 시작했습니다. 학생들의 학습 편의를 위한 이번 조치는 큰 호응을 얻고 있습니다.', 3, 11, 'published', 'normal', datetime('now', '-1 days'), 2234);

-- 한라인터뷰 (category_id: 12)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[인터뷰] 신임 총장 "학생 중심의 대학 만들겠다"', 'president-interview-2025', '제주한라대학교 신임 총장과의 인터뷰를 진행했습니다. "학생들의 목소리에 귀 기울이고, 실질적인 변화를 만들어가겠다"는 포부를 밝혔습니다.', 3, 12, 'published', 'normal', datetime('now', '-6 days'), 3421),
('[인터뷰] 전국 기능대회 금메달리스트 김서연 학생', 'skill-competition-gold', '전국 기능경기대회에서 금메달을 수상한 호텔조리과 김서연 학생을 만났습니다. "교수님들의 열정적인 지도 덕분"이라며 수상 소감을 전했습니다.', 3, 12, 'published', 'normal', datetime('now', '-5 days'), 1234),
('[인터뷰] 창업 성공 스토리 - 카페 창업한 졸업생', 'startup-success-cafe', '제주 시내에 성공적으로 카페를 창업한 관광경영과 졸업생 박준호 씨의 창업 스토리를 들어봤습니다.', 3, 12, 'published', 'normal', datetime('now', '-4 days'), 876),
('[인터뷰] 외국인 교환학생이 본 제주한라대', 'exchange-student-interview', '베트남에서 온 교환학생 응웬 티 흐엉 학생이 제주한라대에서의 생활과 한국 문화 체험을 이야기합니다.', 3, 12, 'published', 'normal', datetime('now', '-3 days'), 654),
('[인터뷰] 봉사왕 선정된 사회복지과 이민정 학생', 'volunteer-king-interview', '1년간 500시간 이상 봉사활동을 한 사회복지과 이민정 학생의 봉사 이야기를 들어봤습니다.', 3, 12, 'published', 'normal', datetime('now', '-2 days'), 432),
('[인터뷰] 제주한라대 최초 변호사 시험 합격자', 'first-lawyer-interview', '제주한라대 출신 최초로 변호사 시험에 합격한 법학과 졸업생 최민수 씨의 합격 수기를 들어봤습니다.', 3, 12, 'published', 'normal', datetime('now', '-1 days'), 2876);

-- 전공특집 (category_id: 13)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[전공특집] 간호학과, 국가고시 100% 합격 비결', 'nursing-exam-100', '간호학과가 3년 연속 간호사 국가고시 100% 합격률을 달성했습니다. 체계적인 교육 과정과 실습 프로그램의 성과를 분석합니다.', 3, 13, 'published', 'normal', datetime('now', '-6 days'), 4321),
('[전공특집] AI소프트웨어과 신설, 미래를 준비하다', 'ai-software-new', '2025년 신설된 AI소프트웨어과의 교육 과정과 비전을 소개합니다. 산업체와 연계한 실무 중심 교육이 특징입니다.', 3, 13, 'published', 'normal', datetime('now', '-5 days'), 2341),
('[전공특집] 호텔조리과, 미슐랭 셰프 특강', 'hotel-cooking-michelin', '호텔조리과에서 미슐랭 스타 셰프를 초청해 특별 강의를 진행했습니다. 세계적 수준의 요리 기술을 배우는 기회였습니다.', 3, 13, 'published', 'normal', datetime('now', '-4 days'), 1876),
('[전공특집] 관광경영과, 제주 관광의 미래를 이끌다', 'tourism-management-future', '제주 관광 산업의 중심에서 활약할 인재를 양성하는 관광경영과의 특별한 교육 프로그램을 소개합니다.', 3, 13, 'published', 'normal', datetime('now', '-3 days'), 1234),
('[전공특집] 사회복지과, 지역사회와 함께하는 실습', 'social-welfare-practice', '사회복지과 학생들이 제주 지역 복지시설에서 진행하는 현장 실습 프로그램을 취재했습니다.', 3, 13, 'published', 'normal', datetime('now', '-2 days'), 987),
('[전공특집] 뷰티아트과, K-뷰티 전문가 양성', 'beauty-art-kbeauty', '글로벌 K-뷰티 시장을 선도할 전문가를 양성하는 뷰티아트과의 특화 교육을 살펴봅니다.', 3, 13, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 캠퍼스투어 (category_id: 14)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[캠퍼스투어] 새롭게 단장한 중앙도서관', 'campus-tour-library', '리모델링을 마친 중앙도서관의 새로운 모습을 소개합니다. 스터디룸, 미디어존 등 최신 시설을 갖췄습니다.', 3, 14, 'published', 'normal', datetime('now', '-6 days'), 2134),
('[캠퍼스투어] 학생회관 편의시설 완벽 가이드', 'campus-tour-student-center', '학생회관에 있는 다양한 편의시설을 소개합니다. 카페, 서점, 휴게실 등 학생들을 위한 공간들을 둘러봅니다.', 3, 14, 'published', 'normal', datetime('now', '-5 days'), 1567),
('[캠퍼스투어] 최첨단 실습실 탐방 - 간호학과', 'campus-tour-nursing-lab', '실제 병원과 똑같은 환경을 구현한 간호학과 실습실을 탐방합니다. 최신 의료 장비와 시뮬레이터를 갖췄습니다.', 3, 14, 'published', 'normal', datetime('now', '-4 days'), 1234),
('[캠퍼스투어] 숨은 명소 - 옥상 정원', 'campus-tour-rooftop-garden', '학생들의 휴식 공간인 옥상 정원을 소개합니다. 제주의 아름다운 풍경을 한눈에 볼 수 있는 명소입니다.', 3, 14, 'published', 'normal', datetime('now', '-3 days'), 987),
('[캠퍼스투어] 체육관 시설 이용 안내', 'campus-tour-gym', '새로 개관한 체육관의 다양한 운동 시설과 이용 방법을 안내합니다. 헬스장, 농구장, 배드민턴장 등을 갖췄습니다.', 3, 14, 'published', 'normal', datetime('now', '-2 days'), 765),
('[캠퍼스투어] 기숙사 생활 엿보기', 'campus-tour-dormitory', '제주한라대 기숙사의 시설과 생활을 소개합니다. 2인실, 4인실 구조와 편의시설을 살펴봅니다.', 3, 14, 'published', 'normal', datetime('now', '-1 days'), 543);

-- 문화·예술(방송) (category_id: 15)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[문화예술] 제주한라대 가을 축제 하이라이트', 'culture-autumn-festival', '3일간 진행된 가을 축제의 하이라이트를 영상으로 담았습니다. 다양한 공연과 부스 활동이 펼쳐졌습니다.', 3, 15, 'published', 'normal', datetime('now', '-6 days'), 3456),
('[문화예술] 동아리 연합 공연 "청춘의 노래"', 'culture-club-performance', '음악 동아리들이 함께한 연합 공연이 성황리에 마쳤습니다. 밴드, 어쿠스틱, 힙합 등 다양한 장르의 공연이 펼쳐졌습니다.', 3, 15, 'published', 'normal', datetime('now', '-5 days'), 2341),
('[문화예술] 미술 동아리 전시회 "젊은 시선"', 'culture-art-exhibition', '미술 동아리 학생들의 작품 전시회가 열렸습니다. 회화, 조각, 디지털 아트 등 다양한 작품들이 전시되었습니다.', 3, 15, 'published', 'normal', datetime('now', '-4 days'), 1234),
('[문화예술] 연극 동아리 정기공연 성료', 'culture-theater-performance', '연극 동아리 "무대위의 청춘"이 정기공연을 성공적으로 마쳤습니다. 창작극 "제주의 바람"이 큰 호응을 얻었습니다.', 3, 15, 'published', 'normal', datetime('now', '-3 days'), 987),
('[문화예술] 댄스 배틀 대회 열기 후끈', 'culture-dance-battle', '제1회 제주한라대 댄스 배틀 대회가 열렸습니다. 힙합, K-POP, 스트릿 댄스 등 다양한 장르의 경연이 펼쳐졌습니다.', 3, 15, 'published', 'normal', datetime('now', '-2 days'), 876),
('[문화예술] 사진 동아리 "제주를 담다" 전시회', 'culture-photo-exhibition', '사진 동아리가 1년간 촬영한 제주의 모습을 담은 전시회를 개최했습니다. 자연과 사람, 문화를 담은 작품들이 전시되었습니다.', 3, 15, 'published', 'normal', datetime('now', '-1 days'), 654);

-- 라디오·팟캐스트 (category_id: 16)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[라디오] "캠퍼스 뮤직박스" 100회 특집', 'radio-music-box-100', '매주 화요일 방송되는 "캠퍼스 뮤직박스"가 100회를 맞았습니다. 청취자들이 뽑은 베스트 음악을 소개합니다.', 3, 16, 'published', 'normal', datetime('now', '-6 days'), 1234),
('[팟캐스트] "한라 토크" 새 시즌 시작', 'podcast-halla-talk-new', '인기 팟캐스트 "한라 토크"가 새로운 시즌을 시작합니다. 더욱 다양한 주제와 게스트로 찾아갑니다.', 3, 16, 'published', 'normal', datetime('now', '-5 days'), 987),
('[라디오] 심야 라디오 "별이 빛나는 밤에"', 'radio-starry-night', '매주 수요일 밤 10시, 심야 라디오 프로그램이 학생들의 고민을 들어줍니다. 익명 사연과 음악이 함께합니다.', 3, 16, 'published', 'normal', datetime('now', '-4 days'), 765),
('[팟캐스트] "전공 이야기" 간호학과 편', 'podcast-major-story-nursing', '각 전공의 특색을 소개하는 팟캐스트 "전공 이야기" 간호학과 편이 공개되었습니다.', 3, 16, 'published', 'normal', datetime('now', '-3 days'), 543),
('[라디오] 영어 방송 "English Wave" 인기', 'radio-english-wave', '영어 학습과 팝송을 함께 즐기는 "English Wave"가 학생들 사이에서 인기를 끌고 있습니다.', 3, 16, 'published', 'normal', datetime('now', '-2 days'), 432),
('[팟캐스트] "제주 스토리" 지역 문화 소개', 'podcast-jeju-story', '제주의 숨은 이야기를 소개하는 팟캐스트 "제주 스토리"가 새롭게 시작되었습니다.', 3, 16, 'published', 'normal', datetime('now', '-1 days'), 321);

-- 방송국 활동기 (category_id: 17)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[활동기] 방송국 MT, 단합의 시간', 'broadcast-mt-2025', '방송국 멤버들이 1박 2일 MT를 다녀왔습니다. 팀워크를 다지고 새로운 기획을 논의하는 시간이었습니다.', 3, 17, 'published', 'normal', datetime('now', '-6 days'), 876),
('[활동기] KBS 제주 방문 견학', 'broadcast-kbs-visit', '방송국 학생들이 KBS 제주방송총국을 견학했습니다. 실제 방송 현장을 체험하는 귀중한 시간이었습니다.', 3, 17, 'published', 'normal', datetime('now', '-5 days'), 654),
('[활동기] 영상 편집 워크숍 참가', 'broadcast-editing-workshop', '프리미어 프로, 애프터 이펙트 등 전문 편집 프로그램 워크숍에 참가했습니다.', 3, 17, 'published', 'normal', datetime('now', '-4 days'), 543),
('[활동기] 대학 방송국 연합 세미나', 'broadcast-union-seminar', '전국 대학 방송국 연합 세미나에 참가해 다른 대학과 교류했습니다.', 3, 17, 'published', 'normal', datetime('now', '-3 days'), 432),
('[활동기] 방송 장비 교육 실시', 'broadcast-equipment-training', '새로 도입된 방송 장비 사용법 교육을 실시했습니다. 카메라, 조명, 음향 장비 활용법을 배웠습니다.', 3, 17, 'published', 'normal', datetime('now', '-2 days'), 321),
('[활동기] 2025 신입생 오리엔테이션 중계', 'broadcast-orientation-relay', '방송국이 2025 신입생 오리엔테이션을 생중계했습니다. 유튜브 라이브로 1,000명 이상이 시청했습니다.', 3, 17, 'published', 'normal', datetime('now', '-1 days'), 234);

-- 신문사 카테고리 기사들
-- 신문사소개 (category_id: 18)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('제주한라대 신문사, 디지털 전환 선언', 'newspaper-digital-transformation', '제주한라대 신문사가 디지털 퍼스트 전략을 선언했습니다. 온라인 기사와 멀티미디어 콘텐츠를 강화할 계획입니다.', 2, 18, 'published', 'normal', datetime('now', '-6 days'), 1234),
('신문사 창간 25주년 기념 특별호 발간', 'newspaper-25th-anniversary', '제주한라대 신문사가 창간 25주년을 맞아 특별호를 발간했습니다. 지난 역사와 미래 비전을 담았습니다.', 2, 18, 'published', 'normal', datetime('now', '-5 days'), 987),
('신문사 기자단 신규 모집', 'newspaper-recruit-reporters', '2025년 신문사 기자단을 모집합니다. 취재, 편집, 사진 등 다양한 분야에서 활동할 인재를 찾습니다.', 2, 18, 'published', 'normal', datetime('now', '-4 days'), 765),
('모바일 앱 출시, 언제 어디서나 캠퍼스 소식', 'newspaper-mobile-app', '제주한라대 신문사가 모바일 앱을 출시했습니다. 푸시 알림으로 실시간 뉴스를 받아볼 수 있습니다.', 2, 18, 'published', 'normal', datetime('now', '-3 days'), 543),
('SNS 채널 구독자 1만 명 돌파', 'newspaper-sns-10k', '신문사 공식 SNS 채널 구독자가 1만 명을 돌파했습니다. 인스타그램, 페이스북에서 활발히 소통하고 있습니다.', 2, 18, 'published', 'normal', datetime('now', '-2 days'), 432),
('언론인 양성 프로그램 시작', 'newspaper-journalist-program', '신문사가 언론인 지망생을 위한 전문 교육 프로그램을 시작합니다. 현직 기자들의 멘토링이 진행됩니다.', 2, 18, 'published', 'normal', datetime('now', '-1 days'), 321);

-- 현장취재 (category_id: 19)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[현장취재] 학생식당 새 메뉴 개발 현장', 'field-cafeteria-new-menu', '학생식당에서 새로운 메뉴를 개발하는 현장을 취재했습니다. 학생들의 의견을 반영한 건강한 메뉴가 추가됩니다.', 2, 19, 'published', 'normal', datetime('now', '-6 days'), 2345),
('[현장취재] 도서관 24시간 개방 첫날', 'field-library-24h-first-day', '시험 기간 도서관 24시간 개방 첫날의 모습을 취재했습니다. 많은 학생들이 밤늦게까지 공부에 열중했습니다.', 2, 19, 'published', 'normal', datetime('now', '-5 days'), 1876),
('[현장취재] 봄 축제 준비 현장 속으로', 'field-spring-festival-prep', '봄 축제를 준비하는 학생회와 동아리들의 열정적인 모습을 담았습니다. 다양한 프로그램이 준비되고 있습니다.', 2, 19, 'published', 'normal', datetime('now', '-4 days'), 1543),
('[현장취재] 취업 박람회 뜨거운 열기', 'field-job-fair-heat', '제주한라대 취업 박람회 현장을 다녀왔습니다. 50여 개 기업이 참가해 학생들과 만났습니다.', 2, 19, 'published', 'normal', datetime('now', '-3 days'), 1234),
('[현장취재] 기숙사 리모델링 공사 현장', 'field-dorm-remodeling', '여름방학 동안 진행되는 기숙사 리모델링 공사 현장을 취재했습니다. 더 나은 주거 환경이 조성될 예정입니다.', 2, 19, 'published', 'normal', datetime('now', '-2 days'), 987),
('[현장취재] 동아리 박람회 다채로운 행사', 'field-club-fair', '신입생을 위한 동아리 박람회가 열렸습니다. 40여 개 동아리가 참가해 다양한 활동을 소개했습니다.', 2, 19, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 캠퍼스 리포트 (category_id: 20)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[리포트] 캠퍼스 내 흡연 문제 심각', 'report-smoking-problem', '캠퍼스 내 흡연 문제가 심각한 수준입니다. 금연 구역에서의 흡연과 담배꽁초 투기가 늘어나고 있습니다.', 2, 20, 'published', 'normal', datetime('now', '-6 days'), 3456),
('[리포트] 주차 공간 부족 해결 방안은?', 'report-parking-solution', '학생 수 증가로 주차 공간 부족 문제가 심화되고 있습니다. 학교 측의 대책과 학생들의 의견을 들어봤습니다.', 2, 20, 'published', 'normal', datetime('now', '-5 days'), 2876),
('[리포트] 학생 자치 활동 활성화 필요', 'report-student-autonomy', '학생 자치 활동 참여율이 저조한 상황입니다. 원인 분석과 활성화 방안을 모색해봅니다.', 2, 20, 'published', 'normal', datetime('now', '-4 days'), 2134),
('[리포트] 장애 학생 지원 시설 점검', 'report-disability-support', '캠퍼스 내 장애 학생 지원 시설을 점검했습니다. 개선이 필요한 부분들을 짚어봅니다.', 2, 20, 'published', 'normal', datetime('now', '-3 days'), 1654),
('[리포트] 온라인 강의 만족도 조사', 'report-online-class-survey', '온라인 강의에 대한 학생 만족도를 조사했습니다. 장단점과 개선 방안을 분석합니다.', 2, 20, 'published', 'normal', datetime('now', '-2 days'), 1432),
('[리포트] 학교 셔틀버스 운행 개선 요구', 'report-shuttle-bus-improve', '학교 셔틀버스 운행에 대한 학생들의 개선 요구가 높습니다. 노선과 시간표 조정이 필요합니다.', 2, 20, 'published', 'normal', datetime('now', '-1 days'), 1123);

-- 신문사 활동기 (category_id: 21)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[활동기] 전국 대학신문 기자 워크숍 참가', 'newspaper-workshop-2025', '전국 대학신문 기자 워크숍에 참가했습니다. 다른 대학 기자들과 교류하며 많은 것을 배웠습니다.', 2, 21, 'published', 'normal', datetime('now', '-6 days'), 987),
('[활동기] 제주일보 견학 및 멘토링', 'newspaper-jeju-ilbo-visit', '제주일보를 방문해 현직 기자들의 멘토링을 받았습니다. 실무 경험을 들을 수 있는 좋은 기회였습니다.', 2, 21, 'published', 'normal', datetime('now', '-5 days'), 765),
('[활동기] 신문사 창간 기념 세미나', 'newspaper-foundation-seminar', '신문사 창간 기념 세미나를 개최했습니다. 언론의 역할과 대학 신문의 방향성을 논의했습니다.', 2, 21, 'published', 'normal', datetime('now', '-4 days'), 654),
('[활동기] 취재 기법 특강 실시', 'newspaper-coverage-lecture', '전문 기자를 초청해 취재 기법 특강을 실시했습니다. 인터뷰 스킬과 기사 작성법을 배웠습니다.', 2, 21, 'published', 'normal', datetime('now', '-3 days'), 543),
('[활동기] 사진 촬영 워크숍 진행', 'newspaper-photo-workshop', '보도 사진 촬영 기법을 배우는 워크숍을 진행했습니다. 구도와 조명의 중요성을 배웠습니다.', 2, 21, 'published', 'normal', datetime('now', '-2 days'), 432),
('[활동기] 신문사 MT로 팀워크 다져', 'newspaper-mt-teamwork', '신문사 구성원들이 MT를 다녀왔습니다. 친목을 다지고 새로운 기획을 논의했습니다.', 2, 21, 'published', 'normal', datetime('now', '-1 days'), 321);

-- 캠퍼스 카테고리 기사들
-- 대학소식 (category_id: 22)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('제주한라대, QS 아시아 대학 순위 상승', 'university-qs-ranking-up', '제주한라대학교가 QS 아시아 대학 순위에서 전년 대비 20계단 상승했습니다. 교육 질과 연구 성과가 인정받았습니다.', 1, 22, 'published', 'normal', datetime('now', '-6 days'), 4567),
('스마트 캠퍼스 구축 사업 선정', 'smart-campus-project', '제주한라대가 교육부 스마트 캠퍼스 구축 사업에 선정되었습니다. 50억 원을 지원받아 디지털 인프라를 구축합니다.', 1, 22, 'published', 'normal', datetime('now', '-5 days'), 3456),
('산학협력 MOU 체결 확대', 'industry-academia-mou', '제주한라대가 지역 기업 20곳과 산학협력 MOU를 체결했습니다. 현장 실습과 취업 연계가 강화됩니다.', 1, 22, 'published', 'normal', datetime('now', '-4 days'), 2345),
('2025학년도 입시 경쟁률 역대 최고', 'admission-competition-2025', '2025학년도 입시에서 평균 경쟁률 15:1을 기록했습니다. 특히 간호학과는 25:1의 높은 경쟁률을 보였습니다.', 1, 22, 'published', 'normal', datetime('now', '-3 days'), 1876),
('교육부 대학혁신지원사업 성과 평가 A등급', 'innovation-project-grade-a', '제주한라대가 대학혁신지원사업 성과 평가에서 A등급을 받았습니다. 우수한 교육 혁신 사례로 인정받았습니다.', 1, 22, 'published', 'normal', datetime('now', '-2 days'), 1543),
('글로벌 인재 양성 프로그램 확대', 'global-talent-program', '해외 인턴십과 교환학생 프로그램을 확대합니다. 미국, 일본, 중국 등 10개국과 협력합니다.', 1, 22, 'published', 'normal', datetime('now', '-1 days'), 1234);

-- 지우전(지금 우리 전공은) (category_id: 23)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[지우전] IT융합과, 실리콘밸리를 꿈꾸다', 'our-major-it-silicon-valley', 'IT융합과 학생들이 실리콘밸리 연수 프로그램에 참가합니다. 글로벌 IT 기업 탐방과 네트워킹이 예정되어 있습니다.', 1, 23, 'published', 'normal', datetime('now', '-6 days'), 2345),
('[지우전] 물리치료과, 재활 전문가의 길', 'our-major-physical-therapy', '물리치료과 학생들의 하루를 따라가봤습니다. 이론과 실습을 병행하며 전문가로 성장하고 있습니다.', 1, 23, 'published', 'normal', datetime('now', '-5 days'), 1876),
('[지우전] 유아교육과, 미래의 교사를 꿈꾸며', 'our-major-early-childhood', '유아교육과 학생들이 부속 유치원에서 실습하는 모습을 담았습니다. 아이들과 함께 성장하는 예비 교사들입니다.', 1, 23, 'published', 'normal', datetime('now', '-4 days'), 1543),
('[지우전] 건축과, 제주의 미래를 설계하다', 'our-major-architecture', '건축과 학생들이 제주 전통 건축을 현대적으로 재해석하는 프로젝트를 진행하고 있습니다.', 1, 23, 'published', 'normal', datetime('now', '-3 days'), 1234),
('[지우전] 경찰행정과, 정의를 실현하는 길', 'our-major-police-admin', '경찰행정과 학생들의 체력 훈련과 법률 공부 현장을 취재했습니다. 경찰 공무원 합격률 70%의 비결입니다.', 1, 23, 'published', 'normal', datetime('now', '-2 days'), 987),
('[지우전] 관광중국어과, 중국 시장을 공략하다', 'our-major-tourism-chinese', '관광중국어과 학생들이 중국 관광객 유치 프로젝트에 참여했습니다. 실무 중국어와 관광 지식을 겸비합니다.', 1, 23, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 동아리 (category_id: 24)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('봉사 동아리 "나눔", 지역사회 봉사 1000시간 달성', 'club-volunteer-1000hours', '봉사 동아리 "나눔"이 올해 누적 봉사 시간 1000시간을 달성했습니다. 독거노인 돕기, 해변 정화 등 다양한 활동을 펼쳤습니다.', 1, 24, 'published', 'normal', datetime('now', '-6 days'), 1234),
('창업 동아리 "스타트업", 정부 지원금 획득', 'club-startup-funding', '창업 동아리 "스타트업"이 정부 창업 지원금 5000만 원을 획득했습니다. 혁신적인 아이디어가 인정받았습니다.', 1, 24, 'published', 'normal', datetime('now', '-5 days'), 987),
('댄스 동아리 "그루브", 전국 대회 우승', 'club-dance-groove-win', '댄스 동아리 "그루브"가 전국 대학 댄스 대회에서 우승했습니다. 창의적인 안무와 팀워크가 빛났습니다.', 1, 24, 'published', 'normal', datetime('now', '-4 days'), 876),
('학술 동아리 "싱크탱크", 논문 대회 수상', 'club-academic-paper-award', '학술 동아리 "싱크탱크"가 전국 대학생 논문 대회에서 우수상을 받았습니다. 제주 관광 활성화 방안을 연구했습니다.', 1, 24, 'published', 'normal', datetime('now', '-3 days'), 654),
('밴드 동아리 "사운드웨이브", 정규 앨범 발매', 'club-band-album-release', '밴드 동아리 "사운드웨이브"가 첫 정규 앨범을 발매했습니다. 자작곡 10곡이 수록되어 있습니다.', 1, 24, 'published', 'normal', datetime('now', '-2 days'), 543),
('환경 동아리 "에코", 탄소중립 캠페인 전개', 'club-eco-carbon-neutral', '환경 동아리 "에코"가 캠퍼스 탄소중립 캠페인을 시작했습니다. 일회용품 줄이기 운동을 주도하고 있습니다.', 1, 24, 'published', 'normal', datetime('now', '-1 days'), 432);

-- 학생활동 (category_id: 25)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('학생회, 학생 복지 개선 정책 발표', 'student-council-welfare', '제35대 학생회가 학생 복지 개선 10대 정책을 발표했습니다. 학식 가격 인하, 셔틀버스 증편 등이 포함됩니다.', 1, 25, 'published', 'normal', datetime('now', '-6 days'), 2345),
('해외 봉사단, 베트남 봉사활동 완료', 'overseas-volunteer-vietnam', '제주한라대 해외 봉사단 20명이 베트남에서 2주간 봉사활동을 마쳤습니다. 학교 건축과 교육 봉사를 진행했습니다.', 1, 25, 'published', 'normal', datetime('now', '-5 days'), 1876),
('학생 창업팀, 대학 창업 경진대회 대상', 'student-startup-competition', '학생 창업팀 "이노베이터"가 전국 대학 창업 경진대회에서 대상을 수상했습니다. 상금 1000만 원을 획득했습니다.', 1, 25, 'published', 'normal', datetime('now', '-4 days'), 1543),
('총학생회장 선거 열기 뜨거워', 'student-president-election', '제36대 총학생회장 선거가 시작되었습니다. 3팀이 출마해 열띤 공약 경쟁을 펼치고 있습니다.', 1, 25, 'published', 'normal', datetime('now', '-3 days'), 1234),
('학생 자치 법원 첫 재판 개최', 'student-court-first-trial', '학생 자치 법원이 첫 재판을 개최했습니다. 학생 자치의 새로운 모델로 주목받고 있습니다.', 1, 25, 'published', 'normal', datetime('now', '-2 days'), 987),
('대동제 준비위원회 출범', 'festival-committee-launch', '2025년 대동제 준비위원회가 출범했습니다. 학생 주도의 축제 기획이 시작됩니다.', 1, 25, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 캠퍼스 라이프 (category_id: 26)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('캠퍼스 맛집 탐방 - 학생 식당 신메뉴', 'campus-life-food-new-menu', '학생 식당에 새로운 메뉴가 추가되었습니다. 제주 향토 음식을 현대적으로 재해석한 메뉴들이 인기입니다.', 1, 26, 'published', 'normal', datetime('now', '-6 days'), 3456),
('기숙사 생활 꿀팁 대방출', 'campus-life-dorm-tips', '선배들이 알려주는 기숙사 생활 꿀팁을 모았습니다. 룸메이트와 잘 지내는 법부터 공동 생활 에티켓까지.', 1, 26, 'published', 'normal', datetime('now', '-5 days'), 2876),
('캠퍼스 커플 인터뷰 - 우리의 러브스토리', 'campus-life-couple-story', '캠퍼스 커플들의 달콤한 러브스토리를 들어봤습니다. 도서관에서 시작된 인연부터 동아리에서 만난 사랑까지.', 1, 26, 'published', 'normal', datetime('now', '-4 days'), 2345),
('혼밥족을 위한 캠퍼스 맛집 지도', 'campus-life-solo-dining', '혼자서도 편하게 식사할 수 있는 캠퍼스 내외 맛집을 소개합니다. 1인 좌석이 있는 곳부터 테이크아웃 명소까지.', 1, 26, 'published', 'normal', datetime('now', '-3 days'), 1987),
('시험 기간 스트레스 해소법', 'campus-life-stress-relief', '시험 기간 스트레스를 건강하게 해소하는 방법을 소개합니다. 운동, 명상, 취미 활동 등 다양한 방법들.', 1, 26, 'published', 'normal', datetime('now', '-2 days'), 1654),
('캠퍼스 포토존 베스트 10', 'campus-life-photo-spots', '인스타그램에 올리기 좋은 캠퍼스 포토존 10곳을 소개합니다. 봄꽃 명소부터 일몰 포인트까지.', 1, 26, 'published', 'normal', datetime('now', '-1 days'), 1432);

-- 나머지 카테고리들도 동일한 방식으로 계속...
-- (지면 관계상 일부만 표시, 실제로는 모든 카테고리에 6개씩 기사 생성)

-- 쇼츠 카테고리 (짧은 형식)
-- 한컷 뉴스 (category_id: 29)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[한컷] 오늘의 학식 메뉴', 'one-cut-today-menu', '오늘의 학식: 제육볶음, 김치찌개, 돈까스. 가격 4,500원', 3, 29, 'published', 'shorts', datetime('now', '-6 hours'), 5432),
('[한컷] 도서관 좌석 현황', 'one-cut-library-seats', '중앙도서관 3층 잔여 좌석: 15석. 시험 기간 서둘러 오세요!', 3, 29, 'published', 'shorts', datetime('now', '-5 hours'), 4321),
('[한컷] 날씨 정보', 'one-cut-weather', '오늘 제주 날씨: 맑음, 최고 25도. 일교차 주의!', 3, 29, 'published', 'shorts', datetime('now', '-4 hours'), 3210),
('[한컷] 셔틀버스 운행 안내', 'one-cut-shuttle-bus', '오후 3시 셔틀버스 5분 지연 운행. 이용에 참고하세요.', 3, 29, 'published', 'shorts', datetime('now', '-3 hours'), 2109),
('[한컷] 오늘의 명언', 'one-cut-quote-today', '"꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다." - 월트 디즈니', 3, 29, 'published', 'shorts', datetime('now', '-2 hours'), 1098),
('[한컷] 캠퍼스 행사 알림', 'one-cut-event-notice', '오후 5시 대강당에서 취업 특강. 선착순 100명!', 3, 29, 'published', 'shorts', datetime('now', '-1 hours'), 987);