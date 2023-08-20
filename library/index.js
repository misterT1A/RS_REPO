
// burger menu

const nav = document.getElementById('nav');
const navWrapper = document.getElementById('navWrapper');
const burgerButton = document.getElementById('burgerButton');
const burgerButtonWrapper = document.getElementById('burgerIcon');
const navLinks = document.querySelectorAll('.navLink');
const body = document.getElementById('body');

burgerButtonWrapper.addEventListener('click', () => {
    nav.classList.toggle('nav_open');
    navWrapper.classList.toggle('nav_active');
    burgerButton.classList.toggle('burger_close');
    body.classList.toggle('hidden');
})

navWrapper.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav_active')) {
        nav.classList.toggle('nav_open');
        navWrapper.classList.toggle('nav_active');
        burgerButton.classList.toggle('burger_close');
        body.classList.toggle('hidden');
    }
})

navLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        nav.classList.toggle('nav_open');
        navWrapper.classList.toggle('nav_active');
        burgerButton.classList.toggle('burger_close');
        if (body.classList.contains('hidden')) {
            body.classList.toggle('hidden');
        }
    })
})

//ABOUT SLIDER
const slider = document.querySelector('.slider__inner');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderPrev = document.querySelector('.slider_prev');
const sliderNext = document.querySelector('.slider_next');
const carusel = document.getElementById('carusel');
const caruselItem = document.querySelector('.carousel_item');
// function deleteCaruselIcon() {
//     carusel.lastElementChild.remove();
// }

// function addCaruselIcon() {
//     let cloneItem = caruselItem.cloneNode(true);
//     carusel.append(cloneItem);
// }

// window.addEventListener('resize', (e) => {
//     const width = document.body.clientWidth;
//     if (width < 1024) {
//         if (carusel.children.length == 3) {
//             addCaruselIcon();
//         }
//             deleteCaruselIcon()
        
//     }
// })
// slider.firstElementChild.remove()
