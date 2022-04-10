const eye=document.querySelectorAll(".eye")
eye.forEach((item)=>item.addEventListener("click",function(e){
        const checkInput=e.target.parentNode.nextElementSibling
        if(e.target.matches(".eye-close")){
            const eyeOpen=e.target.previousElementSibling
            e.target.classList.remove("active")
            eyeOpen.classList.add("active")
            checkInput.setAttribute("type","text")
        }else{
            const eyeClose=e.target.nextElementSibling 
            e.target.classList.remove("active")
            eyeClose.classList.add("active")
            checkInput.setAttribute("type","password")
        }
    
}))