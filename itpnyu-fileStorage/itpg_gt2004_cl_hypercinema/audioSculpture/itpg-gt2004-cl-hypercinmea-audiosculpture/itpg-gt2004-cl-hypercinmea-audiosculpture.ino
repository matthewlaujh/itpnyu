#include <Servo.h>

Servo myservo;  // create servo object to control a servo
Servo myservo2;

int potpin = 1;  // analog pin used to connect the potentiometer
int potpin2 = 3;
int val;    // variable to read the value from the analog pin
int val2;
int delayservo;
int delayservo2;
int pos = 0;
int pos2 = 0;

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
  myservo2.attach(7);
  Serial.begin(9600); // start serial
}

void loop() {
  val = analogRead(potpin);            // reads the value of the potentiometer (value between 0 and 1023)
  val2 = analogRead(potpin2);            // reads the value of the potentiometer (value between 0 and 1023)
  val = map(val, 0, 1023, 180, 0);     // scale it to use it with the servo (value between 0 and 180)
  val2 = map(val2, 0, 1023, 180, 0);
  delayservo = map(val, 0, 0, 0, 50);
  delayservo2 = map(val2, 0, 0, 0, 50);
  // myservo.write(val);                  // sets the servo position according to the scaled value
  // myservo2.write(val2);
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    delay(5);                       // waits 15ms for the servo to reach the position
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(delayservo);                       // waits 15ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
  delay(5);                       // waits 15ms for the servo to reach the position
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(delayservo);                       // waits 15ms for the servo to reach the position
  }

    for (pos2 = 0; pos2 <= 180; pos2 += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    delay(5);                       // waits 15ms for the servo to reach the position
    myservo2.write(pos2);              // tell servo to go to position in variable 'pos'
    delay(delayservo2);                       // waits 15ms for the servo to reach the position
  }
  for (pos2 = 180; pos2 >= 0; pos2 -= 1) { // goes from 180 degrees to 0 degrees
  delay(5);                       // waits 15ms for the servo to reach the position
    myservo2.write(pos2);              // tell servo to go to position in variable 'pos'
    delay(delayservo2);                       // waits 15ms for the servo to reach the position
  }
  Serial.print(val);
  Serial.print(" ");
  Serial.println(val2);
}

