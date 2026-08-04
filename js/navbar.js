/* ==========================================================================
   Deepak Dhatterwal - Optimized Navbar Scroll Handler
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  
  if (!navbar) return; // Exit safety check agar navbar present na ho

  let isScrolled = false;

  window.addEventListener('scroll', () => {
    // RequestAnimationFrame for high performance & butter-smooth scroll detection
    window.requestAnimationFrame(() => {
      if (window.scrollY > 50) {
        if (!isScrolled) {
          navbar.classList.add('scrolled');
          isScrolled = true;
        }
      } else {
        if (isScrolled) {
          navbar.classList.remove('scrolled');
          isScrolled = false;
        }
      }
    });
  });
});
