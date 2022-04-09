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
const values=[
    {
        acc:"duongtrphong",
        pass:"vuongditnhau"
    },
    {
        acc:"duongphong",
        pass:"vuongditnhau"
    }
]


const link=document.querySelector(".modal-body a")
link.addEventListener("click",function(e){
    const acc=document.getElementById("tickits-quantity").value
    const pass=document.getElementById("tichkits-emall").value
    values.forEach((item)=>{
        const accMange=item.acc
        const passMange=item.pass
        if(acc===accMange&&pass===passMange){
            e.target.setAttribute("href","admim/admim.html")
        }
        // else{
        //         alert("tài khoản không tồn tại rồi Hào Ngân")
        //     }
    })
})