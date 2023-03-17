let stars = document.getElementById("stars");
let bg = document.getElementById("bg-mtns");
let fg = document.getElementById("foreground-mtns");
let moon = document.getElementById("moon");

window.addEventListener("scroll", ()=>{
let value = window.scrollY;
    stars.style.left = value*.25 + "px";
    moon.style.top = value + "px";
    bg.style.top = value*.5 + "px";

})
