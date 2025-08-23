export const HeaderComponent = () => {
  return `
    <!-- Fixed Header - Bold Modern Design -->
    <header class="sticky top-0 z-50 nav-modern" style="background: #1e40af; border-bottom: 1px solid #1e3a8a;">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="/" class="flex flex-col items-start">
                        <span class="text-2xl font-black text-white uppercase tracking-wider">CHEPBS</span>
                        <span class="text-xs text-blue-200 tracking-wide">Cheju Halla Educational Press & Broadcasting Station</span>
                    </a>
                </div>
                
                <!-- Main Navigation -->
                <nav class="hidden lg:flex items-center space-x-1">
                    <!-- 방송국 드롭다운 -->
                    <div class="relative group">
                        <a href="/broadcast" class="nav-link text-white hover:text-blue-200 font-bold">
                            BROADCAST
                        </a>
                        <div class="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/broadcast-intro" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">방송국소개</a>
                            <a href="/broadcast-history" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">연혁·편성안내</a>
                            <a href="/broadcast-organization" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">조직도·만드는 사람들</a>
                            <a href="/broadcast-recruit" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">PD모집·공지</a>
                            <a href="/broadcast-vod" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">VOD·아카이브</a>
                            <a href="/broadcast-activities" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">방송국 활동기</a>
                        </div>
                    </div>
                    
                    <!-- 신문사 드롭다운 -->
                    <div class="relative group">
                        <a href="/press" class="nav-link text-white hover:text-blue-200 font-bold">
                            PRESS
                        </a>
                        <div class="absolute top-full left-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/press-intro" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">신문사소개</a>
                            <a href="/press-history" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">연혁·발행안내</a>
                            <a href="/press-organization" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">조직도·만드는 사람들</a>
                            <a href="/press-recruit" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">기자모집·공지</a>
                            <a href="/press-archive" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">PDF·아카이브</a>
                            <a href="/press-activities" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">신문사 활동기</a>
                        </div>
                    </div>
                    
                    <!-- 캠퍼스 드롭다운 -->
                    <div class="relative group">
                        <a href="/campus" class="nav-link text-white hover:text-blue-200 font-bold">
                            CAMPUS
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/university-news" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">대학소식</a>
                            <a href="/our-major-now" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">지우전(지금 우리 전공은)</a>
                            <a href="/clubs" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">동아리</a>
                            <a href="/student-activities" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">학생활동</a>
                            <a href="/campus-life" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">캠퍼스 라이프</a>
                            <a href="/scholarship-welfare" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">장학·복지·지원</a>
                            <a href="/x-file" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">X-파일</a>
                            <a href="/alumni-interview" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">졸업생 인터뷰</a>
                        </div>
                    </div>
                    
                    <!-- 쇼츠 드롭다운 -->
                    <div class="relative group">
                        <a href="/shorts" class="nav-link text-white hover:text-blue-200 font-bold">
                            SHORTS
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/one-cut-news" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">한컷 뉴스</a>
                            <a href="/issue-briefing" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">이슈 브리핑</a>
                            <a href="/anonymous-news" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">익명소식</a>
                            <a href="/student-tips" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">재학생 꿀팁</a>
                        </div>
                    </div>
                    
                    <!-- 기획보도 드롭다운 -->
                    <div class="relative group">
                        <a href="/special-report" class="nav-link text-white hover:text-blue-200 font-bold">
                            SPECIAL
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/career-employment" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">진로·취업</a>
                            <a href="/youth-region" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">청년·지역</a>
                            <a href="/welfare-rights" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">복지·권익</a>
                            <a href="/academic-research" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">학술·연구</a>
                        </div>
                    </div>
                    
                    <!-- 제주소식 드롭다운 -->
                    <div class="relative group">
                        <a href="/jeju-news" class="nav-link text-white hover:text-blue-200 font-bold">
                            JEJU
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/jeju-news-main" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">제주소식</a>
                            <a href="/jeju-culture-art" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">제주 문화·예술</a>
                            <a href="/jeju-tour-food" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">관광·맛집</a>
                        </div>
                    </div>
                    
                    <!-- 오피니언 드롭다운 -->
                    <div class="relative group">
                        <a href="/opinion" class="nav-link text-white hover:text-blue-200 font-bold">
                            OPINION
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/editorial-column" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">사설·칼럼</a>
                            <a href="/professor-column" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">교수칼럼</a>
                            <a href="/reader-contribution" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">독자기고</a>
                            <a href="/anonymous-voice" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">익명의 목소리</a>
                            <a href="/book-movie-recommendation" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">함께 읽는 책·영화 추천</a>
                        </div>
                    </div>
                    
                    <!-- 에세이 드롭다운 -->
                    <div class="relative group">
                        <a href="/essay" class="nav-link text-white hover:text-blue-200 font-bold">
                            ESSAY
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">
                            <a href="/time-in-jeju" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">제주에서보내는시간</a>
                            <a href="/dreams-hopes" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">꿈과 희망</a>
                            <a href="/travel-exploration" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">여행과 탐방</a>
                            <a href="/literature-art" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">문학과 예술</a>
                            <a href="/monthly-theme-essay" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">이달의 테마 에세이</a>
                            <a href="/my-thoughts" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">나만의 생각 정리</a>
                        </div>
                    </div>
                </nav>
                
                <!-- Right side icons -->
                <div class="flex items-center space-x-3">
                    <!-- Search Icon -->
                    <button onclick="toggleSearch()" class="p-2 text-white hover:text-blue-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    
                    <!-- Login/User Icon -->
                    <button onclick="toggleLoginModal()" class="flex items-center gap-1 p-2 text-white hover:text-blue-200">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span class="text-sm font-medium">로그인</span>
                    </button>
                    
                    <!-- Mobile menu button -->
                    <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-white hover:text-blue-200">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Search Bar (Hidden by default) -->
        <div id="searchBar" class="hidden border-t bg-white">
            <div class="max-w-7xl mx-auto px-4 py-3">
                <div class="relative">
                    <input type="text" placeholder="검색어를 입력하세요..." class="w-full px-4 py-2 pr-10 border rounded-lg focus:outline-none focus:border-blue-500">
                    <button class="absolute right-2 top-2 text-gray-500 hover:text-blue-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </header>
    
    <!-- Add JavaScript for menu functions -->
    <script>
        function toggleSearch() {
            const searchBar = document.getElementById('searchBar');
            if (searchBar) {
                searchBar.classList.toggle('hidden');
            }
        }
        
        function toggleLoginModal() {
            // Login modal functionality will be handled by app.js
            const event = new CustomEvent('openLoginModal');
            window.dispatchEvent(event);
        }
        
        function toggleMobileMenu() {
            const mobileMenu = document.getElementById('mobileMenu');
            if (mobileMenu) {
                mobileMenu.classList.toggle('hidden');
            }
        }
    </script>
    
    <!-- Mobile Menu (Hidden by default) -->
    <div id="mobileMenu" class="hidden fixed inset-0 z-50 lg:hidden">
        <div class="fixed inset-0 bg-gray-900 opacity-50" onclick="toggleMobileMenu()"></div>
        <nav class="fixed top-0 left-0 bottom-0 w-64 bg-white overflow-y-auto">
            <div class="p-4 border-b">
                <div class="flex justify-between items-center">
                    <span class="text-xl font-bold text-blue-900">메뉴</span>
                    <button onclick="toggleMobileMenu()" class="text-gray-500">
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="p-4">
                <div class="space-y-2">
                    <div>
                        <div class="font-semibold text-gray-700 py-2">BROADCAST</div>
                        <div class="pl-4 space-y-1">
                            <a href="/broadcast-intro" class="block py-1 text-gray-600">방송국소개</a>
                            <a href="/broadcast-history" class="block py-1 text-gray-600">연혁·편성안내</a>
                            <a href="/broadcast-organization" class="block py-1 text-gray-600">조직도·만드는 사람들</a>
                            <a href="/broadcast-recruit" class="block py-1 text-gray-600">PD모집·공지</a>
                            <a href="/broadcast-vod" class="block py-1 text-gray-600">VOD·아카이브</a>
                            <a href="/broadcast-activities" class="block py-1 text-gray-600">방송국 활동기</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">PRESS</div>
                        <div class="pl-4 space-y-1">
                            <a href="/press-intro" class="block py-1 text-gray-600">신문사소개</a>
                            <a href="/press-history" class="block py-1 text-gray-600">연혁·발행안내</a>
                            <a href="/press-organization" class="block py-1 text-gray-600">조직도·만드는 사람들</a>
                            <a href="/press-recruit" class="block py-1 text-gray-600">기자모집·공지</a>
                            <a href="/press-archive" class="block py-1 text-gray-600">PDF·아카이브</a>
                            <a href="/press-activities" class="block py-1 text-gray-600">신문사 활동기</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">캠퍼스</div>
                        <div class="pl-4 space-y-1">
                            <a href="/campus-life" class="block py-1 text-gray-600">캠퍼스 라이프</a>
                            <a href="/student-council-general" class="block py-1 text-gray-600">총학생회</a>
                            <a href="/department-council" class="block py-1 text-gray-600">학과학생회</a>
                            <a href="/club-circle" class="block py-1 text-gray-600">동아리·서클</a>
                            <a href="/academic-schedule" class="block py-1 text-gray-600">학사일정</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">쇼츠</div>
                        <div class="pl-4 space-y-1">
                            <a href="/one-cut-news" class="block py-1 text-gray-600">한컷 뉴스</a>
                            <a href="/issue-briefing" class="block py-1 text-gray-600">이슈 브리핑</a>
                            <a href="/anonymous-news" class="block py-1 text-gray-600">익명소식</a>
                            <a href="/student-tips" class="block py-1 text-gray-600">재학생 꿀팁</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">기획보도</div>
                        <div class="pl-4 space-y-1">
                            <a href="/career-employment" class="block py-1 text-gray-600">진로·취업</a>
                            <a href="/youth-region" class="block py-1 text-gray-600">청년·지역</a>
                            <a href="/welfare-rights" class="block py-1 text-gray-600">복지·권익</a>
                            <a href="/academic-research" class="block py-1 text-gray-600">학술·연구</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">제주소식</div>
                        <div class="pl-4 space-y-1">
                            <a href="/jeju-news-main" class="block py-1 text-gray-600">제주소식</a>
                            <a href="/jeju-culture-art" class="block py-1 text-gray-600">제주 문화·예술</a>
                            <a href="/jeju-tour-food" class="block py-1 text-gray-600">관광·맛집</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">오피니언</div>
                        <div class="pl-4 space-y-1">
                            <a href="/editorial-column" class="block py-1 text-gray-600">사설·칼럼</a>
                            <a href="/contribution" class="block py-1 text-gray-600">기고</a>
                            <a href="/student-perspective" class="block py-1 text-gray-600">학생의 시선</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">에세이</div>
                        <div class="pl-4 space-y-1">
                            <a href="/time-in-jeju" class="block py-1 text-gray-600">제주에서 보내는 시간</a>
                            <a href="/dreams-hopes" class="block py-1 text-gray-600">꿈과 희망</a>
                            <a href="/travel-exploration" class="block py-1 text-gray-600">여행과 탐방</a>
                            <a href="/literature-art" class="block py-1 text-gray-600">문학과 예술</a>
                            <a href="/monthly-theme-essay" class="block py-1 text-gray-600">이달의 테마 에세이</a>
                            <a href="/my-thoughts" class="block py-1 text-gray-600">나만의 생각 정리</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  `;
};