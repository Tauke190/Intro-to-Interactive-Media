# MORSE CODE SPEED CONTROLLER
A circuit that controls the speed of the LED blinking and giving a morse code through a potentiometer.If the potentiometer is set to higher value, the speed at which led blinks and gives our morse code is faster.





### Electronics
1. Arduino UNO
2. Potentiometer
3. BreadBoard
4. Jumper Wires
5. Registor (220 Ohm)
6. LED 


### Process
First, we use the analog pin to connect the potentiomenter and get its reading through analogRead. First , we begin the serial port and read the analogpin A2 and map the value from (300,100) for short blinking led and (1000,600) for long blinking led.So, if we increase the potentiometer , the rate at which morse code is sent will be faster.Here is the morse code chart.
![morse-chart_grande](https://user-images.githubusercontent.com/31856059/161624421-3648e430-f57d-4efc-b854-c6c233d92ffd.png)
![lol](https://user-images.githubusercontent.com/31856059/161627294-56df28e3-468f-4604-b438-5566049b5fc5.jpeg)






### Program
````
int LED = 13;

const int POT_PIN = A2;


int potvalue = 0;

int shortime = 300;
int longtime = 900;
void setup() 
{
  pinMode(LED,OUTPUT);
  Serial.begin(9600);
}

void loop() 
{
  Readfrompotentiometer();

  // A
  switchLED(shortime);
  switchLED(longtime);

  //V
  switchLED(shortime);
  switchLED(shortime);
  switchLED(shortime);
  switchLED(longtime);


  //I
  switchLED(shortime);
  switchLED(shortime);

  //N
  switchLED(longtime);
  switchLED(shortime);

  // A
  switchLED(shortime);
  switchLED(longtime);

  // S
  switchLED(shortime);
  switchLED(shortime);
  switchLED(shortime);

  // H
  switchLED(shortime);
  switchLED(shortime);
  switchLED(shortime);
  switchLED(shortime);

}


void Readfrompotentiometer()
{
  int pot_value = analogRead(POT_PIN); // 0-1023
  shortime = map(pot_value, 0, 1023, 300, 100);
  longtime = map(pot_value, 0, 1023, 1000, 600);
  
}

void switchLED(int timing)
{
  digitalWrite(LED,HIGH);
  delay(timing);
  digitalWrite(LED,LOW);
  delay(timing);
}



````

### Discoveries 
1.  I discovered how to use understand morsecode
2.  I discovered how to use use the mapping function and use the analog read
3.  I discovered how to use serial monitor for analog signals.
4.  I discovered how to use other senors.


### Schematics
![desktop](https://user-images.githubusercontent.com/31856059/161627092-38650110-b3b0-4873-93dd-ee0941e12002.jpeg)

