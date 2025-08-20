export const HeaderComponent = () => {
  return `
    <!-- Fixed Header -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <div class="flex items-center">
                    <a href="/" class="flex items-center">
                        <span class="text-xl font-bold text-blue-900">📰 제주한라대 신문방송사</span>
                    </a>
                </div>
                
                <!-- Main Navigation -->
                <nav class="hidden lg:flex items-center space-x-1">
                    <!-- 방송국 드롭다운 -->
                    <div class="relative group">
                        <button class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center text-sm">
                            방송국
                            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                            <a href="/broadcast-intro" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">방송국소개</a>
                            <a href="/halla-news" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">한라뉴스</a>
                            <a href="/halla-interview" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">한라인터뷰</a>
                            <a href="/major-special" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">전공특집</a>
                            <a href="/campus-tour" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">캠퍼스투어</a>
                            <a href="/culture-art-broadcast" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">문화·예술(방송)</a>
                            <a href="/radio-podcast" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">라디오·팟캐스트</a>
                            <a href="/broadcast-activities" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">방송국 활동기</a>
                        </div>
                    </div>
                    
                    <!-- 신문사 드롭다운 -->
                    <div class="relative group">
                        <button class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center text-sm">
                            신문사
                            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                            <a href="/newspaper-intro" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">신문사소개</a>
                            <a href="/field-coverage" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">현장취재</a>
                            <a href="/campus-report" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">캠퍼스 리포트</a>
                            <a href="/newspaper-activities" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">신문사 활동기</a>
                        </div>
                    </div>
                    
                    <!-- 캠퍼스 드롭다운 -->
                    <div class="relative group">
                        <button class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center text-sm">
                            캠퍼스
                            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                            <a href="/campus-life" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">캠퍼스 라이프</a>
                            <a href="/student-council-general" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">총학생회</a>
                            <a href="/department-council" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">학과학생회</a>
                            <a href="/club-circle" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">동아리·서클</a>
                            <a href="/academic-schedule" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">학사일정</a>
                        </div>
                    </div>
                    
                    <!-- 쇼츠 -->
                    <a href="/shorts" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm">쇼츠</a>
                    
                    <!-- 기획보도 -->
                    <a href="/special-report" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm">기획보도</a>
                    
                    <!-- 제주소식 드롭다운 -->
                    <div class="relative group">
                        <button class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center text-sm">
                            제주소식
                            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                            <a href="/jeju-news-main" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">제주소식</a>
                            <a href="/jeju-culture-art" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">제주 문화·예술</a>
                            <a href="/jeju-tour-food" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">관광·맛집</a>
                        </div>
                    </div>
                    
                    <!-- 오피니언 드롭다운 -->
                    <div class="relative group">
                        <button class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium flex items-center text-sm">
                            오피니언
                            <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </button>
                        <div class="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-1">
                            <a href="/editorial-column" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">사설·칼럼</a>
                            <a href="/contribution" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">기고</a>
                            <a href="/student-perspective" class="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">학생의 시선</a>
                        </div>
                    </div>
                    
                    <!-- 에세이 -->
                    <a href="/essay" class="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium text-sm">에세이</a>
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
                    <a href="/shorts" class="block font-semibold text-gray-700 py-2">쇼츠</a>
                    <a href="/special-report" class="block font-semibold text-gray-700 py-2">기획보도</a>
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
                    <a href="/essay" class="block font-semibold text-gray-700 py-2">에세이</a>
                </div>
            </div>
        </nav>
    </div>
  `;
};