import { Hono } from 'hono';
import { HeaderComponent } from '../components/header';
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
</head>
<body class="bg-gray-50">
    ${HeaderComponent()}

    <div class="container mx-auto px-4 py-8">
        <!-- Category Header -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-8 mb-8">
            <h1 class="text-4xl font-bold mb-2">
                ${categoryName}
            </h1>
            <p class="text-lg opacity-90">${categoryName} 소식을 전해드립니다</p>
        </div>
        
        ${subCategories.length > 0 ? `
        <!-- Sub-categories Grid -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">${categoryName} 메뉴</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                ${subCategories.map(sub => `
                    <a href="/${sub.slug}" class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 p-6 border border-gray-100">
                        <div class="flex items-center justify-between mb-3">
                            <div class="bg-blue-100 p-3 rounded-full">
                                <i class="fas fa-folder text-blue-600 text-xl"></i>
                            </div>
                            <i class="fas fa-arrow-right text-gray-400"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">${sub.name}</h3>
                        <p class="text-sm text-gray-600">클릭하여 기사를 확인하세요</p>
                    </a>
                `).join('')}
            </div>
        </div>
        ` : ''}
            
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-4">최신 기사</h2>
                <div id="articlesList" class="space-y-4">
                    <!-- Articles will be loaded here -->
                    <div class="text-center py-8 text-gray-500">
                        <i class="fas fa-spinner fa-spin text-3xl mb-4"></i>
                        <p>기사를 불러오는 중...</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-8">
                <a href="/" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    <i class="fas fa-home mr-2"></i>
                    메인으로 돌아가기
                </a>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script>
        // Load articles for this category
        async function loadCategoryArticles() {
            try {
                const response = await axios.get('/api/articles?category=${categorySlug}');
                const articlesList = document.getElementById('articlesList');
                
                if (response.data.articles && response.data.articles.length > 0) {
                    articlesList.innerHTML = response.data.articles.map(article => \`
                        <article class="border-b pb-4 cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded" onclick="window.location.href='/article/\${article.slug}'">
                            <h3 class="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600">
                                \${article.title}
                            </h3>
                            <p class="text-gray-600 text-sm mb-2">\${article.content.substring(0, 150)}...</p>
                            <div class="text-xs text-gray-500">
                                <span class="mr-4">
                                    <i class="fas fa-user mr-1"></i> \${article.author_name}
                                </span>
                                <span class="mr-4">
                                    <i class="fas fa-calendar mr-1"></i> \${new Date(article.created_at).toLocaleDateString('ko-KR')}
                                </span>
                                <span>
                                    <i class="fas fa-eye mr-1"></i> \${article.view_count}
                                </span>
                            </div>
                        </article>
                    \`).join('');
                } else {
                    articlesList.innerHTML = '<p class="text-center text-gray-500 py-8">등록된 기사가 없습니다.</p>';
                }
            } catch (error) {
                console.error('Failed to load articles:', error);
                document.getElementById('articlesList').innerHTML = '<p class="text-center text-red-500 py-8">기사를 불러오는 중 오류가 발생했습니다.</p>';
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
    { name: '대학소식', slug: 'university-news' },
    { name: '지우전(지금 우리 전공은)', slug: 'our-major-now' },
    { name: '동아리', slug: 'clubs' },
    { name: '학생활동', slug: 'student-activities' },
    { name: '캠퍼스 라이프', slug: 'campus-life' },
    { name: '장학·복지·지원', slug: 'scholarship-welfare' },
    { name: 'X-파일', slug: 'x-file' },
    { name: '졸업생 인터뷰', slug: 'alumni-interview' }
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
    { name: '제주이슈', slug: 'jeju-issue' },
    { name: '문화탐방', slug: 'culture-exploration' },
    { name: '환경과 자연', slug: 'environment-nature' },
    { name: '청년 창업', slug: 'youth-startup' },
    { name: '제주전통마을', slug: 'jeju-traditional-village' }
  ]));
});

// 오피니언 routes
pagesRouter.get('/opinion', (c) => {
  return c.html(categoryPageTemplate('오피니언', 'opinion', [
    { name: '사설·칼럼', slug: 'editorial-column' },
    { name: '교수 칼럼', slug: 'professor-column' },
    { name: '독자 의견·제안', slug: 'reader-opinion' },
    { name: '익명 목소리', slug: 'anonymous-voice' },
    { name: '함께 읽는 책·영화 추천', slug: 'book-movie-recommendation' }
  ]));
});

// 에세이 routes
pagesRouter.get('/essay', (c) => {
  return c.html(categoryPageTemplate('에세이', 'essay', [
    { name: '제주에서 보내는 시간', slug: 'time-in-jeju' },
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
</head>
<body class="bg-gray-50">
    <div class="container mx-auto px-4 py-8">
        <div class="bg-white rounded-lg shadow-md p-6">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
                <i class="fas fa-folder-open mr-2"></i>
                ${categoryName}
            </h1>
            
            <div class="mt-8">
                <h2 class="text-xl font-semibold mb-4">최신 기사</h2>
                <div id="articlesList" class="space-y-4">
                    <!-- Articles will be loaded here -->
                    <div class="text-center py-8 text-gray-500">
                        <i class="fas fa-spinner fa-spin text-3xl mb-4"></i>
                        <p>기사를 불러오는 중...</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-8">
                <a href="/" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                    <i class="fas fa-home mr-2"></i>
                    메인으로 돌아가기
                </a>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script>
        // Load articles for this category
        async function loadCategoryArticles() {
            try {
                const response = await axios.get('/api/articles?category=${categorySlug}');
                const articlesList = document.getElementById('articlesList');
                
                if (response.data.articles && response.data.articles.length > 0) {
                    articlesList.innerHTML = response.data.articles.map(article => \`
                        <article class="border-b pb-4 cursor-pointer hover:bg-gray-50 p-4 -m-4 rounded" onclick="window.location.href='/article/\${article.slug}'">
                            <h3 class="text-lg font-semibold mb-2 text-gray-800 hover:text-blue-600">
                                \${article.title}
                            </h3>
                            <p class="text-gray-600 text-sm mb-2">\${article.content.substring(0, 150)}...</p>
                            <div class="text-xs text-gray-500">
                                <span class="mr-4">
                                    <i class="fas fa-user mr-1"></i> \${article.author_name}
                                </span>
                                <span class="mr-4">
                                    <i class="fas fa-calendar mr-1"></i> \${new Date(article.created_at).toLocaleDateString('ko-KR')}
                                </span>
                                <span>
                                    <i class="fas fa-eye mr-1"></i> \${article.view_count}
                                </span>
                            </div>
                        </article>
                    \`).join('');
                } else {
                    articlesList.innerHTML = '<p class="text-center text-gray-500 py-8">등록된 기사가 없습니다.</p>';
                }
            } catch (error) {
                console.error('Failed to load articles:', error);
                document.getElementById('articlesList').innerHTML = '<p class="text-center text-red-500 py-8">기사를 불러오는 중 오류가 발생했습니다.</p>';
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
        </head>
        <body class="bg-gray-50">
            ${HeaderComponent()}
            <div class="container mx-auto px-4 py-8">
                <div class="bg-white rounded-lg shadow-md p-6 text-center">
                    <h1 class="text-2xl font-bold text-red-600 mb-4">기사를 찾을 수 없습니다</h1>
                    <p class="text-gray-600 mb-4">요청하신 기사가 존재하지 않거나 삭제되었습니다.</p>
                    <a href="/" class="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                        메인으로 돌아가기
                    </a>
                </div>
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
      </head>
      <body class="bg-gray-50">
          ${HeaderComponent()}
          <div class="container mx-auto px-4 py-8 max-w-4xl">
              <article class="bg-white rounded-lg shadow-md p-6">
                  <div class="mb-4">
                      <span class="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          ${article.category_name}
                      </span>
                  </div>
                  
                  <h1 class="text-3xl font-bold text-gray-800 mb-4">${article.title}</h1>
                  
                  <div class="flex items-center text-sm text-gray-600 mb-6">
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
                  
                  <div class="prose prose-lg max-w-none mb-8">
                      ${article.content.replace(/\n/g, '<br>')}
                  </div>
                  
                  <div class="border-t pt-4 mt-8">
                      <a href="/${article.category_slug}" class="inline-block bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 mr-2">
                          <i class="fas fa-list mr-2"></i>
                          목록으로
                      </a>
                      <a href="/" class="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                          <i class="fas fa-home mr-2"></i>
                          메인으로
                      </a>
                  </div>
              </article>
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