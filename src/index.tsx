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
import pagesBroadcastRouter from './routes/pages-broadcast';
import subCategoriesRouter from './routes/subcategories';
// import adminApiRouter from './routes/admin-api';
import { HeaderComponent } from './components/header';
import { Footer } from './components/footer';
import type { CloudflareBindings } from './types';

const app = new Hono<{ Bindings: CloudflareBindings }>();

// Middleware
app.use('*', logger());
app.use('/api/*', cors());
// Apply auth middleware to specific routes only
app.use('/api/articles/*', authMiddleware);
app.use('/api/categories/*', authMiddleware);
app.use('/api/comments/*', authMiddleware);
app.use('/api/calendar/*', authMiddleware);
// admin-api routes don't need auth middleware
app.use('/api/admin-api/*', (c, next) => next());

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }));

// API Routes
app.route('/api/auth', authRouter);
app.route('/api/articles', articlesRouter);
app.route('/api/categories', categoriesRouter);
app.route('/api/comments', commentsRouter);
app.route('/api/calendar', calendarRouter);
// app.route('/api/admin-api', adminApiRouter);

// Temporary admin API routes for testing
app.get('/api/admin-api/test', (c) => {
  return c.json({ message: 'Admin API is working!' });
});

app.get('/api/admin-api/dashboard-stats', (c) => {
  // Simplified static response for now
  return c.json({
    totalArticles: 24,
    totalUsers: 5,
    totalComments: 0,
    todayVisitors: 1234
  });
});

app.get('/api/admin-api/articles', async (c) => {
  try {
    const db = c.env.DB;
    const { results } = await db.prepare(`
      SELECT 
        a.article_id,
        a.title,
        a.slug,
        a.content,
        a.created_at,
        a.updated_at,
        c.name as category_name,
        u.nickname as author_name
      FROM articles a
      LEFT JOIN categories c ON a.category_id = c.category_id
      LEFT JOIN users u ON a.author_id = u.user_id
      ORDER BY a.created_at DESC
    `).all();
    
    return c.json({ articles: results || [] });
  } catch (error) {
    return c.json({ error: 'Database error', details: error.message }, 500);
  }
});

app.get('/api/admin-api/users', async (c) => {
  try {
    const db = c.env.DB;
    const { results } = await db.prepare(`
      SELECT 
        user_id,
        email,
        nickname,
        created_at
      FROM users 
      ORDER BY created_at DESC
    `).all();
    
    return c.json({ users: results || [] });
  } catch (error) {
    return c.json({ error: 'Database error', details: error.message }, 500);
  }
});

// Banners management API (for demo - using static data)
app.get('/api/admin-api/banners', (c) => {
  const banners = [
    {
      id: 1,
      type: 'image',
      src: '/static/images/banners/banner1.jpg',
      title: '캘리포니아 폴리테크닉 주립대학교 방문',
      subtitle: '국제 교류 협력 강화',
      link: '/article/california-polytechnic-visit',
      is_active: true,
      display_order: 1
    },
    {
      id: 2,
      type: 'image',
      src: '/static/images/banners/banner2.jpg',
      title: '제주한라대학교 메인 캠퍼스',
      subtitle: '빛나는 제주의 교육 중심지',
      link: '/campus',
      is_active: true,
      display_order: 2
    },
    {
      id: 3,
      type: 'image',
      src: '/static/images/banners/banner3.jpg',
      title: '2022 청춘대홍제',
      subtitle: '빛나는 청춘의 축제',
      link: '/article/2022-youth-festival',
      is_active: true,
      display_order: 3
    },
    {
      id: 4,
      type: 'image',
      src: '/static/images/banners/banner4.jpg',
      title: 'CAPSTONE DESIGN 경진대회 2022',
      subtitle: 'LINC 3.0 사업 성과 발표',
      link: '/article/capstone-design-2022',
      is_active: true,
      display_order: 4
    },
    {
      id: 5,
      type: 'youtube',
      videoId: 'dQw4w9WgXcQ',
      title: '2025학년도 신입생 환영 영상',
      subtitle: '제주한라대학교의 새로운 시작',
      thumbnail: '/static/images/banners/banner1.jpg',
      is_active: true,
      display_order: 5
    }
  ];
  
  return c.json({ banners });
});

app.post('/api/admin-api/banners', async (c) => {
  try {
    const body = await c.req.json();
    // In real implementation, this would save to database
    // For demo, we'll just return success with the data
    return c.json({ 
      message: 'Banner created successfully',
      banner: { id: Date.now(), ...body }
    });
  } catch (error) {
    return c.json({ error: 'Failed to create banner', details: error.message }, 500);
  }
});

app.put('/api/admin-api/banners/:id', async (c) => {
  try {
    const bannerId = c.req.param('id');
    const body = await c.req.json();
    // In real implementation, this would update database
    return c.json({ 
      message: 'Banner updated successfully',
      banner: { id: parseInt(bannerId), ...body }
    });
  } catch (error) {
    return c.json({ error: 'Failed to update banner', details: error.message }, 500);
  }
});

app.delete('/api/admin-api/banners/:id', async (c) => {
  try {
    const bannerId = c.req.param('id');
    // In real implementation, this would delete from database
    return c.json({ message: 'Banner deleted successfully' });
  } catch (error) {
    return c.json({ error: 'Failed to delete banner', details: error.message }, 500);
  }
});

// Categories management API
app.get('/api/admin-api/categories', async (c) => {
  try {
    const db = c.env.DB;
    const { results } = await db.prepare(`
      SELECT 
        category_id,
        name,
        slug,
        parent_category,
        created_at
      FROM categories 
      ORDER BY name
    `).all();
    
    return c.json({ categories: results || [] });
  } catch (error) {
    return c.json({ error: 'Database error', details: error.message }, 500);
  }
});

app.post('/api/admin-api/categories', async (c) => {
  try {
    const body = await c.req.json();
    const { name, slug, parent_category } = body;
    
    if (!name || !slug) {
      return c.json({ error: 'Name and slug are required' }, 400);
    }
    
    const db = c.env.DB;
    const result = await db.prepare(`
      INSERT INTO categories (name, slug, parent_category, created_at)
      VALUES (?, ?, ?, datetime('now'))
    `).bind(name, slug, parent_category || null).run();
    
    return c.json({ 
      message: 'Category created successfully',
      category_id: result.meta.last_row_id 
    }, 201);
    
  } catch (error) {
    return c.json({ error: 'Failed to create category', details: error.message }, 500);
  }
});

app.delete('/api/admin-api/categories/:id', async (c) => {
  try {
    const categoryId = c.req.param('id');
    const db = c.env.DB;
    
    // Check if category has associated articles
    const articlesCount = await db.prepare('SELECT COUNT(*) as count FROM articles WHERE category_id = ?')
      .bind(categoryId).first();
    
    if (articlesCount && articlesCount.count > 0) {
      return c.json({ error: '이 카테고리에는 연결된 기사가 있어 삭제할 수 없습니다.' }, 400);
    }
    
    await db.prepare('DELETE FROM categories WHERE category_id = ?')
      .bind(categoryId).run();
    
    return c.json({ message: 'Category deleted successfully' });
    
  } catch (error) {
    return c.json({ error: 'Failed to delete category', details: error.message }, 500);
  }
});

// Users management CRUD  
app.post('/api/admin-api/users', async (c) => {
  try {
    const body = await c.req.json();
    const { email, nickname, password } = body;
    
    if (!email || !nickname || !password) {
      return c.json({ error: 'Email, nickname and password are required' }, 400);
    }
    
    const db = c.env.DB;
    
    // Check if email already exists
    const existingUser = await db.prepare('SELECT user_id FROM users WHERE email = ?')
      .bind(email).first();
    
    if (existingUser) {
      return c.json({ error: '이미 존재하는 이메일입니다.' }, 400);
    }
    
    // For demo purposes, we'll store plain password (in production, hash it)
    const result = await db.prepare(`
      INSERT INTO users (email, nickname, password, created_at)
      VALUES (?, ?, ?, datetime('now'))
    `).bind(email, nickname, password).run();
    
    return c.json({ 
      message: 'User created successfully',
      user_id: result.meta.last_row_id 
    }, 201);
    
  } catch (error) {
    return c.json({ error: 'Failed to create user', details: error.message }, 500);
  }
});

app.put('/api/admin-api/users/:id', async (c) => {
  try {
    const userId = c.req.param('id');
    const body = await c.req.json();
    const { email, nickname } = body;
    
    const db = c.env.DB;
    
    await db.prepare(`
      UPDATE users 
      SET email = ?, nickname = ?
      WHERE user_id = ?
    `).bind(email, nickname, userId).run();
    
    return c.json({ message: 'User updated successfully' });
    
  } catch (error) {
    return c.json({ error: 'Failed to update user', details: error.message }, 500);
  }
});

app.delete('/api/admin-api/users/:id', async (c) => {
  try {
    const userId = c.req.param('id');
    const db = c.env.DB;
    
    // Check if user has associated articles
    const articlesCount = await db.prepare('SELECT COUNT(*) as count FROM articles WHERE author_id = ?')
      .bind(userId).first();
    
    if (articlesCount && articlesCount.count > 0) {
      return c.json({ error: '이 사용자가 작성한 기사가 있어 삭제할 수 없습니다.' }, 400);
    }
    
    await db.prepare('DELETE FROM users WHERE user_id = ?')
      .bind(userId).run();
    
    return c.json({ message: 'User deleted successfully' });
    
  } catch (error) {
    return c.json({ error: 'Failed to delete user', details: error.message }, 500);
  }
});

// Image upload API
app.post('/api/admin-api/upload-image', async (c) => {
  try {
    const formData = await c.req.formData();
    const file = formData.get('image') as File;
    
    if (!file) {
      return c.json({ error: 'No image file provided' }, 400);
    }
    
    // Check file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
    if (!allowedTypes.includes(file.type)) {
      return c.json({ error: 'Invalid file type. Only JPEG, PNG, GIF, and WebP are allowed.' }, 400);
    }
    
    // Check file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return c.json({ error: 'File size too large. Maximum 5MB allowed.' }, 400);
    }
    
    // Generate unique filename
    const timestamp = Date.now();
    const randomStr = Math.random().toString(36).substring(2);
    const extension = file.name.split('.').pop() || 'jpg';
    const filename = `upload_${timestamp}_${randomStr}.${extension}`;
    
    // For demo purposes, we'll simulate successful upload and return a placeholder URL
    // In production, you would upload to Cloudflare Images or R2
    const imageUrl = `https://via.placeholder.com/800x600/4F46E5/ffffff?text=${encodeURIComponent(filename)}`;
    
    return c.json({ 
      success: true,
      imageUrl: imageUrl,
      filename: filename,
      size: file.size,
      type: file.type
    });
    
  } catch (error) {
    console.error('Image upload error:', error);
    return c.json({ error: 'Failed to upload image', details: error.message }, 500);
  }
});

// Page Routes
app.route('/', pagesRouter);
app.route('/', broadcastRouter);
app.route('/', pagesBroadcastRouter);
// app.route('/', subCategoriesRouter); // Temporarily disabled due to error

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
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <link href="/static/styles.css" rel="stylesheet">
        <style>
            body {
                font-family: 'Noto Sans KR', sans-serif;
            }
        </style>
    </head>
    <body class="min-h-screen bg-white text-gray-900">
        <div id="app">
            ${HeaderComponent()}

            <!-- Hero Section - Bold Modern Style -->
            <section class="relative bg-white overflow-hidden border-b border-gray-200">
                <!-- Slider Container -->
                <div id="heroSlider" class="relative h-[70vh] lg:h-[80vh]">
                    <!-- Slides Container -->
                    <div id="slidesContainer" class="relative h-full">
                        <!-- Slides will be dynamically loaded here -->
                    </div>
                    
                    <!-- Navigation Arrows -->
                    <button id="prevSlide" class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-900 shadow-lg rounded-full w-12 h-12 flex items-center justify-center transition-all z-20">
                        <i class="fas fa-chevron-left text-xl"></i>
                    </button>
                    <button id="nextSlide" class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white/90 text-gray-900 shadow-lg rounded-full w-12 h-12 flex items-center justify-center transition-all z-20">
                        <i class="fas fa-chevron-right text-xl"></i>
                    </button>
                    
                    <!-- Slide Indicators -->
                    <div id="slideIndicators" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                        <!-- Indicators will be dynamically added -->
                    </div>
                </div>
            </section>
            
            <!-- Slider Script -->
            <script>
                // Banner configuration - can be managed by admin later
                const bannerData = [
                    {
                        type: 'image',
                        src: '/static/images/banners/banner1.jpg',
                        title: '캘리포니아 폴리테크닉 주립대학교 방문',
                        subtitle: '국제 교류 협력 강화',
                        link: '/article/california-polytechnic-visit'
                    },
                    {
                        type: 'image',
                        src: '/static/images/banners/banner2.jpg',
                        title: '제주한라대학교 메인 캠퍼스',
                        subtitle: '빛나는 제주의 교육 중심지',
                        link: '/campus'
                    },
                    {
                        type: 'image',
                        src: '/static/images/banners/banner3.jpg',
                        title: '2022 청춘대홍제',
                        subtitle: '빛나는 청춘의 축제',
                        link: '/article/2022-youth-festival'
                    },
                    {
                        type: 'image',
                        src: '/static/images/banners/banner4.jpg',
                        title: 'CAPSTONE DESIGN 경진대회 2022',
                        subtitle: 'LINC 3.0 사업 성과 발표',
                        link: '/article/capstone-design-2022'
                    },
                    {
                        type: 'image',
                        src: '/static/images/banners/banner5.jpg',
                        title: 'JOY현장대 우수기업 방문',
                        subtitle: '산학협력 프로그램',
                        link: '/article/joy-company-visit'
                    },
                    {
                        type: 'youtube',
                        videoId: 'dQw4w9WgXcQ', // 예시 YouTube ID
                        title: '2025학년도 신입생 환영 영상',
                        subtitle: '제주한라대학교의 새로운 시작',
                        thumbnail: '/static/images/banners/banner1.jpg' // YouTube 썸네일 대체
                    }
                ];
                
                let currentSlide = 0;
                let slideInterval;
                
                // Initialize slider
                function initSlider() {
                    const container = document.getElementById('slidesContainer');
                    const indicators = document.getElementById('slideIndicators');
                    
                    // Create slides
                    container.innerHTML = bannerData.map((banner, index) => {
                        if (banner.type === 'youtube') {
                            return \`
                                <div class="slide absolute inset-0 transition-opacity duration-700 \${index === 0 ? 'opacity-100' : 'opacity-0'}" data-index="\${index}">
                                    <div class="relative h-full">
                                        <img src="\${banner.thumbnail}" alt="\${banner.title}" class="w-full h-full object-cover transition-all duration-500 hover-color-image">
                                        <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                                            <button onclick="playYouTubeVideo('\${banner.videoId}')" class="bg-red-600 hover:bg-red-700 text-white rounded-full w-20 h-20 flex items-center justify-center transition-all transform hover:scale-110">
                                                <i class="fas fa-play text-3xl ml-1"></i>
                                            </button>
                                        </div>
                                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-2">\${banner.title}</h2>
                                            <p class="text-lg text-gray-200">\${banner.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            \`;
                        } else {
                            return \`
                                <div class="slide absolute inset-0 transition-opacity duration-700 \${index === 0 ? 'opacity-100' : 'opacity-0'}" data-index="\${index}">
                                    <a href="\${banner.link || '#'}" class="block relative h-full">
                                        <img src="\${banner.src}" alt="\${banner.title}" class="w-full h-full object-cover transition-all duration-500 hover-color-image">
                                        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-2">\${banner.title}</h2>
                                            <p class="text-lg text-gray-200">\${banner.subtitle}</p>
                                        </div>
                                    </a>
                                </div>
                            \`;
                        }
                    }).join('');
                    
                    // Create indicators
                    indicators.innerHTML = bannerData.map((_, index) => \`
                        <button class="indicator w-3 h-3 rounded-full transition-all \${index === 0 ? 'bg-white w-8' : 'bg-white/50'}" data-index="\${index}" onclick="goToSlide(\${index})"></button>
                    \`).join('');
                    
                    // Start auto-play
                    startAutoPlay();
                }
                
                // Go to specific slide
                function goToSlide(index) {
                    const slides = document.querySelectorAll('.slide');
                    const indicators = document.querySelectorAll('.indicator');
                    
                    // Hide current slide
                    slides[currentSlide].classList.remove('opacity-100');
                    slides[currentSlide].classList.add('opacity-0');
                    indicators[currentSlide].classList.remove('bg-white', 'w-8');
                    indicators[currentSlide].classList.add('bg-white/50');
                    
                    // Show new slide
                    currentSlide = index;
                    slides[currentSlide].classList.remove('opacity-0');
                    slides[currentSlide].classList.add('opacity-100');
                    indicators[currentSlide].classList.remove('bg-white/50');
                    indicators[currentSlide].classList.add('bg-white', 'w-8');
                }
                
                // Next slide
                function nextSlideFunc() {
                    const nextIndex = (currentSlide + 1) % bannerData.length;
                    goToSlide(nextIndex);
                }
                
                // Previous slide
                function prevSlideFunc() {
                    const prevIndex = (currentSlide - 1 + bannerData.length) % bannerData.length;
                    goToSlide(prevIndex);
                }
                
                // Auto-play
                function startAutoPlay() {
                    stopAutoPlay();
                    slideInterval = setInterval(nextSlideFunc, 5000); // Change slide every 5 seconds
                }
                
                function stopAutoPlay() {
                    if (slideInterval) {
                        clearInterval(slideInterval);
                    }
                }
                
                // Play YouTube video in modal
                function playYouTubeVideo(videoId) {
                    // Create modal
                    const modal = document.createElement('div');
                    modal.className = 'fixed inset-0 bg-black/90 flex items-center justify-center z-50';
                    modal.innerHTML = \`
                        <div class="relative w-full max-w-4xl mx-4">
                            <button onclick="this.parentElement.parentElement.remove()" class="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300">
                                <i class="fas fa-times"></i>
                            </button>
                            <div class="relative pb-[56.25%]">
                                <iframe 
                                    src="https://www.youtube.com/embed/\${videoId}?autoplay=1" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowfullscreen
                                    class="absolute inset-0 w-full h-full"
                                ></iframe>
                            </div>
                        </div>
                    \`;
                    document.body.appendChild(modal);
                    
                    // Stop auto-play when video is playing
                    stopAutoPlay();
                    
                    // Resume auto-play when modal is closed
                    modal.addEventListener('click', function(e) {
                        if (e.target === modal) {
                            modal.remove();
                            startAutoPlay();
                        }
                    });
                }
                
                // Event listeners
                document.addEventListener('DOMContentLoaded', function() {
                    initSlider();
                    
                    // Navigation buttons
                    document.getElementById('nextSlide').addEventListener('click', function() {
                        nextSlideFunc();
                        startAutoPlay(); // Reset auto-play timer
                    });
                    
                    document.getElementById('prevSlide').addEventListener('click', function() {
                        prevSlideFunc();
                        startAutoPlay(); // Reset auto-play timer
                    });
                    
                    // Pause on hover
                    const slider = document.getElementById('heroSlider');
                    slider.addEventListener('mouseenter', stopAutoPlay);
                    slider.addEventListener('mouseleave', startAutoPlay);
                });
            </script>

            <!-- Main Content -->
            <main class="relative z-10">
                <!-- CHU MEDIA EXCLUSIVE 섹션 (MOVED TO TOP) -->
                <section id="exclusive" class="py-16 bg-gray-50">
                    <div class="container mx-auto px-4">
                        <div class="mb-12">
                            <h2 class="text-6xl lg:text-8xl font-black text-gray-900 uppercase leading-none mb-2">
                                CHU MEDIA <span style="color: #1e40af;">EXCLUSIVE</span>
                            </h2>
                            <p class="text-gray-600 text-lg">Discover exclusive interviews with Cheju Halla University members, Real stories from students, professors, and staff.</p>
                        </div>
                        
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <!-- 메인 비디오 -->
                            <div class="lg:col-span-1">
                                <div class="bg-white border border-gray-300 rounded-lg overflow-hidden hover:border-gray-400 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md">
                                    <div class="aspect-video relative bg-gradient-to-br from-blue-900 to-purple-900">
                                        <iframe 
                                            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                            allowfullscreen
                                            class="w-full h-full"
                                        ></iframe>
                                    </div>
                                    <div class="p-4">
                                        <span class="text-xs text-blue-500 font-bold uppercase">대학생활 소개</span>
                                        <h3 class="text-gray-900 font-bold text-lg mt-2 mb-3">Rick Astley - Never Gonna Give You Up (Official Video) (4K Remaster)</h3>
                                        <p class="text-gray-400 text-sm line-clamp-2">Discover exclusive interviews with Cheju Halla University members. Real stories from students, professors, and staff.</p>

                                    </div>
                                </div>
                            </div>
                            
                            <!-- 오른쪽 카드 2개 -->
                            <div class="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- 카드 1 -->
                                <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div class="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                                    <div class="p-6">
                                        <span class="text-xs font-bold uppercase tracking-wider" style="color: #1e40af;">사업·정책</span>
                                        <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">[사업] 대학의 교육이 미래, 변화가 필요하다</h3>
                                        <p class="text-gray-600 text-sm line-clamp-3">AI 인재육성 사업, 산학 교육의 해외진출 부담없도록 정원 자율권 시급. 대학의 역량은 인재를 키우는 핵심 체질 등에 달려있는데. 규제 및 비합리적인 교육에 따른 인적 위험 시급.</p>
                                        <button class="text-sm font-bold mt-4" style="color: #1e40af;">자세히 보기 →</button>
                                    </div>
                                </div>
                                
                                <!-- 카드 2 -->
                                <div class="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div class="h-48 bg-gradient-to-br from-gray-200 to-gray-300"></div>
                                    <div class="p-6">
                                        <span class="text-xs font-bold uppercase tracking-wider" style="color: #1e40af;">사업·정책</span>
                                        <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">[갈등] 정년퇴임에게 학민윤 주는 사례</h3>
                                        <p class="text-gray-600 text-sm line-clamp-3">강성부지역 · 근무지역 등. 정년퇴임자 교원이 높을 수 있는 사업장 일부 보장문제. 분도리, 구매촉 등이 특별 도 기업 전업 가능을 주는 문제. 자료분석으로 복원해 업무에 기능을 강화.</p>
                                        <button class="text-sm font-bold mt-4" style="color: #1e40af;">자세히 보기 →</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 캠퍼스 라이프 섹션 (MOVED TO TOP) -->
                <section id="campus" class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                        <div class="mb-12">
                            <div class="flex justify-between items-end">
                                <div>
                                    <h2 class="text-6xl lg:text-8xl font-black uppercase leading-none mb-2">
                                        <span class="text-gray-900">CAMPUS</span>
                                        <span class="text-blue-600 ml-4">LIFE</span>
                                    </h2>
                                    <p class="text-gray-600 text-lg">Student activities, campus events, and university life at Cheju Halla University</p>
                                </div>
                                <a href="/campus" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center">
                                    더보기 <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div class="bg-white border border-gray-300 p-6 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="flex items-center mb-4">
                                    <div class="bg-blue-100 p-3 rounded-full mr-4">
                                        <i class="fas fa-calendar-alt text-blue-600 text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-900">학사일정">
                                        <p class="text-sm text-gray-400">이번 달 주요 일정</p>
                                    </div>
                                </div>
                                <ul class="space-y-2 text-sm">
                                    <li class="flex justify-between">
                                        <span class="text-gray-600">중간고사</span>
                                        <span class="text-gray-500">10.15 - 10.21</span>
                                    </li>
                                    <li class="flex justify-between">
                                        <span class="text-gray-600">수강신청 정정</span>
                                        <span class="text-gray-500">09.05 - 09.07</span>
                                    </li>
                                    <li class="flex justify-between">
                                        <span class="text-gray-600">축제</span>
                                        <span class="text-gray-500">10.25 - 10.27</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="bg-white border border-gray-300 p-6 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="flex items-center mb-4">
                                    <div class="bg-green-100 p-3 rounded-full mr-4">
                                        <i class="fas fa-users text-green-600 text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-900">동아리 소식</h4>
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
                            <div class="bg-white border border-gray-300 p-6 hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="flex items-center mb-4">
                                    <div class="bg-yellow-100 p-3 rounded-full mr-4">
                                        <i class="fas fa-trophy text-yellow-600 text-2xl"></i>
                                    </div>
                                    <div>
                                        <h4 class="font-bold text-gray-900">수상 소식</h4>
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
                    </div>
                </section>

                <!-- 신문사 & 방송국 통합 섹션 -->
                <div class="py-16" style="background: #1e40af;">
                    <div class="container mx-auto px-4">
                        <!-- 한라춘추 섹션 -->
                        <section id="newspaper" class="mb-16">
                            <div class="flex justify-between items-center mb-6">
                                <div>
                                    <h3 class="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                                        한라춘추
                                    </h3>
                                    <p class="text-lg text-blue-200 mt-1">Cheju Halla University Journal</p>
                                </div>
                                <a href="/press" class="text-white hover:text-blue-200 transition-colors font-semibold flex items-center">더보기 <i class="fas fa-arrow-right ml-2"></i></a>
                            </div>
                            <div id="newspaperArticles" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                <!-- 신문 기사가 여기에 로드됩니다 -->
                            </div>
                        </section>

                        <!-- CHEBS 섹션 -->
                        <section id="broadcast">
                            <div class="flex justify-between items-center mb-6">
                                <div>
                                    <h3 class="text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
                                        CHEBS
                                    </h3>
                                    <p class="text-lg text-blue-200 mt-1">Cheju Halla Educational Broadcasting Station</p>
                                </div>
                                <a href="/broadcast" class="text-white hover:text-blue-200 transition-colors font-semibold flex items-center">더보기 <i class="fas fa-arrow-right ml-2"></i></a>
                            </div>
                            <div id="broadcastArticles" class="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <!-- 방송 콘텐츠가 여기에 로드됩니다 -->
                                <div class="col-span-3 text-center py-12">
                                    <p class="text-white text-lg">방송 콘텐츠를 불러오는 중...</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <!-- 기획보도 섹션 -->
                <section id="special" class="py-16 bg-gray-50">
                    <div class="container mx-auto px-4">
                    <div class="mb-12">
                        <div class="flex justify-between items-end">
                            <div>
                                <h2 class="text-6xl lg:text-8xl font-black uppercase leading-none mb-2">
                                    <span class="text-gray-900">SPECIAL</span>
                                    <span class="text-blue-600 ml-4">REPORT</span>
                                </h2>
                                <p class="text-gray-600 text-lg">In-depth coverage and investigative journalism on campus issues and social topics</p>
                            </div>
                            <a href="/special-report" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center">
                                더보기 <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
                        <!-- 기획보도 대형 카드 -->
                        <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div class="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden group">
                                <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
                                <div class="text-gray-900 text-center relative z-10">
                                    <i class="fas fa-chart-line text-5xl mb-4 opacity-60 group-hover:opacity-100 transition-opacity"></i>
                                    <h4 class="text-xl font-bold uppercase tracking-wider">EMPLOYMENT ANALYSIS 2025</h4>
                                </div>
                            </div>
                            <div class="p-6">
                                <p class="text-gray-400 text-sm leading-relaxed mb-4">Comprehensive analysis of graduate employment trends in IT, tourism, and healthcare sectors at Cheju Halla University.</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-xs text-gray-500 uppercase tracking-wider">
                                        EDITORIAL
                                    </span>
                                    <button class="text-blue-600 hover:text-blue-800 font-bold text-xs uppercase tracking-wider transition-colors border-b border-transparent hover:border-blue-800 pb-1">
                                        READ MORE
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                            <div class="h-64 flex items-center justify-center" style="background: linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%);">
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
                                    <button class="text-white px-4 py-2 rounded transition-all hover:opacity-90" style="background-color: #1e40af;">
                                        자세히 보기
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>

                <!-- OPINION 섹션 -->
                <section id="opinion" class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                        <div class="mb-12">
                            <div class="flex justify-between items-end">
                                <div>
                                    <h2 class="text-6xl lg:text-8xl font-black uppercase leading-none mb-2">
                                        <span class="text-gray-900">OPINION</span>
                                        <span class="text-blue-600 ml-4">&amp;</span>
                                        <span class="text-gray-900 ml-2">VIEWS</span>
                                    </h2>
                                    <p class="text-gray-600 text-lg">Editorial opinions, columns, and diverse perspectives from our community</p>
                                </div>
                                <a href="/opinion" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center">
                                    더보기 <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <!-- 오피니언 콘텐츠 카드들 -->
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-48 bg-gradient-to-br from-red-400 to-pink-500 flex items-center justify-center">
                                    <i class="fas fa-pen-nib text-white text-4xl"></i>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-red-600 font-bold uppercase tracking-wider">사설·칼럼</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">대학생의 사회 참여, 어떻게 시작할 것인가</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">변화하는 사회 속에서 대학생들의 사회 참여 의식과 그 중요성에 대한 사설</p>
                                    <button class="text-red-600 hover:text-red-800 font-bold text-sm mt-4 transition-colors">
                                        자세히 보기 →
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-48 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center">
                                    <i class="fas fa-user-graduate text-white text-4xl"></i>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-indigo-600 font-bold uppercase tracking-wider">교수칼럼</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">인공지능 시대, 대학 교육의 방향</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">AI가 변화시키는 교육 환경에서 대학이 나아가야 할 방향에 대한 교수님의 시각</p>
                                    <button class="text-indigo-600 hover:text-indigo-800 font-bold text-sm mt-4 transition-colors">
                                        자세히 보기 →
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                                    <i class="fas fa-comments text-white text-4xl"></i>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-green-600 font-bold uppercase tracking-wider">익명의 목소리</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">캐퍼스 내 채식 옵션, 자세히 알아보자</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">학생들이 익명으로 전하는 식당 개선 아이디어와 채식 메뉴 확대 요청</p>
                                    <button class="text-green-600 hover:text-green-800 font-bold text-sm mt-4 transition-colors">
                                        자세히 보기 →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- JEJU 섹션 -->
                <section id="jeju" class="py-16 bg-gray-50">
                    <div class="container mx-auto px-4">
                        <div class="mb-12">
                            <div class="flex justify-between items-end">
                                <div>
                                    <h2 class="text-6xl lg:text-8xl font-black uppercase leading-none mb-2">
                                        <span class="text-gray-900">JEJU</span>
                                        <span class="text-blue-600 ml-4">NEWS</span>
                                    </h2>
                                    <p class="text-gray-600 text-lg">Local news, culture, and stories from beautiful Jeju Island</p>
                                </div>
                                <a href="/jeju-news" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center">
                                    더보기 <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <!-- 제주 관련 콘텐츠 카드들 -->
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-48 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                                    <i class="fas fa-mountain text-white text-4xl"></i>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-orange-600 font-bold uppercase tracking-wider">제주 이슈</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">제주도 관광정책의 새로운 방향</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">코로나19 이후 변화하는 제주 관광 트렌드와 지속가능한 관광정책에 대한 심층 분석</p>
                                    <button class="text-orange-600 hover:text-orange-800 font-bold text-sm mt-4 transition-colors">
                                        자세히 보기 →
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-48 bg-gradient-to-br from-green-400 to-teal-500 flex items-center justify-center">
                                    <i class="fas fa-palette text-white text-4xl"></i>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-green-600 font-bold uppercase tracking-wider">문화·예술</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">제주 청년 작가들의 도전</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">제주를 기반으로 활동하는 청년 예술가들의 창작 활동과 지역 문화 발전에 기여하는 이야기</p>
                                    <button class="text-green-600 hover:text-green-800 font-bold text-sm mt-4 transition-colors">
                                        자세히 보기 →
                                    </button>
                                </div>
                            </div>
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                    <i class="fas fa-utensils text-white text-4xl"></i>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-blue-600 font-bold uppercase tracking-wider">맛집·관광</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">제주 로컬 푸드 트렌드</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">제주 특산물을 활용한 새로운 요리와 숨겨진 맛집들을 소개하는 미식 탐방</p>
                                    <button class="text-blue-600 hover:text-blue-800 font-bold text-sm mt-4 transition-colors">
                                        자세히 보기 →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- ESSAY 섹션 -->
                <section id="essay" class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                        <div class="mb-12">
                            <div class="flex justify-between items-end">
                                <div>
                                    <h2 class="text-6xl lg:text-8xl font-black uppercase leading-none mb-2">
                                        <span class="text-gray-900">ESSAY</span>
                                    </h2>
                                    <p class="text-gray-600 text-lg">Personal stories, thoughts, and creative writing from our university community</p>
                                </div>
                                <a href="/essay" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center">
                                    더보기 <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center relative">
                                    <div class="absolute inset-0 bg-black/20"></div>
                                    <div class="relative text-white text-center">
                                        <i class="fas fa-feather-alt text-5xl mb-4"></i>
                                        <h4 class="text-2xl font-bold">제주에서 보내는 시간</h4>
                                    </div>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-purple-600 font-bold uppercase tracking-wider">수필</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">한라산에서 바라본 나의 대학생활</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">제주한라대학교에서의 4년간의 여정을 한라산 등반에 비유하며 써내려간 한 학생의 성장 이야기</p>
                                    <div class="flex justify-between items-center mt-4">
                                        <span class="text-sm text-gray-500">
                                            <i class="fas fa-user mr-1"></i> 김지우 (경영학과 4학년)
                                        </span>
                                        <button class="text-purple-600 hover:text-purple-800 font-bold text-sm transition-colors">
                                            읽어보기 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="bg-white border border-gray-300 overflow-hidden hover:border-gray-500 transition-all duration-300 shadow-sm hover:shadow-md">
                                <div class="h-64 bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center relative">
                                    <div class="absolute inset-0 bg-black/20"></div>
                                    <div class="relative text-white text-center">
                                        <i class="fas fa-heart text-5xl mb-4"></i>
                                        <h4 class="text-2xl font-bold">꿈과 희망</h4>
                                    </div>
                                </div>
                                <div class="p-6">
                                    <span class="text-xs text-indigo-600 font-bold uppercase tracking-wider">칼럼</span>
                                    <h3 class="text-xl font-bold text-gray-800 mt-2 mb-3">청춘, 그리고 미래에 대한 단상</h3>
                                    <p class="text-gray-600 text-sm line-clamp-3">변화하는 시대 속에서 청년들이 꿈꾸는 미래와 그것을 실현하기 위한 노력에 대한 깊이 있는 성찰</p>
                                    <div class="flex justify-between items-center mt-4">
                                        <span class="text-sm text-gray-500">
                                            <i class="fas fa-user mr-1"></i> 박민수 교수 (철학과)
                                        </span>
                                        <button class="text-indigo-600 hover:text-indigo-800 font-bold text-sm transition-colors">
                                            읽어보기 →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 쇼츠 섹션 -->
                <section id="shorts" class="py-16 bg-white">
                    <div class="container mx-auto px-4">
                    <div class="mb-12">
                        <div class="flex justify-between items-end">
                            <div>
                                <h2 class="text-6xl lg:text-8xl font-black uppercase leading-none mb-2">
                                    <span class="text-gray-900">QUICK</span>
                                    <span class="text-blue-600 ml-4">SHORTS</span>
                                </h2>
                                <p class="text-gray-600 text-lg">Short-form video content featuring campus life, student tips, and trending topics</p>
                            </div>
                            <a href="/shorts" class="text-blue-600 hover:text-blue-800 font-semibold transition-colors flex items-center">
                                더보기 <i class="fas fa-arrow-right ml-2"></i>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
                        <!-- 쇼츠 비디오 카드 (세로형) -->
                        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer">
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
                        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer">
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
                        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer">
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
                        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer">
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
                        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer">
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
                        <div class="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all cursor-pointer">
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
                    </div>
                </section><!-- End container for other sections -->
            </main>

            <!-- Footer -->
            ${Footer()}
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
        <link href="/static/styles.css" rel="stylesheet">
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
                        <a href="#banners" onclick="showSection('banners')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-images mr-3 w-5"></i> 배너 관리
                        </a>
                        <a href="#categories" onclick="showSection('categories')" class="block px-4 py-3 hover:bg-gray-700 transition-colors">
                            <i class="fas fa-tags mr-3 w-5"></i> 카테고리 관리
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