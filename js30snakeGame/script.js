
import { Snake } from "./snake.js";

class Game {
    constructor() {
        this.container = document.querySelector('.container');
        this.game = document.querySelector('.game');
        this.btns = this.container.querySelectorAll('.btn');
        this.scoreDOM = this.container.querySelector('.score');
        this.timeDOM = this.container.querySelector('.time');
        this.btnNewGame = this.container.querySelector('.newGame');
        this.btnTable = this.container.querySelector('.table');
        this.control = this.container.querySelector('.control');
        this.volumeBtn = this.container.querySelector('.volume');
        this.volumeIcon = this.container.querySelector('.volum_icon');
        this.popUpkid = this.container.querySelector('.kid');
        this.kidText = this.container.querySelector('.kid_text');
        this.popUpInputUser = document.querySelector('.user_name_wrapper');
        this.input = document.querySelector('input');
        this.btnSubmit = document.querySelector('.btnSubmit');
        this.recordTable = this.container.querySelector('.record_table');
        this.nameRecord = this.container.querySelector('.name_result');
        this.recordElem = this.container.querySelectorAll('.result');
        this.name = null;
        this.score = 0;
        this.time = 0;
        this.TochangeTime = null;
        this.snake = null;
        this.eat = false;
        this.startGame = false;
        this.soundClick = new Audio('sounds/click2.mp3');
        this.soundNewGame = new Audio('sounds/devil.mp3');
        this.bgSong = new Audio('sounds/song.mp3');
        this.soundHate = new Audio('sounds/hate.mp3');
        this.bgSong.volume = 0.5;
        this.bgSong.loop = true;
        this.btns.forEach(elem => elem.addEventListener('mouseover', this.playMouseOverBtn));
        this.btnNewGame.addEventListener('click', this.playClickNewGame);
        this.btnTable.addEventListener('click', this.showRecords);
        this.volumeBtn.addEventListener('click', this.changeMuteBGSong);
        this.control.addEventListener('click', this.seeControls);
        this.btnSubmit.addEventListener('click', this.sendNameClosePopUp);
        this.setImputOnce();
    }

    setImputOnce() {
        window.addEventListener('keydown', this.handleInput, { once: true });
    }

    handleInput(event) {
        switch (event.key) {
            case "ArrowUp":
                game.snake.moveUp();
                game.setImputOnce();
                break;
            case "ArrowDown":
                game.snake.moveDown();
                game.setImputOnce();
                break;
            case "ArrowLeft":
                game.snake.moveLeft();
                game.setImputOnce();
                break;
            case "ArrowRight":
                game.snake.moveRight();
                game.setImputOnce();
                break;
            default:
                game.setImputOnce();
                break;
        }
    }

    interval() {
        if (this.snake != null) {
            setTimeout(() => {
                if (this.snake != null) {
                    this.run()
                }
                this.interval()
            }, this.snake.speed);
        }
    }

    run() {
        this.snake.head.lastCoordinates();
        this.snake.head.move(this.snake.direction);
        this.checkTarger();
        this.checkTail();
        this.checkBorder();
        if (this.snake) {
            this.snake.head.setBoxXY();
            this.snake.addPart()
            this.snake.snake[0].setBoxXY()

            if (this.snake.snake.length > 2) {
                if (!this.eat) {
                    this.snake.remobeBoxFromDOM()
                } else {
                    this.snake.rebornTarget();
                    game.score += 100;
                    game.changeScore();
                }
                this.eat = false;
            }
            this.snake.nextSpeed();
        }
    }

    checkTarger() {
        if (this.snake) {
            if (this.snake.head.nowX === this.snake.target.x && this.snake.head.nowY === this.snake.target.y) {
                this.eat = true;
                this.snake.head.headEat();
                this.snake.rebornTarget()
            }

        }
    }

    checkBorder() {
        if (this.snake) {
            if (this.snake.head.nowX > 19 || this.snake.head.nowX < 0 || this.snake.head.nowY > 19 || this.snake.head.nowY < 0) {
                this.looseGame();
            }
        }
    }

    checkTail() {
        this.snake.snake.some(tail => {
            if (this.snake) {
                if (tail.nowX === this.snake.head.nowX && tail.nowY === this.snake.head.nowY) {
                    this.looseGame();
                }
            }
        })
    }

    looseGame() {
        this.seeLoose();
        this.snake = null;
        game.game.innerHTML = '';
        game.bgSong.pause();
        game.bgSong.currentTime = 0;
        game.timeDOM.textContent = 'Time: 00:00';
        game.scoreDOM.textContent = 'Score: 0';
        clearInterval(this.TochangeTime);
        game.setDataInLS();
        game.time = 0;
        game.score = 0;
        game.startGame = false;

    }

    toStartGame(game) {
        this.snake = new Snake(game)
        this.snake.addHead();
        this.snake.addNewTarget();
        this.interval()
    }

    playMouseOverBtn() {
        game.soundClick.play();
    }

    playClickNewGame() {
        if (!game.startGame) {
            game.startGame = true;
            game.soundNewGame.play();
            setTimeout(() => {
                game.bgSong.play();
                game.toStartGame(game.game)
                game.changeTime();
            }, 5000)
        }
    }

    changeMuteBGSong() {
        if (!game.bgSong.muted) {
            game.bgSong.muted = true;
            game.volumeIcon.src = './img/volume-cross-svgrepo-com.svg';
        } else {
            game.bgSong.muted = false;
            game.volumeIcon.src = './img/volume-loud-svgrepo-com.svg';
        }

    }

    changeScore() {
        this.scoreDOM.textContent = `Score: ${this.score}`;
    }

    changeTime = () => {
        this.TochangeTime = setInterval(() => {
            game.time += 1;
            let min = Math.floor(game.time / 60);
            let sec = game.time - (min * 60);
            if (sec.toString().length < 2) {
                sec = `0${sec}`;
            }
            this.timeDOM.textContent = `Time: 0${min}:${sec}`;
        }, 1000)
    }

    seeControls() {
        if (game.popUpkid.classList.contains('hidden')) {
            game.kidText.textContent = 'Ходить стрелочками! %*$##';
            game.popUpkid.classList.remove('hidden');
            game.soundHate.play();
            setTimeout(() => {
                game.popUpkid.classList.add('hidden');
            }, 2000)
        }
    }

    seeLoose() {
        if (game.popUpkid.classList.contains('hidden')) {
            game.kidText.textContent = `Ты проиграл, СТАРИК!! Набрал всего ${game.score} очков`;
            game.popUpkid.classList.remove('hidden');
            game.soundHate.play();
            setTimeout(() => {
                game.popUpkid.classList.add('hidden');
            }, 4000)
        }
    }

    showRecords() {
        game.recordTable.classList.toggle('hidden');
        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            users.forEach(user => {
                if (game.name === user.name) {
                    game.nameRecord.textContent = `${user.name}`;
                    user.points.forEach((elem, index) => {
                        game.recordElem[index].textContent = `score ${elem.score} time: ${elem.time}`;
                    })
                } else {
                    game.nameRecord.textContent = `Name`;
                    game.recordElem.forEach(elem => {
                        elem.textContent = 'empty';
                    })
                }
            })
        }
    }

    sendNameClosePopUp(event) {
        event.preventDefault();
        if (game.input.value != '') {
            game.name = game.input.value;
            game.popUpInputUser.classList.add('hidden');
        }
    }

    setDataInLS() {
        if (localStorage.getItem('users')) {
            let users = JSON.parse(localStorage.getItem('users'));
            console.log(users)
            let coincidence = false;
            users.forEach(user => {
                if (user.name === game.name) {
                    console.log(user.points)
                    coincidence = true;
                    user.points.push({
                        score: game.score,
                        time: game.time
                    })
                    if (user.points.length > 10) {
                        user.points.shift();
                    }
                }
                localStorage.setItem('users', JSON.stringify(users))
            })
            if (!coincidence) {
                let user = {
                    name: game.name,
                    points: []
                }
                user.points.push({
                    score: game.score,
                    time: game.time
                })
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users))
            }
        } else {
            let arrUsers = [];
            let user = {
                name: game.name,
                points: []
            }
            user.points.push({
                score: game.score,
                time: game.time
            })
            arrUsers.push(user);
            localStorage.setItem('users', JSON.stringify(arrUsers))
        }
    }

}

const game = new Game();
// game.setImputOnce();





// const game = document.querySelector('.game');
// const audio = new Audio();
// let snake = null;
// let eat = false;

