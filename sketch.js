var car,wall;
var speed,weight,deformation;

function setup() {
  createCanvas(800,400);
 wall= createSprite(700, 200, 100, 300);
wall.shapeColor="grey";
car=createSprite(100,200,50,30);
car.shapeColor="Blue";
speed=random(55,90);
weight=random(400,1500);
car.velocityX=speed;
}
function draw() {
  background(0);  
  if(car.isTouching(wall)){
    car.velocityX=0
    deformation=(0.5*weight*speed*speed)/22500;
    if(deformation<100){
      car.shapeColor="green"
    }
    else if(deformation>100 && deformation<180){
      car.shapeColor="yellow"
    }
    else if(deformation>180){
      car.shapeColor="red"
    }
  }
  drawSprites();
}
