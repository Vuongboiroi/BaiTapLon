const form =document.querySelector(".form")
const addProduct=document.querySelector(".section-center")
form.addEventListener("submit",handleEnter)
function handleEnter(e){
    e.preventDefault()
        const title=e.target.elements["title"].value
        const desc=e.target.elements["desc"].value
        const price=e.target.elements["price"].value
        const linkImg=e.target.elements["linkImg"].value
        if(title==""&&linkImg=="") return
        // const value={title,desc,price,linkImg}
        // console.log(value)
        const templet=`<article class="menu-item">
            <i class="icofont-close close"></i>
            <img src="${linkImg}" alt="menu item" class="photo" />
            <div class="item-info">
            <header>
                <h4>${title}</h4>
                <h4 class="price">$${price}</h4>
            </header>
            <p class="item-text">${desc}</p>
            </div>
        </article>`
    addProduct.insertAdjacentHTML("beforeend",templet)
        e.target.elements["title"].value=""
        e.target.elements["desc"].value=""
        e.target.elements["price"].value=""
        e.target.elements["linkImg"].value=""

    }
document.addEventListener("click",handleClose)
function handleClose(close){
    if(close.target.matches(".close")){
        const itemClose=close.target.parentNode.parentNode
        itemClose.parentNode.removeChild(itemClose)
    }
}