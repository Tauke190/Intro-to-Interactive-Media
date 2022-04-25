

#include <LiquidCrystal.h>


const int rs = 13, en = 12, d4 = 11, d5 = 10, d6 = 9, d7 = 8;   //initialize the library by associating any needed LCD interface pin
                                                                //with the arduino pin number it is connected to

LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup()
{  
   Serial.begin(9600);
   lcd.begin(16, 2);              //set up the LCD's number of columns and rows:
   //lcd.print("Hello, world!");   //Print a message to the LCD.
}


void loop()
{
   lcd.setCursor(0, 1);            //set the cursor to column 0, line 1
                                    //(note: line 1 is the second row, since counting begins with 0):
  while(Serial.available() > 0)
  {
    String incomingString = Serial.readStringUntil('\n');
    set_message(incomingString);
    Serial.print("I received: ");
    Serial.println(incomingString);
     
  }
}

void set_message(String message)
{
    lcd.print(message); 
}
