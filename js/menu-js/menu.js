const navToggle = document.querySelector('.menu__container');
const navMenu = document.querySelector('.menu__nav-container');
const iconMenu = document.querySelector('.fa-bars');
const iconX = document.querySelector('.fa-rectangle-xmark');

navToggle.addEventListener('click',()=>{
    console.log('hola');
    navMenu.classList.toggle('nav-visible');
    iconMenu.classList.toggle('invisible');
    iconX.classList.toggle('visible');
})