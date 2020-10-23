var bullet,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 bullet =  createSprite(50,200,50,50);
 wall = createSprite(1500,200,60,height/2);
 wall.shapeColor=color(80,80,80)
  speed=random(55,90);
  weight=random(400,1500);
  bullet.velocityX=speed;
  thickness = random(22,83)
}

function draw() {
  background(255,255,255);  
  if(hasColided(bullet,wall)){
  bullet.velocityX=0;
  var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(deformation>10){
    wall.shapeColor=color(255,0,0);
  }
  
  
  if(deformation<10){
    wall.shapeColor = color(0,255,0);
  }
  }
  drawSprites();
}
function hasColided(lbullet,lwall){
  bulletRightEdge = lbullet.x+lbullet.width
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
return true
  }
  return false
}