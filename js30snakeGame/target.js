

export class Target {
    constructor(game) {
        this.target = document.createElement('div');
        this.target.classList.add('target');
        game.append(this.target);
    }

    setXY() {
        this.x = Math.floor(Math.random() * 20);
        this.y = Math.floor(Math.random() * 20);
        this.target.style.setProperty('--x', `${this.x}`)
        this.target.style.setProperty('--y', `${this.y}`)
    }

    removeDOM() {
        this.target.remove();
    }
}