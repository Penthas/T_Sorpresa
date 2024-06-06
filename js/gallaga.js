function preload (){
    nave.sprites.dcha = loadImage ("./js/sprites/barcoDcha.png");
    nave.sprites.izq = loadImage ("./js/sprites/barcoIzq.png");
    nave.sprites.abajo = loadImage ("./js/sprites/barcoAbajo.png");
    nave.sprites.arrib = loadImage ("./js/sprites/barcoArriba.png");
    nave.sprites.current = nave.sprites.dcha;
}
function setup (){
   colorMode(RGB)
    createCanvas (backgroundObj.sizeX, backgroundObj.sizeY);
    background (backgroundObj.color);
}
let backgroundObj = {sizeX:1280, sizeY: 720, color: "yellow"}
let nave = {
    posX:640, 
    posY:510, 
    sizeX:55, 
    sizeY:55, 
    vel:10,
    sprites : {
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
   projectile : {
    coolDown: 0,
    posY: 0,
    speed: 20,
    size: 10,
    damage: 1,
    type: 0,
    },
}
function disparar (){
   nave.projectile.posY = nave.posY - nave.projectile.speed
    fill (255);
    circle(nave.posX, nave.projectile.posY, nave.projectile.size);
    noFill();
    nave.projectile.coolDown = nave.projectile.coolDown + 10
}
let playableArea = {
    posX: 0, 
    posY:(backgroundObj.sizeY*0.30),
    sizeX:backgroundObj.sizeX,
    sizeY:(backgroundObj.sizeY/0.30),
    color: "blue"

}

function drawPlayableArea (){
    fill(playableArea.color)
    rect (playableArea.posX, playableArea.posY, playableArea.sizeX, playableArea.sizeY)
    noFill ()
}

function playerInput (){
    if (nave.projectile.coolDown > 0) {
        nave.projectile.coolDown = nave.projectile.coolDown - 1
    }
    if ((keyIsDown (39) || keyIsDown (68)) && !(nave.posX >= (playableArea.sizeX-30))){
        nave.posX = nave.posX + nave.vel
        nave.sprites.current = nave.sprites.dcha //Cambiar sprite
        //Moverse a la derecha
    }
    if ((keyIsDown (37) || keyIsDown (65))  && !(nave.posX <= playableArea.posX)){
        nave.posX= nave.posX - nave.vel
        nave.sprites.current = nave.sprites.izq //Cambiar sprite
        //Moverse a la izq
    }
    if ((keyIsDown (38) || keyIsDown (87))  && !(nave.posY <= playableArea.posY)){
        nave.posY = nave.posY - nave.vel
        nave.sprites.current = nave.sprites.arrib //Cambiar sprite
        //Moverse arriba
    }
    if ((keyIsDown (40) || keyIsDown (83))  && !(nave.posY >= 650)){
        nave.posY = nave.posY + nave.vel
        nave.sprites.current = nave.sprites.abajo //Cambiar sprite
        //Moverse abajo
    }

    if (keyIsDown(81) && (nave.projectile.coolDown == 0)){
        disparar ()

    }
}

function draw (){
    drawPlayableArea()
    playerInput ()
    image (nave.sprites.current, nave.posX, nave.posY, [nave.sizeX], [nave.sizeY])
}
