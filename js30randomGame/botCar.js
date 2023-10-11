
export class BotCar {
    constructor(random) {
        this.img = ['img/carBot1.png', 'img/carBot2.png', 'img/carBot3.png', 'img/carBot4.png', 'img/carBot5.png', 'img/carBot6.png'],
            this.random = Math.floor(0 + Math.random() * (this.img.length - 1 + 1 - 0)),
            this.botcarX = 200 + (random * 100 + 10),
            this.botcarY = -150,
            this.car = new Image(),
            this.check = false,
            this.damage = false,
            this.car.src = this.img[this.random]
    }
}