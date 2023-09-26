
export class Box {
    constructor(game, x, y) {
        this.box = document.createElement('div');
        this.box.classList.add('box');
        game.append(this.box);
        this.nowX = x;
        this.nowY = y;
    }

    futureCoordinates(x, y) {
        this.futureX = x;
        this.FutureY = y;
    }

    lastCoordinates() {
        this.lastX = this.nowX;
        this.lastY = this.nowY;
    }

    setBoxXY(x, y) {
        this.nowX = x;
        this.nowY = y;
        this.box.style.setProperty('--x', `${this.nowX}`)
        this.box.style.setProperty('--y', `${this.nowY}`)
    }

    move(direction) {
        switch (direction) {
            case 'up':
                this.nowY -= 1
                break;
            case 'down':
                this.nowY += 1
                break;
            case 'left':
                this.nowX -= 1
                break;
            case 'right':
                this.nowX += 1
                break;
            default:
                break;
        }
    }

    remobeBoxFromDOM(snake) {
        snake[snake.length - 1].box.remove();
    }
}