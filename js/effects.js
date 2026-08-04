/*=========================================
Deepak Dhatterwal Official Website
Effects.js
=========================================*/

// ===========================
// Current Year Auto Update
// ===========================

const year = new Date().getFullYear();

const yearBox = document.getElementById("year");

if(yearBox){

yearBox.innerHTML = year;

}

// ===========================
// Scroll Progress Circle
// ===========================

const progress = document.createElement("div");

progress.id = "progressCircle";

progress.innerHTML = "<span>↑</span>";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

let totalHeight=document.body.scrollHeight-window.innerHeight;

let progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.background=`conic-gradient(#D4AF37 ${progressHeight}%, #222 ${progressHeight}%)`;

if(window.pageYOffset>300){

progress.classList.add("showProgress");

}else{

progress.classList.remove("showProgress");

}

});

progress.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// ===========================
// Smooth Button Ripple
// ===========================

document.querySelectorAll(".btn,.btn2").forEach(btn=>{

btn.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

ripple.style.left=e.clientX-rect.left+"px";

ripple.style.top=e.clientY-rect.top+"px";

ripple.className="ripple";

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},700);

});

});

// ===========================
// Image Hover Glow
// ===========================

document.querySelectorAll(".portfolioCard img").forEach(img=>{

img.addEventListener("mousemove",(e)=>{

img.style.filter="brightness(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.filter="brightness(1)";

});

});

// ===========================
// Console Welcome
// ===========================

console.clear();

console.log("%cDeepak Dhatterwal Official Website","color:#D4AF37;font-size:24px;font-weight:bold");

console.log("%cDesigned with ❤️","color:white;font-size:16px");

