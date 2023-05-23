const menu = document.querySelector('.toggle__menu');
const headernav = document.querySelector('.header__nav');



menu.addEventListener("click", () =>{
    menu.classList.toggle("open");
    headernav.classList.toggle("open");
    
})