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

const WeekSix = () => {
  return (
    <Container>
      <div>
        <Header>Week Six.</Header>
        <Subheader>Mid-Term Project.</Subheader>
        <Text>
          Working with{" "}
          <Links to="https://www.itp.jnackash.com/">Jasmine Nackash</Links> for
          this Mid-Term project. We designed what started out as a Hallowween
          themed-Ouija board inspired instrument that turned into this weird
          noise making interactive object of play. It was a lot of fun working
          on this project but the most fun came from when the class playtested
          it during the presentation, we haven't had much time to playtest it as
          we were focused on making it work up till class started but watching
          our classmate trying to figure out how it works and just messing
          around with it trying to control the sound made the process of
          creating the object well worth it.
          <br></br>
          <br></br>I really liked the feeback we got about it being this sort of
          intimate experience where people can come together to each control a
          set of knobs and sort of like play twister with it, it brought another
          level of intimacy, thought and complexity to the concept of the
          project which didn't quite cross our minds when we designing this. We
          thought of it more as a one person object, an instrument but this new
          opinion of it being an intimate experience or an object of play
          actually really suits what we've prototyped this round and Jasmine and
          I agreed that we should continue developing this concept for Finals in
          a few weeks, trying to see if we can improve on things like the sound,
          the design and the interaction further.
          <br></br>
          <br></br>
          The process of designing this was also technically challenging for me,
          writing the code and logic was actually straightforward enough the
          main issue I had personally was figuring out how many "flags" I needed
          to check with each sensor reading and that took awhile for me to
          figure out and get there but the basic interaction isn't too complex,
          although we did get stuck when we tested three tones on the Arduino
          Uno on it's own, it worked but when integrated with the rest of our
          code it stopped working. We consulted the residents during the PCOMP
          Help Session and they came up with a theory that the tone library
          didn't like being switched around too much and maybe we had too many
          conditional statements in the code, which might have been why. But we
          also booked office hours with Danny after that and he came to the
          conclusion that the Millis() function of the Arduino actually took up
          one of the three timers in the Uno, which is why the program stopped
          working we we had three tones + millis requiring 4 timers. We didn't
          have time to fix this before mid-terms but we will keep this in mind
          moving forward as we try to refine the object. But we still managed to
          achieve three tones for mid-term by splitting out one of the tones
          onto a second Arduino to run.
          <br></br>
          <br></br>
          Another fun thing about this project was that I got to learn how to
          design and plan out a circuit and then solder down all my components
          onto a prototyping board. I've worked on Pcomp related projects for
          about four years now but this is my first time actually doing this and
          I think my board looked not too bad. It's not the neatest solder job
          but everything worked out fine and I think that's pretty good for my
          first time. I always just had components on a breadboard and drowned
          it in hot glue to stay in place, which I guess also works but might
          not be the best way to do things, and usually only work when there's
          only a few components. But there were too many moving parts in the
          circuit of this object and soldering them down was the right choice.
          Although many other parts of our object were drowned with my favourite
          method of hot glue like the insides of the knobs which held out
          sensors and the underneath of the panel where we had our magnets.
          <br></br>
          <br></br>
          Another issue we faced was that I used the hard wires when soldering
          down the components and we realised that the stiffness of the wires
          made it really difficult for our knobs to stay on the board, so we had
          to snip and extend the cables with softer wires to make it easier for
          the knobs to stay on the board, which was something the slipped my
          mind, an oversight. We should've paid more attention to these details.
          We could also think about hiding the prototyping board and Arduinos
          into object, currently they just lay on the side of it. We initially
          planned to hide it inside the object, but due to limitations of the
          size of the laser cutter, we designed our object to be smaller and we
          ran out of space after putting in the three speakers, another thing we
          could've designed better. Overall we could've put in more thought to
          the details and design, but if we think of this version as prototype,
          we now know what we have to work on for the next version.
          <br></br>
          <br></br>
          Also shoutout to Octavio from another class who helped us figure out
          the notes and sounds to use, he recommended that we used a pentatonic
          scale + 1 note from one octave above which in the end we used A4, C4,
          D4, E4, G4 and A5 which I then translated into their frequencies. A4
          paired with C4, D4 paired with E4, G4 paired with A5 for the pitch
          bending of each pair of knobs. We designed it so that each knobs plays
          a note when activated by the magnet and then if both knobs in a pair
          are activated at the same time it would pitch bend between the two
          notes to create some harmonies. We also used the stretch sensors to
          control the speed of the bend which gave us some rythm and control
          over the sound.
          <br></br>
          <br></br>
          All in all, I'm really satisfied with the outcome of this project and
          although it's not perfect yet, we have time to refine this and I
          really look forward to creating something fun that could possibly be
          part of the winter show. I'd imagine that people will have fun playing
          around with this.
        </Text>
        <Subheader>In-Class Playtesting.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-midTerm-inClassPlayTesting.mov"
          alt="Description of video"
        />
        <Images src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-inClassPlayTesting.jpg" />
        <Images src="" />
        <Subheader>Soldering a prototyping board.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-soldering-1.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-soldering-2.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-soldering-3.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>Fabrication of the objects.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-fabrication-1.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-fabrication-2.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-fabrication-3.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-fabrication-4.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>Component Layouts.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-componentLayout.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-midTerm-componentLayout-2.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>Final Code.</Subheader>
        <CodeSnippets
          language="arduino"
          code={`#include <Tone.h>

Tone toneA;
Tone toneB;
Tone toneC;

// Components
const int speakerA = 9;
const int speakerB = 10;
const int speakerC = 11;

const int hallSensorA0 = 2;
const int hallSensorA1 = 3;
const int hallSensorB0 = 4;
const int hallSensorB1 = 5;
const int hallSensorC0 = 6;
const int hallSensorC1 = 7;

const int stretchSensorA = A0;
const int stretchSensorB = A1;
const int stretchSensorC = A2;

// Values
bool hallTriggerA = false;
bool hallTriggerA0 = false;
bool hallTriggerA1 = false;
bool hallTriggerB = false;
bool hallTriggerB0 = false;
bool hallTriggerB1 = false;
bool hallTriggerC = false;
bool hallTriggerC0 = false;
bool hallTriggerC1 = false;

int stretchValueA;
int stretchValueB;
int stretchValueC;

float stretchAverageA;
float stretchAverageB;
float stretchAverageC;

int stretchConstrainA;
int stretchConstrainB;
int stretchConstrainC;

int stretchMapA;
int stretchMapB;
int stretchMapC;

unsigned long intervalA = 10;
unsigned long intervalA0 = 10;
unsigned long intervalA1 = 10;
unsigned long intervalB = 10;
unsigned long intervalB0 = 10;
unsigned long intervalB1 = 10;
unsigned long intervalC = 10;
unsigned long intervalC0 = 10;
unsigned long intervalC1 = 10;

unsigned long previousMillisA = 0;
unsigned long previousMillisA0 = 0;
unsigned long previousMillisA1 = 0;
unsigned long previousMillisB = 0;
unsigned long previousMillisB0 = 0;
unsigned long previousMillisB1 = 0;
unsigned long previousMillisC = 0;
unsigned long previousMillisC0 = 0;
unsigned long previousMillisC1 = 0;

float frequencyA0 = 440;
float frequencyA1 = 260;
float frequencyB0 = 330;
float frequencyB1 = 290;
float frequencyC0 = 880;
float frequencyC1 = 390;

float currentFrequencyA = 440;
float currentFrequencyB = 290;
float currentFrequencyC = 390;

float frequencyStepA = 0.5;
float frequencyStepB = 0.5;
float frequencyStepC = 0.5;

bool increasingFrequencyA = true;
bool increasingFrequencyB = true;
bool increasingFrequencyC = true;


void setup() {
  Serial.begin(9600);

  toneA.begin(speakerA);
  toneB.begin(speakerB);
  toneC.begin(speakerC);

  pinMode(stretchSensorA, INPUT);
  pinMode(stretchSensorB, INPUT);
  pinMode(stretchSensorC, INPUT);
}

void loop() {

  measureStretchValues();

  // Hall Sensor A
  if (digitalRead(hallSensorA0) == LOW && !hallTriggerA0) {
    hallTriggerA0 = true;
    previousMillisA0 = millis();
  } else if (digitalRead(hallSensorA0) == HIGH && hallTriggerA0) {
    hallTriggerA0 = false;
    toneA.stop();
  }

  if (digitalRead(hallSensorA1) == LOW && !hallTriggerA1) {
    hallTriggerA1 = true;
    previousMillisA1 = millis();
  } else if (digitalRead(hallSensorA1) == HIGH && hallTriggerA1) {
    hallTriggerA1 = false;
    toneA.stop();
  }

  if (digitalRead(hallSensorA0) == LOW && digitalRead(hallSensorA1) == LOW && !hallTriggerA) {
    hallTriggerA = true;
    previousMillisA = millis();
    currentFrequencyA = frequencyA0;
    increasingFrequencyA = true;
  } else {
    hallTriggerA = false;
    toneA.stop();
  }

  // Hall Sensor B
  if (digitalRead(hallSensorB0) == LOW && !hallTriggerB0) {
    hallTriggerB0 = true;
    previousMillisB0 = millis();
  } else if (digitalRead(hallSensorB0) == HIGH && hallTriggerB0) {
    hallTriggerB0 = false;
    toneB.stop();
  }

  if (digitalRead(hallSensorB1) == LOW && !hallTriggerB1) {
    hallTriggerB1 = true;
    previousMillisB1 = millis();
  } else if (digitalRead(hallSensorB1) == HIGH && hallTriggerB1) {
    hallTriggerB1 = false;
    toneB.stop();
  }

  if (digitalRead(hallSensorB0) == LOW && digitalRead(hallSensorB1) == LOW && !hallTriggerB) {
    hallTriggerB = true;
    previousMillisB = millis();
    currentFrequencyB = frequencyB0;
    increasingFrequencyB = true;
  } else {
    hallTriggerB = false;
    toneB.stop();
  }

  // Hall Sensor C
  if (digitalRead(hallSensorC0) == LOW && !hallTriggerC0) {
    hallTriggerC0 = true;
    previousMillisC0 = millis();
  } else if (digitalRead(hallSensorC0) == HIGH && hallTriggerC0) {
    hallTriggerC0 = false;
    toneC.stop();
  }

  if (digitalRead(hallSensorC1) == LOW && !hallTriggerC1) {
    hallTriggerC1 = true;
    previousMillisC1 = millis();
  } else if (digitalRead(hallSensorC1) == HIGH && hallTriggerC1) {
    hallTriggerC1 = false;
    toneC.stop();
  }

  if (digitalRead(hallSensorC0) == LOW && digitalRead(hallSensorC1) == LOW && !hallTriggerC) {
    hallTriggerC = true;
    previousMillisC = millis();
    currentFrequencyC = frequencyC0;
    increasingFrequencyC = true;
  } else {
    hallTriggerC = false;
    toneC.stop();
  }

  playToneA();
  playToneB();
  playToneC();  

  Serial.print("Sensor: ");
  Serial.print(digitalRead(hallSensorA0));
  Serial.print("\tSensor: ");
  Serial.print(digitalRead(hallSensorA1));
  Serial.print("\tSensor: ");
  Serial.print(digitalRead(hallSensorB0));
  Serial.print("\tSensor: ");
  Serial.print(digitalRead(hallSensorB1));
  Serial.print("\tSensor: ");
  Serial.print(digitalRead(hallSensorC0));
  Serial.print("\tSensor: ");
  Serial.println(digitalRead(hallSensorC1));
}

void measureStretchValues() {
  stretchValueA = analogRead(stretchSensorA);
  stretchAverageA = stretchAverageA * 0.99 + stretchValueA * 0.01;
  stretchConstrainA = constrain(stretchAverageA, 140, 300);
  stretchMapA = map(stretchConstrainA, 140, 300, 50, 1);

  stretchValueB = analogRead(stretchSensorB);
  stretchAverageB = stretchAverageB * 0.99 + stretchValueB * 0.01;
  stretchConstrainB = constrain(stretchAverageB, 130, 350);
  stretchMapB = map(stretchConstrainB, 130, 350, 50, 1);

  stretchValueC = analogRead(stretchSensorC);
  stretchAverageC = stretchAverageC * 0.99 + stretchValueC * 0.01;
  stretchConstrainC = constrain(stretchAverageC, 120, 300);
  stretchMapC = map(stretchConstrainC, 120, 300, 50, 1);
}

void playToneA() {
  if (hallTriggerA0) {
    unsigned long currentMillisA0 = millis();
    if (currentMillisA0 - previousMillisA0 >= intervalA0) {
      previousMillisA0 = currentMillisA0;
      toneA.play((int)frequencyA0);
    }
  } else if (hallTriggerA1) {
    unsigned long currentMillisA1 = millis();
    if (currentMillisA1 - previousMillisA1 >= intervalA1) {
      previousMillisA1 = currentMillisA1;
      toneA.play((int)frequencyA1);
    }
  } else if (hallTriggerA) {
    unsigned long currentMillisA = millis();
    frequencyStepA = stretchMapA;
    if (currentMillisA - previousMillisA >= intervalA) {
      previousMillisA = currentMillisA;

      if (increasingFrequencyA) {
        currentFrequencyA += frequencyStepA;

        if (currentFrequencyA >= frequencyA0) {
          increasingFrequencyA = false;
        }

      } else {
        currentFrequencyA -= frequencyStepA;

        if (currentFrequencyA <= frequencyA1) {
          increasingFrequencyA = true;
        }
      }
      toneA.play((int)currentFrequencyA);
    }
  } else {
    toneA.stop();
  }
}

void playToneB() {
  if (hallTriggerB0) {
    unsigned long currentMillisB0 = millis();
    if (currentMillisB0 - previousMillisB0 >= intervalB0) {
      previousMillisB0 = currentMillisB0;
      toneB.play((int)frequencyB0);
    }
  } else if (hallTriggerB1) {
    unsigned long currentMillisB1 = millis();
    if (currentMillisB1 - previousMillisB1 >= intervalB1) {
      previousMillisB1 = currentMillisB1;
      toneB.play((int)frequencyB0);
    }
  } else if (hallTriggerB) {
    unsigned long currentMillisB = millis();
    frequencyStepB = stretchMapB;
    if (currentMillisB - previousMillisB >= intervalB) {
      previousMillisB = currentMillisB;

      if (increasingFrequencyB) {
        currentFrequencyB += frequencyStepB;

        if (currentFrequencyB >= frequencyB0) {
          increasingFrequencyB = false;
        }

      } else {
        currentFrequencyB -= frequencyStepB;

        if (currentFrequencyB <= frequencyB1) {
          increasingFrequencyB = true;
        }
      }
      toneB.play((int)currentFrequencyB);
    }
  } else {
    toneB.stop();
  }
}

void playToneC() {
  if (hallTriggerC0) {
    unsigned long currentMillisC0 = millis();
    if (currentMillisC0 - previousMillisC0 >= intervalC0) {
      previousMillisC0 = currentMillisC0;
      toneC.play((int)frequencyC0);
    }
  } else if (hallTriggerC1) {
    unsigned long currentMillisC1 = millis();
    if (currentMillisC1 - previousMillisC1 >= intervalC1) {
      previousMillisC1 = currentMillisC1;
      toneC.play((int)frequencyC1);
    }
  } else if (hallTriggerC) {
    unsigned long currentMillisC = millis();
    frequencyStepC = stretchMapC;
    if (currentMillisC - previousMillisC >= intervalC) {
      previousMillisC = currentMillisC;

      if (increasingFrequencyC) {
        currentFrequencyC += frequencyStepC;

        if (currentFrequencyC >= frequencyC0) {
          increasingFrequencyC = false;
        }

      } else {
        currentFrequencyC -= frequencyStepC;

        if (currentFrequencyC <= frequencyC1) {
          increasingFrequencyC = true;
        }
      }
      toneC.play((int)currentFrequencyC);
    }
  } else {
    toneC.stop();
  }
}

`}
        />
      </div>
    </Container>
  )
}
export default WeekSix
