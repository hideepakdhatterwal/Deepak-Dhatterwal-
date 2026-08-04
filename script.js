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

    // Header scrolled class
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

    // Back to top button
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
  MOBILE MENU (Fixed + Icon Toggle + Outside Close)
==========================================*/
if (menuBtn && navMenu) {
    const icon = menuBtn.querySelector("i");

    // Toggle menu
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        navMenu.classList.toggle("active");
        menuBtn.classList.toggle("open");

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
  SMOOTH SCROLL (All anchor links)
==========================================*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href === "#") return;

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
    ".section-title, .about-wrapper, .journey-card, .credits-card, .portfolio-item, .showreel-wrapper, .contact-wrapper, .footer"
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
  IMAGE LOADED CLASS (for fade-in animation)
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
  YEAR UPDATER (Footer)
==========================================*/
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

/*==========================================
  PAGE INIT
==========================================*/
window.addEventListener("pageshow", () => {
    document.body.classList.add("page-loaded");
});

/*==========================================
  CONSOLE BRANDING
==========================================*/
console.clear();
console.log("%cDeepak Dhatterwal", "font-size: 22px; color: #D4AF37; font-weight: bold;");
console.log("%cOfficial Actor Website", "font-size: 14px; color: #ffffff;");

/* ======================================================
   1. GEETA QUOTES (20 Realistic Quotes with Golden Om)
====================================================== */
const geetaQuotes = [
    "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। (कर्म पर अधिकार है, फल की चिंता मत करो)",
    "परिवर्तन ही इस संसार का शाश्वत नियम है।",
    "मन को शांत करो, सफलता और स्पष्टता अपने आप मिल जाएगी।",
    "मनुष्य अपने विचारों से बनता है, जैसा वह सोचता है वैसा ही बन जाता है।",
    "धैर्य और निष्ठा से किया गया कर्म कभी व्यर्थ नहीं जाता।",
    "जो हुआ अच्छे के लिए हुआ, जो हो रहा है अच्छा हो रहा है।",
    "अपने कर्तव्य का ईमानदारी से पालन करना ही सबसे बड़ा धर्म है।",
    "क्रोध से भ्रम पैदा होता है और भ्रम से बुद्धि का नाश होता है।",
    "संयम और निरंतर अभ्यास से मन की चंचलता को जीता जा सकता है।",
    "भयमुक्त होकर जियो, क्योंकि आत्मा न जन्म लेती है न मरती है।",
    "मनुष्य स्वयं ही अपना सबसे बड़ा मित्र और सबसे बड़ा शत्रु है।",
    "निस्वार्थ भाव से किया गया काम ही वास्तविक आंतरिक शांति देता है।",
    "हर कठिनाई जीवन में एक नई सीख और परीक्षा लेकर आती है।",
    "सफलता में अहंकार मत करो और विफलता में हिम्मत मत हारो।",
    "आत्मज्ञान ही सच्चा प्रकाश है जो अज्ञानता के अंधेरे को मिटाता है।",
    "समय से बड़ा कोई गुरु नहीं और कर्म से बड़ा कोई मार्गदर्शक नहीं।",
    "जो व्यक्ति विपरीत परिस्थितियों में भी स्थिर रहता है वही ज्ञानी है।",
    "अपनी क्षमता पर विश्वास रखो, ईश्वर सदैव कर्मयोगी का साथ देता है।",
    "अत्यधिक इच्छाओं का त्याग ही मन की वास्तविक शांति का प्रारंभ है।",
    "सत्य और धर्म के मार्ग पर चलने वाले की कभी अंतिम पराजय नहीं होती।"
];

// Geeta Ticker Initializer
const geetaTickerEl = document.getElementById("geetaTicker");
if (geetaTickerEl) {
    const formattedGeeta = geetaQuotes.map(quote => 
        `<span class="gold-om">🕉️</span> ${quote} <span class="gold-om">🕉️</span>`
    ).join("&nbsp;&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;&nbsp;");
    
    geetaTickerEl.innerHTML = formattedGeeta;
}


/* ======================================================
   2. ACTING QUOTES (20 Realistic & Cinema Focused)
====================================================== */
const actingQuotes = [
    "Acting is not pretending; it is living truthfully in imaginary situations.",
    "The camera captures truth, not performance—stay honest in front of the lens.",
    "Rejection is just a redirection to the character meant for you.",
    "An actor's greatest tool is deep observation of real life.",
    "Don't just speak the dialogue; feel the situation behind it.",
    "Discipline behind the scenes creates magic on the screen.",
    "Great acting begins exactly where imitation ends.",
    "The audience remembers raw emotions, not just rehearsed lines.",
    "Silence between dialogues often speaks louder than words.",
    "Every character leaves a small piece of itself inside the actor.",
    "Preparation gives you the ultimate freedom to improvise.",
    "A true performance is felt in the gut, not calculated in the head.",
    "Auditions are not tests; they are opportunities to perform.",
    "Patience is as important as passion in an actor's journey.",
    "Your eyes should speak before your lips open.",
    "Leave your ego at the door before you step into the frame.",
    "Acting is a mirror to humanity—reflect it with honesty.",
    "Consistency in daily practice makes art look effortless.",
    "The best actors are always the best listeners on set.",
    "Live every scene as if there is no second take."
];


/* ======================================================
   3. REAL LIFE QUOTES (20 Practical & Motivational)
====================================================== */
const lifeQuotes = [
    "सफलता रातों-रात नहीं मिलती, यह सालों की खामोश मेहनत का परिणाम है।",
    "Stop waiting for the right moment; make the present moment right.",
    "आपकी आज की आदतें ही तय करेंगी कि आपका आने वाला कल कैसा होगा।",
    "Work hard in silence, let your achievement make the noise.",
    "मुसीबतें हर किसी की ज़िंदगी में आती हैं, फर्क सिर्फ आपके नज़रिए से पड़ता है।",
    "Never compare your Chapter 1 with someone else's Chapter 20.",
    "अगर रास्ता कठिन लग रहा है, तो समझ लो कि मंज़िल बहुत खूबसूरत है।",
    "Your only real competition is the person you were yesterday.",
    "सपनों को हकीकत बनाने के लिए सिर्फ सोचना नहीं, कदम उठाना पड़ता है।",
    "Consistency transforms short-term efforts into lifelong successes.",
    "गलतियाँ इस बात का सबूत हैं कि आप लगातार कोशिश कर रहे हैं।",
    "Don't count the days, make every single day count.",
    "उम्मीद दूसरों से नहीं, हमेशा खुद की मेहनत पर रखो।",
    "Hard work beats talent when talent doesn't work hard.",
    "शांति बाहर की दुनिया में नहीं, खुद के मन के भीतर मिलती है।",
    "Focus on steady progress, not on instant perfection.",
    "जो खुद पर भरोसा रखते हैं, उनके रास्ते में कोई रुकावट नहीं टिकती।",
    "Every accomplishment starts with the simple decision to try.",
    "वक्त आपका है, चाहें तो इसे सोना बना लो या सोने में गुजार दो।",
    "Great results take time; stay patient and trust your process."
];


/* ======================================================
   4. BLUR ROTATION LOGIC (Changes every 3.5 Seconds)
====================================================== */
function setupQuoteRotator(elementId, quotesArray) {
    const el = document.getElementById(elementId);
    if (!el) return;

    let index = Math.floor(Math.random() * quotesArray.length);

    function rotate() {
        // Step 1: Blur & Fade Out
        el.style.opacity = "0";
        el.style.filter = "blur(8px)";
        el.style.transform = "translateY(8px)";

        setTimeout(() => {
            // Step 2: Change Content
            el.innerHTML = `❝ ${quotesArray[index]} ❞`;

            // Step 3: Clear Blur & Fade In
            el.style.opacity = "1";
            el.style.filter = "blur(0px)";
            el.style.transform = "translateY(0px)";

            index = (index + 1) % quotesArray.length;
        }, 500); // 0.5s transition time
    }

    rotate(); // Initial load
    setInterval(rotate, 3500); // Rotates every 3.5 seconds
}

// Start Rotators
setupQuoteRotator("actingQuote", actingQuotes);
setupQuoteRotator("lifeQuote", lifeQuotes);
