-- Insert test users with proper password hashes (bcrypt hash for "password123")
-- The hash below is for "password123"
INSERT OR IGNORE INTO users (email, nickname, password_hash, role_id) VALUES 
  ('admin@chu.ac.kr', '관리자', '$2b$10$g9o2J9LE8J5DYWSeFHmovuOcq730yTNrVnWAdQbH6GMdVrF/UV4l2', 1),
  ('editor@chu.ac.kr', '편집기자', '$2b$10$g9o2J9LE8J5DYWSeFHmovuOcq730yTNrVnWAdQbH6GMdVrF/UV4l2', 2),
  ('pd@chu.ac.kr', '방송PD', '$2b$10$g9o2J9LE8J5DYWSeFHmovuOcq730yTNrVnWAdQbH6GMdVrF/UV4l2', 3),
  ('premium@chu.ac.kr', '프리미엄회원', '$2b$10$g9o2J9LE8J5DYWSeFHmovuOcq730yTNrVnWAdQbH6GMdVrF/UV4l2', 4),
  ('user@chu.ac.kr', '일반회원', '$2b$10$g9o2J9LE8J5DYWSeFHmovuOcq730yTNrVnWAdQbH6GMdVrF/UV4l2', 5);

-- Insert sample articles
INSERT OR IGNORE INTO articles (title, slug, content, author_id, category_id, status, article_type, published_at, view_count) VALUES
  ('2025학년도 신입생 오리엔테이션 성황리 개최', '2025-orientation', '제주한라대학교가 2025학년도 신입생 오리엔테이션을 성황리에 개최했습니다. 이번 행사에는 약 1,500명의 신입생이 참여했으며...', 1, 2, 'published', 'normal', datetime('now'), 1234),
  ('도서관 리모델링 완료, 학습 환경 대폭 개선', 'library-remodeling', '중앙도서관의 리모델링 공사가 완료되어 학생들에게 더 나은 학습 환경을 제공하게 되었습니다...', 2, 2, 'published', 'normal', datetime('now'), 892),
  ('취업률 85% 달성, 역대 최고 기록', 'employment-rate-2025', '제주한라대학교가 2024년 졸업생 취업률 85%를 달성하며 역대 최고 기록을 세웠습니다...', 2, 3, 'published', 'normal', datetime('now'), 2156),
  ('캠퍼스 봄 축제 하이라이트', 'spring-festival-2025', '화창한 봄날에 펼쳐진 캠퍼스 축제의 하이라이트를 영상으로 담았습니다.', 3, 1, 'published', 'shorts', datetime('now'), 5200),
  ('학생회장 인터뷰: 새로운 비전과 계획', 'student-president-interview', '새로 선출된 학생회장과의 심층 인터뷰를 통해 앞으로의 계획을 들어봤습니다...', 3, 1, 'published', 'normal', datetime('now'), 1523);

-- Insert sample calendar events
INSERT OR IGNORE INTO academic_calendar_events (title, description, event_date_start, event_date_end, source) VALUES
  ('2학기 수강신청', '2025학년도 2학기 수강신청 기간입니다.', '2025-08-20', '2025-08-23', 'manual'),
  ('개강', '2025학년도 2학기 개강일', '2025-09-02', '2025-09-02', 'manual'),
  ('중간고사', '2025학년도 2학기 중간고사 기간', '2025-10-20', '2025-10-26', 'manual'),
  ('대학 축제', '제주한라대학교 가을 축제', '2025-10-15', '2025-10-17', 'manual'),
  ('기말고사', '2025학년도 2학기 기말고사 기간', '2025-12-15', '2025-12-21', 'manual');

-- Insert sample comments
INSERT OR IGNORE INTO comments (article_id, user_id, content, parent_comment_id) VALUES
  (1, 4, '신입생 여러분 환영합니다! 좋은 대학생활 되세요.', NULL),
  (1, 5, '정말 유익한 행사였습니다.', NULL),
  (2, 4, '도서관이 정말 깔끔해졌네요!', NULL),
  (3, 5, '취업률이 정말 높네요. 자랑스럽습니다.', NULL);