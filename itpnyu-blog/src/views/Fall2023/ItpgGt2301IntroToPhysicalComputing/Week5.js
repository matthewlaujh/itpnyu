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
        <Header>Week 5</Header>
        <Subheader>Mid-Term Project - Progress update.</Subheader>
        <Text>
          Made some progress this week for the Mid-Term project, coming in with
          the idea we got together the necessary components. We started with
          making sure that we could play multiple tones at once with the
          Arduino. We realised that it wasn't possible on the Nano 33 IOT so we
          decided to use an old Arduino Uno that I had. The Uno has more
          internal clocks letting it assign one clock to one speaker letting us
          use up to 3 speakers playing tone simultaneously.
          <br></br>
          <br></br>
          Once that was working we move on to testing the hall sensors that we
          got and then the Rubber Cord Stretch Sensor, making sure we were able
          to get inputs from them, we then pieced them together into the first
          version of our prototype. We used the Hall Sensors to detect when a
          magnet was in place, that would trigger a tone to play on the speaker,
          from there the duration of the tone was controlled by the Stretch
          Sensor. We got this to work but not consistently and decided that we
          had to schedule some office hours with Danny to get some help moving
          forward.
        </Text>
        <Subheader>Code for testing multiple tones.</Subheader>
        <CodeSnippets
          language="arduino"
          code={`#include <Tone.h>

Tone tone1;
Tone tone2;
Tone tone3;


void setup() {


  tone1.begin(5);
  tone2.begin(6);
  tone3.begin(7);
}
void loop() {

  tone1.play(NOTE_C4);

  tone2.play(NOTE_E4);

  tone3.play(NOTE_E6);
}
`}
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-midTerm-multipleSpeakers.mov"
          alt="Description of video"
        />

        <Subheader>Code for testing the Hall Sensors.</Subheader>
        <CodeSnippets
          language="arduino"
          code={`int hallSensorPin = 2;       
int val;
int magnetState = 0;          

void setup() {   
  Serial.begin(9600);
  pinMode(hallSensorPin, INPUT);     
}
void loop(){
  
  val = digitalRead(hallSensorPin);
  if (val == HIGH) {        
    Serial.println("NO MAGNET");
    magnetState = 0;
    Serial.println("NO STATE");
  } 
  else {
    magnetState = 1;
    Serial.println("MAGNET");
    Serial.println("STATE");
  }
  
  delay(100);
}   
`}
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-midTerm-mutipleSpeakersHallSensor.mov"
          alt="Description of video"
        />

        <Subheader>Code for testing Rubber Cord Stretch Sensor.</Subheader>
        <CodeSnippets
          language="arduino"
          code={`#include <Tone.h>

Tone tone1;

const int analogInPin = A5;

int sensorValue = 0;
long outputValue = 0;

void setup() {
  Serial.begin(9600);
  tone1.begin(5);
}

void loop() {
  
  sensorValue = analogRead(analogInPin);
  
  outputValue = map(sensorValue, 300, 600, 0, 255);

  if (!tone1.isPlaying()) { 
    tone1.play(NOTE_C4, outputValue);
  }
  
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);
}
`}
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-midTerm-noiseError.mov"
          alt="Description of video"
        />

        <Subheader>Code for testing all of them together.</Subheader>
        <CodeSnippets
          language="arduino"
          code={`#include <Tone.h>

Tone tone0;
Tone tone1;
Tone tone2;

const int hallSensor0 = 2;
const int hallSensor1 = 3;
const int hallSensor2 = 4;

const int speaker0 = 5;
const int speaker1 = 6;
const int speaker2 = 7;

const int stretchSensor0 = A3;
const int stretchSensor1 = A4;
const int stretchSensor2 = A5;

int stretchVal0 = 0;
int stretchVal1 = 0;
int stretchVal2 = 0;

long stretchMap0 = 0;
long stretchMap1 = 0;
long stretchMap2 = 0;

int val0;
int val1;
int val2;
int val3;
int magnetState0 = 0;
int magnetState1 = 0;
int magnetState2 = 0;

void setup() {
  Serial.begin(9600);
  pinMode(hallSensor0, INPUT);
  pinMode(hallSensor1, INPUT);
  pinMode(hallSensor2, INPUT);

  tone0.begin(speaker0);
  tone1.begin(speaker1);
  tone2.begin(speaker2);
}
void loop() {
  val0 = digitalRead(hallSensor0);
  val1 = digitalRead(hallSensor1);
  val2 = digitalRead(hallSensor2);

  stretchVal0 = analogRead(stretchSensor0);
  stretchVal1 = analogRead(stretchSensor1);
  stretchVal2 = analogRead(stretchSensor2);

  // Serial.println(stretchVal0);
  // Serial.println(stretchVal1);
  Serial.println(stretchVal2);


  // stretchVal0 = constrain(stretchVal0, 400, 600);
  // stretchVal1 = constrain(stretchVal1, 300, 500);
  // stretchVal2 = constrain(stretchVal2, 300, 500);

  stretchMap0 = map(stretchVal0, 200, 700, 0, 255);
  stretchMap1 = map(stretchVal1, 200, 700, 0, 255);
  stretchMap2 = map(stretchVal2, 200, 700, 0, 255);

  if (val0 == HIGH) {
    magnetState0 = 0;
    // Serial.println("NO MAGNET 0");
    tone0.stop();
  } else {
    magnetState0 = 1;
    // Serial.println("MAGNET 0");
    if (!tone0.isPlaying()) {
      tone0.play(NOTE_C4, stretchMap0);
    }
  }

  if (val1 == HIGH) {
    magnetState1 = 0;
    // Serial.println("NO MAGNET 1");
    tone1.stop();
  } else {
    magnetState1 = 1;
    // Serial.println("MAGNET 1");
    if (!tone1.isPlaying()) {
      tone1.play(NOTE_E4, stretchMap1);
    }
  }

  if (val2 == HIGH) {
    magnetState2 = 0;
    // Serial.println("NO MAGNET 2");
    tone2.stop();
  } else {
    magnetState2 = 1;
    // Serial.println("MAGNET 2");
    if (!tone2.isPlaying()) {
      tone2.play(NOTE_C4, stretchMap2);
    }
  }
}          
`}
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-midTerm-noiseError2.mov"
          alt="Description of video"
        />
        <Subheader>Circuit Design.</Subheader>
        <Text>
          With the electronic prototype on pause till we get some help, we
          shifted to designing the circuit for the final object. In total we
          would need an Arduino Uno, 3 Speakers with 3 TIP102s and 220 Ohm
          resistors, 3 Rubber Cord Stretch Sensors with 3 10k Ohm Resistors, 7
          Hall Sensors with 7 10k Ohm Resistors. We thought the best way would
          be to place the main circuit onto a prototyping board with a
          solderless breadboard below and then lift it and solder down the
          resistor and cables then have the components move freely (attached to
          the cables) so that we can integrate it into the object we will be
          fabricating. We could leave it on the breadboard but I feel like that
          would open up room for components to get dislodged and break up the
          circuit so it might be better to solder them down onto a prototyping
          board.
        </Text>
        <Images src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-fritzingDiagram.jpg" />

        <Subheader>Possible shapes.</Subheader>
        <Text>
          We also started discussions on the aesthetic and form of the object.
          Initially we were thinking about a halloween theme for it but that
          felt abit too cheesy for us and we shifted to a more geometric shape
          instead. Although one of the ideas we had was to have it the shape of
          a spiderweb but there was a grid associated with that and we thought
          that might restrict the play element so we opted against that after
          some consideration.
        </Text>
        <Images src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-ideationSketch2.jpg" />
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-mockup-1.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-mockup-2.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-mockup-3.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-mockup-4.png",
          ]}
          orientation="landscape"
        />
      </div>
    </Container>
  )
}
export default BlogPost
