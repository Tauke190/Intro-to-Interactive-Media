class Player {
  constructor(x, y, s) {
    this.loc = createVector(x, y);
    this.velocity = createVector(0, 0); //Created a vector to store player x and y co-ordinate
    this.size = s;
    this.maxAltitude = y;               // max altitude the player can reach
    this.premaxAltitude = y;            // previous max altitude
    this.force = 12;                    // The force in which the player will jump up
  }

  update() {                            //update function updates the co-ordinates of the player
                                        // change location based upon velocityocationity and add air resistance //
    this.loc.add(this.velocity);
    this.velocity.x *= 0.8;

    // apply GRAVITY
    player.applyforce(createVector(0, GRAVITY));

    // update maximum altitude
    this.maxAltitude =
      this.loc.y > this.maxAltitude ? this.loc.y : this.maxAltitude;
  }

  jump() {                          //jump function plays the sound and does force calculation and provides thrust to player
    if (jumpsound.isPlaying()) {
                                    //isPlaying() returns a boolean
      jumpsound.stop();        
      
    } else {
      jumpsound.play();
      
    }
    this.velocity.y *= 0;

    if (this.premaxAltitude == this.maxAltitude) {      // stronger hop as the altitude remains constant
                                                          

      this.force = constrain(this.force + 1, 12, 16);  //increase the force if the altitude is constant
    } else {
      this.force = 12;                                 //if not just make the force 12
    }
    this.applyforce(createVector(0, this.force));       //applying the force to the player
    this.premaxAltitude = this.maxAltitude;
  }

  applyforce(force) {
    this.velocity.add(force);
  }

  draw() {                                        //draw function is for drawing the shapes and images in the player
    stroke(0);
    image(cat, this.loc.x, height / 2, this.size, this.size);
  }
}
