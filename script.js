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