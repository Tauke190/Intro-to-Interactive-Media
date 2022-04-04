



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
  Serial.println(shortime);
  Serial.println(longtime);
  
}

void switchLED(int timing)
{
  digitalWrite(LED,HIGH);
  delay(timing);
  digitalWrite(LED,LOW);
  delay(timing);
}
