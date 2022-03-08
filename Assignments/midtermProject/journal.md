# Campus Cat Jump



### How to play 
Use the arrow keys to go left and right and try to land on the block 


## [Play the game here](https://editor.p5js.org/Avinash190/full/YxcEFnlSN)


## Jumping from block to another 


### Introduction 

Campus Cat jump is a doodle jump type of game where the main character is the cat which jumps from one block to another.The cat is controlled using left and right arrow keys.The cat jumps as soon as it hits a block .If the cat does not propely land on the blocks , it dies.


### Challenges ( Hardest Part of the project )
1. To make the cat jump and balance the gravity also 
2. To procedurally generate the block so it can be infinite scrolling game 
3. Camera following the player
4. Collision detection 
5. Enemy Instantiation


### Test Implementation 
1. I tried to design the game with objected oriented programming pattern where there is a player,platform and a enemy class 
2. All the classes have update , draw and some extra helper function 
3. In the player class , there is a method called addforce which adds a vector to it so that it moves up when it meets a critria and goes down by gravity if criteria not met
4. If the player detects collision with the platform , the force is applied to the player which makes it go up 
5. If the player does not detect collisions and falls to the ground , the game is ended 
6. The collision detection is done using simple arthematic maths between player position and platform position 
7. The generation of the platform is done using ````noise()```` function which makes a pattern while instantiating the blocks
8. Other features are still in progess 

![ScreenShot](https://github.com/Tauke190/Intro-to-Interactive-Media/blob/master/Assignments/midtermProject/Screen%20Shot%202022-03-08%20at%2010.01.59.png?raw=true)


