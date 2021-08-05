var background1;
var astronaut;


function preload(){
  bg=loadImage("iss.png");
  sleep=loadAnimation("sleep.png");
  brush=loadAnimation("brush.png");
  gym=loadAnimation("gym1.png","gym2.png");
  eat=loadAnimation("eat1.png","eat2.png");
  drink=loadAnimation("drink1.png","drink2.png");
  move=loadAnimation("move.png","move1.png");
bath=loadAnimation("bath1.png","bath2.png");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  background1=createSprite(800,400);
  background1.addImage(bg);
astronaut=createSprite(300,230);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale=0.1
}

function draw() {
  background(255,255,255);  
 

if(keyDown("Up_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing");
  astronaut.y=250;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gymming",gym);
  astronaut.changeAnimation("gymming");
  astronaut.y=250;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing");
  astronaut.y=250;
  astronaut.velocityX=0;
  astronaut.velocityY=0;

}
if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating");
  astronaut.y=250;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("m")){
  astronaut.addAnimation(move);
  astronaut.changeAnimation();
  astronaut.y=250;
  astronaut.velocityX=2;
  astronaut.velocityY=2;
}



fill("black");
text("up arrow=brushing",600,30);
text("down arrow=Gyming",600,60);
text("right arrow=Bathing",600,80);
text("left arrow=Eating",600,100);
drawSprites();
}