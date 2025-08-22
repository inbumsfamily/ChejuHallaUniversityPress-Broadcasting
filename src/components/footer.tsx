export const Footer = () => {
  return `
    <footer class="bg-gray-900 text-white border-t border-gray-700">
      <!-- Main Footer Content -->
      <div class="container mx-auto px-8 py-20">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-16">
          
          <!-- Brand Column -->
          <div class="lg:col-span-2">
            <h2 class="text-5xl lg:text-6xl font-black mb-8 leading-none">
              JEJU HALLA<br>
              <span class="text-outline" style="color: transparent; -webkit-text-stroke: 2px white;">UNIVERSITY</span>
            </h2>
            <p class="text-xl text-gray-400 mb-8 leading-relaxed">
              제주한라대학교 방송언론학과<br>
              미디어와 저널리즘의 미래를 선도합니다
            </p>
            
            <!-- Social Icons -->
            <div class="flex gap-6">
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <i class="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <i class="fab fa-youtube text-xl"></i>
              </a>
              <a href="#" class="w-12 h-12 border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
                <i class="fab fa-twitter text-xl"></i>
              </a>
            </div>
          </div>
          
          <!-- Quick Links -->
          <div>
            <h3 class="text-3xl font-bold mb-8 uppercase">
              Quick<br>
              <span class="text-outline" style="color: transparent; -webkit-text-stroke: 1px white;">Links</span>
            </h3>
            <ul class="space-y-4">
              <li>
                <a href="/broadcast" class="text-xl text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span class="inline-block w-2 h-2 bg-white mr-3 group-hover:w-4 transition-all duration-300"></span>
                  BROADCAST
                </a>
              </li>
              <li>
                <a href="/news" class="text-xl text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span class="inline-block w-2 h-2 bg-white mr-3 group-hover:w-4 transition-all duration-300"></span>
                  NEWS
                </a>
              </li>
              <li>
                <a href="/campus" class="text-xl text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span class="inline-block w-2 h-2 bg-white mr-3 group-hover:w-4 transition-all duration-300"></span>
                  CAMPUS
                </a>
              </li>
              <li>
                <a href="/culture" class="text-xl text-gray-300 hover:text-white transition-colors duration-300 flex items-center group">
                  <span class="inline-block w-2 h-2 bg-white mr-3 group-hover:w-4 transition-all duration-300"></span>
                  CULTURE
                </a>
              </li>
            </ul>
          </div>
          
          <!-- Contact Info -->
          <div>
            <h3 class="text-3xl font-bold mb-8 uppercase">
              Contact<br>
              <span class="text-outline" style="color: transparent; -webkit-text-stroke: 1px white;">Info</span>
            </h3>
            <div class="space-y-6">
              <div>
                <p class="text-sm text-gray-500 uppercase tracking-wider mb-2">Address</p>
                <p class="text-xl text-gray-300">
                  제주특별자치도 제주시<br>
                  한라대학로 38
                </p>
              </div>
              <div>
                <p class="text-sm text-gray-500 uppercase tracking-wider mb-2">Email</p>
                <a href="mailto:media@chu.ac.kr" class="text-xl text-gray-300 hover:text-white transition-colors duration-300">
                  media@chu.ac.kr
                </a>
              </div>
              <div>
                <p class="text-sm text-gray-500 uppercase tracking-wider mb-2">Phone</p>
                <a href="tel:064-741-7000" class="text-xl text-gray-300 hover:text-white transition-colors duration-300">
                  064-741-7000
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-700">
        <div class="container mx-auto px-8 py-8">
          <div class="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div class="text-center lg:text-left">
              <p class="text-2xl font-bold">
                © 2024 <span class="text-outline" style="color: transparent; -webkit-text-stroke: 1px white;">JHU</span> MEDIA
              </p>
            </div>
            
            <div class="flex flex-wrap justify-center gap-8">
              <a href="#" class="text-lg text-gray-300 hover:text-white transition-colors duration-300 uppercase">
                Privacy
              </a>
              <a href="#" class="text-lg text-gray-300 hover:text-white transition-colors duration-300 uppercase">
                Terms
              </a>
              <a href="#" class="text-lg text-gray-300 hover:text-white transition-colors duration-300 uppercase">
                Sitemap
              </a>
              <a href="#" class="text-lg text-gray-300 hover:text-white transition-colors duration-300 uppercase">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
};