# Journal 



## Phase 1 (Ideation and BrainStorming)
I am a cat person.So my game is definitely going to be about CATS.While growing up , I was obsessed with endless runner game and my goal was to reach the end of the level which was physically impossible.I was a huge fan of doodle jump so I thought of incorparating doodle jumps with cat because cat are a great jumper.Cats also dont like humans so they jump avoiding humans.So , I present you , roll the drums , draw the curtains....pauses for 5 seconds ...tada Campus Cat Jump.You,ll never play another game again after playing this


## Phase 2 (Game and Level Design)
I did not want to a make a clone of doodle jump so i added new features like using keyboard to move left and right than using a accleratometer.The platform placement was also very different from doodle jump as the platorm are placed randomly yet in some pattern that maintain the difficulty of the gameplay and makes it fun.

### Intial Sketches are show below 
![Idea](https://github.com/Tauke190/Intro-to-Interactive-Media/blob/master/idea1.jpg?raw=true)


## Phase 3 (Game Mechanics)
So , to design the mechanics , I thought of how many classes should be there.I decided to make a player class which handles all the mechanics for the player like jumping and movement.I made a platform class which handles all the platform collision with the player and it moves down according to the relative position of the player.

### Player Class
#### Methods 
1. ````update()````
update method updates the co-ordinates of the player .This method applies a constant force downward which simulates gravity and when it does not touch the platforms collides

2. ````jump()````
jump method applies vertical force to the player by incrementing the y-cordinate of the vector.It also constraints the vector so that player cannot do double jump and it also handles sound associated with jump.
3. ````applyforce(force)```` 
apply force just adds force to the vector 
4. ````draw()````
it draws the image of the player in the middle of the screen


### Platform Class
#### Methods 
1.  ````draw(Player)````
It draws the image of the platform depeding on the relative y position of the player 
2.  ````collides(PlayerY)````
It checks the collision between the playerbottom co-ordinate and the platform top co-ordinate and if the player x is well within the platform's x, it collides and returns true



# Testing and Progress 

## Update 1
So, after rough sketch in mind.I knew excatly what i needed to do to develop this game.So I made the classes.My first step was to make the player jump and the gravity act on it.

 ````jump() 
 {                                                            
    this.velocity.y *= 0;
    if (this.premaxAltitude == this.maxAltitude) 
     {     
                                                          
       this.force = constrain(this.force + 1, 12, 16);  
     } else
     {
       this.force = 12;                               
     }
    this.applyforce(createVector(0, this.force));       
    this.premaxAltitude = this.maxAltitude;
  }
  ````
   
 If the player keeps hoping on the same position , the force will slightly higher for the player to reach platforms at greater height or else it will 12.Then i added that force to a method called ````applyforce()````
 
 ````
  applyforce(force)
  {
    this.velocity.add(force);
  }
````
This method simply adds the force to the vector
 
 

### Update2

In the next update , I tried to add and draw the platforms in the screen.
````function generateplatform(numbers) {                          //Draws the platforms in the level by instantiating platfrom
                                                              // over y axis
  for (let y = 0; y < numbers; y+=50) {
    for (let i = 0; i < 3; i++) {
      var x = noise(i, y) * width;                            //Noise is  the for the variance of the platfroms 
      if (noise(y, i) > 0.55) {                                // 0.4 is the threshold value.The more the threshold value ,                                                                 //the more the platforms will spawned apart                     
        platforms.push(new Platform(x, y, 75, 30));
      }
    }
  }
}````
I used ````noise()```` function to add randoness and uniformity in the platforms being generated.
````

## Update 3
In the next update , i tried to add collision of the platform with the player.

````
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
  ,,,,
  
If the platformtop - doodlerbottom is smaller than player negative y component which is up because the y co-ordinates is flipped in p5js , and platform top < doodler bottom , we can know that doodle is above the platform.
for the x-cordinate , if the left and right bound of the player is within the right and left bound of the platform , then it collides and return true.
## Update 4

## Update 5










