# Ultrasonic Ellipse #

A ellipse that moves based on the ultra sound waves that is emitted by the ultra sound module in p5js
![unnamed](https://user-images.githubusercontent.com/31856059/163829073-d693491b-7cee-4404-8808-ee52e259b4b8.jpeg)


## Electronics
1. Arduino UNO
2. Ultra Sound Sensor
3. BreadBoad
4. Jumper Wires



https://user-images.githubusercontent.com/31856059/163830745-081adfc7-f6bc-4923-a27c-3905f5eafcd6.MOV

## Process
There are 4 PINS in the ultrasound sensor such as VCC,GND,TRIGG,ECHO.5V is connected to the VCC and GND from UNO is connected to GND from the sensor.The Echo pin is connected to PIN 10 and Trigg PIN is connected to PIN 11.In the Sensor , there is transmitter which transmits sound waves of 40 Khz and a receiver which receives the signal when the sound waves are reflected by the obstacle.The distance that is returned by the the sensor is then send via the serial port which is read by the script in p5js.Then the distance is passed to the x position of the ellipse function and the ellipse moves

### Schematics
<img width="1098" alt="160920445-7cd3aa9f-f7c6-4520-a19c-aeaafa5f8891 (2)" src="https://user-images.githubusercontent.com/31856059/163871050-c11ce869-b0f7-49aa-99cd-848c0f50e915.png">

## Things I discoverd
1. Working with sending and receving data from the arduino at the same time
2. Send data in ASCII characters 
3. Sending String Data in the form of bytes and parsing it after retrieving it.







