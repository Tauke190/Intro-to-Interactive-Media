let table;      //The table which will hold the csv values
let PosX = 20;  //Initial Position of the Bar graph where it starts 

let rows = 0;
let columns = 0;
let columnlength = 0;    // The number of the population represented in column length;

let year;
let font;
let fSize = 256;

let RandomRColor = 0;
let RandomGColor = 0;
let RandomBColor = 0;

function preload() {
  table = loadTable("data.csv", "csv", "header");            //Loads the value from csv to table data type 
  font = loadFont("Merriweather-Black.ttf");                 //Loads a new font from the asset folder
}
function setup() {
  createCanvas(600, 600);
  textFont(font);
  textSize(fSize);
  RandomRColor = random(0, 255);
  RandomGColor = random(0, 255);
  RandomBColor = random(0, 255);
  print(RandomRColor);
  print(RandomGColor);

  msg = "Data";
  pts = font.textToPoints(msg, 0, 0, fSize, {               //Converts text to oultine co-ordinate position of points 
    sampleFactor: 0.1, // increase for more points          //Can Sample how dense we want the points to be 
    simplifyThreshold: 0.0, // increase to remove collinear points
  });
  console.log(pts); // { x, y, path angle }

  stroke(RandomRColor, RandomGColor, RandomBColor);
  strokeWeight(2);
  noFill();

  rows = table.getRowCount();
  columns = table.getColumnCount();
  print(table.getRowCount() + " total rows in table");          //For Debugging Purposes
  print(table.getColumnCount() + " total columns in table");

  background(200, 100, 100);
}

function draw() {
  
  //For Generative Text 
  
  background(200, 100, 100);
  const d = 10 + sin(frameCount / 50) * 50;                    //Constantly repeats a value because of sin function
  const angle = frameCount / 100;                              //Constanly repeats a angle because by framecount

  push();
  translate(30, (height * 5) / 18);                    
  scale(0.5);  

  for (let i = 0; i < pts.length; i++) {
    const p = pts[i];                
    push();
    translate(p.x, p.y);                                     //translates the line by a small value 
    rotate(angle);                
    line(-d, -d, +d, +d);                                    //Draws a line from that point and converges back 

    pop();
  }
  pop();

  
  
  //For Data Visualization 
  
  push();
  textSize(16);
  textFont(font);
  translate(20, height - 50);
  for (let i = 0; i < rows; i++) {
    columnlength = int(table.getString(i, 1)) / (100000 * 1.4);    // Reduces the population by 100000 times 
    year = table.getString(i, 0);                                  //Gets the year from the rows
    fill(RandomRColor, RandomGColor, RandomBColor);
    rect(0, 0, 30, -int(columnlength));                            //Draws a rectangle but inverted
    fill(0, 0, 0);  
    text(year, 0, 20);
    translate(50, 0);
  }
  pop();
  resetMatrix();                                                  //Resets the transformation
}
