var bullet1,bullet2,wall1,cavity1,wall2,cavity2,line,collide1,collide2,ob1,ob2

function setup() {
  createCanvas(1600,400);
  line = createSprite(500,198, 1599, 2);
  wall1 = createSprite(1100,100,30,180);
  wall1.shapeColor = "grey";
  wall2 = createSprite(1110,300,50,180);
  wall2.shapeColor = "grey";
  bullet1 = createSprite(50,100,30,5);
  bullet1.shapeColor = "white";
  bullet2 = createSprite(50,300,30,5);
  bullet2.shapeColor = "white";
  cavity1 = createSprite(1085,100,30,30);
  cavity1.shapeColor = "black";
  cavity2 = createSprite(1077.5,295,30,30);
  cavity2.shapeColor = "black";
  ob1 = createSprite(1050,185,30,5);
  ob1.shapeColor = "white";
  ob2 = createSprite(1050,385,30,5);
  ob2.shapeColor = "white";
}
function draw() {
  background(0,0,0);  
  bullet1.velocityX = 50;
  bullet2.velocityX = 50;
  cavity1.visible = false;
  cavity2.visible = false;
  ob1.visible = false;
  ob2.visible = false;
 if(bullet1.x-wall1.x<bullet1.width/2+wall1.width/2 &&
    wall1.x-bullet1.x<bullet1.width/2+wall1.width/2){
      bullet1.velocityX = 0;
      bullet1.visible = false;
      cavity1.visible = true;
      ob1.visible = true;
      wall1.shapeColor = "red";
      textSize(15);
      text('3.68',1240,110);
      
    }
    if(bullet2.x-wall2.x<bullet2.width/2+wall2.width/2 &&
      wall2.x-bullet2.x<bullet2.width/2+wall2.width/2){
        bullet2.velocityX = 0;
        bullet2.visible = false;
        cavity2.visible = true;
        ob2.visible = true;
        wall2.shapeColor = "green";
        textSize(15);
        text('12.43',1240,300);
        textSize(30);
        text('The most effective wall is wall 2',300,300);
      }
    
  
  drawSprites();
  textSize(15);
  text('Bullet speed    -  223',1130,50);
  text('Bullet weight   -  32',1130,70);
  text('Wall thickness -  40',1130,90);
  text('Damage          -  ',1130,110);
 
  text('Bullet speed    -  223',1140,240);
  text('Bullet weight   -  32',1140,260);
  text('Wall thickness -  70',1140,280);
  text('Damage     -  ',1140,300);
  textSize(30);
  text('WMSC Testing App', 500,30);
  textSize(25);
  text('Wall 1',1160,30);
  text('Wall 2',1180,225);
  

}