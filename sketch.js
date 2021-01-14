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
}

function draw() {
  //to clear the screen and give it color
  background("powderblue");  

  movingrect.x= mouseX;
  movingrect.y = mouseY;
  
  if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2
    && fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.width/2 &&
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
    movingrect.shapeColor = "white";
    fixedrect.shapeColor = "white";
  }
  else
   {
    movingrect.shapeColor = "black";
    fixedrect.shapeColor = "black";
  }

  
  drawSprites();
}

