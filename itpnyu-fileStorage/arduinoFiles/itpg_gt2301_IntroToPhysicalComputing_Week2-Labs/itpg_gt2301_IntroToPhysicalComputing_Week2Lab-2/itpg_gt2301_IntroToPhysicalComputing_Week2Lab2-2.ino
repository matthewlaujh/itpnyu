const int redLED = 10;     // pin that the red LED is on
const int greenLED = 11;   // pin that the green LED is on
int rightSensorValue = 0;  // value read from the right analog sensor
int leftSensorValue = 0;   // value read from the left analog sensor


void setup() {
  // initialize serial communications at 9600 bps:
  Serial.begin(9600);
  // declare the led pins as outputs:
  pinMode(redLED, OUTPUT);
  pinMode(greenLED, OUTPUT);
}

void loop() {
  rightSensorValue = analogRead(A0); // read the pot value
  // map the sensor value from the input range (400 - 900, for example)
  // to the output range (0-255). Change the values 400 and 900 below
  // to match the range your analog input gives:
  int brightness = map(rightSensorValue, 400, 900, 0, 255);
  analogWrite(redLED, brightness);  // set the LED brightness with the result
  Serial.println(rightSensorValue);   // print the sensor value back to the serial monitor
// now do the same for the other sensor and LED:
  leftSensorValue = analogRead(A1); // read the pot value
  // map the sensor value to the brightness again. No need to
  // declare the variable again, since you did so above:
  brightness = map(leftSensorValue, 400, 900, 0, 255);
  analogWrite(greenLED, brightness);  // set the LED brightness with the result
  Serial.println(leftSensorValue);   // print the sensor value back to the serial monitor
}