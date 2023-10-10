import { BotCar } from "./botCar.js";

const btnNewGame = document.getElementById('newGame');
const btnPauseGame = document.getElementById('pauseGAme');

const btnAll = document.querySelectorAll('.btn');

const gameMainMenu = document.querySelector('.game_main_menu');
const nameText = document.querySelector('.name_text');
const formInputName = document.querySelector('.input_name');
const inputName = document.getElementById('inputName');
const recordForm = document.querySelector('.records_wrapper');
const recordName = document.querySelector('.record_name');
const recordsElements = document.querySelectorAll('.record_item');
const btnGameStart = document.querySelector('.game_btn');
const btnRecordShow = document.querySelector('.records_btn');

const countdownFirst = document.querySelector('.first');
const countdownSecond = document.querySelector('.second');
const countdownThird = document.querySelector('.third');

const endGameManu = document.querySelector('.end_game');
const btnBackManu = document.querySelector('.backMenu');
const btnTryAgain = document.querySelector('.tryAgain');

const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

const audioHoverBtn = new Audio();
const audioClickBtn = new Audio();
const audiotireSound = new Audio();
const audioStartEngine = new Audio();
const audioDamageCar = new Audio();
const audioEngine = new Audio();
const audioDeadEngine = new Audio();

const bg = new Image();
const bg2 = new Image();
const speedPanel = new Image();
const arrowSpeed = new Image();
const madMan = new Image();
const pipeSmoke1 = new Image();
const pipeSmoke2 = new Image();
const tireSmokeLeft = new Image();
const tireSmokeRight = new Image();
const speedEffectUp = new Image();
const speedEffectDown = new Image();
const damageCar = new Image();
const damageSmoke = new Image();
const damageSmoke2 = new Image();
const botDamageSmoke = new Image();
const botDamageSmoke2 = new Image();
const car = new Image();

audioHoverBtn.src = 'sounds/knopka-hover.wav';
audioClickBtn.src = 'sounds/knopka-klik.wav';
audiotireSound.src = 'sounds/tireSound.mp3';
audioDamageCar.src = 'sounds/damageCar.wav';
audioStartEngine.src = 'sounds/starEngine.mp3';
audioEngine.src = 'sounds/engineSound.mp3';
audioEngine.loop = true;
audioEngine.volume = 0.3;
audioDeadEngine.src = 'sounds/deadEngine.mp3';


bg.src = 'img/road400.png';
bg2.src = 'img/bg2.png';
speedPanel.src = 'img/speedPanel.png';
arrowSpeed.src = 'img/arrowSpeed.png';
madMan.src = 'img/madMan.png';
pipeSmoke1.src = 'img/smoke1.png';
pipeSmoke2.src = 'img/smoke1rev.png';
tireSmokeLeft.src = 'img/smokeLeft.png';
tireSmokeRight.src = 'img/smokeRight.png';
speedEffectUp.src = './img/speedUp.png';
speedEffectDown.src = './img/speedDown.png';
damageCar.src = 'img/car1-90pxDam.png';
damageSmoke.src = 'img/damageSmoke.png';
damageSmoke2.src = 'img/damageSmoke2.png';
botDamageSmoke.src = 'img/botDamSmoke.png';
botDamageSmoke2.src = 'img/botDamSmoke2.png';
car.src = 'img/car1-90px.png';

let name = null;
let readyGame = false;
let gameStart = false;
let endGame = false;

let bgStart = bg.height - 900;
let bgStart2 = bg2.height - 900;

let carX = 307;
let carY = 640;
let turn = null;

let gear = 0;
let gearUpPanel = false;
let speed = 8;
let speedHeightCar = 200;
let score = 0;
let deg = -45;
let speedUpText = false;

let pipeSmokeX = carX + car.width - 40;
let pipeSmokeY = carY + car.height;
let isPipeSmoke = true;
let isTireSmoke = true;
let isDamageSmoke = false;
let isBotDamageSmoke = false;

let speedActive = false;
let speedTogle = true;

let carFullDamage = false;
let damgeRotate = 0;
let damgeRotateBot = 0;

let botCars = [];
botCars[0] = new BotCar(3);

const draw = () => {
    if (gear % 10 === 0 && gear != 0) {
        speed += 1;
        gear = 0;
        gearUpPanel = true;
        speedUpText = true;
    }

    if (bgStart < 0) {
        bgStart = bg.height - 900;
        gear += 1;
    }

    if (bgStart2 < 0) {
        bgStart2 = bg2.height - 900;
    }
    ctx.drawImage(bg2, 0, bgStart2, 800, 900, 0, 0, 800, 900)
    ctx.drawImage(bg, 0, bgStart, 400, 900, 200, 0, 400, 900)

    bgStart -= speed;
    bgStart2 -= speed;

    for (let i = 0; i < botCars.length; i++) {
        if (!botCars[i].damage) {
            ctx.drawImage(botCars[i].car, botCars[i].botcarX, botCars[i].botcarY);
            if (!botCars[i].damage) {
                botCars[i].botcarY += speed - 2;
            }

            if (((carY <= botCars[i].botcarY + botCars[i].car.height && carY + car.height >= botCars[i].botcarY + botCars[i].car.height)

                || (carY + car.height >= botCars[i].botcarY && carY <= botCars[i].botcarY))


                && ((botCars[i].botcarX < carX && botCars[i].botcarX + botCars[i].car.width > carX)

                    || (botCars[i].botcarX < carX + car.width && botCars[i].botcarX + botCars[i].car.width > carX + car.width)

                    || ((botCars[i].botcarX > carX && botCars[i].botcarX < carX + car.width) && botCars[i].botcarX + botCars[i].car.width > carX && botCars[i].botcarX + botCars[i].car.width < carX + car.width))) {
                speed = 0;
                carFullDamage = true;
                botCars[i].damage = true;
                audioDamageCar.play();
                audioEngine.pause();
                audioEngine.currentTime = 0;
                audioDeadEngine.play();
                setDataInLS();
                score = 0;
                setTimeout(() => {
                    endGame = true;
                    endGameManu.classList.remove('hidden');
                }, 2000)

            }

        } else {
            ctx.save();
            ctx.translate(botCars[i].botcarX + botCars[i].car.width / 2, botCars[i].botcarY + botCars[i].car.height / 2);
            if (damgeRotateBot > -80) {
                damgeRotateBot -= 5;
                ctx.rotate(damgeRotateBot * Math.PI / 180);
                ctx.drawImage(botCars[i].car, (-botCars[i].car.width / 2) / 3, (-botCars[i].car.height / 2) - damgeRotateBot / 2);
                toBotDamageSmoke(i);

                ctx.restore();
            } else {
                ctx.rotate(damgeRotateBot * Math.PI / 180);
                ctx.drawImage(botCars[i].car, (-botCars[i].car.width / 2) / 3, (-botCars[i].car.height / 2) - damgeRotateBot / 2);
                toBotDamageSmoke(i);
                ctx.restore();
            }
        }

        if (speed > 10 && speed < 16) {
            speedHeightCar = 300;
        } else if (speed > 15) {
            speedHeightCar = 400;
        } else {
            speedHeightCar = 200;
        }

        if (!botCars[i].check) {
            if (botCars[i].botcarY > speedHeightCar) {
                const random = Math.floor(0 + Math.random() * (3 + 1 - 0));
                botCars.push(new BotCar(random));
                botCars[i].check = true;
            }
        }

        if (botCars[i].botcarY > 1000) {
            botCars.shift();
            score += 100;
        }

    }

    if (speedActive) {
        drawSpeed();
    }

    if (!carFullDamage) {
        if (!turn) {
            ctx.drawImage(car, carX, carY);
            toPipeSmoke();
        } else if (turn === 'right') {
            ctx.save();
            ctx.translate(carX + car.width / 2, carY + car.height / 2);
            ctx.rotate(30 * Math.PI / 180);
            ctx.drawImage(car, -car.width / 2, -car.height / 2);
            toPipeSmokeRight();
            toTireSmokeRight();
            ctx.restore();
            if (carX < 550) {
                carX += 5;
                pipeSmokeX += 5;
            }
        } else if (turn === 'left') {
            ctx.save();
            ctx.translate(carX + car.width / 2, carY + car.height / 2);
            ctx.rotate(-30 * Math.PI / 180);
            ctx.drawImage(car, -car.width / 2, -car.height / 2);
            toPipeSmokeLeft();
            toTireSmokeLeft();
            ctx.restore();
            if (carX > 200) {
                carX -= 5;
                pipeSmokeX -= 5;
            }
        }
    } else {
        ctx.save();
        if (damgeRotate < 120) {
            carY -= 10
            carX += 3
        }

        ctx.translate(carX + damageCar.width / 2, carY + damageCar.height / 2);
        if (damgeRotate < 120) {
            damgeRotate += 5;
            ctx.rotate(damgeRotate * Math.PI / 180);
            ctx.drawImage(damageCar, (-damageCar.width / 2) / 3, (-damageCar.height / 2) - damgeRotate / 2);
            toDamageSmoke();
            ctx.restore();
        } else {
            ctx.rotate(damgeRotate * Math.PI / 180);
            ctx.drawImage(damageCar, (-damageCar.width / 2) / 3, (-damageCar.height / 2) - damgeRotate / 2);
            toDamageSmoke();
            ctx.restore();
        }

    }


    ctx.drawImage(speedPanel, 30, 720);

    if (gearUpPanel && deg < 220) {
        deg += 29.4;
        gearUpPanel = false;
    }

    ctx.save();
    ctx.translate(-arrowSpeed.width * 0.78 + 173, -arrowSpeed.height / 2 + 811);
    ctx.rotate(deg * Math.PI / 180);
    ctx.drawImage(arrowSpeed, -arrowSpeed.width * 0.78, -arrowSpeed.height / 2);
    ctx.restore();

    //-45 220  29.4

    ctx.beginPath();
    ctx.moveTo(5, 10);
    ctx.lineTo(200, 10);
    ctx.lineTo(200, 60);
    ctx.lineTo(5, 60);
    ctx.closePath();
    ctx.fillStyle = '#c3c9a8';
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.font = 'Bold 24px Verdana';
    ctx.fillText('Score: ' + score, 10, 43);

    if (speedUpText) {
        textSpeedUp()
    }

    if (gameStart && !endGame) {
        requestAnimationFrame(draw);
    }

}

const textSpeedUp = () => {
    ctx.save();
    ctx.fillStyle = '#eeca00';
    ctx.font = 'Bold 39px Verdana';
    ctx.translate(cvs.width / 2, cvs.height / 2);
    ctx.fillText('FASTER', -95, 0);
    ctx.drawImage(madMan, 130, -230);
    ctx.restore();
    setTimeout(() => {
        speedUpText = false;
    }, 2000)
}

const toPipeSmoke = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, pipeSmokeX + 10, pipeSmokeY);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toDamageSmoke = () => {
    ctx.drawImage(damageSmoke, -damageCar.width / 2, -damageCar.height / 2);
    if (isDamageSmoke) {
        ctx.drawImage(damageSmoke2, -damageCar.width / 2, -damageCar.height / 2);
        isDamageSmoke = false;
    }
    setTimeout(() => {
        isDamageSmoke = true;
    }, 50)
}

const toBotDamageSmoke = (i) => {
    ctx.drawImage(botDamageSmoke, -botCars[i].car.width / 2, (-botCars[i].car.height / 2) + 40);
    if (isBotDamageSmoke) {
        ctx.drawImage(botDamageSmoke2, -botCars[i].car.width / 2, (-botCars[i].car.height / 2) + 40);
        isBotDamageSmoke = false;
    }
    setTimeout(() => {
        isBotDamageSmoke = true;
    }, 50)
}

const toPipeSmokeRight = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, -car.width / 2 + car.width - 30, -car.height / 2 + car.height);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toPipeSmokeLeft = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, -car.width / 2 + car.width - 30, -car.height / 2 + car.height);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toTireSmokeRight = () => {
    if (isTireSmoke) {
        ctx.drawImage(tireSmokeLeft, -car.width / 2 - 90, -car.height / 2 + car.height - 120);
        isTireSmoke = false;
    }
    setTimeout(() => {
        isTireSmoke = true;
    }, 50)
}

const toTireSmokeLeft = () => {
    if (isTireSmoke) {
        ctx.drawImage(tireSmokeRight, -car.width / 2 + 60, -car.height / 2 + car.height - 120)
        isTireSmoke = false;
    }
    setTimeout(() => {
        isTireSmoke = true;
    }, 50)
}

const drawSpeed = () => {
    if (speedTogle) {
        ctx.drawImage(speedEffectDown, 0, cvs.height - speedEffectUp.height);
        ctx.drawImage(speedEffectUp, 0, 0);
        speedTogle = false;
    }
    setTimeout(() => {
        speedTogle = true;
    }, 200)
}

const turnCar = (event) => {
    if (event.keyCode === 37) {
        audiotireSound.play();
        setTimeout(() => {
            audiotireSound.pause();
            audiotireSound.currentTime = 0;
        }, 700)
        turn = 'left';
    } else if (event.keyCode === 39) {
        audiotireSound.play();
        turn = 'right';
        setTimeout(() => {
            audiotireSound.pause();
            audiotireSound.currentTime = 0;
        }, 700)
    }
}

const turnStop = (event) => {
    if (event.keyCode === 37) {
        turn = null;
    } else if (event.keyCode === 39) {
        turn = null;
    }
}

const toStartNewGame = () => {
    ctx.clearRect(0, 0, cvs.width, cvs.height);
    location.reload();
}

const toPauseGame = () => {
    if (gameStart && !endGame) {
        gameStart = false;
    } else {
        gameStart = true;
        draw();
    }

}

const toReadyGame = () => {
    readyGame = true;
}

const showRecordTable = () => {
    recordForm.classList.toggle('hidden');
    showStatsUser();
}

const showCountdownTimer = () => {
    countdownFirst.classList.remove('hidden');
    setTimeout(() => {
        countdownFirst.classList.add('hidden');
        countdownSecond.classList.remove('hidden');
    }, 1000);
    setTimeout(() => {
        countdownSecond.classList.add('hidden');
        countdownThird.classList.remove('hidden');
    }, 2000)
    setTimeout(() => {
        countdownThird.classList.add('hidden');
    }, 3000)
}
const toDefault = () => {
    readyGame = true;
    gameStart = false;
    endGame = false;

    bgStart = bg.height - 900;
    bgStart2 = bg2.height - 900;

    carX = 307;
    carY = 640;
    turn = null;

    gear = 0;
    gearUpPanel = false;
    speed = 10;
    speedHeightCar = 200;
    score = 0;
    deg = -45;
    speedUpText = false;

    pipeSmokeX = carX + car.width - 40;
    pipeSmokeY = carY + car.height;
    isPipeSmoke = true;
    isTireSmoke = true;
    isDamageSmoke = false;
    isBotDamageSmoke = false;

    speedActive = false;
    speedTogle = true;

    carFullDamage = false;
    damgeRotate = 0;
    damgeRotateBot = 0;

    botCars = [];
    botCars[0] = new BotCar(3);
}

const startGame = () => {
    toDefault();
    if (readyGame) {
        audioStartEngine.play();
        draw();
        gameMainMenu.classList.add('hidden');
        showCountdownTimer();
        setTimeout(() => {
            audioStartEngine.pause();
            audioStartEngine.currentTime = 0;
            gameStart = true;
            draw();
            audioEngine.play();
        }, 3000)
    }
}

const backMainManu = () => {
    endGameManu.classList.add('hidden');
    gameMainMenu.classList.remove('hidden');
}

const startNewGame = () => {
    endGameManu.classList.add('hidden');
    toDefault();
    startGame();
}

const sendNameClosePopUp = (event) => {
    event.preventDefault();
    if (inputName.value != '') {
        name = inputName.value;
        formInputName.classList.add('hidden');

        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            let isFind = false;
            users.forEach(user => {
                if (user.name === name) {
                    isFind = true;
                    recordName.textContent = user.name;
                    nameText.textContent = user.name;
                }
            })

            if (!isFind) {
                let user = {
                    name: name,
                    points: []
                }
                nameText.textContent = name;
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users))
            }
        } else {
            let arrUsers = [];
            let user = {
                name: name,
                points: []
            }
            arrUsers.push(user);
            localStorage.setItem('users', JSON.stringify(arrUsers))
        }
    }
}

const getDate = () => {
    const date = new Date();
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
}

const setDataInLS = () => {
    if (localStorage.getItem('users')) {
        let users = JSON.parse(localStorage.getItem('users'));
        users.forEach(user => {
            if (user.name === name) {
                user.points.push({
                    score: score,
                    time: getDate()
                })
                if (user.points.length > 10) {
                    user.points.shift();
                }
            }
            localStorage.setItem('users', JSON.stringify(users))
        })

    }
}

const showStatsUser = () => {
    if (localStorage.getItem('users')) {
        let users = JSON.parse(localStorage.getItem('users'));
        let isFind = false;
        users.forEach(user => {
            if (user.name === name) {
                isFind = true;
                recordName.textContent = user.name;
                user.points.forEach((elemScore, indexScore) => {
                    recordsElements[indexScore].textContent = `${elemScore.time}______Score: ${elemScore.score}`;
                })
            }
        })

        if (!isFind) {
            let user = {
                name: name,
                points: []
            }
            recordName.textContent = name;
            recordsElements.forEach(elem => {
                elem.textContent = '-------';
            })
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users))
        }
    }
}

car.addEventListener('load', toReadyGame);
document.addEventListener('keydown', turnCar);
document.addEventListener('keyup', turnStop);

btnNewGame.addEventListener('click', toStartNewGame);
btnPauseGame.addEventListener('click', toPauseGame);

formInputName.addEventListener('submit', sendNameClosePopUp);
btnGameStart.addEventListener('click', startGame);
btnRecordShow.addEventListener('click', showRecordTable);

btnBackManu.addEventListener('click', backMainManu);
btnTryAgain.addEventListener('click', startNewGame);

btnAll.forEach(btn => btn.addEventListener('mouseover', () => { audioHoverBtn.play() }));
btnAll.forEach(btn => btn.addEventListener('click', () => { audioClickBtn.play() }))

