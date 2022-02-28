
class Platform {
  constructor(x, y, width,height) {
    this.loc = createVector(x,y);
    this.width = width;
    this.height = height;
  }

  update() {
   
    
  }
  
  
  draw(){
    
    stroke(155)
    rect(this.loc.x, this.loc.y, this.width,this.height);
  }
  
  
  collides(player)
  {
    
    
    
    var platformtop = this.loc.y;
    
    var playerbottom = player.loc.y + player.size;
    
    
    stroke("#FF0000")
    strokeWeight(5)
    point(this.loc.x,platformtop);
    stroke("#FF11010")
    point(player.loc.x,playerbottom)
    
    
    if(platformtop - playerbottom < 2 && player.velocity.y > 0)
    {
      
      var lx = this.loc.x;
      var rx = this.loc.x + this.width;
      
      if(player.loc.x >= lx && player.loc.x <= rx)
      {
          print("flag")
          return true; 
      }
    }
      return false;
  }
  
}

