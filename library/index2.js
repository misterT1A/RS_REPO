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
    if ((elem.target.classList.contains('profile_icon')
        || (elem.target.classList.contains('profile_header_afterLogin')))
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


if (popLinks.length > 0) {
    popLinks.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const Popup = document.getElementById(elem.dataset.link);
            if (Popup) {
                popOpen(Popup);
                e.preventDefault();
            }
        })
    })
}

if (closeBtns.length > 0) {
    closeBtns.forEach(elem => {
        elem.addEventListener('click', (e) => {
            const parantClose = elem.closest('.popup');
            popClose(parantClose);
            e.preventDefault();
        })
    })
}

function popOpen(Popup) {
    if (Popup && unlock) {
        const popupActice = document.querySelector('.popup.open');
        if (popupActice) {
            popClose(popupActice, false);
        } else {
            bodyLock();
        }
    }
    Popup.classList.add('open');
    Popup.addEventListener('mousedown', (e) => {
        // e.stopPropagation();
        if (!e.target.closest('.popup_content')) {
            popClose(e.target.closest('.popup'));
        }
    })
}

function popClose(popup, lock = true) {
    if (unlock) {
        popup.classList.remove('open');
        document.querySelectorAll('.form_login').forEach(elem => {
            elem.reset();
        });
    }
    if (lock) {
        bodyUnLock();
    }
}

function bodyLock() {
    const lockPadding = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
    body.style.paddingRight = lockPadding;
    body.classList.add('hidden');
    unlock = false;
    setTimeout(() => {
        unlock = true;
    }, 800);
}

function bodyUnLock() {
    setTimeout(() => {
        body.style.paddingRight = '0px';
        body.classList.remove('hidden');
        unlock = false;
        setTimeout(() => {
            unlock = true;
        }, 800)
    }, 800)
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
            objData.cardNumber = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString(16).toUpperCase();
            objData.login = true;
            users.push(objData)
            localStorage.setItem('users', JSON.stringify(users))
        }
        coincidence = false;

    } else {
        let arrUsers = []
        objData.cardNumber = (Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000).toString(16).toUpperCase();
        objData.login = true;
        arrUsers.push(objData)
        localStorage.setItem('users', JSON.stringify(arrUsers))
    }
    setTimeout(() => {
        showInfoRegister();
    }, 800)

    popClose(formRegister.closest('.popup'))
    changeBodyLogin();
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



formRegister.addEventListener('submit', submitRegForm)
//================================
//Login logic
const formLogin = document.getElementById('formLogin');

const booksList = document.querySelector('.myProfile_books_list');
const cardNumber = document.querySelector('.myProfile_card_numberCard');
const copyLink = document.querySelector('.myProfile_card_copy');
let libraryBtnCheck = document.getElementById('cardBtn');
let cloneBtnCard = libraryBtnCheck.cloneNode(true);
const copyBtn = document.querySelector('.myProfile_card_copy');
const bookLinks = document.querySelectorAll('.book_link');

changeBodyLogin()
// localStorage.clear()

function checkValidity(event) {
    const formNode = event.target.form
    const isValid = formNode.checkValidity()

    buyBtn.disabled = !isValid
}

function changeProfileIcon(elem, defult = false) {
    let profileIconInProfile = document.querySelector('.myProfile_icon');
    let profileIconInHeader = document.getElementById('profileIcon');
    const profileIconDefault = document.getElementById('profileIconDefault');


    if (!defult) {
        let userIcon = `${elem.firstName[0].toUpperCase()}${elem.lastName[0].toUpperCase()}`

        profileIconInProfile.textContent = userIcon;
        profileIconInHeader.innerHTML = '';
        let newIcon = document.createElement('div');
        newIcon.classList.add('profile_header_afterLogin');
        newIcon.textContent = userIcon;
        profileIconInHeader.append(newIcon);

    } else {
        let newIcon = document.createElement('img');
        newIcon.classList.add('profile_icon');
        newIcon.src = "./img/icon_profile.svg";
        profileIconInHeader.innerHTML = '';
        profileIconInHeader.append(newIcon)
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
        registerLogout.dataset.link = 'LogOut';
    } else {
        name.textContent = 'Profile';
        name.style.fontSize = '';
        logInMyprof.textContent = 'Log In';
        logInMyprof.dataset.link = 'logIn';

        registerLogout.textContent = 'Register';
        registerLogout.dataset.link = 'register';
    }
}

function changeLibraryCard(elem, firstName, lastName, cardNumber, defult = false) {
    let formLibrary = document.getElementById('formLibrary');
    const statistic = document.querySelector('.myProfile_statistics');
    const clonStat = statistic.cloneNode(true);
    let cardWrapper = document.querySelector('.card_wrapper');
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

        if (cardWrapper.children[1].classList.contains('button')) {
            cardWrapper.children[1].remove()
        }

        const statWrapper = document.createElement('div');
        statWrapper.classList.add('myProfileCloneNodePart');
        cardWrapper.append(statWrapper);
        clonStat.classList.add('clone_stat');
        statWrapper.append(clonStat)

        let statCounts = document.querySelectorAll('.stat_item_count');
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

        let users = JSON.parse(localStorage.getItem('users'))
        users.forEach(elem => {
            if (elem.login) {
                let statCounts = document.querySelectorAll('.stat_item_count');
                statCounts.forEach(element => {
                    for (let key in elem) {
                        if (element.dataset.statistic === key) {

                            element.textContent = elem[key];
                        }
                    }
                })

            }
        })

    }
    if (defult) {
        cardInfoTitle.textContent = 'Find your Library card';
        profileTitle.textContent = 'Get a reader card';
        cardInfo.textContent = 'You will be able to see a reader card after logging into account or you can register a new account';

        btnProf.classList.add('prof_hidden');
        btnReg.classList.remove('prof_hidden');
        btnLog.classList.remove('prof_hidden');

        Array.from(cardInputs).forEach((elem, index) => {
            if (index === 0) {
                elem.placeholder = "Reader's name";
                elem.disabled = false;
                elem.style.color = ''
            } else {
                elem.placeholder = "Card number";
                elem.disabled = false;
                elem.style.color = ''
            }
        })

        // let statWrapperNew = document.querySelector('.myProfileCloneNodePart');

        if (cardWrapper.children[1].classList.contains('myProfileCloneNodePart')) {
            cardWrapper.children[1].remove();
        }

        cardWrapper.classList.remove('card_login');

        if (defult && cardWrapper.children.length < 2) {


            // let newBtn = document.createElement('button');
            // newBtn.classList.add('button');
            // newBtn.classList.add('big');
            // newBtn.classList.add('lybraryBtn');
            // newBtn.id = 'cardBtn';
            // newBtn.setAttribute('type', "submit")
            // newBtn.setAttribute('form', "formLibrary")
            // newBtn.textContent = 'Check the card';
            cardWrapper.append(libraryBtnCheck);

        }

        formLibrary.reset()

    }
}

function checkCardUser(e) {
    let formLibrary = document.getElementById('formLibrary');
    let users = JSON.parse(localStorage.getItem('users'))
    // let btnCard = document.getElementById('cardBtn');
    const cardWrapper = document.querySelector('.card_wrapper');
    const statistic = document.querySelector('.myProfile_statistics');
    const clonStat = statistic.cloneNode(true);
    const cardInputs = document.querySelectorAll('.card_input');

    let toFind = false;

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

    if (users) {
        users.forEach(element => {
            if ((`${element.firstName} ${element.lastName}` === objData.name ||  element.firstName === objData.name)
            && element.cardNumber === objData.number) {
                toFind = true;
                Array.from(cardInputs).forEach((elem, index) => {
                    if (index === 0) {
                        elem.backgroundColor = 'transparent';
                        elem.disabled = true;
                        elem.style.color = '#BB945F';
                        elem.value = `${element.firstName} ${element.lastName}`;
                    } else {
                        elem.backgroundColor = 'transparent';
                        elem.disabled = true;
                        elem.style.color = '#BB945F'
                        elem.value = element.cardNumber;
                    }
                })

                if (cardWrapper.children[1]) {
                    btnCard = cardWrapper.children[1].cloneNode(true);
                    cardWrapper.children[1].remove()
                }

                const statWrapper = document.createElement('div');
                statWrapper.classList.add('myProfileCloneNodePart');
                cardWrapper.append(statWrapper);
                clonStat.classList.add('clone_stat');
                statWrapper.append(clonStat)

                let statCounts = document.querySelectorAll('.stat_item_count');
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
                statCounts = document.querySelectorAll('.stat_item_count');
                statCounts.forEach(elem => {
                    for (let key in element) {
                        if (elem.dataset.statistic === key) {

                            elem.textContent = element[key];
                        }
                    }
                })

                setTimeout(() => {
                    Array.from(cardInputs).forEach((elem, index) => {
                        if (index === 0) {
                            elem.value = '';
                            elem.placeholder = "Reader's name";
                            elem.disabled = false;
                            elem.style.color = ''
                        } else {
                            elem.value = '';
                            elem.placeholder = "Card number";
                            elem.disabled = false;
                            elem.style.color = ''
                        }
                    })
        
                    let statWrapperNew = document.querySelector('.myProfileCloneNodePart');
                    statWrapperNew.remove();
        
                    cardWrapper.classList.remove('card_login');
        
                    cardWrapper.append(libraryBtnCheck);
                }, 10000)
            }
        })
    }

    if (!toFind) {
        formLibrary.reset()
    }

    e.preventDefault()
}
libraryBtnCheck.addEventListener('click', checkCardUser);

function updateStatInfo() {
    let users = JSON.parse(localStorage.getItem('users'))
    users.forEach(elem => {
        if (elem.login) {
            let statCounts = document.querySelectorAll('.stat_item_count');
            statCounts.forEach(element => {
                for (let key in elem) {
                    if (element.dataset.statistic === key) {

                        element.textContent = elem[key];
                    }
                }
            })

            addBook(elem);
        }
    })
}

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

function addBook(elem) {
    booksList.innerHTML = '';
    elem.books.forEach(elem => {
        const book = document.createElement('li');
        book.classList.add('myProfile_book_item')
        book.textContent = elem;
        booksList.append(book)
    })
}

function changeMyProfile(elem, defult = false) {
    let profileName = document.querySelector('.myProfile_name');
    const cardNumberInProfile = document.querySelector('.myProfile_card_numberCard');
    const statCounts = document.querySelectorAll('.stat_item_count');

    if (!defult) {

        let firstName = `${elem.firstName[0].toUpperCase()}${elem.firstName.slice(1)}`;
        let lastName = `${elem.lastName[0].toUpperCase()}${elem.lastName.slice(1)}`;

        if (elem.firstName.length > 10) {
            firstName = firstName.slice(0, 8) + '...';
        }
        if (elem.lastName.length > 10) {
            lastName = lastName.slice(0, 8) + '...';
        }

        profileName.textContent = `${firstName} ${lastName}`;


        cardNumberInProfile.textContent = elem.cardNumber

        changeLibraryCard(elem, firstName, lastName, elem.cardNumber);

        statCounts.forEach(element => {
            for (let key in elem) {
                if (element.dataset.statistic === key) {
                    element.textContent = elem[key];
                }
            }
        })

        if (elem.books.length > 0) {
            addBook(elem);
        }
    } else {
        profileName.textContent = 'John Doe';
        cardNumberInProfile.textContent = 'No card'
        changeLibraryCard(elem, firstName, lastName, elem.cardNumber, true)
    }
}

function changeBodyLogin() {
    const cardWrapper = document.querySelector('.card_wrapper');
    let users = JSON.parse(localStorage.getItem('users'))
    let toFindUserInLogin = false;
    if (users) {
        users.forEach(elem => {
            if (elem.login === true) {
                toFindUserInLogin = true;
                if (!elem.visits) {
                    elem.visits = 1;
                } else {
                    elem.visits += 1;
                }

                if (!elem.cardDate) {
                    elem.cardDate = false;
                }

                if (!elem.bonuses) {
                    elem.bonuses = 1240;
                }

                if (!elem.books) {
                    elem.books = [];
                }

                if (!elem.booksCount) {
                    elem.booksCount = elem.books.length;
                }

                localStorage.setItem('users', JSON.stringify(users))

                profileIcon.setAttribute('title', `${elem.firstName} ${elem.lastName}`)

                changeProfileIcon(elem);

                changeDropMenu(elem.cardNumber);

                changeMyProfile(elem);
                changeBookBtnAfterLogin();

            }
        })

        if (!toFindUserInLogin) {
            changeProfileIcon(undefined, true);

            changeDropMenu(undefined, true);

            changeLibraryCard(undefined, undefined, undefined, undefined, true)
            changeBookBtnAfterLogin();
            profileIcon.removeAttribute('title');
        }

        toFindUserInLogin = false;
    }

}

//LogOut===============
function logOut() {
    let users = JSON.parse(localStorage.getItem('users'))
    users.forEach(elem => {
        if (elem.login === true) {
            elem.login = false;
            localStorage.setItem('users', JSON.stringify(users))
            changeBodyLogin()
        }
    })

}

popLinks.forEach(elem => {
    elem.addEventListener('click', (e) => {
        if (elem.dataset.link === 'LogOut') {
            logOut();
        }
    })
})
//=======================


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
    }, 800)

    popClose(formLogin.closest('.popup'))


    event.preventDefault();
    event.target.reset();
}

formLogin.addEventListener('submit', submitLogForm)

//================================
//buy popup 
const formBuy = document.getElementById('formbuy');
const buyBtn = document.getElementById('buyBtn');


let bookInfo = null;
let bookBtn = null;

function getNameBook(elem) {
    let perent = elem.closest('.book__wrapper');
    let nameBook = perent.children[2].textContent;
    let autorBook = perent.children[4].textContent.slice(3);
    bookInfo = `${nameBook}, ${autorBook}`;
}

function isLogin(item) {
    return item.login === true;
}

if (bookLinks.length > 0) {
    bookLinks.forEach(element => {
        element.addEventListener('click', (e) => {
            bookBtn = element;
            getNameBook(element)
            let users = JSON.parse(localStorage.getItem('users'))
            if (users) {
                if (users.some(isLogin)) {
                    users.forEach(elem => {
                        if (elem.login === true) {
                            if (elem.cardDate === true) {

                                if (bookInfo) {
                                    elem.books.push(bookInfo);
                                    bookBtn.disabled = true;
                                    bookBtn.textContent = 'Own'
                                }
                                elem.booksCount = elem.books.length;

                                bookInfo = null;
                                bookBtn = null;
                                localStorage.setItem('users', JSON.stringify(users))

                                updateStatInfo();
                            }

                            if (elem.cardDate === false) {
                                const Popup = document.getElementById(element.dataset.link);
                                getNameBook(element);
                                popOpen(Popup);
                                e.preventDefault();
                            }
                        }
                    })
                } else {
                    const popup = document.getElementById('logIn');
                    popOpen(popup);
                }
            } else {
                const popup = document.getElementById('logIn');
                popOpen(popup);
            }

        })
    })
}

function changeBookBtnAfterLogin() {
    bookLinks.forEach(book => {
        let nameBook = book.closest('.book__wrapper').children[2].textContent
        let users = JSON.parse(localStorage.getItem('users'))
        users.forEach(user => {
            if (user.login === true) {
                user.books.forEach(elem => {
                    if (elem.split(',')[0] === nameBook) {
                        book.disabled = true;
                        book.textContent = 'Own'
                    };
                })
            } else {
                book.disabled = false;
                book.textContent = 'Buy'
            }

        })
    })
}

function toBuyBook(e) {


    let users = JSON.parse(localStorage.getItem('users'))

    users.forEach(elem => {
        if (elem.login === true) {
            if (bookInfo) {
                elem.books.push(bookInfo);
                bookBtn.disabled = true;
                bookBtn.textContent = 'Own'
                elem.cardDate = true;
            }
            elem.booksCount = elem.books.length;
        }
    })
    bookInfo = null;
    bookBtn = null;
    localStorage.setItem('users', JSON.stringify(users))

    updateStatInfo();
    e.preventDefault()
    e.target.reset();

    popClose(formBuy.closest('.popup'))
}

formBuy.addEventListener('input', checkValidity)

formBuy.addEventListener('submit', toBuyBook);
//===================

