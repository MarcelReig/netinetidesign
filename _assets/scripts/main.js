// =============================================================================
// Theme Toggle — Bootstrap 5 Compatible
// =============================================================================

(function () {
  'use strict';

  const STORAGE_KEY = 'theme-preference';
  const THEME_ATTR = 'data-bs-theme';
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    AUTO: 'auto'
  };

  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  }

  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  function setStoredTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function getPreferredTheme() {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme === THEMES.AUTO ? getSystemTheme() : storedTheme;
    }
    return getSystemTheme();
  }

  function setTheme(theme) {
    if (theme === THEMES.AUTO) {
      theme = getSystemTheme();
    }
    document.documentElement.setAttribute(THEME_ATTR, theme);
    updateThemeColor(theme);
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: theme }
    }));
  }

  function updateThemeColor(theme) {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      const color = theme === THEMES.DARK ? '#212529' : '#ffffff';
      themeColorMeta.setAttribute('content', color);
    }
  }

  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute(THEME_ATTR) || THEMES.LIGHT;
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    setStoredTheme(newTheme);
    setTheme(newTheme);
    if (typeof gtag !== 'undefined') {
      gtag('event', 'theme_toggle', { 'custom_parameter': newTheme });
    }
  }

  function initializeTheme() {
    setTheme(getPreferredTheme());
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', function () {
        const storedTheme = getStoredTheme();
        if (!storedTheme || storedTheme === THEMES.AUTO) {
          setTheme(getSystemTheme());
        }
      });
  }

  function setupEventListeners() {
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
      toggleButton.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }

    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }

  // Apply theme immediately to prevent flash
  initializeTheme();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
  } else {
    setupEventListeners();
  }

  window.ThemeToggle = {
    setTheme: setTheme,
    getTheme: function () {
      return document.documentElement.getAttribute(THEME_ATTR);
    },
    toggle: toggleTheme,
    reset: function () {
      localStorage.removeItem(STORAGE_KEY);
      setTheme(getSystemTheme());
    }
  };
})();

// =============================================================================
// Go-top button
// =============================================================================

(function () {
  const OFFSET = 300;
  const OFFSET_OPACITY = 1200;
  const SCROLL_DURATION = 700;
  const btn = document.querySelector('.cd-top');

  if (!btn) return;

  window.addEventListener('scroll', function () {
    const scrollY = window.scrollY;
    if (scrollY > OFFSET) {
      btn.classList.add('cd-is-visible');
    } else {
      btn.classList.remove('cd-is-visible', 'cd-fade-out');
    }
    if (scrollY > OFFSET_OPACITY) {
      btn.classList.add('cd-fade-out');
    }
  });

  btn.addEventListener('click', function (e) {
    e.preventDefault();
    const start = window.scrollY;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / SCROLL_DURATION, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start * (1 - ease));
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  });
})();
