#include <WiFiNINA.h>
#include <ArduinoHttpClient.h>
#include "arduino_secrets.h"

#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>

#define OLED_RESET -1
#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 32
#define SCREEN_ADDRESS 0x3C

// Initialize Adafruit SSD1306 display
Adafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, OLED_RESET);

// Button setup
const int BUTTON_PIN = A1;  // Change according to your wiring

// WiFi and HTTP Client setup
char ssid[] = SECRET_SSID;         // your network SSID (name)
char pass[] = SECRET_PASS;         // your network password
char serverAddress[] = SERVER_IP;  // Server IP or domain, e.g., "example.com"
int port = 1880;                   // Node-RED HTTP port, typically 1880
WiFiClient wifi;
HttpClient client = HttpClient(wifi, serverAddress, port);

void setup() {
  Serial.begin(9600);
  // Initialize display
  if (!display.begin(SSD1306_SWITCHCAPVCC, SCREEN_ADDRESS)) {
    Serial.println(F("SSD1306 allocation failed"));
    for (;;)
      ;  // Don't proceed, loop forever
  }
  display.display();
  delay(2000);
  display.clearDisplay();

  // Initialize button
  pinMode(BUTTON_PIN, INPUT_PULLUP);  // Set the button as an input

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
  // Check if the button is pressed
  if (digitalRead(BUTTON_PIN) == LOW) {  // Adjust if necessary depending on how your button is wired
    display.clearDisplay();
    display.setTextSize(1);
    display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 0);
    display.print("Fetching message...");
    display.display();


    char endpoint[] = "/fetchMessage";  // Make sure this matches your Node-RED endpoint exactly
    client.get(endpoint);


    // Read the status code and body of the response
    int statusCode = client.responseStatusCode();
    String response = client.responseBody();

    Serial.print("Status code: ");
    Serial.println(statusCode);
    Serial.print("Response: ");
    Serial.println(response);

    // Display the response on OLED
    display.clearDisplay();
    display.setCursor(0, 0);
    display.print(response);
    display.display();

    // Simple debounce delay
    delay(500);
    while (digitalRead(BUTTON_PIN) == LOW)
      ;          // Wait for button release
    delay(500);  // Additional debounce delay
  }
}
