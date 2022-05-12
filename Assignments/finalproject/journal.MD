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




# <ins>April 22</ins>



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


# <ins> April 25 -Update 1 </ins> 
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




## Fabrication 

I am thinking of miniaturizing the circuit using arduino nano.I will be using a thick cloth mask and put all the circuits inside the mask and make the device portal.I will power the circuit using miniature batteries.I will attach the LED display at the front of the mask.I am thinking of using a wireless module also for transmitting data from p5js to arudino where it will display the text.

![download](https://user-images.githubusercontent.com/31856059/165151471-40971e46-93e7-42ba-aeef-02a567c7880c.jpeg)




## What didnt work ?

I could not find a Translation API that works with the p5js.Basically what i want is , convert "Hello" into "Ola" using some Language translation API and print that to the LCD Display. Also, the wireless module is not working.I want to send data not using serial port but by using a bluetooth or wireless transmission module so i can make my device portable.


## What you think is the next most riskiest, complicated, or unknown part of your project and your plan to solve that ?

I think it is the language translation API. I need to connect p5js to a cloud API , send data and receive the translated data and finally send back to arduino.I am thiking of using google cloud Translation API. The most complicated part is to understand how the google cloud API works and the data transmission between the p5js.


## Mechanical, fabrication, and construction issues

I want to make my device comfortable and portal.So the issues is how am i going to fit all the electronics and batteries into the cloth mask without making it uncomfortable.For that I am using arduino Nano, thin PCD boards and small batteries.Still , I need to do the user testing to really know if it comfortable or not.


# <ins>April 26-Update 2</ins>

So after planning my problem , i started building my project.The main component of the project was how to send string data from p5js to arduino.In class , we had only studied about sending bytes or ints.So I thought sending string was also the same but it did not work.You can send string send with ````Serial.read()````.
So, I thought of parisng string into binary stream of data and send that one by one to arduino.Then , i designed a program that fetches those stream and decrypts the information that was originally sent.I ran into alot of complication in that method until i found something awesome.

I came across ````Serial.readStringUntil('\n')````This method can directly allow me to read and string into the arduino.Next steps was putting all the bits and pieces together.


# <ins>April 30-Update 3</ins>

Then I decided to use arduino Fio as my microprocessor.The design is similar to arudino UNO but you need an extra module to transfer data into it.I soldered the header pins into the arudino fio.Afterwards , I had problems soldering it in the board.It was so small that it was very difficult to solder the pins properly and i ran across many problems.Finally I decided to user arudino UNO itself.

# <ins>May 4-Update 4</ins>

I built the LCD circuit with aruduino UNO.I could control what i could display through the code but i had to recompile the program every single time.I hooked the arudino code with the p5js code so that the string that is to be displayed comes direclty from the processed input in the p5js.
Viola , it worked as planned.I could speak and english word and then it displays the word on the LCD.The problem was that the next word used to be concatenated with the previous word.There was a simple solution.I basically had to clear the LCD screen for the next word.

# <ins>May 10-Update 5</ins>
Next , I started hot gluing everything together and testing it out with my friends.They suggested me that i should add a switch so that i can only display whenever i have pressed the switch to prevent the p5js program listening to you all the time and crashing too.So I added a switch button to the circuit.so,you have to press the switch , say something and it will processed and displayed on the screen.








### This is a solo project.
