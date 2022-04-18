let serial;
let latestData = "waiting for data";
let velocity;
let gravity;
let position;
let acceleration;
let wind;
let drag = 0.99;
let mass = 50;

function setup() 
{
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 serial.open('/dev/tty.usbmodem101');

 serial.on('connected', serverConnected);

 serial.on('list', gotList);

 serial.on('data', gotData);

 serial.on('error', gotError);

 serial.on('open', gotOpen);

 serial.on('close', gotClose);
  
  
//////
  
  createCanvas(640, 360);
  noFill();
  position = createVector(width/2, 0);
  velocity = createVector(10-int(latestData),0);
  acceleration = createVector(0,0);
  gravity = createVector(0, 0.5*mass);
  wind = createVector(10-int(latestData),0);
}

function serverConnected() 
{
 print("Connected to Server");
}

function gotList(thelist) {
 print("List of Serial Ports:");

 for (let i = 0; i < thelist.length; i++) {
  print(i + " " + thelist[i]);
 }
}

function gotOpen() {
 print("Serial Port is Open");
  serial.write(0);
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData() {
 let currentString = serial.readLine();
  trim(currentString);
 if (!currentString) return;
 console.log(currentString);
 latestData = currentString;
}


function keyTyped() {
    let outByte = parseInt(key);
    console.log("Sending " + outByte);
    //serial.write(Number(outByte)); // Send as byte value
    serial.write(outByte); // Send as a string/char/ascii value
}


function draw() {
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
 fill(122,234,1);
  background(255);
  applyForce(wind);
  applyForce(gravity);
  velocity.add(acceleration);
  velocity.mult(drag);
  position.add(velocity);
  acceleration.mult(0);
  ellipse(position.x,position.y,mass,mass);
 
  if (position.y > height-mass/2) 
  {
      serial.write(5);
      velocity.y *= -0.9;
      if(position.y < height-10)
      {
          velocity.x = int(latestData)-1
      }
      else
      {
        velocity.x = 0;
      }
    // A little dampening when hitting the bottom
      position.y = height-mass/2;
  }
 
}



function applyForce(force){
  // Newton's 2nd law: F = M * A
  // or A = F / M
  let f = p5.Vector.div(force, mass);
  acceleration.add(f);
}

function keyPressed(){
  if (keyCode==LEFT_ARROW){
    wind.x=-1;
  }
  if (keyCode==RIGHT_ARROW){
    wind.x=1;
  }
  if (key==' '){
    mass=random(15,80);
    position.y=-mass;
    velocity.mult(0);
  }
}
