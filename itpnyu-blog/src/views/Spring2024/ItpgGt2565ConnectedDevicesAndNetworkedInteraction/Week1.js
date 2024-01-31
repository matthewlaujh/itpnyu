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
        <Header>Week 1</Header>
        <Subheader>Networked Art References</Subheader>
        <Text>
          Back when I started playing around with Physical Computing back in
          undergrad around 2020, it was just when Covid hit and everything was
          remote, online. That led to my interest in Connected Devices, my
          undergrad dissertation was about Remote Communication and Affective
          Communication. I was looking at how we can use technology to
          communicate not just more effectively but affectively online. Although
          due to technical constraints I could never really get my ideas to
          projects online, most of them ended up being simple proof of concepts
          and just experiments in learning documented here -{" "}
          <Links to="https://matthewlaujh.com/A-Series-of-Explorations-and-Technical-Challenges-2021">
            A Series of Explorations and Technical Challenges
          </Links>
          , and I had plans for my graduation project to be this remote
          installation set up in different locations where people could
          communicate emotions by facial expression but due to technical (not
          knowing how to program connected devices) and well physical (logistics
          of setting up something of this scale), I decided to focus on creating
          the experience within a confined space but still using the same
          concept, with it just kind of serving as a Proof of Concept mock up
          that could potential be scaled in the future to be remote -{" "}
          <Links to="https://matthewlaujh.com/Hello-I-m-Here-Exhibition-2022">
            Hello I'm Here.
          </Links>
          <br></br>
          <br></br>Those were part of my motivations for taking this class and
          also back then before I thought of doing the projects as an
          installation I was largely influenced and inspired by these two
          Connected Devices projects -{" "}
          <Links to="https://www.hereandthere.io/">
            Here and There by Students from ECAL and MIT
          </Links>{" "}
          and{" "}
          <Links to="https://www.yoyomachines.io/">
            Yo-Yo Machines by Interaction Research Studio at Goldsmiths, UOL.
          </Links>
          Both of these projects were born out of the pandemic and were such fun
          ways to think about remote communication in the era of video
          conferencing. It provided an alternative method of communication that
          is mostly non-verbal which was super interesting to me at the time.
          Everyone focused on how could we connect effectively and achieve
          "real-lifeness" or high levels of representation but what about
          something as simple as presence? I had just gone back to school after
          working for a year and I was just thinking about how being on zoom all
          the time had taken away small interactions that we used to have in the
          office, things like signaling to someone, or the presence of your
          friends/colleagues in the room working together or even something as
          simple as a wave.
          <br></br>
          <br></br>Or when I got covid and was isolated in my room for a week,
          how could I signal to my family that I needed something or just annoy
          my sister. These ideas of remote presence, simultaneous actions,
          shared experience and telepresences were really interesting at the
          time, and I might not be up to date on new projects but I really
          haven't seen anything much since the pandemic "ended". But I feel like
          these are still topics worth exploring today, especially with the
          impact the pandemic had on the world that has changed the way we work
          and communicate.
          <br></br>
          <br></br>
          What I liked about Here and There was the concepts behind each pair of
          objects and what they communicated from something so simple as{" "}
          <Links to="https://www.hereandthere.io/remote-desktop">
            Remote Desktop
          </Links>{" "}
          where it took mouse scroll rotation data and translated it as a clock
          hand turning at the other end to communicate remote presence to{" "}
          <Links to="https://www.hereandthere.io/chime-bright">
            Chime Bright
          </Links>{" "}
          where it creates this telepresence and shared experience through
          lights on one side and sound on the other.
          <br></br>
          <br></br>
          As for Yo-Yo Machines, firstly I loved that they made this
          open-sourced and accessible to everyone for just the price of the
          parts, they've provided all the code and guides on how to make them
          yourself at home. They've also designed them to be electronically very
          simple making it easy for anyone to make them and also leaving it up
          to the users to create their own own enclosures using household items.
          By doing that they've also allowed for slight variances in the
          interactions despite them sharing the same hardware. I was really
          inspired{" "}
          <Links to="https://www.yoyomachines.io/lighttouch">Light Touch</Links>
          , and it actually served as the inspiration behind my Hello I'm here
          project where I used the blending of Light to communicate a shared
          affective state. The other communicators I liked was{" "}
          <Links to="https://www.yoyomachines.io/flutterby">Flutter By</Links>{" "}
          and{" "}
          <Links to="https://www.yoyomachines.io/knock-knock">
            Knock Knock
          </Links>
          . These two communicators were so simple yet they managed to mimic
          subtle daily presence cues like people walking around you, footsteps,
          brushing against furniture, or even like a door knock, but in two
          different ways where Flutter By is more of a passive presence, Knock
          Knock was more of an active presence but both did it in a way that was
          not too intrusive.
          <br></br>
          <br></br>
          These two projects while similar in nature were also quite different
          technologically. Here and There used a custom piece of hardware
          developed by their professor called "The Hub" with hardware like
          Raspberry Pis to handle the networked communication between objects
          while Yo-Yo Machines used an easily sourced microcontroller (ESP32) to
          keep it accessible to people who were interested in making them. While
          I don't think one is a better approach than the other they both have
          their objectives and goals and I think their choice of hardware made
          sense, although I wished I could've ordered one of their Hubs to try
          it out. I did try out the Yo-Yo Machines and they were really quite
          accessible and fun.
          <br></br>
          <br></br>
          On top of those, some networked projects that I also like is this{" "}
          <Links to="https://themill.com/the-mill-plus/work/ee-close-yet-a-far-shave-bts/">
            A Close Yet Far Shave by The Mill for EE
          </Links>
          , now I don't quite know how it works but I thought it was insane how
          they used motion capture on a barber in London and then sending the
          mapped data of the Barber's movement over to a robot in the mountains
          to shave an actual person. The trust they had in the connection and
          their robot was quite something, one wrong move or if the connection
          was bad for a moment could've led to injury to the person. Another
          project I liked was{" "}
          <Links to="http://www.yesyesno.com/connecting-light">
            Connecting Light by YesYesNo
          </Links>{" "}
          where they used light balloons to light up and line a landscape.
          Audiences could communicate with these balloons through their phones
          to control the pulses of the balloons creating a shared experience.
          Whilst the interaction was simple I thought it was really interesting
          how they communicated with each other across such a vast landscape.
          <br></br>
          <br></br>I don't come from a product design background, but I really
          love products. Installations drew me away from developing a connected
          device during undergrad but one of the projects I really want to work
          on is creating connected devices - one such idea was maybe a connected
          keyboard where as you type, the keys light up on the other end and
          vice versa to communicate presence and shared experience. Hopefully
          that's something that I could start working on in this class in
          combination with my two other Physical Computing classes Electronics
          for Inventors and Homemade Hardware, I think these three classes
          together would give me a good foundation to at least create a simple
          prototype of this idea.
        </Text>
        <Subheader>Homework.</Subheader>
        <ExternalText>
          Using an Arduino and Node-RED, stream some data from a sensor of your
          choice into a text file. Then, try creating a custom JavaScript
          function to perform on your data stream by routing it through a
          FUNCTION node. The function can manipulate the data or enforce some
          sort of condition, only passing the data if it meets the condition.
          The transformation/condition can be arbitrary!
        </ExternalText>
        <Text>
          Decided to use the onboard Accelerometer on the Arduino Nano 33 IOT
          for the homework, I thought this was good exercise as it could send
          multiple data points (x,y,z) and contextually an accelerometer could
          be used for different object and installation purposes to detect
          movement. I also thought it would be interesting to see how the data
          would be represented in Node Red and how I could manipulate the data
          to create a condition. I followed the guides on the Arduino website to
          set up the accelerometer (Simple Accelerometer from the Arduino
          LSM6DS3 library) and tweaked the TCPsender example to send the data to
          Node Red. Then used the Node Red guides that were fairly manageable to
          follow to set up the conditions and since this was in Javascript I
          managed to find the math functions I needed to set the threshold for
          the data.
          <br></br>
          <br></br>
          However I did face a problem when I tried to output both the Text and
          the Data, so outputting two messages (last video below), it only
          output the first object which was the accelerometer data and not the
          classifying text even though I've put them both in the array as shown
          in the Node Red guide to outputting multiple messages. Not sure how to
          fix this.
        </Text>
        <Subheader>On-board Accelerometer.</Subheader>
        <CodeSnippets
          language="arduino"
          code={`// Provided as in class example, tweaked by me to send Accelerometer Code based on SimpleAccelerator example from the Arduino_LSM6DS3 library

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
`}
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekOne-arduinoAccelerometer.mp4"
          alt="Description of video"
        />
        <Subheader>Node Red Write to File.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/a04f5ee310c46f88a1403546e60121fc8c1b4b40/itpggt2565-connectedDevicesAndNetworkedInteraction/week1/accelerometerData">
            Link to Text File with Accelerometer Data.
          </Links>
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekOne-arduinoAccelerometer-nodeRedWriteToFile.mp4"
          alt="Description of video"
        />
        <Subheader>Node Red Function to Classify Fast Movement.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/a04f5ee310c46f88a1403546e60121fc8c1b4b40/itpggt2565-connectedDevicesAndNetworkedInteraction/week1/fastMovementTextData">
            Link to Text File with Accelerometer Data Classifying Fast and Slow
            Movement.
          </Links>
        </Text>
        <CodeSnippets
          language="javascript"
          code={`const thresholdX = 2.0;
const thresholdY = 2.0;
const thresholdZ = 2.0;

const data = msg.payload.split("\t");

const x = parseFloat(data[0]);
const y = parseFloat(data[1]);
const z = parseFloat(data[2]);

if (Math.abs(x) > thresholdX || Math.abs(y) > thresholdY || Math.abs(z) > thresholdZ) {
    msg.payload = "Fast Movement";
    return msg;
} else {
    msg.payload = "Slow or No Movement";
    return msg;
}
`}
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekOne-arduinoAccelerometer-nodeRedClassifyFastMovementText.mp4"
          alt="Description of video"
        />
        <Subheader>
          Node Red Function to Classify Fast Movement with Data (Not working
          properly).
        </Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/a04f5ee310c46f88a1403546e60121fc8c1b4b40/itpggt2565-connectedDevicesAndNetworkedInteraction/week1/fastMovementData">
            Link to Text File with Accelerometer Data Classifying Fast and Slow
            Movement with Data.
          </Links>
        </Text>
        <CodeSnippets
          language="javascript"
          code={`const thresholdX = 2.0;
const thresholdY = 2.0;
const thresholdZ = 2.0;

const data = msg.payload.split("\t");

const x = parseFloat(data[0]);
const y = parseFloat(data[1]);
const z = parseFloat(data[2]);

var msg1 = {payload:""}
var msg2 = {payload:""}

if (Math.abs(x) > thresholdX || Math.abs(y) > thresholdY || Math.abs(z) > thresholdZ) {
    msg1.payload = { x: x, y: y, z: z };
    msg2.payload = "Fast Movement";
    return [[msg1], [msg2]];
} else {
    msg1.payload = { x: x, y: y, z: z };
    msg2.payload = "Slow or No Movement";
    return [[msg1], [msg2]];
}
`}
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekOne-arduinoAccelerometer-nodeRedClassifyFastMovementTextAndData.mp4"
          alt="Description of video"
        />
      </div>
    </Container>
  )
}
export default BlogPost
