void setup() {
  pinMode(2, INPUT);    // set the pushbutton pin to be an input
  pinMode(3, OUTPUT);   // set the yellow LED pin to be an output
  pinMode(4, OUTPUT);   // set the red LED pin to be an output
}

// void loop() {
//    // read the pushbutton input:
//    if (digitalRead(2) == HIGH) {
//      // if the pushbutton is closed:
//      digitalWrite(3, HIGH);    // turn on the yellow LED
//      digitalWrite(4, LOW);     // turn off the red LED
//    }
//    else {
//      // if the switch is open:
//      digitalWrite(3, LOW);     // turn off the yellow LED
//      digitalWrite(4, HIGH);    // turn on the red LED
//    }
//  }

void loop() {
   // read the pushbutton input:
   if (digitalRead(2) == HIGH) {
     // if the pushbutton is closed:
     digitalWrite(3, HIGH);    // turn on the yellow LED
     digitalWrite(4, LOW);     // turn off the red LED
     noTone(5);     // turn off the second speaker
   }
   else {
     // if the switch is open:
     digitalWrite(3, LOW);     // turn off the yellow LED
     digitalWrite(4, HIGH);    // turn on the red LED
     tone(5, 440);    // turn on the second speaker to 440 Hz
     delay(20);
   }
 }