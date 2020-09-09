var deformation
var car, wall
var speed, weight
function setup() {
  createCanvas(1600,400);
  
 car = createSprite(20,100,20,10)
 car.shapeColor=("white")
 wall = createSprite(1500,100,10,50)
 speed = random(55,90);
 weight = random(400,1600)
 car.velocityX = speed;

}

function draw() {
  background(0,0,0);  
 if( car.collide(wall)){

deformation=round((0.5*weight*speed*speed)/22500)

if(deformation<80){

car.shapeColor=("green")
}else if (80<deformation&&deformation<180){


  car.shapeColor=("yellow")
}else if (deformation>180){

car.shapeColor=("red")
}
  
 }
drawSprites();
}