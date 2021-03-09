let layer = document.getElementsByClassName("fade-layer")[0]
layer.addEventListener("click",showMenu)

let button = document.getElementsByClassName("menu-button")[0]
button.addEventListener("click",showMenu)


function showMenu(){
    console.log("hi")
    let menu = document.getElementsByClassName("menu")[0]
    menu.classList.toggle("show")

    let layer = document.getElementsByClassName("fade-layer")[0]
    layer.classList.toggle("visible")
}