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
        <Header>Week 11</Header>
        <Subheader>Homework - HTTP Part 2.</Subheader>
        <ExternalText>
          Expand your HTTP server to have it log data to a persistent global
          variable or text file. Use query params to allow multiple devices to
          post data and keep their data separate from each other, and to allow
          clients to request information from one specific device.
        </ExternalText>
        <Text>
          Built upon the previous week's assignment, I added a Node-RED server
          to connect to the Arduino's Gyrometer and Accelerometer over UDP to
          WebSockets. The server would then log the values and manipulate the
          website based on the corresponding data. The Gyrometer controls the X
          and Y location of the text and the Accelerometer (through a function
          in Node-RED) detects when a fast movement is made and flashes the text
          in white and changes the background to black for one second.
          <br></br>
          <br></br>I chose to use UDP over TCP because it is faster and more
          efficient and would provide a smoother motion for the Gyrometer data.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekThree-webSockets-.mp4"
          alt="Description of video"
        />
        <Subheader>Github.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/tree/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3">
            Link to Repo.
          </Links>
        </Text>

        <Subheader>HTML.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/index.html">
            Link to Github.
          </Links>
        </Text>
        <CodeSnippets
          language="html"
          code={`<html>
  <head>
    <title>Week 2 Homework</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div>
    <div id="home">
      <div id="header:">
      <h4>Week 3 Homework</h1>
      <br></br>
      <h5>Assignment #3 WebSockets</h5>
    <h6>
      <ul>
        Create a webpage with HTML and JavaScript that communicates with a server via WebSocket.
      </ul>
      <ul>
        The server should receive 2 different data values from an Arduino through a TCP or UDP connection and forward the values through the WebSocket to the webpage.
      </ul>
      <ul>The values should have some visual effect on the webpage. It can be arbitrary!
      </ul>
      <ul>
        The server should ALSO log the values and corresponding timestamps to a text file.
      </ul>
    </h6>
    </div>
    
    <div id="content">
      <label for="text">Input text here:</label>
      <input type="text" id="inputText" name="text"></input>
      <div id="displayTextContainer">
        <p id="displayText"></p>
      </div>
    </div>
    <div>
      <p id="footer">Moving the Arduino moves the position of the text based on the gyrometer and the a quick movement detected by the accelerometer flashes the text and background in black and white for 1 second .</p>
    </div>
      <script src="script.js"></script>
  </div>
  </body>
</html>
`}
        />
        <Subheader>CSS.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/style.css">
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
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/script.js">
            here on github.
          </Links>
        </Text>
        <CodeSnippets
          language="javascript"
          code={`const inputText = document.getElementById("inputText")
const displayText = document.getElementById("displayText")
const displayTextContainer = document.getElementById("displayTextContainer")
displayText.contentEditable = "true"
function updateText() {
  displayText.textContent = inputText.value
}
inputText.addEventListener("input", updateText)

const ws = new WebSocket("ws://localhost:1880/messages")
const wsGyroData = new WebSocket("ws://localhost:1880/gyroData")
const wsAccelData = new WebSocket("ws://localhost:1880/accelData")

ws.addEventListener("open", handleSocketOpen)
wsGyroData.addEventListener("message", handleSocketGyroData)
wsAccelData.addEventListener("message", handleSocketAccelData)

function handleSocketOpen(event) {
  ws.send("Hello Server!")
  displayText.innerHTML = "Hello World!<br>Type Something!"
}

function handleSocketGyroData(event) {
  const gyroDataString = event.data.trim()
  const [Gx, Gy, Gz] = gyroDataString.split(/\s+/).map(parseFloat)
  // Line missing here to control the translate, code snippets not letting me add it in, but it's in the repo
}

function handleSocketAccelData(event) {
  displayTextContainer.style.backgroundColor = "black"
  displayText.style.color = "white"
  setTimeout(() => {
    displayTextContainer.style.backgroundColor = ""
    displayText.style.color = ""
  }, 1000)
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
          code={`#include <WiFiNINA.h>
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
`}
        />
        <Subheader>Node-Red.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/flows.json">
            Link to Github.
          </Links>
        </Text>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-images/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekThree-webSockets.png"
          alt=" "
        />
        <CodeSnippets
          language="json"
          code={`[
{
        "id": "10cbe78670146e0e",
        "type": "tab",
        "label": "Flow 1",
        "disabled": false,
        "info": "",
        "env": []
    },
    {
        "id": "3a01ef8537cf1d15",
        "type": "udp in",
        "z": "10cbe78670146e0e",
        "name": "gyrodataIn",
        "iface": "",
        "port": "1834",
        "ipv": "udp6",
        "multicast": "false",
        "group": "",
        "datatype": "utf8",
        "x": 220,
        "y": 500,
        "wires": [
            [
                "c248cb44f9d2fa9f",
                "1f5db23482bfbad8"
            ]
        ]
    },
    {
        "id": "ed126be6f91c4f72",
        "type": "websocket out",
        "z": "10cbe78670146e0e",
        "name": "[ws] messages",
        "server": "804a11f491d4814c",
        "client": "",
        "x": 820,
        "y": 500,
        "wires": []
    },
    {
        "id": "8edcf24143d4b42a",
        "type": "file",
        "z": "10cbe78670146e0e",
        "name": "gyroDataLog",
        "filename": "/Users/matthewlaujh/Desktop/desktop/itpnyu/itpnyu/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/gyroDataLog",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "encoding": "none",
        "x": 810,
        "y": 560,
        "wires": [
            []
        ]
    },
    {
        "id": "93e1eed01f1819aa",
        "type": "debug",
        "z": "10cbe78670146e0e",
        "name": "debug 1",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 600,
        "wires": []
    },
    {
        "id": "c248cb44f9d2fa9f",
        "type": "function",
        "z": "10cbe78670146e0e",
        "name": "splitData",
        "func": "// Split the incoming UDP data into gyrometer and accelerometer data\nconst dataParts = msg.payload.trim().split(\"\\t\");\n\n// Extract gyrometer and accelerometer data\nconst gyroData = dataParts.slice(0, 3).join(\" \");\nconst accelData = dataParts.slice(3).join(\" \");\n\n// Send data to respective websockets\nreturn [\n    { payload: gyroData },\n    { payload: accelData }\n];\n",
        "outputs": 2,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 440,
        "y": 500,
        "wires": [
            [
                "0b7341951c9ad4f3",
                "8edcf24143d4b42a",
                "93e1eed01f1819aa"
            ],
            [
                "ba4429c06e13a2e9",
                "1e8ff422f4ac16cf",
                "610eb8ab4db4ec59"
            ]
        ]
    },
    {
        "id": "0b7341951c9ad4f3",
        "type": "websocket out",
        "z": "10cbe78670146e0e",
        "name": "[ws] gyroData",
        "server": "5d1d45a3090b6544",
        "client": "",
        "x": 820,
        "y": 500,
        "wires": []
    },
    {
        "id": "1f5db23482bfbad8",
        "type": "websocket out",
        "z": "10cbe78670146e0e",
        "name": "[ws] messages",
        "server": "55da9f9547e99a31",
        "client": "",
        "x": 460,
        "y": 420,
        "wires": []
    },
    {
        "id": "39d4213dc0b79c8d",
        "type": "websocket out",
        "z": "10cbe78670146e0e",
        "name": "[ws] accelData",
        "server": "804a11f491d4814c",
        "client": "",
        "x": 1181,
        "y": 659,
        "wires": []
    },
    {
        "id": "ba4429c06e13a2e9",
        "type": "file",
        "z": "10cbe78670146e0e",
        "name": "accelDataLog",
        "filename": "/Users/matthewlaujh/Desktop/desktop/itpnyu/itpnyu/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/accelDataLog",
        "filenameType": "str",
        "appendNewline": true,
        "createDir": true,
        "overwriteFile": "false",
        "encoding": "none",
        "x": 820,
        "y": 719,
        "wires": [
            []
        ]
    },
    {
        "id": "1e8ff422f4ac16cf",
        "type": "debug",
        "z": "10cbe78670146e0e",
        "name": "debug 2",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "statusVal": "",
        "statusType": "auto",
        "x": 800,
        "y": 760,
        "wires": []
    },
    {
        "id": "610eb8ab4db4ec59",
        "type": "function",
        "z": "10cbe78670146e0e",
        "name": "accelDataDetectFastMovement",
        "func": "const thresholdX = 2.0;\nconst thresholdY = 2.0;\nconst thresholdZ = 2.0;\n\nconst data = msg.payload.split(\"\\t\");\n\nconst x = parseFloat(data[0]);\nconst y = parseFloat(data[1]);\nconst z = parseFloat(data[2]);\n\nvar msg = {payload:\"\"}\n\nif (Math.abs(x) > thresholdX || Math.abs(y) > thresholdY || Math.abs(z) > thresholdZ){\n    msg.payload = { x: x, y: y, z: z };\n    return [[msg]];\n}\n",
        "outputs": 1,
        "timeout": 0,
        "noerr": 0,
        "initialize": "",
        "finalize": "",
        "libs": [],
        "x": 870,
        "y": 660,
        "wires": [
            [
                "39d4213dc0b79c8d"
            ]
        ]
    },
    {
        "id": "804a11f491d4814c",
        "type": "websocket-listener",
        "path": "/accelData",
        "wholemsg": "false"
    },
    {
        "id": "5d1d45a3090b6544",
        "type": "websocket-listener",
        "path": "gyroData",
        "wholemsg": "false"
    },
    {
        "id": "55da9f9547e99a31",
        "type": "websocket-listener",
        "path": "/messages",
        "wholemsg": "false"
    }
]
`}
        />
        <Subheader>Text File Logs</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/gyroDataLog">
            Gyrometer Data Log
          </Links>
        </Text>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week3/accelDataLog">
            Acceleromter Data Log
          </Links>
        </Text>
      </div>
    </Container>
  )
}
export default BlogPost
