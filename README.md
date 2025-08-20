# 제주한라대학교 신문방송사 웹사이트

## 프로젝트 개요
- **이름**: 제주한라대학교 신문방송사
- **목표**: 제주한라대학교의 뉴스, 방송, 기획보도를 통합 관리하는 현대적인 웹 플랫폼 구축
- **주요 기능**: 
  - 다단계 사용자 인증 시스템 (JWT 기반)
  - 역할 기반 접근 제어 (RBAC) - 5개 역할 (관리자, 편집기자, 방송PD, 프리미엄회원, 일반회원)
  - 기사 관리 시스템 (CRUD)
  - 댓글 시스템
  - 학사일정 관리
  - 44개 카테고리별 기사 페이지

## 현재 구현된 기능
✅ 프로젝트 초기 설정 (Hono + Cloudflare Pages)
✅ 데이터베이스 스키마 설계 (Cloudflare D1)
✅ 사용자 인증 시스템 (JWT 기반)
✅ RBAC 시스템 구현
✅ 기사 관리 API (CRUD)
✅ 카테고리 관리 API (9개 메인, 44개 서브)
✅ 댓글 시스템 API
✅ 학사일정 API
✅ 기본 프론트엔드 UI
✅ 로그인/회원가입 모달
✅ 카테고리별 기사 페이지
✅ 기사 상세보기 페이지
✅ 샘플 기사 264개 (44개 카테고리 × 6개씩)
✅ 드롭다운 네비게이션 메뉴

## 페이지 라우트
| 경로 | 설명 |
|------|------|
| `/` | 메인 페이지 |
| `/broadcast` | 방송국 메인 |
| `/newspaper` | 신문사 메인 |
| `/campus` | 캠퍼스 메인 |
| `/shorts` | 쇼츠 메인 |
| `/special-report` | 기획보도 메인 |
| `/jeju-news` | 제주소식 메인 |
| `/opinion` | 오피니언 메인 |
| `/essay` | 에세이 메인 |
| `/{category-slug}` | 각 서브카테고리 페이지 (44개) |
| `/article/{slug}` | 기사 상세 페이지 |

## API 엔드포인트

### 인증 API
- `POST /api/auth/register` - 회원가입
- `POST /api/auth/login` - 로그인
- `GET /api/auth/me` - 현재 사용자 정보

### 기사 API
- `GET /api/articles` - 기사 목록 조회 (페이지네이션, 필터링 지원)
- `GET /api/articles/:slug` - 기사 상세 조회
- `POST /api/articles` - 기사 생성 (인증 필요)
- `PUT /api/articles/:id` - 기사 수정 (인증 필요)
- `DELETE /api/articles/:id` - 기사 삭제 (권한 필요)

### 카테고리 API
- `GET /api/categories` - 전체 카테고리 계층 구조 조회
- `GET /api/categories/:slug` - 특정 카테고리 조회

### 댓글 API
- `GET /api/comments/article/:articleId` - 기사별 댓글 조회
- `POST /api/comments` - 댓글 작성 (인증 필요)
- `PUT /api/comments/:id` - 댓글 수정 (작성자 또는 관리자)
- `DELETE /api/comments/:id` - 댓글 삭제 (작성자 또는 관리자)

### 학사일정 API
- `GET /api/calendar` - 학사일정 조회
- `POST /api/calendar` - 일정 생성 (관리자 전용)
- `PUT /api/calendar/:id` - 일정 수정 (관리자 전용)
- `DELETE /api/calendar/:id` - 일정 삭제 (관리자 전용)

## 미구현 기능
- [ ] 관리자 대시보드 완전 구현
- [ ] 이미지 업로드 기능 (R2 Storage 연동)
- [ ] 유튜브 비디오 임베드 기능
- [ ] 쇼츠 섹션 특화 UI
- [ ] 고급 검색 기능
- [ ] 통계 및 분석 대시보드
- [ ] 이메일 알림 시스템
- [ ] 소셜 미디어 공유 기능
- [ ] 태그 시스템
- [ ] 구독/알림 기능

## 개발 권장사항
1. **관리자 대시보드 완성**: 현재 기본 틀만 구현되어 있으므로 전체 기능 구현 필요
2. **파일 업로드**: Cloudflare R2를 활용한 이미지/파일 업로드 기능 추가
3. **캐싱 전략**: Cloudflare KV를 활용한 캐싱 구현으로 성능 향상
4. **SEO 최적화**: 메타 태그, 구조화된 데이터, 사이트맵 생성
5. **모바일 앱**: Progressive Web App (PWA) 변환 고려

## URLs
- **개발 서버**: https://3000-iplxodv5a27kcnt9garvb-6532622b.e2b.dev
- **프로덕션**: https://jeju-halla-media.pages.dev
- **GitHub**: https://github.com/inbumsfamily/ChejuHallaUniversityPress-Broadcasting

## 데이터 아키텍처
- **데이터베이스**: Cloudflare D1 (SQLite 기반)
- **주요 테이블**: 
  - users (사용자)
  - roles (역할)
  - articles (기사 - 264개 샘플 데이터 포함)
  - categories (카테고리 - 9개 메인, 44개 서브)
  - comments (댓글)
  - academic_calendar_events (학사일정)
  - site_settings (사이트 설정)
- **스토리지**: 
  - Cloudflare R2 (파일 저장용, 구현 예정)

## 사용자 가이드

### 테스트 계정
| 역할 | 이메일 | 비밀번호 | 권한 |
|------|--------|----------|------|
| 관리자 | admin@chu.ac.kr | password123 | 모든 권한 |
| 편집기자 | editor@chu.ac.kr | password123 | 신문사/기획보도 작성/수정 |
| 방송PD | pd@chu.ac.kr | password123 | 방송국/신문사 작성/수정 |
| 프리미엄회원 | premium@chu.ac.kr | password123 | 댓글 작성 |
| 일반회원 | user@chu.ac.kr | password123 | 읽기 전용 |

### 기본 사용법
1. 홈페이지 접속
2. 상단 메뉴에서 원하는 카테고리 선택 (드롭다운 메뉴 지원)
3. 기사 클릭하여 상세 내용 확인
4. 로그인 후 권한에 따른 기능 사용

## 기술 스택
- **프레임워크**: Hono + TypeScript
- **런타임**: Cloudflare Workers/Pages
- **데이터베이스**: Cloudflare D1
- **인증**: JWT (jose 라이브러리)
- **프론트엔드**: Vanilla JavaScript + Tailwind CSS
- **아이콘**: Font Awesome
- **HTTP 클라이언트**: Axios

## 개발 환경 설정

### 필요 사항
- Node.js 18+
- npm 또는 yarn
- Wrangler CLI
- PM2 (프로세스 관리)

### 설치 및 실행
```bash
# 의존성 설치
npm install

# 데이터베이스 마이그레이션 (로컬)
npm run db:migrate:local

# 시드 데이터 추가
npm run db:seed

# 샘플 기사 데이터 추가
npx wrangler d1 execute jeju-halla-media-production --local --file=./seed-articles-part1.sql
npx wrangler d1 execute jeju-halla-media-production --local --file=./seed-articles-part2.sql
npx wrangler d1 execute jeju-halla-media-production --local --file=./seed-articles-part3.sql
npx wrangler d1 execute jeju-halla-media-production --local --file=./seed-articles-part4.sql

# 개발 서버 실행
npm run build
pm2 start ecosystem.config.cjs

# 또는 Vite 개발 서버
npm run dev
```

### 프로덕션 배포
```bash
# Cloudflare API 설정
setup_cloudflare_api_key

# 빌드
npm run build

# Cloudflare Pages 배포 (Wrangler CLI)
npx wrangler pages deploy dist --project-name jeju-halla-media
```

### ⚠️ 중요: D1 데이터베이스 바인딩 설정
Cloudflare Dashboard에서 수동으로 D1 바인딩을 추가해야 합니다:
1. Cloudflare Dashboard → Pages → jeju-halla-media → Settings
2. Functions → D1 database bindings
3. Add binding:
   - Variable name: `DB`
   - D1 database: `jeju-halla-media-production`
4. Save

## 배포 상태
- **플랫폼**: Cloudflare Pages
- **상태**: ✅ 프로덕션 배포 완료
- **프로젝트명**: jeju-halla-media
- **D1 데이터베이스**: jeju-halla-media-production (설정 완료, 264개 기사 데이터 포함)
- **최종 업데이트**: 2025-08-20 23:00 KST
- **최신 배포**: https://23698fd0.jeju-halla-media.pages.dev
- **메인 URL**: https://jeju-halla-media.pages.dev
- **배포 ID**: 23698fd0-9ddc-472a-bf44-b36257b20a81
- **배포 방법**: Wrangler CLI 직접 배포

## 주요 업데이트 내역
- 2025-08-20 23:00: GitHub 리포지토리 변경 (ChejuHallaUniversityPress-Broadcasting)
- 2025-08-20 22:30: 메뉴 네비게이션 버그 수정 및 헤더 컴포넌트 개선
- 2025-08-20 22:00: 모든 페이지 공통 헤더 컴포넌트 적용
- 2025-08-20: 44개 카테고리별 6개씩 총 264개 샘플 기사 추가
- 2025-08-20: 기사 상세 페이지 구현
- 2025-08-20: 카테고리별 기사 목록 페이지 구현
- 2025-08-20: 부모/자식 카테고리 쿼리 처리 개선
- 2025-08-19: 초기 프로젝트 구축 및 배포

## 라이선스
© 2025 제주한라대학교 신문방송사. All rights reserved.