import { Box } from "./box.js";

export class Snake {
    constructor(game) {
        this.main = game;
        this.snake = [];
        this.direction = 'up'
        this.firstX = 7;
        this.firstY = 7;
    }

    addPart() {
        if (!this.snake.length) {
            this.snake.push(new Box(this.main, this.firstX, this.firstY));
        } else {

        }

    }


}