// Admin Dashboard JavaScript - 완전 작동 버전
const API_BASE = '/api/admin-api';
let currentSection = 'dashboard';
let currentArticles = [];
let currentCategories = [];
let currentUsers = [];

// Initialize admin dashboard
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Admin dashboard initializing...');
    
    // 데모용으로 인증 체크 생략
    document.getElementById('adminName').textContent = '관리자';
    
    // Load initial data
    await loadDashboard();
    
    // Initialize charts
    initCharts();
    
    console.log('Admin dashboard initialized successfully');
});

// Section management
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('[id$="Section"]');
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    
    // Remove active class from all nav items
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.classList.remove('bg-gray-700');
        item.classList.add('hover:bg-gray-700');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    
    // Update nav active state
    const activeNav = document.querySelector(`[href="#${sectionName}"]`);
    if (activeNav) {
        activeNav.classList.add('bg-gray-700');
        activeNav.classList.remove('hover:bg-gray-700');
    }
    
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
    
    document.getElementById('sectionTitle').textContent = titles[sectionName] || '관리자 패널';
    currentSection = sectionName;
    
    // Load section-specific data
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
        case 'banners':
            loadBanners();
            break;
        case 'broadcast':
            loadBroadcastContent();
            break;
        case 'shorts':
            loadShortsContent();
            break;
        case 'calendar':
            loadCalendar();
            break;
        case 'comments':
            loadComments();
            break;
        case 'categories':
            loadCategories();
            break;
        case 'settings':
            loadSettings();
            break;
    }
}

// Dashboard functions
async function loadDashboard() {
    try {
        // Load statistics
        const [statsRes, articlesRes, usersRes] = await Promise.all([
            axios.get(`${API_BASE}/dashboard-stats`),
            axios.get(`${API_BASE}/articles`),
            axios.get(`${API_BASE}/users`).catch(() => ({data: {users: []}}))
        ]);
        
        // Update stats from dashboard-stats API
        if (statsRes.data) {
            document.getElementById('totalArticles').textContent = statsRes.data.totalArticles || 0;
            document.getElementById('totalUsers').textContent = statsRes.data.totalUsers || 0;
            document.getElementById('totalComments').textContent = statsRes.data.totalComments || 0;
            document.getElementById('todayVisitors').textContent = statsRes.data.todayVisitors || 0;
        }
        
        // Update recent activities
        updateRecentActivities(articlesRes.data.articles || []);
        
    } catch (error) {
        console.error('Failed to load dashboard:', error);
    }
}

function updateRecentActivities(articles) {
    const recentActivities = document.getElementById('recentActivities');
    if (!recentActivities) return;
    
    const recentArticles = articles.slice(0, 5);
    recentActivities.innerHTML = recentArticles.map(article => `
        <div class="flex items-center space-x-3">
            <div class="bg-blue-100 p-2 rounded-full">
                <i class="fas fa-newspaper text-blue-600"></i>
            </div>
            <div class="flex-1">
                <p class="text-sm">
                    <span class="font-semibold">${article.author_name || '편집부'}</span>님이 
                    <span class="text-blue-600">"${article.title}"</span> 기사를 작성했습니다.
                </p>
                <p class="text-xs text-gray-500">${new Date(article.created_at).toLocaleString('ko-KR')}</p>
            </div>
        </div>
    `).join('') || '<p class="text-center text-gray-500">최근 활동이 없습니다.</p>';
}

// Articles management
async function loadArticles() {
    try {
        const response = await axios.get(`${API_BASE}/articles`);
        currentArticles = response.data.articles || [];
        renderArticlesTable();
    } catch (error) {
        console.error('Failed to load articles:', error);
        showErrorMessage('기사를 불러오는데 실패했습니다.');
    }
}

function renderArticlesTable() {
    const tableBody = document.getElementById('articlesTableBody');
    if (!tableBody) return;
    
    if (currentArticles.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="7" class="text-center py-4">등록된 기사가 없습니다.</td></tr>';
        return;
    }
    
    tableBody.innerHTML = currentArticles.map(article => `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-2">${article.article_id}</td>
            <td class="py-3 px-2">
                <div class="max-w-xs">
                    <p class="font-medium text-gray-900 truncate">${article.title}</p>
                    <p class="text-sm text-gray-500">${article.content.substring(0, 50)}...</p>
                </div>
            </td>
            <td class="py-3 px-2">
                <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    ${article.category_name || '미분류'}
                </span>
            </td>
            <td class="py-3 px-2">${article.author_name || '편집부'}</td>
            <td class="py-3 px-2">
                <span class="px-2 py-1 ${article.is_featured ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'} text-xs rounded-full">
                    ${article.is_featured ? '중요' : '일반'}
                </span>
            </td>
            <td class="py-3 px-2 text-sm text-gray-500">
                ${new Date(article.created_at).toLocaleDateString('ko-KR')}
            </td>
            <td class="py-3 px-2">
                <div class="flex space-x-2">
                    <button onclick="editArticle(${article.article_id})" 
                            class="text-blue-600 hover:text-blue-900 text-sm">
                        <i class="fas fa-edit"></i> 수정
                    </button>
                    <button onclick="deleteArticle(${article.article_id})" 
                            class="text-red-600 hover:text-red-900 text-sm">
                        <i class="fas fa-trash"></i> 삭제
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Article CRUD functions
function showNewArticleForm() {
    const formHtml = `
        <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center mb-4">
                    <h3 class="text-lg font-semibold">새 기사 작성</h3>
                    <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <form id="articleForm" onsubmit="submitArticle(event)">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">제목*</label>
                            <input type="text" name="title" required 
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">카테고리*</label>
                            <select name="category_id" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="">카테고리 선택</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">작성자*</label>
                            <select name="author_id" required 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="1">편집부</option>
                                <option value="2">김기자</option>
                                <option value="3">이기자</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">중요 기사</label>
                            <select name="is_featured" 
                                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="0">일반</option>
                                <option value="1">중요</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">대표 이미지 URL</label>
                            <input type="url" name="featured_image_url" 
                                   placeholder="https://example.com/image.jpg"
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">YouTube 영상 ID</label>
                            <input type="text" name="youtube_embed_id" 
                                   placeholder="dQw4w9WgXcQ"
                                   class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        </div>
                    </div>
                    <div class="mb-4">
                        <label class="block text-sm font-medium text-gray-700 mb-2">내용*</label>
                        <textarea name="content" required rows="10" 
                                  class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                  placeholder="기사 내용을 입력하세요..."></textarea>
                    </div>
                    <div class="flex justify-end space-x-3">
                        <button type="button" onclick="closeModal()" 
                                class="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                            취소
                        </button>
                        <button type="submit" 
                                class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                            저장
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', formHtml);
    loadCategoriesForForm();
}

async function loadCategoriesForForm() {
    try {
        const response = await axios.get(`${API_BASE}/categories`);
        const categories = response.data.categories || [];
        
        const categorySelect = document.querySelector('select[name="category_id"]');
        if (categorySelect) {
            categorySelect.innerHTML = '<option value="">카테고리 선택</option>' +
                categories.map(cat => `<option value="${cat.category_id}">${cat.name}</option>`).join('');
        }
    } catch (error) {
        console.error('Failed to load categories:', error);
    }
}

async function submitArticle(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const articleData = {
        title: formData.get('title'),
        content: formData.get('content'),
        category_id: parseInt(formData.get('category_id')),
        author_id: parseInt(formData.get('author_id')),
        is_featured: parseInt(formData.get('is_featured')),
        featured_image_url: formData.get('featured_image_url') || null,
        youtube_embed_id: formData.get('youtube_embed_id') || null,
        slug: generateSlug(formData.get('title'))
    };
    
    try {
        await axios.post(`${API_BASE}/articles`, articleData);
        closeModal();
        await loadArticles();
        showSuccessMessage('기사가 성공적으로 등록되었습니다.');
    } catch (error) {
        console.error('Failed to create article:', error);
        showErrorMessage('기사 등록에 실패했습니다.');
    }
}

function generateSlug(title) {
    return title.toLowerCase()
        .replace(/[^a-z0-9가-힣\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim('-') + '-' + Date.now();
}

async function editArticle(articleId) {
    const article = currentArticles.find(a => a.article_id === articleId);
    if (!article) return;
    
    showNewArticleForm();
    
    // Wait for form to render
    setTimeout(() => {
        document.querySelector('input[name="title"]').value = article.title;
        document.querySelector('textarea[name="content"]').value = article.content;
        document.querySelector('select[name="category_id"]').value = article.category_id;
        document.querySelector('select[name="author_id"]').value = article.author_id;
        document.querySelector('select[name="is_featured"]').value = article.is_featured;
        document.querySelector('input[name="featured_image_url"]').value = article.featured_image_url || '';
        document.querySelector('input[name="youtube_embed_id"]').value = article.youtube_embed_id || '';
        
        // Change form title and submit handler
        document.querySelector('.bg-white h3').textContent = '기사 수정';
        document.getElementById('articleForm').onsubmit = (e) => updateArticle(e, articleId);
    }, 100);
}

async function updateArticle(event, articleId) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const articleData = {
        title: formData.get('title'),
        content: formData.get('content'),
        category_id: parseInt(formData.get('category_id')),
        author_id: parseInt(formData.get('author_id')),
        is_featured: parseInt(formData.get('is_featured')),
        featured_image_url: formData.get('featured_image_url') || null,
        youtube_embed_id: formData.get('youtube_embed_id') || null
    };
    
    try {
        await axios.put(`${API_BASE}/articles/${articleId}`, articleData);
        closeModal();
        await loadArticles();
        showSuccessMessage('기사가 성공적으로 수정되었습니다.');
    } catch (error) {
        console.error('Failed to update article:', error);
        showErrorMessage('기사 수정에 실패했습니다.');
    }
}

async function deleteArticle(articleId) {
    if (!confirm('정말로 이 기사를 삭제하시겠습니까?')) return;
    
    try {
        await axios.delete(`${API_BASE}/articles/${articleId}`);
        await loadArticles();
        showSuccessMessage('기사가 성공적으로 삭제되었습니다.');
    } catch (error) {
        console.error('Failed to delete article:', error);
        showErrorMessage('기사 삭제에 실패했습니다.');
    }
}

// Users management
async function loadUsers() {
    try {
        const response = await axios.get(`${API_BASE}/users`);
        currentUsers = response.data.users || [];
        renderUsersTable();
    } catch (error) {
        console.error('Failed to load users:', error);
        showErrorMessage('사용자 목록을 불러오는데 실패했습니다.');
    }
}

function renderUsersTable() {
    // Users table이 있으면 렌더링, 없으면 생성
    const usersSection = document.getElementById('usersSection');
    if (!usersSection) {
        // Create users section if it doesn't exist
        const sectionsContainer = document.querySelector('.p-8');
        const usersHtml = `
            <div id="usersSection" class="hidden">
                <div class="bg-white rounded-lg shadow">
                    <div class="px-6 py-4 border-b flex justify-between items-center">
                        <h3 class="text-lg font-semibold">사용자 관리</h3>
                        <button onclick="showNewUserForm()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                            <i class="fas fa-plus mr-2"></i> 새 사용자
                        </button>
                    </div>
                    <div class="p-6">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b">
                                        <th class="text-left py-2">ID</th>
                                        <th class="text-left py-2">이메일</th>
                                        <th class="text-left py-2">닉네임</th>
                                        <th class="text-left py-2">권한</th>
                                        <th class="text-left py-2">가입일</th>
                                        <th class="text-left py-2">관리</th>
                                    </tr>
                                </thead>
                                <tbody id="usersTableBody">
                                    <!-- Users will be loaded here -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
        sectionsContainer.insertAdjacentHTML('beforeend', usersHtml);
    }
    
    const tableBody = document.getElementById('usersTableBody');
    if (!tableBody) return;
    
    if (currentUsers.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4">등록된 사용자가 없습니다.</td></tr>';
        return;
    }
    
    tableBody.innerHTML = currentUsers.map(user => `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-2">${user.user_id}</td>
            <td class="py-3 px-2">${user.email || '-'}</td>
            <td class="py-3 px-2">${user.nickname || '-'}</td>
            <td class="py-3 px-2">
                <span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    사용자
                </span>
            </td>
            <td class="py-3 px-2">${new Date(user.created_at).toLocaleDateString('ko-KR')}</td>
            <td class="py-3 px-2">
                <div class="flex space-x-2">
                    <button onclick="editUser(${user.user_id})" class="text-blue-600 hover:text-blue-900 text-sm">
                        <i class="fas fa-edit"></i> 수정
                    </button>
                    <button onclick="deleteUser(${user.user_id})" class="text-red-600 hover:text-red-900 text-sm">
                        <i class="fas fa-trash"></i> 삭제
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function showNewUserForm() {
    showModal('새 사용자 추가', `
        <form id="userForm" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                <input type="email" name="email" required class="w-full border rounded px-3 py-2">
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">닉네임</label>
                <input type="text" name="nickname" required class="w-full border rounded px-3 py-2">
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">비밀번호</label>
                <input type="password" name="password" required class="w-full border rounded px-3 py-2">
            </div>
        </form>
    `, 'submitUser');
}

function showEditUserForm(user) {
    showModal('사용자 수정', `
        <form id="userForm" class="space-y-4">
            <input type="hidden" name="user_id" value="${user.user_id}">
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">이메일</label>
                <input type="email" name="email" value="${user.email || ''}" required class="w-full border rounded px-3 py-2">
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">닉네임</label>
                <input type="text" name="nickname" value="${user.nickname || ''}" required class="w-full border rounded px-3 py-2">
            </div>
        </form>
    `, 'submitUser');
}

async function submitUser() {
    try {
        const form = document.getElementById('userForm');
        const formData = new FormData(form);
        const userData = Object.fromEntries(formData);
        
        if (userData.user_id) {
            // Update existing user
            const userId = userData.user_id;
            delete userData.user_id;
            await axios.put(`${API_BASE}/users/${userId}`, userData);
            showSuccessMessage('사용자가 성공적으로 수정되었습니다.');
        } else {
            // Create new user
            await axios.post(`${API_BASE}/users`, userData);
            showSuccessMessage('사용자가 성공적으로 추가되었습니다.');
        }
        
        closeModal();
        loadUsers();
    } catch (error) {
        console.error('Failed to submit user:', error);
        const message = error.response?.data?.error || '사용자 저장에 실패했습니다.';
        showErrorMessage(message);
    }
}

async function editUser(userId) {
    const user = currentUsers.find(u => u.user_id === userId);
    if (user) {
        showEditUserForm(user);
    }
}

async function deleteUser(userId) {
    if (confirm('이 사용자를 삭제하시겠습니까?\n작성한 기사가 있을 경우 삭제할 수 없습니다.')) {
        try {
            await axios.delete(`${API_BASE}/users/${userId}`);
            showSuccessMessage('사용자가 삭제되었습니다.');
            loadUsers();
        } catch (error) {
            console.error('Failed to delete user:', error);
            const message = error.response?.data?.error || '사용자 삭제에 실패했습니다.';
            showErrorMessage(message);
        }
    }
}

// Banner management
async function loadBanners() {
    try {
        const response = await axios.get(`${API_BASE}/banners`);
        const banners = response.data.banners || [];
        renderBannersTable(banners);
    } catch (error) {
        console.error('Failed to load banners:', error);
        showErrorMessage('배너를 불러오는데 실패했습니다.');
    }
}

function renderBannersTable(banners) {
    let bannersSection = document.getElementById('bannersSection');
    
    if (!bannersSection) {
        const sectionsContainer = document.querySelector('.flex-1.overflow-y-auto');
        const bannersHtml = `
            <div id="bannersSection" class="p-8 hidden">
                <div class="bg-white rounded-lg shadow">
                    <div class="px-6 py-4 border-b flex justify-between items-center">
                        <h3 class="text-lg font-semibold">배너 관리</h3>
                        <button onclick="showNewBannerForm()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                            <i class="fas fa-plus mr-2"></i> 새 배너 추가
                        </button>
                    </div>
                    <div class="p-6">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b">
                                        <th class="text-left py-2">순서</th>
                                        <th class="text-left py-2">미리보기</th>
                                        <th class="text-left py-2">제목</th>
                                        <th class="text-left py-2">타입</th>
                                        <th class="text-left py-2">상태</th>
                                        <th class="text-left py-2">관리</th>
                                    </tr>
                                </thead>
                                <tbody id="bannersTableBody">
                                    <!-- Banners will be loaded here -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
        sectionsContainer.insertAdjacentHTML('beforeend', bannersHtml);
        bannersSection = document.getElementById('bannersSection');
    }

    const tableBody = document.getElementById('bannersTableBody');
    if (!tableBody) return;
    
    if (banners.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4">등록된 배너가 없습니다.</td></tr>';
        return;
    }
    
    tableBody.innerHTML = banners.map(banner => `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-2">${banner.display_order}</td>
            <td class="py-3 px-2">
                ${banner.type === 'youtube' ? 
                    `<div class="w-20 h-12 bg-red-100 rounded flex items-center justify-center">
                        <i class="fab fa-youtube text-red-600 text-xl"></i>
                    </div>` :
                    `<div class="w-20 h-12 bg-gray-200 rounded flex items-center justify-center">
                        <i class="fas fa-image text-gray-500"></i>
                    </div>`
                }
            </td>
            <td class="py-3 px-2">
                <div class="max-w-xs">
                    <p class="font-medium text-gray-900 truncate">${banner.title}</p>
                    <p class="text-sm text-gray-500">${banner.subtitle || ''}</p>
                </div>
            </td>
            <td class="py-3 px-2">
                <span class="inline-block px-2 py-1 rounded-full text-xs ${
                    banner.type === 'youtube' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                }">
                    ${banner.type === 'youtube' ? '유튜브' : '이미지'}
                </span>
            </td>
            <td class="py-3 px-2">
                <span class="inline-block px-2 py-1 rounded-full text-xs ${
                    banner.is_active ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }">
                    ${banner.is_active ? '활성' : '비활성'}
                </span>
            </td>
            <td class="py-3 px-2">
                <div class="flex space-x-2">
                    <button onclick="editBanner(${banner.id})" class="text-blue-600 hover:text-blue-900 text-sm">
                        <i class="fas fa-edit"></i> 수정
                    </button>
                    <button onclick="deleteBanner(${banner.id})" class="text-red-600 hover:text-red-900 text-sm">
                        <i class="fas fa-trash"></i> 삭제
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function showNewBannerForm() {
    showModal('새 배너 추가', `
        <form id="bannerForm" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">배너 타입</label>
                <select name="type" class="w-full border rounded px-3 py-2" onchange="toggleBannerFields(this.value)">
                    <option value="image">이미지</option>
                    <option value="youtube">유튜브 영상</option>
                </select>
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">제목</label>
                <input type="text" name="title" required class="w-full border rounded px-3 py-2">
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">부제목</label>
                <input type="text" name="subtitle" class="w-full border rounded px-3 py-2">
            </div>
            
            <div id="imageFields">
                <label class="block text-sm font-medium text-gray-700 mb-2">이미지 URL</label>
                <input type="url" name="src" class="w-full border rounded px-3 py-2">
                <label class="block text-sm font-medium text-gray-700 mb-2 mt-4">링크 URL</label>
                <input type="url" name="link" class="w-full border rounded px-3 py-2">
            </div>
            
            <div id="youtubeFields" style="display: none;">
                <label class="block text-sm font-medium text-gray-700 mb-2">유튜브 영상 ID</label>
                <input type="text" name="videoId" class="w-full border rounded px-3 py-2">
                <label class="block text-sm font-medium text-gray-700 mb-2 mt-4">썸네일 URL</label>
                <input type="url" name="thumbnail" class="w-full border rounded px-3 py-2">
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">표시 순서</label>
                <input type="number" name="display_order" min="1" required class="w-full border rounded px-3 py-2">
            </div>
            
            <div class="flex items-center">
                <input type="checkbox" name="is_active" checked class="mr-2">
                <label class="text-sm font-medium text-gray-700">활성 상태</label>
            </div>
        </form>
    `, 'submitBanner');
}

function toggleBannerFields(type) {
    const imageFields = document.getElementById('imageFields');
    const youtubeFields = document.getElementById('youtubeFields');
    
    if (type === 'youtube') {
        imageFields.style.display = 'none';
        youtubeFields.style.display = 'block';
    } else {
        imageFields.style.display = 'block';
        youtubeFields.style.display = 'none';
    }
}

async function submitBanner() {
    try {
        const form = document.getElementById('bannerForm');
        const formData = new FormData(form);
        const bannerData = Object.fromEntries(formData);
        
        // Convert checkbox to boolean
        bannerData.is_active = formData.has('is_active');
        bannerData.display_order = parseInt(bannerData.display_order);
        
        await axios.post(`${API_BASE}/banners`, bannerData);
        closeModal();
        showSuccessMessage('배너가 성공적으로 추가되었습니다.');
        loadBanners();
    } catch (error) {
        console.error('Failed to create banner:', error);
        showErrorMessage('배너 추가에 실패했습니다.');
    }
}

async function deleteBanner(bannerId) {
    if (confirm('이 배너를 삭제하시겠습니까?')) {
        try {
            await axios.delete(`${API_BASE}/banners/${bannerId}`);
            showSuccessMessage('배너가 삭제되었습니다.');
            loadBanners();
        } catch (error) {
            console.error('Failed to delete banner:', error);
            showErrorMessage('배너 삭제에 실패했습니다.');
        }
    }
}

// Categories management
async function loadCategories() {
    try {
        const response = await axios.get(`${API_BASE}/categories`);
        const categories = response.data.categories || [];
        renderCategoriesTable(categories);
    } catch (error) {
        console.error('Failed to load categories:', error);
        showErrorMessage('카테고리를 불러오는데 실패했습니다.');
    }
}

function renderCategoriesTable(categories) {
    let categoriesSection = document.getElementById('categoriesSection');
    
    if (!categoriesSection) {
        const sectionsContainer = document.querySelector('.flex-1.overflow-y-auto');
        const categoriesHtml = `
            <div id="categoriesSection" class="p-8 hidden">
                <div class="bg-white rounded-lg shadow">
                    <div class="px-6 py-4 border-b flex justify-between items-center">
                        <h3 class="text-lg font-semibold">카테고리 관리</h3>
                        <button onclick="showNewCategoryForm()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                            <i class="fas fa-plus mr-2"></i> 새 카테고리 추가
                        </button>
                    </div>
                    <div class="p-6">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead>
                                    <tr class="border-b">
                                        <th class="text-left py-2">ID</th>
                                        <th class="text-left py-2">이름</th>
                                        <th class="text-left py-2">Slug</th>
                                        <th class="text-left py-2">상위 카테고리</th>
                                        <th class="text-left py-2">생성일</th>
                                        <th class="text-left py-2">관리</th>
                                    </tr>
                                </thead>
                                <tbody id="categoriesTableBody">
                                    <!-- Categories will be loaded here -->
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        `;
        sectionsContainer.insertAdjacentHTML('beforeend', categoriesHtml);
        categoriesSection = document.getElementById('categoriesSection');
    }

    const tableBody = document.getElementById('categoriesTableBody');
    if (!tableBody) return;
    
    if (categories.length === 0) {
        tableBody.innerHTML = '<tr><td colspan="6" class="text-center py-4">등록된 카테고리가 없습니다.</td></tr>';
        return;
    }
    
    tableBody.innerHTML = categories.map(category => `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-2">${category.category_id}</td>
            <td class="py-3 px-2">
                <span class="font-medium text-gray-900">${category.name}</span>
            </td>
            <td class="py-3 px-2">
                <code class="text-sm bg-gray-100 px-2 py-1 rounded">${category.slug}</code>
            </td>
            <td class="py-3 px-2">
                ${category.parent_category ? 
                    `<span class="inline-block px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">${category.parent_category}</span>` : 
                    '<span class="text-gray-400">-</span>'
                }
            </td>
            <td class="py-3 px-2">${new Date(category.created_at).toLocaleDateString('ko-KR')}</td>
            <td class="py-3 px-2">
                <div class="flex space-x-2">
                    <button onclick="editCategory(${category.category_id})" class="text-blue-600 hover:text-blue-900 text-sm">
                        <i class="fas fa-edit"></i> 수정
                    </button>
                    <button onclick="deleteCategory(${category.category_id})" class="text-red-600 hover:text-red-900 text-sm">
                        <i class="fas fa-trash"></i> 삭제
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

function showNewCategoryForm() {
    showModal('새 카테고리 추가', `
        <form id="categoryForm" class="space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">카테고리 이름</label>
                <input type="text" name="name" required class="w-full border rounded px-3 py-2">
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Slug (URL 주소)</label>
                <input type="text" name="slug" required class="w-full border rounded px-3 py-2" placeholder="category-slug">
                <small class="text-gray-500">URL에 사용될 고유 식별자 (영문, 숫자, 하이픈 사용)</small>
            </div>
            
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">상위 카테고리</label>
                <select name="parent_category" class="w-full border rounded px-3 py-2">
                    <option value="">최상위 카테고리</option>
                    <option value="press">신문사</option>
                    <option value="broadcast">방송국</option>
                    <option value="campus">캠퍼스 라이프</option>
                    <option value="special">기획보도</option>
                    <option value="shorts">쇼츠</option>
                    <option value="jeju">제주 소식</option>
                    <option value="opinion">오피니언</option>
                    <option value="essay">수필</option>
                </select>
            </div>
        </form>
    `, 'submitCategory');
}

async function submitCategory() {
    try {
        const form = document.getElementById('categoryForm');
        const formData = new FormData(form);
        const categoryData = Object.fromEntries(formData);
        
        await axios.post(`${API_BASE}/categories`, categoryData);
        closeModal();
        showSuccessMessage('카테고리가 성공적으로 추가되었습니다.');
        loadCategories();
    } catch (error) {
        console.error('Failed to create category:', error);
        showErrorMessage('카테고리 추가에 실패했습니다.');
    }
}

async function deleteCategory(categoryId) {
    if (confirm('이 카테고리를 삭제하시겠습니까?\n하위 카테고리나 관련 기사가 있을 경우 문제가 발생할 수 있습니다.')) {
        try {
            await axios.delete(`${API_BASE}/categories/${categoryId}`);
            showSuccessMessage('카테고리가 삭제되었습니다.');
            loadCategories();
        } catch (error) {
            console.error('Failed to delete category:', error);
            showErrorMessage('카테고리 삭제에 실패했습니다.');
        }
    }
}

// Broadcast content management
async function loadBroadcastContent() {
    const broadcastSection = document.getElementById('broadcastSection');
    if (!broadcastSection) {
        createBroadcastSection();
    }
    
    try {
        const response = await axios.get(`${API_BASE}/articles?category=broadcast`);
        const broadcastArticles = response.data.articles || [];
        renderBroadcastTable(broadcastArticles);
    } catch (error) {
        console.error('Failed to load broadcast content:', error);
    }
}

function createBroadcastSection() {
    const sectionsContainer = document.querySelector('.p-8');
    const broadcastHtml = `
        <div id="broadcastSection" class="hidden">
            <div class="bg-white rounded-lg shadow">
                <div class="px-6 py-4 border-b flex justify-between items-center">
                    <h3 class="text-lg font-semibold">방송 콘텐츠 관리</h3>
                    <button onclick="showNewBroadcastForm()" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
                        <i class="fas fa-plus mr-2"></i> 새 방송 콘텐츠
                    </button>
                </div>
                <div class="p-6">
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead>
                                <tr class="border-b">
                                    <th class="text-left py-2">제목</th>
                                    <th class="text-left py-2">카테고리</th>
                                    <th class="text-left py-2">미디어</th>
                                    <th class="text-left py-2">조회수</th>
                                    <th class="text-left py-2">작성일</th>
                                    <th class="text-left py-2">관리</th>
                                </tr>
                            </thead>
                            <tbody id="broadcastTableBody">
                                <!-- Broadcast content will be loaded here -->
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    `;
    sectionsContainer.insertAdjacentHTML('beforeend', broadcastHtml);
}

function renderBroadcastTable(articles) {
    const tableBody = document.getElementById('broadcastTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = articles.map(article => `
        <tr class="border-b hover:bg-gray-50">
            <td class="py-3 px-2">
                <div class="max-w-xs">
                    <p class="font-medium text-gray-900 truncate">${article.title}</p>
                </div>
            </td>
            <td class="py-3 px-2">${article.category_name}</td>
            <td class="py-3 px-2">
                ${article.youtube_embed_id ? '<i class="fab fa-youtube text-red-600"></i> 영상' : 
                  article.featured_image_url ? '<i class="fas fa-image text-blue-600"></i> 이미지' : 
                  '<i class="fas fa-file-text text-gray-600"></i> 텍스트'}
            </td>
            <td class="py-3 px-2">${article.view_count}</td>
            <td class="py-3 px-2">${new Date(article.created_at).toLocaleDateString('ko-KR')}</td>
            <td class="py-3 px-2">
                <div class="flex space-x-2">
                    <button onclick="editArticle(${article.article_id})" class="text-blue-600 hover:text-blue-900 text-sm">
                        <i class="fas fa-edit"></i> 수정
                    </button>
                    <button onclick="deleteArticle(${article.article_id})" class="text-red-600 hover:text-red-900 text-sm">
                        <i class="fas fa-trash"></i> 삭제
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Load functions for other sections (placeholder implementations)
function loadShortsContent() {
    showInfoMessage('쇼츠 관리 기능이 구현 중입니다.');
}

function loadCalendar() {
    showInfoMessage('학사일정 관리 기능이 구현 중입니다.');
}

function loadComments() {
    showInfoMessage('댓글 관리 기능이 구현 중입니다.');
}

function loadSettings() {
    showInfoMessage('사이트 설정 기능이 구현 중입니다.');
}

// Utility functions
function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        modal.remove();
    }
}

function showSuccessMessage(message) {
    showMessage(message, 'success');
}

function showErrorMessage(message) {
    showMessage(message, 'error');
}

function showInfoMessage(message) {
    showMessage(message, 'info');
}

function showMessage(message, type = 'info') {
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    };
    
    const messageHtml = `
        <div class="fixed top-4 right-4 ${colors[type]} text-white px-6 py-3 rounded-lg shadow-lg z-50">
            <div class="flex items-center">
                <span>${message}</span>
                <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', messageHtml);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        const messageEl = document.querySelector('.fixed.top-4.right-4');
        if (messageEl) messageEl.remove();
    }, 5000);
}

function logout() {
    if (confirm('로그아웃하시겠습니까?')) {
        localStorage.removeItem('authToken');
        window.location.href = '/';
    }
}

// Charts initialization
function initCharts() {
    // Visitors Chart
    const visitorsCtx = document.getElementById('visitorsChart');
    if (visitorsCtx) {
        new Chart(visitorsCtx, {
            type: 'line',
            data: {
                labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
                datasets: [{
                    label: '방문자 수',
                    data: [1200, 1900, 3000, 5000, 2000, 3000],
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
        new Chart(categoriesCtx, {
            type: 'doughnut',
            data: {
                labels: ['캠퍼스', '방송', '신문', '쇼츠', '기획'],
                datasets: [{
                    data: [30, 25, 20, 15, 10],
                    backgroundColor: [
                        '#ef4444',
                        '#3b82f6',
                        '#10b981',
                        '#f59e0b',
                        '#8b5cf6'
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