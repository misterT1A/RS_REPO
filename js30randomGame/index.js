import { BotCar } from "./botCar.js";

const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');

const bg = new Image();
const bg2 = new Image();
const speedPanel = new Image();
const arrowSpeed = new Image();
const madMan = new Image();
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
madMan.src = 'img/madMan.png';
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

let carX = 307;
let carY = 640;
let turn = null;

let gear = 0;
let gearUpPanel = false;
let speed = 10;
let speedHeightCar = 200;
let score = 0;
let deg = -45;
let speedUpText = false;

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
    if (gear % 10 === 0 && gear != 0) {
        speed += 1;
        gear = 0;
        gearUpPanel = true;
        speedUpText = true;
    }

    if (bgStart < 0) {
        bgStart = bg.height - 900;
        gear += 1;
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

        if (speed > 10 && speed < 16) {
            speedHeightCar = 300;
        } else if (speed > 15) {
            speedHeightCar = 400;
        } else {
            speedHeightCar = 200;
        }

        if (!botCars[i].check) {
            if (botCars[i].botcarY > speedHeightCar) {
                const random = Math.floor(0 + Math.random() * (3 + 1 - 0));
                botCars.push(new BotCar(random));
                botCars[i].check = true;
            }
        }

        if (botCars[i].botcarY > 1000) {
            botCars.shift();
            score += 100;
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

    if (gearUpPanel && deg < 220) {
        deg += 29.4;
        gearUpPanel = false;
    }

    ctx.save();
    ctx.translate(-arrowSpeed.width * 0.78 + 173, -arrowSpeed.height / 2 + 811);
    ctx.rotate(deg * Math.PI / 180);
    ctx.drawImage(arrowSpeed, -arrowSpeed.width * 0.78, -arrowSpeed.height / 2);
    ctx.restore();

    //-45 220  29.4

    ctx.beginPath();
    ctx.moveTo(5, 10);
    ctx.lineTo(200, 10);
    ctx.lineTo(200, 60);
    ctx.lineTo(5, 60);
    ctx.closePath();
    ctx.fillStyle = '#c3c9a8';
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#000';
    ctx.font = 'Bold 24px Verdana';
    ctx.fillText('Score: ' + score, 10, 43);

    if (speedUpText) {
        textSpeedUp()
    }

    if (gameStart) {
        requestAnimationFrame(draw);
    }

}


const textSpeedUp = () => {
    ctx.save();
    ctx.fillStyle = '#eeca00';
    ctx.font = 'Bold 39px Verdana';
    ctx.translate(cvs.width / 2, cvs.height / 2);
    ctx.fillText('FASTER', -95, 0);
    ctx.drawImage(madMan, 130, -230);
    ctx.restore();
    setTimeout(() => {
        speedUpText = false;
    }, 2000)
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

