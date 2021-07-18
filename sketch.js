var ship,ship_running;
var sea, seaImage,invisibleGround;

function preload(){
  ship_running = loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(1000,400);

  sea = createSprite(250,250,250,100);
  sea.addImage("sea", seaImage);
  sea.scale = 0.5;

  ship = createSprite(180,300,30,20);
  ship.addAnimation("running", ship_running);
  ship.x = 300;
  ship.scale = 0.2;

  invisibleGround = createSprite(500,350,1000,5);
  invisibleGround.visible = false;
}

function draw(){
  background("blue");

  sea.velocityX = -5;
  console.log(ship.x);

if(sea.x<0){
  sea.x = 600;
}

if(keyDown("space")){
  ship.velocityY =  -10;
}

ship.velocityY = ship.velocityY + 0.8;

ship.collide(invisibleGround);

drawSprites();
text(mouseX,200,50);
text(mouseY,250,50)
}


