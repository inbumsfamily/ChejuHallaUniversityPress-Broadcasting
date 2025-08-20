// Main application JavaScript
const API_BASE = '/api';

// Store authentication token
let authToken = localStorage.getItem('authToken');
let currentUser = null;

// Axios interceptor to add auth token
axios.interceptors.request.use(
  config => {
    if (authToken) {
      config.headers.Authorization = `Bearer ${authToken}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Load latest articles for main page
async function loadLatestArticles() {
  try {
    const response = await axios.get(`${API_BASE}/articles?limit=12`);
    const articlesSection = document.getElementById('latestArticles');
    if (!articlesSection) return;
    
    if (response.data.articles && response.data.articles.length > 0) {
      // Create video player for the first position (spans 2 columns)
      const videoPlayerHtml = `
        <div class="col-span-2 bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
          <div class="relative" style="padding-bottom: 56.25%;">
            <iframe 
              class="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="한라인터뷰 - 최신 인터뷰 영상"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
            </iframe>
          </div>
          <div class="p-4">
            <span class="text-xs text-blue-600 font-semibold uppercase tracking-wide">한라인터뷰</span>
            <h3 class="text-lg font-bold mt-2 mb-2 text-gray-800">
              제주한라대학교 신문방송사 인터뷰 영상
            </h3>
            <p class="text-gray-600 mt-2">
              제주한라대학교 구성원들과 함께하는 특별한 인터뷰를 만나보세요. 학생, 교수, 직원들의 생생한 이야기를 전달합니다.
            </p>
            <button class="text-blue-600 hover:text-blue-700 mt-3 inline-block font-semibold transition-colors" onclick="window.location.href='/halla-interview'">
              더 많은 인터뷰 보기 →
            </button>
          </div>
        </div>
      `;
      
      // Create regular article cards for the rest (starting from first article)
      const articleCards = response.data.articles.map((article, index) => `
        <article class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onclick="window.location.href='/article/${article.slug}'">
          ${article.featured_image_url ? `
            <img src="${article.featured_image_url}" alt="${article.title}" class="w-full h-48 object-cover">
          ` : `
            <div class="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img src="https://picsum.photos/400/300?random=${index + Date.now()}" alt="${article.title}" class="w-full h-full object-cover">
            </div>
          `}
          <div class="p-4">
            <span class="text-xs text-blue-600 font-semibold uppercase tracking-wide">${article.category_name || '일반'}</span>
            <h3 class="text-lg font-bold mt-2 mb-2 line-clamp-2 text-gray-800 hover:text-blue-600 transition-colors">
              ${article.title}
            </h3>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-user mr-1 text-gray-400"></i>
              <span class="mr-3">${article.author_name}</span>
              <i class="fas fa-eye mr-1 text-gray-400"></i>
              <span>${article.view_count}</span>
            </div>
            <p class="text-gray-600 mt-2 line-clamp-3">${stripHtml(article.content)}</p>
            <button class="text-blue-600 hover:text-blue-700 mt-3 inline-block font-semibold transition-colors" onclick="event.stopPropagation(); window.location.href='/article/${article.slug}'">
              자세히 보기 →
            </button>
          </div>
        </article>
      `).join('');
      
      // Combine video player and article cards
      articlesSection.innerHTML = videoPlayerHtml + articleCards;
    } else {
      articlesSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <i class="fas fa-newspaper text-gray-300 text-6xl mb-4"></i>
          <p class="text-gray-500">아직 등록된 기사가 없습니다.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('Failed to load latest articles:', error);
  }
}

// Load newspaper articles
async function loadNewspaperArticles() {
  try {
    const response = await axios.get(`${API_BASE}/articles?category=newspaper&limit=6`);
    const newspaperSection = document.getElementById('newspaperArticles');
    
    if (response.data.articles && response.data.articles.length > 0) {
      newspaperSection.innerHTML = response.data.articles.map((article, index) => `
        <article class="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-1" onclick="window.location.href='/article/${article.slug}'">
          ${article.featured_image_url ? `
            <img src="${article.featured_image_url}" alt="${article.title}" class="w-full h-48 object-cover">
          ` : `
            <div class="w-full h-48 bg-gray-100 flex items-center justify-center relative overflow-hidden">
              <img src="https://picsum.photos/400/300?random=${index + 100 + Date.now()}" alt="${article.title}" class="w-full h-full object-cover">
            </div>
          `}
          <div class="p-4">
            <span class="text-xs text-blue-600 font-semibold uppercase tracking-wide">${article.category_name || '신문사'}</span>
            <h3 class="text-lg font-bold mt-2 mb-2 line-clamp-2 text-gray-800 hover:text-blue-600 transition-colors">
              ${article.title}
            </h3>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-user mr-1 text-gray-400"></i>
              <span class="mr-3">${article.author_name}</span>
              <i class="fas fa-eye mr-1 text-gray-400"></i>
              <span>${article.view_count}</span>
            </div>
            <p class="text-gray-600 mt-2 line-clamp-3">${stripHtml(article.content)}</p>
            <button class="text-blue-600 hover:text-blue-700 mt-3 inline-block font-semibold transition-colors" onclick="event.stopPropagation(); window.location.href='/article/${article.slug}'">
              자세히 보기 →
            </button>
          </div>
        </article>
      `).join('');
    } else {
      newspaperSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <i class="fas fa-newspaper text-gray-300 text-6xl mb-4"></i>
          <p class="text-gray-500">아직 등록된 기사가 없습니다.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('Failed to load newspaper articles:', error);
  }
}

// Scroll to section smoothly
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Load calendar events
async function loadCalendarEvents() {
  try {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    
    const response = await axios.get(`${API_BASE}/calendar?year=${year}&month=${month}`);
    const calendarContainer = document.getElementById('calendarContainer');
    
    if (response.data.events && response.data.events.length > 0) {
      const eventsHtml = response.data.events.map(event => {
        const startDate = new Date(event.event_date_start);
        const endDate = event.event_date_end ? new Date(event.event_date_end) : null;
        
        return `
          <div class="border-l-4 border-blue-500 pl-4 py-2">
            <div class="font-semibold text-gray-800">${event.title}</div>
            <div class="text-sm text-gray-600">
              ${formatDate(startDate)}${endDate && endDate.getTime() !== startDate.getTime() ? ` ~ ${formatDate(endDate)}` : ''}
            </div>
            ${event.description ? `<div class="text-sm text-gray-500 mt-1">${event.description}</div>` : ''}
          </div>
        `;
      }).join('');
      
      calendarContainer.innerHTML = `
        <h4 class="text-lg font-semibold mb-4">${year}년 ${month}월 학사일정</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          ${eventsHtml}
        </div>
      `;
    } else {
      calendarContainer.innerHTML = `
        <div class="text-center py-8">
          <i class="fas fa-calendar text-gray-300 text-4xl mb-4"></i>
          <p class="text-gray-500">이번 달 학사일정이 없습니다.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('Failed to load calendar events:', error);
  }
}

// Helper function to strip HTML
function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || '';
}

// Helper function to format date
function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ko-KR', options);
}

// Login modal
function showLoginModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
      <h2 class="text-2xl font-bold mb-6">로그인</h2>
      <form id="loginForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
            이메일
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 id="email" type="email" placeholder="email@chu.ac.kr" required>
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            비밀번호
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                 id="password" type="password" placeholder="비밀번호" required>
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="submit">
            로그인
          </button>
          <button type="button" onclick="this.closest('.fixed').remove()" 
                  class="text-gray-500 hover:text-gray-700">
            취소
          </button>
        </div>
        <div class="mt-4 text-center">
          <a href="#" onclick="showRegisterModal(); this.closest('.fixed').remove(); return false;" 
             class="text-blue-500 hover:text-blue-700 text-sm">
            아직 계정이 없으신가요? 회원가입
          </a>
        </div>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Handle login form submission
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    try {
      const response = await axios.post(`${API_BASE}/auth/login`, {
        email,
        password
      });
      
      if (response.data.token) {
        authToken = response.data.token;
        currentUser = response.data.user;
        localStorage.setItem('authToken', authToken);
        
        // Update UI
        updateAuthUI();
        modal.remove();
        
        // Show success message
        showNotification('로그인 성공!', 'success');
      }
    } catch (error) {
      showNotification(error.response?.data?.error || '로그인 실패', 'error');
    }
  });
}

// Register modal
function showRegisterModal() {
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-md w-full mx-4">
      <h2 class="text-2xl font-bold mb-6">회원가입</h2>
      <form id="registerForm">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="regEmail">
            이메일
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 id="regEmail" type="email" placeholder="email@chu.ac.kr" required>
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="nickname">
            닉네임
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                 id="nickname" type="text" placeholder="닉네임 (2-20자)" required minlength="2" maxlength="20">
        </div>
        <div class="mb-6">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="regPassword">
            비밀번호
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                 id="regPassword" type="password" placeholder="비밀번호 (8자 이상)" required minlength="8">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                  type="submit">
            회원가입
          </button>
          <button type="button" onclick="this.closest('.fixed').remove()" 
                  class="text-gray-500 hover:text-gray-700">
            취소
          </button>
        </div>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Handle register form submission
  document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('regEmail').value;
    const nickname = document.getElementById('nickname').value;
    const password = document.getElementById('regPassword').value;
    
    try {
      const response = await axios.post(`${API_BASE}/auth/register`, {
        email,
        nickname,
        password
      });
      
      if (response.data.token) {
        authToken = response.data.token;
        currentUser = response.data.user;
        localStorage.setItem('authToken', authToken);
        
        // Update UI
        updateAuthUI();
        modal.remove();
        
        // Show success message
        showNotification('회원가입 성공! 환영합니다.', 'success');
      }
    } catch (error) {
      showNotification(error.response?.data?.error || '회원가입 실패', 'error');
    }
  });
}

// Update authentication UI
function updateAuthUI() {
  const loginBtn = document.getElementById('loginBtn');
  const adminBtn = document.getElementById('adminBtn');
  
  if (currentUser) {
    loginBtn.innerHTML = `
      <span class="mr-2">${currentUser.nickname}</span>
      <button onclick="logout()" class="text-red-600 hover:text-red-800">
        <i class="fas fa-sign-out-alt"></i> 로그아웃
      </button>
    `;
    
    // Show admin button if user is admin or editor
    if (currentUser.role_id <= 2 && adminBtn) {
      adminBtn.classList.remove('hidden');
      adminBtn.onclick = () => window.location.href = '/admin';
    }
  } else {
    loginBtn.innerHTML = '<i class="fas fa-user"></i> 로그인';
    loginBtn.onclick = showLoginModal;
    if (adminBtn) {
      adminBtn.classList.add('hidden');
    }
  }
}

// Logout function
function logout() {
  authToken = null;
  currentUser = null;
  localStorage.removeItem('authToken');
  updateAuthUI();
  showNotification('로그아웃되었습니다.', 'success');
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  const bgColor = type === 'success' ? 'bg-green-500' : type === 'error' ? 'bg-red-500' : 'bg-blue-500';
  
  notification.className = `fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50`;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Check authentication on load
async function checkAuth() {
  if (authToken) {
    try {
      const response = await axios.get(`${API_BASE}/auth/me`);
      currentUser = response.data.user;
      updateAuthUI();
    } catch (error) {
      // Token is invalid
      logout();
    }
  }
}

// Load broadcast content
async function loadBroadcastContent() {
  try {
    const response = await axios.get(`${API_BASE}/articles?category=broadcast&limit=6`);
    const broadcastSection = document.getElementById('broadcastArticles');
    if (!broadcastSection) return;
    
    if (response.data.articles && response.data.articles.length > 0) {
      broadcastSection.innerHTML = response.data.articles.map(article => `
        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onclick="window.location.href='/article/${article.slug}'">
          ${article.youtube_embed_id ? `
            <div class="aspect-video bg-black relative" onclick="event.stopPropagation()">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/${article.youtube_embed_id}" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
              ></iframe>
            </div>
          ` : article.featured_image_url ? `
            <img src="${article.featured_image_url}" alt="${article.title}" class="w-full h-48 object-cover">
          ` : `
            <div class="aspect-video bg-gray-300 relative">
              <div class="absolute inset-0 flex items-center justify-center">
                <i class="fas fa-play-circle text-white text-4xl"></i>
              </div>
            </div>
          `}
          <div class="p-4">
            <span class="text-xs text-red-600 font-semibold">${article.category_name || '방송국'}</span>
            <h3 class="text-lg font-bold mt-2 mb-2 line-clamp-2 text-gray-800 hover:text-blue-600">
              ${article.title}
            </h3>
            <div class="flex items-center text-sm text-gray-500">
              <i class="fas fa-user mr-1"></i>
              <span class="mr-3">${article.author_name}</span>
              <i class="fas fa-eye mr-1"></i>
              <span>${article.view_count}</span>
            </div>
            <p class="text-gray-600 mt-2 line-clamp-3">${stripHtml(article.content)}</p>
            <button class="text-blue-600 hover:text-blue-800 mt-3 inline-block font-semibold" onclick="event.stopPropagation(); window.location.href='/article/${article.slug}'">
              자세히 보기 →
            </button>
          </div>
        </article>
      `).join('');
    } else {
      broadcastSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <i class="fas fa-video text-gray-300 text-6xl mb-4"></i>
          <p class="text-gray-500">아직 등록된 방송 콘텐츠가 없습니다.</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('Failed to load broadcast content:', error);
    const broadcastSection = document.getElementById('broadcastArticles');
    if (broadcastSection) {
      broadcastSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <i class="fas fa-exclamation-circle text-red-300 text-6xl mb-4"></i>
          <p class="text-gray-500">방송 콘텐츠를 불러오는 중 오류가 발생했습니다.</p>
        </div>
      `;
    }
  }
}

// Load special reports
async function loadSpecialReports() {
  // This would load special reports
  console.log('Loading special reports...');
}

// Load shorts
async function loadShorts() {
  // This would load shorts videos
  console.log('Loading shorts...');
}

// Load campus life
async function loadCampusLife() {
  // This would load campus life content
  console.log('Loading campus life...');
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  loadLatestArticles();
  loadNewspaperArticles();
  loadBroadcastContent();
  loadSpecialReports();
  loadShorts();
  loadCampusLife();
  
  // Listen for custom login modal event
  window.addEventListener('openLoginModal', () => {
    if (currentUser) {
      // If already logged in, show logout option
      if (confirm('로그아웃 하시겠습니까?')) {
        logout();
      }
    } else {
      showLoginModal();
    }
  });
  
  // Set up login button
  const loginBtn = document.getElementById('loginBtn');
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      if (!currentUser) {
        e.preventDefault();
        showLoginModal();
      }
    });
  }
  
  // Set up mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }
});