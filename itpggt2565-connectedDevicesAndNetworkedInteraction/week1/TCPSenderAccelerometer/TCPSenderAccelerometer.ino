// Provided as in class example, tweaked by me to send Accelerometer Code based on SimpleAccelerator example from the Arduino_LSM6DS3 library

#include <WiFiNINA.h>
#include <Arduino_LSM6DS3.h>

WiFiClient client;

const char server[] = "";  //local IP address of receiver device goes here
const int portNum = ;              //desired port # goes here. Make sure the receiver is listening on the same port!

//be sure to remove WiFi network details before uploading this code!
const char WIFI_SSID[] = "";         //WiFi network name goes here
const char WIFI_PASS[] = "";  //WiFi password goes here

void setup() {
  Serial.begin(9600);
  //retry connection until WiFi is connected successfully
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print("Attempting to connect to SSID: ");
    // Attempt connection to WPA/WPA2 network.
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    delay(3000);
  }
  Serial.println("connected!");
    while (!Serial);

  if (!IMU.begin()) {
    Serial.println("Failed to initialize IMU!");

    while (1);
  }

  Serial.print("Accelerometer sample rate = ");
  Serial.print(IMU.accelerationSampleRate());
  Serial.println(" Hz");
  Serial.println();
  Serial.println("Acceleration in g's");
  Serial.println("X\tY\tZ");
}

void loop() {
  //connect to client if disconnected, or send TCP message if conected

  float x, y, z;

  if (!client.connected()) {
    Serial.println("connecting");
    client.connect(server, portNum);
    delay(1000);
    return;
  } else {
    // Serial.println("sending TCP message");
    if (IMU.accelerationAvailable()) {
      IMU.readAcceleration(x, y, z);
          Serial.print(x);
    Serial.print('\t');
    Serial.print(y);
    Serial.print('\t');
    Serial.println(z);
    client.print(x);
    client.print('\t');
    client.print(y);
    client.print('\t');
    client.println(z);
    }
    delay(1);
  }
}