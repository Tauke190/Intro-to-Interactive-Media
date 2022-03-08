const GRAVITY = -0.6;
let player;
let platforms = []; //Platfrom array to hold the platform object
let points = 0;     //Points the players scores which is displayed in the top right of screen

let startgame = false; //state of the game 
let gameover = false;  // is game over or not

let img;
let cat;
let bg;
let jumpsound;
let fallingsound;

function preload() {
  img = loadImage("platform.png");                      //Loading the assets like images and sound
  cat = loadImage("cat.png");
  jumpsound = loadSound("jump-arcade.mp3");
  fallingsound = loadSound("falling-sound-arcade.mp3");
  bg = loadImage(" bg.png");
}

function setup() {
  createCanvas(400, 800);
  player = new Player(width / 2, height / 2, 40);      //Creates a player object of height 40 and width 40

  generateplatform(50000);                             //Generates the platform till 50,000 height where the platforms are                                                            between 50 units    
  image(bg, 0, 0, 400, 800);
  handleplatform();                                    //Just to draw the platfrom in first frame
  handleplayer();                                      //Just to draw the player in first frame
  textAlign(CENTER);
  textSize(60);
  stroke(0, 0, 0);
  text("Click to Start", width / 2, height / 2);
  textSize(20);
  text("Use arrow keys to move left and right", width / 2, height / 2 + 50);
  startgame = false;
  gameover = false;
}

function draw() {
  if (startgame) {
    background(200);
    image(bg, 0, 0, 400, 800);
    handleplayer();
    handleplatform();
    handlekeys();
    drawScore();
  }
}

function handlekeys() {                                    //handles whether left of right arrow key is pressed and moves 
                                                           // the player accordingly
  if (keyIsDown(LEFT_ARROW)) {
    player.applyforce(createVector(-1, 0));
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.applyforce(createVector(1, 0));
  }
}

function handleplatform() {
  for (let i = 0; i < platforms.length; i++) {
    if (platforms[i].onScreen) {                             //if the platform is visible on screen , it is drawn             
      platforms[i].draw(player.loc.y);                      //The players y co-ordinate is passed as reference for drawing                                                                 the platforms
      if (platforms[i].collides(player)) {                  //If the player collides with the upper part of the platform 
                                                            //it jumps by giving it a force
        player.jump();
      }
    }
  }
}

function handleplayer() {
  player.update();
  player.draw();
  if (player.maxAltitude + player.loc.y < -height / 2) {      //If the player falls below the screen , game is over and                                                                     //sounds plays
    if (fallingsound.isPlaying()) {
      // .isPlaying() returns a boolean
      fallingsound.stop();
    } else {
      fallingsound.play();
    }
    endgame();
  }
}

function endgame() {                                        //End game function which prints text on the screen
  textAlign(CENTER);
  textSize(60);
  stroke(0, 0, 0);
  text("GameOver", width / 2, height / 2);
  startgame = false;
  gameover = true;
}

function generateplatform(numbers) {                          //Draws the platforms in the level by instantiating platfrom
                                                              // over y axis
  for (let y = 0; y < numbers; y+=50) {
    for (let i = 0; i < 3; i++) {
      var x = noise(i, y) * width;                            //Noise is  the for the variance of the platfroms 
      if (noise(y, i) > 0.55) {                                // 0.4 is the threshold value.The more the threshold value ,                                                                 //the more the platforms will spawned apart                     
        platforms.push(new Platform(x, y, 75, 30));
      }
    }
  }
}
function drawScore() {                                      //Draw score function which draws the text on the top right
  textSize(30);
  textAlign(LEFT);
  fill(255);
  noStroke();
  text((player.maxAltitude + points).toFixed(0), 50, 50);     //The points of the player depends on the altititude the player                                                               //has travlled
}

function mousePressed() {
  startgame = true;
  if (gameover) {                                              //if it is in the stateofgame over  , reset the game by                                                                       calling setup function again
    gameover = false;
    setup();
  }
}
