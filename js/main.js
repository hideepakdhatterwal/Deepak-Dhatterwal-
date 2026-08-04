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

/* ================= FAVORITE MOVIES TICKER ENGINE ================= */
document.addEventListener('DOMContentLoaded', () => {
  const topMovies100 = [
    // Bollywood Masterpieces (1990-2026)
    "Shershaah (2021)", "3 Idiots (2009)", "Gangs of Wasseypur (2012)", "Dangal (2016)",
    "Rang De Basanti (2006)", "Lagaan (2001)", "Swades (2004)", "Taare Zameen Par (2007)",
    "Rockstar (2011)", "Haider (2014)", "Tumbbad (2018)", "Article 15 (2019)",
    "Gully Boy (2019)", "Drishyam (2015)", "Masaan (2015)", "Kantara (2022)",
    "Animal (2023)", "Sholay (Classic)", "Andhadhun (2018)", "Barfi! (2012)",
    "Zindagi Na Milegi Dobara (2011)", "Chhichhore (2019)", "Stree (2018)", "Uri: The Surgical Strike (2019)",
    "Bhool Bhulaiyaa (2007)", "Jab We Met (2007)", "Dil Chahta Hai (2001)", "Kaminey (2009)",
    "Paan Singh Tomar (2012)", "Special 26 (2013)", "OMG: Oh My God! (2012)", "PK (2014)",
    
    // Hollywood Masterpieces
    "The Shawshank Redemption (1994)", "Inception (2010)", "The Dark Knight (2008)",
    "Interstellar (2014)", "Fight Club (1999)", "Pulp Fiction (1994)", "Gladiator (2000)",
    "The Godfather Part III (1990)", "Forrest Gump (1994)", "The Matrix (1999)",
    "Schindler's List (1993)", "Goodfellas (1990)", "The Silence of the Lambs (1991)",
    "Saving Private Ryan (1998)", "The Departed (2006)", "Whiplash (2014)",
    "Oppenheimer (2023)", "Avatar (2009)", "Titanic (1997)", "The Lord of the Rings (2001)",
    "Parasite (2019)", "Joker (2019)", "Spider-Man: Into the Spider-Verse (2018)",
    "Memento (2000)", "The Prestige (2006)", "Shutter Island (2010)", "Django Unchained (2012)",
    "Bane of Wall Street / Wolf of Wall Street (2013)", "1917 (2019)", "La La Land (2016)",

    // South Indian Masterpieces (Tamil, Telugu, Malayalam, Kannada)
    "Baahubali: The Beginning (2015)", "Baahubali 2: The Conclusion (2017)", "RRR (2022)",
    "K.G.F: Chapter 1 (2018)", "K.G.F: Chapter 2 (2022)", "Pushpa: The Rise (2021)",
    "Kaithi (2019)", "Vikram (2022)", "Jai Bhim (2021)", "Super Deluxe (2019)",
    "96 (2018)", "Asuran (2019)", "Pariyerum Perumal (2018)", "Drishyam (Malayalam - 2013)",
    "Premam (2015)", "Bangalore Days (2014)", "Kumbalangi Nights (2019)", "Manichitrathazhu (1993)",
    "Jersey (Telugu - 2019)", "Arjun Reddy (2017)", "Mahanati (2018)", "Eega (2012)",
    "Pushpa 2: The Rule (2024)", "Kantara: A Legend – Chapter 1 (2025)", "Leo (2023)", "Jailer (2023)",

    // Punjabi Cinematic Gems
    "Carry On Jatta (2012)", "Qismat (2018)", "Angrej (2015)", "Sudan Sarkar / Ardaas (2016)",
    "Lahiye (2021)", "Jatt & Juliet (2012)", "Sufna (2020)", "Master Ji / Chal Jindiye (2023)",
    "Bambukat (2016)", "Nikka Zildjian (2016)", "Masterpiece Special (2026)"
  ];

  const track = document.getElementById('favMoviesTrack');
  if (track) {
    // Function to generate pill items markup
    const generatePills = (arr) => {
      return arr.map((movie, index) => `
        <div class="movie-pill">
          <span class="movie-num">#${index + 1}</span>
          <span class="movie-name">${movie}</span>
          <span class="text-gold">★</span>
        </div>
      `).join('');
    };

    // Duplicate array twice to ensure seamless infinite looping without a blank gap
    track.innerHTML = generatePills(topMovies100) + generatePills(topMovies100);
  }
});

