import { Box } from "./box.js";
import { Target } from "./target.js";

export class Snake {
    constructor(game) {
        this.main = game;
        this.snake = [];
        this.direction = 'up'
        this.speed = 800;
        this.firstX = 6;
        this.firstY = 7;
    }

    addHead() {
        this.head = new Box(this.main, this.firstX, this.firstY, 'head')
    }

    addPart() {
        this.snake.unshift(new Box(this.main, this.head.lastX, this.head.lastY, 'box'));
    }

    addNewTarget() {
        this.target = new Target(this.main);
        this.target.setXY();
    }

    nextSpeed() {

        switch (this.snake.length) {
            case 5:
                this.speed = 600;
                break;
            case 7:
                this.speed = 500;
                break;
            case 10:
                this.speed = 400;
                break;
            case 15:
                this.speed = 300;
                break;
            case 20:
                this.speed = 200;
                break;
            case 25:
                this.speed = 150;
                break;
            case 30:
                this.speed = 100;
                break;

            default:
                break;
        }
    }

    removeTarget() {
        this.target = null;
    }

    rebornTarget() {
        this.target.removeDOM();
        this.removeTarget();
        this.addNewTarget();
        this.target.setXY();
    }

    remobeBoxFromDOM() {
        this.snake[this.snake.length - 1].box.remove();
        this.snake.pop();
    }

    moveUp() {
        this.direction = 'up';
    }

    moveDown() {
        this.direction = 'down';
    }

    moveLeft() {
        this.direction = 'left';
    }

    moveRight() {
        this.direction = 'right';
    }
}