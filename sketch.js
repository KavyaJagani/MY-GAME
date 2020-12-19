var score=0
gameState="play"




function preload(){
carImg=loadImage("car.jpg.png");
roadImg=loadImage("TRACK.jpg");
stoneImg=loadImage("stone.jpg.png")
obstacles1=loadImage("obstacles1.png");
obstacles2=loadImage("obstacles2.png");
obstacles3=loadImage("obstacles3.png");
obstacles4=loadImage("obstacles4.png");
speedbraker=loadImage("speedbraker.jpg.png");
gameoverImg=loadImage("gameover.jpg");
restartImg=loadImage("restart.png");
}



function setup(){

  createCanvas(1200,600);
  
obstaclesGroup=new Group();

  road=createSprite(400,300,1200,600)
  road.addImage(roadImg);
  road.velocityX=-4
 
  car=createSprite(50,300)
  car.addImage(carImg);
  car.scale=0.25

  gameover=createSprite(600,200)
  gameover.addImage(gameoverImg);
  gameover.scale=0.75

  restart=createSprite(600,400)
  restart.addImage(restartImg);
restart.scale=0.2


}
function draw(){
  console.log(gameState)
if(gameState==="play"){





if (road.x<0){
road.x=400
}

if(keyDown(UP_ARROW)&& car.y>150){
  car.y=car.y-5
  

}
if(keyDown(DOWN_ARROW)&& car.y<450){
  car.y=car.y+5

}


score=score+round(frameCount/400);

restart.visible=false;
gameover.visible=false;

  spawnObstacles();
  if(obstaclesGroup.isTouching(car)){
    gameState="END"
  }
  drawSprites();
  textSize(20)
  fill("blue")
  text("SCORE: "+score,10,90)
  
}
 if (gameState==="END"){
   background(0)
console.log("hello")
  restart.visible=true;
  gameover.visible=true;
  car.visible=false;
  road.visible=false;
  obstaclesGroup.destroyEach();

  if(mousePressedOver(restart)){
    background(255)
    car.visible=true;
  road.visible=true;
     gameState="play"
     score=0

  }
  drawSprites();
 }


}



function spawnObstacles(){

   if(frameCount%100===0){
    obstacles=createSprite(600,300);
    obstacles.y=random(150,350)
    obstacles.velocityX=-4;
   // obstacles.scale=0.20
    
    var num=Math.round(random(1,6))
    switch(num){
      
      case 1:obstacles.addImage(stoneImg);
      obstacles.scale=0.20
      break;
      case 2:obstacles.addImage(obstacles1);
      break;
      case 3:obstacles.addImage(obstacles2);
      break;
      case 4:obstacles.addImage(obstacles3);
      break;
      case 5:obstacles.addImage(obstacles4);
      break;
      case 6:obstacles.addImage(speedbraker);
      obstacles.scale=0.30
      break;

      default:break;
    }
    obstaclesGroup.add(obstacles)



  }


}

