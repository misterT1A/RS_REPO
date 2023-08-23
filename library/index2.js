const profileMenu = document.querySelector('.profile_menu');
const profileIcon = document.getElementById('profileIcon');
const body2 = document.getElementById('body');

//profileMenu===================
let openMenu = false;
profileIcon.addEventListener('click', () => {
    if(!openMenu) {
        profileMenu.classList.add('profile_open')
        setTimeout(() => {
            openMenu = true;
        }, 300)
    } else {
        profileMenu.classList.remove('profile_open')
        openMenu = false;
    }
})

body2.addEventListener('click', (elem) => {
    if (openMenu && elem.target != profileMenu) {
        profileMenu.classList.remove('profile_open')
        openMenu = false;
    }
})
////====================
