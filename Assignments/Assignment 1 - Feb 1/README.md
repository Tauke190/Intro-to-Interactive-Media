# Welcome to my Interactive Media Assignments 

## Here is a potrait of myself

![image](https://user-images.githubusercontent.com/31856059/151677461-bfa141ba-026f-4b8f-93bb-0c19c9166d8f.png)

````
function setup() {
    createCanvas(800, 800);
    background(0);
    fill(232, 190, 172);
    bg = loadImage("assets/moonwalk.jpg");
  
    rect(width / 2 - 35, height / 2 - 140, 75, 100, 100); //Neck
  
    circle(width / 2, height / 2 - 200, 200); //Head
    fill(128, 128, 128);
    arc(width / 2, height / 2 - 200, 200, 200, 3.14, 0); // Hair
  
    fill(51, 153, 255);
    rect(width / 2 + 20, height / 2 + 100, 75, 250, 100); //Leg Right
    rect(width / 2 - 80, height / 2 + 100, 75, 250, 100); //Leg Left
  
    fill(102, 255, 179);
    rect(width / 2 - 95, height / 2 - 60, 200, 200); //Body
  
    rect(width / 2 + 110, height / 2 - 60, 50, 200, 100); //Leg Right
    rect(width / 2 - 150, height / 2 - 60, 50, 200, 100); //Leg Left
  
    fill(255, 255, 255);
    noStroke();
    circle(width / 2 - 50, height / 2 - 200, 40); //EyeBalls // Left
    fill(0, 0, 0);
    circle(width / 2 - 50, height / 2 - 205, 15); //Pupils
  
    fill(255, 255, 255);
    circle(width / 2 + 50, height / 2 - 200, 40); //EyeBalls // Right
    fill(0, 0, 0);
    circle(width / 2 + 50, height / 2 - 205, 15); //Pupils
  
    stroke(1);
    noFill();
    strokeWeight(8);
    rect(width / 2 - 80, height / 2 - 220, 60, 40, 5); // Specs Left
    rect(width / 2 + 20, height / 2 - 220, 60, 40, 5); // Specs Left
    line(width / 2 - 20, height / 2 - 200, width / 2 + 20, height / 2 - 200);
  
    noStroke();
    fill(165, 42, 42);
    ellipse(width / 2, height / 2 - 125, 40, 20);
  }
  ````
  
 ### Things I discovered 
 
 1. You can simply copy paste after uploading the image in the editor 
 2. For image background , I think you need to run a local server 
