
#include <NewPing.h>

int LED_PIN = 3; // Pin for the LED
int brightness = 0;
float distance = 20;
int sensordistance = 0;

int triggerpin = 10;
int echopin =11;

NewPing sonar(triggerpin,echopin,distance);


void setup() 
{
  brightness = 0;
  Serial.begin(9600);
  pinMode(LED_PIN,OUTPUT);
  
}

void loop() 
{
   sensordistance = sonar.ping_cm();
   Serial.println(sensordistance);
    while (Serial.available() > 0) 
  {
    // read the incoming byte:
    int inByte = Serial.read();
    switch(inByte)
    {
      case 0:
        brightness = 0;         // Intially the brightness is 0 at the start of p5js , it sends 0 data
        break;
    }
    brightness+=inByte;         //Everytime we send a key it adds to the brightness 
    analogWrite(LED_PIN,brightness*5); 
  } 
}
