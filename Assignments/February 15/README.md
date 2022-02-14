# Flower Blossom 

## Generative Flowers Art


## Concept 

The generative art piece is inspired from spring season when flowers bloom from long hauling winter.Like flowers , we should also bloom and grow with colors in our life

#### Class for flower and the function that draws and animate the flower petals
````
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
````
