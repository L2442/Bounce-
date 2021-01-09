
var movingRect, fixedRect;
var car, wall;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(500, 100, 80, 50);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car =  createSprite(100,100,20,20);
  car.shapeColor = "blue";
  car.velocityX = 2;
  car.velocityY = 2;

  wall = createSprite(300,300,20,20);
  wall.shapeColor = "white";
  wall.velocityX = -2;
  wall.velocityY = -2;
}

function draw() {
  background(10);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

//if(isTouching(car, wall)){
  //car.velocityX = 0;
//}

bounceOff(car, wall);

  drawSprites();
}

function isTouching(obj1, obj2){
  if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2 && 
    obj2.x -obj1.x < obj1.width/2 + obj2.width/2 &&
    obj1.y - obj2.y < obj1.height/2 + obj2.height/2 &&
    obj2.y - obj1.y < obj1.height/2 + obj2.height/2){
   return true;
  }
  else{
    return false;
  }
}

function bounceOff(obj1, obj2){
if(obj1.x - obj2.x < obj1.width/2 + obj2.width/2 && 
  obj2.x -obj1.x < obj1.width/2 + obj2.width/2){
    obj1.velocityX = -1*(obj1.velocityX);
    obj2.velocityX = -1*(obj2.velocityX);
  }
  if(obj1.y - obj2.y < obj1.height/2 + obj2.height/2 && 
    obj2.y -obj1.y < obj1.height/2 + obj2.height/2){
      obj1.velocityY = -1*(obj1.velocityY);
      obj2.velocityY = -1*(obj2.velocityY);
    }
}