// =============================================================================
// main.js — vanilla JS, no jQuery dependency
// =============================================================================

// Go-top button
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
