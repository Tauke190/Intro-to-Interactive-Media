# Assignment 2 
## The Recursive tree

![image](Tree.png)

````


let split = 4;
let level = 0;
let maxlevel = 7;

let palette = ["#602020", "#803030", "#C06030", "#F09060", "#60C060", "#60F060", "#60B060", "#60E060", "#60C060", "#60D060"];

function setup() 
{

  
  createCanvas(600, 400);
  background(135,206,235);
  DrawTree(300,350)
  DrawTree(600,350)
  DrawTree(400,350)                        
}

function DrawTree(x,y)
{
  
  translate(x, y);                    //Starts to Draw trunk on the right position          
  rotate(PI+random(-0.1,0.1)+0.02);   //Rotates the tree to right orientation
  DrawBranch();                       //Calls the Recursive Function
}

function DrawBranch()
{
 
  let angle = .9*random(0.8,1.2);                        // sets the angle of the branch
  let length = 140/ (2 * level + 1)*random(0.7,1.5);      //length of branc  gets smaller as level increases  
  let thickness = 12 / (2 * level + 1);                   //thickness of the branches decrease as level increases 
  

  
  stroke(palette[level]);                               //Selects a random color from the palette 
  strokeWeight(thickness);
  
  push();                                                //new drawing state
  
  if(level!=0)
  {
      rotate(-0.5*(split-1)*angle);                     // if branch do not rotate the truck otherwise do 
  }
    
  line(0,0,0,length);                                    // The only drawing code that draws the line
  translate(0,length);                                   // Traslates to the increase y side since its flipped it grows up

  if(level < maxlevel - 1)
  {
    level++;
    for(let i = 0; i < split;i++)                        // Draw four branches at one level 
      {
        DrawBranch();
        rotate(angle);
      }
    level--;
 
  }
   
  pop();
 
}

````



