# Ultrasonic Alert Switch
A switch that is activated when the sensor detects a obstacle infront of you and in which the distance from the obstacle can be configured 






### Electronics
1. Arduino UNO
2. Ultra Sound Sensor
3. BreadBoad
4. Jumper Wires


### Process
There are 4 PINS in the ultrasound sensor such as VCC,GND,TRIGG,ECHO.5V is connected to the VCC and GND from UNO is connected to GND from the sensor.The Echo pin is connected to PIN 10 and Trigg PIN is connected to PIN 11.In the Sensor , there is transmitter which transmits sound waves of 40 Khz and a receiver which receives the signal when the sound waves are reflected by the obstacle.When the distance is below certain threshold , the light blinks and alterts the people.

<img width="500" alt="Screen Shot 2022-03-30 at 11 58 41 PM" src="https://user-images.githubusercontent.com/31856059/160920445-7cd3aa9f-f7c6-4520-a19c-aeaafa5f8891.png">

![IMG_20220330_233038](https://user-images.githubusercontent.com/31856059/160920605-6b636e17-c981-460b-b71d-d735688146a7.jpg)

### Circuit


### Program
````
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
   delay(1000);                       // wait for a second
   digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW
   delay(1000);
}
void loop()
{
    sensordistance = sonar.ping_cm();
    Serial.print("The Distance is :");
    Serial.println(sensordistance);
    delay(1000);
    if(sensordistance < 3)
    {
      blink();
    }
    else
    {
       digitalWrite(LED_BUILTIN, LOW);
    }
};


````

### Discoveries 
1.  I discovered how to use ultra sound sensor. 
2.  I discovered how to use design arduino circuit diagram from tinkercad. 
3.  I discovered how to use serial monitor.
4.  I discovered how to use other senors.
