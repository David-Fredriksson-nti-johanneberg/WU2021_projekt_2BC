let layer = document.querySelector(".fade-layer");
layer.addEventListener("click",showMenu);

let button = document.querySelector(".menu-button");
button.addEventListener("click",showMenu);


function showMenu(){
    console.log("hi")
    let menu = document.querySelector(".menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}