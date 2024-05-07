

var herox = 570
var heroy = 30
var herodiameter = 100

var r =250
var b = 127
var g = 0
colorMovement = 1

var ellipsex = 100
var ellipsey = 500

  let circle1 = {
  x: 50,
  y: 200,
  diameter: 50,
  speed: 1
  };

  let circle2 = {
  x: 250,
  y: 200,
  diameter: 100,
  speed: -2
  };

    
    var myXs = [];
    var myYs = [];
    var myDiameters = [];
    var movement = 13;

function preload()
{
 
}
function setup() {
  createCanvas(600, 800);
  angleMode(DEGREES);
      
      
  
      var x1= 30;
      var y1= 30;
      var diameter1= 50;
      for(var i = 0;  i < random(30,200); i++)
        {
            myXs[i] = x1;
            myYs[i] = y1;
            myDiameters[i] = diameter1;
            x1 += random(0,25);
            y1 += random(0,14);
            diameter1 += random(0,25);
        }
     

}


function draw() 
{
    
    
  
  
    backgroundColor(r,b,g)
    r += colorMovement;
    b += colorMovement;
    g += colorMovement;


       for(var i = 0; i < myXs.length; i++)
        {
          fill(b,r,g)
          circle(myXs[i],myYs[i],myDiameters[i]);
            
        }
  
  
  circle1.x += circle1.speed;
  circle2.x += circle2.speed;
  circle1.y += circle1.speed;
  circle2.y -= circle2.speed;
  
  
  
  if (circle1.x + circle1.diameter / 2 >= width || circle1.x - circle1.diameter / 2 <= 0) {
    circle1.speed *= -1;
  }

  if (circle2.x + circle2.diameter / 2 >= width || circle2.x - circle2.diameter / 2 <= 0) {
    circle2.speed *= -1;
  }
  if (circle1.y + circle1.diameter / 2 >= width || circle1.y - circle1.diameter / 2 <= 0) {
    circle1.speed *= -1;
  }

  if (circle2.y + circle2.diameter / 2 >= width || circle2.y - circle2.diameter / 2 <= 0) {
    circle2.speed *= -1;
  }
  fill(255, r, b)
  ellipse(ellipsex, ellipsey, 100, 30)
  if(ellipsex < 600) {
    ellipsex += movement;
  }
  else if(ellipsex >= 600) {
    ellipsex = 0
  }
  
  
  fill(b, r, g);
  ellipse(circle1.x, circle1.y, circle1.diameter);

  fill(b, g, r);
  ellipse(circle2.x, circle2.y, circle2.diameter);


fill(g,r,b+25)
  circle(herox,heroy,herodiameter)
 controlCircle();

  fill(b,b,r)
  square(0, 700, 100)
  
  fill(0)
  text('EXIT',70,720)
  
  
  circle(200,650,100)
  fill(255,255,255)
  circle(200,650,80)
  
  fill(0)
  rect(195,610,10,40)
  
  rotate(45)
  rect(595,315,10,50)
  
  rotate(-90)
  rect(-322,600,10,50)

  rotate(45)
  if(herox <= 100 && heroy >= 700)
    {
      textSize(32)
      text('PEACE AND LOVE RINGO STARR',50, 400)
    }
  if(herox <= 0 || herox >= 600)
    {
      herox = 300
      heroy = 400
    }
  if(heroy <=0 || heroy >= 800)
    {
      herox = 300
      heroy = 400
    }
}
  
  function backgroundColor(r,b,g)
  {
   background(r, b, g);
    
    if(g >= 255||r <= 0)
      {
        colorMovement *= -1
      }
   
    if(b >= 255||b <= 0)
      {
        colorMovement *= -1
      }
    }


  function controlCircle()
    {
      if (keyIsDown(83)) 
      {
        heroy += 10;
      } 
      else if (keyIsDown(87)) 
      {
        heroy -= 10;
      }

      if (keyIsDown(68)) 
      {
        herox += 10;
      } 
      else if (keyIsDown(65)) 
      {
        herox -= 10;
      }
  
       
      
    }
  
