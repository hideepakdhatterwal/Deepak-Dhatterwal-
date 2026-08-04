/* ==========================================================================
   Deepak Dhatterwal - Main Initialization Script (Updated)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Update Footer Year Dynamically
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Safe AOS (Animate On Scroll) Initialization
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      disable: window.innerWidth < 768 // Disable on small screens for better performance
    });
  }

  // 3. Navbar Auto-Close on Mobile View (For all links)
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-nav .btn');
  const navbarCollapse = document.getElementById('navbarNav');

  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show') && typeof bootstrap !== 'undefined') {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
          bsCollapse.hide();
        }
      });
    });
  }

  // 4. Smooth Scrolling Fallback (Optional safety net)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('Deepak Dhatterwal Portfolio Ready & Optimized.');
});
