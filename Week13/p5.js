    var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;
    var s = 83;
    var w = 87;
    var a = 65;
    var d = 68;

    var myXs = []; 
    var myYs = []; 
    var myDiameters = []; 

    var outer_red = [];
    var outer_blue = [];
    var outer_green = [];
    var inner_red = [];
    var inner_blue = [];
    var inner_green = [];


    var movement = myXs-790;

    function setup() 
    {
      createCanvas(800, 600);
     
        for(var i = 0; i < 5; i++)
        {
           
            myXs[i] = getRandomNumber(800);
            myYs[i] = getRandomNumber(600);
            myDiameters[i] = getRandomNumber(100);
            outer_red[i] = getRandomNumber(255);
            outer_blue[i] = getRandomNumber(255);
            outer_green[i] = getRandomNumber(255);
            inner_red[i] = getRandomNumber(255);
            inner_blue[i] = getRandomNumber(255);
            inner_green[i] = getRandomNumber(255);
        }
    }

    function draw() 
    {
      background(255,255,255);
      
      frameRate(10)
      
      fill(24, 200, 29);
      circle(x, y, diameter);

      
      controlCircle();
      
      fill (outer_red, outer_blue, outer_green)
      if(mouseClicked)
       { ellipse(mousex, mousey, 200, 50);
    }
      
      fill(inner_red, inner_blue, inner_green)
      square(525, 500, 100);
      fill(0)
      text('EXIT', 525,500)
      if (x >=525 && y>=500)
         {
           fill(0)
           textSize(32)
           text('YOU WIN', 250, 250)
         }
      
      for(var i = 0; i < myXs.length; i++)
      {
     
        ConcentricCircle(myXs[i], myYs[i], myDiameters[i], myDiameters[i]/2, outer_red[i], outer_blue[i], outer_green[i], inner_red[i], inner_blue[i], inner_green[i]);
        
        
     }
  }

    function controlCircle()
    {

      if (keyIsDown(s)) 
      {
        y += 10;
      } 
      else if (keyIsDown(w)) 
      {
        y -= 10;
      }

      if (keyIsDown(d)) 
      {
        x += 10;
      } 
      else if (keyIsDown(a)) 
      {
        x -= 10;
      }
  
       

    }

  

    function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
      
    }

    function getRandomNumber(number)
    {
        return Math.floor(Math.random()*number)+10;
    }

   
    function ConcentricCircle(x,y, outer_diameter, inner_diameter, outer_red, outer_green,outer_blue, inner_red, inner_green, inner_blue)
    {
        fill(outer_red, outer_green, outer_blue);
        circle(x,y,outer_diameter);
        
      
        fill(inner_red, inner_green, inner_blue);
        circle(x,y,inner_diameter);
      
      
    }
