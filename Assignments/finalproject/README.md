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

In the p5js,I have used p5.speech which is a simple p5 extension to provide Web Speech (Synthesis and Recognition) API functionality. It consists of two object classes (p5.Speech and p5.SpeechRec) along with accessor functions to speak and listen for text, change parameters (synthesis voices, recognition models, etc.), and retrieve callbacks from the system. Speech recognition requires launching from a server using HTTPS.

## Process 
### Step 1
Include from CDN
````<script src="https://cdn.jsdelivr.net/gh/IDMNYU/p5.js-speech@0.0.3/lib/p5.speech.js"></script>````

### Step 2 
 Create a Speech Rec Object 

````
var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.start(); // start listening

function showResult()
{
  console.log(foo.resultString); // log the result
}
````

### Step 3 
Translate the speech which was generated from the speech into a specific language

### Step 4
Send the translated speech into arduino using p5.serial
For that i need to use P5 serial for serial communication with the aruduno

1. Search for the port and connect to the port 
2. ````Serial.write(foo.resultstring)```` where foo.resultstring is the converted string 
3. It can send the string value directly 
4. In the arduino, it can receive the string value directly using ````Serial.readStringUntil('\n')```` 


### Step 5
Display the translated speech into LCD screen in the arduino 


1. We work with the LiquidCystalLibrary by ````#include <LiquidCrystal.h>````
2. We create a LCD object with specific pin s ````LiquidCrystal lcd(rs, en, d4, d5, d6, d7)````
3. After we receive the string from p5.js, we print it ````lcd.print(receivedString)````



### Video 


### P5js.code

````
var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
foo.onResult = showResult; // bind callback function to trigger when speech is recognized

function showResult()
{
 
  console.log(foo.resultString); // log the result
  sendData();                    //invokes a method that sends the data to ardunio through serial port
  istrigger = false;             //is trigger is used for translating a sentence at a time 
}

function sendData() 
{ 
    let outByte = foo.resultString;
    console.log("Sending " + outByte);
    serial.write(outByte); // Send as a string/char/ascii value
}
````

## Schematics 

<img width="1877" alt="Screen Shot 2022-05-12 at 1 38 25 AM" src="https://user-images.githubusercontent.com/31856059/167952332-4eb07b29-b80d-4c8b-8023-65db4182dc48.png">


## Major Problems 

I was intially thiking for a translation mask but LCD could not display non-english characters so I settled for Speech to text translation mask.Another problem was the limited availibility of Language translation plugins or libraries implementd in p5js.

1.  I had major problems with the serial communication between the aruduino and p5js.The arudino first had to send data to p5js to activate to activate the speech to text translation and then p5js would send the data to the arudino and LCD to be displayed.The problem arised when i kept pressing the button on the arudino which would instantiate many instances of Speechrec object and the program would crash 
2.  I was originally planning to miniturize the circuits but had issues with soldering.I managed to get it working with aruduino UNO itself
3.  Problems with LCD Displays not lighting up



## Discoveries 

1. I discovered the Natural Language processing implementation in p5js which is a very useful library.
2. I learned how to work with LCD Display and use its backlight functionality.
3. I discovered how to display customs graphics in the LCD display.
4. I discovered few problems with serial communication implementation and resolved it.
5. I discovered that arudiuno fio is a minituriazed version of arduino uno
6. I discovered that you need a seperate circuit to upload the code to arduino nano.




## References

1. https://learn.sparkfun.com/tutorials/basic-character-lcd-hookup-guide?_ga=2.180098212.1813708937.1652298427-1081971137.1652298427
2. Web Audio Speech Synthesis and Speech Recognition Implementation for p5.js (http://p5js.org)R. Luke DuBois (dubois@nyu.edu)
   ABILITY Project / Integrated Design & Media,NYU
   
   
## p5.js sketch
https://editor.p5js.org/Avinash190/full/PLFskDQbw









































