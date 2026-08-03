/*======================================================
  DEEPAK DHATTERWAL
  Official Actor Website - Core Script (Updated)
======================================================*/

"use strict";

/*==========================================
  SELECTORS (Safe)
==========================================*/
const header      = document.getElementById("header");
const progressBar = document.getElementById("scroll-progress");
const menuBtn     = document.querySelector(".menu-btn");
const navMenu     = document.querySelector(".nav-menu");
const backToTop   = document.getElementById("backToTop");
const sections    = document.querySelectorAll("section[id]");
const navLinks    = document.querySelectorAll(".nav-menu a");

/*==========================================
  HEADER + SCROLL PROGRESS + ACTIVE NAV
==========================================*/
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Header scrolled state
    if (header) {
        header.classList.toggle("scrolled", scrollY > 60);
    }

    // Progress bar
    if (progressBar) {
        const scrollTop    = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress     = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = progress + "%";
    }

    // Back to top
    if (backToTop) {
        backToTop.classList.toggle("show", scrollY > 500);
    }

    // Active navigation highlighting
    let current = "";
    sections.forEach(section => {
        const sectionTop    = section.offsetTop - 140;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (current && link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/*==========================================
  MOBILE MENU (Fixed + Icon Toggle)
==========================================*/
if (menuBtn && navMenu) {
    const icon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("active");
        menuBtn.classList.toggle("open");

        // Icon change
        if (icon) {
            if (navMenu.classList.contains("active")) {
                icon.classList.remove("ri-menu-3-line");
                icon.classList.add("ri-close-line");
            } else {
                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-3-line");
            }
        }
    });

    // Close menu when any nav link is clicked
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuBtn.classList.remove("open");
            if (icon) {
                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-3-line");
            }
        });
    });

    // Close menu on outside click
    document.addEventListener("click", (e) => {
        if (!navMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            navMenu.classList.remove("active");
            menuBtn.classList.remove("open");
            if (icon) {
                icon.classList.remove("ri-close-line");
                icon.classList.add("ri-menu-3-line");
            }
        }
    });
}

/*==========================================
  SMOOTH SCROLL (for all # links)
==========================================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href === "#" || href === "") return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

/*==========================================
  BACK TO TOP
==========================================*/
if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/*==========================================
  SCROLL REVEAL (Intersection Observer)
==========================================*/
const revealItems = document.querySelectorAll(
    ".section-title, .about-wrapper, .journey-card, .portfolio-item, .showreel-wrapper, .contact-wrapper, .footer"
);

if (revealItems.length > 0) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach(item => revealObserver.observe(item));
}

/*==========================================
  IMAGE LOADED CLASS (for fade-in)
==========================================*/
const images = document.querySelectorAll("img");
if (images.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("loaded");
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: "60px" });

    images.forEach(img => imageObserver.observe(img));
}

/*==========================================
  GALLERY LIGHTBOX (Optional - only if HTML has it)
==========================================*/
const galleryImages  = document.querySelectorAll(".portfolio-item img");
const lightbox       = document.getElementById("lightbox");
const lightboxImage  = document.getElementById("lightboxImage");
const closeButton    = document.querySelector(".lightbox-close");
const prevButton     = document.querySelector(".lightbox-prev");
const nextButton     = document.querySelector(".lightbox-next");

let currentImage = 0;

function openLightbox(index) {
    if (!lightbox || !lightboxImage) return;
    currentImage = index;
    lightboxImage.src = galleryImages[index].src;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
}

function nextImage() {
    if (!galleryImages.length) return;
    currentImage = (currentImage + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImage].src;
}

function previousImage() {
    if (!galleryImages.length) return;
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImage].src;
}

if (galleryImages.length > 0) {
    galleryImages.forEach((img, index) => {
        img.style.cursor = "pointer";
        img.addEventListener("click", () => openLightbox(index));
    });
}

if (closeButton) closeButton.addEventListener("click", closeLightbox);
if (nextButton)  nextButton.addEventListener("click", nextImage);
if (prevButton)  prevButton.addEventListener("click", previousImage);

document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape")     closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft")  previousImage();
});

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

/*==========================================
  SHOWREEL VIDEO POPUP
==========================================*/
const playButton  = document.getElementById("playVideo");
const videoPopup  = document.getElementById("videoPopup");
const videoFrame  = document.getElementById("videoFrame");
const closeVideo  = document.getElementById("closeVideo");

// ← Yahan apna YouTube Showreel ID daal dena
const showreelURL = "https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID?autoplay=1";

function closeVideoPopup() {
    if (!videoPopup || !videoFrame) return;
    videoPopup.classList.remove("active");
    videoFrame.src = "";
    document.body.style.overflow = "";
}

if (playButton && videoPopup && videoFrame) {
    playButton.addEventListener("click", () => {
        videoPopup.classList.add("active");
        videoFrame.src = showreelURL;
        document.body.style.overflow = "hidden";
    });
}

if (closeVideo) closeVideo.addEventListener("click", closeVideoPopup);

if (videoPopup) {
    videoPopup.addEventListener("click", (e) => {
        if (e.target === videoPopup) closeVideoPopup();
    });
}

/*==========================================
  ACTING QUOTES (Smooth Fade)
==========================================*/
const actingQuotes = [
    "An actor never pretends; he lives the truth of another soul.",
    "The eyes reveal what words cannot express.",
    "Every audition is another step toward your destiny.",
    "Discipline is the silent partner of every great performance.",
    "The camera captures honesty, not exaggeration.",
    "A great actor first becomes a great observer.",
    "Real acting begins where imitation ends.",
    "The audience remembers emotions, not dialogues.",
    "Every rejection prepares you for the perfect opportunity.",
    "Success belongs to those who continue after failure.",
    "The strongest performance comes from genuine emotions.",
    "Confidence grows from preparation, not luck.",
    "Every character teaches a new way of living.",
    "Cinema rewards truth more than perfection.",
    "The smallest expression can create the biggest impact.",
    "Acting is the art of making imagination believable.",
    "Talent opens the door, discipline keeps it open.",
    "Every role changes the actor forever.",
    "A performer never stops learning.",
    "The best actor is the one who never stops observing.",
    "Live every scene as if it is your last.",
    "Great performances are remembered for honesty.",
    "Patience is an actor's greatest strength.",
    "Dream. Believe. Perform.",
    "Your next role may change your entire life."
];

const actingQuoteEl = document.getElementById("actingQuote");

if (actingQuoteEl) {
    let quoteIndex = Math.floor(Math.random() * actingQuotes.length);

    actingQuoteEl.style.transition = "all 0.55s ease";

    function changeQuote() {
        actingQuoteEl.style.opacity = "0";
        actingQuoteEl.style.transform = "translateY(12px)";
        actingQuoteEl.style.filter = "blur(5px)";

        setTimeout(() => {
            actingQuoteEl.innerHTML = `❝ ${actingQuotes[quoteIndex]} ❞`;
            actingQuoteEl.style.opacity = "1";
            actingQuoteEl.style.transform = "translateY(0)";
            actingQuoteEl.style.filter = "blur(0)";
            quoteIndex = (quoteIndex + 1) % actingQuotes.length;
        }, 450);
    }

    changeQuote();
    setInterval(changeQuote, 4200);
}

/*==========================================
  BHAGAVAD GITA TICKER
==========================================*/
const geetaQuotes = [
    "ॐ कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। ॐ",
    "ॐ अपने कर्म पर ध्यान दो, फल स्वयं समय देगा। ॐ",
    "ॐ परिवर्तन ही संसार का शाश्वत नियम है। ॐ",
    "ॐ धैर्य सबसे बड़ी शक्ति है। ॐ",
    "ॐ आत्मा न जन्म लेती है और न कभी मरती है। ॐ",
    "ॐ क्रोध बुद्धि का नाश करता है। ॐ",
    "ॐ मनुष्य स्वयं अपना मित्र भी है और शत्रु भी। ॐ",
    "ॐ संयम ही सच्ची विजय है। ॐ",
    "ॐ सच्चा सुख भीतर की शांति में है। ॐ",
    "ॐ भय वहीं समाप्त होता है जहाँ ज्ञान प्रारम्भ होता है। ॐ",
    "ॐ स्वयं पर विजय सबसे बड़ी विजय है। ॐ",
    "ॐ ईश्वर कर्मयोगी का साथ देता है। ॐ",
    "ॐ जीवन का उद्देश्य केवल सफलता नहीं, धर्मपूर्वक कर्म करना है। ॐ",
    "ॐ जो स्वयं को जीत लेता है वही महान विजेता है। ॐ",
    "ॐ लोभ दुःख का कारण है, संतोष सुख का मार्ग है। ॐ",
    "ॐ सत्य और धर्म का मार्ग कभी व्यर्थ नहीं जाता। ॐ",
    "ॐ मन शांत हो तो संसार भी शांत प्रतीत होता है। ॐ",
    "ॐ ज्ञान सबसे बड़ा धन है। ॐ",
    "ॐ विश्वास से ही शक्ति उत्पन्न होती है। ॐ",
    "ॐ हर कठिनाई एक नई शिक्षा लेकर आती है। ॐ",
    "ॐ निस्वार्थ कर्म ही श्रेष्ठ पूजा है। ॐ",
    "ॐ जो हुआ अच्छा हुआ, जो हो रहा है अच्छा हो रहा है। ॐ",
    "ॐ समय से बड़ा कोई गुरु नहीं। ॐ",
    "ॐ ईश्वर पर विश्वास रखो और कर्म करते रहो। ॐ",
    "ॐ धर्म का साथ कभी मत छोड़ो। ॐ"
];

const geetaTickerEl = document.getElementById("geetaTicker");
if (geetaTickerEl) {
    geetaTickerEl.innerHTML = geetaQuotes.join("&nbsp;&nbsp;&nbsp;&nbsp; ✦ &nbsp;&nbsp;&nbsp;&nbsp;");
}

/*==========================================
  PAGE INIT
==========================================*/
window.addEventListener("pageshow", () => {
    document.body.classList.add("page-loaded");
});

// Optional year updater
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/*==========================================
  CONSOLE BRANDING
==========================================*/
console.clear();
console.log("%cDeepak Dhatterwal", "font-size: 22px; color: #D4AF37; font-weight: bold;");
console.log("%cOfficial Actor Website", "font-size: 14px; color: #ffffff;");