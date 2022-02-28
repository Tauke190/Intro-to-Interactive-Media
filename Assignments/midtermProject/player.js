
class Player {
  constructor(x, y, s, enemy) {
    this.loc = createVector(x,y);
    this.velocity = createVector(0,0);
    this.size = s;
    this.gravity = 1;
    this.enemy = enemy;
    this.onair = false;
  }

  update() {
   
    this.loc.add(this.velocity);
    this.velocity.x *=0.8;
    this.applyforce(createVector(0,this.gravity))
    
  }
  
  applyforce(force)
  {
    this.velocity.add(force);
  }
  
  draw(){
    stroke(0)
    circle(this.loc.x, this.loc.y, 2 * this.size);
  }
  
}