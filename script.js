/*======================================================
  DEEPAK DHATTERWAL
  Official Actor Website - Core Script
======================================================*/

"use strict";

/*==========================================
  SELECTORS & SAFE ELEMENTS
==========================================*/
const loader = document.getElementById("loader");
const header = document.getElementById("header");
const progressBar = document.getElementById("scroll-progress");
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");
const backToTop = document.getElementById("backToTop");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

/*==========================================
  LOADER
==========================================*/
window.addEventListener("load", () => {
    if (loader) {
        setTimeout(() => {
            loader.style.opacity = "0";
            loader.style.visibility = "hidden";
            loader.style.pointerEvents = "none";
        }, 2000);
    }
});

/*==========================================
  HEADER & SCROLL EVENTS (Combined for Performance)
==========================================*/
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    // Header Shadow
    if (header) {
        header.classList.toggle("scrolled", scrollY > 60);
    }

    // Scroll Progress Bar
    if (progressBar) {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        progressBar.style.width = progress + "%";
    }

    // Back to Top Button
    if (backToTop) {
        backToTop.classList.toggle("show", scrollY > 500);
    }

    // Active Navigation Highlighting
    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (currentSection && link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
});

/*==========================================
  MOBILE MENU & SMOOTH SCROLL
==========================================*/
if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        if (navMenu) navMenu.classList.remove("active");

        const targetId = this.getAttribute("href");
        if (targetId.startsWith("#")) {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

if (backToTop) {
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

/*======================================================
  SCROLL REVEAL & LAZY LOADING (Intersection Observer)
======================================================*/
const revealItems = document.querySelectorAll(
    ".section-title, .about-wrapper, .journey-card, .portfolio-item, .showreel-wrapper, .contact-wrapper, .footer"
);

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealItems.forEach(item => revealObserver.observe(item));

// Image Lazy Animation
const images = document.querySelectorAll("img");
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("loaded");
            observer.unobserve(entry.target);
        }
    });
}, { rootMargin: "50px" });

images.forEach(img => imageObserver.observe(img));

/*======================================================
  GALLERY LIGHTBOX
======================================================*/
const galleryImages = document.querySelectorAll(".portfolio-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeButton = document.querySelector(".lightbox-close");
const prevButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");

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
    currentImage = (currentImage + 1) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImage].src;
}

function previousImage() {
    currentImage = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    lightboxImage.src = galleryImages[currentImage].src;
}

galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => openLightbox(index));
});

if (closeButton) closeButton.addEventListener("click", closeLightbox);
if (nextButton) nextButton.addEventListener("click", nextImage);
if (prevButton) prevButton.addEventListener("click", previousImage);

document.addEventListener("keydown", (e) => {
    if (!lightbox || !lightbox.classList.contains("active")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") previousImage();
});

if (lightbox) {
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });
}

/*======================================================
  SHOWREEL VIDEO POPUP
======================================================*/
const playButton = document.getElementById("playVideo");
const videoPopup = document.getElementById("videoPopup");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");

// Replace YOUR_YOUTUBE_VIDEO_ID with your official showreel ID
const showreelURL = "https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID?autoplay=1";

if (playButton && videoPopup && videoFrame) {
    playButton.addEventListener("click", () => {
        videoPopup.classList.add("active");
        videoFrame.src = showreelURL;
        document.body.style.overflow = "hidden";
    });
}

function closeVideoPopup() {
    if (!videoPopup || !videoFrame) return;
    videoPopup.classList.remove("active");
    videoFrame.src = "";
    document.body.style.overflow = "";
}

if (closeVideo) closeVideo.addEventListener("click", closeVideoPopup);
if (videoPopup) {
    videoPopup.addEventListener("click", (e) => {
        if (e.target === videoPopup) closeVideoPopup();
    });
}

/*======================================================
  EMAILJS INTEGRATION
======================================================*/
if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: "YOUR_PUBLIC_KEY" });
}

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const formStatus = document.getElementById("formStatus");

if (form && submitBtn && btnText && formStatus) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        submitBtn.disabled = true;
        btnText.textContent = "Sending...";

        emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
            .then(() => {
                formStatus.textContent = "✅ Your inquiry has been sent successfully.";
                formStatus.style.color = "#4CAF50";
                btnText.textContent = "Message Sent";
                form.reset();

                setTimeout(() => {
                    btnText.textContent = "Send Inquiry";
                    submitBtn.disabled = false;
                    formStatus.textContent = "";
                }, 4000);
            })
            .catch((error) => {
                console.error("EmailJS Error:", error);
                formStatus.textContent = "❌ Failed to send message. Please try again.";
                formStatus.style.color = "#ff4d4d";
                btnText.textContent = "Send Inquiry";
                submitBtn.disabled = false;
            });
    });
}

/*======================================================
  PREMIUM ACTING QUOTES (Smooth Animation)
======================================================*/
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

    // Initial styles for smooth transition
    actingQuoteEl.style.transition = "all 0.5s ease-in-out";

    function changeQuote() {
        actingQuoteEl.style.opacity = "0";
        actingQuoteEl.style.transform = "translateY(10px)";
        actingQuoteEl.style.filter = "blur(4px)";

        setTimeout(() => {
            actingQuoteEl.innerHTML = `❝ ${actingQuotes[quoteIndex]} ❞`;
            actingQuoteEl.style.opacity = "1";
            actingQuoteEl.style.transform = "translateY(0)";
            actingQuoteEl.style.filter = "blur(0px)";

            quoteIndex = (quoteIndex + 1) % actingQuotes.length;
        }, 500);
    }

    changeQuote();
    setInterval(changeQuote, 4000);
}

/*======================================================
  BHAGAVAD GITA QUOTES (Ticker)
======================================================*/
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

/*======================================================
  PAGE INIT & CONSOLE BRANDING
======================================================*/
window.addEventListener("pageshow", () => {
    document.body.classList.add("page-loaded");
});

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

console.clear();
console.log("%cDeepak Dhatterwal", "font-size:22px;color:#c8a45d;font-weight:bold");
console.log("%cOfficial Actor Website", "font-size:14px;color:white");
