import { BotCar } from "./botCar.js";

const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

const bg = new Image();
const bg2 = new Image();
const speedPanel = new Image();
const arrowSpeed = new Image();
const pipeSmoke1 = new Image();
const pipeSmoke2 = new Image();
const tireSmokeLeft = new Image();
const tireSmokeRight = new Image();
const speedEffectUp = new Image();
const speedEffectDown = new Image();
const damageCar = new Image();
const damageSmoke = new Image();
const damageSmoke2 = new Image();
const botDamageSmoke = new Image();
const botDamageSmoke2 = new Image();
const car = new Image();


bg.src = 'img/road400.png';
bg2.src = 'img/bg2.png';
speedPanel.src = 'img/speedPanel.png';
arrowSpeed.src = 'img/arrowSpeed.png';
pipeSmoke1.src = 'img/smoke1.png';
pipeSmoke2.src = 'img/smoke1rev.png';
tireSmokeLeft.src = 'img/smokeLeft.png';
tireSmokeRight.src = 'img/smokeRight.png';
speedEffectUp.src = './img/speedUp.png';
speedEffectDown.src = './img/speedDown.png';
damageCar.src = 'img/car1-90pxDam.png';
damageSmoke.src = 'img/damageSmoke.png';
damageSmoke2.src = 'img/damageSmoke2.png';
botDamageSmoke.src = 'img/botDamSmoke.png';
botDamageSmoke2.src = 'img/botDamSmoke2.png';
car.src = 'img/car1-90px.png';

let gameStart = true;

let bgStart = bg.height - 900;
let bgStart2 = bg2.height - 900;

let carX = 207;
let carY = 640;
let turn = null;

let speed = 10;

let pipeSmokeX = carX + car.width - 40;
let pipeSmokeY = carY + car.height;
let isPipeSmoke = true;
let isTireSmoke = true;
let isDamageSmoke = false;
let isBotDamageSmoke = false;

let speedActive = false;
let speedTogle = true;

let carFullDamage = false;
let damgeRotate = 0;
let damgeRotateBot = 0;

const botCars = [];
botCars[0] = new BotCar(3);

const draw = () => {


    if (bgStart < 0) {
        bgStart = bg.height - 900;
    }

    if (bgStart2 < 0) {
        bgStart2 = bg2.height - 900;
    }
    ctx.drawImage(bg2, 0, bgStart2, 800, 900, 0, 0, 800, 900)
    ctx.drawImage(bg, 0, bgStart, 400, 900, 200, 0, 400, 900)

    bgStart -= speed;
    bgStart2 -= speed;

    for (let i = 0; i < botCars.length; i++) {
        if (!botCars[i].damage) {

            ctx.drawImage(botCars[i].car, botCars[i].botcarX, botCars[i].botcarY);
            if (!botCars[i].damage) {
                botCars[i].botcarY += speed - 2;
            }

            if (((carY <= botCars[i].botcarY + botCars[i].car.height && carY + car.height >= botCars[i].botcarY + botCars[i].car.height)

                || (carY + car.height >= botCars[i].botcarY && carY <= botCars[i].botcarY))


                && ((botCars[i].botcarX < carX && botCars[i].botcarX + botCars[i].car.width > carX)

                    || (botCars[i].botcarX < carX + car.width && botCars[i].botcarX + botCars[i].car.width > carX + car.width)

                    || ((botCars[i].botcarX > carX && botCars[i].botcarX < carX + car.width) && botCars[i].botcarX + botCars[i].car.width > carX && botCars[i].botcarX + botCars[i].car.width < carX + car.width))) {
                speed = 0;
                carFullDamage = true;
                botCars[i].damage = true;
                setTimeout(() => {
                    gameStart = false;
                }, 2000)

            }

        } else {
            ctx.save();
            ctx.translate(botCars[i].botcarX + botCars[i].car.width / 2, botCars[i].botcarY + botCars[i].car.height / 2);
            if (damgeRotateBot > -80) {
                damgeRotateBot -= 5;
                ctx.rotate(damgeRotateBot * Math.PI / 180);
                ctx.drawImage(botCars[i].car, (-botCars[i].car.width / 2) / 3, (-botCars[i].car.height / 2) - damgeRotateBot / 2);
                toBotDamageSmoke(i);

                ctx.restore();
            } else {
                ctx.rotate(damgeRotateBot * Math.PI / 180);
                ctx.drawImage(botCars[i].car, (-botCars[i].car.width / 2) / 3, (-botCars[i].car.height / 2) - damgeRotateBot / 2);
                toBotDamageSmoke(i);
                ctx.restore();
            }
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

    if (speedActive) {
        drawSpeed();
    }

    if (!carFullDamage) {
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
            if (carX < 550) {
                carX += 5;
                pipeSmokeX += 5;
            }
        } else if (turn === 'left') {
            ctx.save();
            ctx.translate(carX + car.width / 2, carY + car.height / 2);
            ctx.rotate(-30 * Math.PI / 180);
            ctx.drawImage(car, -car.width / 2, -car.height / 2);
            toPipeSmokeLeft();
            toTireSmokeLeft();
            ctx.restore();
            if (carX > 200) {
                carX -= 5;
                pipeSmokeX -= 5;
            }
        }
    } else {
        ctx.save();
        if (damgeRotate < 120) {
            carY -= 10
            carX += 3
        }

        ctx.translate(carX + damageCar.width / 2, carY + damageCar.height / 2);
        if (damgeRotate < 120) {
            damgeRotate += 5;
            ctx.rotate(damgeRotate * Math.PI / 180);
            ctx.drawImage(damageCar, (-damageCar.width / 2) / 3, (-damageCar.height / 2) - damgeRotate / 2);
            toDamageSmoke();
            ctx.restore();
        } else {
            ctx.rotate(damgeRotate * Math.PI / 180);
            ctx.drawImage(damageCar, (-damageCar.width / 2) / 3, (-damageCar.height / 2) - damgeRotate / 2);
            toDamageSmoke();
            ctx.restore();
        }

    }


    ctx.drawImage(speedPanel, 30, 720);

    ctx.save();
    ctx.translate(302, 776 + arrowSpeed.height / 2);
    ctx.rotate(30 * Math.PI / 180);
    ctx.drawImage(arrowSpeed, 234, 776);
    ctx.restore();


    if (gameStart) {
        // requestAnimationFrame(draw);
    }

}

const toPipeSmoke = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, pipeSmokeX + 10, pipeSmokeY);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toDamageSmoke = () => {
    ctx.drawImage(damageSmoke, -damageCar.width / 2, -damageCar.height / 2);
    if (isDamageSmoke) {
        ctx.drawImage(damageSmoke2, -damageCar.width / 2, -damageCar.height / 2);
        isDamageSmoke = false;
    }
    setTimeout(() => {
        isDamageSmoke = true;
    }, 50)
}

const toBotDamageSmoke = (i) => {
    ctx.drawImage(botDamageSmoke, -botCars[i].car.width / 2, (-botCars[i].car.height / 2) + 40);
    if (isBotDamageSmoke) {
        ctx.drawImage(botDamageSmoke2, -botCars[i].car.width / 2, (-botCars[i].car.height / 2) + 40);
        isBotDamageSmoke = false;
    }
    setTimeout(() => {
        isBotDamageSmoke = true;
    }, 50)
}

const toPipeSmokeRight = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, -car.width / 2 + car.width - 30, -car.height / 2 + car.height);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toPipeSmokeLeft = () => {
    if (isPipeSmoke) {
        ctx.drawImage(pipeSmoke1, -car.width / 2 + car.width - 30, -car.height / 2 + car.height);
        isPipeSmoke = false;
    }
    setTimeout(() => {
        isPipeSmoke = true;
    }, 50)
}

const toTireSmokeRight = () => {
    if (isTireSmoke) {
        ctx.drawImage(tireSmokeLeft, -car.width / 2 - 90, -car.height / 2 + car.height - 120);
        isTireSmoke = false;
    }
    setTimeout(() => {
        isTireSmoke = true;
    }, 50)
}

const toTireSmokeLeft = () => {
    if (isTireSmoke) {
        ctx.drawImage(tireSmokeRight, -car.width / 2 + 60, -car.height / 2 + car.height - 120)
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

