const myButton=document.getElementById("myButton")
const myimg=document.getElementById("myimg")




myButton.addEventListener("click", (event)=>{

        if (myimg.style.visibility==="hidden"){
            myimg.style.visibility="visible"
            myButton.textContent="Hide"
        }else{
            
    myimg.style.visibility="hidden"
    myButton.textContent="Show"
        }


})