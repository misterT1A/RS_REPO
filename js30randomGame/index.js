import { BotCar } from "./botCar.js";

const gameWrapper = document.querySelector('.game_wrapper');

class Game {
    constructor(wrapper) {
        this.game = wrapper,
            this.btnNewGame = document.getElementById('newGame'),
            this.btnPauseGame = document.getElementById('pauseGAme'),
            this.btnAll = this.game.querySelectorAll('.btn'),
            this.gameMainMenu = this.game.querySelector('.game_main_menu'),
            this.nameText = this.game.querySelector('.name_text'),
            this.formInputName = this.game.querySelector('.input_name'),
            this.inputName = document.getElementById('inputName'),
            this.recordForm = this.game.querySelector('.records_wrapper'),
            this.recordName = this.game.querySelector('.record_name'),
            this.recordsElements = this.game.querySelectorAll('.record_item'),
            this.btnGameStart = this.game.querySelector('.game_btn'),
            this.btnRecordShow = this.game.querySelector('.records_btn'),
            this.countdownFirst = this.game.querySelector('.first'),
            this.countdownSecond = this.game.querySelector('.second'),
            this.countdownThird = this.game.querySelector('.third'),
            this.endGameManu = this.game.querySelector('.end_game'),
            this.scoreText = this.game.querySelector('.score_text'),
            this.btnBackManu = this.game.querySelector('.backMenu'),
            this.btnTryAgain = this.game.querySelector('.tryAgain'),
            this.cvs = document.getElementById('game'),
            this.ctx = this.cvs.getContext('2d'),
            this.audioHoverBtn = new Audio(),
            this.audioClickBtn = new Audio(),
            this.audiotireSound = new Audio(),
            this.audioStartEngine = new Audio(),
            this.audioDamageCar = new Audio(),
            this.audioEngine = new Audio(),
            this.audioDeadEngine = new Audio(),
            this.audioHoverBtn.src = 'sounds/knopka-hover.wav',
            this.audioClickBtn.src = 'sounds/knopka-klik.wav',
            this.audiotireSound.src = 'sounds/tireSound.mp3',
            this.audioDamageCar.src = 'sounds/damageCar.wav',
            this.audioStartEngine.src = 'sounds/starEngine.mp3',
            this.audioEngine.src = 'sounds/engineSound.mp3',
            this.audioEngine.loop = true,
            this.audioEngine.volume = 0.3,
            this.audioDeadEngine.src = 'sounds/deadEngine.mp3',
            this.bg = new Image(),
            this.bg2 = new Image(),
            this.speedPanel = new Image(),
            this.arrowSpeed = new Image(),
            this.madMan = new Image(),
            this.pipeSmoke1 = new Image(),
            this.pipeSmoke2 = new Image(),
            this.tireSmokeLeft = new Image(),
            this.tireSmokeRight = new Image(),
            this.speedEffectUp = new Image(),
            this.speedEffectDown = new Image(),
            this.damageCar = new Image(),
            this.damageSmoke = new Image(),
            this.damageSmoke2 = new Image(),
            this.botDamageSmoke = new Image(),
            this.botDamageSmoke2 = new Image(),
            this.car = new Image(),
            this.name = null,
            this.readyGame = false,
            this.gameStart = false,
            this.endGame = false,
            this.bgStart = this.bg.height - 900,
            this.bgStart2 = this.bg2.height - 900,
            this.carX = 307,
            this.carY = 640,
            this.turn = null,
            this.gear = 0,
            this.gearUpPanel = false,
            this.speed = 8,
            this.speedHeightCar = 200,
            this.score = 0,
            this.deg = -45,
            this.speedUpText = false,
            this.pipeSmokeX = this.carX + this.car.width - 40,
            this.pipeSmokeY = this.carY + this.car.height,
            this.isPipeSmoke = true,
            this.isTireSmoke = true,
            this.isDamageSmoke = false,
            this.isBotDamageSmoke = false,
            this.speedActive = false,
            this.speedTogle = true,
            this.carFullDamage = false,
            this.damgeRotate = 0,
            this.damgeRotateBot = 0,
            this.botCars = [],
            this.botCars[0] = new BotCar(3),
            this.bg.src = 'img/road400.png',
            this.bg2.src = 'img/bg2.png',
            this.speedPanel.src = 'img/speedPanel.png',
            this.arrowSpeed.src = 'img/arrowSpeed.png',
            this.madMan.src = 'img/madMan.png',
            this.pipeSmoke1.src = 'img/smoke1.png',
            this.pipeSmoke2.src = 'img/smoke1rev.png',
            this.tireSmokeLeft.src = 'img/smokeLeft.png',
            this.tireSmokeRight.src = 'img/smokeRight.png',
            this.speedEffectUp.src = './img/speedUp.png',
            this.speedEffectDown.src = './img/speedDown.png',
            this.damageCar.src = 'img/car1-90pxDam.png',
            this.damageSmoke.src = 'img/damageSmoke.png',
            this.damageSmoke2.src = 'img/damageSmoke2.png',
            this.botDamageSmoke.src = 'img/botDamSmoke.png',
            this.botDamageSmoke2.src = 'img/botDamSmoke2.png',
            this.car.src = 'img/car1-90px.png',
            this.car.addEventListener('load', this.toReadyGame),
            document.addEventListener('keydown', this.turnCar),
            document.addEventListener('keyup', this.turnStop),
            this.btnNewGame.addEventListener('click', this.toStartNewGame),
            this.btnPauseGame.addEventListener('click', this.toPauseGame),
            this.formInputName.addEventListener('submit', this.sendNameClosePopUp),
            this.btnGameStart.addEventListener('click', this.startGame),
            this.btnRecordShow.addEventListener('click', this.showRecordTable),
            this.btnBackManu.addEventListener('click', this.backMainManu),
            this.btnTryAgain.addEventListener('click', this.startNewGame),
            this.btnAll.forEach(btn => btn.addEventListener('mouseover', () => { this.audioHoverBtn.play() })),
            this.btnAll.forEach(btn => btn.addEventListener('click', () => { this.audioClickBtn.play() }))
    }

    draw = () => {
        if (this.gear % 10 === 0 && this.gear != 0) {
            this.speed += 1;
            this.gear = 0;
            this.gearUpPanel = true;
            this.speedUpText = true;
        }

        if (this.bgStart < 0) {
            this.bgStart = this.bg.height - 900;
            this.gear += 1;
        }

        if (this.bgStart2 < 0) {
            this.bgStart2 = this.bg2.height - 900;
        }
        this.ctx.drawImage(this.bg2, 0, this.bgStart2, 800, 900, 0, 0, 800, 900)
        this.ctx.drawImage(this.bg, 0, this.bgStart, 400, 900, 200, 0, 400, 900)

        this.bgStart -= this.speed;
        this.bgStart2 -= this.speed;

        for (let i = 0; i < this.botCars.length; i++) {
            if (!this.botCars[i].damage) {
                this.ctx.drawImage(this.botCars[i].car, this.botCars[i].botcarX, this.botCars[i].botcarY);
                if (!this.botCars[i].damage) {
                    this.botCars[i].botcarY += this.speed - 2;
                }

                if (((this.carY <= this.botCars[i].botcarY + this.botCars[i].car.height && this.carY + this.car.height >= this.botCars[i].botcarY + this.botCars[i].car.height)

                    || (this.carY + this.car.height >= this.botCars[i].botcarY && this.carY <= this.botCars[i].botcarY))


                    && ((this.botCars[i].botcarX < this.carX && this.botCars[i].botcarX + this.botCars[i].car.width > this.carX)

                        || (this.botCars[i].botcarX < this.carX + this.car.width && this.botCars[i].botcarX + this.botCars[i].car.width > this.carX + this.car.width)

                        || ((this.botCars[i].botcarX > this.carX && this.botCars[i].botcarX < this.carX + this.car.width) && this.botCars[i].botcarX + this.botCars[i].car.width > this.carX && this.botCars[i].botcarX + this.botCars[i].car.width < this.carX + this.car.width))) {
                    this.speed = 0;
                    this.carFullDamage = true;
                    this.botCars[i].damage = true;


                    this.audioDamageCar.play();
                    this.audioEngine.pause();
                    this.audioEngine.currentTime = 0;
                    this.audioDeadEngine.play();
                    this.setDataInLS();
                    this.scoreText.textContent = `Score: ${this.score}`;
                    this.score = 0;
                    setTimeout(() => {
                        this.endGame = true;
                        this.endGameManu.classList.remove('hidden');
                    }, 2000)

                }

            } else {
                this.ctx.save();
                this.ctx.translate(this.botCars[i].botcarX + this.botCars[i].car.width / 2, this.botCars[i].botcarY + this.botCars[i].car.height / 2);
                if (this.damgeRotateBot > -80) {
                    this.damgeRotateBot -= 5;
                    this.ctx.rotate(this.damgeRotateBot * Math.PI / 180);
                    this.ctx.drawImage(this.botCars[i].car, (-this.botCars[i].car.width / 2) / 3, (-this.botCars[i].car.height / 2) - this.damgeRotateBot / 2);
                    this.toBotDamageSmoke(i);

                    this.ctx.restore();
                } else {
                    this.ctx.rotate(this.damgeRotateBot * Math.PI / 180);
                    this.ctx.drawImage(this.botCars[i].car, (-this.botCars[i].car.width / 2) / 3, (-this.botCars[i].car.height / 2) - this.damgeRotateBot / 2);
                    this.toBotDamageSmoke(i);
                    this.ctx.restore();
                }
            }

            if (this.speed > 10 && this.speed < 16) {
                this.speedHeightCar = 300;
            } else if (this.speed > 15) {
                this.speedHeightCar = 400;
            } else {
                this.speedHeightCar = 200;
            }

            if (!this.botCars[i].check) {
                if (this.botCars[i].botcarY > this.speedHeightCar) {
                    const random = Math.floor(0 + Math.random() * (3 + 1 - 0));
                    this.botCars.push(new BotCar(random));
                    this.botCars[i].check = true;
                }
            }

            if (this.botCars[i].botcarY > 1000) {
                this.botCars.shift();
                this.score += 100;
            }

        }

        if (this.speedActive) {
            this.drawSpeed();
        }

        if (!this.carFullDamage) {
            if (!this.turn) {
                this.ctx.drawImage(this.car, this.carX, this.carY);
                this.toPipeSmoke();
            } else if (this.turn === 'right') {
                this.ctx.save();
                this.ctx.translate(this.carX + this.car.width / 2, this.carY + this.car.height / 2);
                this.ctx.rotate(30 * Math.PI / 180);
                this.ctx.drawImage(this.car, -this.car.width / 2, -this.car.height / 2);
                this.toPipeSmokeRight();
                this.toTireSmokeRight();
                this.ctx.restore();
                if (this.carX < 550) {
                    this.carX += 5;
                    this.pipeSmokeX += 5;
                }
            } else if (this.turn === 'left') {
                this.ctx.save();
                this.ctx.translate(this.carX + this.car.width / 2, this.carY + this.car.height / 2);
                this.ctx.rotate(-30 * Math.PI / 180);
                this.ctx.drawImage(this.car, -this.car.width / 2, -this.car.height / 2);
                this.toPipeSmokeLeft();
                this.toTireSmokeLeft();
                this.ctx.restore();
                if (this.carX > 200) {
                    this.carX -= 5;
                    this.pipeSmokeX -= 5;
                }
            }
        } else {
            this.ctx.save();
            if (this.damgeRotate < 120) {
                this.carY -= 10
                this.carX += 3
            }

            this.ctx.translate(this.carX + this.damageCar.width / 2, this.carY + this.damageCar.height / 2);
            if (this.damgeRotate < 120) {
                this.damgeRotate += 5;
                this.ctx.rotate(this.damgeRotate * Math.PI / 180);
                this.ctx.drawImage(this.damageCar, (-this.damageCar.width / 2) / 3, (-this.damageCar.height / 2) - this.damgeRotate / 2);
                this.toDamageSmoke();
                this.ctx.restore();
            } else {
                this.ctx.rotate(this.damgeRotate * Math.PI / 180);
                this.ctx.drawImage(this.damageCar, (-this.damageCar.width / 2) / 3, (-this.damageCar.height / 2) - this.damgeRotate / 2);
                this.toDamageSmoke();
                this.ctx.restore();
            }

        }


        this.ctx.drawImage(this.speedPanel, 30, 720);

        if (this.gearUpPanel && this.deg < 220) {
            this.deg += 29.4;
            this.gearUpPanel = false;
        }

        this.ctx.save();
        this.ctx.translate(-this.arrowSpeed.width * 0.78 + 173, -this.arrowSpeed.height / 2 + 811);
        this.ctx.rotate(this.deg * Math.PI / 180);
        this.ctx.drawImage(this.arrowSpeed, -this.arrowSpeed.width * 0.78, -this.arrowSpeed.height / 2);
        this.ctx.restore();

        //-45 220  29.4

        this.ctx.beginPath();
        this.ctx.moveTo(5, 10);
        this.ctx.lineTo(200, 10);
        this.ctx.lineTo(200, 60);
        this.ctx.lineTo(5, 60);
        this.ctx.closePath();
        this.ctx.fillStyle = '#c3c9a8';
        this.ctx.fill();
        this.ctx.stroke();

        this.ctx.fillStyle = '#000';
        this.ctx.font = 'Bold 24px Verdana';
        this.ctx.fillText('Score: ' + this.score, 10, 43);

        if (this.speedUpText) {
            this.textSpeedUp()
        }

        if (this.gameStart && !this.endGame) {
            requestAnimationFrame(this.draw);
        }

    }

    textSpeedUp = () => {
        this.ctx.save();
        this.ctx.fillStyle = '#eeca00';
        this.ctx.font = 'Bold 39px Verdana';
        this.ctx.translate(this.cvs.width / 2, this.cvs.height / 2);
        this.ctx.fillText('FASTER', -95, 0);
        this.ctx.drawImage(this.madMan, 130, -230);
        this.ctx.restore();
        setTimeout(() => {
            this.speedUpText = false;
        }, 2000)
    }

    toPipeSmoke = () => {
        if (this.isPipeSmoke) {
            this.ctx.drawImage(this.pipeSmoke1, this.pipeSmokeX + 10, this.pipeSmokeY);
            this.isPipeSmoke = false;
        }
        setTimeout(() => {
            this.isPipeSmoke = true;
        }, 50)
    }

    toDamageSmoke = () => {
        this.ctx.drawImage(this.damageSmoke, -this.damageCar.width / 2, -this.damageCar.height / 2);
        if (this.isDamageSmoke) {
            this.ctx.drawImage(this.damageSmoke2, -this.damageCar.width / 2, -this.damageCar.height / 2);
            this.isDamageSmoke = false;
        }
        setTimeout(() => {
            this.isDamageSmoke = true;
        }, 50)
    }

    toBotDamageSmoke = (i) => {
        this.ctx.drawImage(this.botDamageSmoke, -this.botCars[i].car.width / 2, (-this.botCars[i].car.height / 2) + 40);
        if (this.isBotDamageSmoke) {
            this.ctx.drawImage(this.botDamageSmoke2, -this.botCars[i].car.width / 2, (-this.botCars[i].car.height / 2) + 40);
            this.isBotDamageSmoke = false;
        }
        setTimeout(() => {
            this.isBotDamageSmoke = true;
        }, 50)
    }

    toPipeSmokeRight = () => {
        if (this.isPipeSmoke) {
            this.ctx.drawImage(this.pipeSmoke1, -this.car.width / 2 + this.car.width - 30, -this.car.height / 2 + this.car.height);
            this.isPipeSmoke = false;
        }
        setTimeout(() => {
            this.isPipeSmoke = true;
        }, 50)
    }

    toPipeSmokeLeft = () => {
        if (this.isPipeSmoke) {
            this.ctx.drawImage(this.pipeSmoke1, -this.car.width / 2 + this.car.width - 30, -this.car.height / 2 + this.car.height);
            this.isPipeSmoke = false;
        }
        setTimeout(() => {
            this.isPipeSmoke = true;
        }, 50)
    }

    toTireSmokeRight = () => {
        if (this.isTireSmoke) {
            this.ctx.drawImage(this.tireSmokeLeft, -this.car.width / 2 - 90, -this.car.height / 2 + this.car.height - 120);
            this.isTireSmoke = false;
        }
        setTimeout(() => {
            this.isTireSmoke = true;
        }, 50)
    }

    toTireSmokeLeft = () => {
        if (this.isTireSmoke) {
            this.ctx.drawImage(this.tireSmokeRight, -this.car.width / 2 + 60, -this.car.height / 2 + this.car.height - 120)
            this.isTireSmoke = false;
        }
        setTimeout(() => {
            this.isTireSmoke = true;
        }, 50)
    }

    drawSpeed = () => {
        if (this.speedTogle) {
            this.ctx.drawImage(this.speedEffectDown, 0, this.cvs.height - this.speedEffectUp.height);
            this.ctx.drawImage(this.speedEffectUp, 0, 0);
            this.speedTogle = false;
        }
        setTimeout(() => {
            this.speedTogle = true;
        }, 200)
    }

    turnCar = (event) => {
        if (event.keyCode === 37) {
            this.audiotireSound.play();
            setTimeout(() => {
                this.audiotireSound.pause();
                this.audiotireSound.currentTime = 0;
            }, 700)
            this.turn = 'left';
        } else if (event.keyCode === 39) {
            this.audiotireSound.play();
            this.turn = 'right';
            setTimeout(() => {
                this.audiotireSound.pause();
                this.audiotireSound.currentTime = 0;
            }, 700)
        }
    }

    turnStop = (event) => {
        if (event.keyCode === 37) {
            this.turn = null;
        } else if (event.keyCode === 39) {
            this.turn = null;
        }
    }

    toStartNewGame = () => {
        this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);
        location.reload();
    }

    toPauseGame = () => {
        if (this.gameStart && !this.endGame) {
            this.gameStart = false;
        } else {
            this.gameStart = true;
            this.draw();
        }

    }

    toReadyGame = () => {
        this.readyGame = true;
    }

    showRecordTable = () => {
        this.recordForm.classList.toggle('hidden');
        this.showStatsUser();
    }

    showCountdownTimer = () => {
        this.countdownFirst.classList.remove('hidden');
        setTimeout(() => {
            this.countdownFirst.classList.add('hidden');
            this.countdownSecond.classList.remove('hidden');
        }, 1000);
        setTimeout(() => {
            this.countdownSecond.classList.add('hidden');
            this.countdownThird.classList.remove('hidden');
        }, 2000)
        setTimeout(() => {
            this.countdownThird.classList.add('hidden');
        }, 3000)
    }

    toDefault = () => {
        this.readyGame = true;
        this.gameStart = false;
        this.endGame = false;
        this.bgStart = this.bg.height - 900;
        this.bgStart2 = this.bg2.height - 900;
        this.carX = 307;
        this.carY = 640;
        this.turn = null;
        this.gear = 0;
        this.gearUpPanel = false;
        this.speed = 10;
        this.speedHeightCar = 200;
        this.score = 0;
        this.deg = -45;
        this.speedUpText = false;
        this.pipeSmokeX = this.carX + this.car.width - 40;
        this.pipeSmokeY = this.carY + this.car.height;
        this.isPipeSmoke = true;
        this.isTireSmoke = true;
        this.isDamageSmoke = false;
        this.isBotDamageSmoke = false;
        this.speedActive = false;
        this.speedTogle = true;
        this.carFullDamage = false;
        this.damgeRotate = 0;
        this.damgeRotateBot = 0;
        this.botCars = [];
        this.botCars[0] = new BotCar(3);
    }

    startGame = () => {
        this.toDefault();
        if (this.readyGame) {
            if (!this.recordForm.classList.contains('hidden')) {
                this.recordForm.classList.add('hidden');
            }
            this.audioStartEngine.play();
            this.draw();
            this.gameMainMenu.classList.add('hidden');
            this.showCountdownTimer();
            setTimeout(() => {
                this.audioStartEngine.pause();
                this.audioStartEngine.currentTime = 0;
                this.gameStart = true;
                this.draw();
                this.audioEngine.play();
            }, 3000)
        }
    }

    backMainManu = () => {
        this.endGameManu.classList.add('hidden');
        this.gameMainMenu.classList.remove('hidden');
    }

    startNewGame = () => {
        this.endGameManu.classList.add('hidden');
        this.toDefault();
        this.startGame();
    }

    sendNameClosePopUp = (event) => {
        event.preventDefault();
        if (this.inputName.value != '') {
            this.name = inputName.value;
            this.formInputName.classList.add('hidden');

            if (localStorage.getItem('users')) {
                let users = JSON.parse(localStorage.getItem('users'));
                let isFind = false;
                users.forEach(user => {
                    if (user.name === this.name) {
                        isFind = true;
                        this.recordName.textContent = user.name;
                        this.nameText.textContent = user.name;
                    }
                })

                if (!isFind) {
                    let user = {
                        name: this.name,
                        points: []
                    }
                    this.nameText.textContent = this.name;
                    users.push(user);
                    localStorage.setItem('users', JSON.stringify(users))
                }
            } else {
                let arrUsers = [];
                let user = {
                    name: this.name,
                    points: []
                }
                this.nameText.textContent = this.name;
                arrUsers.push(user);
                localStorage.setItem('users', JSON.stringify(arrUsers))
            }
        }
    }

    getDate = () => {
        const mainDate = new Date();
        const date = mainDate.getDate() < 10 ? `0${mainDate.getDate()}` : mainDate.getDate();
        const mounth = mainDate.getMonth() < 10 ? `0${mainDate.getMonth()}` : mainDate.getMonth();
        const hours = mainDate.getHours() < 10 ? `0${mainDate.getHours()}` : mainDate.getHours();
        const minutes = mainDate.getMinutes() < 10 ? `0${mainDate.getMinutes()}` : mainDate.getMinutes();
        return `${date}.${mounth}.${mainDate.getFullYear()}  ${hours}:${minutes}`;
    }

    setDataInLS = () => {
        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            users.forEach(user => {
                if (user.name === this.name) {
                    user.points.push({
                        score: this.score,
                        time: this.getDate()
                    })
                    if (user.points.length > 10) {
                        user.points.shift();
                    }
                }
                localStorage.setItem('users', JSON.stringify(users))
            })

        }
    }

    showStatsUser = () => {
        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            let isFind = false;
            users.forEach(user => {
                if (user.name === this.name) {
                    isFind = true;
                    this.recordName.textContent = user.name;
                    user.points.forEach((elemScore, indexScore) => {
                        this.recordsElements[indexScore].textContent = `${elemScore.time}______Score: ${elemScore.score}`;
                    })
                }
            })

            if (!isFind) {
                let user = {
                    name: this.name,
                    points: []
                }
                this.recordName.textContent = this.name;
                this.recordsElements.forEach(elem => {
                    elem.textContent = '-------';
                })
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users))
            }
        }
    }
}

const game = new Game(gameWrapper);

