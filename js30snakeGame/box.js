
export class Box {
    constructor(game, x, y, part) {
        this.box = document.createElement('div');
        this.box.classList.add(part);
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

    setBoxXY() {
        this.box.style.setProperty('--x', `${this.nowX}`)
        this.box.style.setProperty('--y', `${this.nowY}`)
    }

    headEat() {
        this.box.classList.add('big');
        setTimeout(() => {
            this.box.classList.remove('big');
        }, 200)
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


}