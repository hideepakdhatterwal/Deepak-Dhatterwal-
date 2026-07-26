/*=========================================
OFFICIAL WEBSITE V4
Deepak Dhatterwal
=========================================*/

/* LOADER */

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

}, 600);

});

/*=========================================
TYPING EFFECT
=========================================*/

const words = [

"Actor",

"Performer",

"Storyteller",

"Dreamer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

if(!typing) return;

const current = words[wordIndex];

if(!deleting){

typing.textContent = current.substring(0,charIndex++);

if(charIndex > current.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}

else{

typing.textContent = current.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

wordIndex++;

if(wordIndex >= words.length){

wordIndex = 0;

}

}

}

setTimeout(typeEffect,deleting?60:120);

}

typeEffect();

/*=========================================
NAVBAR SCROLL
=========================================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

navbar.classList.toggle("scrolled",window.scrollY>60);

});

/*=========================================
MOBILE MENU
=========================================*/

const menuBtn = document.querySelector(".menu-btn");

const sidebar = document.querySelector(".mobile-sidebar");

menuBtn.addEventListener("click",()=>{

sidebar.classList.toggle("active");

});

document.querySelectorAll(".mobile-sidebar a").forEach(link=>{

link.addEventListener("click",()=>{

sidebar.classList.remove("active");

});

});

/*=========================================
GALLERY LIGHTBOX
=========================================*/

const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".lightbox-close");

galleryImages.forEach((img)=>{

img.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImg.src=img.src;

lightboxImg.alt=img.alt;

});

});

closeBtn.addEventListener("click",()=>{

lightbox.classList.remove("active");

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("active");

}

});

/*=========================================
SCROLL REVEAL
=========================================*/

const reveals=document.querySelectorAll(".reveal");

function revealSection(){

reveals.forEach(section=>{

const windowHeight=window.innerHeight;

const revealTop=section.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSection);

revealSection();

/*=========================================
BACK TO TOP
=========================================*/

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

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

/*=========================================
CURSOR GLOW
=========================================*/

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*=========================================
BHAGAVAD GITA QUOTES
=========================================*/

const quotes=[

{

text:"कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।",

meaning:"Your duty is to perform your work without worrying about the results."

},

{

text:"उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।",

meaning:"Lift yourself through your own efforts and never lose hope."

},

{

text:"योगः कर्मसु कौशलम्।",

meaning:"Excellence in action is Yoga."

},

{

text:"न हि कल्याणकृत्कश्चिद् दुर्गतिं तात गच्छति।",

meaning:"One who performs good actions never meets a bad end."

},

{

text:"श्रद्धावान् लभते ज्ञानम्।",

meaning:"A person with faith gains true knowledge."

}

];

const quoteText=document.getElementById("quoteText");
const quoteMeaning=document.getElementById("quoteMeaning");

let quoteIndex=0;

function changeQuote(){

if(!quoteText || !quoteMeaning) return;

quoteIndex++;

if(quoteIndex>=quotes.length){

quoteIndex=0;

}

quoteText.style.opacity=0;
quoteMeaning.style.opacity=0;

setTimeout(()=>{

quoteText.textContent=quotes[quoteIndex].text;

quoteMeaning.textContent=quotes[quoteIndex].meaning;

quoteText.style.opacity=1;
quoteMeaning.style.opacity=1;

},400);

}

setInterval(changeQuote,6000);


/*=========================================
SMOOTH SCROLL FOR NAVIGATION
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

/*=========================================
HERO PARALLAX EFFECT
=========================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(hero){

const scroll=window.pageYOffset;

hero.style.backgroundPosition=`center ${scroll*0.45}px`;

}

});

/*=========================================
LIGHTBOX KEYBOARD SUPPORT
=========================================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

lightbox.classList.remove("active");

}

});

/*=========================================
IMAGE HOVER PRELOAD
=========================================*/

galleryImages.forEach(img=>{

const preload=new Image();

preload.src=img.src;

});

/*=========================================
ACTIVE NAVIGATION
=========================================*/

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

const height=section.offsetHeight;

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

/*=========================================
PAGE VISIBILITY
=========================================*/

document.addEventListener("visibilitychange",()=>{

if(document.hidden){

document.title="Come Back • Deepak Dhatterwal";

}else{

document.title="Deepak Dhatterwal | Official Actor Portfolio";

}

});

/*=========================================
BUTTON RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=e.clientX-rect.left-size/2+"px";

ripple.style.top=e.clientY-rect.top-size/2+"px";

ripple.classList.add("ripple");

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});

/*=========================================
CONSOLE MESSAGE
=========================================*/

console.log("%cDeepak Dhatterwal Official Website",
"color:#D4AF37;font-size:20px;font-weight:bold;");

console.log("%cDesigned with ❤️ for a cinematic experience.",
"color:#ffffff;font-size:14px;");



