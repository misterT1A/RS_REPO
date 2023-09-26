
import { Snake } from "./snake.js";
import { Box } from "./box.js";
import { Target } from "./target.js";


const game = document.querySelector('.game');


const gameeee = new Target(game);
gameeee.setXY()

const snake = new Snake(game);
snake.addPart()
console.log(snake)
// let direction = 'up';
// let x = 6;
// let y = 7


// const snake = [];
// let snakeLast = 0;

// const box = new Box(game, x, y);
// snake.push(box)


// snakeLast = snake.length - 1;
// console.log(snake)
setImputOnce();




function setImputOnce() {
    window.addEventListener('keydown', handleInput, { once: true });
}

function handleInput(event) {
    switch (event.key) {
        case "ArrowUp":
            moveUp();
            setImputOnce();
            break;
        case "ArrowDown":
            moveDown();
            setImputOnce();
            break;
        case "ArrowLeft":
            moveLeft();
            setImputOnce();
            break;
        case "ArrowRight":
            moveRight();
            setImputOnce();
            break;

        default:
            setImputOnce();
            break;
    }
}

function moveUp() {
    direction = 'up'
}

function moveDown() {
    direction = 'down'
}

function moveLeft() {
    direction = 'left'
}

function moveRight() {
    direction = 'right'
}



setTimeout(() => {
    console.log(snake.snake[0])
    snake.snake[0].move(snake.direction);
    snake.snake[0].lastCoordinates();
    snake.snake[0].setBoxXY(snake.snake[0].nowX, snake.snake[0].nowY);
    console.log(snake.snake[0])
    // console.log(snake.snake[0].lastX)
}, 1000)

setTimeout(() => {

    snake.snake[0].move(snake.direction);
    snake.snake[0].lastCoordinates();
    snake.snake[0].setBoxXY(snake.snake[0].nowX, snake.snake[0].nowY);

    console.log(snake.snake[0].lastX)
}, 2000)



///snake очередь добавляется новая и в начало массива, последняя удаляется