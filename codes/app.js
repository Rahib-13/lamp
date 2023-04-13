
 function rahib(){
    let on= document.querySelector(".on")
    let off= document.querySelector(".off")
    let body=document.querySelector("body")
    let button= document.querySelector("button")
    if(off.style.display === "none"){
        off.style.display = "block"
        on.style.display = "none"
        button.innerText ="off"
        button.style.backgroundColor = "red"
        body.style.backgroundColor = "black"

        

    } else{
        off.style.display = "none"
        on.style.display = "block"
        button.innerText ="on"
        button.style.backgroundColor = "green"
        body.style.backgroundColor = "white"
    }
 }



 rahib()

