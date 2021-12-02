const overlay = document.querySelector("#overlay-psicologia");
const popup = document.querySelector("#popup-psicologia");
const detalles = document.querySelector("#detallespage1");
const overlay2 = document.querySelector("#overlay-veterinaria");
const popup2 = document.querySelector("#popup-veterinaria");
const detalles2 = document.querySelector("#detallespage2");
const button = document.querySelector("#button-close");
const button2 = document.querySelector("#button-close2");
const overlay3 = document.querySelector("#overlay-landing");
const popup3 = document.querySelector("#popup-landing");
const detalles3 = document.querySelector("#detallespage3");
const button3 = document.querySelector("#button-close3");
const menu = document.querySelector("#menu");
const btnmenu = document.querySelector("#btnmenu");
const header = document.querySelector("#header");
const circle = document.querySelector(".fa-times-circle");
btnmenu.addEventListener("click",function(){
menu.classList.add("move");
});
circle.addEventListener("click",function(){
menu.classList.remove("move");
});
window.addEventListener("scroll",function(){
header.classList.toggle("abajo",window.scrollY>0);
});

detalles.addEventListener("click",function(){
    overlay.classList.add("visible");
    popup.classList.add("visible");

});

detalles2.addEventListener('click',function(){
    overlay2.classList.add("visible");
    popup2.classList.add("visible");
});
button.addEventListener("click",function(){
    overlay.classList.remove("visible");
    popup.classList.remove("visible");
});
button2.addEventListener("click",function(){
    overlay2.classList.remove("visible");
    popup2.classList.remove("visible");
});
detalles3.addEventListener('click',function(){
    overlay3.classList.add("visible");
    popup3.classList.add("visible");
});
button3.addEventListener("click",function(){
    overlay3.classList.remove("visible");
    popup3.classList.remove("visible");
});