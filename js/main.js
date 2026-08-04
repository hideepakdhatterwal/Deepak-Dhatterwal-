/* Main Initialization */
document.addEventListener('DOMContentLoaded', () => {
  // Update Footer Year Dynamically
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Safe AOS Animation Init
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 700,
      once: true,
      offset: 40,
      disable: window.innerWidth < 768
    });
  }

  console.log('Deepak Dhatterwal Portfolio Ready.');
});
