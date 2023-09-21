const wrapper = document.querySelector('.wrapper');
const popUpBg = document.querySelector('.popup_wrapper');
const popUpContent = document.querySelector('.popup_title');
const boxs = document.querySelectorAll('.box');
const popUpBtn = document.querySelector('.popup_btn');
let moove = 0;
let result;

wrapper.addEventListener('click', (e) => {
    if (e.target.className === 'box') {
        if (moove % 2 === 0) {
            e.target.textContent = 'x';
            moove += 1;
            checkWinner()
        } else {
            e.target.textContent = 'o';
            moove += 1;
            checkWinner()
        }
    }
})

const config = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const checkWinner = () => {
    for (i = 0; i < config.length; i += 1) {
        if (boxs[config[i][0]].textContent === 'x'
            && boxs[config[i][1]].textContent === 'x'
            && boxs[config[i][2]].textContent === 'x') {
            result = 'x';
            showwWinner(result)
        } else if (boxs[config[i][0]].textContent === 'o'
            && boxs[config[i][1]].textContent === 'o'
            && boxs[config[i][2]].textContent === 'o') {
            result = 'o';
            showwWinner(result)
        } else {
            result = 'draw';
        }
    }
}

const showwWinner = result => {
    popUpContent.textContent = `winner ${result}`;
    popUpBg.classList.add('visible');
}

const closePopUp = () => {
    popUpBg.classList.remove('visible');
    location.reload();
}

popUpBg.addEventListener('click', closePopUp);
popUpBtn.addEventListener('click', closePopUp);
