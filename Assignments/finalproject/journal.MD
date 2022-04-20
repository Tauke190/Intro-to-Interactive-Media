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


### This is a solo project.
