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

    <!-- Full Width BROADCAST Header with Enhanced Design -->
    <div class="relative w-full h-80 md:h-[500px] bg-cover bg-center bg-no-repeat mb-10 overflow-hidden" 
         style="background-image: linear-gradient(135deg, rgba(30, 64, 175, 0.9) 0%, rgba(59, 130, 246, 0.8) 50%, rgba(99, 102, 241, 0.9) 100%), url('https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80');">
        
        <!-- Background Pattern -->
        <div class="absolute inset-0 opacity-20">
            <div class="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-pulse"></div>
            <div class="absolute top-20 right-20 w-24 h-24 border border-white rounded-full animate-pulse" style="animation-delay: 0.5s"></div>
            <div class="absolute bottom-32 left-1/4 w-16 h-16 border border-white rounded-full animate-pulse" style="animation-delay: 1s"></div>
            <div class="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-white rounded-full animate-pulse" style="animation-delay: 1.5s"></div>
        </div>
        
        <!-- Main Content -->
        <div class="absolute inset-0 flex items-center justify-center">
            <div class="text-center text-white px-4 max-w-5xl">
                <!-- Broadcasting Icons Animation -->
                <div class="mb-8 flex justify-center items-center space-x-8">
                    <i class="fas fa-radio text-4xl md:text-5xl opacity-60 animate-pulse" style="animation-delay: 0s"></i>
                    <i class="fas fa-broadcast-tower text-6xl md:text-8xl drop-shadow-2xl animate-bounce"></i>
                    <i class="fas fa-video text-4xl md:text-5xl opacity-60 animate-pulse" style="animation-delay: 0.3s"></i>
                </div>
                
                <!-- Main Title -->
                <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-6 drop-shadow-2xl tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">
                    BROADCAST
                </h1>
                
                <!-- Subtitle with Korean -->
                <div class="mb-4">
                    <p class="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg">방송국</p>
                    <div class="w-32 h-1 bg-white mx-auto mb-4 rounded-full"></div>
                </div>
                
                <!-- Description -->
                <p class="text-lg md:text-2xl lg:text-3xl opacity-95 drop-shadow-md max-w-4xl font-light leading-relaxed">
                    제주한라대학교 방송국에서 전하는<br class="hidden md:block">
                    <span class="font-semibold text-yellow-200">생생한 뉴스와 다양한 프로그램</span>
                </p>
                
                <!-- Live Indicator -->
                <div class="mt-8 flex justify-center items-center space-x-3">
                    <div class="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                    <span class="text-lg md:text-xl font-semibold">LIVE BROADCASTING</span>
                    <div class="w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
                </div>
                
                <!-- Animated Dots -->
                <div class="mt-8 flex justify-center space-x-2">
                    <div class="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
                    <div class="w-2 h-2 bg-white rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                </div>
            </div>
        </div>
        
        <!-- Enhanced Wave Animation -->
        <div class="absolute bottom-0 left-0 w-full">
            <!-- First Wave -->
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="animate-pulse opacity-30">
                <path d="M0,64L48,69.3C96,75,192,85,288,85.3C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="rgba(255,255,255,0.2)"/>
            </svg>
            <!-- Second Wave -->
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute bottom-0">
                <path d="M0,48L48,53.3C96,59,192,69,288,69.3C384,69,480,59,576,48C672,37,768,27,864,32C960,37,1056,59,1152,64C1248,69,1344,59,1392,53.3L1440,48L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z" fill="white"/>
            </svg>
        </div>
    </div>

    <!-- Full Width Sub-categories Section -->
    <div class="w-full bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 py-16 -mt-16 relative z-10">
        <div class="container mx-auto px-4 max-w-7xl">
            <!-- Section Title -->
            <div class="text-center mb-12">
                <h2 class="text-4xl md:text-5xl font-black text-gray-800 mb-4">
                    <i class="fas fa-broadcast-tower text-blue-600 mr-4"></i>
                    BROADCAST 메뉴
                </h2>
                <div class="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4"></div>
                <p class="text-lg text-gray-600 max-w-2xl mx-auto">제주한라대학교 방송국의 다양한 콘텐츠를 만나보세요</p>
            </div>
            
            <!-- Responsive Sub-categories Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
                ${subCategories.map((sub, index) => {
                    const icons = {
                        'broadcast-intro': 'fas fa-building',
                        'broadcast-history': 'fas fa-history', 
                        'broadcast-organization': 'fas fa-sitemap',
                        'broadcast-recruit': 'fas fa-user-plus',
                        'broadcast-vod': 'fas fa-video',
                        'broadcast-activities': 'fas fa-camera'
                    };
                    const colors = [
                        'from-blue-500 to-blue-600',
                        'from-purple-500 to-purple-600', 
                        'from-green-500 to-green-600',
                        'from-red-500 to-red-600',
                        'from-yellow-500 to-yellow-600',
                        'from-pink-500 to-pink-600'
                    ];
                    return `
                    <a href="/${sub.slug}" class="group relative bg-white rounded-2xl p-6 block shadow-lg border border-gray-100 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                        <!-- Background Gradient Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-br ${colors[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                        
                        <!-- Content -->
                        <div class="relative z-10">
                            <!-- Icon -->
                            <div class="flex items-center justify-center mb-6">
                                <div class="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br ${colors[index]} shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <i class="${icons[sub.slug] || 'fas fa-newspaper'} text-white text-2xl"></i>
                                </div>
                            </div>
                            
                            <!-- Title -->
                            <h3 class="text-lg font-bold text-gray-900 mb-3 text-center group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                                ${sub.name}
                            </h3>
                            
                            <!-- Description -->
                            <div class="flex items-center justify-center text-gray-500 group-hover:text-blue-500 transition-colors duration-300">
                                <span class="text-sm font-medium">콘텐츠 보기</span>
                                <i class="fas fa-arrow-right ml-2 text-sm group-hover:translate-x-1 transition-transform duration-300"></i>
                            </div>
                        </div>
                        
                        <!-- Decorative Corner -->
                        <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${colors[index]} opacity-5 rounded-bl-full"></div>
                    </a>
                `}).join('')}
            </div>
            
            <!-- Bottom Wave Decoration -->
            <div class="mt-16 flex justify-center">
                <div class="flex space-x-2">
                    <div class="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                    <div class="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
                    <div class="w-3 h-3 bg-green-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
                    <div class="w-3 h-3 bg-red-400 rounded-full animate-bounce" style="animation-delay: 0.3s"></div>
                    <div class="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></div>
                    <div class="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style="animation-delay: 0.5s"></div>
                </div>
            </div>
        </div>
    </div>

    <div class="container mx-auto px-4 py-8 max-w-7xl">
        
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
  return c.html(broadcastPageTemplate('BROADCAST', 'broadcast', [
    { name: '방송국소개', slug: 'broadcast-intro' },
    { name: '연혁·편성안내', slug: 'broadcast-history' },
    { name: '조직도·만드는 사람들', slug: 'broadcast-organization' },
    { name: 'PD모집·공지', slug: 'broadcast-recruit' },
    { name: 'VOD·아카이브', slug: 'broadcast-vod' },
    { name: '방송국 활동기', slug: 'broadcast-activities' }
  ]));
});

export default pagesBroadcastRouter;