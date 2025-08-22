-- Test article for Campus category
INSERT INTO articles (title, slug, content, category_id, author_id, view_count, featured_image_url, created_at) VALUES 
  ('테스트: 2025학년도 신입생 오리엔테이션', 
   'test-campus-1', 
   '조인범 교수님과 함께하는 신입생 오리엔테이션이 성공적으로 진행되었습니다.', 
   (SELECT category_id FROM categories WHERE slug = 'university-news'), 
   1, 
   100, 
   'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
   datetime('now'));