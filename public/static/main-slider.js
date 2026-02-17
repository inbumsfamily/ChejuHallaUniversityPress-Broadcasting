(() => {
  const fallbackBannerImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1462536943532-57a629f6cc60?auto=format&fit=crop&w=1920&q=80',
    'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1920&q=80'
  ];

  let bannerData = [];
  let currentSlide = 0;
  let slideInterval;

  function buildThumbnail(article, index) {
    if (article.featured_image_url) return article.featured_image_url;
    if (article.youtube_embed_id) return `https://img.youtube.com/vi/${article.youtube_embed_id}/hqdefault.jpg`;
    return fallbackBannerImages[index % fallbackBannerImages.length];
  }

  async function loadBannerData() {
    try {
      const response = await fetch('/api/articles?limit=10');
      if (!response.ok) throw new Error('failed to load banner articles');
      const data = await response.json();
      const articles = (data.articles || []).slice(0, 10);

      bannerData = articles.map((article, index) => ({
        type: article.youtube_embed_id ? 'youtube' : 'image',
        src: buildThumbnail(article, index),
        videoId: article.youtube_embed_id || null,
        title: article.title,
        subtitle: article.category_name || '제주한라대학교 신문방송사',
        link: `/article/${article.slug}`
      }));

      if (bannerData.length < 10) {
        for (let i = bannerData.length; i < 10; i++) {
          bannerData.push({
            type: 'image',
            src: fallbackBannerImages[i % fallbackBannerImages.length],
            title: `제주한라대학교 신문방송사 배너 ${i + 1}`,
            subtitle: '메인 콘텐츠 미리보기',
            link: '/articles'
          });
        }
      }
    } catch (error) {
      bannerData = fallbackBannerImages.slice(0, 10).map((src, index) => ({
        type: 'image',
        src,
        title: `제주한라대학교 신문방송사 배너 ${index + 1}`,
        subtitle: '메인 콘텐츠 미리보기',
        link: '/articles'
      }));
    }
  }

  function initSlider() {
    const container = document.getElementById('slidesContainer');
    const indicators = document.getElementById('slideIndicators');
    if (!container || !indicators || !bannerData.length) return;

    container.innerHTML = bannerData.map((banner, index) => {
      if (banner.type === 'youtube' && banner.videoId) {
        return `
          <div class="slide absolute inset-0 transition-opacity duration-700 ${index === 0 ? 'opacity-100' : 'opacity-0'}" data-index="${index}">
            <a href="${banner.link}" class="block relative h-full">
              <img src="${banner.src}" alt="${banner.title}" class="w-full h-full object-cover transition-all duration-500 hover-color-image">
              <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button onclick="event.preventDefault(); window.playYouTubeVideo('${banner.videoId}')" class="bg-red-600 hover:bg-red-700 text-white rounded-full w-20 h-20 flex items-center justify-center transition-all transform hover:scale-110">
                  <i class="fas fa-play text-3xl ml-1"></i>
                </button>
              </div>
              <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <h2 class="text-3xl lg:text-4xl font-bold text-white mb-2">${banner.title}</h2>
                <p class="text-lg text-gray-200">${banner.subtitle}</p>
              </div>
            </a>
          </div>
        `;
      }

      return `
        <div class="slide absolute inset-0 transition-opacity duration-700 ${index === 0 ? 'opacity-100' : 'opacity-0'}" data-index="${index}">
          <a href="${banner.link || '#'}" class="block relative h-full">
            <img src="${banner.src}" alt="${banner.title}" class="w-full h-full object-cover transition-all duration-500 hover-color-image">
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <h2 class="text-3xl lg:text-4xl font-bold text-white mb-2">${banner.title}</h2>
              <p class="text-lg text-gray-200">${banner.subtitle}</p>
            </div>
          </a>
        </div>
      `;
    }).join('');

    indicators.innerHTML = bannerData.map((_, index) => `
      <button class="indicator w-3 h-3 rounded-full transition-all ${index === 0 ? 'bg-white w-8' : 'bg-white/50'}" data-index="${index}"></button>
    `).join('');

    indicators.querySelectorAll('.indicator').forEach((btn, idx) => {
      btn.addEventListener('click', () => goToSlide(idx));
    });

    startAutoPlay();
  }

  function goToSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    if (!slides.length) return;

    slides[currentSlide].classList.remove('opacity-100');
    slides[currentSlide].classList.add('opacity-0');
    indicators[currentSlide].classList.remove('bg-white', 'w-8');
    indicators[currentSlide].classList.add('bg-white/50');

    currentSlide = index;
    slides[currentSlide].classList.remove('opacity-0');
    slides[currentSlide].classList.add('opacity-100');
    indicators[currentSlide].classList.remove('bg-white/50');
    indicators[currentSlide].classList.add('bg-white', 'w-8');
  }

  function nextSlideFunc() {
    const nextIndex = (currentSlide + 1) % bannerData.length;
    goToSlide(nextIndex);
  }

  function prevSlideFunc() {
    const prevIndex = (currentSlide - 1 + bannerData.length) % bannerData.length;
    goToSlide(prevIndex);
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideInterval = setInterval(nextSlideFunc, 5000);
  }

  function stopAutoPlay() {
    if (slideInterval) clearInterval(slideInterval);
  }

  window.playYouTubeVideo = function playYouTubeVideo(videoId) {
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/90 flex items-center justify-center z-50';
    modal.innerHTML = `
      <div class="relative w-full max-w-4xl mx-4">
        <button onclick="this.parentElement.parentElement.remove()" class="absolute -top-12 right-0 text-white text-3xl hover:text-gray-300">
          <i class="fas fa-times"></i>
        </button>
        <div class="relative pb-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/${videoId}?autoplay=1"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  };

  document.addEventListener('DOMContentLoaded', async () => {
    await loadBannerData();
    initSlider();

    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    if (prevBtn) prevBtn.addEventListener('click', prevSlideFunc);
    if (nextBtn) nextBtn.addEventListener('click', nextSlideFunc);

    const slider = document.getElementById('heroSlider');
    if (slider) {
      slider.addEventListener('mouseenter', stopAutoPlay);
      slider.addEventListener('mouseleave', startAutoPlay);
    }
  });
})();
