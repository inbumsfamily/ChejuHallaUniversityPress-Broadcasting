import { defaultSiteMenuConfig } from '../utils/site-config';

const escapedDefaultConfig = JSON.stringify(defaultSiteMenuConfig).replace(/</g, '\\u003c');

export const HeaderComponent = () => {
  return `
  <header class="sticky top-0 z-50 nav-modern" style="background: #1e40af; border-bottom: 1px solid #1e3a8a;">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <a href="/" class="flex flex-col items-start">
          <span id="siteTitleShort" class="text-2xl font-black text-white uppercase tracking-wider">CHEPBS</span>
          <span id="siteTitleLong" class="text-xs text-blue-200 tracking-wide">Cheju Halla Educational Press & Broadcasting Station</span>
        </a>

        <nav id="desktopNav" class="hidden lg:flex items-center space-x-1"></nav>

        <div class="flex items-center gap-2">
          <button id="adminBtn" class="hidden bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm font-semibold">관리자</button>
          <button id="loginBtn" class="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded text-sm font-semibold">
            <i class="fas fa-user mr-1"></i> 로그인
          </button>
          <button id="mobileMenuBtn" class="lg:hidden p-2 text-white hover:text-blue-200">
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </div>

    <div id="mobileNav" class="hidden lg:hidden border-t border-blue-800 bg-blue-900/95"></div>
  </header>

  <script>
    (function initHeaderMenu() {
      const defaultConfig = ${escapedDefaultConfig};

      function escapeHtml(value) {
        return String(value)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;');
      }

      function renderDesktopMenu(items) {
        const nav = document.getElementById('desktopNav');
        if (!nav) return;

        nav.innerHTML = items.map(item => {
          const children = (item.children || []).map(child =>
            '<a href="' + escapeHtml(child.href) + '" class="block text-xs text-gray-700 hover:text-blue-600 py-2 px-4 transition-colors">' + escapeHtml(child.label) + '</a>'
          ).join('');

          if (children) {
            return '<div class="relative group">'
              + '<a href="' + escapeHtml(item.href) + '" class="nav-link text-white hover:text-blue-200 font-bold px-3 py-2">' + escapeHtml(item.label) + '</a>'
              + '<div class="absolute top-full left-0 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300" style="background: rgba(255, 255, 255, 0.98); backdrop-filter: blur(10px); border: 1px solid #1e40af; margin-top: -1px;">'
              + children
              + '</div>'
              + '</div>';
          }

          return '<a href="' + escapeHtml(item.href) + '" class="nav-link text-white hover:text-blue-200 font-bold px-3 py-2">' + escapeHtml(item.label) + '</a>';
        }).join('');
      }

      function renderMobileMenu(items) {
        const mobile = document.getElementById('mobileNav');
        if (!mobile) return;

        mobile.innerHTML = '<div class="p-4 space-y-3">' + items.map(item => {
          const children = (item.children || []).map(child =>
            '<a href="' + escapeHtml(child.href) + '" class="block py-1 text-sm text-blue-100 hover:text-white">- ' + escapeHtml(child.label) + '</a>'
          ).join('');

          return '<div>'
            + '<a href="' + escapeHtml(item.href) + '" class="font-semibold text-white block py-1">' + escapeHtml(item.label) + '</a>'
            + (children ? '<div class="pl-3 space-y-1">' + children + '</div>' : '')
            + '</div>';
        }).join('') + '</div>';
      }

      function applyConfig(config) {
        const normalized = config && Array.isArray(config.menu_items) ? config : defaultConfig;
        const shortEl = document.getElementById('siteTitleShort');
        const longEl = document.getElementById('siteTitleLong');
        if (shortEl) shortEl.textContent = normalized.site_title_short || defaultConfig.site_title_short;
        if (longEl) longEl.textContent = normalized.site_title_long || defaultConfig.site_title_long;
        renderDesktopMenu(normalized.menu_items || defaultConfig.menu_items);
        renderMobileMenu(normalized.menu_items || defaultConfig.menu_items);
      }

      applyConfig(defaultConfig);

      fetch('/api/admin/site-config/public')
        .then(res => res.ok ? res.json() : Promise.reject(new Error('failed to load menu config')))
        .then(data => applyConfig(data.config))
        .catch(() => {});
    })();
  </script>
  `;
};
