//to define variables
var movingrect, fixedrect;


function setup() {
  //to create the base
  createCanvas(800,400);
  
  //to create a moving rect sprite
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "black";
  movingrect.debug = true;  
  
  fixedrect = createSprite(600,200,60,20);
  fixedrect.shapeColor = "black";
  fixedrect.debug = true;
  movingrect.velocityX = 3;
  fixedrect.velocityX = -3;

}

function draw() {
  //to clear the screen and give it color
  background("powderblue");  

  
  
  if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 
    ){


    movingrect.velocityX = movingrect.velocityX * (-1);
    fixedrect.velocityX = fixedrect.velocityX * (-1);
  }
  if (movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.width/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2)
   {
    movingrect.velocityY = movingrect.velocityY * (-1);
    fixedrect.velocityY = fixedrect.velocityY * (-1);
  }

  
  drawSprites();
}

