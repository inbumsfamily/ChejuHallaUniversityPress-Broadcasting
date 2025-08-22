import { Hono } from 'hono';
import { HeaderComponent } from '../components/header';
import { Footer } from '../components/footer';
import type { CloudflareBindings } from '../types';

const pagesRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Category page template
const categoryPageTemplate = (categoryName: string, categorySlug: string, subCategories: { name: string, slug: string }[] = []) => `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${categoryName} - 제주한라대학교 신문방송사</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/styles.css" rel="stylesheet">
    <style>
        .card-hover {
            transition: all 0.3s ease;
        }
        .card-hover:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body class="min-h-screen bg-gray-50 text-gray-900">
    <div id="app">
        ${HeaderComponent()}

    <div class="container mx-auto px-4 py-8 max-w-7xl">
        <!-- Category Header -->
        <div class="rounded-xl p-10 mb-10 shadow-lg" style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);">
            <h1 class="text-5xl font-black mb-3 text-white">
                ${categoryName}
            </h1>
            <p class="text-xl text-white/90">${categoryName} 관련 콘텐츠를 확인하세요</p>
        </div>
        
        ${subCategories.length > 0 ? `
        <!-- Sub-categories Grid -->
        <div class="mb-10">
            <h2 class="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                ${categoryName} 메뉴
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 ${subCategories.length <= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-4">
                ${subCategories.map((sub, index) => `
                    <a href="/${sub.slug}" class="card-hover bg-white rounded-lg p-5 block shadow-sm border border-gray-100">
                        <div class="flex items-center justify-center mb-4">
                            <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                                <i class="fas fa-newspaper text-white text-lg"></i>
                            </div>
                        </div>
                        <h3 class="text-base font-bold text-gray-900 mb-2 text-center">${sub.name}</h3>
                        <div class="flex items-center justify-center text-blue-600">
                            <span class="text-xs">콘텐츠 보기</span>
                            <i class="fas fa-arrow-right ml-1 text-xs"></i>
                        </div>
                    </a>
                `).join('')}
            </div>
        </div>
        ` : ''}
            
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-4 text-gray-900">최신 기사</h2>
                <div id="articlesList" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Articles will be loaded here -->
                    <div class="col-span-full text-center py-8 text-gray-400">
                        <i class="fas fa-spinner fa-spin text-3xl mb-4"></i>
                        <p>기사를 불러오는 중...</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-8">
                <a href="/" class="inline-block text-white px-6 py-2 rounded-lg transition-colors" style="background-color: #1e40af;" onmouseover="this.style.backgroundColor='#1e3a8a'" onmouseout="this.style.backgroundColor='#1e40af'">
                    <i class="fas fa-home mr-2"></i>
                    메인으로 돌아가기
                </a>
            </div>
        </div>
        
        ${Footer()}
    </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
    <script>
        // Load articles for this category
        async function loadCategoryArticles() {
            try {
                const response = await axios.get('/api/articles?category=${categorySlug}');
                const articlesList = document.getElementById('articlesList');
                
                if (response.data.articles && response.data.articles.length > 0) {
                    articlesList.innerHTML = response.data.articles.map(article => \`
                        <article class="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-lg hover:border-blue-400 transition-all" onclick="window.location.href='/article/\${article.slug}'">
                            <h3 class="text-lg font-semibold mb-2 text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                                \${article.title}
                            </h3>
                            <p class="text-gray-500 text-sm mb-3 line-clamp-3">\${article.content.substring(0, 120)}...</p>
                            <div class="text-xs text-gray-400 flex flex-wrap gap-3">
                                <span>
                                    <i class="fas fa-user mr-1"></i> \${article.author_name}
                                </span>
                                <span>
                                    <i class="fas fa-calendar mr-1"></i> \${new Date(article.created_at).toLocaleDateString('ko-KR')}
                                </span>
                                <span>
                                    <i class="fas fa-eye mr-1"></i> \${article.view_count}
                                </span>
                            </div>
                        </article>
                    \`).join('');
                } else {
                    articlesList.innerHTML = '<p class="col-span-full text-center text-gray-400 py-8">등록된 기사가 없습니다.</p>';
                }
            } catch (error) {
                console.error('Failed to load articles:', error);
                document.getElementById('articlesList').innerHTML = '<p class="text-center text-red-400 py-8">기사를 불러오는 중 오류가 발생했습니다.</p>';
            }
        }
        
        loadCategoryArticles();
    </script>
</body>
</html>
`;

// 방송국 routes
pagesRouter.get('/broadcast', (c) => {
  return c.html(categoryPageTemplate('방송국', 'broadcast', [
    { name: '방송국소개', slug: 'broadcast-intro' },
    { name: '한라뉴스', slug: 'halla-news' },
    { name: '한라인터뷰', slug: 'halla-interview' },
    { name: '전공특집', slug: 'major-special' },
    { name: '캠퍼스투어', slug: 'campus-tour' },
    { name: '문화·예술(방송)', slug: 'culture-art-broadcast' },
    { name: '라디오·팟캐스트', slug: 'radio-podcast' },
    { name: '방송국 활동기', slug: 'broadcast-activities' }
  ]));
});

// 신문사 routes
pagesRouter.get('/newspaper', (c) => {
  return c.html(categoryPageTemplate('신문사', 'newspaper', [
    { name: '신문사소개', slug: 'newspaper-intro' },
    { name: '현장취재', slug: 'field-coverage' },
    { name: '캠퍼스 리포트', slug: 'campus-report' },
    { name: '신문사 활동기', slug: 'newspaper-activities' }
  ]));
});

// 캠퍼스 routes
pagesRouter.get('/campus', (c) => {
  return c.html(categoryPageTemplate('캠퍼스', 'campus', [
    { name: '캠퍼스 라이프', slug: 'campus-life' },
    { name: '총학생회', slug: 'student-council-general' },
    { name: '학과학생회', slug: 'department-council' },
    { name: '동아리·서클', slug: 'club-circle' },
    { name: '학사일정', slug: 'academic-schedule' }
  ]));
});

// 쇼츠 routes
pagesRouter.get('/shorts', (c) => {
  return c.html(categoryPageTemplate('쇼츠', 'shorts', [
    { name: '한컷 뉴스', slug: 'one-cut-news' },
    { name: '이슈 브리핑', slug: 'issue-briefing' },
    { name: '익명소식', slug: 'anonymous-news' },
    { name: '재학생 꿀팁', slug: 'student-tips' }
  ]));
});

// 기획보도 routes
pagesRouter.get('/special-report', (c) => {
  return c.html(categoryPageTemplate('기획보도', 'special-report', [
    { name: '진로·취업', slug: 'career-employment' },
    { name: '청년·지역', slug: 'youth-region' },
    { name: '복지·권익', slug: 'welfare-rights' },
    { name: '학술·연구', slug: 'academic-research' }
  ]));
});

// 제주소식 routes
pagesRouter.get('/jeju-news', (c) => {
  return c.html(categoryPageTemplate('제주소식', 'jeju-news', [
    { name: '제주소식', slug: 'jeju-news-main' },
    { name: '제주 문화·예술', slug: 'jeju-culture-art' },
    { name: '관광·맛집', slug: 'jeju-tour-food' }
  ]));
});

// 오피니언 routes
pagesRouter.get('/opinion', (c) => {
  return c.html(categoryPageTemplate('오피니언', 'opinion', [
    { name: '사설·칼럼', slug: 'editorial-column' },
    { name: '기고', slug: 'contribution' },
    { name: '학생의 시선', slug: 'student-perspective' }
  ]));
});

// 에세이 routes
pagesRouter.get('/essay', (c) => {
  return c.html(categoryPageTemplate('에세이', 'essay', [
    { name: '제주에서보내는시간', slug: 'time-in-jeju' },
    { name: '꿈과 희망', slug: 'dreams-hopes' },
    { name: '여행과 탐방', slug: 'travel-exploration' },
    { name: '문학과 예술', slug: 'literature-art' },
    { name: '이달의 테마 에세이', slug: 'monthly-theme-essay' },
    { name: '나만의 생각 정리', slug: 'my-thoughts' }
  ]));
});

// Individual sub-category pages
const subCategoryPageTemplate = (categoryName: string, categorySlug: string) => `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${categoryName} - 제주한라대학교 신문방송사</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <link href="/static/styles.css" rel="stylesheet">
</head>
<body class="min-h-screen bg-white text-gray-900">
    <div id="app">
        ${HeaderComponent()}
        <div class="container mx-auto px-4 py-8">
            <div class="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
                <h1 class="text-3xl font-bold text-gray-900 mb-4">
                    <i class="fas fa-folder-open mr-2" style="color: #1e40af;"></i>
                    ${categoryName}
                </h1>
            
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-4 text-gray-900">최신 기사</h2>
                <div id="articlesList" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <!-- Articles will be loaded here -->
                    <div class="col-span-full text-center py-8 text-gray-400">
                        <i class="fas fa-spinner fa-spin text-3xl mb-4"></i>
                        <p>기사를 불러오는 중...</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-8">
                <a href="/" class="inline-block text-white px-6 py-2 rounded-lg transition-colors" style="background-color: #1e40af;" onmouseover="this.style.backgroundColor='#1e3a8a'" onmouseout="this.style.backgroundColor='#1e40af'">
                    <i class="fas fa-home mr-2"></i>
                    메인으로 돌아가기
                </a>
            </div>
        </div>
        
        ${Footer()}
    </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
    <script>
        // Load articles for this category
        async function loadCategoryArticles() {
            try {
                const response = await axios.get('/api/articles?category=${categorySlug}');
                const articlesList = document.getElementById('articlesList');
                
                if (response.data.articles && response.data.articles.length > 0) {
                    articlesList.innerHTML = response.data.articles.map(article => \`
                        <article class="bg-white border border-gray-200 rounded-lg p-5 cursor-pointer hover:shadow-lg hover:border-blue-400 transition-all" onclick="window.location.href='/article/\${article.slug}'">
                            <h3 class="text-lg font-semibold mb-2 text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                                \${article.title}
                            </h3>
                            <p class="text-gray-500 text-sm mb-3 line-clamp-3">\${article.content.substring(0, 120)}...</p>
                            <div class="text-xs text-gray-400 flex flex-wrap gap-3">
                                <span>
                                    <i class="fas fa-user mr-1"></i> \${article.author_name}
                                </span>
                                <span>
                                    <i class="fas fa-calendar mr-1"></i> \${new Date(article.created_at).toLocaleDateString('ko-KR')}
                                </span>
                                <span>
                                    <i class="fas fa-eye mr-1"></i> \${article.view_count}
                                </span>
                            </div>
                        </article>
                    \`).join('');
                } else {
                    articlesList.innerHTML = '<p class="col-span-full text-center text-gray-400 py-8">등록된 기사가 없습니다.</p>';
                }
            } catch (error) {
                console.error('Failed to load articles:', error);
                document.getElementById('articlesList').innerHTML = '<p class="text-center text-red-400 py-8">기사를 불러오는 중 오류가 발생했습니다.</p>';
            }
        }
        
        loadCategoryArticles();
    </script>
</body>
</html>
`;

// Define all sub-category routes
const subCategories = [
  // 방송국
  { slug: 'broadcast-intro', name: '방송국소개' },
  { slug: 'halla-news', name: '한라뉴스' },
  { slug: 'halla-interview', name: '한라인터뷰' },
  { slug: 'major-special', name: '전공특집' },
  { slug: 'campus-tour', name: '캠퍼스투어' },
  { slug: 'culture-art-broadcast', name: '문화·예술(방송)' },
  { slug: 'radio-podcast', name: '라디오·팟캐스트' },
  { slug: 'broadcast-activities', name: '방송국 활동기' },
  // 신문사
  { slug: 'newspaper-intro', name: '신문사소개' },
  { slug: 'field-coverage', name: '현장취재' },
  { slug: 'campus-report', name: '캠퍼스 리포트' },
  { slug: 'newspaper-activities', name: '신문사 활동기' },
  // 캠퍼스
  { slug: 'university-news', name: '대학소식' },
  { slug: 'our-major-now', name: '지우전(지금 우리 전공은)' },
  { slug: 'clubs', name: '동아리' },
  { slug: 'student-activities', name: '학생활동' },
  { slug: 'campus-life', name: '캠퍼스 라이프' },
  { slug: 'scholarship-welfare', name: '장학·복지·지원' },
  { slug: 'x-file', name: 'X-파일' },
  { slug: 'alumni-interview', name: '졸업생 인터뷰' },
  // 쇼츠
  { slug: 'one-cut-news', name: '한컷 뉴스' },
  { slug: 'issue-briefing', name: '이슈 브리핑' },
  { slug: 'anonymous-news', name: '익명소식' },
  { slug: 'student-tips', name: '재학생 꿀팁' },
  // 기획보도
  { slug: 'career-employment', name: '진로·취업' },
  { slug: 'youth-region', name: '청년·지역' },
  { slug: 'welfare-rights', name: '복지·권익' },
  { slug: 'academic-research', name: '학술·연구' },
  // 제주소식
  { slug: 'jeju-issue', name: '제주이슈' },
  { slug: 'culture-exploration', name: '문화탐방' },
  { slug: 'environment-nature', name: '환경과 자연' },
  { slug: 'youth-startup', name: '청년 창업' },
  { slug: 'jeju-traditional-village', name: '제주전통마을' },
  // 오피니언
  { slug: 'editorial-column', name: '사설·칼럼' },
  { slug: 'professor-column', name: '교수 칼럼' },
  { slug: 'reader-opinion', name: '독자 의견·제안' },
  { slug: 'anonymous-voice', name: '익명 목소리' },
  { slug: 'book-movie-recommendation', name: '함께 읽는 책·영화 추천' },
  // 에세이
  { slug: 'time-in-jeju', name: '제주에서 보내는 시간' },
  { slug: 'dreams-hopes', name: '꿈과 희망' },
  { slug: 'travel-exploration', name: '여행과 탐방' },
  { slug: 'literature-art', name: '문학과 예술' },
  { slug: 'monthly-theme-essay', name: '이달의 테마 에세이' },
  { slug: 'my-thoughts', name: '나만의 생각 정리' }
];

// Register routes for each sub-category
subCategories.forEach(category => {
  pagesRouter.get(`/${category.slug}`, (c) => {
    return c.html(subCategoryPageTemplate(category.name, category.slug));
  });
});

// Article detail page
pagesRouter.get('/article/:slug', async (c) => {
  const slug = c.req.param('slug');
  const db = c.env.DB;
  
  try {
    const article = await db.prepare(`
      SELECT 
        a.*,
        u.nickname as author_name,
        c.name as category_name,
        c.slug as category_slug
      FROM articles a
      JOIN users u ON a.author_id = u.user_id
      JOIN categories c ON a.category_id = c.category_id
      WHERE a.slug = ?
    `).bind(slug).first();
    
    if (!article) {
      return c.html(`
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>기사를 찾을 수 없습니다</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
            <link href="/static/styles.css" rel="stylesheet">
        </head>
        <body class="min-h-screen bg-white text-gray-900">
            <div id="app">
                ${HeaderComponent()}
                <div class="container mx-auto px-4 py-8">
                    <div class="bg-black border border-gray-800 rounded-lg p-6 text-center">
                        <h1 class="text-2xl font-bold text-red-500 mb-4">기사를 찾을 수 없습니다</h1>
                        <p class="text-gray-400 mb-4">요청하신 기사가 존재하지 않거나 삭제되었습니다.</p>
                        <a href="/" class="inline-block text-white px-6 py-2 rounded-lg transition-colors" style="background-color: #1e40af;" onmouseover="this.style.backgroundColor='#1e3a8a'" onmouseout="this.style.backgroundColor='#1e40af'">
                            메인으로 돌아가기
                        </a>
                    </div>
                </div>
                ${Footer()}
            </div>
        </body>
        </html>
      `, 404);
    }
    
    // Increment view count
    await db.prepare(
      'UPDATE articles SET view_count = view_count + 1 WHERE slug = ?'
    ).bind(slug).run();
    
    return c.html(`
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${article.title} - 제주한라대학교 신문방송사</title>
          <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
          <link href="/static/styles.css" rel="stylesheet">
      </head>
      <body class="min-h-screen bg-white text-gray-900">
          <div id="app">
              ${HeaderComponent()}
              <div class="container mx-auto px-4 py-8 max-w-4xl">
                  <article class="bg-black border border-gray-800 rounded-lg p-6">
                  <div class="mb-4">
                      <span class="inline-block px-3 py-1 rounded-full text-sm font-semibold text-white" style="background-color: #1e40af;">
                          ${article.category_name}
                      </span>
                  </div>
                  
                  <h1 class="text-3xl font-bold text-gray-900 mb-4">${article.title}</h1>
                  
                  <div class="flex items-center text-sm text-gray-400 mb-6">
                      <span class="mr-4">
                          <i class="fas fa-user mr-1"></i> ${article.author_name}
                      </span>
                      <span class="mr-4">
                          <i class="fas fa-calendar mr-1"></i> ${new Date(article.created_at).toLocaleDateString('ko-KR')}
                      </span>
                      <span>
                          <i class="fas fa-eye mr-1"></i> ${article.view_count} 조회
                      </span>
                  </div>
                  
                  ${article.featured_image_url ? `
                  <img src="${article.featured_image_url}" alt="${article.title}" class="w-full rounded-lg mb-6">
                  ` : ''}
                  
                  ${article.youtube_embed_id ? `
                  <div class="mb-6">
                      <iframe 
                          width="100%" 
                          height="400" 
                          src="https://www.youtube.com/embed/${article.youtube_embed_id}" 
                          frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                          allowfullscreen
                          class="rounded-lg"
                      ></iframe>
                  </div>
                  ` : ''}
                  
                  <div class="prose prose-lg prose-invert max-w-none mb-8 text-gray-300">
                      ${article.content.replace(/\n/g, '<br>')}
                  </div>
                  
                  <div class="border-t border-gray-800 pt-4 mt-8">
                      <a href="/${article.category_slug}" class="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 mr-2 transition-colors">
                          <i class="fas fa-list mr-2"></i>
                          목록으로
                      </a>
                      <a href="/" class="inline-block text-white px-4 py-2 rounded-lg transition-colors" style="background-color: #1e40af;" onmouseover="this.style.backgroundColor='#1e3a8a'" onmouseout="this.style.backgroundColor='#1e40af'">
                          <i class="fas fa-home mr-2"></i>
                          메인으로
                      </a>
                  </div>
              </article>
          </div>
          
          ${Footer()}
      </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error('Error fetching article:', error);
    return c.html(`
      <!DOCTYPE html>
      <html lang="ko">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>오류 발생</title>
          <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="bg-gray-50">
          <div class="container mx-auto px-4 py-8">
              <div class="bg-white rounded-lg shadow-md p-6 text-center">
                  <h1 class="text-2xl font-bold text-red-600 mb-4">오류가 발생했습니다</h1>
                  <p class="text-gray-600 mb-4">기사를 불러오는 중 문제가 발생했습니다.</p>
                  <a href="/" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                      메인으로 돌아가기
                  </a>
              </div>
          </div>
      </body>
      </html>
    `, 500);
  }
});

export default pagesRouter;