
import { Game } from "./game.js";
import { Box } from "./box.js";
import { Target } from "./target.js";


const game = document.querySelector('.game');


const gameeee = new Target(game);
gameeee.setXY()


let x = 6;
let y = 7
const box = new Box(game, x, y);

let direction = 'up';



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

// move(x, y);

function move(x, y) {
    setInterval(() => {
        box.setBoxXY(x, y)
        switch (direction) {
            case 'up':
                y -= 1
                break;
            case 'down':
                y += 1
                break;
            case 'left':
                x -= 1
                break;
            case 'right':
                x += 1
                break;
            default:
                break;
        }
    }, 500)
}