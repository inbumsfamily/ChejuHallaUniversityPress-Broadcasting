export const Footer = () => {
  return `
    <footer class="text-white" style="background-color: #1e40af; border-top: 1px solid #1e3a8a;">
      <!-- Main Footer Content -->
      <div class="container mx-auto px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          <!-- Brand Column -->
          <div class="lg:col-span-2">
            <h2 class="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              CHEJU HALLA UNIVERSITY<br>
              <span class="text-outline" style="color: transparent; -webkit-text-stroke: 2px white;">PRESS & BROADCASTING</span>
            </h2>
            <p class="text-xl text-blue-100 mb-3 leading-relaxed">
              제주한라대학교 CHEBS와 한라춘추
            </p>
            <p class="text-lg text-blue-200 mb-8">
              진심을 담은 스토리로 내일을 바꿉니다.
            </p>
            
            <!-- Social Icons -->
            <div class="flex gap-6">
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                <i class="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                <i class="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-all duration-300">
                <i class="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div class="lg:col-span-2">
            <h3 class="text-3xl font-bold mb-6 uppercase">
              Quick<br>
              <span class="text-outline" style="color: transparent; -webkit-text-stroke: 1px white;">Links</span>
            </h3>
            <div class="grid grid-cols-4 gap-4">
              <!-- 첫 번째 열 -->
              <div class="space-y-3">
                <!-- BROADCAST -->
                <div>
                  <a href="/broadcast" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    BROADCAST
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/halla-news" class="text-xs text-blue-200 hover:text-white transition-colors">한라뉴스</a></li>
                    <li><a href="/halla-interview" class="text-xs text-blue-200 hover:text-white transition-colors">한라인터뷰</a></li>
                    <li><a href="/major-special" class="text-xs text-blue-200 hover:text-white transition-colors">전공특집</a></li>
                    <li><a href="/radio-podcast" class="text-xs text-blue-200 hover:text-white transition-colors">라디오·팟캐스트</a></li>
                  </ul>
                </div>
                
                <!-- NEWS -->
                <div>
                  <a href="/newspaper" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    NEWS
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/field-coverage" class="text-xs text-blue-200 hover:text-white transition-colors">현장취재</a></li>
                    <li><a href="/campus-report" class="text-xs text-blue-200 hover:text-white transition-colors">캠퍼스 리포트</a></li>
                  </ul>
                </div>
              </div>
              
              <!-- 두 번째 열 -->
              <div class="space-y-3">
                <!-- CAMPUS -->
                <div>
                  <a href="/campus" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    CAMPUS
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/campus-life" class="text-xs text-blue-200 hover:text-white transition-colors">캠퍼스 라이프</a></li>
                    <li><a href="/student-council-general" class="text-xs text-blue-200 hover:text-white transition-colors">총학생회</a></li>
                    <li><a href="/club-circle" class="text-xs text-blue-200 hover:text-white transition-colors">동아리·서클</a></li>
                    <li><a href="/academic-schedule" class="text-xs text-blue-200 hover:text-white transition-colors">학사일정</a></li>
                  </ul>
                </div>
                
                <!-- SHORTS -->
                <div>
                  <a href="/shorts" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    SHORTS
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/one-cut-news" class="text-xs text-blue-200 hover:text-white transition-colors">한컷 뉴스</a></li>
                    <li><a href="/issue-briefing" class="text-xs text-blue-200 hover:text-white transition-colors">이슈 브리핑</a></li>
                    <li><a href="/anonymous-news" class="text-xs text-blue-200 hover:text-white transition-colors">익명소식</a></li>
                    <li><a href="/student-tips" class="text-xs text-blue-200 hover:text-white transition-colors">재학생 꿀팁</a></li>
                  </ul>
                </div>
              </div>
              
              <!-- 세 번째 열 -->
              <div class="space-y-3">
                <!-- SPECIAL -->
                <div>
                  <a href="/special-report" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    SPECIAL
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/career-employment" class="text-xs text-blue-200 hover:text-white transition-colors">진로·취업</a></li>
                    <li><a href="/youth-region" class="text-xs text-blue-200 hover:text-white transition-colors">청년·지역</a></li>
                    <li><a href="/welfare-rights" class="text-xs text-blue-200 hover:text-white transition-colors">복지·권익</a></li>
                    <li><a href="/academic-research" class="text-xs text-blue-200 hover:text-white transition-colors">학술·연구</a></li>
                  </ul>
                </div>
                
                <!-- JEJU -->
                <div>
                  <a href="/jeju-news" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    JEJU
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/jeju-news-main" class="text-xs text-blue-200 hover:text-white transition-colors">제주소식</a></li>
                    <li><a href="/jeju-culture-art" class="text-xs text-blue-200 hover:text-white transition-colors">제주 문화·예술</a></li>
                    <li><a href="/jeju-tour-food" class="text-xs text-blue-200 hover:text-white transition-colors">관광·맛집</a></li>
                  </ul>
                </div>
              </div>
              
              <!-- 네 번째 열 -->
              <div class="space-y-3">
                <!-- OPINION -->
                <div>
                  <a href="/opinion" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    OPINION
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/editorial-column" class="text-xs text-blue-200 hover:text-white transition-colors">사설·칼럼</a></li>
                    <li><a href="/contribution" class="text-xs text-blue-200 hover:text-white transition-colors">기고</a></li>
                    <li><a href="/student-perspective" class="text-xs text-blue-200 hover:text-white transition-colors">학생의 시선</a></li>
                  </ul>
                </div>
                
                <!-- ESSAY -->
                <div>
                  <a href="/essay" class="text-sm font-semibold text-white hover:text-blue-200 transition-colors duration-300 flex items-center group">
                    <span class="inline-block w-1.5 h-1.5 bg-white mr-2 group-hover:w-2 transition-all duration-300"></span>
                    ESSAY
                  </a>
                  <ul class="ml-5 mt-0.5 space-y-0">
                    <li><a href="/time-in-jeju" class="text-xs text-blue-200 hover:text-white transition-colors">제주에서보내는시간</a></li>
                    <li><a href="/dreams-hopes" class="text-xs text-blue-200 hover:text-white transition-colors">꿈과 희망</a></li>
                    <li><a href="/travel-exploration" class="text-xs text-blue-200 hover:text-white transition-colors">여행과 탐방</a></li>
                    <li><a href="/literature-art" class="text-xs text-blue-200 hover:text-white transition-colors">문학과 예술</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h3 class="text-3xl font-bold mb-8 uppercase">
              Contact<br>
              <span class="text-outline" style="color: transparent; -webkit-text-stroke: 1px white;">Info</span>
            </h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm text-blue-200 uppercase tracking-wider mb-2">Address</p>
                <p class="text-xl text-blue-100">
                  제주특별자치도 제주시<br>
                  한라대학로 38
                </p>
              </div>
              <div>
                <p class="text-sm text-blue-200 uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:media@chu.ac.kr" class="text-xl text-blue-100 hover:text-white transition-colors duration-300">
                  media@chu.ac.kr
                </a>
              </div>
              <div>
                <p class="text-sm text-blue-200 uppercase tracking-wider mb-2">Phone</p>
                <a href="tel:064-741-7000" class="text-xl text-blue-100 hover:text-white transition-colors duration-300">
                  064-741-7000
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-blue-600">
        <div class="container mx-auto px-8 py-8">
          <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div class="text-center lg:text-left">
              <p class="text-2xl font-bold">
                © 2024 <span class="text-outline" style="color: transparent; -webkit-text-stroke: 1px white;">JHU</span> MEDIA
              </p>
            </div>
            
            <div class="flex flex-wrap justify-center gap-8">
              <a href="#" class="text-lg text-blue-100 hover:text-white transition-colors duration-300 uppercase">
                Privacy
              </a>
              <a href="#" class="text-lg text-blue-100 hover:text-white transition-colors duration-300 uppercase">
                Terms
              </a>
              <a href="#" class="text-lg text-blue-100 hover:text-white transition-colors duration-300 uppercase">
                Sitemap
              </a>
              <a href="#" class="text-lg text-blue-100 hover:text-white transition-colors duration-300 uppercase">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
};