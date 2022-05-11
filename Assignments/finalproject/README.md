# Speech To Text Mask 


Speech Mask is a mask device that translates what the user have spoken into text and displays on the LED screen attached to the mask.It can instantly translate the speech into text with a Natural language processing library in p5js and sends that text data to p5js using the serial communication port.
Speech mask is activated by a button on it which activates the entire processing of the speech to text and displays on the LCD Display.


## Electronics Used

1. Aruduino 
2. LCD Display
3. Jumper Wires
5. Push Button 
6. Switch
7. Female to Female Jumper Wires
8. BreadBoard



## Arudino circuitry
For my display , I have used basic 16x2 LCD display from sparkfun electronics.This is a basic 16 character by 2 line display with a snazzy black background with white characters. It Utilizes the extremely common HD44780 parallel interface chipset (datasheet). We will need ~11 general I/O pins to interface to this LCD screen and also Includes white LED backlight.




Overview of your programs (Arduino and P5.js) and your circuitry


![00709-action](https://user-images.githubusercontent.com/31856059/167937396-af213f9c-96aa-4968-9b75-f23d8bd4e783.jpeg)


![Character_LCD_Pinout](https://user-images.githubusercontent.com/31856059/167933617-cdb03a03-93dd-40de-91ee-2f9a2b1fd689.png)


A basic character LCD has 16 pins and it is polarized. The pins are numbered from left to right, 1 through 16. The LCD utilizes an extremely common parallel interface LCD driver chip from Hitachi called the HD44780. 

In this project , I am connecting a 5V Arduino to the 5V basic character LCD. Depending on the LCD's specifications, the input voltage may be 3.3V or 5V. The logic levels will be the same as the input voltage. 

The basic character displays use a 4 bits parallel interface meaning that the 4 bits of information can be transferred simultaneously.This takes 8 wires to connect to the microcontroller.
-2 for Vcc and ground
-2 to load the data
-4 for data

![SIK_Circuit_4A](https://user-images.githubusercontent.com/31856059/167934670-5b7fd099-157d-4c86-9b17-89206b8ac667.png)


### Arudino code 
````
lcd.setCursor(0, 1);                          // activates the cursor to 1 meaning that text can be displayed in the 1 st row of the 2 rows.
  while(Serial.available() > 0)
  {
     lcd.clear();                             //erases all the data previously held in the LCD Display
     //set the cursor to column 0, line 1
    String incomingString = Serial.readStringUntil('\n');//function of Serial class which can read the string directly sent from p5js.     
    set_message(incomingString);                          //activates the LCD display function by setting the string to the Display
    Serial.print("I received: ");
    Serial.println(incomingString);
  }
 
}

void set_message(String message)
{
    lcd.clear();                            //Resets the data to be used for next translation
    lcd.print(message);                     //method of lcd object which parses string and transmits to different channels in the lCD to be displayed as 
                                              a string.
}
````


## p5js 














