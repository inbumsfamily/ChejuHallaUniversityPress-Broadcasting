-- 샘플 기사 생성 SQL - Part 2: 신문사, 캠퍼스 카테고리 (28-39)

-- 신문사소개 (category_id: 28)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('제주한라대 신문사, 디지털 전환 가속화', 'newspaper-digital-transformation', '제주한라대 신문사가 디지털 전환을 가속화하고 있습니다. 온라인 플랫폼을 강화하고 모바일 최적화를 통해 독자들과의 소통을 확대하고 있습니다.', 2, 28, 'published', 'normal', datetime('now', '-6 days'), 1543),
('신문사 창간 35주년 기념 특별호 발간', 'newspaper-35th-anniversary', '제주한라대 신문사가 창간 35주년을 맞아 특별호를 발간했습니다. 그동안의 역사와 미래 비전을 담았습니다.', 2, 28, 'published', 'normal', datetime('now', '-5 days'), 1234),
('신문사 기자단 신규 모집 공고', 'newspaper-recruit-2025', '2025년 신문사 기자단을 모집합니다. 글쓰기에 열정이 있는 학생들의 많은 지원을 기다립니다.', 2, 28, 'published', 'normal', datetime('now', '-4 days'), 987),
('온라인 신문 플랫폼 리뉴얼 오픈', 'online-newspaper-renewal', '더욱 편리하고 세련된 디자인의 온라인 신문 플랫폼이 오픈했습니다. 모바일 환경에 최적화되었습니다.', 2, 28, 'published', 'normal', datetime('now', '-3 days'), 765),
('신문사 편집실 현대화 사업 완료', 'newsroom-modernization', '최신 편집 장비와 소프트웨어를 도입한 신문사 편집실 현대화 사업이 완료되었습니다.', 2, 28, 'published', 'normal', datetime('now', '-2 days'), 543),
('언론인 양성 프로그램 운영 시작', 'journalism-training-program', '예비 언론인을 위한 전문 교육 프로그램이 시작되었습니다. 현직 기자들의 멘토링도 제공됩니다.', 2, 28, 'published', 'normal', datetime('now', '-1 days'), 432);

-- 현장취재 (category_id: 29)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[현장취재] 제주 4.3 평화공원 특별 전시회', 'jeju-43-peace-exhibition', '제주 4.3 평화공원에서 열린 특별 전시회를 취재했습니다. 역사의 아픔을 기억하고 평화의 소중함을 되새기는 시간이었습니다.', 2, 29, 'published', 'normal', datetime('now', '-6 days'), 2134),
('[현장취재] 제주 청년 창업 박람회 현장', 'jeju-youth-startup-expo', '제주 청년 창업 박람회 현장을 다녀왔습니다. 혁신적인 아이디어와 열정 넘치는 청년 창업가들을 만났습니다.', 2, 29, 'published', 'normal', datetime('now', '-5 days'), 1876),
('[현장취재] 한라산 정상 등반 도전기', 'hallasan-climbing-challenge', '한라산 정상 등반에 도전한 신문사 기자들의 생생한 체험기를 전합니다.', 2, 29, 'published', 'normal', datetime('now', '-4 days'), 1543),
('[현장취재] 제주 전통시장 활성화 프로젝트', 'jeju-market-revitalization', '제주 전통시장 활성화 프로젝트 현장을 취재했습니다. 전통과 현대가 조화를 이루는 모습이 인상적이었습니다.', 2, 29, 'published', 'normal', datetime('now', '-3 days'), 1234),
('[현장취재] 제주 해녀 문화 체험', 'jeju-haenyeo-culture', '유네스코 인류무형문화유산인 제주 해녀 문화를 직접 체험하고 취재했습니다.', 2, 29, 'published', 'normal', datetime('now', '-2 days'), 987),
('[현장취재] 제주 스타트업 캠퍼스 탐방', 'jeju-startup-campus', '제주 스타트업 캠퍼스를 탐방하며 청년 창업의 현장을 취재했습니다.', 2, 29, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 캠퍼스 리포트 (category_id: 30)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[캠퍼스 리포트] 학생식당 메뉴 개선 요구 증가', 'cafeteria-menu-improvement', '학생들의 학생식당 메뉴 개선 요구가 증가하고 있습니다. 설문조사 결과와 개선 방안을 살펴봅니다.', 2, 30, 'published', 'normal', datetime('now', '-6 days'), 1876),
('[캠퍼스 리포트] 주차 공간 부족 문제 심각', 'parking-shortage-issue', '캠퍼스 내 주차 공간 부족 문제가 심각합니다. 학생들의 불편과 해결 방안을 취재했습니다.', 2, 30, 'published', 'normal', datetime('now', '-5 days'), 1543),
('[캠퍼스 리포트] 도서관 이용률 증가 추세', 'library-usage-increase', '중앙도서관 이용률이 크게 증가했습니다. 개선된 시설과 서비스가 주효했다는 분석입니다.', 2, 30, 'published', 'normal', datetime('now', '-4 days'), 1234),
('[캠퍼스 리포트] 캠퍼스 내 흡연 문제 여전', 'campus-smoking-issue', '금연 캠퍼스 정책에도 불구하고 흡연 문제가 여전합니다. 현황과 대책을 살펴봅니다.', 2, 30, 'published', 'normal', datetime('now', '-3 days'), 987),
('[캠퍼스 리포트] 기숙사 시설 개선 완료', 'dormitory-improvement-complete', '기숙사 시설 개선 공사가 완료되었습니다. 학생들의 만족도가 크게 향상되었습니다.', 2, 30, 'published', 'normal', datetime('now', '-2 days'), 765),
('[캠퍼스 리포트] 캠퍼스 안전 강화 대책 시행', 'campus-safety-measures', 'CCTV 추가 설치 등 캠퍼스 안전 강화 대책이 시행되었습니다.', 2, 30, 'published', 'normal', datetime('now', '-1 days'), 543);

-- 신문사 활동기 (category_id: 31)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[활동기] 신문사 워크숍, 취재 역량 강화', 'newspaper-workshop-2025', '2박 3일간 진행된 신문사 워크숍에서 취재 역량 강화 교육이 진행되었습니다.', 2, 31, 'published', 'normal', datetime('now', '-6 days'), 987),
('[활동기] 언론사 견학, MBC 제주 방문', 'mbc-jeju-visit', '신문사 기자단이 MBC 제주를 방문해 방송 제작 현장을 견학했습니다.', 2, 31, 'published', 'normal', datetime('now', '-5 days'), 765),
('[활동기] 신문사 창간 기념 행사 성료', 'newspaper-anniversary-event', '신문사 창간 기념 행사가 성공적으로 마무리되었습니다. OB들과의 만남도 이루어졌습니다.', 2, 31, 'published', 'normal', datetime('now', '-4 days'), 543),
('[활동기] 타 대학 신문사와 연합 세미나', 'university-press-seminar', '제주도내 대학 신문사들과 연합 세미나를 개최했습니다.', 2, 31, 'published', 'normal', datetime('now', '-3 days'), 432),
('[활동기] 신문사 봉사활동, 독거노인 돕기', 'newspaper-volunteer-elderly', '신문사 기자단이 독거노인 돕기 봉사활동을 진행했습니다.', 2, 31, 'published', 'normal', datetime('now', '-2 days'), 321),
('[활동기] 올해의 기자상 시상식 개최', 'journalist-award-ceremony', '2024년 올해의 기자상 시상식이 개최되었습니다. 최우수 기자상은 박지민 기자가 수상했습니다.', 2, 31, 'published', 'normal', datetime('now', '-1 days'), 234);

-- 대학소식 (category_id: 32)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('2025학년도 신입생 오리엔테이션 일정 공개', 'freshman-orientation-2025', '2025학년도 신입생 오리엔테이션 일정이 공개되었습니다. 3일간 다양한 프로그램이 진행됩니다.', 1, 32, 'published', 'normal', datetime('now', '-6 days'), 3421),
('제주한라대, 교육부 우수대학 선정', 'ministry-excellence-award', '제주한라대학교가 교육부 우수대학에 선정되었습니다. 혁신적인 교육 프로그램이 높은 평가를 받았습니다.', 1, 32, 'published', 'normal', datetime('now', '-5 days'), 2876),
('등록금 동결 결정, 학생 부담 완화', 'tuition-freeze-decision', '2025학년도 등록금 동결이 결정되었습니다. 5년 연속 동결로 학생들의 부담을 덜었습니다.', 1, 32, 'published', 'normal', datetime('now', '-4 days'), 2341),
('새 학기 수강신청 시스템 개선', 'course-registration-improvement', '수강신청 시스템이 전면 개선되었습니다. 서버 증설로 접속 장애가 해결되었습니다.', 1, 32, 'published', 'normal', datetime('now', '-3 days'), 1876),
('제주한라대, 산학협력 MOU 체결', 'industry-academic-mou', '제주한라대가 지역 10개 기업과 산학협력 MOU를 체결했습니다.', 1, 32, 'published', 'normal', datetime('now', '-2 days'), 1543),
('2025년 1학기 장학금 신청 안내', 'scholarship-application-2025', '2025년 1학기 장학금 신청이 시작되었습니다. 다양한 장학 혜택이 준비되어 있습니다.', 1, 32, 'published', 'normal', datetime('now', '-1 days'), 1234);

-- 지우전(지금 우리 전공은) (category_id: 33)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[지우전] 간호학과 실습실 24시간 개방', 'nursing-lab-24hours', '간호학과 실습실이 국가고시를 앞두고 24시간 개방됩니다. 학생들의 실습 기회가 확대되었습니다.', 1, 33, 'published', 'normal', datetime('now', '-6 days'), 2134),
('[지우전] AI소프트웨어과 해커톤 대회 개최', 'ai-software-hackathon', 'AI소프트웨어과에서 첫 해커톤 대회를 개최합니다. 우수 작품에는 상금과 인턴십 기회가 제공됩니다.', 1, 33, 'published', 'normal', datetime('now', '-5 days'), 1876),
('[지우전] 호텔조리과 학생 레스토랑 오픈', 'hotel-cooking-restaurant', '호텔조리과 학생들이 운영하는 실습 레스토랑이 오픈했습니다. 매주 금요일 운영됩니다.', 1, 33, 'published', 'normal', datetime('now', '-4 days'), 1543),
('[지우전] 관광경영과 현장실습 프로그램', 'tourism-field-training', '관광경영과 학생들이 제주 주요 호텔에서 현장실습을 진행합니다.', 1, 33, 'published', 'normal', datetime('now', '-3 days'), 1234),
('[지우전] 뷰티아트과 헤어쇼 성황리 개최', 'beauty-art-hair-show', '뷰티아트과 학생들의 헤어쇼가 성황리에 개최되었습니다. 창의적인 작품들이 눈길을 끌었습니다.', 1, 33, 'published', 'normal', datetime('now', '-2 days'), 987),
('[지우전] 사회복지과 자격증 취득률 90% 돌파', 'social-welfare-certificate', '사회복지과 학생들의 사회복지사 자격증 취득률이 90%를 돌파했습니다.', 1, 33, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 동아리 (category_id: 34)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('봉사동아리 "한라 사랑", 연간 봉사시간 1만 시간 돌파', 'volunteer-club-10000hours', '봉사동아리 "한라 사랑"이 연간 봉사시간 1만 시간을 돌파했습니다. 지역사회에 큰 기여를 하고 있습니다.', 1, 34, 'published', 'normal', datetime('now', '-6 days'), 1876),
('창업동아리 "스타트업 한라" 투자 유치 성공', 'startup-club-investment', '창업동아리가 엔젤투자자로부터 5천만원 투자를 유치했습니다.', 1, 34, 'published', 'normal', datetime('now', '-5 days'), 1543),
('댄스동아리 "리듬 한라" 전국대회 금상', 'dance-club-gold-medal', '댄스동아리가 전국 대학 댄스 경연대회에서 금상을 수상했습니다.', 1, 34, 'published', 'normal', datetime('now', '-4 days'), 1234),
('독서토론 동아리 "책벗" 작가 초청 강연회', 'book-club-author-lecture', '독서토론 동아리가 베스트셀러 작가를 초청해 강연회를 개최했습니다.', 1, 34, 'published', 'normal', datetime('now', '-3 days'), 987),
('환경동아리 "그린 한라" 해변 정화 활동', 'environment-club-beach-cleanup', '환경동아리가 제주 해변 정화 활동을 진행했습니다. 100kg의 쓰레기를 수거했습니다.', 1, 34, 'published', 'normal', datetime('now', '-2 days'), 765),
('2025년 신규 동아리 등록 안내', 'new-club-registration-2025', '2025년 신규 동아리 등록이 시작되었습니다. 다양한 분야의 동아리가 모집 중입니다.', 1, 34, 'published', 'normal', datetime('now', '-1 days'), 543);

-- 학생활동 (category_id: 35)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('총학생회 공약 이행률 85% 달성', 'student-council-achievement', '총학생회가 공약 이행률 85%를 달성했습니다. 학생 복지 향상에 큰 성과를 보였습니다.', 1, 35, 'published', 'normal', datetime('now', '-6 days'), 2341),
('학생자치 페스티벌 "한라제" 성황리 개최', 'halla-festival-success', '3일간 진행된 "한라제"가 성황리에 마무리되었습니다. 다양한 공연과 이벤트가 펼쳐졌습니다.', 1, 35, 'published', 'normal', datetime('now', '-5 days'), 1987),
('학생 멘토링 프로그램 참여자 모집', 'student-mentoring-recruitment', '선후배 간 멘토링 프로그램 참여자를 모집합니다. 학업과 진로 상담을 제공합니다.', 1, 35, 'published', 'normal', datetime('now', '-4 days'), 1543),
('학생 창업 지원센터 신설', 'student-startup-center', '학생 창업을 지원하는 전담 센터가 신설되었습니다. 공간과 멘토링을 제공합니다.', 1, 35, 'published', 'normal', datetime('now', '-3 days'), 1234),
('학생 봉사단 "한라 나눔" 출범', 'volunteer-corps-launch', '대학 차원의 학생 봉사단이 공식 출범했습니다. 체계적인 봉사활동을 진행합니다.', 1, 35, 'published', 'normal', datetime('now', '-2 days'), 987),
('학생 정책 제안 공모전 개최', 'student-policy-contest', '학생들의 아이디어를 모으는 정책 제안 공모전이 개최됩니다.', 1, 35, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 캠퍼스 라이프 (category_id: 36)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('캠퍼스 내 카페 3곳 신규 오픈', 'campus-new-cafes', '학생들의 휴식 공간인 카페 3곳이 캠퍼스 내에 새로 오픈했습니다.', 1, 36, 'published', 'normal', datetime('now', '-6 days'), 1654),
('대학생활 꿀팁 TOP 10', 'campus-life-tips-top10', '선배들이 전하는 대학생활 꿀팁 TOP 10을 소개합니다.', 1, 36, 'published', 'normal', datetime('now', '-5 days'), 2987),
('캠퍼스 커플 인터뷰 "우리의 사랑 이야기"', 'campus-couple-interview', '캠퍼스에서 만나 결혼까지 약속한 커플의 이야기를 들어봤습니다.', 1, 36, 'published', 'normal', datetime('now', '-4 days'), 3421),
('혼밥족을 위한 학교 주변 맛집', 'solo-dining-restaurants', '혼자 밥 먹기 좋은 학교 주변 맛집을 소개합니다.', 1, 36, 'published', 'normal', datetime('now', '-3 days'), 2134),
('캠퍼스 포토존 BEST 5', 'campus-photo-spots', '인생샷을 남길 수 있는 캠퍼스 내 포토존 BEST 5를 소개합니다.', 1, 36, 'published', 'normal', datetime('now', '-2 days'), 1876),
('시험기간 스트레스 해소법', 'exam-stress-relief', '시험기간 스트레스를 해소하는 효과적인 방법들을 소개합니다.', 1, 36, 'published', 'normal', datetime('now', '-1 days'), 1543);

-- 장학·복지·지원 (category_id: 37)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('2025년 신규 장학금 5종 신설', 'new-scholarships-2025', '저소득층, 다자녀, 장애학생 등을 위한 신규 장학금 5종이 신설되었습니다.', 1, 37, 'published', 'normal', datetime('now', '-6 days'), 3987),
('학생 복지 만족도 조사 결과 발표', 'welfare-satisfaction-survey', '학생 복지 만족도가 전년 대비 15% 상승했습니다. 지속적인 개선이 효과를 보였습니다.', 1, 37, 'published', 'normal', datetime('now', '-5 days'), 2341),
('무료 건강검진 서비스 시행', 'free-health-checkup', '전체 재학생 대상 무료 건강검진 서비스가 시행됩니다.', 1, 37, 'published', 'normal', datetime('now', '-4 days'), 1987),
('심리상담센터 이용률 증가', 'counseling-center-usage', '심리상담센터 이용률이 크게 증가했습니다. 전문 상담사가 상주합니다.', 1, 37, 'published', 'normal', datetime('now', '-3 days'), 1543),
('취업 지원 프로그램 확대', 'employment-support-expansion', '취업 지원 프로그램이 대폭 확대되었습니다. 1:1 컨설팅을 제공합니다.', 1, 37, 'published', 'normal', datetime('now', '-2 days'), 1234),
('기숙사비 인하 결정', 'dormitory-fee-reduction', '2025년부터 기숙사비가 10% 인하됩니다. 학생 부담이 줄어들 전망입니다.', 1, 37, 'published', 'normal', datetime('now', '-1 days'), 2876);

-- X-파일 (category_id: 38)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[X-파일] 도서관 7층의 미스터리', 'library-7th-floor-mystery', '도서관 7층에서 들리는 이상한 소리의 정체는? 학생들 사이에 퍼진 괴담을 파헤쳐봤습니다.', 1, 38, 'published', 'normal', datetime('now', '-6 days'), 4321),
('[X-파일] 학교 고양이 "한라냥"의 비밀', 'campus-cat-secret', '캠퍼스를 누비는 고양이 "한라냥"의 숨겨진 이야기를 추적했습니다.', 1, 38, 'published', 'normal', datetime('now', '-5 days'), 3654),
('[X-파일] 사라진 타임캡슐을 찾아서', 'missing-time-capsule', '10년 전 묻은 타임캡슐이 사라졌다? 그 행방을 추적합니다.', 1, 38, 'published', 'normal', datetime('now', '-4 days'), 2987),
('[X-파일] 학생식당 인기메뉴의 비밀 레시피', 'cafeteria-secret-recipe', '학생식당 인기메뉴의 비밀 레시피를 공개합니다.', 1, 38, 'published', 'normal', datetime('now', '-3 days'), 2341),
('[X-파일] 캠퍼스 유령 사진의 진실', 'campus-ghost-photo-truth', 'SNS에서 화제가 된 캠퍼스 유령 사진의 진실을 파헤칩니다.', 1, 38, 'published', 'normal', datetime('now', '-2 days'), 5432),
('[X-파일] 전설의 선배 "공부의 신" 찾기', 'legendary-senior-search', '4.5 만점을 받았다는 전설의 선배를 찾아 나섰습니다.', 1, 38, 'published', 'normal', datetime('now', '-1 days'), 3876);

-- 졸업생 인터뷰 (category_id: 39)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[졸업생 인터뷰] 삼성전자 입사한 AI과 졸업생', 'alumni-samsung-ai', 'AI소프트웨어과를 졸업하고 삼성전자에 입사한 김민준 선배의 이야기를 들어봤습니다.', 1, 39, 'published', 'normal', datetime('now', '-6 days'), 3421),
('[졸업생 인터뷰] 미슐랭 레스토랑 셰프가 된 졸업생', 'alumni-michelin-chef', '호텔조리과를 졸업하고 미슐랭 레스토랑 셰프가 된 이서연 선배를 만났습니다.', 1, 39, 'published', 'normal', datetime('now', '-5 days'), 2876),
('[졸업생 인터뷰] 제주도 최연소 공무원 합격자', 'alumni-youngest-civil-servant', '행정학과를 졸업하고 제주도 최연소 공무원이 된 박지훈 선배의 합격 비결을 들어봤습니다.', 1, 39, 'published', 'normal', datetime('now', '-4 days'), 2341),
('[졸업생 인터뷰] 간호사에서 의사가 된 특별한 도전', 'alumni-nurse-to-doctor', '간호학과를 졸업 후 의대에 편입해 의사가 된 최수진 선배의 도전기를 들어봤습니다.', 1, 39, 'published', 'normal', datetime('now', '-3 days'), 4567),
('[졸업생 인터뷰] 유튜버 10만 구독자 달성', 'alumni-youtuber-100k', '방송영상과를 졸업하고 유튜버로 성공한 강민호 선배를 만났습니다.', 1, 39, 'published', 'normal', datetime('now', '-2 days'), 3210),
('[졸업생 인터뷰] 사회적 기업 대표가 된 졸업생', 'alumni-social-enterprise-ceo', '사회복지과를 졸업하고 사회적 기업을 창업한 김나영 선배의 이야기입니다.', 1, 39, 'published', 'normal', datetime('now', '-1 days'), 1987);