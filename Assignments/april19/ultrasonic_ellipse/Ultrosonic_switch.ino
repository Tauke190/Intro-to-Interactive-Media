
#include <NewPing.h>

int triggerpin = 10;
int echopin = 11;
float distance = 20;


int sensordistance = 0 ;

NewPing sonar(triggerpin,echopin,distance);

void setup() 
{
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
  delay(50);

}


void  blink()
{
   digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)
   delay(100);                       // wait for a second
   digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
   delay(100);
}
void loop()
{
    sensordistance = sonar.ping_cm();
    Serial.println(sensordistance);
    delay(100);
};
     
