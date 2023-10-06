import { BotCar } from "./botCar.js";

const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

const bg = new Image();
const pipeSmoke1 = new Image();
const pipeSmoke2 = new Image();
const tireSmokeLeft = new Image();
const tireSmokeRight = new Image();
const speedEffectUp = new Image();
const speedEffectDown = new Image();
const car = new Image();


bg.src = 'img/road400.png';
pipeSmoke1.src = 'img/smoke1.png';
pipeSmoke2.src = 'img/smoke1rev.png';
tireSmokeLeft.src = 'img/smokeLeft.png';
tireSmokeRight.src = 'img/smokeRight.png';
speedEffectUp.src = './img/speedUp.png';
speedEffectDown.src = './img/speedDown.png';
car.src = 'img/car1-90px.png';

let bgStart = bg.height - 900;

let carX = 7;
let carY = 640;
let turn = null;

let speed = 5;

let pipeSmokeX = carX + car.width - 40;
let pipeSmokeY = carY + car.height;
let isPipeSmoke = true;
let isTireSmoke = true;

let speedActive = false;
let speedTogle = true;

const botCars = [];
const botCarsRev = [];
botCars[0] = new BotCar(3);
botCarsRev[0] = new BotCar(1);


const draw = () => {
    if (bgStart < 0) {

        bgStart = bg.height - 900;
    }
    ctx.drawImage(bg, 0, bgStart, 400, 900, 0, 0, 400, 900)
    bgStart -= speed;

    for (let i = 0; i < botCars.length; i++) {

        ctx.drawImage(botCars[i].car, botCars[i].botcarX, botCars[i].botcarY);
        botCars[i].botcarY += speed - 2;
        if (((carY <= botCars[i].botcarY + botCars[i].car.height
            && carY + car.height >= botCars[i].botcarY + botCars[i].car.height)
            || (carY + car.height >= botCars[i].botcarY && carY <= botCars[i].botcarY))
            && ((botCars[i].botcarX < carX && carX < botCars[i].botcarX + botCars[i].car.width)
                || (botCars[i].botcarX < carX + car.width
                    && carX + car.width < botCars[i].botcarX + botCars[i].car.width))) {
            console.log('dfdf')
        }


        if (!botCars[i].check) {
            if (botCars[i].botcarY > 200) {
                const random = Math.floor(0 + Math.random() * (3 + 1 - 0));
                // const random = Math.random() > 0.5 ? 2 : 3;
                botCars.push(new BotCar(random));
                botCars[i].check = true;
            }

            if (botCars[i].botcarY > 1000) {
                botCars.shift();
            }
        }

    }

    // for (let i = 0; i < botCarsRev.length; i++) {
    //     ctx.drawImage(botCarsRev[i].car, botCarsRev[i].botcarX, botCarsRev[i].botcarY);

    //     botCarsRev[i].botcarY += speed + 2;

    //     if (!botCarsRev[i].check) {
    //         if (botCarsRev[i].botcarY > 200) {

    //             // const random = Math.floor(0 + Math.random() * (1 + 1 - 0));
    //             const random = Math.random() > 0.5 ? 0 : 1;
    //             botCarsRev.push(new BotCar(random));
    //             botCarsRev[i].check = true;
    //         }

    //         if (botCarsRev[i].botcarY > 1000) {
    //             botCarsRev.shift();
    //         }
    //     }
    // }
    if (speedActive) {
        drawSpeed();
    }


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


// const checkDamge = (i) => {
//     if(car.)
// }

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

const drawSpeed = () => {
    if (speedTogle) {
        ctx.drawImage(speedEffectDown, 0, cvs.height - speedEffectUp.height);
        ctx.drawImage(speedEffectUp, 0, 0);
        speedTogle = false;
    }
    setTimeout(() => {
        speedTogle = true;
    }, 200)
}

const turnCar = (event) => {
    if (event.keyCode === 37) {
        turn = 'left';
    } else if (event.keyCode === 39) {
        turn = 'right';
    }
}

const turnStop = (event) => {
    if (event.keyCode === 37) {
        turn = null;
    } else if (event.keyCode === 39) {
        turn = null;
    }
}

const moveCar = (event) => {
    if (event.keyCode === 38) {
        speedActive = true;
        console.log(speed)
        if (speed < 10) {
            speed += 1;
        }

    } else if (event.keyCode === 40) {
        if (speed > 0) {
            speed -= 0.5;
        }
    }
}

const moveStop = (event) => {
    if (event.keyCode === 38) {
        console.log('dfdf')
        speedActive = false;
        speed = 5;
        // if (!speedActive) {
        //     const count = 4;
        //     const interval = setInterval(() => {
        //         if (count != 0) {
        //             let newSpeed = (speed - 5) / 4;
        //             speed -= newSpeed;
        //         } else {
        //             clearInterval(interval);
        //         }

        //     }, 100)
        // }

    } else if (event.keyCode === 40) {
        speed = 5;
        // const count = 4;
        // const interval = setInterval(() => {
        //     if (count != 0) {
        //         let newSpeed = (speed - 5) / 4;
        //         speed += newSpeed;
        //     } else {
        //         clearInterval(interval);
        //     }

        // }, 100)
    }
}

car.addEventListener('load', draw);
document.addEventListener('keydown', moveCar);
document.addEventListener('keydown', turnCar);
document.addEventListener('keyup', moveStop);
document.addEventListener('keyup', turnStop);

