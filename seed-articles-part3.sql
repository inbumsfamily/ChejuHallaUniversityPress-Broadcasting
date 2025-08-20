-- 샘플 기사 생성 SQL - Part 3: 쇼츠, 기획보도, 제주소식 카테고리 (40-52)

-- 한컷 뉴스 (category_id: 40)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[한컷뉴스] 오늘의 캠퍼스 - 벚꽃 만개', 'onecut-cherry-blossom', '캠퍼스에 벚꽃이 만개했습니다. 한 장의 사진으로 전하는 봄의 전령입니다.', 1, 40, 'published', 'normal', datetime('now', '-6 days'), 5432),
('[한컷뉴스] 도서관 새벽 풍경', 'onecut-library-dawn', '시험기간 새벽 4시 도서관의 모습입니다. 학생들의 열정이 빛납니다.', 1, 40, 'published', 'normal', datetime('now', '-5 days'), 4321),
('[한컷뉴스] 학생식당 신메뉴 출시', 'onecut-new-menu', '학생식당에 제주 흑돼지 덮밥이 출시되었습니다. 가격은 4,500원입니다.', 1, 40, 'published', 'normal', datetime('now', '-4 days'), 3654),
('[한컷뉴스] 캠퍼스 고양이 한라냥', 'onecut-campus-cat', '캠퍼스 마스코트 한라냥이 오늘도 순찰 중입니다.', 1, 40, 'published', 'normal', datetime('now', '-3 days'), 6789),
('[한컷뉴스] 오늘의 날씨', 'onecut-weather-today', '오늘 제주 날씨, 맑음. 미세먼지 좋음. 완벽한 캠퍼스 날씨입니다.', 1, 40, 'published', 'normal', datetime('now', '-2 days'), 2987),
('[한컷뉴스] 주차장 만차 알림', 'onecut-parking-full', '오전 9시 기준 모든 주차장이 만차입니다. 대중교통 이용을 권합니다.', 1, 40, 'published', 'normal', datetime('now', '-1 days'), 1876);

-- 이슈 브리핑 (category_id: 41)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[이슈브리핑] 이번 주 핫이슈 TOP 5', 'issue-briefing-top5', '이번 주 캠퍼스를 뜨겁게 달군 이슈 TOP 5를 정리했습니다.', 1, 41, 'published', 'normal', datetime('now', '-6 days'), 3421),
('[이슈브리핑] 1분 뉴스 - 오늘의 주요 소식', 'issue-briefing-1minute', '오늘 하루 주요 소식을 1분 안에 확인하세요.', 1, 41, 'published', 'normal', datetime('now', '-5 days'), 2876),
('[이슈브리핑] 학생회 긴급 공지사항', 'issue-briefing-urgent', '학생회에서 전하는 긴급 공지사항입니다. 수강신청 관련 중요 변경사항이 있습니다.', 1, 41, 'published', 'normal', datetime('now', '-4 days'), 4567),
('[이슈브리핑] 이번 달 학사일정 한눈에', 'issue-briefing-schedule', '3월 학사일정을 한눈에 정리했습니다. 놓치면 안 되는 중요 일정을 확인하세요.', 1, 41, 'published', 'normal', datetime('now', '-3 days'), 2341),
('[이슈브리핑] 캠퍼스 트렌드 리포트', 'issue-briefing-trend', '요즘 캠퍼스에서 유행하는 트렌드를 정리했습니다.', 1, 41, 'published', 'normal', datetime('now', '-2 days'), 1987),
('[이슈브리핑] 주말 행사 미리보기', 'issue-briefing-weekend', '이번 주말 캠퍼스와 제주에서 열리는 행사를 미리 확인하세요.', 1, 41, 'published', 'normal', datetime('now', '-1 days'), 1543);

-- 익명소식 (category_id: 42)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[익명소식] "도서관 에어컨 너무 추워요"', 'anonymous-library-aircon', '익명 제보: 도서관 에어컨이 너무 강해서 공부하기 힘듭니다. 온도 조절을 부탁드립니다.', 1, 42, 'published', 'normal', datetime('now', '-6 days'), 2341),
('[익명소식] "학생식당 와이파이 설치 요청"', 'anonymous-cafeteria-wifi', '익명 제보: 학생식당에 와이파이를 설치해주세요. 점심시간에도 과제를 해야 합니다.', 1, 42, 'published', 'normal', datetime('now', '-5 days'), 1987),
('[익명소식] "주차장 불법주차 심각"', 'anonymous-illegal-parking', '익명 제보: 장애인 주차구역 불법주차가 심각합니다. 단속을 강화해주세요.', 1, 42, 'published', 'normal', datetime('now', '-4 days'), 1654),
('[익명소식] "기숙사 소음 문제 해결 요청"', 'anonymous-dorm-noise', '익명 제보: 기숙사 층간소음이 심각합니다. 규정을 강화해주세요.', 1, 42, 'published', 'normal', datetime('now', '-3 days'), 1321),
('[익명소식] "캠퍼스 내 흡연 단속 필요"', 'anonymous-smoking-control', '익명 제보: 금연구역에서 흡연하는 학생들이 많습니다. 단속이 필요합니다.', 1, 42, 'published', 'normal', datetime('now', '-2 days'), 987),
('[익명소식] "심야 버스 운행 요청"', 'anonymous-night-bus', '익명 제보: 도서관 24시간 개방 시 심야 버스 운행을 요청합니다.', 1, 42, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 재학생 꿀팁 (category_id: 43)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[꿀팁] 수강신청 100% 성공하는 방법', 'tips-course-registration', '선배들이 전수하는 수강신청 필승 전략을 공개합니다.', 1, 43, 'published', 'normal', datetime('now', '-6 days'), 8765),
('[꿀팁] 학점 4.0 이상 받는 공부법', 'tips-study-method', 'A+ 장학생들의 공부 비법을 공개합니다.', 1, 43, 'published', 'normal', datetime('now', '-5 days'), 7654),
('[꿀팁] 학교 주변 저렴한 맛집 TOP 10', 'tips-cheap-restaurants', '5천원 이하로 배부르게 먹을 수 있는 맛집을 소개합니다.', 1, 43, 'published', 'normal', datetime('now', '-4 days'), 6543),
('[꿀팁] 과제 효율적으로 하는 방법', 'tips-assignment-efficiency', '시간을 절약하면서 퀄리티를 높이는 과제 작성법을 알려드립니다.', 1, 43, 'published', 'normal', datetime('now', '-3 days'), 5432),
('[꿀팁] 도서관 숨은 공부 장소', 'tips-library-secret-spots', '도서관의 숨겨진 공부 명당을 공개합니다.', 1, 43, 'published', 'normal', datetime('now', '-2 days'), 4321),
('[꿀팁] 장학금 받기 쉬운 방법', 'tips-scholarship-guide', '다양한 장학금 정보와 신청 팁을 알려드립니다.', 1, 43, 'published', 'normal', datetime('now', '-1 days'), 9876);

-- 진로·취업 (category_id: 44)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[진로취업] 2025 상반기 채용 트렌드 분석', 'career-hiring-trend-2025', '2025년 상반기 기업 채용 트렌드와 준비 전략을 분석했습니다.', 2, 44, 'published', 'normal', datetime('now', '-6 days'), 4567),
('[진로취업] 자소서 작성 완벽 가이드', 'career-resume-guide', '인사담당자가 선호하는 자기소개서 작성법을 소개합니다.', 2, 44, 'published', 'normal', datetime('now', '-5 days'), 3876),
('[진로취업] 면접 준비 체크리스트', 'career-interview-checklist', '면접 전 반드시 확인해야 할 체크리스트를 정리했습니다.', 2, 44, 'published', 'normal', datetime('now', '-4 days'), 3210),
('[진로취업] IT 기업 취업 전략', 'career-it-strategy', 'IT 기업 취업을 위한 효과적인 준비 전략을 소개합니다.', 2, 44, 'published', 'normal', datetime('now', '-3 days'), 2876),
('[진로취업] 공기업 vs 대기업 비교 분석', 'career-public-vs-private', '공기업과 대기업의 장단점을 비교 분석했습니다.', 2, 44, 'published', 'normal', datetime('now', '-2 days'), 2341),
('[진로취업] 인턴십 프로그램 총정리', 'career-internship-programs', '2025년 인턴십 프로그램 정보를 총정리했습니다.', 2, 44, 'published', 'normal', datetime('now', '-1 days'), 1987);

-- 청년·지역 (category_id: 45)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[청년지역] 제주 청년 창업 지원 정책 총정리', 'youth-startup-support', '제주도에서 시행하는 청년 창업 지원 정책을 정리했습니다.', 2, 45, 'published', 'normal', datetime('now', '-6 days'), 2876),
('[청년지역] 청년 주거 지원 프로그램 안내', 'youth-housing-support', '제주 청년들을 위한 주거 지원 프로그램을 소개합니다.', 2, 45, 'published', 'normal', datetime('now', '-5 days'), 2341),
('[청년지역] 지역 청년 네트워크 구축', 'youth-local-network', '제주 청년들의 네트워크 구축 사례를 소개합니다.', 2, 45, 'published', 'normal', datetime('now', '-4 days'), 1987),
('[청년지역] 청년 정책 참여 방법', 'youth-policy-participation', '청년들이 정책 결정에 참여할 수 있는 방법을 안내합니다.', 2, 45, 'published', 'normal', datetime('now', '-3 days'), 1654),
('[청년지역] 제주 청년 일자리 현황', 'youth-job-status', '제주 지역 청년 일자리 현황과 전망을 분석했습니다.', 2, 45, 'published', 'normal', datetime('now', '-2 days'), 1321),
('[청년지역] 청년 문화 활동 지원', 'youth-culture-support', '청년 문화 활동 지원 프로그램을 소개합니다.', 2, 45, 'published', 'normal', datetime('now', '-1 days'), 987);

-- 복지·권익 (category_id: 46)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[복지권익] 학생 권익 보호 강화 방안', 'welfare-student-rights', '학생 권익 보호를 위한 새로운 제도가 시행됩니다.', 2, 46, 'published', 'normal', datetime('now', '-6 days'), 2341),
('[복지권익] 장애학생 지원 서비스 확대', 'welfare-disability-support', '장애학생을 위한 지원 서비스가 대폭 확대되었습니다.', 2, 46, 'published', 'normal', datetime('now', '-5 days'), 1987),
('[복지권익] 학생 복지 예산 증액', 'welfare-budget-increase', '2025년 학생 복지 예산이 30% 증액되었습니다.', 2, 46, 'published', 'normal', datetime('now', '-4 days'), 1654),
('[복지권익] 인권센터 상담 서비스', 'welfare-human-rights-center', '인권센터에서 제공하는 상담 서비스를 소개합니다.', 2, 46, 'published', 'normal', datetime('now', '-3 days'), 1321),
('[복지권익] 성평등 캠페인 실시', 'welfare-gender-equality', '캠퍼스 내 성평등 문화 확산을 위한 캠페인이 시작됩니다.', 2, 46, 'published', 'normal', datetime('now', '-2 days'), 987),
('[복지권익] 학생 건강권 보장 정책', 'welfare-health-rights', '학생들의 건강권 보장을 위한 새로운 정책이 발표되었습니다.', 2, 46, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 학술·연구 (category_id: 47)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[학술연구] AI 연구센터 설립', 'research-ai-center', '제주한라대에 AI 연구센터가 설립되었습니다.', 2, 47, 'published', 'normal', datetime('now', '-6 days'), 3210),
('[학술연구] 학부생 연구 프로그램 시작', 'research-undergraduate-program', '학부생들도 참여할 수 있는 연구 프로그램이 시작되었습니다.', 2, 47, 'published', 'normal', datetime('now', '-5 days'), 2654),
('[학술연구] 국제 학술대회 개최', 'research-international-conference', '제주한라대에서 국제 학술대회가 개최됩니다.', 2, 47, 'published', 'normal', datetime('now', '-4 days'), 2109),
('[학술연구] 연구 성과 특허 출원', 'research-patent-application', '교수진과 학생들의 연구 성과가 특허로 출원되었습니다.', 2, 47, 'published', 'normal', datetime('now', '-3 days'), 1765),
('[학술연구] 산학협력 연구 프로젝트', 'research-industry-project', '기업과 함께하는 산학협력 연구 프로젝트가 시작되었습니다.', 2, 47, 'published', 'normal', datetime('now', '-2 days'), 1432),
('[학술연구] 학술논문 작성 워크숍', 'research-paper-workshop', '학술논문 작성법을 배우는 워크숍이 개최됩니다.', 2, 47, 'published', 'normal', datetime('now', '-1 days'), 1098);

-- 제주이슈 (category_id: 48)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[제주이슈] 제2공항 건설 논란 지속', 'jeju-second-airport', '제주 제2공항 건설을 둘러싼 논란이 계속되고 있습니다.', 3, 48, 'published', 'normal', datetime('now', '-6 days'), 4567),
('[제주이슈] 관광객 증가로 인한 환경 문제', 'jeju-tourism-environment', '급증하는 관광객으로 인한 환경 문제가 심각해지고 있습니다.', 3, 48, 'published', 'normal', datetime('now', '-5 days'), 3876),
('[제주이슈] 청년 인구 유출 심각', 'jeju-youth-outflow', '제주 청년들의 수도권 유출이 심각한 수준입니다.', 3, 48, 'published', 'normal', datetime('now', '-4 days'), 3210),
('[제주이슈] 부동산 가격 급등 문제', 'jeju-real-estate-price', '제주 부동산 가격이 급등하며 주거 문제가 심화되고 있습니다.', 3, 48, 'published', 'normal', datetime('now', '-3 days'), 2654),
('[제주이슈] 쓰레기 처리 문제 대두', 'jeju-waste-problem', '제주의 쓰레기 처리 문제가 심각한 상황입니다.', 3, 48, 'published', 'normal', datetime('now', '-2 days'), 2109),
('[제주이슈] 대중교통 개선 요구 증가', 'jeju-public-transport', '제주 대중교통 시스템 개선 요구가 커지고 있습니다.', 3, 48, 'published', 'normal', datetime('now', '-1 days'), 1765);

-- 문화탐방 (category_id: 49)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[문화탐방] 제주 해녀박물관 탐방기', 'culture-haenyeo-museum', '유네스코 인류무형문화유산 해녀 문화를 만나다.', 3, 49, 'published', 'normal', datetime('now', '-6 days'), 2876),
('[문화탐방] 제주 돌문화공원 산책', 'culture-stone-park', '제주의 돌문화를 체험할 수 있는 특별한 공간을 소개합니다.', 3, 49, 'published', 'normal', datetime('now', '-5 days'), 2341),
('[문화탐방] 제주 전통 오일장 체험', 'culture-traditional-market', '제주 전통 오일장의 활기찬 모습을 전합니다.', 3, 49, 'published', 'normal', datetime('now', '-4 days'), 1987),
('[문화탐방] 제주 민속촌 방문기', 'culture-folk-village', '제주의 전통 생활상을 엿볼 수 있는 민속촌을 다녀왔습니다.', 3, 49, 'published', 'normal', datetime('now', '-3 days'), 1654),
('[문화탐방] 제주 예술 공간 탐방', 'culture-art-space', '제주의 숨은 예술 공간들을 소개합니다.', 3, 49, 'published', 'normal', datetime('now', '-2 days'), 1321),
('[문화탐방] 제주 전통 음식 문화', 'culture-traditional-food', '제주의 독특한 전통 음식 문화를 탐방했습니다.', 3, 49, 'published', 'normal', datetime('now', '-1 days'), 987);

-- 환경과 자연 (category_id: 50)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[환경자연] 한라산 생태계 보호 캠페인', 'nature-hallasan-protection', '한라산 생태계 보호를 위한 캠페인이 시작되었습니다.', 3, 50, 'published', 'normal', datetime('now', '-6 days'), 2341),
('[환경자연] 제주 바다 산호초 위기', 'nature-coral-crisis', '기후변화로 제주 바다 산호초가 위기에 처했습니다.', 3, 50, 'published', 'normal', datetime('now', '-5 days'), 1987),
('[환경자연] 곶자왈 보존의 중요성', 'nature-gotjawal-preservation', '제주의 허파, 곶자왈 보존의 중요성을 알아봅니다.', 3, 50, 'published', 'normal', datetime('now', '-4 days'), 1654),
('[환경자연] 제주 습지 생태계 탐방', 'nature-wetland-ecosystem', '제주의 소중한 습지 생태계를 탐방했습니다.', 3, 50, 'published', 'normal', datetime('now', '-3 days'), 1321),
('[환경자연] 기후변화와 제주 농업', 'nature-climate-agriculture', '기후변화가 제주 농업에 미치는 영향을 분석했습니다.', 3, 50, 'published', 'normal', datetime('now', '-2 days'), 987),
('[환경자연] 제주 해안 정화 활동', 'nature-beach-cleanup', '제주 해안 정화 활동에 참여했습니다.', 3, 50, 'published', 'normal', datetime('now', '-1 days'), 765);

-- 청년 창업 (category_id: 51)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[청년창업] 제주 청년 창업가 성공 스토리', 'startup-success-story', '제주에서 성공한 청년 창업가들의 이야기를 소개합니다.', 3, 51, 'published', 'normal', datetime('now', '-6 days'), 3210),
('[청년창업] 제주 창업 생태계 현황', 'startup-ecosystem-status', '제주의 창업 생태계 현황과 발전 방향을 살펴봅니다.', 3, 51, 'published', 'normal', datetime('now', '-5 days'), 2654),
('[청년창업] 창업 지원 프로그램 안내', 'startup-support-programs', '청년 창업을 위한 다양한 지원 프로그램을 소개합니다.', 3, 51, 'published', 'normal', datetime('now', '-4 days'), 2109),
('[청년창업] 소셜벤처 창업 사례', 'startup-social-venture', '사회 문제를 해결하는 소셜벤처 창업 사례를 소개합니다.', 3, 51, 'published', 'normal', datetime('now', '-3 days'), 1765),
('[청년창업] 창업 실패와 재도전', 'startup-failure-retry', '창업 실패를 딛고 재도전한 청년들의 이야기입니다.', 3, 51, 'published', 'normal', datetime('now', '-2 days'), 1432),
('[청년창업] 제주 로컬 브랜드 창업', 'startup-local-brand', '제주만의 특색을 살린 로컬 브랜드 창업 사례를 소개합니다.', 3, 51, 'published', 'normal', datetime('now', '-1 days'), 1098);

-- 제주전통마을 (category_id: 52)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[전통마을] 성읍민속마을 탐방기', 'village-seongeup-folk', '제주의 전통이 살아있는 성읍민속마을을 탐방했습니다.', 3, 52, 'published', 'normal', datetime('now', '-6 days'), 1876),
('[전통마을] 제주 돌담길의 비밀', 'village-stone-wall-secret', '제주 전통마을 돌담길에 숨겨진 이야기를 소개합니다.', 3, 52, 'published', 'normal', datetime('now', '-5 days'), 1543),
('[전통마을] 마을 어르신들의 옛날 이야기', 'village-elder-stories', '마을 어르신들이 들려주는 제주의 옛날 이야기입니다.', 3, 52, 'published', 'normal', datetime('now', '-4 days'), 1234),
('[전통마을] 제주 전통 가옥 구조', 'village-traditional-house', '제주 전통 가옥의 독특한 구조와 특징을 알아봅니다.', 3, 52, 'published', 'normal', datetime('now', '-3 days'), 987),
('[전통마을] 마을 공동체 문화', 'village-community-culture', '제주 전통마을의 공동체 문화를 체험했습니다.', 3, 52, 'published', 'normal', datetime('now', '-2 days'), 765),
('[전통마을] 전통마을 보존과 개발', 'village-preservation-development', '전통마을 보존과 개발 사이의 균형점을 찾아봅니다.', 3, 52, 'published', 'normal', datetime('now', '-1 days'), 543);