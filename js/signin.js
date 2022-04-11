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
        pass:"12345"
    },
    {
        acc:"duongphong",
        pass:"12345"
    },
    {
        acc:"vuongboiroi",
        pass:"12345"
    }
]

const arrAcc=[]
const arrPass=[]
const link=document.querySelector(".modal-body a")
link.addEventListener("click",function(e){
    const acc=document.getElementById("tickits-quantity").value
    const pass=document.getElementById("tichkits-emall").value
    values.forEach((item)=>{
        const accMange=item.acc
        const passMange=item.pass
        arrAcc.push(accMange)
        arrPass.push(passMange)
        const checkAcc=arrAcc.includes(acc)
        const checkPass=arrPass.includes(pass)
        // console.log(checkAcc)
        // console.log(checkPass)
        if(checkAcc===true&&checkPass===true){
            e.target.setAttribute("href","admim/admim.html")
        }
        else if (acc==""&&pass=="") {
            alert("hãy nhập tài khoản")
        } else {
            alert("tài khoản không tồn tại")
        }
    })
})