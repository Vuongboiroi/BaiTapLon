//toggle menu
const menuToggle=document.querySelector(".menu-toggle")
const menuIcon=document.querySelector(".menu-toggle i")
const menu=document.querySelector(".menu")
const headerBgr=document.querySelector(".header-bgr")
menuToggle.addEventListener("click",function(){
    menu.classList.toggle("is-show")
    menuIcon.classList.toggle("icofont-close")
    menuIcon.classList.toggle("icofont-navigation-menu")
})
document.addEventListener("click",function(e) {
    if(!e.target.matches(".menu")&&!e.target.matches(".menu-toggle")){
        menu.classList.remove("is-show")
        menuIcon.classList.remove("icofont-close")
        menuIcon.classList.add("icofont-navigation-menu")
    }
})

// change color

const discoloration=["#03a9f4 ","#009f8b","#fc5b62","#9dc852","#9e7dd3","#e91e63","#9c27b0","#4caf50"]    
const toggle = document.querySelector(".fixed")
const color = document.querySelectorAll(".color")
const inlineColor=document.querySelectorAll(".inline-color")
const textSpan=document.querySelectorAll(".text span")
const borderColor=document.querySelectorAll(".packages-box")
const pullUpColor=document.querySelector(".pull-up")
toggle.addEventListener("click",handleToggle)
function handleToggle(e){
    toggle.classList.toggle("toggle")
    if(e.target.matches(".s1")){
        s1(discoloration[0])
    }
    if(e.target.matches(".s2")){
        s1(discoloration[1])
    }
    if(e.target.matches(".s3")){
        s1(discoloration[2])
    }
    if(e.target.matches(".s4")){
        s1(discoloration[3])
    }
    if(e.target.matches(".s5")){
        s1(discoloration[4])
    }
    if(e.target.matches(".s6")){
        s1(discoloration[5])
    }
    if(e.target.matches(".s7")){
        s1(discoloration[6])
    }
    if(e.target.matches(".s8")){
        s1(discoloration[7])
    }
    function s1(colorer){
        color.forEach((c)=>c.style.backgroundColor=colorer)
        inlineColor.forEach((c)=>c.style.color=colorer)
        textSpan.forEach((c)=>c.style.backgroundColor=colorer)
        zoom.forEach((c)=>c.style.backgroundColor=colorer)
        borderColor.forEach((c)=>c.style.borderColor=colorer)
        pullUpColor.style.backgroundColor=colorer
    }
    
}
//list img

const images = document.querySelectorAll(".laveria-img img");
const zoom = document.querySelectorAll(".zoom");
zoom.forEach((item) => item.addEventListener("click", handleZoomImage));
function handleZoomImage(event) {
    
  const image = event.target.nextElementSibling.getAttribute("src");

  const template = `
   <div class="lightbox">
     <div class="lightbox-content">
       <i class="fa fa-angle-left lightbox-prev"></i>
       <img
         src="${image}"
         alt=""
         class="lightbox-image"
       />
       <i class="fa fa-angle-right lightbox-next"></i>
     </div>
   </div>`;
  document.body.insertAdjacentHTML("beforeend", template);
}
let index = 0;
document.addEventListener("click", function (e) {
    const lightImage = document.querySelector(".lightbox-image");
    if (!lightImage) return;
    let lightSrc = lightImage.getAttribute("src");
    index = [...images].findIndex(
    (item) => item.getAttribute("src") === lightSrc
);
if (e.target.matches(".lightbox")) {
    e.target.parentNode.removeChild(e.target);
} else if (e.target.matches(".lightbox-next")) {
    index = index + 1;
    if (index > images.length - 1) {
        index = 0;
    }
    displayLightImage(lightImage, index);
} else if (e.target.matches(".lightbox-prev")) {
    index = index - 1;
    if (index < 0) {
        index = images.length - 1;
    }
    displayLightImage(lightImage, index);
}
});

function displayLightImage(lightImage, index) {
    const newSrc = [...images][index].getAttribute("src");
    lightImage.setAttribute("src", newSrc);
}

//scroll
window.addEventListener("scroll",handleScroll)
function handleScroll(){
    const heigh=window.pageYOffset
    if(heigh>=200){
        pullUpColor.classList.add("active")
        headerBgr.style.backgroundColor="#211e3b"
    }
    else{
        pullUpColor.classList.remove("active")
        headerBgr.style.background="transparent"
    }
}