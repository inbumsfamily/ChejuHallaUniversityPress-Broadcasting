import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { serveStatic } from 'hono/cloudflare-workers';
import { authMiddleware } from './middleware/auth';
import authRouter from './routes/auth';
import articlesRouter from './routes/articles';
import categoriesRouter from './routes/categories';
import commentsRouter from './routes/comments';
import calendarRouter from './routes/calendar';
import pagesRouter from './routes/pages';
import broadcastRouter from './routes/broadcast-page';
import type { CloudflareBindings } from './types';

const app = new Hono<{ Bindings: CloudflareBindings }>();

// Middleware
app.use('*', logger());
app.use('/api/*', cors());
app.use('/api/*', authMiddleware);

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }));

// API Routes
app.route('/api/auth', authRouter);
app.route('/api/articles', articlesRouter);
app.route('/api/categories', categoriesRouter);
app.route('/api/comments', commentsRouter);
app.route('/api/calendar', calendarRouter);

// Page Routes
app.route('/', pagesRouter);
app.route('/', broadcastRouter);

// Health check
app.get('/api/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Main page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>제주한라대학교 신문방송사</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50">
        <div id="app">
            <!-- Header -->
            <header class="bg-white shadow-sm border-b sticky top-0 z-50">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="flex justify-between items-center h-20">
                        <div class="flex items-center">
                            <a href="/" class="text-2xl font-bold text-blue-900">
                                <i class="fas fa-newspaper mr-2"></i>
                                제주한라대 신문방송사
                            </a>
                        </div>
                        
                        <!-- Main Navigation with Dropdown -->
                        <nav class="hidden lg:flex items-center flex-wrap">
                            <a href="/" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold text-sm">홈</a>
                            
                            <!-- 방송국 드롭다운 -->
                            <div class="relative group">
                                <a href="/broadcast" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    방송국
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/broadcast-intro" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">방송국소개</a>
                                    <a href="/halla-news" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">한라뉴스</a>
                                    <a href="/halla-interview" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">한라인터뷰</a>
                                    <a href="/major-special" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">전공특집</a>
                                    <a href="/campus-tour" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">캠퍼스투어</a>
                                    <a href="/culture-art-broadcast" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">문화·예술(방송)</a>
                                    <a href="/radio-podcast" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">라디오·팟캐스트</a>
                                    <a href="/broadcast-activities" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">방송국 활동기</a>
                                </div>
                            </div>
                            
                            <!-- 신문사 드롭다운 -->
                            <div class="relative group">
                                <a href="/newspaper" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    신문사
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/newspaper-intro" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">신문사소개</a>
                                    <a href="/field-coverage" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">현장취재</a>
                                    <a href="/campus-report" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">캠퍼스 리포트</a>
                                    <a href="/newspaper-activities" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">신문사 활동기</a>
                                </div>
                            </div>
                            
                            <!-- 캠퍼스 드롭다운 -->
                            <div class="relative group">
                                <a href="/campus" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    캠퍼스
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/university-news" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">대학소식</a>
                                    <a href="/our-major-now" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">지우전(지금 우리 전공은)</a>
                                    <a href="/clubs" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">동아리</a>
                                    <a href="/student-activities" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">학생활동</a>
                                    <a href="/campus-life" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">캠퍼스 라이프</a>
                                    <a href="/scholarship-welfare" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">장학·복지·지원</a>
                                    <a href="/x-file" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">X-파일</a>
                                    <a href="/alumni-interview" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">졸업생 인터뷰</a>
                                </div>
                            </div>
                            
                            <!-- 쇼츠 드롭다운 -->
                            <div class="relative group">
                                <a href="/shorts" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    쇼츠
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/one-cut-news" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">한컷 뉴스</a>
                                    <a href="/issue-briefing" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">이슈 브리핑</a>
                                    <a href="/anonymous-news" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">익명소식</a>
                                    <a href="/student-tips" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">재학생 꿀팁</a>
                                </div>
                            </div>
                            
                            <!-- 기획보도 드롭다운 -->
                            <div class="relative group">
                                <a href="/special-report" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    기획보도
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/career-employment" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">진로·취업</a>
                                    <a href="/youth-region" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">청년·지역</a>
                                    <a href="/welfare-rights" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">복지·권익</a>
                                    <a href="/academic-research" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">학술·연구</a>
                                </div>
                            </div>
                            
                            <!-- 제주소식 드롭다운 -->
                            <div class="relative group">
                                <a href="/jeju-news" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    제주소식
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/jeju-issue" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">제주이슈</a>
                                    <a href="/culture-exploration" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">문화탐방</a>
                                    <a href="/environment-nature" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">환경과 자연</a>
                                    <a href="/youth-startup" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">청년 창업</a>
                                    <a href="/jeju-traditional-village" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">제주전통마을</a>
                                </div>
                            </div>
                            
                            <!-- 오피니언 드롭다운 -->
                            <div class="relative group">
                                <a href="/opinion" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    오피니언
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/editorial-column" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">사설·칼럼</a>
                                    <a href="/professor-column" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">교수 칼럼</a>
                                    <a href="/reader-opinion" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">독자 의견·제안</a>
                                    <a href="/anonymous-voice" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">익명 목소리</a>
                                    <a href="/book-movie-recommendation" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">함께 읽는 책·영화 추천</a>
                                </div>
                            </div>
                            
                            <!-- 에세이 드롭다운 -->
                            <div class="relative group">
                                <a href="/essay" class="px-2 py-2 text-gray-700 hover:text-blue-600 font-semibold flex items-center text-sm">
                                    에세이
                                    <i class="fas fa-chevron-down ml-1 text-xs"></i>
                                </a>
                                <div class="absolute top-full left-0 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1 z-50">
                                    <a href="/time-in-jeju" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">제주에서 보내는 시간</a>
                                    <a href="/dreams-hopes" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">꿈과 희망</a>
                                    <a href="/travel-exploration" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">여행과 탐방</a>
                                    <a href="/literature-art" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">문학과 예술</a>
                                    <a href="/monthly-theme-essay" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">이달의 테마 에세이</a>
                                    <a href="/my-thoughts" class="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">나만의 생각 정리</a>
                                </div>
                            </div>
                        </nav>
                        
                        <div class="flex items-center space-x-4">
                            <button id="searchBtn" class="text-gray-700 hover:text-blue-600">
                                <i class="fas fa-search"></i>
                            </button>
                            <button id="loginBtn" class="text-gray-700 hover:text-blue-600">
                                <i class="fas fa-user"></i> 로그인
                            </button>
                            <button id="adminBtn" class="hidden text-gray-700 hover:text-blue-600">
                                <i class="fas fa-cog"></i> 관리자
                            </button>
                            
                            <!-- Mobile menu button -->
                            <button id="mobileMenuBtn" class="lg:hidden text-gray-700 hover:text-blue-600">
                                <i class="fas fa-bars"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Mobile Navigation -->
                <div id="mobileNav" class="hidden lg:hidden bg-white border-t">
                    <div class="container mx-auto px-4 py-4">
                        <a href="/" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">홈</a>
                        <a href="/broadcast" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">방송국</a>
                        <a href="/newspaper" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">신문사</a>
                        <a href="/campus" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">캠퍼스</a>
                        <a href="/shorts" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">쇼츠</a>
                        <a href="/special-report" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">기획보도</a>
                        <a href="/jeju-news" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">제주소식</a>
                        <a href="/opinion" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">오피니언</a>
                        <a href="/essay" class="block py-2 text-gray-700 hover:text-blue-600 font-medium">에세이</a>
                    </div>
                </div>
            </header>

            <!-- Hero Section with Main Video -->
            <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 class="text-4xl font-bold mb-4">제주한라대학교의 목소리</h2>
                            <p class="text-xl mb-6">캠퍼스의 생생한 소식을 전합니다</p>
                            <div class="flex space-x-4">
                                <button onclick="scrollToSection('newspaper')" class="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
                                    최신 뉴스 보기
                                </button>
                                <button onclick="scrollToSection('broadcast')" class="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900">
                                    방송 다시보기
                                </button>
                            </div>
                        </div>
                        <div>
                            <!-- 메인 비디오 플레이어 -->
                            <div class="bg-black rounded-lg overflow-hidden aspect-video">
                                <div id="mainVideo" class="w-full h-full flex items-center justify-center text-white">
                                    <i class="fas fa-play-circle text-6xl opacity-75"></i>
                                </div>
                            </div>
                            <p class="text-sm mt-2">최신 방송: 2025학년도 신입생 환영 특집</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Main Content -->
            <main class="container mx-auto px-4 py-12">
                <!-- 최신 기사 섹션 -->
                <section id="latest" class="mb-16">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-3xl font-bold text-gray-800">
                            <i class="fas fa-fire mr-2 text-orange-600"></i>
                            최신 기사
                        </h3>
                        <a href="/" class="text-blue-600 hover:underline">전체보기 →</a>
                    </div>
                    <div id="latestArticles" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        <!-- Latest articles will be loaded here -->
                        <div class="col-span-full text-center py-12">
                            <i class="fas fa-spinner fa-spin text-gray-400 text-4xl"></i>
                            <p class="text-gray-500 mt-4">최신 기사를 불러오는 중...</p>
                        </div>
                    </div>
                </section>
                <!-- 방송국 섹션 -->
                <section id="broadcast" class="mb-16">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-3xl font-bold text-gray-800">
                            <i class="fas fa-video mr-2 text-red-600"></i>
                            방송국
                        </h3>
                        <a href="/broadcast" class="text-blue-600 hover:underline">더보기 →</a>
                    </div>
                    <div id="broadcastArticles" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <!-- 방송 콘텐츠가 여기에 로드됩니다 -->
                        <div class="col-span-3 text-center py-12">
                            <i class="fas fa-spinner fa-spin text-gray-400 text-4xl"></i>
                            <p class="text-gray-500 mt-4">방송 콘텐츠를 불러오는 중...</p>
                        </div>
                    </div>
                </section>

                <!-- 신문사 섹션 -->
                <section id="newspaper" class="mb-16">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-3xl font-bold text-gray-800">
                            <i class="fas fa-newspaper mr-2 text-blue-600"></i>
                            신문사
                        </h3>
                        <a href="/newspaper" class="text-blue-600 hover:underline">더보기 →</a>
                    </div>
                    <div id="newspaperArticles" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <!-- 신문 기사가 여기에 로드됩니다 -->
                    </div>
                </section>

                <!-- 기획보도 섹션 -->
                <section id="special" class="mb-16">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-3xl font-bold text-gray-800">
                            <i class="fas fa-star mr-2 text-yellow-500"></i>
                            기획보도
                        </h3>
                        <a href="/special-report" class="text-blue-600 hover:underline">더보기 →</a>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <!-- 기획보도 대형 카드 -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="h-64 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                                <div class="text-white text-center">
                                    <i class="fas fa-chart-line text-6xl mb-4"></i>
                                    <h4 class="text-2xl font-bold">2025 대학생 취업 현황 분석</h4>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600 mb-4">제주한라대학교 졸업생들의 취업 현황과 주요 취업처를 심층 분석했습니다. IT, 관광, 의료 분야에서의 성과와 전망을 다룹니다.</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">
                                        <i class="fas fa-user mr-1"></i> 편집부
                                    </span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        자세히 보기
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                            <div class="h-64 bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center">
                                <div class="text-white text-center">
                                    <i class="fas fa-seedling text-6xl mb-4"></i>
                                    <h4 class="text-2xl font-bold">캠퍼스 친환경 프로젝트</h4>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-600 mb-4">탄소중립 캠퍼스를 향한 제주한라대학교의 도전. 태양광 발전, 전기차 충전소, 그린 캠퍼스 조성 사업을 취재했습니다.</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-sm text-gray-500">
                                        <i class="fas fa-user mr-1"></i> 환경부
                                    </span>
                                    <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                                        자세히 보기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 쇼츠 섹션 -->
                <section id="shorts" class="mb-16">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-3xl font-bold text-gray-800">
                            <i class="fas fa-bolt mr-2 text-yellow-400"></i>
                            쇼츠
                        </h3>
                        <a href="#" class="text-blue-600 hover:underline">더보기 →</a>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        <!-- 쇼츠 비디오 카드 (세로형) -->
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                            <div class="aspect-[9/16] bg-gradient-to-b from-pink-400 to-purple-600 relative">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i class="fas fa-play-circle text-white text-3xl"></i>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                    <p class="text-white font-bold text-sm">캠퍼스 1분 투어</p>
                                    <p class="text-white text-xs opacity-75">조회수 5.2K</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                            <div class="aspect-[9/16] bg-gradient-to-b from-blue-400 to-indigo-600 relative">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i class="fas fa-play-circle text-white text-3xl"></i>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                    <p class="text-white font-bold text-sm">학식 리뷰</p>
                                    <p class="text-white text-xs opacity-75">조회수 3.8K</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                            <div class="aspect-[9/16] bg-gradient-to-b from-orange-400 to-red-600 relative">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i class="fas fa-play-circle text-white text-3xl"></i>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                    <p class="text-white font-bold text-sm">동아리 소개</p>
                                    <p class="text-white text-xs opacity-75">조회수 2.9K</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                            <div class="aspect-[9/16] bg-gradient-to-b from-green-400 to-teal-600 relative">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i class="fas fa-play-circle text-white text-3xl"></i>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                    <p class="text-white font-bold text-sm">교수님 인터뷰</p>
                                    <p class="text-white text-xs opacity-75">조회수 4.1K</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                            <div class="aspect-[9/16] bg-gradient-to-b from-purple-400 to-pink-600 relative">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i class="fas fa-play-circle text-white text-3xl"></i>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                    <p class="text-white font-bold text-sm">축제 하이라이트</p>
                                    <p class="text-white text-xs opacity-75">조회수 7.3K</p>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
                            <div class="aspect-[9/16] bg-gradient-to-b from-yellow-400 to-orange-600 relative">
                                <div class="absolute inset-0 flex items-center justify-center">
                                    <i class="fas fa-play-circle text-white text-3xl"></i>
                                </div>
                                <div class="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
                                    <p class="text-white font-bold text-sm">시험기간 꿀팁</p>
                                    <p class="text-white text-xs opacity-75">조회수 6.5K</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 캠퍼스 라이프 섹션 -->
                <section id="campus" class="mb-16">
                    <div class="flex justify-between items-center mb-6">
                        <h3 class="text-3xl font-bold text-gray-800">
                            <i class="fas fa-graduation-cap mr-2 text-green-600"></i>
                            캠퍼스 라이프
                        </h3>
                        <a href="#" class="text-blue-600 hover:underline">더보기 →</a>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                            <div class="flex items-center mb-4">
                                <div class="bg-blue-100 p-3 rounded-full mr-4">
                                    <i class="fas fa-calendar-alt text-blue-600 text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">학사일정</h4>
                                    <p class="text-sm text-gray-600">이번 달 주요 일정</p>
                                </div>
                            </div>
                            <ul class="space-y-2 text-sm">
                                <li class="flex justify-between">
                                    <span>중간고사</span>
                                    <span class="text-gray-500">10.15 - 10.21</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>수강신청 정정</span>
                                    <span class="text-gray-500">09.05 - 09.07</span>
                                </li>
                                <li class="flex justify-between">
                                    <span>축제</span>
                                    <span class="text-gray-500">10.25 - 10.27</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                            <div class="flex items-center mb-4">
                                <div class="bg-green-100 p-3 rounded-full mr-4">
                                    <i class="fas fa-users text-green-600 text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">동아리 소식</h4>
                                    <p class="text-sm text-gray-600">신규 모집 중</p>
                                </div>
                            </div>
                            <ul class="space-y-2 text-sm">
                                <li class="flex items-center">
                                    <span class="bg-red-500 text-white px-2 py-1 rounded text-xs mr-2">모집중</span>
                                    <span>봉사동아리 '나눔'</span>
                                </li>
                                <li class="flex items-center">
                                    <span class="bg-red-500 text-white px-2 py-1 rounded text-xs mr-2">모집중</span>
                                    <span>프로그래밍 동아리</span>
                                </li>
                                <li class="flex items-center">
                                    <span class="bg-gray-500 text-white px-2 py-1 rounded text-xs mr-2">마감</span>
                                    <span>댄스 동아리</span>
                                </li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                            <div class="flex items-center mb-4">
                                <div class="bg-yellow-100 p-3 rounded-full mr-4">
                                    <i class="fas fa-trophy text-yellow-600 text-2xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold">수상 소식</h4>
                                    <p class="text-sm text-gray-600">우리 대학 성과</p>
                                </div>
                            </div>
                            <ul class="space-y-2 text-sm">
                                <li>• 전국 대학생 프로그래밍 대회 대상</li>
                                <li>• 창업 아이디어 경진대회 우수상</li>
                                <li>• 봉사활동 우수대학 선정</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <!-- Footer -->
            <footer class="bg-gray-800 text-white py-8">
                <div class="container mx-auto px-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h4 class="text-lg font-semibold mb-4">제주한라대학교 신문방송사</h4>
                            <p class="text-gray-400">제주특별자치도 제주시 한라대학로 38</p>
                            <p class="text-gray-400">Tel: 064-741-7000</p>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">빠른 링크</h4>
                            <ul class="space-y-2 text-gray-400">
                                <li><a href="#" class="hover:text-white">학교 홈페이지</a></li>
                                <li><a href="#" class="hover:text-white">도서관</a></li>
                                <li><a href="#" class="hover:text-white">학사정보</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="text-lg font-semibold mb-4">소셜 미디어</h4>
                            <div class="flex space-x-4">
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <i class="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <i class="fab fa-instagram fa-2x"></i>
                                </a>
                                <a href="#" class="text-gray-400 hover:text-white">
                                    <i class="fab fa-youtube fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
                        <p>&copy; 2025 제주한라대학교 신문방송사. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/app.js"></script>
    </body>
    </html>
  `);
});

// Admin page
app.get('/admin', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>관리자 대시보드 - 제주한라대학교 신문방송사</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    </head>
    <body class="bg-gray-100">
        <div id="adminApp" class="min-h-screen">
            <div class="flex h-screen">
                <!-- Sidebar -->
                <div class="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                    <div class="p-4 border-b border-gray-700">
                        <h1 class="text-xl font-bold flex items-center">
                            <i class="fas fa-shield-alt mr-2 text-yellow-400"></i>
                            관리자 패널
                        </h1>
                        <p class="text-xs text-gray-400 mt-1">제주한라대 신문방송사</p>
                    </div>
                    <nav class="mt-4">
                        <a href="#dashboard" onclick="showSection('dashboard')" class="block px-4 py-3 hover:bg-gray-700 bg-gray-700 transition-colors">
                            <i class="fas fa-tachometer-alt mr-3 w-5"></i> 대시보드
                        </a>
                        <a href="#articles" onclick="showSection('articles')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-newspaper mr-3 w-5"></i> 기사 관리
                        </a>
                        <a href="#broadcast" onclick="showSection('broadcast')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-video mr-3 w-5"></i> 방송 콘텐츠
                        </a>
                        <a href="#shorts" onclick="showSection('shorts')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-bolt mr-3 w-5"></i> 쇼츠 관리
                        </a>
                        <a href="#users" onclick="showSection('users')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-users mr-3 w-5"></i> 사용자 관리
                        </a>
                        <a href="#calendar" onclick="showSection('calendar')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-calendar-alt mr-3 w-5"></i> 학사일정
                        </a>
                        <a href="#comments" onclick="showSection('comments')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-comments mr-3 w-5"></i> 댓글 관리
                        </a>
                        <a href="#settings" onclick="showSection('settings')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-cog mr-3 w-5"></i> 사이트 설정
                        </a>
                    </nav>
                    <div class="absolute bottom-0 w-64 p-4 border-t border-gray-700">
                        <button onclick="window.location.href='/'" class="w-full bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm">
                            <i class="fas fa-home mr-2"></i> 메인 페이지로
                        </button>
                    </div>
                </div>
                
                <!-- Main Content -->
                <div class="flex-1 overflow-y-auto">
                    <!-- Top Bar -->
                    <div class="bg-white shadow-sm px-8 py-4 flex justify-between items-center">
                        <h2 id="sectionTitle" class="text-2xl font-bold text-gray-800">대시보드</h2>
                        <div class="flex items-center space-x-4">
                            <span class="text-sm text-gray-600">
                                <i class="fas fa-user-circle mr-2"></i>
                                <span id="adminName">관리자</span>
                            </span>
                            <button onclick="logout()" class="text-red-600 hover:text-red-700">
                                <i class="fas fa-sign-out-alt"></i>
                            </button>
                        </div>
                    </div>

                    <!-- Dashboard Section -->
                    <div id="dashboardSection" class="p-8">
                        <!-- Stats Cards -->
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-500 text-sm">전체 기사</p>
                                        <p class="text-3xl font-bold text-gray-800" id="totalArticles">0</p>
                                        <p class="text-xs text-green-600 mt-1">
                                            <i class="fas fa-arrow-up"></i> 12% 증가
                                        </p>
                                    </div>
                                    <div class="bg-blue-100 p-3 rounded-full">
                                        <i class="fas fa-newspaper text-blue-600 text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-500 text-sm">전체 회원</p>
                                        <p class="text-3xl font-bold text-gray-800" id="totalUsers">0</p>
                                        <p class="text-xs text-green-600 mt-1">
                                            <i class="fas fa-arrow-up"></i> 8% 증가
                                        </p>
                                    </div>
                                    <div class="bg-green-100 p-3 rounded-full">
                                        <i class="fas fa-users text-green-600 text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-500 text-sm">오늘 방문자</p>
                                        <p class="text-3xl font-bold text-gray-800" id="todayVisitors">1,234</p>
                                        <p class="text-xs text-red-600 mt-1">
                                            <i class="fas fa-arrow-down"></i> 3% 감소
                                        </p>
                                    </div>
                                    <div class="bg-yellow-100 p-3 rounded-full">
                                        <i class="fas fa-eye text-yellow-600 text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <p class="text-gray-500 text-sm">전체 댓글</p>
                                        <p class="text-3xl font-bold text-gray-800" id="totalComments">0</p>
                                        <p class="text-xs text-green-600 mt-1">
                                            <i class="fas fa-arrow-up"></i> 15% 증가
                                        </p>
                                    </div>
                                    <div class="bg-purple-100 p-3 rounded-full">
                                        <i class="fas fa-comments text-purple-600 text-2xl"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Charts -->
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                            <div class="bg-white p-6 rounded-lg shadow">
                                <h3 class="text-lg font-semibold mb-4">방문자 통계</h3>
                                <canvas id="visitorsChart"></canvas>
                            </div>
                            <div class="bg-white p-6 rounded-lg shadow">
                                <h3 class="text-lg font-semibold mb-4">카테고리별 기사</h3>
                                <canvas id="categoriesChart"></canvas>
                            </div>
                        </div>

                        <!-- Recent Activities -->
                        <div class="bg-white rounded-lg shadow">
                            <div class="px-6 py-4 border-b">
                                <h3 class="text-lg font-semibold">최근 활동</h3>
                            </div>
                            <div class="p-6">
                                <div class="space-y-4" id="recentActivities">
                                    <div class="flex items-center space-x-3">
                                        <div class="bg-blue-100 p-2 rounded-full">
                                            <i class="fas fa-newspaper text-blue-600"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm">
                                                <span class="font-semibold">홍길동</span>님이 
                                                <span class="text-blue-600">"새 학기 시작"</span> 기사를 작성했습니다.
                                            </p>
                                            <p class="text-xs text-gray-500">5분 전</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bg-green-100 p-2 rounded-full">
                                            <i class="fas fa-user-plus text-green-600"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm">
                                                새로운 회원 <span class="font-semibold">김철수</span>님이 가입했습니다.
                                            </p>
                                            <p class="text-xs text-gray-500">12분 전</p>
                                        </div>
                                    </div>
                                    <div class="flex items-center space-x-3">
                                        <div class="bg-purple-100 p-2 rounded-full">
                                            <i class="fas fa-comment text-purple-600"></i>
                                        </div>
                                        <div class="flex-1">
                                            <p class="text-sm">
                                                <span class="font-semibold">이영희</span>님이 기사에 댓글을 달았습니다.
                                            </p>
                                            <p class="text-xs text-gray-500">25분 전</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Articles Section (Hidden by default) -->
                    <div id="articlesSection" class="p-8 hidden">
                        <div class="bg-white rounded-lg shadow">
                            <div class="px-6 py-4 border-b flex justify-between items-center">
                                <h3 class="text-lg font-semibold">기사 목록</h3>
                                <button onclick="showNewArticleForm()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                                    <i class="fas fa-plus mr-2"></i> 새 기사 작성
                                </button>
                            </div>
                            <div class="p-6">
                                <div class="overflow-x-auto">
                                    <table class="w-full">
                                        <thead>
                                            <tr class="border-b">
                                                <th class="text-left py-2">ID</th>
                                                <th class="text-left py-2">제목</th>
                                                <th class="text-left py-2">카테고리</th>
                                                <th class="text-left py-2">작성자</th>
                                                <th class="text-left py-2">상태</th>
                                                <th class="text-left py-2">작성일</th>
                                                <th class="text-left py-2">관리</th>
                                            </tr>
                                        </thead>
                                        <tbody id="articlesTableBody">
                                            <!-- Articles will be loaded here -->
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Other sections will be added similarly -->
                </div>
            </div>
        </div>
        
        <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
        <script src="/static/admin.js"></script>
    </body>
    </html>
  `);
});

// 404 handler
app.notFound((c) => {
  return c.json({ error: 'Not found' }, 404);
});

// Error handler
app.onError((err, c) => {
  console.error('Application error:', err);
  return c.json({ error: 'Internal server error' }, 500);
});

export default app;