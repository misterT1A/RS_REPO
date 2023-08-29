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

// localStorage.clear()


formRegister.addEventListener('submit', submitRegForm)
//================================
//Login logic
const formLogin = document.getElementById('formLogin');

const booksList = document.querySelector('.myProfile_books_list');
const cardNumber = document.querySelector('.myProfile_card_numberCard');
const copyLink = document.querySelector('.myProfile_card_copy');
const libraryBtnCheck = document.getElementById('cardBtn');

changeBodyLogin()
// localStorage.clear()

function changeProfileIcon(elem, defult = false) {
    let profileIconInProfile = document.querySelector('.myProfile_icon');
    let profileIconInHeader = document.getElementById('profileIcon');
    let profileIconDefault = document.getElementById('profileIconDefault');

    if (!defult) {
        let userIcon = `${elem.firstName[0].toUpperCase()} ${elem.lastName[0].toUpperCase()}`

        profileIconInProfile.textContent = userIcon;
        profileIconInHeader.innerHTML = '';
        let newIcon = document.createElement('div');
        newIcon.classList.add('profile_header_afterLogin');
        newIcon.textContent = userIcon;
        profileIconInHeader.append(newIcon);

    } else {
        profileIconInHeader.innerHTML = '';
        profileIconInHeader.append(profileIconDefault)
    }
}

function changeDropMenu(cardNumber, defult = false) {
    const name = document.getElementById('profileNameInDrop');
    const logInMyprof = document.getElementById('profileLoginInDrop');
    const registerLogout = document.getElementById('profileRegisterInDrop');

    if (!defult) {
        name.textContent = cardNumber;
        name.style.fontSize = '13px'
        logInMyprof.textContent = 'My profile';
        logInMyprof.dataset.link = 'myProfile';

        registerLogout.textContent = 'Log Out';
        registerLogout.dataset.lonk = 'LogOut';
    } else {
        name.textContent = 'Profile';
        name.style.fontSize = '';
        logInMyprof.textContent = 'Log In';
        logInMyprof.dataset.link = 'logIn';

        registerLogout.textContent = 'Register';
        registerLogout.dataset.lonk = 'register';
    }
}
//доделать
function changeLibraryCard(elem, firstName, lastName, cardNumber, defult = false) {
    const statistic = document.querySelector('.myProfile_statistics');
    const clonStat = statistic.cloneNode(true);
    let btnCard = document.getElementById('cardBtn');
    const cardWrapper = document.querySelector('.card_wrapper');
    const cardInfo = document.querySelector('.profile_description');
    const profileBtn = document.querySelectorAll('.prof_btn');
    const profileTitle = document.querySelector('.profile_title');
    const cardInfoTitle = document.querySelector('.card_infoTitle');
    const cardInputs = document.querySelectorAll('.card_input');
    const btnProf = document.getElementById('profbtnMyprof');
    const btnReg = document.getElementById('profBtnReg');
    const btnLog = document.getElementById('profBtnLog');

    if (!defult) {
        Array.from(cardInputs).forEach((elem, index) => {
            if (index === 0) {
                elem.value = `${firstName} ${lastName}`;
                elem.disabled = true;
                elem.style.color = '#BB945F'
            } else {
                elem.value = cardNumber;
                elem.disabled = true;
                elem.style.color = '#BB945F'
            }
        })

        cardInfoTitle.textContent = 'Your Library card';
        profileTitle.textContent = 'Visit your profile';
        cardInfo.textContent = 'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';

        btnProf.classList.remove('prof_hidden');
        btnReg.classList.add('prof_hidden');
        btnLog.classList.add('prof_hidden');

        if (btnCard) {
            btnCard.remove()
        }

        const statWrapper = document.createElement('div');
        statWrapper.classList.add('myProfileCloneNodePart');
        cardWrapper.append(statWrapper);
        clonStat.classList.add('clone_stat');
        statWrapper.append(clonStat)

        const statCounts = document.querySelectorAll('.stat_item_count');
        let arrStats = Array.from(statCounts)

        cardWrapper.classList.add('card_login');
        arrStats.forEach(element => {
            if (element.closest('.stat_item').closest('.clone_stat')) {
                const elem = element.closest(".stat_item");
                elem.closest('.myProfile_statistics').classList.add('stat_card_content')
                elem.classList.add('stat_card');
                elem.children[0].classList.add('stat_card_title');
            }

        })

    } else {
        Array.from(cardInputs).forEach((elem, index) => {
            if (index === 0) {
                elem.value = "Reader's name";
                elem.disabled = false;
                elem.style.color = ''
            } else {
                elem.value = "Card number";
                elem.disabled = false;
                elem.style.color = ''
            }
        })

        cardInfoTitle.textContent = 'Find your Library card';
        profileTitle.textContent = 'Get a reader card';
        cardInfo.textContent = 'You will be able to see a reader card after logging into account or you can register a new account';

        btnProf.classList.add('prof_hidden');
        btnReg.classList.remove('prof_hidden');
        btnLog.classList.remove('prof_hidden');

        Array.from(cardInputs).forEach((elem, index) => {
            if (index === 0) {
                elem.value = "Reader's name";
                elem.disabled = false;
                elem.style.color = ''
            } else {
                elem.value = "Card number";
                elem.disabled = false;
                elem.style.color = ''
            }
        })

        let statWrapperNew = document.querySelector('.myProfileCloneNodePart');

        if(statWrapperNew) {
            statWrapperNew.remove();
        }

        cardWrapper.classList.remove('card_login');
        
        cardWrapper.append(btnCard);
    }
}

function checkCardUser(e) {
    let formLibrary = document.getElementById('formLibrary');
    let users = JSON.parse(localStorage.getItem('users'))
    let btnCard = document.getElementById('cardBtn');
    const cardWrapper = document.querySelector('.card_wrapper');
    const statistic = document.querySelector('.myProfile_statistics');
    const clonStat = statistic.cloneNode(true);
    const cardInputs = document.querySelectorAll('.card_input');

    const { elements } = formLibrary;
 
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
    users.forEach(elem => {
        if (`${elem.firstName} ${elem.lastName}` === objData.name && elem.cardNumber === objData.number) {
            Array.from(cardInputs).forEach((elem, index) => {
                if (index === 0) {
                    elem.disabled = true;
                    elem.style.color = '#BB945F'
                } else {
                    elem.disabled = true;
                    elem.style.color = '#BB945F'
                }
            })
        
            if (btnCard) {
                btnCard.remove()
            }
        
            const statWrapper = document.createElement('div');
            statWrapper.classList.add('myProfileCloneNodePart');
            cardWrapper.append(statWrapper);
            clonStat.classList.add('clone_stat');
            statWrapper.append(clonStat)
        
            const statCounts = document.querySelectorAll('.stat_item_count');
            let arrStats = Array.from(statCounts)
        
            cardWrapper.classList.add('card_login');
            arrStats.forEach(element => {
                if (element.closest('.stat_item').closest('.clone_stat')) {
                    const elem = element.closest(".stat_item");
                    elem.closest('.myProfile_statistics').classList.add('stat_card_content')
                    elem.classList.add('stat_card');
                    elem.children[0].classList.add('stat_card_title');
                }
        
            })
        }
    })

    setTimeout(() => {
        Array.from(cardInputs).forEach((elem, index) => {
            if (index === 0) {
                elem.value = "Reader's name";
                elem.disabled = false;
                elem.style.color = ''
            } else {
                elem.value = "Card number";
                elem.disabled = false;
                elem.style.color = ''
            }
        })

        let statWrapperNew = document.querySelector('.myProfileCloneNodePart');
        statWrapperNew.remove();

        cardWrapper.classList.remove('card_login');
        
        cardWrapper.append(btnCard);
    }, 10000)
    e.preventDefault()
}
libraryBtnCheck.addEventListener('click', checkCardUser);


const copyBtn = document.querySelector('.myProfile_card_copy');
function copyText(elem) {
    const copyText = document.querySelector('.myProfile_card_numberCard').textContent;
    const inputText = document.querySelector('.cardHidden');

    const el = document.createElement('textarea');
    el.value = copyText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}
copyBtn.addEventListener('click', copyText);


function changeBodyLogin() {
    let users = JSON.parse(localStorage.getItem('users'))
    if (users) {
        users.forEach(elem => {
            if (elem.login) {
                if (!elem.visits) {
                    elem.visits = 1;
                } else {
                    elem.visits += 1;
                }

                if (!elem.bonuses) {
                    elem.bonuses = 1240;
                }

                if (!elem.books) {
                    elem.books = [];
                    elem.books.push('The Last Queen, Clive Irving');
                    elem.books.push('Dominicana, Angie Cruz');
                } else {
                    // elem.books.push('The Last Queen, Clive Irving');
                    // elem.books.push('Dominicana, Angie Cruz');
                }

                if (!elem.booksCount) {
                    elem.booksCount = elem.books.length;
                }

                if (!elem.cardNumber) {
                    elem.cardNumber = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString(16).toUpperCase();
                }

                localStorage.setItem('users', JSON.stringify(users))

                changeProfileIcon(elem);

                changeDropMenu(elem.cardNumber);

                let profileName = document.querySelector('.myProfile_name');
                let firstName = `${elem.firstName[0].toUpperCase()}${elem.firstName.slice(1)}`;
                let lastName = `${elem.lastName[0].toUpperCase()}${elem.lastName.slice(1)}`;

                if (elem.firstName.length > 10) {
                    firstName = firstName.slice(0, 8) + '...';
                }
                if (elem.lastName.length > 10) {
                    lastName = lastName.slice(0, 8) + '...';
                }

                profileName.textContent = `${firstName} ${lastName}`;

                const cardNumberInProfile = document.querySelector('.myProfile_card_numberCard');
                cardNumberInProfile.textContent = elem.cardNumber

                changeLibraryCard(elem, firstName, lastName, elem.cardNumber);
                const statCounts = document.querySelectorAll('.stat_item_count');
                statCounts.forEach(element => {
                    for (let key in elem) {
                        if (element.dataset.statistic === key) {
                            element.textContent = elem[key];
                        }
                    }
                })

                booksList.innerHTML = '';

                if (elem.books.length > 0) {
                    elem.books.forEach(elem => {
                        const book = document.createElement('li');
                        book.classList.add('myProfile_book_item')
                        book.textContent = elem;
                        booksList.append(book)
                    })
                }

            }
        })
    }
}

function logOut() {

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
            localStorage.setItem('users', JSON.stringify(users))
            regInfoText.textContent = 'Login completed successfully';
            changeBodyLogin();
        }
    })

    if (!coincidence) {
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
//buy popup 
