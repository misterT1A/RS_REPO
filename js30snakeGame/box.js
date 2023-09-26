
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

    lastCoordinates(x, y) {
        this.lastX = x;
        this.lastY = y;
    }

    setBoxXY(x, y) {
        this.nowX = x;
        this.nowY = y;
        this.box.style.setProperty('--x', `${this.nowX}`)
        this.box.style.setProperty('--y', `${this.nowY}`)
    }
}