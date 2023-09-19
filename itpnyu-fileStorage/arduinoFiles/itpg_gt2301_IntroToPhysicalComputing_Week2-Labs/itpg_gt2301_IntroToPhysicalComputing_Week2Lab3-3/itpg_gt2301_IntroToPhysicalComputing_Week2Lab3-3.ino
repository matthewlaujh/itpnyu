int lastButtonState = LOW;   // state of the button last time you checked
int buttonPresses = 0;       // count of button presses
 
void setup() {
  // initialize serial communication:
  Serial.begin(9600);
  // make pin 2 an input:
  pinMode(2, INPUT);
}
 
void loop() {
  // read the pushbutton:
  int buttonState = digitalRead(10);
 
  // if it's changed and it's high, toggle the mouse state:
  if (buttonState != lastButtonState) {
    if (buttonState == HIGH) {
     buttonPresses++;
     Serial.print("Button has been pressed ");
     Serial.print(buttonPresses);
     Serial.println(" times.");
   }

  }
  // save button state for next comparison:
  lastButtonState = buttonState;
}