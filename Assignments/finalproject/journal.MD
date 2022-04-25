# Speech Mask 



Speech Mask is a mask device that translates what the user have spoken into text and displays
on the LED screen attached to the mask.It can instantly translate the speech into 
text with a Natural language processing library in p5js and sends that text data to p5js using the 
serial communication port.

## Electronics Required

1. Aruduino Nano 
2. LCD Display
3. Microphone
4. Jumper Wires
5. Push Button 
6. Switch


## Listening 
It listens to the voice of the person through the external microphone and the in-built microphone in the laptop 

## Thinking & Processing 
Then , it process the speech into text using a Natural language processing library in p5js that returns a string statement 


## Speaking 
it transforms the string statement in a form of bytes and the arudino retrives it and prints in the LED Screen


## Application 
1. Effective communication during pandemic 
2. Can be used as a language translation device while communcating to a foreigner 
3. Can be used in low pressure area where the sounds doesnt propagate easily to the listener




# April 22



### Speech Mask Translator (Finalized Concept)
1. A Mask with a LCD attached which can instantly translates what the user have spoken and displays in the LED.It can be used to communicate with a foreigner or it can be used to communicate in places where there is sound pollution.


### Arudino /Input & Output
1. My arduino will display the string of the letters that has been processed and send from the p5js into the lED.
2. I am looking for ways in which i can process the translation in the raspberry pie /arduino itself without the need of a external computer 
3. I am thinking of implementing a microphone too which will tranmits the sound data to get processed
4. I will be using a 16X2 LCD(Liquid Crystalized Display) to display the converted speech 
5. A push button to trigger when to convert the speech to text and display


### P5JS Input & Output 
1. The NLP will be running on processing
2. Additional Features : I am thiking of making a game controlled by voice too .The louder the voice , higher the player jumps and vice-versa.
3. Shows the number of words transalted over a course of duration by counting how many times the button was activated
4. p5js will send bits of string which is very challenging part is to parse and unparse the data
5. Arduino will send the button state and possibly the sound data from the sound module
6. Arduino will receive the bits of string data and parse it and display in the LCD Display 


# April 25
Today we will dive deeper into the NLP Library in p5js.It is called p5.speech.Web Audio Speech Synthesis and Speech Recognition Implementation for p5.js 
It was creted by R. Luke DuBois (dubois@nyu.edu) from NYU.

## p5.speech

p5.speech is a simple p5 extension to provide Web Speech (Synthesis and Recognition) API functionality. It consists of two object classes (p5.Speech and p5.SpeechRec) along with accessor functions to speak and listen for text, change parameters (synthesis voices, recognition models, etc.), and retrieve callbacks from the system.
Speech recognition requires launching from a server using HTTPS (e.g. using a python server on a local machine… a ‘file’ URI won’t work).


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



https://user-images.githubusercontent.com/31856059/165151407-9d25f137-fb92-4d60-8999-f4c47675894b.mov




### Fabrication 

I am thinking of miniaturizing the circuit using arduino nano.I will be using a thick cloth mask and put all the circuits inside the mask and make the device portal.I will power the circuit using miniature batteries.I will attach the LED display at the front of the mask.I am thinking of using a wireless module also for transmitting data from p5js to arudino where it will display the text.

![download](https://user-images.githubusercontent.com/31856059/165151471-40971e46-93e7-42ba-aeef-02a567c7880c.jpeg)




### What didnt work ?

I could not find a Translation API that works with the p5js.Basically what i want is , convert "Hello" into "Ola" using some Language translation API and print that to the LCD Display. Also, the wireless module is not working.I want to send data not using serial port but by using a bluetooth or wireless transmission module so i can make my device portable.


### What you think is the next most riskiest, complicated, or unknown part of your project and your plan to solve that ?

I think it is the language translation API. I need to connect p5js to a cloud API , send data and receive the translated data and finally send back to arduino.I am thiking of using google cloud Translation API. The most complicated part is to understand how the google cloud API works and the data transmission between the p5js.


### Mechanical, fabrication, and construction issues

I want to make my device comfortable and portal.So the issues is how am i going to fit all the electronics and batteries into the cloth mask without making it uncomfortable.For that I am using arduino Nano, thin PCD boards and small batteries.Still , I need to do the user testing to really know if it comfortable or not.









### This is a solo project.
