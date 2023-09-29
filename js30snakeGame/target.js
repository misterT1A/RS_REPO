

export class Target {
    constructor(game) {
        this.target = document.createElement('div');
        this.target.classList.add('target');
        game.append(this.target);
        this.pict = ['img/apple-svgrepo-com.svg',
            'img/banana-svgrepo-com.svg',
            'img/kiwi-svgrepo-com.svg',
            'img/cherry-svgrepo-com.svg',
            'img/grapefruit-svgrepo-com.svg',
            'img/watermelon-svgrepo-com.svg']
        this.randomFruit = Math.floor(Math.random() * this.pict.length);
        this.target.style.backgroundImage = `url('${this.pict[this.randomFruit]}')`;
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