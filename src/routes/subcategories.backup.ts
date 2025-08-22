import { Hono } from 'hono';
import { HeaderComponent } from '../components/header';
import { Footer } from '../components/footer';
import type { CloudflareBindings } from '../types';

const subCategoriesRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Category structure for menu display
const categoryStructure: any = {
  broadcast: {
    name: '방송국',
    slug: 'broadcast',
    subCategories: [
      { slug: 'broadcast/방송국소개', name: '방송국소개' },
      { slug: 'broadcast/CHEBS뉴스', name: 'CHEBS뉴스' },
      { slug: 'broadcast/제작프로그램', name: '제작프로그램' },
      { slug: 'broadcast/언론정보', name: '언론정보' },
      { slug: 'broadcast/방송편성표', name: '방송편성표' },
      { slug: 'broadcast/수상작·공모전', name: '수상작·공모전' }
    ]
  },
  press: {
    name: '신문사',
    slug: 'press',
    subCategories: [
      { slug: 'press/신문사소개', name: '신문사소개' },
      { slug: 'press/연혁·발행안내', name: '연혁·발행안내' },
      { slug: 'press/조직도·만드는 사람들', name: '조직도·만드는 사람들' },
      { slug: 'press/신문사 활동기', name: '신문사 활동기' },
      { slug: 'press/기자모집·공지', name: '기자모집·공지' },
      { slug: 'press/PDF·지난호 아카이브', name: 'PDF·지난호 아카이브' }
    ]
  },
  jeju: {
    name: '제주소식',
    slug: 'jeju',
    subCategories: [
      { slug: 'jeju-news-main', name: '제주소식' },
      { slug: 'jeju-culture-art', name: '제주 문화·예술' },
      { slug: 'jeju-tour-food', name: '관광·맛집' },
      { slug: 'jeju-youth-culture', name: '제주 청년 문화' },
      { slug: 'jeju-exploration', name: '제주도 탐방' },
      { slug: 'tourism-travel', name: '관광과 여행' },
      { slug: 'jeju-environment', name: '제주의 환경' }
    ]
  },
  opinion: {
    name: '오피니언',
    slug: 'opinion',
    subCategories: [
      { slug: 'editorial-column', name: '사설·칼럼' },
      { slug: 'professor-column', name: '교수칼럼' },
      { slug: 'student-contribution', name: '학생기고' },
      { slug: 'free-speech', name: '자유발언대' },
      { slug: 'reader-submission', name: '독자투고' },
      { slug: 'book-movie-recommendation', name: '함께 읽는 책·영화 추천' }
    ]
  },
  essay: {
    name: '에세이',
    slug: 'essay',
    subCategories: [
      { slug: 'time-in-jeju', name: '제주에서보내는시간' },
      { slug: 'dreams-hopes', name: '꿈과 희망' },
      { slug: 'travel-exploration', name: '여행과 탐방' },
      { slug: 'literature-art', name: '문학과 예술' },
      { slug: 'monthly-theme-essay', name: '이달의 테마 에세이' },
      { slug: 'my-thoughts', name: '나만의 생각 정리' }
    ]
  },
  campus: {
    name: '캠퍼스',
    slug: 'campus',
    subCategories: [
      { slug: 'university-news', name: '대학소식' },
      { slug: 'our-major-now', name: '지우전(지금 우리 전공은)' },
      { slug: 'clubs', name: '동아리' },
      { slug: 'student-activities', name: '학생활동' },
      { slug: 'campus-life', name: '캠퍼스 라이프' },
      { slug: 'scholarship-welfare', name: '장학·복지·지원' }
    ]
  },
  shorts: {
    name: '쇼츠',
    slug: 'shorts',
    subCategories: [
      { slug: 'short-news', name: '단신뉴스' },
      { slug: 'todays-word', name: '오늘의 한마디' },
      { slug: 'campus-sketch', name: '캠퍼스 스케치' },
      { slug: 'sns-trending', name: 'SNS 화제' },
      { slug: 'short-form-video', name: '숏폼 비디오' },
      { slug: 'card-news', name: '카드뉴스' }
    ]
  },
  special: {
    name: '기획보도',
    slug: 'special',
    subCategories: [
      { slug: 'special-report-main', name: '기획기사' },
      { slug: 'in-depth-coverage', name: '심층취재' },
      { slug: 'series-planning', name: '연재기획' },
      { slug: 'issue-analysis', name: '이슈분석' },
      { slug: 'interview-special', name: '인터뷰 특집' },
      { slug: 'data-journalism', name: '데이터 저널리즘' }
    ]
  }
};

// Sub-category page template with menu cards
const subCategoryPageTemplate = (categoryName: string, categorySlug: string, articles: any[], parentCategory: any = null) => `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${categoryName} - 제주한라대학교 신문방송사</title>
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
<body class="min-h-screen bg-gray-50 text-gray-900">
    <div id="app">
        ${HeaderComponent()}

        <div class="container mx-auto px-4 py-8 max-w-7xl">
            <!-- Category Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 shadow-lg">
                <h1 class="text-4xl font-bold text-white mb-2">${categoryName}</h1>
                <nav class="text-white/80 text-sm">
                    <a href="/" class="hover:text-white">홈</a>
                    <span class="mx-2">/</span>
                    <a href="/${parentCategory.slug}" class="hover:text-white">${parentCategory.name}</a>
                    <span class="mx-2">/</span>
                    <span>${categoryName}</span>
                </nav>
            </div>
            
            <!-- Sub-category Menu Cards -->
            <div class="mb-8">
                <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                    ${parentCategory.name} 메뉴
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                    ${parentCategory.subCategories.map((sub: any) => `
                        <a href="/${sub.slug}" class="card-hover bg-white rounded-lg p-5 block shadow-sm border ${sub.slug === categorySlug ? 'border-blue-500 bg-blue-50' : 'border-gray-100'}">
                            <div class="flex items-center justify-center mb-4">
                                <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                                    <i class="fas fa-newspaper text-white text-lg"></i>
                                </div>
                            </div>
                            <h3 class="text-gray-800 font-bold text-center text-sm">${sub.name}</h3>
                        </a>
                    `).join('')}
                </div>
            </div>
            
            <!-- Featured Section Title -->
            <div class="mb-6">
                <h2 class="text-2xl font-bold text-gray-800 flex items-center">
                    <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                    최신 기사
                </h2>
            </div>
            
            <!-- Featured Content and Article List Layout -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Left: Featured Content (2/3 width) -->
                <div class="lg:col-span-2">
                    ${featuredArticle ? `
                        <article class="bg-white rounded-lg shadow-lg overflow-hidden">
                            ${featuredArticle.featured_image_url ? `
                                <img src="${featuredArticle.featured_image_url}" alt="${featuredArticle.title}" 
                                     class="w-full h-96 object-cover">
                            ` : `
                                <div class="w-full h-96 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <i class="fas fa-video text-blue-400 text-6xl"></i>
                                </div>
                            `}
                            <div class="p-6">
                                <h2 class="text-2xl font-bold text-gray-900 mb-3">
                                    <a href="/article/${featuredArticle.slug}" class="hover:text-blue-600">
                                        ${featuredArticle.title}
                                    </a>
                                </h2>
                                <p class="text-gray-600 mb-4 leading-relaxed">
                                    ${featuredArticle.content.substring(0, 300)}...
                                </p>
                                <div class="flex justify-between items-center text-sm text-gray-500">
                                    <span>${featuredArticle.author_name || '편집부'}</span>
                                    <span>${new Date(featuredArticle.created_at).toLocaleDateString('ko-KR')}</span>
                                </div>
                            </div>
                        </article>
                    ` : `
                        <div class="bg-white rounded-lg shadow-lg p-12 text-center">
                            <i class="fas fa-inbox text-gray-300 text-6xl mb-4"></i>
                            <p class="text-gray-500 text-lg">아직 등록된 컨텐츠가 없습니다.</p>
                        </div>
                    `}
                </div>
                
                <!-- Right: Article List (1/3 width) -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow-lg p-6">
                        <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center">
                            <span class="w-1 h-6 bg-blue-600 mr-2"></span>
                            최신 기사
                        </h3>
                        <div class="space-y-4">
                            ${listArticles.length > 0 ? listArticles.map(article => `
                                <article class="pb-4 border-b border-gray-100 last:border-0">
                                    <div class="flex gap-3">
                                        ${article.featured_image_url ? `
                                            <img src="${article.featured_image_url}" alt="${article.title}" 
                                                 class="w-20 h-20 object-cover rounded-lg flex-shrink-0">
                                        ` : `
                                            <div class="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <i class="fas fa-newspaper text-gray-400"></i>
                                            </div>
                                        `}
                                        <div class="flex-1 min-w-0">
                                            <h4 class="text-sm font-bold text-gray-900 mb-1 line-clamp-2">
                                                <a href="/article/${article.slug}" class="hover:text-blue-600">
                                                    ${article.title}
                                                </a>
                                            </h4>
                                            <p class="text-xs text-gray-500">
                                                ${new Date(article.created_at).toLocaleDateString('ko-KR')}
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            `).join('') : `
                                <p class="text-gray-500 text-sm text-center py-4">
                                    등록된 기사가 없습니다.
                                </p>
                            `}
                        </div>
                        
                        ${articles.length > 5 ? `
                            <div class="mt-6 pt-4 border-t border-gray-100">
                                <a href="/${categorySlug}?all=true" class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center justify-center">
                                    더 많은 기사 보기
                                    <i class="fas fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        ` : ''}
                    </div>
                </div>
            </div>
            
            <!-- More Articles Grid (if more than 5 articles) -->
            ${articles.length > 5 ? `
                <div class="mt-12">
                    <h3 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                        <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                        더 많은 컨텐츠
                    </h3>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${articles.slice(5).map(article => `
                            <article class="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300">
                                ${article.featured_image_url ? `
                                    <img src="${article.featured_image_url}" alt="${article.title}" 
                                         class="w-full h-48 object-cover rounded-t-lg">
                                ` : `
                                    <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg flex items-center justify-center">
                                        <i class="fas fa-newspaper text-gray-400 text-4xl"></i>
                                    </div>
                                `}
                                <div class="p-5">
                                    <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                        <a href="/article/${article.slug}" class="hover:text-blue-600">
                                            ${article.title}
                                        </a>
                                    </h3>
                                    <p class="text-gray-600 text-sm mb-3 line-clamp-3">
                                        ${article.content.substring(0, 150)}...
                                    </p>
                                    <div class="flex justify-between items-center text-xs text-gray-500">
                                        <span>${article.author_name || '편집부'}</span>
                                        <span>${new Date(article.created_at).toLocaleDateString('ko-KR')}</span>
                                    </div>
                                </div>
                            </article>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>

        ${Footer()}
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
</body>
</html>
    `;
  }
  
  // Default layout for other categories
  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${categoryName} - 제주한라대학교 신문방송사</title>
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
<body class="min-h-screen bg-gray-50 text-gray-900">
    <div id="app">
        ${HeaderComponent()}

        <div class="container mx-auto px-4 py-8 max-w-7xl">
            <!-- Category Header -->
            <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 mb-8 shadow-lg">
                <h1 class="text-4xl font-bold text-white mb-2">${categoryName}</h1>
                <nav class="text-white/80 text-sm">
                    <a href="/" class="hover:text-white">홈</a>
                    <span class="mx-2">/</span>
                    ${parentCategory ? `
                        <a href="/${parentCategory.slug}" class="hover:text-white">${parentCategory.name}</a>
                        <span class="mx-2">/</span>
                    ` : ''}
                    <span>${categoryName}</span>
                </nav>
            </div>
            
            ${parentCategory ? `
            <!-- Sub-category Menu Cards -->
            <div class="mb-8">
                <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                    <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                    ${parentCategory.name} 메뉴
                </h2>
                <div class="grid grid-cols-2 md:grid-cols-3 ${parentCategory.subCategories.length === 6 ? 'lg:grid-cols-6' : parentCategory.subCategories.length === 7 ? 'lg:grid-cols-7' : 'lg:grid-cols-5'} gap-4 mb-8">
                    ${parentCategory.subCategories.map((sub: any) => `
                        <a href="/${sub.slug}" class="card-hover bg-white rounded-lg p-5 block shadow-sm border ${sub.slug === categorySlug ? 'border-blue-500 bg-blue-50' : 'border-gray-100'}">
                            <div class="flex items-center justify-center mb-4">
                                <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                                    <i class="fas fa-newspaper text-white text-lg"></i>
                                </div>
                            </div>
                            <h3 class="text-gray-800 font-bold text-center text-sm">${sub.name}</h3>
                        </a>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <!-- Articles Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                ${articles.length > 0 ? articles.map(article => `
                    <article class="bg-white rounded-lg shadow hover:shadow-lg transition-all duration-300">
                        ${article.featured_image_url ? `
                            <img src="${article.featured_image_url}" alt="${article.title}" 
                                 class="w-full h-48 object-cover rounded-t-lg">
                        ` : `
                            <div class="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 rounded-t-lg flex items-center justify-center">
                                <i class="fas fa-newspaper text-gray-400 text-4xl"></i>
                            </div>
                        `}
                        <div class="p-5">
                            <h3 class="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                                <a href="/article/${article.slug}" class="hover:text-blue-600">
                                    ${article.title}
                                </a>
                            </h3>
                            <p class="text-gray-600 text-sm mb-3 line-clamp-3">
                                ${article.content.substring(0, 150)}...
                            </p>
                            <div class="flex justify-between items-center text-xs text-gray-500">
                                <span>${article.author_name || '편집부'}</span>
                                <span>${new Date(article.created_at).toLocaleDateString('ko-KR')}</span>
                            </div>
                        </div>
                    </article>
                `).join('') : `
                    <div class="col-span-full text-center py-12">
                        <i class="fas fa-inbox text-gray-300 text-6xl mb-4"></i>
                        <p class="text-gray-500 text-lg">아직 등록된 기사가 없습니다.</p>
                    </div>
                `}
            </div>
        </div>

        ${Footer()}
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
</body>
</html>
  `;
};

// Dynamic route handler for single-segment subcategories
subCategoriesRouter.get('/:subcategory', async (c) => {
  const slug = c.req.param('subcategory');
  
  // Skip if this is a known parent category
  const parentCategories = ['broadcast', 'press', 'campus', 'shorts', 'special-report', 'jeju-news', 'opinion', 'essay'];
  if (parentCategories.includes(slug)) {
    return c.next();
  }
  
  try {
    // Get category info from database
    const category = await c.env.DB.prepare(`
      SELECT * FROM categories WHERE slug = ?
    `).bind(slug).first();
    
    if (!category) {
      return c.next();
    }
    
    // Find parent category for sub-menu display
    let parentCategory = null;
    for (const [key, cat] of Object.entries(categoryStructure)) {
      if (cat.subCategories.some((sub: any) => sub.slug === slug)) {
        parentCategory = cat;
        break;
      }
    }
    
    // Get articles for this category
    const articles = await c.env.DB.prepare(`
      SELECT 
        a.*,
        u.nickname as author_name,
        c.name as category_name
      FROM articles a
      LEFT JOIN users u ON a.author_id = u.user_id
      LEFT JOIN categories c ON a.category_id = c.category_id
      WHERE a.category_id = ?
      ORDER BY a.created_at DESC
      LIMIT 20
    `).bind(category.category_id).all();
    
    return c.html(subCategoryPageTemplate(category.name, slug, articles.results || [], parentCategory));
  } catch (error) {
    console.error('Error loading subcategory:', error);
    return c.html('<div>Error loading page</div>', 500);
  }
});

// Dynamic route handler for two-segment subcategories (parent/subcategory)
subCategoriesRouter.get('/:parent/:subcategory', async (c) => {
  const parent = c.req.param('parent');
  const subcategory = c.req.param('subcategory');
  const slug = `${parent}/${subcategory}`;
  
  try {
    // Get category info from database
    const category = await c.env.DB.prepare(`
      SELECT * FROM categories WHERE slug = ?
    `).bind(slug).first();
    
    if (!category) {
      return c.notFound();
    }
    
    // Find parent category for sub-menu display
    let parentCategory = null;
    for (const [key, cat] of Object.entries(categoryStructure)) {
      if (cat.subCategories.some((sub: any) => sub.slug === slug)) {
        parentCategory = cat;
        break;
      }
    }
    
    // Get articles for this category
    const articles = await c.env.DB.prepare(`
      SELECT 
        a.*,
        u.nickname as author_name,
        c.name as category_name
      FROM articles a
      LEFT JOIN users u ON a.author_id = u.user_id
      LEFT JOIN categories c ON a.category_id = c.category_id
      WHERE a.category_id = ?
      ORDER BY a.created_at DESC
      LIMIT 20
    `).bind(category.category_id).all();
    
    return c.html(subCategoryPageTemplate(category.name, slug, articles.results || [], parentCategory));
  } catch (error) {
    console.error('Error loading subcategory:', error);
    return c.html('<div>Error loading page</div>', 500);
  }
});

export default subCategoriesRouter;