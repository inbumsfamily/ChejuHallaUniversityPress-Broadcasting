-- Test: Campus category articles
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('2025학년도 제주한라대학교 입학식 성황리 개최', 
   'campus-entrance-ceremony-2025', 
   '제주한라대학교가 2025학년도 신입생 입학식을 성황리에 개최했다. 3월 2일 대학 본관 대강당에서 진행된 이번 입학식에는 신입생 1,500여 명과 학부모, 교직원 등 3,000여 명이 참석했다.\n\n조인범 교무처장은 환영사에서 "제주한라대학교의 새 가족이 된 신입생 여러분을 진심으로 환영한다"며 "4년간의 대학 생활이 여러분의 꿈을 실현하는 소중한 시간이 되길 바란다"고 말했다.\n\n박혜서 교수는 "우리 대학은 학생 중심의 교육 혁신을 통해 4차 산업혁명 시대를 선도할 인재를 양성하고 있다"며 "다양한 프로그램과 지원을 통해 학생들의 성장을 돕겠다"고 강조했다.', 
   (SELECT category_id FROM categories WHERE slug = 'university-news'), 
   1, 
   523, 
   'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800',
   datetime('now', '-5 days'));

-- Test: Press category articles  
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('제주한라대학교 신문방송사 2025년 신규 기자 모집', 
   'press-recruitment-2025', 
   '제주한라대학교 신문방송사가 2025년 신규 기자를 모집한다. 모집 분야는 취재기자, 사진기자, 영상PD 등이며, 재학생 누구나 지원 가능하다.\n\n박한샘 부처장은 "신문방송사 활동을 통해 언론인으로서의 기본 소양을 기를 수 있다"며 "열정과 도전정신을 가진 학생들의 많은 지원을 바란다"고 말했다.\n\n선발된 학생들은 신문 제작, 방송 프로그램 기획 및 제작, 온라인 콘텐츠 제작 등 다양한 활동에 참여하게 된다.', 
   (SELECT category_id FROM categories WHERE slug = 'press/기자모집·공지'), 
   2, 
   234, 
   'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
   datetime('now', '-3 days'));

-- Test: Broadcast category articles
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, youtube_embed_id, created_at) VALUES 
  ('CHEBS 방송국 새 프로그램 "캠퍼스 투데이" 첫 방송', 
   'broadcast-campus-today-launch', 
   '제주한라대학교 교육방송국 CHEBS가 새로운 프로그램 "캠퍼스 투데이"를 선보였다. 매주 금요일 오후 6시에 방송되는 이 프로그램은 캠퍼스 소식과 학생들의 이야기를 다룬다.\n\n조인범 교수는 "학생들이 직접 기획하고 제작하는 프로그램을 통해 방송 실무 능력을 기를 수 있을 것"이라며 프로그램의 의미를 설명했다.\n\n첫 방송에서는 새 학기를 맞아 달라진 캠퍼스 시설과 신입생 인터뷰, 동아리 소개 등 다양한 코너가 준비됐다.', 
   (SELECT category_id FROM categories WHERE slug = 'broadcast/방송국소개'), 
   3, 
   456, 
   'dQw4w9WgXcQ',
   datetime('now', '-2 days'));