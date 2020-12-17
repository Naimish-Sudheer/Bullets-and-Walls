var car,wall,thickness;
var speed,weight;
function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200,thickness,height/2);
  wall.shapeColor = "grey"
  car = createSprite(100, 200, 30, 10);
  car.shapeColor="white"
  speed=random(221,321)
  weight=random(30,52)
  thickness=random(22,83)
  car.velocityX = speed
}

function draw() {
  background(55,11,100);  
  if (car.isTouching(wall)){
    car.velocityX=0
    var deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deformation>10){
      car.shapeColor=color(255,0,0);
    }
    if(deformation<10){
      car.shapeColor=color(0,255,0);
    }
   
  }
  drawSprites();
}