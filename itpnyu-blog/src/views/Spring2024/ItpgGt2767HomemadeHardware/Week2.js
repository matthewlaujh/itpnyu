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
        <Header>Week 2</Header>
        <Subheader>
          Homework - Programming Jig and Capacitive Sensor Controlling Multiple
          LEDs.
        </Subheader>
        <ExternalText>
          Finish making your ATtiny85 programming jig.
          <br></br>
          Breadboard a capacitive sensor controlling multiple LEDs.
        </ExternalText>
        <Text>
          Finished soldering my programming jig and I think this might be one of
          my better solder jobs in a long time and also tried to keep the wired
          neat which I think worked out, overall it looks pretty good?
          <br></br>
          <br></br>
          Made a simple capacitive sensor using a wire to control multiple LEDs,
          although it's kind of finicky and sometimes I triggers both LEDs, I
          suspect that it might be a shared ground issue but need to ask in
          class about this. Also I've been obsessed with creating tiny circuits
          in Electronics for Inventors so I thought I'd bring that spirit here
          and try to create as small a footprint as possible, not sure if that's
          also causing issues with the sensing.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2767-homemadehardware-videos/itpg-gt-2767-homemadeHardware-weekTwo-touchLed.mp4"
          alt="Description of video"
        />
        <Subheader>Touch Sensor Code.</Subheader>
        <CodeSnippets
          language="arduino"
          code={`int touchPinA = A3;
int touchPinB = A2;
int valA = 0;
int valB = 0;
int ledPinA = 0;
int ledPinB = 1;

void setup() {
  pinMode(ledPinA, OUTPUT);
  pinMode(ledPinB, OUTPUT);
}

void loop() {
  valA = analogRead(touchPinA);
  valB = analogRead(touchPinB);
  if (valA >= 200) {
    digitalWrite(ledPinA, HIGH);
  } else {
    digitalWrite(ledPinA, LOW);
  }

  if (valB >= 200) {
    digitalWrite(ledPinB, HIGH);
  } else {
    digitalWrite(ledPinB, LOW);
  }
}
`}
        />
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2767-homemadehardware-images/itpg-gt-2767-homemadeHardware-weekTwo-programmgJigFront.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2767-homemadehardware-images/itpg-gt-2767-homemadeHardware-weekTwo-programmgJigBack.jpg",
          ]}
          orientation="landscape"
        />
      </div>
    </Container>
  )
}
export default BlogPost
