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

// Removed loadLatestArticles function - LATEST ARTICLES section has been deleted

// Load newspaper articles
async function loadNewspaperArticles() {
  try {
    const response = await axios.get(`${API_BASE}/articles?category=press&limit=6`);
    const newspaperSection = document.getElementById('newspaperArticles');
    
    if (response.data.articles && response.data.articles.length > 0) {
      newspaperSection.innerHTML = response.data.articles.map((article, index) => `
        <a href="/article/${article.slug}" class="block">
          <article class="bg-white/10 border border-white/20 overflow-hidden hover:border-white/40 transition-all duration-300 cursor-pointer group backdrop-blur-sm hover:bg-white/20 rounded-lg h-full">
            <div class="relative overflow-hidden h-48">
              ${(() => {
                // YouTube 영상이 있는 경우 YouTube 섬네일 우선 사용
                if (article.youtube_embed_id) {
                  const thumbnail = getYouTubeThumbnail(article.youtube_embed_id);
                  return `
                    <div class="relative w-full h-full">
                      <img src="${thumbnail.url}" 
                           onerror="this.onerror=null; this.src='${thumbnail.fallbackUrl}';" 
                           alt="${article.title}" 
                           class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105">
                      <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all transform hover:scale-110">
                          <i class="fas fa-play text-2xl ml-1"></i>
                        </div>
                      </div>
                    </div>
                  `;
                }
                // 일반 이미지가 있는 경우
                else if (article.featured_image_url) {
                  return `<img src="${article.featured_image_url}" alt="${article.title}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105">`;
                }
                // 이미지가 없는 경우 랜덤 이미지
                else {
                  return `<img src="https://picsum.photos/400/300?random=${index + 100 + Date.now()}" alt="${article.title}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105">`;
                }
              })()}
              <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            </div>
            <div class="p-6">
              <span class="text-xs font-bold uppercase tracking-widest text-blue-200">${article.category_name || 'PRESS'}</span>
              <h3 class="text-xl font-bold mt-3 mb-2 line-clamp-2 text-white transition-colors group-hover:text-blue-200">
                ${article.title}
              </h3>
              <div class="flex items-center text-xs text-white/70 uppercase tracking-wider">
                <span class="mr-4">${article.author_name || '기자'}</span>
                <span>${article.view_count || 0} VIEWS</span>
              </div>
              <p class="text-white/80 mt-3 line-clamp-3 text-sm leading-relaxed">${stripHtml(article.content)}</p>
            </div>
          </article>
        </a>
      `).join('');
    } else {
      newspaperSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <p class="text-white text-lg">기사를 불러오는 중...</p>
        </div>
      `;
    }
  } catch (error) {
    console.error('Failed to load newspaper articles:', error);
    const newspaperSection = document.getElementById('newspaperArticles');
    if (newspaperSection) {
      newspaperSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <p class="text-white text-lg">기사를 불러오는 중 오류가 발생했습니다.</p>
        </div>
      `;
    }
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
function formatDate(dateString) {
  if (!dateString) return '날짜 미상';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '날짜 미상';
  
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ko-KR', options);
}

// Helper function to get YouTube thumbnail URL
function getYouTubeThumbnail(videoId, quality = 'maxresdefault') {
  if (!videoId) return null;
  
  // YouTube thumbnail URL patterns
  // maxresdefault: 1280x720 (highest quality, may not exist for all videos)
  // sddefault: 640x480 (standard definition)
  // hqdefault: 480x360 (high quality)
  // mqdefault: 320x180 (medium quality)
  // default: 120x90 (default quality)
  
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${quality}.jpg`;
  
  // Return both the URL and a fallback URL in case maxresdefault doesn't exist
  return {
    url: thumbnailUrl,
    fallbackUrl: `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  };
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
        <a href="/article/${article.slug}" class="block">
          <article class="bg-white/10 backdrop-blur rounded-lg overflow-hidden hover:bg-white/20 transition-all cursor-pointer border border-white/20 h-full">
            ${article.youtube_embed_id ? `
              <div class="aspect-video bg-black relative" onclick="event.preventDefault(); event.stopPropagation(); window.open('https://www.youtube.com/watch?v=${article.youtube_embed_id}', '_blank')">
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
              <span class="text-xs text-blue-200 font-semibold">${article.category_name || '방송국'}</span>
              <h3 class="text-lg font-bold mt-2 mb-2 line-clamp-2 text-white group-hover:text-blue-200">
                ${article.title}
              </h3>
              <div class="flex items-center text-sm text-white/70">
                <i class="fas fa-user mr-1"></i>
                <span class="mr-3">${article.author_name || '방송부'}</span>
                <i class="fas fa-eye mr-1"></i>
                <span>${article.view_count || 0}</span>
              </div>
              <p class="text-white/80 mt-2 line-clamp-3">${stripHtml(article.content)}</p>
            </div>
          </article>
        </a>
      `).join('');
    } else {
      broadcastSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <p class="text-white text-lg">아직 등록된 방송 콘텐츠가 없습니다.</p>
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
  console.log('🎓 Starting loadCampusLife function...');
  try {
    // Campus 카테고리의 최신 기사들을 가져옵니다
    console.log('📡 Fetching campus articles from API...');
    const response = await axios.get(`${API_BASE}/articles?category=campus&limit=6`);
    const campusSection = document.getElementById('campusArticles');
    console.log('📊 Campus API response:', response.data);
    
    if (response.data.articles && response.data.articles.length > 0) {
      campusSection.innerHTML = response.data.articles.map((article, index) => `
        <a href="/article/${article.slug}" class="block">
          <article class="bg-white border border-gray-200 overflow-hidden hover:border-gray-400 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md rounded-lg h-full">
            <div class="relative overflow-hidden h-48">
              ${(() => {
                // YouTube 영상이 있는 경우 YouTube 섬네일 우선 사용
                if (article.youtube_embed_id) {
                  console.log(`🎥 YouTube article found: ${article.title} - ID: ${article.youtube_embed_id}`);
                  return `
                    <div class="relative w-full h-full">
                      <img src="https://img.youtube.com/vi/${article.youtube_embed_id}/maxresdefault.jpg" 
                           onerror="console.warn('Max quality failed, trying HQ'); this.src='https://img.youtube.com/vi/${article.youtube_embed_id}/hqdefault.jpg';" 
                           onload="console.log('✅ YouTube thumbnail loaded for: ${article.title}');"
                           alt="${article.title}" 
                           class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105">
                      <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div class="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all transform hover:scale-110">
                          <i class="fas fa-play text-2xl ml-1"></i>
                        </div>
                      </div>
                    </div>
                  `;
                }
                // 일반 이미지가 있는 경우
                else if (article.featured_image_url) {
                  return `<img src="${article.featured_image_url}" alt="${article.title}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105">`;
                }
                // 이미지가 없는 경우 기본 디자인
                else {
                  return `
                    <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center transition-all duration-500 group-hover:from-blue-200 group-hover:to-blue-300">
                      <div class="text-center">
                        <i class="fas fa-graduation-cap text-4xl text-blue-600 mb-2"></i>
                        <p class="text-blue-600 font-semibold">Campus Life</p>
                      </div>
                    </div>
                  `;
                }
              })()}
              <div class="absolute top-2 left-2">
                <span class="${article.youtube_embed_id ? 'bg-red-600' : 'bg-blue-600'} text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                  ${article.youtube_embed_id ? '<i class="fas fa-play mr-1"></i>' : ''}
                  ${article.category_name || 'CAMPUS'}
                </span>
              </div>
            </div>
            <div class="p-4">
              <h3 class="text-lg font-bold mb-2 line-clamp-2 text-gray-900 transition-colors group-hover:text-blue-600">
                ${article.title}
              </h3>
              <p class="text-gray-600 mb-3 line-clamp-3 text-sm leading-relaxed">
                ${stripHtml(article.content)}
              </p>
              <div class="flex items-center justify-between text-xs text-gray-500">
                <span class="flex items-center">
                  <i class="fas fa-user mr-1"></i>
                  ${article.author_name || '기자'}
                </span>
                <span class="flex items-center">
                  <i class="fas fa-calendar mr-1"></i>
                  ${formatDate(article.created_at)}
                </span>
              </div>
            </div>
          </article>
        </a>
      `).join('');
    } else {
      // Campus 카테고리에 기사가 없는 경우 admin-api로 재시도
      const adminResponse = await axios.get('/api/admin-api/articles');
      const campusArticles = adminResponse.data.articles?.filter(article => {
        return article.category_name && (
          article.category_name.includes('대학소식') || 
          article.category_name.includes('동아리') || 
          article.category_name.includes('학생활동') ||
          article.category_name.includes('캠퍼스 라이프') ||
          article.category_name.includes('장학') ||
          article.category_name.includes('졸업생')
        );
      }).slice(0, 6);
      
      if (campusArticles && campusArticles.length > 0) {
        campusSection.innerHTML = campusArticles.map((article, index) => `
          <a href="/article/${article.slug || article.article_id}" class="block">
            <article class="bg-white border border-gray-200 overflow-hidden hover:border-gray-400 transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md rounded-lg h-full">
              <div class="relative overflow-hidden h-48">
                ${(() => {
                  console.log(`Campus fallback article processing: ${article.title}, YouTube ID: ${article.youtube_embed_id}`);
                  // YouTube 영상이 있는 경우 YouTube 섬네일 우선 사용
                  if (article.youtube_embed_id) {
                    console.log(`🎥 YouTube campus article found: ${article.title} - ID: ${article.youtube_embed_id}`);
                    return `
                      <div class="relative w-full h-full">
                        <img src="https://img.youtube.com/vi/${article.youtube_embed_id}/maxresdefault.jpg" 
                             onerror="console.warn('Max quality failed for campus, trying HQ'); this.src='https://img.youtube.com/vi/${article.youtube_embed_id}/hqdefault.jpg';" 
                             onload="console.log('✅ YouTube campus thumbnail loaded for: ${article.title}');"
                             alt="${article.title}" 
                             class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105">
                        <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div class="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center transition-all transform hover:scale-110">
                            <i class="fas fa-play text-2xl ml-1"></i>
                          </div>
                        </div>
                      </div>
                    `;
                  }
                  // 일반 이미지가 있는 경우
                  else if (article.featured_image_url) {
                    return `<img src="${article.featured_image_url}" alt="${article.title}" class="w-full h-full object-cover transition-all duration-500 group-hover:scale-105">`;
                  }
                  // 이미지가 없는 경우 기본 디자인
                  else {
                    return `
                      <div class="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center transition-all duration-500 group-hover:from-blue-200 group-hover:to-blue-300">
                        <div class="text-center">
                          <i class="fas fa-graduation-cap text-4xl text-blue-600 mb-2"></i>
                          <p class="text-blue-600 font-semibold">Campus Life</p>
                        </div>
                      </div>
                    `;
                  }
                })()}
                <div class="absolute top-2 left-2">
                  <span class="${article.youtube_embed_id ? 'bg-red-600' : 'bg-blue-600'} text-white px-2 py-1 rounded-full text-xs font-bold flex items-center">
                    ${article.youtube_embed_id ? '<i class="fas fa-play mr-1"></i>' : ''}
                    ${article.category_name || 'CAMPUS'}
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-lg font-bold mb-2 line-clamp-2 text-gray-900 transition-colors group-hover:text-blue-600">
                  ${article.title}
                </h3>
                <p class="text-gray-600 mb-3 line-clamp-3 text-sm leading-relaxed">
                  ${stripHtml(article.content)}
                </p>
                <div class="flex items-center justify-between text-xs text-gray-500">
                  <span class="flex items-center">
                    <i class="fas fa-user mr-1"></i>
                    ${article.author_name || '기자'}
                  </span>
                  <span class="flex items-center">
                    <i class="fas fa-calendar mr-1"></i>
                    ${formatDate(article.created_at)}
                  </span>
                </div>
              </div>
            </article>
          </a>
        `).join('');
      } else {
        campusSection.innerHTML = `
          <div class="col-span-3 text-center py-12">
            <i class="fas fa-graduation-cap text-4xl text-gray-400 mb-4"></i>
            <p class="text-gray-600 text-lg">Campus 소식이 곧 업데이트될 예정입니다.</p>
          </div>
        `;
      }
    }
  } catch (error) {
    console.error('Failed to load campus articles:', error);
    const campusSection = document.getElementById('campusArticles');
    if (campusSection) {
      campusSection.innerHTML = `
        <div class="col-span-3 text-center py-12">
          <i class="fas fa-exclamation-triangle text-4xl text-red-400 mb-4"></i>
          <p class="text-gray-600 text-lg">Campus 소식을 불러오는 중 오류가 발생했습니다.</p>
        </div>
      `;
    }
  }
}

// Initialize application
document.addEventListener('DOMContentLoaded', () => {
  checkAuth();
  // loadLatestArticles() removed - LATEST ARTICLES section deleted
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