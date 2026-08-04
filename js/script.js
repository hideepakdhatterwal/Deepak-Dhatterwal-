/*=========================================
Deepak Dhatterwal Official Website
JavaScript Part 1
=========================================*/

// =============================
// Mobile Menu
// =============================

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.querySelector(".closeMenu");

hamburger.addEventListener("click", () => {

    mobileMenu.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

});



// Close Mobile Menu after clicking any link

document.querySelectorAll("#mobileMenu a").forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.classList.remove("active");

});

});



// =============================
// Sticky Header
// =============================

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

header.style.background="#050505";

header.style.padding="15px 0";

header.style.boxShadow="0 5px 20px rgba(0,0,0,.5)";

}

else{

header.style.background="rgba(0,0,0,.25)";

header.style.padding="22px 0";

header.style.boxShadow="none";

}

});



// =============================
// Scroll Top Button
// =============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="flex";

}

else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};



// =============================
// Loader
// =============================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},1200);

});



// =============================
// Active Navigation
// =============================

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("#menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

if(pageYOffset>=sectionTop){

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
JavaScript Part 2
Gallery + Fade Animation + Counter
=========================================*/

// =============================
// Gallery Lightbox
// =============================

const galleryImages = document.querySelectorAll(".galleryGrid img");

const lightbox = document.createElement("div");
lightbox.id = "lightbox";

const lightImage = document.createElement("img");

const close = document.createElement("span");

close.innerHTML = "&times;";

lightbox.appendChild(close);
lightbox.appendChild(lightImage);

document.body.appendChild(lightbox);

galleryImages.forEach((image)=>{

image.addEventListener("click",()=>{

lightbox.style.display="flex";

lightImage.src=image.src;

});

});

close.addEventListener("click",()=>{

lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});



// =============================
// Fade Up Animation
// =============================

const fadeElements=document.querySelectorAll(".fadeUp");

function revealFade(){

fadeElements.forEach((element)=>{

const top=element.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-100){

element.classList.add("show");

}

});

}

window.addEventListener("scroll",revealFade);

revealFade();



// =============================
// Counter Animation
// =============================

const counters=document.querySelectorAll(".counter");

let counterStarted=false;

function startCounter(){

if(counterStarted) return;

const trigger=document.getElementById("stats");

if(!trigger) return;

const triggerTop=trigger.getBoundingClientRect().top;

if(triggerTop<window.innerHeight-100){

counterStarted=true;

counters.forEach(counter=>{

const target=+counter.dataset.target;

let count=0;

const speed=target/100;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count);

requestAnimationFrame(update);

}else{

counter.innerText=target;

}

};

update();

});

}

}

window.addEventListener("scroll",startCounter);



// =============================
// Hero Fade Effect
// =============================

const hero=document.querySelector(".heroContent");

window.addEventListener("scroll",()=>{

const value=window.scrollY;

if(hero){

hero.style.opacity=1-value/700;

hero.style.transform=`translateY(${value*0.3}px)`;

}

});



// =============================
// Portfolio Hover Animation
// =============================

const portfolioCards=document.querySelectorAll(".portfolioCard");

portfolioCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*=========================================
JavaScript Part 3
Typing Effect + Progress Bar + Mouse Glow
=========================================*/

// =============================
// Typing Animation
// =============================

const heroTitle = document.querySelector(".heroContent h3");

const heroTexts = [

"Indian Actor",

"Performer",

"Storyteller",

"Creative Artist"

];

let heroIndex = 0;

function changeHeroText(){

heroTitle.style.opacity = "0";

setTimeout(()=>{

heroTitle.innerHTML = heroTexts[heroIndex];

heroTitle.style.opacity = "1";

heroIndex++;

if(heroIndex >= heroTexts.length){

heroIndex = 0;

}

},500);

}

setInterval(changeHeroText,3000);



// =============================
// Scroll Progress Bar
// =============================

const progressBar=document.createElement("div");

progressBar.id="progressBar";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const scrollTop=document.documentElement.scrollTop;

const scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const progress=(scrollTop/scrollHeight)*100;

progressBar.style.width=progress+"%";

});



// =============================
// Mouse Glow Effect
// =============================

const glow=document.createElement("div");

glow.id="cursorGlow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



// =============================
// Keyboard Gallery Support
// =============================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

if(lightbox){

lightbox.style.display="none";

}

}

});



// =============================
// Lazy Loading Images
// =============================

const lazyImages=document.querySelectorAll("img");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("loaded");

observer.unobserve(entry.target);

}

});

});

lazyImages.forEach(image=>{

observer.observe(image);

});



// =============================
// Smooth Section Reveal
// =============================

const revealSections=document.querySelectorAll("section");

const revealObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

revealSections.forEach(section=>{

revealObserver.observe(section);

});



// =============================
// Console Signature
// =============================

console.log(

"%cDeepak Dhatterwal Official Website",

"color:#D4AF37;font-size:22px;font-weight:bold"

);

console.log(

"%cDesigned with ❤️ for Deepak Dhatterwal",

"color:white;font-size:14px"

);

