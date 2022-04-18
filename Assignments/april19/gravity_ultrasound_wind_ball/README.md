
# Ultrasonic Gravity Ellipse that moves with wind #

A ellipse that moves based on the ultra sound waves that is emitted by the ultra sound module in p5js and everytime the ellipse hits the ground make the LED more and more brighter


## Electronics
1. Arduino UNO
2. Ultra Sound Sensor
3. BreadBoad
4. Jumper Wires

## Process
There are 4 PINS in the ultrasound sensor such as VCC,GND,TRIGG,ECHO.5V is connected to the VCC and GND from UNO is connected to GND from the sensor.The Echo pin is connected to PIN 10 and Trigg PIN is connected to PIN 11.In the Sensor , there is transmitter which transmits sound waves of 40 Khz and a receiver which receives the signal when the sound waves are reflected by the obstacle.The distance that is returned by the the sensor is then send via the serial port which is read by the script in p5js.In the draw function , in the x value, the value is passed and the ellipse moves on the horizontal axis depending upon the distance provided by the Ultra sound sensor.
Whenever the ball hits the ground , it sends the data to aruduino where the aruduino code analogWrite to the LED pin , the brightness values that keeps on summing up as the data from p5js is comming.

And for the Wind , it is controller by the ultrasonic sensor , the default wind is the left direction but when i put my hand in the ultrasound, it sends its distance data and the wind is on the right by updating its velocity.x and the ball moves in the right direction.


<iframe width="560" height="315" src="https://www.youtube.com/embed/QhWaeshABNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## Things I discoverd
1. Working with p5.serial 
2. Send data in ASCII characters 
3. Sending String Data


## Difficulties 
1. Loose Breadbord 
2. Port Sometimes not working properly 
3. Connection Problems 
4. Sensor inconsistency 





