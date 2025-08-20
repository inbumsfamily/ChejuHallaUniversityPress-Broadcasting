import { Hono } from 'hono';
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
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    <style>
        .video-card:hover .play-button {
            transform: scale(1.1);
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b sticky top-0 z-50">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <a href="/" class="text-xl font-bold text-blue-900">
                        <i class="fas fa-newspaper mr-2"></i>
                        제주한라대 신문방송사
                    </a>
                </div>
                <nav class="hidden md:flex items-center space-x-4">
                    <a href="/" class="text-gray-700 hover:text-blue-600">홈</a>
                    <a href="/broadcast" class="text-blue-600 font-semibold">방송국</a>
                    <a href="/newspaper" class="text-gray-700 hover:text-blue-600">신문사</a>
                    <a href="/campus" class="text-gray-700 hover:text-blue-600">캠퍼스</a>
                    <a href="/shorts" class="text-gray-700 hover:text-blue-600">쇼츠</a>
                    <a href="/special-report" class="text-gray-700 hover:text-blue-600">기획보도</a>
                    <a href="/jeju-news" class="text-gray-700 hover:text-blue-600">제주소식</a>
                    <a href="/opinion" class="text-gray-700 hover:text-blue-600">오피니언</a>
                    <a href="/essay" class="text-gray-700 hover:text-blue-600">에세이</a>
                </nav>
            </div>
        </div>
    </header>

    <div class="container mx-auto px-4 py-8">
        <!-- Broadcast Header with Video Background Effect -->
        <div class="relative bg-gradient-to-r from-red-600 to-red-800 text-white rounded-lg p-8 mb-8 overflow-hidden">
            <div class="absolute inset-0 opacity-20">
                <div class="absolute inset-0 bg-black"></div>
                <i class="fas fa-broadcast-tower text-white text-[200px] absolute -right-10 -top-10 opacity-20"></i>
            </div>
            <div class="relative z-10">
                <h1 class="text-4xl font-bold mb-2 flex items-center">
                    <i class="fas fa-video mr-3"></i>
                    방송국
                </h1>
                <p class="text-lg opacity-90">제주한라대학교의 생생한 영상 뉴스와 프로그램</p>
            </div>
        </div>
        
        <!-- Main Video Player -->
        <div class="mb-8">
            <div class="bg-black rounded-lg overflow-hidden aspect-video relative group">
                <div class="absolute inset-0 flex items-center justify-center">
                    <button class="play-button bg-red-600 hover:bg-red-700 text-white rounded-full p-6 transition-all">
                        <i class="fas fa-play text-3xl ml-1"></i>
                    </button>
                </div>
                <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                    <h3 class="text-white text-2xl font-bold mb-2">최신 한라뉴스</h3>
                    <p class="text-white opacity-90">2025학년도 신입생 환영 특집 방송</p>
                </div>
            </div>
        </div>
        
        <!-- Broadcasting Categories Grid -->
        <div class="mb-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">방송국 프로그램</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <!-- 방송국소개 -->
                <a href="/broadcast-intro" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-red-500 to-pink-600 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-info-circle text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">방송국소개</h3>
                        <p class="text-sm text-gray-600">우리 방송국을 소개합니다</p>
                    </div>
                </a>
                
                <!-- 한라뉴스 -->
                <a href="/halla-news" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-blue-500 to-cyan-600 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-newspaper text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">한라뉴스</h3>
                        <p class="text-sm text-gray-600">캠퍼스 주요 뉴스</p>
                    </div>
                </a>
                
                <!-- 한라인터뷰 -->
                <a href="/halla-interview" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-purple-500 to-indigo-600 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-microphone text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">한라인터뷰</h3>
                        <p class="text-sm text-gray-600">인물과의 만남</p>
                    </div>
                </a>
                
                <!-- 전공특집 -->
                <a href="/major-special" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-green-500 to-teal-600 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-graduation-cap text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">전공특집</h3>
                        <p class="text-sm text-gray-600">학과별 특별 프로그램</p>
                    </div>
                </a>
                
                <!-- 캠퍼스투어 -->
                <a href="/campus-tour" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-yellow-500 to-orange-600 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-walking text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">캠퍼스투어</h3>
                        <p class="text-sm text-gray-600">캠퍼스 곳곳을 소개</p>
                    </div>
                </a>
                
                <!-- 문화·예술(방송) -->
                <a href="/culture-art-broadcast" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-pink-500 to-rose-600 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-palette text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">문화·예술(방송)</h3>
                        <p class="text-sm text-gray-600">문화예술 프로그램</p>
                    </div>
                </a>
                
                <!-- 라디오·팟캐스트 -->
                <a href="/radio-podcast" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-indigo-500 to-blue-600 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-podcast text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">라디오·팟캐스트</h3>
                        <p class="text-sm text-gray-600">오디오 콘텐츠</p>
                    </div>
                </a>
                
                <!-- 방송국 활동기 -->
                <a href="/broadcast-activities" class="video-card bg-white rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 overflow-hidden group">
                    <div class="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 relative">
                        <div class="absolute inset-0 flex items-center justify-center">
                            <i class="fas fa-users text-white text-4xl group-hover:scale-110 transition-transform"></i>
                        </div>
                    </div>
                    <div class="p-4">
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">방송국 활동기</h3>
                        <p class="text-sm text-gray-600">방송국 활동 소식</p>
                    </div>
                </a>
            </div>
        </div>
        
        <!-- Latest Videos Section -->
        <div class="mt-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-800">최신 방송 콘텐츠</h2>
            <div id="broadcastArticles" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <!-- Videos will be loaded here dynamically -->
                <div class="col-span-3 text-center py-12">
                    <i class="fas fa-spinner fa-spin text-gray-400 text-4xl"></i>
                    <p class="text-gray-500 mt-4">방송 콘텐츠를 불러오는 중...</p>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/axios@1.6.0/dist/axios.min.js"></script>
    <script src="/static/app.js"></script>
    <script>
        // Load broadcast content on page load
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof loadBroadcastContent === 'function') {
                loadBroadcastContent();
            }
        });
    </script>
</body>
</html>
  `);
});

export default broadcastRouter;