/*======================================================
DEEPAK DHATTERWAL
Official Actor Website
======================================================*/

"use strict";

/*==========================================
SELECTORS
==========================================*/

const loader = document.getElementById("loader");

const header = document.getElementById("header");

const progressBar = document.getElementById("scroll-progress");

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");

const backToTop = document.getElementById("backToTop");

/*==========================================
LOADER
==========================================*/

window.addEventListener("load", () => {

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

        loader.style.pointerEvents = "none";

    }, 2500);

});

/*==========================================
HEADER
==========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});

/*==========================================
SCROLL PROGRESS
==========================================*/

window.addEventListener("scroll", () => {

    const scrollTop =

        document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});

/*==========================================
MOBILE MENU
==========================================*/

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});

/*==========================================
MENU AUTO CLOSE
==========================================*/

document

.querySelectorAll(".nav-menu a")

.forEach(link => {

link.addEventListener("click", () => {

navMenu.classList.remove("active");

});

});

/*==========================================
SMOOTH SCROLL
==========================================*/

document

.querySelectorAll('a[href^="#"]')

.forEach(anchor => {

anchor.addEventListener("click", function(e){

const target = document.querySelector(

this.getAttribute("href")

);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*==========================================
BACK TO TOP
==========================================*/

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

backToTop.classList.add("show");

}

else{

backToTop.classList.remove("show");

}

});

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*======================================================
ACTIVE NAVIGATION
======================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/*======================================================
SCROLL REVEAL
======================================================*/

const revealItems = document.querySelectorAll(

".section-title,.about-wrapper,.journey-card,.portfolio-item,.showreel-wrapper,.contact-wrapper,.footer"

);

const revealObserver = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

revealObserver.unobserve(entry.target);

}

});

},

{

threshold:0.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});

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

function openLightbox(index){

currentImage = index;

lightboxImage.src = galleryImages[index].src;

lightbox.classList.add("active");

document.body.style.overflow = "hidden";

}

galleryImages.forEach((img,index)=>{

img.addEventListener("click",()=>{

openLightbox(index);

});

});

function closeLightbox(){

lightbox.classList.remove("active");

document.body.style.overflow = "";

}

closeButton.addEventListener("click",closeLightbox);

function nextImage(){

currentImage++;

if(currentImage>=galleryImages.length){

currentImage=0;

}

lightboxImage.src=galleryImages[currentImage].src;

}

function previousImage(){

currentImage--;

if(currentImage<0){

currentImage=galleryImages.length-1;

}

lightboxImage.src=galleryImages[currentImage].src;

}

nextButton.addEventListener("click",nextImage);

prevButton.addEventListener("click",previousImage);

/*======================================================
KEYBOARD SUPPORT
======================================================*/

document.addEventListener("keydown",(e)=>{

if(!lightbox.classList.contains("active")) return;

if(e.key==="Escape"){

closeLightbox();

}

if(e.key==="ArrowRight"){

nextImage();

}

if(e.key==="ArrowLeft"){

previousImage();

}

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

closeLightbox();

}

});

/*======================================================
SHOWREEL VIDEO POPUP
======================================================*/

const playButton = document.getElementById("playVideo");
const videoPopup = document.getElementById("videoPopup");
const videoFrame = document.getElementById("videoFrame");
const closeVideo = document.getElementById("closeVideo");

/*
Replace YOUR_YOUTUBE_VIDEO_ID
with your official showreel ID
*/

const showreelURL =
"https://www.youtube.com/embed/YOUR_YOUTUBE_VIDEO_ID?autoplay=1";

if(playButton){

playButton.addEventListener("click",()=>{

videoPopup.classList.add("active");

videoFrame.src = showreelURL;

document.body.style.overflow="hidden";

});

}

function closeVideoPopup(){

videoPopup.classList.remove("active");

videoFrame.src="";

document.body.style.overflow="";

}

closeVideo.addEventListener("click",closeVideoPopup);

videoPopup.addEventListener("click",(e)=>{

if(e.target===videoPopup){

closeVideoPopup();

}

});

/*======================================================
EMAILJS
======================================================*/

emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY"
});

const form = document.getElementById("contactForm");
const submitBtn = document.getElementById("submitBtn");
const btnText = document.getElementById("btnText");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", function(e){

    e.preventDefault();

    submitBtn.disabled = true;
    btnText.textContent = "Sending...";

    emailjs.sendForm(

        "YOUR_SERVICE_ID",

        "YOUR_TEMPLATE_ID",

        this

    ).then(function(){

        formStatus.textContent = "✅ Your inquiry has been sent successfully.";

        formStatus.style.color = "#4CAF50";

        btnText.textContent = "Message Sent";

        form.reset();

        setTimeout(()=>{

            btnText.textContent = "Send Inquiry";
            submitBtn.disabled = false;
            formStatus.textContent = "";

        },3000);

    }).catch(function(error){

        console.error(error);

        formStatus.textContent = "❌ Failed to send message. Please try again.";

        formStatus.style.color = "#ff4d4d";

        btnText.textContent = "Send Inquiry";

        submitBtn.disabled = false;

    });

});

/*======================================================
IMAGE LAZY ANIMATION
======================================================*/

const images=document.querySelectorAll("img");

const imageObserver=

new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

imageObserver.unobserve(entry.target);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});

/*======================================================
PERFORMANCE
======================================================*/

window.addEventListener("pageshow",()=>{

document.body.classList.add("page-loaded");

});

/*======================================================
COPYRIGHT YEAR
======================================================*/

const year=document.getElementById("year");

if(year){

year.textContent=

new Date().getFullYear();

}

/*======================================================
CONSOLE BRANDING
======================================================*/

console.clear();

console.log(

"%cDeepak Dhatterwal",

"font-size:22px;color:#c8a45d;font-weight:bold"

);

console.log(

"%cOfficial Actor Website",

"font-size:14px;color:white"

);

