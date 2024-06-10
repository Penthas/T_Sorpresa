function preload() {
    nave.sprites.dcha = loadImage("./js/sprites/barcoDcha.png");
    nave.sprites.izq = loadImage("./js/sprites/barcoIzq.png");
    nave.sprites.abajo = loadImage("./js/sprites/barcoAbajo.png");
    nave.sprites.arrib = loadImage("./js/sprites/barcoArriba.png");
    nave.sprites.current = nave.sprites.dcha;
}

function setup() {
    colorMode(RGB)
    frameRate(30);

}
class transform {
    constructor(posX, posY, sizeX, sizeY) {
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }
}
let backgroundObj = { sizeX: 1280, sizeY: 720, color: "yellow" }
let nave = {
    transfs: new transform(640, 510, 55, 55),
    sizeX: 55,
    sizeY: 55,
    vel: 10,
    sprites: {
        dcha: "",
        izq: "",
        arrib: "",
        abajo: "",
        izqArrib: "",
        izqAbajo: "",
        dchaArrib: "",
        dchaAbajo: "",
        current: "",

    },
    projectile: {
        coolDown: 0,
        posY: 0,
        speed: 20,
        size: 10,
        damage: 1,
        type: 0,
    },
}
let userUI = {
    vida: "",
    tiempoPartida: 0,
    vidaX: "",
    vidaY: "",
    tiempoX: 500,
    tiempoY: 500,
    debugMode: true,

}

function drawUI() {
    textSize(32);
    fill(255);
    stroke(80);
    strokeWeight(40000);
    if (frameCount % 30 == 0) {
        userUI.tiempoPartida = frameCount / 30;

    }

}

let playableArea = {
    transfs: new transform(0, (backgroundObj.sizeY * 0.30), backgroundObj.sizeX, (backgroundObj.sizeY / 0.30)),
    color: "blue",
}

function drawPlayableArea() {
    createCanvas(backgroundObj.sizeX, backgroundObj.sizeY);
    background(backgroundObj.color);
    fill(playableArea.color);
    rect(playableArea.transfs.posX, playableArea.transfs.posY, playableArea.transfs.sizeX, playableArea.transfs.sizeY);
    noFill();
}

function playerInput() {
    if (nave.projectile.coolDown > 0) {
        nave.projectile.coolDown = nave.projectile.coolDown - 1
    }
    if ((keyIsDown(39) || keyIsDown(68)) && !(nave.transfs.posX >= (playableArea.sizeX - 30))) {
        nave.transfs.posX = nave.transfs.posX + nave.vel
        nave.sprites.current = nave.sprites.dcha //Cambiar sprite
        //Moverse a la derecha
    }
    if ((keyIsDown(37) || keyIsDown(65)) && !(nave.transfs.posX <= playableArea.posX)) {
        nave.transfs.posX = nave.transfs.posX - nave.vel
        nave.sprites.current = nave.sprites.izq //Cambiar sprite
        //Moverse a la izq
    }
    if ((keyIsDown(38) || keyIsDown(87)) && !(nave.transfs.posY <= playableArea.posY)) {
        nave.transfs.posY = nave.transfs.posY - nave.vel
        nave.sprites.current = nave.sprites.arrib //Cambiar sprite
        //Moverse arriba
    }
    if ((keyIsDown(40) || keyIsDown(83)) && !(nave.transfs.posY >= 650)) {
        nave.transfs.posY = nave.transfs.posY + nave.vel
        nave.sprites.current = nave.sprites.abajo //Cambiar sprite
        //Moverse abajo
    }
}

function draw() {
    drawUI()
    drawPlayableArea()
    playerInput()
    image(nave.sprites.current, nave.transfs.posX, nave.transfs.posY, nave.sizeX, nave.sizeY)
    text(userUI.tiempoPartida, 640, 360)
    console.log(userUI.tiempoPartida)
}
