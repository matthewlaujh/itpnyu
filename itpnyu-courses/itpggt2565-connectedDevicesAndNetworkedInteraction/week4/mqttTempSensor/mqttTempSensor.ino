#include <ArduinoMqttClient.h>
#include <WiFiNINA.h>
#include <Arduino_LSM6DS3.h>

WiFiClient wifi;
MqttClient mqtt(wifi);

//WiFi network info: ssid and password
const char wifi_ssid[] = "";
const char wifi_pass[] = "";

//MQTT broker info: url and port (1883 default for MQTT)
const char broker[] = "";
const int port = 1883;

//if needed: broker authentication credentials
const char mqtt_user[] = "";
const char mqtt_pass[] = "";

//the topic this device will publish messages to
const char pubTopic[] = "";

const int sendInterval = 1000;
float t;

void setup() {
  Serial.begin(9600);
  while (!Serial)
    ;

  if (!IMU.begin()) {
    Serial.println("Failed to initialize IMU!");

    while (1)
      ;
  }

  Serial.print("Temperature sensor sample rate = ");
  Serial.print(IMU.temperatureSampleRate());
  Serial.println(" Hz");
  Serial.println();
  Serial.println("Temperature reading in degrees C");
  Serial.println("T");

  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    WiFi.begin(wifi_ssid, wifi_pass);
    delay(1000);
  }
  Serial.println("\nWiFi connected!");

  //give your device any name, to use for identification
  mqtt.setId("nano33iot-LSM6DS3-temperatureSensor");

  //set mqtt credentials, if needed
  mqtt.setUsernamePassword(mqtt_user, mqtt_pass);

  if (!mqtt.connect(broker, port)) {
    //error codes
    //  -1: credentials rejected
    //  -2: can't connect to broker
    Serial.print("MQTT connection failed! Error code = ");
    Serial.println(mqtt.connectError());
    while (true) {};  //do nothing forever
  } else Serial.println("MQTT connected.");
}

void loop() {
  if (millis() % sendInterval < 10) {
    if (IMU.temperatureAvailable()) {
      IMU.readTemperature(t);
      mqtt.beginMessage(pubTopic);
      mqtt.print(t);
      mqtt.endMessage();
      delay(10);
      Serial.println(t);
    }
  }
}
