#include <WiFiNINA.h>
#include <Arduino_LSM6DS3.h>

WiFiUDP udpClient;

const char WIFI_SSID[] = "";   //WiFi network name goes here
const char WIFI_PASS[] = "";  //WiFi password goes here

const char server[] = "";  //local IP address of receiver device goes here
const int port = ;                  //desired port # goes here. Make sure the receiver is listening on the same port!

float Gx, Gy, Gz;
float Ax, Ay, Az;

void setup() {
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(9600);
  //retry connection until WiFi is connected successfully
  while (WiFi.status() != WL_CONNECTED) {
    Serial.println("Attempting to connect to SSID: ");
    // Attempt connection to WPA/WPA2 network.
    WiFi.begin(WIFI_SSID, WIFI_PASS);
    delay(500);
  }
  Serial.println("connected!");

  udpClient.begin(port);

  while (!Serial)
    ;

  if (!IMU.begin()) {
    Serial.println("Failed to initialize IMU!");

    while (1)
      ;
  }
}


char messageBuffer[256];

void loop() {

  if (IMU.gyroscopeAvailable()) {
    IMU.readGyroscope(Gx, Gy, Gz);
    Serial.print(Gx);
    Serial.print('\t');
    Serial.print(Gy);
    Serial.print('\t');
    Serial.println(Gz);

    if (IMU.accelerationAvailable()) {
      IMU.readAcceleration(Ax, Ay, Az);

      Serial.print(Ax);
      Serial.print('\t');
      Serial.print(Ay);
      Serial.print('\t');
      Serial.println(Az);

      if (millis() % 100 < 10) {
        //add something more interesting here
        udpClient.beginPacket(server, port);
        udpClient.print(Gx);
        udpClient.print('\t');
        udpClient.print(Gy);
        udpClient.print('\t');
        udpClient.print(Gz);
        udpClient.print('\t');
        udpClient.print(Ax);
        udpClient.print('\t');
        udpClient.print(Ay);
        udpClient.print('\t');
        udpClient.println(Az);
        udpClient.endPacket();
        delay(10);
      }
    }
  }
}