-- Insert Essay categories
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES 
  ('제주에서보내는시간', 'time-in-jeju', 'essay'),
  ('꿈과 희망', 'dreams-hopes', 'essay'),
  ('여행과 탐방', 'travel-exploration', 'essay'),
  ('문학과 예술', 'literature-art', 'essay'),
  ('이달의 테마 에세이', 'monthly-theme-essay', 'essay'),
  ('나만의 생각 정리', 'my-thoughts', 'essay');

-- Insert Opinion categories  
INSERT OR IGNORE INTO categories (name, slug, parent_category) VALUES 
  ('사설·칼럼', 'editorial-column', 'opinion'),
  ('교수칼럼', 'professor-column', 'opinion'),
  ('독자기고', 'reader-contribution', 'opinion'),
  ('익명의 목소리', 'anonymous-voice', 'opinion'),
  ('함께 읽는 책·영화 추천', 'book-movie-recommendation', 'opinion');

-- Essay: 제주에서보내는시간 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, created_at) VALUES 
  ('올레길 7코스에서 만난 봄', 
   'essay-jeju-1', 
   '제주의 봄은 유채꽃과 함께 찾아온다. 올레길 7코스를 걷다 보면 노란 물결이 바람에 일렁이는 모습을 볼 수 있다. 바다와 어우러진 유채꽃밭은 제주만의 특별한 풍경이다. 이곳에서 보낸 시간들이 내 대학 생활의 가장 아름다운 추억이 될 것 같다.', 
   (SELECT category_id FROM categories WHERE slug = 'time-in-jeju'), 1, 234, datetime('now', '-10 days')),
   
  ('한라산 백록담에 오르며', 
   'essay-jeju-2', 
   '새벽 4시, 성판악에서 시작한 등반. 9시간의 힘든 여정 끝에 마침내 백록담에 도착했다. 정상에서 바라본 제주의 모습은 말로 표현할 수 없을 만큼 장관이었다. 힘들었지만 포기하지 않고 올라온 나 자신이 자랑스러웠다.', 
   (SELECT category_id FROM categories WHERE slug = 'time-in-jeju'), 2, 189, datetime('now', '-9 days'));

-- Essay: 꿈과 희망 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, created_at) VALUES 
  ('스물두 살, 나의 꿈을 찾아서', 
   'essay-dream-1', 
   '대학 3학년, 진로를 고민하는 시기다. 전공과 적성 사이에서 방황했던 나는 결국 내가 진짜 하고 싶은 일을 찾기로 했다. 실패를 두려워하지 않고 도전하는 것, 그것이 청춘의 특권 아닐까.', 
   (SELECT category_id FROM categories WHERE slug = 'dreams-hopes'), 3, 156, datetime('now', '-8 days')),
   
  ('첫 인턴십, 새로운 시작', 
   'essay-dream-2', 
   '드디어 꿈꾸던 회사에서 인턴십을 시작했다. 처음엔 모든 것이 서툴고 어려웠지만, 하루하루 성장하는 나를 발견할 수 있었다. 실무를 경험하며 얻은 자신감이 앞으로의 취업 준비에 큰 힘이 될 것 같다.', 
   (SELECT category_id FROM categories WHERE slug = 'dreams-hopes'), 4, 145, datetime('now', '-7 days'));

-- Essay: 여행과 탐방 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, created_at) VALUES 
  ('우도에서 보낸 하루', 
   'essay-travel-1', 
   '자전거를 타고 우도 한 바퀴. 검멸레 해변의 까만 모래, 하고수동 해수욕장의 에메랄드빛 바다, 그리고 땅콩 아이스크림. 작은 섬이지만 제주 안의 또 다른 제주를 발견한 기분이었다.', 
   (SELECT category_id FROM categories WHERE slug = 'travel-exploration'), 5, 167, datetime('now', '-6 days')),
   
  ('서귀포 매일올레시장 탐방기', 
   'essay-travel-2', 
   '토요일 아침, 친구들과 함께 서귀포 매일올레시장을 찾았다. 할머니들이 직접 키운 채소부터 갓 잡은 생선까지, 제주의 신선한 먹거리가 가득했다. 시장 구경의 백미는 역시 먹방! 호떡과 오메기떡으로 배를 채웠다.', 
   (SELECT category_id FROM categories WHERE slug = 'travel-exploration'), 1, 198, datetime('now', '-5 days'));

-- Opinion: 사설·칼럼 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, created_at) VALUES 
  ('[사설] 대학 등록금 인상, 학생 의견 수렴이 먼저다', 
   'opinion-editorial-1', 
   '최근 발표된 등록금 인상안에 대해 학생들의 우려가 크다. 물가 상승을 이유로 한 인상은 불가피한 면이 있지만, 학생들과의 충분한 소통 없이 일방적으로 결정된 것은 문제다. 대학은 학생들의 의견을 적극 수렴하고, 인상분에 대한 명확한 사용 계획을 제시해야 한다.', 
   (SELECT category_id FROM categories WHERE slug = 'editorial-column'), 2, 456, datetime('now', '-4 days')),
   
  ('[칼럼] 지속가능한 캠퍼스를 위하여', 
   'opinion-editorial-2', 
   '우리 대학도 ESG 경영에 동참해야 할 때다. 일회용품 사용 줄이기, 에너지 절약, 친환경 캠퍼스 조성 등 작은 실천부터 시작할 수 있다. 미래 세대를 위한 지속가능한 캠퍼스 만들기에 모두가 동참했으면 한다.', 
   (SELECT category_id FROM categories WHERE slug = 'editorial-column'), 3, 234, datetime('now', '-3 days'));

-- Opinion: 교수칼럼 샘플 기사
INSERT OR IGNORE INTO articles (title, slug, content, category_id, author_id, view_count, created_at) VALUES 
  ('[교수칼럼] AI 시대, 인문학의 중요성', 
   'opinion-professor-1', 
   'AI가 많은 일을 대체하는 시대가 왔지만, 오히려 인문학적 소양이 더욱 중요해졌다. 비판적 사고력, 창의성, 공감 능력은 AI가 대체할 수 없는 인간만의 영역이다. 학생들이 전공과 관계없이 인문학적 소양을 기르길 바란다.', 
   (SELECT category_id FROM categories WHERE slug = 'professor-column'), 4, 345, datetime('now', '-2 days')),
   
  ('[교수칼럼] 실패를 두려워하지 말자', 
   'opinion-professor-2', 
   '30년간 교단에 서며 수많은 학생을 만났다. 성공한 제자들의 공통점은 실패를 두려워하지 않았다는 것이다. 젊은 시절의 실패는 성장의 밑거름이 된다. 도전하고, 실패하고, 다시 일어서는 용기를 가지길 바란다.', 
   (SELECT category_id FROM categories WHERE slug = 'professor-column'), 5, 289, datetime('now', '-1 days'));