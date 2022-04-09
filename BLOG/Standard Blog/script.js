const headerBgr=document.querySelector(".header-bgr")
window.addEventListener("scroll",handleScroll)
function handleScroll(){
    const heigh=window.pageYOffset
    if(heigh>=200){
        headerBgr.style.backgroundColor="#211e3b"
    }
    else{
        headerBgr.style.background="transparent"
    }
}
const menuToggle=document.querySelector(".menu-toggle")
const menuIcon=document.querySelector(".menu-toggle i")
const menu=document.querySelector(".menu")
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