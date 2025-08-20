-- 샘플 기사 생성 SQL - Part 4: 오피니언, 에세이 카테고리 (53-63)

-- 사설·칼럼 (category_id: 53)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[사설] 대학 교육의 미래, 변화가 필요하다', 'editorial-education-future', '4차 산업혁명 시대, 대학 교육의 패러다임 전환이 필요합니다. 단순한 지식 전달이 아닌 창의적 문제 해결 능력을 기르는 교육으로 변화해야 합니다.', 2, 53, 'published', 'normal', datetime('now', '-6 days'), 2876),
('[칼럼] 청년들에게 희망을 주는 사회', 'column-youth-hope', '청년들이 꿈을 꾸고 도전할 수 있는 사회를 만들어야 합니다. 실패를 용인하고 재도전의 기회를 주는 문화가 필요합니다.', 2, 53, 'published', 'normal', datetime('now', '-5 days'), 2341),
('[사설] 지역 대학의 위기와 기회', 'editorial-local-university', '지역 대학이 직면한 위기를 기회로 만들기 위한 전략이 필요합니다. 지역 특성을 살린 특성화가 답입니다.', 2, 53, 'published', 'normal', datetime('now', '-4 days'), 1987),
('[칼럼] 디지털 시대의 인문학', 'column-digital-humanities', '디지털 시대에도 인문학의 가치는 여전히 중요합니다. 기술과 인간의 조화로운 공존을 위해 인문학적 소양이 필요합니다.', 2, 53, 'published', 'normal', datetime('now', '-3 days'), 1654),
('[사설] 캠퍼스 내 다양성 존중 문화', 'editorial-campus-diversity', '다양성이 존중받는 캠퍼스 문화를 만들어야 합니다. 서로 다름을 인정하고 포용하는 성숙한 대학 문화가 필요합니다.', 2, 53, 'published', 'normal', datetime('now', '-2 days'), 1321),
('[칼럼] 지속가능한 제주의 미래', 'column-sustainable-jeju', '제주의 지속가능한 발전을 위해 환경과 개발의 균형이 필요합니다. 미래 세대를 위한 현명한 선택이 요구됩니다.', 2, 53, 'published', 'normal', datetime('now', '-1 days'), 987);

-- 교수 칼럼 (category_id: 54)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[교수칼럼] AI 시대, 교육의 역할 - 김민수 교수', 'professor-ai-education', 'AI가 일상화되는 시대, 교육은 무엇을 가르쳐야 할까요? 비판적 사고와 창의성이 더욱 중요해지고 있습니다.', 4, 54, 'published', 'normal', datetime('now', '-6 days'), 3421),
('[교수칼럼] 제주 관광의 질적 성장 - 이정희 교수', 'professor-tourism-quality', '양적 성장에서 질적 성장으로, 제주 관광의 패러다임 전환이 필요합니다. 지속가능한 관광 모델을 제시합니다.', 4, 54, 'published', 'normal', datetime('now', '-5 days'), 2876),
('[교수칼럼] 청년 창업의 성공 조건 - 박성진 교수', 'professor-startup-success', '청년 창업이 성공하기 위한 필수 조건들을 경영학적 관점에서 분석합니다.', 4, 54, 'published', 'normal', datetime('now', '-4 days'), 2341),
('[교수칼럼] 건강한 대학 생활 - 최수연 교수', 'professor-healthy-campus', '신체적, 정신적으로 건강한 대학 생활을 위한 조언을 드립니다. 균형 잡힌 생활이 중요합니다.', 4, 54, 'published', 'normal', datetime('now', '-3 days'), 1987),
('[교수칼럼] 글로벌 시대의 외국어 교육 - 정현우 교수', 'professor-language-education', '글로벌 시대에 필요한 실용적인 외국어 교육 방법을 제안합니다.', 4, 54, 'published', 'normal', datetime('now', '-2 days'), 1654),
('[교수칼럼] 제주 문화의 가치 - 강미영 교수', 'professor-jeju-culture', '제주 고유 문화의 가치를 재발견하고 계승하는 방법을 모색합니다.', 4, 54, 'published', 'normal', datetime('now', '-1 days'), 1321);

-- 독자 의견·제안 (category_id: 55)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[독자의견] 학생식당 운영시간 연장 요청', 'reader-cafeteria-hours', '저녁 수업이 있는 학생들을 위해 학생식당 운영시간을 연장해주세요. 많은 학생들이 불편을 겪고 있습니다.', 1, 55, 'published', 'normal', datetime('now', '-6 days'), 1987),
('[독자제안] 캠퍼스 내 자전거 도로 설치', 'reader-bike-road', '친환경 캠퍼스를 위해 자전거 도로 설치를 제안합니다. 안전하고 편리한 이동이 가능해질 것입니다.', 1, 55, 'published', 'normal', datetime('now', '-5 days'), 1654),
('[독자의견] 도서관 열람실 좌석 예약제 도입', 'reader-library-reservation', '도서관 열람실 좌석 예약제를 도입하면 효율적인 공간 활용이 가능할 것 같습니다.', 1, 55, 'published', 'normal', datetime('now', '-4 days'), 1321),
('[독자제안] 학생 휴게공간 확충 필요', 'reader-rest-area', '학생들이 쉴 수 있는 휴게공간이 부족합니다. 더 많은 휴게공간 마련을 제안합니다.', 1, 55, 'published', 'normal', datetime('now', '-3 days'), 987),
('[독자의견] 수강신청 시스템 개선 감사', 'reader-registration-thanks', '개선된 수강신청 시스템 덕분에 원하는 수업을 신청할 수 있었습니다. 감사합니다.', 1, 55, 'published', 'normal', datetime('now', '-2 days'), 765),
('[독자제안] 캠퍼스 안전 강화 방안', 'reader-campus-safety', '야간 캠퍼스 안전을 위해 가로등 추가 설치와 순찰 강화를 제안합니다.', 1, 55, 'published', 'normal', datetime('now', '-1 days'), 543);

-- 익명 목소리 (category_id: 56)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[익명목소리] "교수님, 과제가 너무 많아요"', 'anonymous-voice-assignment', '익명 제보: 한 과목에서 매주 과제가 3개씩 나옵니다. 다른 수업도 있는데 부담이 너무 큽니다.', 1, 56, 'published', 'normal', datetime('now', '-6 days'), 3210),
('[익명목소리] "학생회 운영 투명성 요구"', 'anonymous-voice-transparency', '익명 제보: 학생회 예산 사용 내역을 투명하게 공개해주세요. 학생들에게 알 권리가 있습니다.', 1, 56, 'published', 'normal', datetime('now', '-5 days'), 2654),
('[익명목소리] "시험 감독이 너무 엄격해요"', 'anonymous-voice-exam', '익명 제보: 시험 감독이 지나치게 엄격해서 오히려 집중이 안 됩니다. 적절한 수준의 감독을 부탁드립니다.', 1, 56, 'published', 'normal', datetime('now', '-4 days'), 2109),
('[익명목소리] "기숙사 통금 시간 완화 요청"', 'anonymous-voice-curfew', '익명 제보: 기숙사 통금 시간이 너무 이릅니다. 성인인 대학생에게 맞는 자율적인 규정이 필요합니다.', 1, 56, 'published', 'normal', datetime('now', '-3 days'), 1765),
('[익명목소리] "학과 MT 강제 참여 문제"', 'anonymous-voice-mt', '익명 제보: 학과 MT 참여를 강제하는 분위기가 부담스럽습니다. 자율적인 참여 문화가 필요합니다.', 1, 56, 'published', 'normal', datetime('now', '-2 days'), 1432),
('[익명목소리] "조별과제 무임승차 심각"', 'anonymous-voice-teamproject', '익명 제보: 조별과제에서 무임승차하는 학생들 때문에 피해를 보고 있습니다. 공정한 평가 방법이 필요합니다.', 1, 56, 'published', 'normal', datetime('now', '-1 days'), 2876);

-- 함께 읽는 책·영화 추천 (category_id: 57)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[책추천] 대학생이 읽어야 할 필독서 10선', 'book-recommendation-must-read', '대학 생활을 더욱 풍요롭게 만들어줄 필독서 10권을 추천합니다. 인생의 지침이 될 책들입니다.', 1, 57, 'published', 'normal', datetime('now', '-6 days'), 4567),
('[영화추천] 청춘을 위한 영화 "리틀 포레스트"', 'movie-recommendation-little-forest', '지친 청춘들에게 위로가 되는 영화 "리틀 포레스트"를 추천합니다. 자연과 함께하는 치유의 시간입니다.', 1, 57, 'published', 'normal', datetime('now', '-5 days'), 3876),
('[책추천] 취업 준비생을 위한 자기계발서', 'book-recommendation-job-prep', '취업 준비에 도움이 되는 실용적인 자기계발서를 소개합니다.', 1, 57, 'published', 'normal', datetime('now', '-4 days'), 3210),
('[영화추천] 동기부여가 되는 영화 "인턴"', 'movie-recommendation-intern', '나이와 경험을 뛰어넘는 도전을 그린 영화 "인턴"을 추천합니다.', 1, 57, 'published', 'normal', datetime('now', '-3 days'), 2654),
('[책추천] 제주를 배경으로 한 소설들', 'book-recommendation-jeju-novels', '제주의 아름다움과 역사를 담은 소설들을 소개합니다.', 1, 57, 'published', 'normal', datetime('now', '-2 days'), 2109),
('[영화추천] 대학생활을 그린 영화 "건축학개론"', 'movie-recommendation-architecture', '첫사랑과 청춘의 아름다움을 그린 "건축학개론"을 추천합니다.', 1, 57, 'published', 'normal', datetime('now', '-1 days'), 1765);

-- 제주에서 보내는 시간 (category_id: 58)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[에세이] 한라산 정상에서 맞은 일출', 'essay-hallasan-sunrise', '새벽 3시에 시작한 등반, 정상에서 맞이한 일출은 평생 잊지 못할 순간이었습니다. 구름 위로 떠오르는 태양을 보며 느낀 감동을 전합니다.', 1, 58, 'published', 'normal', datetime('now', '-6 days'), 3421),
('[에세이] 제주 바다가 주는 위로', 'essay-jeju-sea-comfort', '힘든 시기, 제주 바다는 나에게 큰 위로가 되었습니다. 파도 소리를 들으며 마음의 평화를 찾았던 이야기입니다.', 1, 58, 'published', 'normal', datetime('now', '-5 days'), 2876),
('[에세이] 올레길에서 만난 사람들', 'essay-olle-trail-people', '올레길을 걸으며 만난 따뜻한 사람들의 이야기. 길 위에서 나눈 짧은 대화가 큰 감동이 되었습니다.', 1, 58, 'published', 'normal', datetime('now', '-4 days'), 2341),
('[에세이] 제주의 사계절을 느끼며', 'essay-jeju-four-seasons', '제주에서 보낸 4년, 계절마다 다른 매력을 보여주는 제주의 아름다움을 담았습니다.', 1, 58, 'published', 'normal', datetime('now', '-3 days'), 1987),
('[에세이] 돌담 너머 보이는 풍경', 'essay-stone-wall-view', '제주의 돌담 너머로 보이는 풍경들. 그 속에 담긴 제주 사람들의 삶을 들여다봅니다.', 1, 58, 'published', 'normal', datetime('now', '-2 days'), 1654),
('[에세이] 제주에서 찾은 나만의 아지트', 'essay-jeju-hideout', '제주에서 발견한 나만의 특별한 장소들. 혼자만의 시간을 보내기 좋은 숨은 명소를 소개합니다.', 1, 58, 'published', 'normal', datetime('now', '-1 days'), 1321);

-- 꿈과 희망 (category_id: 59)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[에세이] 실패를 딛고 일어서다', 'essay-overcome-failure', '창업 실패 후 다시 일어선 이야기. 실패는 끝이 아니라 새로운 시작이었습니다.', 1, 59, 'published', 'normal', datetime('now', '-6 days'), 2654),
('[에세이] 꿈을 향한 도전은 계속된다', 'essay-dream-challenge', '의사가 되고 싶은 꿈을 포기하지 않고 도전하는 이야기. 늦었다고 생각할 때가 가장 빠른 때입니다.', 1, 59, 'published', 'normal', datetime('now', '-5 days'), 2109),
('[에세이] 작은 성취가 만드는 큰 변화', 'essay-small-achievement', '매일 작은 목표를 달성하며 만들어가는 변화. 꾸준함이 만드는 기적을 경험했습니다.', 1, 59, 'published', 'normal', datetime('now', '-4 days'), 1765),
('[에세이] 나를 믿어준 한 사람', 'essay-one-believer', '모두가 포기하라고 했을 때, 나를 믿어준 한 사람 덕분에 꿈을 이룰 수 있었습니다.', 1, 59, 'published', 'normal', datetime('now', '-3 days'), 1432),
('[에세이] 희망을 품고 걷는 길', 'essay-walking-with-hope', '불확실한 미래지만 희망을 품고 걸어가는 이유. 과정 자체가 의미 있는 여정입니다.', 1, 59, 'published', 'normal', datetime('now', '-2 days'), 1098),
('[에세이] 새로운 시작을 앞두고', 'essay-new-beginning', '졸업을 앞둔 마음. 두려움과 설렘이 공존하는 지금, 새로운 시작을 준비합니다.', 1, 59, 'published', 'normal', datetime('now', '-1 days'), 876);

-- 여행과 탐방 (category_id: 60)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[여행에세이] 제주 동쪽 끝 성산일출봉', 'essay-seongsan-sunrise', '성산일출봉에서 바라본 일출의 장관. 자연이 만들어낸 예술 작품을 감상했습니다.', 1, 60, 'published', 'normal', datetime('now', '-6 days'), 3210),
('[여행에세이] 서귀포 숨은 카페 탐방', 'essay-seogwipo-cafe', '서귀포의 숨은 카페들을 탐방하며 느낀 여유. 각 카페마다 특별한 이야기가 있었습니다.', 1, 60, 'published', 'normal', datetime('now', '-5 days'), 2654),
('[여행에세이] 우도 자전거 여행기', 'essay-udo-bicycle', '우도를 자전거로 한 바퀴 돌며 만난 풍경들. 페달을 밟으며 느낀 자유로움을 전합니다.', 1, 60, 'published', 'normal', datetime('now', '-4 days'), 2109),
('[여행에세이] 제주 전통시장 구경하기', 'essay-traditional-market', '제주의 전통시장을 돌아다니며 만난 정겨운 풍경. 시장 사람들의 따뜻한 인심을 느꼈습니다.', 1, 60, 'published', 'normal', datetime('now', '-3 days'), 1765),
('[여행에세이] 비 오는 날의 제주 여행', 'essay-rainy-jeju', '비 오는 날에만 볼 수 있는 제주의 또 다른 매력. 빗소리와 함께한 특별한 여행기입니다.', 1, 60, 'published', 'normal', datetime('now', '-2 days'), 1432),
('[여행에세이] 제주 서쪽 끝 수월봉 트레킹', 'essay-suwolbong-trekking', '수월봉 트레킹 코스를 걸으며 만난 절경. 지질학적 보물창고를 탐험했습니다.', 1, 60, 'published', 'normal', datetime('now', '-1 days'), 1098);

-- 문학과 예술 (category_id: 61)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[문학에세이] 시가 있는 캠퍼스', 'essay-poetry-campus', '캠퍼스 곳곳에서 발견한 시적인 순간들. 일상 속에서 찾은 문학적 영감을 나눕니다.', 1, 61, 'published', 'normal', datetime('now', '-6 days'), 1876),
('[예술에세이] 제주의 색을 담다', 'essay-jeju-colors', '제주만의 독특한 색감을 캔버스에 담아내는 과정. 자연이 주는 영감을 그림으로 표현했습니다.', 1, 61, 'published', 'normal', datetime('now', '-5 days'), 1543),
('[문학에세이] 도서관에서 만난 책들', 'essay-library-books', '도서관에서 우연히 만난 책들이 준 감동. 책 한 권이 인생을 바꿀 수 있음을 깨달았습니다.', 1, 61, 'published', 'normal', datetime('now', '-4 days'), 1234),
('[예술에세이] 음악이 흐르는 저녁', 'essay-music-evening', '캠퍼스에서 열린 음악회의 감동. 음악이 주는 위로와 희망을 느꼈습니다.', 1, 61, 'published', 'normal', datetime('now', '-3 days'), 987),
('[문학에세이] 글쓰기로 치유하는 시간', 'essay-writing-therapy', '글쓰기를 통해 마음을 치유하는 과정. 펜 끝에서 시작된 작은 변화들입니다.', 1, 61, 'published', 'normal', datetime('now', '-2 days'), 765),
('[예술에세이] 사진으로 담은 청춘', 'essay-photo-youth', '카메라로 담아낸 대학 생활의 순간들. 사진 한 장에 담긴 추억과 이야기를 전합니다.', 1, 61, 'published', 'normal', datetime('now', '-1 days'), 543);

-- 이달의 테마 에세이 (category_id: 62)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[3월 테마] 새 학기, 새로운 시작', 'essay-march-new-semester', '3월의 테마 "새로운 시작". 새 학기를 맞아 다짐하는 마음을 담았습니다.', 1, 62, 'published', 'normal', datetime('now', '-6 days'), 2876),
('[3월 테마] 봄과 함께 피어나는 꿈', 'essay-march-spring-dream', '봄의 시작과 함께 피어나는 새로운 꿈들. 따뜻한 봄날의 희망을 이야기합니다.', 1, 62, 'published', 'normal', datetime('now', '-5 days'), 2341),
('[3월 테마] 변화를 받아들이는 용기', 'essay-march-change-courage', '새로운 변화 앞에서 느끼는 두려움과 용기. 변화를 긍정적으로 받아들이는 자세를 배웠습니다.', 1, 62, 'published', 'normal', datetime('now', '-4 days'), 1987),
('[3월 테마] 만남과 이별의 계절', 'essay-march-meeting-parting', '졸업과 입학이 공존하는 3월. 만남과 이별이 주는 의미를 되새깁니다.', 1, 62, 'published', 'normal', datetime('now', '-3 days'), 1654),
('[3월 테마] 도전하는 청춘들에게', 'essay-march-youth-challenge', '새로운 도전을 시작하는 모든 청춘들에게 보내는 응원의 메시지입니다.', 1, 62, 'published', 'normal', datetime('now', '-2 days'), 1321),
('[3월 테마] 봄맞이 마음 정리', 'essay-march-spring-cleaning', '봄을 맞아 마음을 정리하는 시간. 새로운 시작을 위한 마음의 준비를 합니다.', 1, 62, 'published', 'normal', datetime('now', '-1 days'), 987);

-- 나만의 생각 정리 (category_id: 63)
INSERT INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
('[생각정리] 행복이란 무엇일까', 'essay-what-is-happiness', '대학생활을 하며 생각해본 행복의 의미. 소소한 일상 속에서 찾은 행복의 조각들입니다.', 1, 63, 'published', 'normal', datetime('now', '-6 days'), 2109),
('[생각정리] 나는 어떤 사람이 되고 싶은가', 'essay-who-i-want-to-be', '미래의 나에게 보내는 편지. 어떤 사람이 되고 싶은지에 대한 고민을 정리했습니다.', 1, 63, 'published', 'normal', datetime('now', '-5 days'), 1765),
('[생각정리] 관계에 대한 단상', 'essay-thoughts-on-relationships', '대학에서 만난 다양한 관계들. 인간관계에 대한 나만의 생각을 정리해봅니다.', 1, 63, 'published', 'normal', datetime('now', '-4 days'), 1432),
('[생각정리] 시간의 가치를 깨닫다', 'essay-value-of-time', '바쁜 대학생활 속에서 깨달은 시간의 소중함. 시간을 현명하게 사용하는 방법을 고민합니다.', 1, 63, 'published', 'normal', datetime('now', '-3 days'), 1098),
('[생각정리] 성공의 기준은 무엇인가', 'essay-definition-of-success', '남들이 정한 성공이 아닌 나만의 성공 기준. 진정한 성공이란 무엇인지 생각해봅니다.', 1, 63, 'published', 'normal', datetime('now', '-2 days'), 876),
('[생각정리] 20대의 마지막을 보내며', 'essay-end-of-twenties', '20대의 마지막을 보내며 드는 생각들. 지나온 시간을 돌아보고 앞으로를 준비합니다.', 1, 63, 'published', 'normal', datetime('now', '-1 days'), 654);