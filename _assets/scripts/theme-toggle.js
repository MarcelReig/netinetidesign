/*!
 * Theme Toggle Script - Bootstrap 5 Compatible
 * Sigue las convenciones oficiales de Bootstrap 5 para temas
 */

(function() {
  'use strict';

  // ===========================================================================
  // CONFIGURACIÓN Y CONSTANTES
  // ===========================================================================
  
  const STORAGE_KEY = 'theme-preference';
  const THEME_ATTR = 'data-bs-theme';
  const THEMES = {
    LIGHT: 'light',
    DARK: 'dark',
    AUTO: 'auto'
  };

  // ===========================================================================
  // DETECCIÓN DEL TEMA PREFERIDO
  // ===========================================================================
  
  /**
   * Obtiene el tema preferido del sistema
   * @returns {string} 'light' o 'dark'
   */
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches 
      ? THEMES.DARK 
      : THEMES.LIGHT;
  }

  /**
   * Obtiene el tema guardado en localStorage
   * @returns {string|null} tema guardado o null
   */
  function getStoredTheme() {
    return localStorage.getItem(STORAGE_KEY);
  }

  /**
   * Guarda el tema en localStorage
   * @param {string} theme - tema a guardar
   */
  function setStoredTheme(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
  }

  /**
   * Determina qué tema usar basado en preferencias
   * @returns {string} tema a aplicar
   */
  function getPreferredTheme() {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme === THEMES.AUTO ? getSystemTheme() : storedTheme;
    }
    return getSystemTheme();
  }

  // ===========================================================================
  // APLICACIÓN DEL TEMA
  // ===========================================================================
  
  /**
   * Aplica el tema al documento
   * @param {string} theme - tema a aplicar
   */
  function setTheme(theme) {
    if (theme === THEMES.AUTO) {
      theme = getSystemTheme();
    }
    
    document.documentElement.setAttribute(THEME_ATTR, theme);
    
    // Actualizar meta theme-color para móviles
    updateThemeColor(theme);
    
    // Disparar evento personalizado
    document.dispatchEvent(new CustomEvent('themeChanged', {
      detail: { theme: theme }
    }));
  }

  /**
   * Actualiza el meta theme-color para dispositivos móviles
   * @param {string} theme - tema actual
   */
  function updateThemeColor(theme) {
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) {
      const color = theme === THEMES.DARK ? '#212529' : '#ffffff';
      themeColorMeta.setAttribute('content', color);
    }
  }

  /**
   * Cambia al siguiente tema en la secuencia
   */
  function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute(THEME_ATTR) || THEMES.LIGHT;
    const newTheme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    
    setStoredTheme(newTheme);
    setTheme(newTheme);
    
    // Analytics (opcional)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'theme_toggle', {
        'custom_parameter': newTheme
      });
    }
  }

  // ===========================================================================
  // INICIALIZACIÓN
  // ===========================================================================
  
  /**
   * Inicializa el tema al cargar la página
   */
  function initializeTheme() {
    // Aplicar tema inmediatamente para evitar flash
    setTheme(getPreferredTheme());
    
    // Escuchar cambios en las preferencias del sistema
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', function(e) {
        const storedTheme = getStoredTheme();
        if (!storedTheme || storedTheme === THEMES.AUTO) {
          setTheme(getSystemTheme());
        }
      });
  }

  /**
   * Configura los event listeners cuando el DOM esté listo
   */
  function setupEventListeners() {
    // Botón de toggle
    const toggleButton = document.querySelector('.theme-toggle');
    if (toggleButton) {
      toggleButton.addEventListener('click', toggleTheme);
      
      // Mejorar accesibilidad
      toggleButton.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggleTheme();
        }
      });
    }

    // Actualizar tooltips de Bootstrap si están disponibles
    if (typeof bootstrap !== 'undefined' && bootstrap.Tooltip) {
      const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
      tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
      });
    }
  }

  // ===========================================================================
  // AUTO-INICIALIZACIÓN
  // ===========================================================================
  
  // Aplicar tema inmediatamente (antes de que cargue el DOM)
  initializeTheme();

  // Configurar event listeners cuando el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
  } else {
    setupEventListeners();
  }

  // ===========================================================================
  // API PÚBLICA (opcional)
  // ===========================================================================
  
  // Exponer API global para uso desde la consola o otros scripts
  window.ThemeToggle = {
    setTheme: setTheme,
    getTheme: function() {
      return document.documentElement.getAttribute(THEME_ATTR);
    },
    toggle: toggleTheme,
    reset: function() {
      localStorage.removeItem(STORAGE_KEY);
      setTheme(getSystemTheme());
    }
  };

})();
