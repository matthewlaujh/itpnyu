// int lastSensorState = LOW;   // sensor's previous state
// int threshold = 512;   // an arbitrary threshold value
 
// void setup() {
//   Serial.begin(9600);
// }
 
// void loop() {
//   // read the sensor:
//   int sensorState = analogRead(A0);
 
//   // if it's above the threshold:
//   if (sensorState >= threshold) {
//     // check that the previous value was below the threshold:
//      if (lastSensorState < threshold) {
//         // the sensor just crossed the threshold
//         Serial.println("Sensor crossed the threshold");
//      }
//   }
//   // save button state for next comparison:
//   lastSensorState = sensorState;
// }

// int peakValue = 0;
// int threshold = 50;   //set your own value based on your sensors
 
// void setup() {
//   Serial.begin(9600);
// }
 
// void loop() {
//   //read sensor on pin A0:
//   int sensorValue = analogRead(A0);
//   // check if it's higher than the current peak:
//   if (sensorValue > peakValue) {
//     peakValue = sensorValue;
//     Serial.println("Peaked");
//   }
// }


// int peakValue = 0;
// int threshold = 50;   //set your own value based on your sensors
 
// void setup() {
//   Serial.begin(9600);
// }
 
// void loop() {
//   //read sensor on pin A0:
//   int sensorValue = analogRead(A0);
//   // check if it's higher than the current peak:
//   if (sensorValue > peakValue) {
//     peakValue = sensorValue;
//   }
//   if (sensorValue <= threshold) {
//     if (peakValue > threshold) {
//       // you have a peak value:
//       Serial.println(peakValue);
//       // reset the peak variable:
//       peakValue = 0;
//     }
//   }
// }

int peakValue = 0;
int threshold = 50;   //set your own value based on your sensors
int noise = 5;        //set a noise value based on your particular sensor
 
void setup() {
  Serial.begin(9600);
}
 
void loop() {
  //read sensor on pin A0:
  int sensorValue = analogRead(A0);
  // check if it's higher than the current peak:
  if (sensorValue > peakValue) {
    peakValue = sensorValue;
  }
  if (sensorValue <= threshold - noise ) {
    if (peakValue > threshold + noise) {
      // you have a peak value:
      Serial.println(peakValue);
      // reset the peak value:
      peakValue = 0;
    }
  }
}