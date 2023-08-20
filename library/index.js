
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
const container = document.getElementById('body');
const slider = document.querySelector('.slider__inner');
const sliderItems = document.querySelectorAll('.slider__item').length;
const sliderPrev = document.querySelector('.slider_prev');
const sliderNext = document.querySelector('.slider_next');
const carusel = document.getElementById('carusel');
const caruselItems = document.querySelectorAll('.carousel_item');
const caruselIcons = document.querySelectorAll('.carousel_icon');


let currentPosition = 0;
let currentMargin = 0;
let slidesPerPage = 0;
let slidesCount = sliderItems - slidesPerPage;
let containerWidth = container.offsetWidth

window.addEventListener('resize', checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

checkWidth();

function checkArrow() {
    if (currentPosition == 0) {
        sliderNext.classList.remove('inactive');
        sliderPrev.classList.add('inactive');
    } else if (currentPosition == slidesCount) {
        sliderPrev.classList.remove('inactive');
        sliderNext.classList.add('inactive')
    } else {
        sliderPrev.classList.remove('inactive');
        sliderNext.classList.remove('inactive');
    }
}

checkArrow();

// function checkCarusel() {

//     caruselItems = document.querySelectorAll('.carousel_item');

//     if (slidesCount - (caruselItems.length - 1) > 1) {
//         caruselIcons.forEach(elem => {
//             if (elem.classList.contains('checked')) {
//                 elem.classList.remove('checked');
//             }
//         })

//         for (let i = 0; i < (slidesCount - (caruselItems.length - 1)); i += 1) {
//             let cloneItem = caruselItems[0].cloneNode(true)

//             carusel.append(cloneItem);

//             caruselItems = document.querySelectorAll('.carousel_item');
//         }
//         caruselIcons[currentPosition].classList.add('checked');

//     } else if (slidesCount > caruselItems.length - 1) {
//         caruselIcons.forEach(elem => {
//             if (elem.classList.contains('checked')) {
//                 elem.classList.remove('checked');
//             }
//         })

//         let cloneItem = caruselItems[1].cloneNode(true);

//         carusel.append(cloneItem);

//         caruselItems = document.querySelectorAll('.carousel_item');

//         caruselIcons[currentPosition].classList.add('checked');

//     } else if (slidesCount < caruselItems.length - 1) {
//         carusel.lastElementChild.remove();
//     }

//     caruselIcons[currentPosition].classList.add('checked');
// }

// checkCarusel();

function setParams(width) {
    if (width < 1025) {
        slidesPerPage = 1;
    } else if (width < 1441) {
        slidesPerPage = 2;
    } else {
        slidesPerPage = 3;
    }

    slidesCount = sliderItems - slidesPerPage;

    caruselItems = document.querySelectorAll('.carousel_item');

    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };

    if (slidesPerPage === 3) {
        currentMargin = - currentPosition * ((100 / slidesPerPage) + 0.6);
    } else if (slidesPerPage === 2) {
        currentMargin = - currentPosition * ((100 / slidesPerPage) + 1.4);
    } else {
        currentMargin = - currentPosition * ((100 / slidesPerPage) + 5.4);
    }

    slider.style.marginLeft = currentMargin + '%';

    // if (currentPosition > 0) {
    //     sliderPrev.classList.remove('inactive');
    // }
    // if (currentPosition < slidesCount) {
    //     sliderNext.classList.remove('inactive');
    // }
    // if (currentPosition >= slidesCount) {
    //     sliderNext.classList.add('inactive');
    // }

    caruselIcons[currentPosition].classList.add('checked');

    checkArrow();
    // checkCarusel();
}

function slideRight() {

    checkArrow();

    if (currentPosition != 0) {
        if (slidesPerPage === 3) {
            slider.style.marginLeft = currentMargin + ((100 / slidesPerPage) + 0.6) + '%';
            currentMargin += ((100 / slidesPerPage) + 0.6);
        } else if (slidesPerPage === 2) {
            slider.style.marginLeft = currentMargin + ((100 / slidesPerPage) + 1.4) + '%';
            currentMargin += ((100 / slidesPerPage) + 1.4);
        } else {
            slider.style.marginLeft = currentMargin + ((100 / slidesPerPage) + 5.4) + '%';
            currentMargin += ((100 / slidesPerPage) + 5.4);
        }
        currentPosition--;

        checkArrow();

        caruselIcons.forEach(elem => {
            if (elem.classList.contains('checked')) {
                elem.classList.remove('checked');
            }
        })
        caruselIcons[currentPosition].classList.add('checked');
    }
}

function slideLeft() {

    checkArrow();

    if (currentPosition != slidesCount) {
        if (slidesPerPage === 3) {
            slider.style.marginLeft = currentMargin - ((100 / slidesPerPage) + 0.6) + '%';
            currentMargin -= ((100 / slidesPerPage) + 0.6);
        } else if (slidesPerPage === 2) {
            slider.style.marginLeft = currentMargin - ((100 / slidesPerPage) + 1.4) + '%';
            currentMargin -= ((100 / slidesPerPage) + 1.4);
        } else {
            slider.style.marginLeft = currentMargin - ((100 / slidesPerPage) + 5.4) + '%';
            currentMargin -= ((100 / slidesPerPage) + 5.4);
        }
        currentPosition++;

        checkArrow();

        caruselIcons.forEach(elem => {
            if (elem.classList.contains('checked')) {
                elem.classList.remove('checked');
            }
        })
        caruselIcons[currentPosition].classList.add('checked');

    };

};

sliderNext.addEventListener('click', slideLeft)
sliderPrev.addEventListener('click', slideRight)

function eventClick(index) {  
            if (slidesPerPage === 3) {

                currentMargin =  -(((100 / slidesPerPage) + 0.6) * index);
                currentPosition = index;
                
                slider.style.marginLeft = currentMargin + '%';

                caruselIcons.forEach(elem => {
                    if (elem.classList.contains('checked')) {
                        elem.classList.remove('checked');
                    }
                })
                caruselIcons[currentPosition].classList.add('checked');

            } else if (slidesPerPage === 2) {

                currentMargin =  -(((100 / slidesPerPage) + 1.4) * index);
                currentPosition = index;
                slider.style.marginLeft = currentMargin  + '%';

                caruselIcons.forEach(elem => {
                    if (elem.classList.contains('checked')) {
                        elem.classList.remove('checked');
                    }
                })
                caruselIcons[currentPosition].classList.add('checked');

            } else {

                currentMargin =  -(((100 / slidesPerPage) + 5.4) * index);
                currentPosition = index;
                slider.style.marginLeft = currentMargin  + '%';

                caruselIcons.forEach(elem => {
                    if (elem.classList.contains('checked')) {
                        elem.classList.remove('checked');
                    }
                })
                caruselIcons[currentPosition].classList.add('checked');

            }

}

caruselItems.forEach((elem, index) => {
    elem.addEventListener('click', () => eventClick(index))
})