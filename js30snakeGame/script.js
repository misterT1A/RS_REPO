
import { Snake } from "./snake.js";


const game = document.querySelector('.game');
let snake = new Snake(game)
snake.addHead();
snake.addNewTarget();
let eat = false;
let loose = false;

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

// setInterval(() => run(), 1000);

function run() {
    if (!loose) {
        snake.head.lastCoordinates();
        snake.head.move(snake.direction);
        snake.head.setBoxXY();
        checkTarger();
        checkTail();
        checkBorder();
        snake.addPart()
        snake.snake[0].setBoxXY()

        if (snake.snake.length > 6) {
            if (!eat) {
                snake.remobeBoxFromDOM()

            } else {
                snake.rebornTarget();
            }
            eat = false;
        }
    } else {
        alert('YOU LOOSE');
        snake = null;
    }
}

function checkTarger() {
    if (snake.head.nowX === snake.target.x && snake.head.nowY === snake.target.y) {
        eat = true;
    }
}

function checkBorder() {
    if (snake.head.nowX > 19 || snake.head.nowX < 0 || snake.head.nowY > 19 || snake.head.nowY < 0) {
        loose = true;
    }
}

function checkTail() {
    snake.snake.forEach(tail => {
        if (tail.nowX === snake.head.nowX && tail.nowY === snake.head.nowY) {
            loose = true;
        }
    })
}


