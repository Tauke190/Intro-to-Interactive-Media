class Platform {
  constructor(x, y, width, height) {
    this.loc = createVector(x, y); //loc vector is for storing platfrom x and y co-ordinate
    this.width = width;
    this.height = height;
    this.onScreen = true;
  }

  draw(playerY) {
    //draws and updates the position of the platfrom
    stroke(255);
    strokeWeight(3);
    fill(255, 123, 123);

    // relative to player
    if (playerY - this.loc.y < height / 2) {
      //checks if it on screen or not
      // on-screen

      image(
        img, //draws the sprite of the platform with the correct parameters
        this.loc.x,
        playerY - this.loc.y + height / 2,
        this.width,
        this.height
      );

      //image(img,0,0);
    } else {
      this.onScreen = false;
    }
  }

  collides(player) {
    var platformTop = this.loc.y; // get the top y co-ordinate of the platform

    var doodlerBottom = player.loc.y + player.size / 2 - 40; //gets the bottom y co-ordinate of the player

    strokeWeight(5);

    stroke(1, 255, 4);

    if (
      Math.abs(platformTop - doodlerBottom) < -player.velocity.y &&
      platformTop < doodlerBottom // if the doodlerbottom is above the platform top
    ) {
      var platlx = this.loc.x; //platfrom lefter most bound
      var platrx = this.loc.x + this.width; //platfrom righter most bound

      var plx = player.loc.x - player.size / 2; //player leftermost bound
      var prx = player.loc.x + player.size / 2; //player rightermost bound

      stroke(128, 125, 124);

      if (
        (plx >= platlx && plx <= platrx) || //if the player bounds is well within the platfrom left and right bounds , return true for collsion
        (prx >= platlx && prx <= platrx)
      ) {
        print("flag");
        return true;
      }
    }
    return false;
  }
}
