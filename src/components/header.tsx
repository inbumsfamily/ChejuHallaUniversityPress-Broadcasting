export const HeaderComponent = () => {
  return `
    <!-- Fixed Header - Clean Design -->
    <header class="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="/" class="flex items-center">
                        <span class="text-xl font-bold text-gray-800">📰 제주한라대 신문방송사</span>
                    </a>
                </div>
                
                <!-- Main Navigation -->
                <nav class="hidden lg:flex items-center space-x-1">
                    <!-- 방송국 드롭다운 -->
                    <div class="relative group">
                        <a href="/broadcast" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            방송국
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/broadcast-intro" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">방송국소개</a>
                            <a href="/halla-news" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">한라뉴스</a>
                            <a href="/halla-interview" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">한라인터뷰</a>
                            <a href="/major-special" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">전공특집</a>
                            <a href="/campus-tour" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">캠퍼스투어</a>
                            <a href="/culture-art-broadcast" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">문화·예술(방송)</a>
                            <a href="/radio-podcast" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">라디오·팟캐스트</a>
                            <a href="/broadcast-activities" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">방송국 활동기</a>
                        </div>
                    </div>
                    
                    <!-- 신문사 드롭다운 -->
                    <div class="relative group">
                        <a href="/newspaper" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            신문사
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" class="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/newspaper-intro" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">신문사소개</a>
                            <a href="/field-coverage" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">현장취재</a>
                            <a href="/campus-report" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">캠퍼스 리포트</a>
                            <a href="/newspaper-activities" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">신문사 활동기</a>
                        </div>
                    </div>
                    
                    <!-- 캠퍼스 드롭다운 -->
                    <div class="relative group">
                        <a href="/campus" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            캠퍼스
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" class="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/campus-life" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">캠퍼스 라이프</a>
                            <a href="/student-council-general" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">총학생회</a>
                            <a href="/department-council" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">학과학생회</a>
                            <a href="/club-circle" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">동아리·서클</a>
                            <a href="/academic-schedule" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">학사일정</a>
                        </div>
                    </div>
                    
                    <!-- 쇼츠 드롭다운 -->
                    <div class="relative group">
                        <a href="/shorts" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            쇼츠
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" class="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/one-cut-news" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">한컷 뉴스</a>
                            <a href="/issue-briefing" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">이슈 브리핑</a>
                            <a href="/anonymous-news" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">익명소식</a>
                            <a href="/student-tips" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">재학생 꿀팁</a>
                        </div>
                    </div>
                    
                    <!-- 기획보도 드롭다운 -->
                    <div class="relative group">
                        <a href="/special-report" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            기획보도
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" class="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/career-employment" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">진로·취업</a>
                            <a href="/youth-region" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">청년·지역</a>
                            <a href="/welfare-rights" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">복지·권익</a>
                            <a href="/academic-research" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">학술·연구</a>
                        </div>
                    </div>
                    
                    <!-- 제주소식 드롭다운 -->
                    <div class="relative group">
                        <a href="/jeju-news" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            제주소식
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" class="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/jeju-news-main" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">제주소식</a>
                            <a href="/jeju-culture-art" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">제주 문화·예술</a>
                            <a href="/jeju-tour-food" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">관광·맛집</a>
                        </div>
                    </div>
                    
                    <!-- 오피니언 드롭다운 -->
                    <div class="relative group">
                        <a href="/opinion" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            오피니언
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" class="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/editorial-column" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">사설·칼럼</a>
                            <a href="/contribution" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">기고</a>
                            <a href="/student-perspective" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">학생의 시선</a>
                        </div>
                    </div>
                    
                    <!-- 에세이 드롭다운 -->
                    <div class="relative group">
                        <a href="/essay" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-bold text-base transition-all">
                            에세이
                        </a>
                        <div class="absolute top-full left-0 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 mt-2" class="bg-white border border-gray-200 rounded-lg shadow-lg">
                            <a href="/time-in-jeju" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">제주에서 보내는 시간</a>
                            <a href="/dreams-hopes" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">꿈과 희망</a>
                            <a href="/travel-exploration" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">여행과 탐방</a>
                            <a href="/literature-art" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">문학과 예술</a>
                            <a href="/monthly-theme-essay" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">이달의 테마 에세이</a>
                            <a href="/my-thoughts" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 font-medium">나만의 생각 정리</a>
                        </div>
                    </div>
                </nav>
                
                <!-- Right side icons -->
                <div class="flex items-center space-x-3">
                    <!-- Search Icon -->
                    <button onclick="toggleSearch()" class="p-2 text-gray-600 hover:text-blue-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </button>
                    
                    <!-- Login/User Icon -->
                    <button onclick="toggleLoginModal()" class="p-2 text-gray-600 hover:text-blue-600">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                        <span class="text-xs">로그인</span>
                    </button>
                    
                    <!-- Mobile menu button -->
                    <button onclick="toggleMobileMenu()" class="lg:hidden p-2 text-gray-600 hover:text-blue-600">
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
        <div class="fixed inset-0 bg-black opacity-50" onclick="toggleMobileMenu()"></div>
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
                        <div class="font-semibold text-gray-700 py-2">방송국</div>
                        <div class="pl-4 space-y-1">
                            <a href="/broadcast-intro" class="block py-1 text-gray-600">방송국소개</a>
                            <a href="/halla-news" class="block py-1 text-gray-600">한라뉴스</a>
                            <a href="/halla-interview" class="block py-1 text-gray-600">한라인터뷰</a>
                            <a href="/major-special" class="block py-1 text-gray-600">전공특집</a>
                            <a href="/campus-tour" class="block py-1 text-gray-600">캠퍼스투어</a>
                            <a href="/culture-art-broadcast" class="block py-1 text-gray-600">문화·예술(방송)</a>
                            <a href="/radio-podcast" class="block py-1 text-gray-600">라디오·팟캐스트</a>
                            <a href="/broadcast-activities" class="block py-1 text-gray-600">방송국 활동기</a>
                        </div>
                    </div>
                    <div>
                        <div class="font-semibold text-gray-700 py-2">신문사</div>
                        <div class="pl-4 space-y-1">
                            <a href="/newspaper-intro" class="block py-1 text-gray-600">신문사소개</a>
                            <a href="/field-coverage" class="block py-1 text-gray-600">현장취재</a>
                            <a href="/campus-report" class="block py-1 text-gray-600">캠퍼스 리포트</a>
                            <a href="/newspaper-activities" class="block py-1 text-gray-600">신문사 활동기</a>
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