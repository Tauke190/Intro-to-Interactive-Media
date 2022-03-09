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
3. ```applyforce(force)```` 
apply force just adds force to the vector 
4. ````draw()````
it draws the image of the player in the middle of the screen


### Platform Class
#### Methods 
1.  ````draw(Player)````
It draws the image of the platform depeding on the relative y position of the player 
2.  ````collides(PlayerY)````
It checks the collision between the playerbottom co-ordinate and the platform top co-ordinate and if the player x is well within the platform's x, it collides and returns true









