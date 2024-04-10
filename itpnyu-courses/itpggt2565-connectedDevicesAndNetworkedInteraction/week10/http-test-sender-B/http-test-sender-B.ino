#include <ArduinoHttpClient.h>
#include <WiFiNINA.h>
#include "arduino_secrets.h"

#include "Adafruit_NeoKey_1x4.h"
#include "seesaw_neopixel.h"

char ssid[] = SECRET_SSID;
char pass[] = SECRET_PASS;

char serverAddress[] = SERVER_IP;
int port = 1880;  //use HTTP default port 80, or use 1880 for node-red

WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverAddress, port);
int status = WL_IDLE_STATUS;

Adafruit_NeoKey_1x4 neokey;                                 // Create the NeoKey object
String keyNames[NEOKEY_1X4_KEYS] = { "A", "B", "C", "D" };  // Example names
String pressedKeys = "";

void setup() {
  Serial.begin(9600);
  while (status != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    Serial.println(ssid);
    status = WiFi.begin(ssid, pass);
    delay(1000);
  }
  Serial.println("WiFi connected.");
  IPAddress ip = WiFi.localIP();
  Serial.print("IP Address: ");
  Serial.println(ip);

  while (!Serial) delay(10);

  if (!neokey.begin(0x30)) {  // begin with I2C address, default is 0x30
    Serial.println("Could not start NeoKey, check wiring?");
    while (1) delay(10);
  }

  Serial.println("NeoKey started!");

  // Pulse all the LEDs on to show we're working
  for (uint16_t i = 0; i < neokey.pixels.numPixels(); i++) {
    neokey.pixels.setPixelColor(i, 0x808080);  // make each LED white
    neokey.pixels.show();
    delay(50);
  }
  for (uint16_t i = 0; i < neokey.pixels.numPixels(); i++) {
    neokey.pixels.setPixelColor(i, 0x000000);
    neokey.pixels.show();
    delay(50);
  }

  // set callbacks
  for (int i = 0; i < NEOKEY_1X4_KEYS; i++) {
    neokey.registerCallback(i, blink);
  }
}

void loop() {
  neokey.read();
}

NeoKey1x4Callback blink(keyEvent evt) {
  uint8_t key = evt.bit.NUM;

  if (evt.bit.EDGE == SEESAW_KEYPAD_EDGE_RISING) {  // Only act on key press, not release
    neokey.pixels.setPixelColor(key, Wheel(map(key, 0, neokey.pixels.numPixels(), 0, 255)));

    if (key < NEOKEY_1X4_KEYS - 1) {  // If one of the first three buttons was pressed
      pressedKeys += keyNames[key];   // Append the key name to the string
    } else {                          // If the fourth button was pressed
      // Now moved HTTP request logic here
      Serial.println("Sending pressed keys sequence to server...");
      sendPressedKeys(); // Call a function to send the keys to the server
      pressedKeys = "";  // Reset the string after sending
    }
  } else if (evt.bit.EDGE == SEESAW_KEYPAD_EDGE_FALLING) {
    neokey.pixels.setPixelColor(key, 0);  // Turn off the pixel when the key is released
  }
  neokey.pixels.show();
}

void sendPressedKeys() {
    if (pressedKeys.length() > 0) {
        Serial.println("making POST request");
        client.stop(); // Try stopping the client to close any existing connection
        client.beginRequest(); // Begin a new request
        String contentType = "text/plain";
        char endpoint[] = "/textData?deviceID=MatthewsArduinoSenderB"; // query parameter
        client.post(endpoint, contentType, pressedKeys);
        
        int statusCode = client.responseStatusCode();
        String response = client.responseBody();
        
        Serial.print("Status code: ");
        Serial.println(statusCode);
        Serial.print("Response: ");
        Serial.println(response);
        
        client.stop(); // Ensure the connection is closed after the request
        pressedKeys = ""; // Reset pressedKeys for the next message
    }
}

uint32_t Wheel(byte WheelPos) {
  if (WheelPos < 85) {
    return seesaw_NeoPixel::Color(WheelPos * 3, 255 - WheelPos * 3, 0);
  } else if (WheelPos < 170) {
    WheelPos -= 85;
    return seesaw_NeoPixel::Color(255 - WheelPos * 3, 0, WheelPos * 3);
  } else {
    WheelPos -= 170;
    return seesaw_NeoPixel::Color(0, WheelPos * 3, 255 - WheelPos * 3);
  }
  return 0;
}