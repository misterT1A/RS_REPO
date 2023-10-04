
const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

const bg = new Image();
const pipeSmoke1 = new Image();
const pipeSmoke2 = new Image();
const tireSmokeLeft = new Image();
const tireSmokeRight = new Image();
const car = new Image();


bg.src = 'img/road400.png';
pipeSmoke1.src = 'img/smoke1.png';
pipeSmoke2.src = 'img/smoke1rev.png';
tireSmokeLeft.src = 'img/smokeLeft.png';
tireSmokeRight.src = 'img/smokeRight.png';
car.src = 'img/car1-90px.png';

bgStart = bg.height - 900;

let carX = 7;
let carY = 640;
let turn = null;

let speed = 5;

let pipeSmokeX = carX + car.width - 40;
let pipeSmokeY = carY + car.height;
let isPipeSmoke = true;
let isTireSmoke = true;

const botCars = [];

const draw = () => {
    if (bgStart < 0) {

        bgStart = bg.height - 900;
    }
    ctx.drawImage(bg, 0, bgStart, 400, 900, 0, 0, 400, 900)
    bgStart -= speed;




    if (!turn) {
        ctx.drawImage(car, carX, carY);
        toPipeSmoke();
    } else if (turn === 'right') {
        ctx.save();
        ctx.translate(carX + car.width / 2, carY + car.height / 2);
        ctx.rotate(30 * Math.PI / 180);
        ctx.drawImage(car, -car.width / 2, -car.height / 2);
        toPipeSmokeRight();
        toTireSmokeRight();
        ctx.restore();
        carX += 3;
        pipeSmokeX += 3;
    } else if (turn === 'left') {
        ctx.save();
        ctx.translate(carX + car.width / 2, carY + car.height / 2);
        ctx.rotate(-30 * Math.PI / 180);
        ctx.drawImage(car, -car.width / 2, -car.height / 2);
        toPipeSmokeLeft();
        toTireSmokeLeft();
        ctx.restore();
        carX -= 3;
        pipeSmokeX -= 3;
    }

    // requestAnimationFrame(draw);
}



const toPipeSmoke = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, pipeSmokeX, pipeSmokeY);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toPipeSmokeRight = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, -car.width / 2 + car.width - 40, -car.height / 2 + car.height);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toPipeSmokeLeft = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, -car.width / 2 + car.width - 40, -car.height / 2 + car.height);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toTireSmokeRight = () => {
    if (isTireSmoke) {
        ctx.drawImage(tireSmokeLeft, -car.width / 2 - 75, -car.height / 2 + car.height - 120);
        isTireSmoke = false;
    }
    setTimeout(() => {
        isTireSmoke = true;
    }, 50)
}

const toTireSmokeLeft = () => {
    if (isTireSmoke) {
        ctx.drawImage(tireSmokeRight, -car.width / 2 + 75, -car.height / 2 + car.height - 120)
        isTireSmoke = false;
    }
    setTimeout(() => {
        isTireSmoke = true;
    }, 50)
}

const moveCar = (event) => {
    if (event.keyCode === 37) {
        turn = 'left';
    } else if (event.keyCode === 39) {
        turn = 'right';
    }
}

const moveStop = (event) => {
    if (event.keyCode === 37) {
        turn = null;
    } else if (event.keyCode === 39) {
        turn = null;
    }
}

car.addEventListener('load', draw);
document.addEventListener('keydown', moveCar);
document.addEventListener('keyup', moveStop);

