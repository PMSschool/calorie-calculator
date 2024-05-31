let icon = document.querySelector(".header .links .icon");
let myUl = document.querySelector(".header .links nav ul");
let header = document.querySelector(".header");

 icon.onclick = ()=>{
  myUl.classList.toggle("open");
  icon.classList.toggle("close");
  header.classList.toggle("dar-cy");
 }
