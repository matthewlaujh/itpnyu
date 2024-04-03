#include <WiFiNINA.h>
#include <ArduinoMqttClient.h>
#include <Adafruit_NeoPixel.h>
#include <SPI.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <map>
#include <vector>
#include <sstream>

#define NEOPIXEL_PIN A2
#define NUM_PIXELS 3
#define SWITCHA_PIN A1
#define SWITCHB_PIN A3
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 32
#define OLED_RESET -1
#define SCREEN_ADDRESS 0x3C

WiFiClient wifi;
MqttClient mqtt(wifi);
Adafruit_NeoPixel strip = Adafruit_NeoPixel(NUM_PIXELS, NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800);
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

const char wifi_ssid[] = "Verizon_LF6QM4";
const char wifi_pass[] = "nearly3-vat-few";
const char broker[] = "itpnyu-matthewlaujh.cloud.shiftr.io";
const int port = 1883;
const char mqtt_user[] = "itpnyu-matthewlaujh";
const char mqtt_pass[] = "itpnyu-matthewlaujh";
const char pubTopic[] = "b";
const char subTopic[] = "a";
const int bufferLength = 32;
String incomingMessage = "";
bool messageReady = false;
bool messageSent = false;

int switchAState;
int lastSwitchAState = LOW;
unsigned long lastDebounceATime = 0;
unsigned long debounceADelay = 50;
unsigned long pressAStartTime = 0;
unsigned long pressADuration = 0;
int switchBState;
int lastSwitchBState = HIGH;
unsigned long lastDebounceBTime = 0;
unsigned long debounceBDelay = 50;
unsigned long pressBStartTime = 0;
unsigned long pressBDuration = 0;
String morseCode = "";

void setup() {
  Serial.begin(9600);
  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;)
      ;
  }
  display.clearDisplay();
  display.display();

  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    WiFi.begin(wifi_ssid, wifi_pass);
    delay(3000);
  }
  Serial.println("connected!");
  while (!Serial)
    ;

  mqtt.setId("b-nano33iot");
  mqtt.setUsernamePassword(mqtt_user, mqtt_pass);
  if (!mqtt.connect(broker, port)) {
    //error codes
    //  -1: credentials rejected
    //  -2: can't connect to broker
    Serial.print("MQTT connection failed! Error code = ");
    Serial.println(mqtt.connectError());
    while (true) {};  //do nothing forever
  } else {
    Serial.println("MQTT connected.");
    display.clearDisplay();
    display.invertDisplay(true);
    display.display();
  }

  mqtt.subscribe(subTopic);

  strip.begin();
  strip.setBrightness(25);
  strip.show();
  pinMode(SWITCHA_PIN, INPUT_PULLUP);
  pinMode(SWITCHB_PIN, INPUT_PULLUP);
}

void loop() {

  mqtt.poll();

  int switchA = digitalRead(SWITCHA_PIN);
  int switchB = digitalRead(SWITCHB_PIN);

  if (messageSent == false) {
    if (switchA != lastSwitchAState) {
      lastDebounceATime = millis();
    }

    if ((millis() - lastDebounceATime) > debounceADelay) {
      if (switchA != switchAState) {
        switchAState = switchA;
        if (switchAState == LOW) {
          pressAStartTime = millis();
        } else {
          pressADuration = millis() - pressAStartTime;
          if (pressADuration < 200) {
            morseCode += "`";
          } else {
            morseCode += "*";
          }
        }
      }
    }
    lastSwitchAState = switchA;

    if (switchB != lastSwitchBState) {
      lastDebounceBTime = millis();
    }

    if ((millis() - lastDebounceBTime) > debounceBDelay) {
      if (switchB != switchBState) {
        switchBState = switchB;
        if (switchBState == LOW) {
          pressBStartTime = millis();
        } else {
          pressBDuration = millis() - pressBStartTime;
          if (pressBDuration < 200) {
            morseCode += "~";
          } else {
            morseCode += "@";
          }
        }
      }
    }
    lastSwitchBState = switchB;
    if (switchA == LOW && switchB == LOW) {
      if (morseCode.length() > 0) {
        Serial.println(morseCode);
        mqtt.beginMessage(pubTopic);
        mqtt.print(morseCode);
        mqtt.endMessage();
        morseCode = "";
        display.clearDisplay();
        display.invertDisplay(true);
        display.display();
        messageSent = true;
      }
      delay(1000);
    }
  }

  if (mqtt.available()) {
    display.clearDisplay();
    display.invertDisplay(true);
    display.display();
    Serial.print("Message received on topic: ");
    Serial.println(mqtt.messageTopic());

    char messageBuffer[bufferLength];
    int len = mqtt.readBytes(messageBuffer, bufferLength - 1);
    messageBuffer[len] = '\0';
    incomingMessage = String(messageBuffer);
    messageReady = true;
    Serial.println(incomingMessage);
    String decodedMessage = decodeMorse(incomingMessage);
    Serial.println(decodedMessage);
    strip.clear();
    for (int i = 0; i < NUM_PIXELS; i++) {
      strip.setPixelColor(i, strip.Color(255, 255, 255));
    }
    strip.show();
    display.clearDisplay();
    display.invertDisplay(false);
    display.setTextSize(3);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 10);
    display.cp437(true);
    display.println(decodedMessage);
    display.display();
    delay(2000);
    messageSent = false;
  }
  for (int i = 0; i < incomingMessage.length(); i++) {
    if (incomingMessage[i] == '`') {
      pulseLEDs(200);
    } else if (incomingMessage[i] == '*') {
      pulseLEDs(600);
    } else if (incomingMessage[i] == '~') {
      strip.clear();
    } else if (incomingMessage[i] == '@') {
      delay(600);
    }
    delay(200);
  }
  incomingMessage = "";
}

void pulseLEDs(int duration) {
  for (int i = 0; i < NUM_PIXELS; i++) {
    strip.setPixelColor(i, strip.Color(255, 255, 255));
  }
  strip.show();
  delay(duration);
  strip.clear();
  strip.show();
}

std::map<String, char> morseCodeMap = {
  { ".-", 'A' }, { "-...", 'B' }, { "-.-.", 'C' }, { "-..", 'D' }, { ".", 'E' }, { "..-.", 'F' }, { "--.", 'G' }, { "....", 'H' }, { "..", 'I' }, { ".---", 'J' }, { "-.-", 'K' }, { ".-..", 'L' }, { "--", 'M' }, { "-.", 'N' }, { "---", 'O' }, { ".--.", 'P' }, { "--.-", 'Q' }, { ".-.", 'R' }, { "...", 'S' }, { "-", 'T' }, { "..-", 'U' }, { "...-", 'V' }, { ".--", 'W' }, { "-..-", 'X' }, { "-.--", 'Y' }, { "--..", 'Z' }, { "-----", '0' }, { ".----", '1' }, { "..---", '2' }, { "...--", '3' }, { "....-", '4' }, { ".....", '5' }, { "-....", '6' }, { "--...", '7' }, { "---..", '8' }, { "----.", '9' }
};

String decodeMorse(String morseCode) {
  String decodedMessage = "";
  String currentCode = "";  // To hold the Morse code for a single character
  morseCode += "@";         // Add an '@' at the end to ensure the last word is processed

  for (unsigned int i = 0; i < morseCode.length(); i++) {
    if (morseCode[i] == '~' || morseCode[i] == '@') {
      // '~' or '@' indicates the end of a Morse code for a letter or a word respectively
      currentCode.replace("`", ".");  // Replace your custom symbol for dot with '.'
      currentCode.replace("*", "-");  // Replace your custom symbol for dash with '-'

      if (morseCodeMap.find(currentCode) != morseCodeMap.end()) {
        decodedMessage += morseCodeMap[currentCode];  // Look up the character and add to message
      } else if (currentCode.length() > 0) {          // Handle unknown codes
        decodedMessage += '?';
      }
      currentCode = "";  // Reset current code for the next character

      if (morseCode[i] == '@') decodedMessage += ' ';  // '@' indicates space between words
    } else {
      // Accumulate Morse code symbols for the current letter
      currentCode += morseCode[i];
    }
  }

  return decodedMessage;
}
