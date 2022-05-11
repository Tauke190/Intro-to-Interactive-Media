let serial;
let latestData = "waiting for data";
let velocity;
let gravity;
let position;
let acceleration;
let wind;
let drag = 0.99;
let mass = 50;
let currentString ="";
let istrigger = false;

//MIT License 


var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized

function showResult()
{
 
  console.log(foo.resultString); // log the result
  sendData();                    //invokes a method that sends the data to ardunio through serial port
  istrigger = false;             //is trigger is used for translating a sentence at a time 
}

function setup() 
{
 createCanvas(windowWidth, windowHeight);

 serial = new p5.SerialPort();

 serial.list();
 serial.open('/dev/tty.usbmodem1101');

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
}

function gotClose(){
 print("Serial Port is Closed");
 latestData = "Serial Port is Closed";
}

function gotError(theerror) {
 print(theerror);
}

function gotData()
{
  
  if(istrigger === false)
    {
      console.log("Start Speaking");
      let currentString = serial.readLine();
      trim(currentString);
      latestData = currentString;
      istrigger = true;
      foo.start();
      
    }
  
}

function sendData() 
{ 
    let outByte = foo.resultString;
    console.log("Sending " + outByte);
    serial.write(outByte); // Send as a string/char/ascii value
}


function draw() 
{
 background(255,255,255);
 fill(0,0,0);
 text(latestData, 10, 10);
 console.log(latestData)
 fill(122,234,1);
 
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) 
  {
      console.log("Start Speaking");
      foo.start();
  }
}
