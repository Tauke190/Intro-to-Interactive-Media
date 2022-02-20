# Flower Blossom 

## Generative Flowers Art


## Concept 

The generative art piece is inspired from spring season when flowers bloom from long hauling winter.Like flowers ,
we should also bloom and grow with colors in our life

![](flowersart.gif)

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
  
                         //gameloop of this class 
                         //The purpose of the run function is to extend the functionality of the classes further where it needs to update other things
 run()
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
        ellipse(this.posX,this.posY + this.size/20,10+this.size/40,20+this.size/20);
        
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


### Challenges 
1. Figuring out out push and pop works with rotate transformation 
2. Drawing the petals perfectly symmetrical to each other 
3. Growing the flowers and reseting once it hits a certain scale 


### Things I learned 
1. You add GIF files into your READ.md by converting your video into GIF first and then importing to your github 
2. Learned about the alpha channel in the fill and color function 
3. Learned how to use rotate transformation properly and reset it.






