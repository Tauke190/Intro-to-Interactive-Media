

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

  lcd.setCursor(0, 1);   // activates the cursor to 1 meaning that text can be displayed in the 1 st row of the 2 rows.
  while(Serial.available() > 0)
  {
     lcd.clear();                           //erases all the data previously held in the LCD Display           
    String incomingString = Serial.readStringUntil('\n'); //function of Serial class which can read the string directly sent from p5js. 
    set_message(incomingString);                           //activates the LCD display function by setting the string to the Display
    Serial.print("I received: ");
    Serial.println(incomingString);
  }
 
}
void set_message(String message)
{
    lcd.clear();               //Resets the data to be used for next translation
    lcd.print(message);        //method of lcd object which parses string and transmits to different channels in the lCD to be displayed as a string
                                              
}
