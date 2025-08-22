import { Hono } from 'hono';
import { HeaderComponent } from '../components/header';
import { Footer } from '../components/footer';
import type { CloudflareBindings } from '../types';

const broadcastRouter = new Hono<{ Bindings: CloudflareBindings }>();

// Special broadcast page with video focus
broadcastRouter.get('/broadcast', (c) => {
  return c.html(`
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>방송국 - 제주한라대학교 신문방송사</title>
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
        <!-- Category Header Banner -->
        <div class="rounded-xl p-10 mb-10 shadow-lg" style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);">
            <h1 class="text-5xl font-black mb-3 text-white">
                방송국
            </h1>
            <p class="text-xl text-white/90">제주한라대학교의 생생한 영상 뉴스와 프로그램</p>
        </div>
        
        <!-- Broadcasting Categories Cards -->
        <div class="mb-10">
            <h2 class="text-2xl font-bold mb-8 text-gray-800 flex items-center">
                <span class="w-1 h-8 bg-blue-600 mr-3"></span>
                방송국 메뉴
            </h2>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
                <a href="/broadcast/방송국소개" class="card-hover bg-white rounded-lg p-5 block shadow-sm border border-gray-100">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                            <i class="fas fa-info-circle text-white text-lg"></i>
                        </div>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-2 text-center">방송국소개</h3>
                    <div class="flex items-center justify-center text-blue-600">
                        <span class="text-xs">콘텐츠 보기</span>
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </div>
                </a>
                
                <a href="/broadcast/연혁·편성안내" class="card-hover bg-white rounded-lg p-5 block shadow-sm border border-gray-100">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                            <i class="fas fa-history text-white text-lg"></i>
                        </div>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-2 text-center">연혁·편성안내</h3>
                    <div class="flex items-center justify-center text-blue-600">
                        <span class="text-xs">콘텐츠 보기</span>
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </div>
                </a>
                
                <a href="/broadcast/조직도·만드는 사람들" class="card-hover bg-white rounded-lg p-5 block shadow-sm border border-gray-100">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                            <i class="fas fa-users text-white text-lg"></i>
                        </div>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-2 text-center">조직도·만드는 사람들</h3>
                    <div class="flex items-center justify-center text-blue-600">
                        <span class="text-xs">콘텐츠 보기</span>
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </div>
                </a>
                
                <a href="/broadcast/PD모집·공지" class="card-hover bg-white rounded-lg p-5 block shadow-sm border border-gray-100">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                            <i class="fas fa-bullhorn text-white text-lg"></i>
                        </div>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-2 text-center">PD모집·공지</h3>
                    <div class="flex items-center justify-center text-blue-600">
                        <span class="text-xs">콘텐츠 보기</span>
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </div>
                </a>
                
                <a href="/broadcast/VOD·아카이브" class="card-hover bg-white rounded-lg p-5 block shadow-sm border border-gray-100">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                            <i class="fas fa-video text-white text-lg"></i>
                        </div>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-2 text-center">VOD·아카이브</h3>
                    <div class="flex items-center justify-center text-blue-600">
                        <span class="text-xs">콘텐츠 보기</span>
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </div>
                </a>
                
                <a href="/broadcast/방송국 활동기" class="card-hover bg-white rounded-lg p-5 block shadow-sm border border-gray-100">
                    <div class="flex items-center justify-center mb-4">
                        <div class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 shadow">
                            <i class="fas fa-users text-white text-lg"></i>
                        </div>
                    </div>
                    <h3 class="text-base font-bold text-gray-900 mb-2 text-center">방송국 활동기</h3>
                    <div class="flex items-center justify-center text-blue-600">
                        <span class="text-xs">콘텐츠 보기</span>
                        <i class="fas fa-arrow-right ml-1 text-xs"></i>
                    </div>
                </a>
            </div>
        </div>
        
        <!-- Main Video Player Section -->
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">
                <i class="fas fa-video mr-2" style="color: #1e40af;"></i>
                최신 방송 콘텐츠
            </h2>
            <div class="bg-gray-100 rounded-lg overflow-hidden aspect-video relative group">
                <div class="absolute inset-0 flex items-center justify-center">
                    <button class="play-button text-white rounded-full p-6 transition-all" style="background-color: #1e40af;" onmouseover="this.style.backgroundColor='#1e3a8a'" onmouseout="this.style.backgroundColor='#1e40af'">
                        <i class="fas fa-play text-3xl ml-1"></i>
                    </button>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 class="text-white text-2xl font-bold mb-2">최신 한라뉴스</h3>
                    <p class="text-white opacity-90">2025학년도 신입생 환영 특집 방송</p>
                </div>
            </div>
        </div>
        
        <!-- Recent Broadcast Articles -->
        <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h2 class="text-xl font-semibold mb-4 text-gray-900">최신 방송 기사</h2>
            <div id="broadcastArticlesList" class="grid grid-cols-1 lg:grid-cols-2 gap-6">
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

<script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
<script src="/static/app.js"></script>
<script>
    // Load broadcast articles
    async function loadBroadcastArticles() {
        try {
            const response = await axios.get('/api/articles?category=broadcast&limit=6');
            const container = document.getElementById('broadcastArticlesList');
            
            if (response.data.articles && response.data.articles.length > 0) {
                container.innerHTML = response.data.articles.map(article => \`
                    <article class="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-300 cursor-pointer" onclick="window.location.href='/article/\${article.slug}'">
                        <div class="flex justify-between items-start mb-3">
                            <span class="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">\${article.category_name}</span>
                            <span class="text-xs text-gray-500"><i class="fas fa-eye mr-1"></i>\${article.view_count}</span>
                        </div>
                        <h3 class="text-lg font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">\${article.title}</h3>
                        <p class="text-sm text-gray-600 mb-3 line-clamp-2">\${article.content ? article.content.substring(0, 100) + '...' : ''}</p>
                        <div class="flex items-center justify-between text-xs text-gray-500">
                            <span><i class="fas fa-user mr-1"></i>\${article.author_name}</span>
                            <span>\${new Date(article.created_at).toLocaleDateString('ko-KR')}</span>
                        </div>
                    </article>
                \`).join('');
            } else {
                container.innerHTML = '<div class="col-span-full text-center py-8 text-gray-500">아직 등록된 방송 기사가 없습니다.</div>';
            }
        } catch (error) {
            console.error('Failed to load broadcast articles:', error);
        }
    }
    
    // Load articles on page load
    document.addEventListener('DOMContentLoaded', loadBroadcastArticles);
</script>
</body>
</html>
  `);
});

export default broadcastRouter;