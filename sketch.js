var bullet, wall;
var bulletSpeed , bulletWeight , thickness  ;


//deformation formula = deformation = 0.5 x weight x speed x speed/22500
function setup() {
  createCanvas(1600,400);
  bulletSpeed=random(223,321);
  bulletWeight=random(30,52);
  thickness=random(22,83);
  bullet=createSprite(50,200,40,5);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);  
  bullet.velocityX=bulletSpeed; 
}

function draw() {
  background(255,255,255);  
  drawSprites();
  bullet.velocityX=bulletSpeed;
if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage = 0.5 *bulletWeight*bulletSpeed*bulletSpeed/(thickness*thickness*thickness);

if(damage>10){
  wall.shapeColor=color(255,0,0);
}
if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
}
  







}

  function hasCollided(lbullet,lwall){

    bulletRightEdge=lbullet.x+lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true;
    }
    return false;
  }


 


