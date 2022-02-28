

let player;
let platforms = []

let SPACE_BAR = 32


function setup() {
  createCanvas(400, 800);

  player = new Player(width/2, height - 90,20,false);
  
 
  for(let y = 0 ; y < height ; y+=50)
  {
    for(let i = 0 ; i < 3 ; i++)
      {
          var x = noise(i,y) * width;
          if(noise(y,i) > 0.5)
          {
               platforms.push(new Platform(x,y,75,30));
          }
        
      }
   
   
  }

}

function draw()
{
  background(200);
  player.update();
  player.draw();
  
  
  
    
  for(let i = 0 ; i < platforms.length ; i++)
  {
    platforms[i].update();
    platforms[i].draw();
    
    if(platforms[i].collides(player))
    {
        player.applyforce(createVector(0,-10));
    }

  
  }
  
  handlekeys();
  
  if(player.loc.y > height)
  {
      endgame();
  }
  
}


function handlekeys() 
{
  if(keyIsDown(LEFT_ARROW)) 
  {
      player.applyforce(createVector(-1,0))
  }
   if(keyIsDown(RIGHT_ARROW))
  {
      player.applyforce(createVector(1,0))
  }
}

function keyPressed()
{
  if(keyCode === 32)
  {
    player.applyforce(createVector(0,-30));
  }
}


function endgame()
{
  textAlign(CENTER)
  textSize(60);
  text("GameOver",width/2,height/2)
  noLoop();
  
  
}