
class Flower                   //Class for flowers 
{
  constructor(x,y,radius,c)    //Requires Position , radius and color
  {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.petals = 10;
    this.size = 0;
    this.color = c
  }
  
  run()                       //gameloop of this class 
  {
    this.draw();
  }
  
  draw()                     
  {
     push();                  //goes into new drawing state
    
    this.size++;              //the size of the flower increase to certain point
    
    fill(this.color);         //fills the color from the passed argument 
    noStroke();
    rotate(radians(frameCount/2));    // rotates the flower anticlockwise
    for(var i = 0; i < this.petals; i++)   
    {
      if(this.size < 400)                        
      {
        //draws the petals of flower
        ellipse(this.posX,this.posY + this.size/20,10+this.size                               /40,20+this.size/20);
        
        //rotate the petals to make it look like a flower 
        
        rotate(PI/5);
      }
      else
      {
          background(255,255,255);     //when size exceeds to certain point,it resets
          this.size = 0;
      }
    }
     pop();
  }
}


let flowers = [];                               //arrays to hold flowers 
let flowerscount = 200;
let randomx = [];
let randomy = [];

function setup()
{
 
  createCanvas(600, 600);
  fill(123,123,123);
  flower = new Flower(0,10,20,color(230,190,230,240));
  
  for(let i = 0; i < flowerscount;i++)     
    {
         
      randomx.push(random(0,600));
      randomy.push(random(0,600));
      
      //puts n numbers of flowers in the array
      
      flowers.push(new                                                          Flower(0,10,20,color(random(0,255),random(0,255)  ,random(0,255),random(200,255))))
    }
}

function draw() 
{
  background(100,100,100)
  push();
  
  flower.run();
  for(let i = 0; i < flowers.length;i++)
  {
    push();
    translate(randomx[i],randomy[i])      //translate to a random position so the                                                  flower is in random position
    flowers[i].run();
    pop();                                 //goes back to previous state
  }
  pop();                                   //goes back to previous state again
}