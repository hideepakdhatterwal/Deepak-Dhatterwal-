// ==============================
// Loader
// ==============================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

        setTimeout(() => {

            loader.style.display = "none";

        }, 600);

    }, 1800);

});

// ==============================
// Typing Effect
// ==============================

const words = [
    "Actor",
    "Performer",
    "Storyteller",
    "Model"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);
        if (charIndex > current.length) {
            deleting = true;
            setTimeout(typeEffect, 1200);
            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// ==============================
// Scroll Progress Bar
// ==============================

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});

// ==========================================
// Animated Counter
// ==========================================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const counterSection = document.querySelector(".stats-section");

if(counterSection){

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

});

observer.observe(counterSection);

}


// ==========================================
// Scroll Reveal Animation
// ==========================================

const revealElements = document.querySelectorAll(

".casting-card,.film-card,.gallery-item,.character-card,.timeline-content,.quote-box,.about-content,.about-image,.contact-item,.social-card"

);

function reveal(){

const trigger = window.innerHeight - 120;

revealElements.forEach(el=>{

const top = el.getBoundingClientRect().top;

if(top < trigger){

el.style.opacity="1";

el.style.transform="translateY(0)";

}

});

}

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(50px)";

el.style.transition=".8s ease";

});

window.addEventListener("scroll",reveal);

reveal();


// ==========================================
// Navbar Background
// ==========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.style.background="rgba(0,0,0,.9)";

navbar.style.padding="14px 8%";

}else{

navbar.style.background="rgba(0,0,0,.65)";

navbar.style.padding="18px 8%";

}

});


// ==========================================
// Active Navigation
// ==========================================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.clientHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// ==========================================
// Smooth Scroll
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

  

});
  // ==========================================
// Back To Top Button
// ==========================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{

position:"fixed",

right:"25px",

bottom:"25px",

width:"55px",

height:"55px",

borderRadius:"50%",

border:"none",

cursor:"pointer",

background:"#D4AF37",

color:"#000",

fontSize:"24px",

fontWeight:"bold",

display:"none",

zIndex:"999",

boxShadow:"0 10px 30px rgba(0,0,0,.4)",

transition:".3s"

});

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==========================================
// Gallery Lightbox
// ==========================================

const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.createElement("div");

lightbox.id="lightbox";

Object.assign(lightbox.style,{

position:"fixed",

top:"0",

left:"0",

width:"100%",

height:"100%",

background:"rgba(0,0,0,.95)",

display:"none",

justifyContent:"center",

alignItems:"center",

zIndex:"99999",

cursor:"zoom-out"

});

const lightImg=document.createElement("img");

lightImg.style.maxWidth="90%";

lightImg.style.maxHeight="90%";

lightImg.style.borderRadius="15px";

lightbox.appendChild(lightImg);

document.body.appendChild(lightbox);

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightImg.src=img.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});


// ==========================================
// Floating Mouse Glow
// ==========================================

const glow=document.createElement("div");

glow.id="cursorGlow";

Object.assign(glow.style,{

position:"fixed",

width:"180px",

height:"180px",

borderRadius:"50%",

background:"radial-gradient(circle, rgba(212,175,55,.25), transparent 70%)",

pointerEvents:"none",

transform:"translate(-50%,-50%)",

zIndex:"0",

transition:"transform .08s linear"

});

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// ==========================================
// Hero Parallax
// ==========================================

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

let offset=window.pageYOffset;

if(hero){

hero.style.backgroundPositionY=offset*0.4+"px";

}

});


// ==========================================
// Character Card Hover
// ==========================================

const cards=document.querySelectorAll(".character-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=

`radial-gradient(circle at ${x}px ${y}px,
rgba(212,175,55,.18),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.05)";

});

});


// ==========================================
// Console Signature
// ==========================================

console.log("%cDeepak Dhatterwal Official Website",
"color:#D4AF37;font-size:18px;font-weight:bold;");

}

});

});
// ==========================================
// Dynamic Greeting
// ==========================================

const hour = new Date().getHours();

let greeting = "";

if(hour < 12){

    greeting = "Good Morning";

}else if(hour < 18){

    greeting = "Good Afternoon";

}else{

    greeting = "Good Evening";

}

console.log(`${greeting}, Welcome to Deepak Dhatterwal Official Website`);


// ==========================================
// Gallery Filter
// ==========================================

const filterButtons = document.querySelectorAll(".gallery-filter button");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button=>{

button.addEventListener("click",()=>{

filterButtons.forEach(btn=>btn.classList.remove("active"));

button.classList.add("active");

// Future category support

galleryItems.forEach(item=>{

item.style.display="block";

});

});

});


// ==========================================
// Mobile Navigation
// ==========================================

const nav=document.querySelector(".nav-links");

const menu=document.createElement("div");

menu.innerHTML="☰";

menu.id="menuToggle";

document.querySelector(".navbar").appendChild(menu);

Object.assign(menu.style,{

display:"none",

fontSize:"30px",

cursor:"pointer",

color:"#D4AF37"

});

function mobileMenu(){

if(window.innerWidth<=768){

menu.style.display="block";

}else{

menu.style.display="none";

nav.style.display="flex";

}

}

mobileMenu();

window.addEventListener("resize",mobileMenu);

menu.addEventListener("click",()=>{

if(nav.style.display==="flex"){

nav.style.display="none";

}else{

nav.style.display="flex";

nav.style.flexDirection="column";

nav.style.position="absolute";

nav.style.top="80px";

nav.style.left="0";

nav.style.width="100%";

nav.style.background="#000";

nav.style.padding="20px";

}

});


// ==========================================
// Random Acting Quotes
// ==========================================

const quotes=[

"Cinema begins where words end.",

"Truth is the soul of great acting.",

"Every role teaches a new life.",

"Discipline creates unforgettable performances.",

"Dream. Perform. Inspire."

];

const quoteBox=document.querySelector(".quote-box h3");

if(quoteBox){

setInterval(()=>{

const random=Math.floor(Math.random()*quotes.length);

quoteBox.innerHTML='"'+quotes[random]+'"';

},7000);

}


// ==========================================
// Keyboard Shortcuts
// ==========================================

document.addEventListener("keydown",(e)=>{

if(e.key==="Home"){

window.scrollTo({

top:0,

behavior:"smooth"

});

}

});


// ==========================================
// Website Loaded
// ==========================================

window.addEventListener("load",()=>{

console.log("Website Loaded Successfully");

});


// ==========================================
// Future Ready Placeholder
// ==========================================

/*
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';
    }else{
        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';
    }

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

navLinks.classList.remove("active");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

});

});

Future Updates

✔ GSAP Animation

✔ Three.js Background

✔ AI Chat Assistant

✔ Voice Welcome

✔ Live Weather

✔ Dark / Light Theme

✔ Admin Dashboard

✔ CMS Integration

✔ Firebase Contact Form

✔ Analytics

*/
