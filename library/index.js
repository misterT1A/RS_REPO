console.log("100/100")

// burger menu

const nav = document.getElementById('nav');
const navWrapper = document.getElementById('navWrapper');
const burgerButton = document.getElementById('burgerButton');
const burgerButtonWrapper = document.getElementById('burgerIcon');
const navLinks = document.querySelectorAll('.navLink');

burgerButtonWrapper.addEventListener('click', () => {
    nav.classList.toggle('nav_open');
    navWrapper.classList.toggle('nav_active');
    burgerButton.classList.toggle('burger_close');
})

navWrapper.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav_active')) {
        nav.classList.toggle('nav_open');
        navWrapper.classList.toggle('nav_active');
        burgerButton.classList.toggle('burger_close');
    }
})

navLinks.forEach(elem => {
    elem.addEventListener('click', () => {
        nav.classList.toggle('nav_open');
        navWrapper.classList.toggle('nav_active');
        burgerButton.classList.toggle('burger_close');
    })
})

