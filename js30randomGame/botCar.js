
export class BotCar {
    constructor(random) {
        this.img = ['img/carBot1.png', 'img/carBot2.png', 'img/carBot3.png', 'img/carBot4.png', 'img/carBot5.png', 'img/carBot6.png'],
            this.imgRev = ['img/carBot1rev.png', 'img/carBot2rev.png', 'img/carBot3rev.png', 'img/carBot4rev.png', 'img/carBot5rev.png', 'img/carBot6rev.png'],
            this.random = Math.floor(0 + Math.random() * (this.img.length - 1 + 1 - 0))
        this.botcarX = random * 100 + 10,
            this.botcarY = -150,
            this.car = new Image(),
            // this.type = random > 1 ? this.car.src = this.img[this.random] : this.car.src = this.imgRev[this.random],
            this.check = false;
        this.car.src = this.img[this.random]
    }
}