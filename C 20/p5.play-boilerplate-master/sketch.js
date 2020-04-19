var zenia,tourus,cyclap,wall


function setup() {
  createCanvas(1270,600);
  zenia = createSprite(40,500,50,50);
  tourus = createSprite(40,300,50,50);
  cyclap = createSprite(40,100,50,50);
  wall = createSprite(1100,300,20,550);
}

function draw() {
  background(0); 
  zenia.shapeColor = "white";
  tourus.shapeColor = "white";
  cyclap.shapeColor = "white"; 
  wall.shapeColor = "brown";
  zenia.velocityX = 6;
  tourus.velocityX = 5;
  cyclap.velocityX  = 4.5;
     if(zenia.x-wall.x<zenia.width/2+wall.width/2 &&
      wall.x-zenia.x<zenia.width/2+wall.width/2){
      zenia.shapeColor = "blue";
      zenia.velocityX = 0;
      textSize(15);
        text('Deformation -     180 ',1120,475);
        text('Rating         -       D- ',1120,495);
      
      
      }
      else{
        zenia.shapeColor = "white";
        zenia.velocityX  = 6;
       
        
     }
     if(tourus.x-wall.x<tourus.width/2+wall.width/2 &&
      wall.x-tourus.x<tourus.width/2+wall.width/2){
      tourus.shapeColor = "green";
      tourus.velocityX = 0;
      textSize(15);
        text('Deformation -     84  ',1120,275);
        text('Rating         -       A- ',1120,295);
      }
      else{
        tourus.shapeColor = "white";
        tourus.velocityX  = 5;
      }
      if(cyclap.x-wall.x<cyclap.width/2+wall.width/2 &&
        wall.x-cyclap.x<cyclap.width/2+wall.width/2){
        cyclap.shapeColor = "red";
        cyclap.velocityX = 0;
        textSize(15);
        text('Deformation -     134 ',1120,85);
        text('Rating         -       B+ ',1120,105);
        textSize(50);
        text('The Safest Car Is Tourus',250,300);

        }
        else{
          cyclap.shapeColor = "white";
          cyclap.velocityX  = 4.5;
      }
  drawSprites();
  textSize(25);
  text('Cyclap',1150,30);
  text('Tourus',1150,220);
  text('Zenia',1150,420);
  textSize(15);
  text('Speed          -     45',1120,45);
  text('Weight         -     3000',1120,65);
  text('Speed          -     50',1120,235);
  text('Weight         -     1522',1120,255);
  text('Speed          -     60',1120,435);
  text('Weight         -     2260',1120,455);
  textSize(50);
  text('GCSO Testing App',400,50);
  
  
 

}