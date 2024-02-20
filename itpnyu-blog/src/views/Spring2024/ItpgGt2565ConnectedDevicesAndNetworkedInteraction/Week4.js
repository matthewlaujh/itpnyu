import Container from "../../../components/Container"
import Header from "../../../components/Header"
import Subheader from "../../../components/Subheader"
import Text from "../../../components/Text"
import ExternalText from "../../../components/ExternalText"
import Quotes from "../../../components/Quotes"
import Images from "../../../components/Images"
import CodeSnippets from "../../../components/CodeSnippets"
import Iframes from "../../../components/Iframes"
import AudioPlayer from "../../../components/AudioPlayer"
import VideoPlayer from "../../../components/VideoPlayer"
import Links from "../../../components/Links"
import P5Sketch from "../../../components/P5Sketch"
import ImagesCarousel from "../../../components/ImagesCarousel"

const BlogPost = () => {
  return (
    <Container>
      <div>
        <Header>Week 4</Header>
        <Subheader>Homework - MQTT.</Subheader>
        <ExternalText>
          Create a simple dashboard that displays data from a sensor of your
          choice using MQTT, an Arduino and an HTML webpage. The Arduino should
          publish sensor data to an MQTT topic periodically, and the webpage
          should subscribe to that topic and display the data, as well as the
          time of the last received message. Using an MQTT Will message, the
          webpage should also display the sensor’s current status
          (“online”/”offline”) Document your progress, including relevant code,
          a video of the interaction and a screenshot of your text file in a new
          blog post. Upload your code, including your node-red flow, to GitHub
          and include a link to the repo in your blog post.
        </ExternalText>
        <Text>
          Used the temperature sensor on the arduino to send temperature data
          over MQTT to the website, took awhile to figure out how to get it to
          update in real time when the device goes offline, but found that
          setting a timeout worked.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekFour-MQTT.mp4"
          alt="Description of video"
        />
        <Subheader>Github.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/tree/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week4">
            Link to Repo.
          </Links>
        </Text>

        <Subheader>HTML.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week4/index.html">
            Link to Github.
          </Links>
        </Text>
        <CodeSnippets
          language="html"
          code={`<html>
  <head>
    <title>Week 4 Homework</title>
    <link rel="stylesheet" href="style.css" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js" type="text/javascript"></script>
  </head>
  <body>
    <div>
    <div id="home">
      <div id="header:">
      <h4>Week 4 Homework</h1>
      <br></br>
      <h5>Assignment #4 MQTT</h5>
    <h6>
      <ul>
        Create a simple dashboard that displays data from a sensor of your choice using MQTT, an Arduino and an HTML webpage.
      </ul>
      <ul>
        The Arduino should publish sensor data to an MQTT topic periodically, and the webpage should subscribe to that topic and display the data, as well as the time of the last received message.
      </ul>
      <ul>
        Using an MQTT Will message, the webpage should also display the sensor’s current status (“online”/”offline”)
      </ul>
    </h6>
    </div>
    
    <div id="content">
      <div id="displayTextContainer">
        <p id="displayText"></p>
      </div>
    </div>
    <div>
      <p id="displayTime"></p>
      <p id="footer">Temperature Sensor data from the LSM6DS3 sensor on the Arduino Nano 33 IOT sent over MQTT using shiftr.io every second.</p>
    </div>
      <script src="script.js"></script>
  </div>
  </body>
</html>       
`}
        />
        <Subheader>CSS.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week4/style.css">
            Link to Github.
          </Links>
        </Text>
        <CodeSnippets
          language="css"
          code={`@font-face {
  font-family: "Favorit Variable";
  font-weight: 300;
  font-style: normal;
  src: url("ABCFavoritVariableEdu.ttf") format("opentype");
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Favorit Variable";
  font-weight: 400;
  line-height: normal;
  overflow: hidden;
}

#home {
  background-color: rgb(215, 215, 215);
  color: rgb(85, 90, 110);
  width: 100%;
  height: 100%;
  padding: 2vw 2vh;
}

#content {
  padding-top: 2vh;
}

#inputText {
  background-color: rgb(215, 215, 215);
  border: none;
}

#displayTextContainer {
  width: 100vw;
  height: 75vh;
}

#displayText {
  font-size: 10vw;
  text-align: center;
  padding: 20vh 10vw;
  word-wrap: break-word;
  transition: transform 0.3s ease;
}

#footer {
  position: absolute;
  bottom: 2vw;
}
`}
        />
        <Subheader>JavaScript.</Subheader>
        <Text>
          Javascript code here is abit broken for some reason the snippet
          component I have didn't alow for some elements so I removed them but
          full code at{" "}
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week4/script.js">
            here on github.
          </Links>
        </Text>
        <CodeSnippets
          language="javascript"
          code={`const broker = ""
const mqtt_port = 443

const mqtt_user = ""
const mqtt_pass = ""
const clientID = "mqttAssignmentWebsite"
const subTopic = "HomeTemperature"
const will = "ConnectionStatus"

const MQTT = new Paho.MQTT.Client(broker, mqtt_port, clientID)

const willMessage = new Paho.MQTT.Message("offline")
willMessage.destinationName = will
willMessage.qos = 0
willMessage.retained = true

let timeout

MQTT.connect({
  onSuccess: mqttConnected,
  userName: mqtt_user,
  password: mqtt_pass,
  useSSL: true,
  willMessage: willMessage,
})

function mqttConnected() {
  MQTT.subscribe(will)
  MQTT.subscribe(subTopic)

  MQTT.onMessageArrived = handleMQTTMessage
  console.log("MQTT connected successfully.")
  switchToWillMessageAfterDelay()
}

function handleMQTTMessage(msg) {
  const currentTime = new Date()
  const formattedDateTime = currentTime.toLocaleString("en-US", {
    hour12: true,
  })
  if (msg.destinationName === subTopic) {
    clearTimeout(timeout)
    document.querySelector(
      "#displayText"
    // ).innerHTML = temp code
    document.querySelector(
      "#displayTime"
    ).innerHTML = time code
    switchToWillMessageAfterDelay()
  }
}

function switchToWillMessageAfterDelay() {
  clearTimeout(timeout)
  timeout = setTimeout(() => {
    const currentTime = new Date()
    const formattedDateTime = currentTime.toLocaleString("en-US", {
      hour12: true,
    })
    document.querySelector("#displayText").innerHTML =
      "Connected To Broker,<br> Device is Offline"
    document.querySelector(
      "#displayTime"
    ).innerHTML = time code
  }, 2000)
}          
`}
        />
        <Subheader>Arduino.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/tree/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/gyroAccelUDP">
            Link to Github.
          </Links>
        </Text>
        <CodeSnippets
          language="arduino"
          code={`#include <ArduinoMqttClient.h>
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
`}
        />
      </div>
    </Container>
  )
}
export default BlogPost
