// Admin Dashboard JavaScript
const API_BASE = '/api';
let authToken = localStorage.getItem('authToken');
let currentUser = null;
let currentSection = 'dashboard';

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

// Check authentication on load
window.addEventListener('DOMContentLoaded', async () => {
  if (!authToken) {
    alert('로그인이 필요합니다.');
    window.location.href = '/';
    return;
  }

  try {
    const response = await axios.get(`${API_BASE}/auth/me`);
    currentUser = response.data;
    
    // Check if user is admin or editor
    if (currentUser.role_id > 2) {
      alert('관리자 권한이 필요합니다.');
      window.location.href = '/';
      return;
    }

    document.getElementById('adminName').textContent = currentUser.nickname || currentUser.email;
    
    // Load dashboard data
    loadDashboard();
    
    // Initialize charts
    initCharts();
  } catch (error) {
    console.error('Authentication check failed:', error);
    alert('인증에 실패했습니다. 다시 로그인해주세요.');
    localStorage.removeItem('authToken');
    window.location.href = '/';
  }
});

// Show section
function showSection(sectionName) {
  // Hide all sections
  const sections = ['dashboard', 'articles', 'broadcast', 'shorts', 'users', 'calendar', 'comments', 'settings'];
  sections.forEach(section => {
    const element = document.getElementById(`${section}Section`);
    if (element) {
      element.classList.add('hidden');
    }
  });

  // Show selected section
  const selectedSection = document.getElementById(`${sectionName}Section`);
  if (selectedSection) {
    selectedSection.classList.remove('hidden');
  }

  // Update active menu
  document.querySelectorAll('nav a').forEach(link => {
    link.classList.remove('bg-gray-700');
  });
  event.target.closest('a').classList.add('bg-gray-700');

  // Update section title
  const titles = {
    dashboard: '대시보드',
    articles: '기사 관리',
    broadcast: '방송 콘텐츠',
    shorts: '쇼츠 관리',
    users: '사용자 관리',
    calendar: '학사일정',
    comments: '댓글 관리',
    settings: '사이트 설정'
  };
  document.getElementById('sectionTitle').textContent = titles[sectionName] || '대시보드';

  currentSection = sectionName;

  // Load section data
  switch(sectionName) {
    case 'dashboard':
      loadDashboard();
      break;
    case 'articles':
      loadArticles();
      break;
    case 'users':
      loadUsers();
      break;
    case 'calendar':
      loadCalendar();
      break;
    case 'comments':
      loadComments();
      break;
  }
}

// Load dashboard data
async function loadDashboard() {
  try {
    // Load statistics
    const [articlesRes, usersRes, commentsRes] = await Promise.all([
      axios.get(`${API_BASE}/articles?limit=1`),
      axios.get(`${API_BASE}/auth/users`).catch(() => ({ data: { users: [] } })),
      axios.get(`${API_BASE}/comments`).catch(() => ({ data: { comments: [] } }))
    ]);

    document.getElementById('totalArticles').textContent = articlesRes.data.total || 0;
    document.getElementById('totalUsers').textContent = usersRes.data.users?.length || 0;
    document.getElementById('totalComments').textContent = commentsRes.data.comments?.length || 0;

    // Load recent activities
    loadRecentActivities();
  } catch (error) {
    console.error('Failed to load dashboard data:', error);
  }
}

// Load recent activities
async function loadRecentActivities() {
  try {
    const response = await axios.get(`${API_BASE}/articles?limit=5`);
    const activities = document.getElementById('recentActivities');
    
    if (response.data.articles && response.data.articles.length > 0) {
      activities.innerHTML = response.data.articles.map(article => {
        const timeAgo = getTimeAgo(new Date(article.created_at));
        return `
          <div class="flex items-center space-x-3">
            <div class="bg-blue-100 p-2 rounded-full">
              <i class="fas fa-newspaper text-blue-600"></i>
            </div>
            <div class="flex-1">
              <p class="text-sm">
                <span class="font-semibold">${article.author_name}</span>님이 
                <span class="text-blue-600">"${article.title}"</span> 기사를 작성했습니다.
              </p>
              <p class="text-xs text-gray-500">${timeAgo}</p>
            </div>
          </div>
        `;
      }).join('');
    }
  } catch (error) {
    console.error('Failed to load recent activities:', error);
  }
}

// Load articles for management
async function loadArticles() {
  try {
    const response = await axios.get(`${API_BASE}/articles?limit=100`);
    const tableBody = document.getElementById('articlesTableBody');
    
    if (response.data.articles && response.data.articles.length > 0) {
      tableBody.innerHTML = response.data.articles.map(article => `
        <tr class="border-b hover:bg-gray-50">
          <td class="py-2">${article.article_id}</td>
          <td class="py-2 font-medium">${article.title}</td>
          <td class="py-2">${article.category_name || '일반'}</td>
          <td class="py-2">${article.author_name}</td>
          <td class="py-2">
            <span class="px-2 py-1 text-xs rounded ${
              article.status === 'published' ? 'bg-green-100 text-green-800' :
              article.status === 'draft' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }">
              ${article.status === 'published' ? '게시됨' :
                article.status === 'draft' ? '초안' : '보관됨'}
            </span>
          </td>
          <td class="py-2 text-sm">${new Date(article.created_at).toLocaleDateString('ko-KR')}</td>
          <td class="py-2">
            <button onclick="editArticle(${article.article_id})" class="text-blue-600 hover:underline mr-2">
              <i class="fas fa-edit"></i>
            </button>
            <button onclick="deleteArticle(${article.article_id})" class="text-red-600 hover:underline">
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      `).join('');
    } else {
      tableBody.innerHTML = `
        <tr>
          <td colspan="7" class="text-center py-8 text-gray-500">
            등록된 기사가 없습니다.
          </td>
        </tr>
      `;
    }
  } catch (error) {
    console.error('Failed to load articles:', error);
  }
}

// Initialize charts
function initCharts() {
  // Visitors Chart
  const visitorsCtx = document.getElementById('visitorsChart');
  if (visitorsCtx) {
    new Chart(visitorsCtx.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['월', '화', '수', '목', '금', '토', '일'],
        datasets: [{
          label: '방문자 수',
          data: [1200, 1900, 1500, 2500, 2200, 3000, 2800],
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Categories Chart
  const categoriesCtx = document.getElementById('categoriesChart');
  if (categoriesCtx) {
    new Chart(categoriesCtx.getContext('2d'), {
      type: 'doughnut',
      data: {
        labels: ['방송국', '신문사', '기획보도', '쇼츠', '캠퍼스'],
        datasets: [{
          data: [30, 25, 20, 15, 10],
          backgroundColor: [
            'rgb(239, 68, 68)',
            'rgb(59, 130, 246)',
            'rgb(34, 197, 94)',
            'rgb(251, 191, 36)',
            'rgb(168, 85, 247)'
          ]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
  }
}

// Show new article form
function showNewArticleForm() {
  // Create modal for new article
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <h2 class="text-2xl font-bold mb-6">새 기사 작성</h2>
      <form id="newArticleForm" class="space-y-4">
        <div>
          <label class="block text-sm font-medium mb-2">제목</label>
          <input type="text" name="title" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">카테고리</label>
          <select name="category" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="방송국">방송국</option>
            <option value="신문사">신문사</option>
            <option value="기획보도">기획보도</option>
            <option value="쇼츠">쇼츠</option>
            <option value="캠퍼스">캠퍼스</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">유튜브 동영상 ID (선택)</label>
          <input type="text" name="youtube_embed_id" placeholder="예: dQw4w9WgXcQ" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">대표 이미지 URL (선택)</label>
          <input type="url" name="featured_image_url" placeholder="https://example.com/image.jpg" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">내용</label>
          <textarea name="content" rows="10" required class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">상태</label>
          <select name="status" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="draft">초안</option>
            <option value="published">게시</option>
          </select>
        </div>
        <div class="flex justify-end space-x-4">
          <button type="button" onclick="closeModal()" class="px-6 py-2 border rounded-lg hover:bg-gray-100">
            취소
          </button>
          <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            저장
          </button>
        </div>
      </form>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Handle form submission
  document.getElementById('newArticleForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    try {
      await axios.post(`${API_BASE}/articles`, data);
      alert('기사가 성공적으로 작성되었습니다.');
      closeModal();
      loadArticles();
    } catch (error) {
      console.error('Failed to create article:', error);
      alert('기사 작성에 실패했습니다.');
    }
  });
}

// Close modal
function closeModal() {
  const modal = document.querySelector('.fixed.inset-0');
  if (modal) {
    modal.remove();
  }
}

// Edit article
async function editArticle(articleId) {
  try {
    const response = await axios.get(`${API_BASE}/articles/${articleId}`);
    const article = response.data;
    
    // Show edit form (similar to new article form but with data filled)
    alert('편집 기능은 준비 중입니다.');
  } catch (error) {
    console.error('Failed to load article:', error);
  }
}

// Delete article
async function deleteArticle(articleId) {
  if (!confirm('정말로 이 기사를 삭제하시겠습니까?')) {
    return;
  }
  
  try {
    await axios.delete(`${API_BASE}/articles/${articleId}`);
    alert('기사가 삭제되었습니다.');
    loadArticles();
  } catch (error) {
    console.error('Failed to delete article:', error);
    alert('기사 삭제에 실패했습니다.');
  }
}

// Logout
function logout() {
  localStorage.removeItem('authToken');
  window.location.href = '/';
}

// Helper function to get time ago
function getTimeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);
  
  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) return interval + '년 전';
  
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return interval + '개월 전';
  
  interval = Math.floor(seconds / 86400);
  if (interval > 1) return interval + '일 전';
  
  interval = Math.floor(seconds / 3600);
  if (interval > 1) return interval + '시간 전';
  
  interval = Math.floor(seconds / 60);
  if (interval > 1) return interval + '분 전';
  
  return '방금 전';
}