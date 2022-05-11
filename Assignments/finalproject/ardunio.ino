

#include <LiquidCrystal.h>

int inPin = 3;

const int rs = 13, en = 12, d4 = 11, d5 = 10, d6 = 9, d7 = 8; 
int val = 0;
String indicator = "";
                                                              //initialize the library by associating any needed LCD interface pin
                                                                //with the arduino pin number it is connected to

LiquidCrystal lcd(rs, en, d4, d5, d6, d7);

void setup()
{  
   pinMode(inPin, INPUT_PULLUP);
   Serial.begin(9600);
   lcd.begin(16, 2);  
   lcd.clear();
   //set up the LCD's number of columns and rows:
  
}


void loop()
{
   val = digitalRead(inPin);
  
   if(val == 0)
   {
      
      Serial.write(val); 
      indicator = "      ....    ";
      lcd.setCursor(0, 2);
      lcd.print(indicator);
      
   }
   else
   {

     lcd.setCursor(0,2);
     lcd.print("");
   }


   
   //(note: line 1 is the second row, since counting begins with 0):

  lcd.setCursor(0, 1);
  while(Serial.available() > 0)
  {
     lcd.clear();
     //set the cursor to column 0, line 1
    String incomingString = Serial.readStringUntil('\n');
    set_message(incomingString);
    Serial.print("I received: ");
    Serial.println(incomingString);
  }
 
}

void set_message(String message)
{
    lcd.clear();
    lcd.print(message); 
}
