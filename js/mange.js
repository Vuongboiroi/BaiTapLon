const form =document.querySelector(".form")
const addTable=document.querySelector(".table")
form.addEventListener("submit",handleEnter)
function handleEnter(e){
    e.preventDefault()
        const name=e.target.elements["name"].value
        const address=e.target.elements["address"].value
        const number=e.target.elements["number"].value
        if(name==""&&number=="") return
        const templet=`<tr>
            <th>${name}</th>
            <th>${address}</th>
            <th>${number}</th>
            <th><button class="clos">Delete</button></th>
        </tr>`
    addTable.insertAdjacentHTML("beforeend",templet)
    e.target.elements["name"].value=""
    e.target.elements["address"].value=""
    e.target.elements["number"].value=""

    }
document.addEventListener("click",handleClose)
function handleClose(close){
    if(close.target.matches(".clos")){
        const itemClose=close.target.parentNode.parentNode
        itemClose.parentNode.removeChild(itemClose)
    }
}