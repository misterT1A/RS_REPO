const profileMenu = document.querySelector('.profile_menu');
const profileIcon = document.getElementById('profileIcon');

//profileMenu===================
let openMenu = false;
profileIcon.addEventListener('click', () => {
    if (!openMenu) {
        profileMenu.classList.add('profile_open')
        setTimeout(() => {
            openMenu = true;
        }, 300)
    } else {
        profileMenu.classList.remove('profile_open')
        openMenu = false;
    }
})

body.addEventListener('click', (elem) => {


    if (elem.target.classList.contains('profile_icon')
        && !openMenu
        && nav.classList.contains('nav_open')) {
        nav.classList.toggle('nav_open');
        navWrapper.classList.toggle('nav_active');
        burgerButton.classList.toggle('burger_close');
        body.classList.toggle('hidden');
    }

    if (openMenu && elem.target != profileMenu) {
        profileMenu.classList.remove('profile_open')
        openMenu = false;
    }
})
////====================

// //popUP ==============
const popLinks = document.querySelectorAll('.modal_link');
const closeBtns = document.querySelectorAll('.close_btn');
let unlock = true;
const timeout = 800;

if (popLinks.length > 0) {
    popLinks.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const currentPopup = document.getElementById(elem.dataset.link);
            popupOpen(currentPopup);
            e.preventDefault();
        })
    })
}

if (closeBtns.length > 0) {
    closeBtns.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const parantClose = elem.closest('.popup');
            popupClose(parantClose);
            e.preventDefault();
        })
    })
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActice = document.querySelector('.popup.open');
        if (popupActice) {
            popupClose(popupActice, false);
        } else {
            bodyLock();
        }
    }
    currentPopup.classList.add('open');
    currentPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup_content')) {
            popupClose(e.target.closest('.popup'));
        }
    })
}

function popupClose(popup, doUnLock = true) {
    if (unlock) {
        popup.classList.remove('open');
        document.querySelectorAll('.form_login').forEach(elem => {
            elem.reset();
        });
    }
    if (doUnLock) {
        bodyUnLock();
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('hidden');
    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(() => {
        body.style.paddingRight = '0px';
        body.classList.remove('hidden');
        unlock = false;
        setTimeout(() => {
            unlock = true;
        }, timeout)
    }, timeout)
}
//==================
// register logic
const formRegister = document.getElementById('formRegister');
const regInfoText = document.querySelector('.register_text');


function submitRegForm(event) {

    const { elements } = formRegister;
    let data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element
            return { name, value }
        })

    let objData = data.reduce((acc, elem) => {
        acc[elem.name] = elem.value
        return acc;
    }, {})

    if (localStorage.getItem('users')) {
        let users = JSON.parse(localStorage.getItem('users'))

        let coincidence = false;
        users.forEach(elem => {
            if (elem.email === objData.email) {
                coincidence = true;
                const regInfoText = document.querySelector('.register_text');
                regInfoText.textContent = 'User from this email already exists';
                localStorage.setItem('users', JSON.stringify(users))
            }
        })
        if (!coincidence) {
            regInfoText.textContent = 'Registration completed successfully';
            users.push(objData)
            localStorage.setItem('users', JSON.stringify(users))
        }
        coincidence = false;

    } else {
        let arrUsers = []
        arrUsers.push(objData)
        localStorage.setItem('users', JSON.stringify(arrUsers))
    }
    setTimeout(() => {
        showInfoRegister();
    }, timeout)

    popupClose(formRegister.closest('.popup'))
    event.preventDefault();
    event.target.reset();
}

function showInfoRegister() {
    const infoReg = document.getElementById('registerInfo');
    infoReg.classList.add('open')
    setTimeout(() => {
        infoReg.classList.remove('open')
    }, 1200)
}

localStorage.clear()


formRegister.addEventListener('submit', submitRegForm)
//================================
//Login logic
const formLogin = document.getElementById('formLogin');
const profileIconInProfile = document.querySelector('.myProfile_icon');
const profileName = document.querySelector('.myProfile_name');
const statCounts = document.querySelectorAll('.stat_item_count');
const booksList = document.querySelector('.myProfile_books_list');
const cardNumber = document.querySelector('.myProfile_card_numberCard');
const copyLink = document.querySelector('.myProfile_card_copy');

function changeBodyLogin(elem) {
    if (!elem.visits) {
        elem.visits = 1;
    } else {
        elem.visits += 1;
    }

    if (!elem.bonuses) {
        elem.bonuses = 1240;
    }

}

function submitLogForm(event) {
    const { elements } = formLogin;
    let data = Array.from(elements)
        .filter((item) => !!item.name)
        .map((element) => {
            const { name, value } = element
            return { name, value }
        })

    let objData = data.reduce((acc, elem) => {
        acc[elem.name] = elem.value
        return acc;
    }, {})

    let users = JSON.parse(localStorage.getItem('users'))

    let coincidence = false;

    users.forEach(elem => {
        if (objData.email === elem.email && objData.password === elem.password) {
            coincidence = true;

            elem.login = true;
            changeBodyLogin(elem);
        }
    })

    if (coincidence) {
        localStorage.setItem('users', JSON.stringify(users))
        regInfoText.textContent = 'Login completed successfully';
        coincidence = false;
    } else {
        localStorage.setItem('users', JSON.stringify(users))
        regInfoText.textContent = 'Incorrect data or no user';
    }

    setTimeout(() => {
        showInfoRegister();
    }, timeout)

    popupClose(formLogin.closest('.popup'))

    event.preventDefault();
    event.target.reset();
}

formLogin.addEventListener('submit', submitLogForm)
//================================