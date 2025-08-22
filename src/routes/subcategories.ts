import { Hono } from 'hono';
import { HeaderComponent } from '../components/header';
import { Footer } from '../components/footer';
import type { CloudflareBindings } from '../types';

const subCategoriesRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Sub-category page template
const subCategoryPageTemplate = (categoryName: string, categorySlug: string, articles: any[]) => `
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
                    <span>${categoryName}</span>
                </nav>
            </div>
            
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

// Dynamic route handler for all subcategories
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
    
    return c.html(subCategoryPageTemplate(category.name, slug, articles.results || []));
  } catch (error) {
    console.error('Error loading subcategory:', error);
    return c.html('<div>Error loading page</div>', 500);
  }
});

export default subCategoriesRouter;