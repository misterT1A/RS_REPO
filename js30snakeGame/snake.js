import { Box } from "./box.js";
import { Target } from "./target.js";

export class Snake {
    constructor(game) {
        this.main = game;
        this.snake = [];
        this.direction = 'up'
        this.speed = 1;
        this.firstX = 6;
        this.firstY = 7;
    }

    addHead() {
        this.head = new Box(this.main, this.firstX, this.firstY)
    }

    addPart() {
        this.snake.unshift(new Box(this.main, this.head.lastX, this.head.lastY));
    }

    addNewTarget() {
        this.target = new Target(this.main);
        this.target.setXY();
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