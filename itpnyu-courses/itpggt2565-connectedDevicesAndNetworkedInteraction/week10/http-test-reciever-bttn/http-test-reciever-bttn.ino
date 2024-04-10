#include <WiFiNINA.h>
#include <ArduinoHttpClient.h>
#include "arduino_secrets.h"

#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define OLED_RESET -1
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 32
#define SCREEN_ADDRESS 0x3C

Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// Button setup
const int BUTTON_PIN_A = A1;  // First button
const int BUTTON_PIN_B = A3;  // Second button, add this line

// WiFi and HTTP Client setup
char ssid[] = SECRET_SSID;         
char pass[] = SECRET_PASS;         
char serverAddress[] = SERVER_IP;  
int port = 1880;                   
WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverAddress, port);

void setup() {
  Serial.begin(9600);
  // Initialize display
  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;);  // Don't proceed, loop forever
  }
  display.display();
  delay(2000);
  display.clearDisplay();

  // Initialize buttons
  pinMode(BUTTON_PIN_A, INPUT_PULLUP);  // Set the first button as an input
  pinMode(BUTTON_PIN_B, INPUT_PULLUP);  // Set the second button as an input, add this line

  // Connect to WiFi
  Serial.print("Attempting to connect to SSID: ");
  Serial.println(ssid);
  while (WiFi.begin(ssid, pass) != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }
  Serial.println("\nWiFi connected");
}

void loop() {
  // Check if the first button is pressed
  if (digitalRead(BUTTON_PIN_A) == LOW) {
    callEndpoint("/textDataA");  // Modified to call a specific function
  }

  // Check if the second button is pressed, add this block
  if (digitalRead(BUTTON_PIN_B) == LOW) {
    callEndpoint("/textDataB");  // Call a different endpoint for the second button
  }
}

// Function to call endpoint and display response, add this function
void callEndpoint(char* endpoint) {
    display.clearDisplay();
    display.setTextSize(1);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 0);
    display.print("Fetching message...");
    display.display();

    client.get(endpoint);

    int statusCode = client.responseStatusCode();
    String response = client.responseBody();

    Serial.print("Status code: ");
    Serial.println(statusCode);
    Serial.print("Response: ");
    Serial.println(response);

    display.clearDisplay();
    display.setCursor(0, 0);
    display.print(response);
    display.display();

    delay(500);
    while (digitalRead(BUTTON_PIN_A) == LOW || digitalRead(BUTTON_PIN_B) == LOW);  // Wait for both buttons release
    delay(500); 
}
