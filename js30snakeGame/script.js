
import { Snake } from "./snake.js";


const game = document.querySelector('.game');
let snake = null;
let eat = false;

setImputOnce();
function setImputOnce() {
    window.addEventListener('keydown', handleInput, { once: true });
}

function handleInput(event) {
    switch (event.key) {
        case "ArrowUp":
            snake.moveUp();
            setImputOnce();
            break;
        case "ArrowDown":
            snake.moveDown();
            setImputOnce();
            break;
        case "ArrowLeft":
            snake.moveLeft();
            setImputOnce();
            break;
        case "ArrowRight":
            snake.moveRight();
            setImputOnce();
            break;
        default:
            setImputOnce();
            break;
    }
}

function interval() {
    if (snake != null) {
        setTimeout(() => {
            if (snake != null) {
                run()
            }
            interval()
        }, snake.speed);
    }
}

function run() {
    snake.head.lastCoordinates();
    snake.head.move(snake.direction);
    checkTarger();
    checkTail();
    checkBorder();
    if (snake) {
        snake.head.setBoxXY();
        snake.addPart()
        snake.snake[0].setBoxXY()

        if (snake.snake.length > 2) {
            if (!eat) {
                snake.remobeBoxFromDOM()

            } else {
                snake.rebornTarget();
            }
            eat = false;
        }

        snake.nextSpeed();
        console.log(snake.speed)
    }
}

function checkTarger() {
    if (snake) {
        if (snake.head.nowX === snake.target.x && snake.head.nowY === snake.target.y) {
            eat = true;
            snake.head.headEat();
            snake.rebornTarget()
        }

    }
}

function checkBorder() {
    if (snake) {
        if (snake.head.nowX > 19 || snake.head.nowX < 0 || snake.head.nowY > 19 || snake.head.nowY < 0) {
            looseGame();
        }
    }
}

function checkTail() {
    snake.snake.some(tail => {
        if (snake) {
            if (tail.nowX === snake.head.nowX && tail.nowY === snake.head.nowY) {
                looseGame();
            }
        }
    })
}

function looseGame() {
    alert('YOU LOOSE');
    snake = null;
    game.innerHTML = '';
}

function toStartGame(game) {
    snake = new Snake(game)
    snake.addHead();
    snake.addNewTarget();
    interval()
}

setTimeout(() => {
    toStartGame(game)
// }, 2000)
