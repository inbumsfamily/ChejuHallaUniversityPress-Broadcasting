import { Hono } from 'hono';
import { HeaderComponent } from '../components/header';
import { Footer } from '../components/footer';
import type { CloudflareBindings } from '../types';

const pagesBroadcastRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Broadcast page template with special layout
const broadcastPageTemplate = (categoryName: string, categorySlug: string, subCategories: { name: string, slug: string }[] = []) => `
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
        
        <!-- Sub-categories Grid -->
        <div class="mb-10">
            <h2 class="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                ${categoryName} 메뉴
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
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
        
        <!-- Featured Content Section -->
        <div class="mt-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                최신 기사
            </h2>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <!-- Left: Featured Content (2/3 width) -->
                <div class="lg:col-span-2">
                    <div id="featuredArticle" class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <!-- Featured article will be loaded here -->
                        <div class="p-12 text-center">
                            <i class="fas fa-spinner fa-spin text-4xl text-gray-400 mb-4"></i>
                            <p class="text-gray-500">콘텐츠를 불러오는 중...</p>
                        </div>
                    </div>
                </div>
                
                <!-- Right: Article List (1/3 width) -->
                <div class="lg:col-span-1">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div id="articlesList" class="divide-y divide-gray-100">
                            <!-- Articles will be loaded here -->
                            <div class="p-6 text-center">
                                <i class="fas fa-spinner fa-spin text-2xl text-gray-400"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        <div class="mt-8 flex gap-4">
            <a href="/" class="inline-block text-white px-6 py-2 rounded-lg transition-colors" style="background-color: #1e40af;" onmouseover="this.style.backgroundColor='#1e3a8a'" onmouseout="this.style.backgroundColor='#1e40af'">
                <i class="fas fa-home mr-2"></i>
                메인으로 돌아가기
            </a>
            <a href="/broadcast" class="inline-block text-white px-6 py-2 rounded-lg transition-colors" style="background-color: #22c55e;" onmouseover="this.style.backgroundColor='#16a34a'" onmouseout="this.style.backgroundColor='#22c55e'">
                <i class="fas fa-list mr-2"></i>
                전체 기사 보기
            </a>
        </div>
    </div>
        
    ${Footer()}
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
    <script>
        // Load articles for broadcast category
        async function loadCategoryArticles() {
            try {
                const response = await axios.get('/api/articles?category=${categorySlug}&limit=10');
                const articles = response.data.articles;
                
                if (articles && articles.length > 0) {
                    const featuredArticle = articles[0];
                    const listArticles = articles.slice(1, 5);
                    
                    // Load featured article (left side - big)
                    const featuredDiv = document.getElementById('featuredArticle');
                    if (featuredArticle) {
                        featuredDiv.innerHTML = \`
                            \${featuredArticle.featured_image_url ? \`
                                <img src="\${featuredArticle.featured_image_url}" alt="\${featuredArticle.title}" 
                                     class="w-full h-80 object-cover">
                            \` : \`
                                <div class="w-full h-80 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <i class="fas fa-video text-blue-400 text-6xl"></i>
                                </div>
                            \`}
                            <div class="p-6">
                                <h2 class="text-2xl font-bold text-gray-900 mb-3">
                                    <a href="/article/\${featuredArticle.slug}" class="hover:text-blue-600">
                                        \${featuredArticle.title}
                                    </a>
                                </h2>
                                <p class="text-gray-600 mb-4 leading-relaxed">
                                    \${featuredArticle.content.substring(0, 250)}...
                                </p>
                                <div class="flex justify-between items-center text-sm text-gray-500">
                                    <span>\${featuredArticle.author_name || '편집부'}</span>
                                    <span>\${new Date(featuredArticle.created_at).toLocaleDateString('ko-KR')}</span>
                                </div>
                            </div>
                        \`;
                    }
                    
                    // Load article list (right side)
                    const articlesList = document.getElementById('articlesList');
                    if (listArticles && listArticles.length > 0) {
                        articlesList.innerHTML = listArticles.map(article => \`
                            <a href="/article/\${article.slug}" class="block p-4 hover:bg-gray-50 transition-colors">
                                <div class="flex gap-3">
                                    \${article.featured_image_url ? \`
                                        <img src="\${article.featured_image_url}" alt="\${article.title}" 
                                             class="w-20 h-20 object-cover rounded flex-shrink-0">
                                    \` : \`
                                        <div class="w-20 h-20 bg-gray-100 rounded flex items-center justify-center flex-shrink-0">
                                            <i class="fas fa-newspaper text-gray-400"></i>
                                        </div>
                                    \`}
                                    <div class="flex-1 min-w-0">
                                        <h4 class="text-sm font-bold text-gray-900 mb-1 line-clamp-2 hover:text-blue-600">
                                            \${article.title}
                                        </h4>
                                        <p class="text-xs text-gray-600 line-clamp-2 mb-1">
                                            \${article.content.substring(0, 80)}...
                                        </p>
                                        <p class="text-xs text-gray-500">
                                            \${new Date(article.created_at).toLocaleDateString('ko-KR')}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        \`).join('');
                    } else {
                        articlesList.innerHTML = '<p class="text-gray-500 text-sm text-center p-6">등록된 기사가 없습니다.</p>';
                    }
                } else {
                    document.getElementById('featuredArticle').innerHTML = \`
                        <div class="p-12 text-center">
                            <i class="fas fa-inbox text-gray-300 text-6xl mb-4"></i>
                            <p class="text-gray-500 text-lg">아직 등록된 컨텐츠가 없습니다.</p>
                        </div>
                    \`;
                    document.getElementById('articlesList').innerHTML = '<p class="text-gray-500 text-sm text-center p-6">등록된 기사가 없습니다.</p>';
                }
            } catch (error) {
                console.error('Failed to load articles:', error);
                document.getElementById('featuredArticle').innerHTML = '<p class="text-center text-red-400 py-8">기사를 불러오는 중 오류가 발생했습니다.</p>';
                document.getElementById('articlesList').innerHTML = '<p class="text-center text-red-400 p-6">기사를 불러오는 중 오류가 발생했습니다.</p>';
            }
        }
        
        loadCategoryArticles();
    </script>
</body>
</html>
`;

// 방송국 routes
pagesBroadcastRouter.get('/broadcast', (c) => {
  return c.html(broadcastPageTemplate('방송국', 'broadcast', [
    { name: '방송국소개', slug: 'broadcast-intro' },
    { name: '연혁·편성안내', slug: 'broadcast-history' },
    { name: '조직도·만드는 사람들', slug: 'broadcast-organization' },
    { name: 'PD모집·공지', slug: 'broadcast-recruit' },
    { name: 'VOD·아카이브', slug: 'broadcast-vod' },
    { name: '방송국 활동기', slug: 'broadcast-activities' }
  ]));
});

export default pagesBroadcastRouter;