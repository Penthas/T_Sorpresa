
class backgroundObj { //constructor (image, posX, posY, sizeX, sizeY)
    constructor (sprite, posX, posY, sizeX, sizeY){
        this.sprite = sprite;
        this.posX = posX;
        this.posY = posY;
        this.sizeX = sizeX;
        this.sizeY = sizeY;

       }
    }
let paisaje = new backgroundObj ("", "", "", "", ""); //Canvas 1280*740
let playableArea = new backgroundObj ("", "", "", "", "");

class MoveableActor { //constructor (sprite, posX, posY, sizeX, sizeY, vX, vY, aX, aY, playerContr, bckMovement, canHit, life){
    constructor (sprite, posX, posY, sizeX, sizeY, vX, vY, aX, aY, playerContr, bckMovement, canHit, life){
    this.sprite = sprite;
    this.posX = posX;
    this.posY = posY;
    this.sizeX = sizeX;
    this.sizeY = sizeY;
    this.vX = vX;
    this.vY = vY;
    this.aX = aX;
    this.playerContr = playerContr;
    this.bckMovement = bckMovement;
    this.canHit = canHit;
    this.life = life;
    }
} 
let player = new MoveableActor ("", "", "", "", "", "", "", "", "", "", "", "", "");

function setup (){
    //Game defaults
    colorMode(RGB);
    frameRate(30);  
    createCanvas (displayWidth, displayHeight);
    preDefineObjs ();
    } 
function preload (){
    preloadSprites ();
}

function preloadSprites (){
        //Sprites Background
         paisaje.sprite =  loadImage ("./js/sprites/Sand01.png");
         playableArea.sprite = loadImage ("./js/sprites/Water01.png");
        // Sprites nave
         player.sprite = loadImage("./js/sprites/barcoDcha.png");
}
function preDefineObjs (){ //Valores originales de cada objeto
   //background
    paisaje.posX = ((width/2) - 640) //Canvas 1280*740
    paisaje.posY = ((height/2) - 370)
    paisaje.sizeX = 1280;
    paisaje.sizeY = 740;
    playableArea.posX = paisaje.posX;
    playableArea.posY = paisaje.posY;
    playableArea.sizeX = 1280;
    playableArea.sizeY = (paisaje.sizeY * 0.75)
  //player
    player.posX = (playableArea.posX + (playableArea.sizeX/2));
    player.posY = (playableArea.posY + 100)
    player.sizeX = 55;
    player.sizeY = 55;
}
function reDrawBackgrounds (){
        // fondo arena
       image (paisaje.sprite, paisaje.posX, paisaje.posY, paisaje.sizeX, paisaje.sizeY);
       image (playableArea.sprite, playableArea.posX, playableArea.posY, playableArea.sizeX, playableArea.sizeY)

}
function reDrawActors (){
//Player
image (player.sprite, player.posX, player.posY, player.sizeX, player.sizeY);
}
function playerInput (){
    if ((keyIsDown(39) || keyIsDown(68))) {
        player.posX = player.posX + player.vX
        //nave.sprites.current = nave.sprites.dcha //Cambiar sprite
        //Moverse a la derecha
    }
}

function draw (){
   reDrawBackgrounds();
   reDrawActors ();
}