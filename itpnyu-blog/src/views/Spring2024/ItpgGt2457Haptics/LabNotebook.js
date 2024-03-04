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
        <Header>Lab Notebook</Header>
        <Subheader>Description</Subheader>
        <ExternalText>
          From the crass rattle of early pager motors to the more sophisticated
          purr of the iPhone taptic engine the ability to buzz has slowly worked
          its way into our devices. This course focuses on interaction design
          for non-visual feedback. Specifically it will explore how haptic
          feedback can be better utilized and integrated into handhelds,
          wearables, objects, and environments – basically anything that we
          touch or that touches us. Traditional tools such as eccentric rotating
          mass (ERM) motors, linear resonance actuators (LRAs), and haptic motor
          drivers will be introduced as well as less conventional methods such
          as gentle poking, prodding, warming, cooling, squeezing, and tickling.
          Through both hands on experimentation and a review of research to
          date, students will emerge from this course well-positioned to
          incorporate sophisticated non-visual feedback into their projects and
          prototypes.
          <br></br>
          <br></br>
          For two days we are going to function as a pop up Haptics research
          lab. Our area of exploration is the manipulation of electronic
          components and materials to create dynamic tactile stimuli. Our
          approach is learning through making and testing. Because haptics is
          focused on touch it is essential that we bring examples to life to we
          can touch and feel them. When considering the possibilities, we don’t
          just read about it. We try it, determine what works, what doesn’t, and
          get inspired by the possibilities and constraints.
          <br></br>
          <br></br>1 Credit Class over 2 days.
        </ExternalText>
        <Text>
          The class was a great introduction to haptics and opened up
          possibilites for me to apply them in future projects. I think the key
          takeaway here was how that you could create different illusions and
          patterns and thats something I want to look into further in the
          future. To push beyond haptic as just like "a feedback" to signify
          that something has been interacted with but it more as a medium on its
          own and how it can be used to create experiences.
          <br></br>
          <br></br>I don't usually work with haptics/vibrations in my work and
          haven't really experimented with them before or even follow that many
          artists that use it so this was a really interesting class for me to
          take and I'm glad I did. Really got my head thinking about it, so much
          so that I redid all the experiments at home after the class to just
          try to feel more.
        </Text>
        <Header>Hello Vibe Motors</Header>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-1.mp4"
          alt="Description of video"
        />
        <Header>Haptic Motor Driver.</Header>
        <ExternalText>
          This experiment introduces a new part – the haptic motor driver. This
          board and the associated library provide over 100 effects for the
          vibrating motor allowing for more sophisticated behavior with less
          programming. Try both the Basic and Complex Example.
          <br></br>
          <br></br>
          Create a bespoke haptic alarm sequence. Using the effects you wrote
          down from the Basic example, modify the Complex example to create your
          own signature haptic sensation that you would like to use as a morning
          alarm clock.
        </ExternalText>
        <Text>
          This was interesting to cycle through the library and see what
          different types of vibrations you could create, and it was a really
          good starting point at learning different patterns and getting a
          better understanding of how the duration of and patterns of vibrations
          feel. For the alarm clock I made something simple using 82, 52 and 71
          to ramp up, pulse then ramp down to create this loop.
        </Text>
        <Subheader>Basic Example</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-9.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-10.mp4"
          alt="Description of video"
        />
        <Subheader>Complex Example</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-11.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-12.mp4"
          alt="Description of video"
        />
        <Subheader>Alarm</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-13.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-14.mp4"
          alt="Description of video"
        />
        <CodeSnippets
          language="arduino"
          code={`// Based off the Complex Example
#include <Wire.h>
#include "Adafruit_DRV2605.h"

Adafruit_DRV2605 drv;

void setup() {
  Serial.begin(9600);
  Serial.println("DRV test");
  drv.begin();
    
  // I2C trigger by sending 'go' command 
  drv.setMode(DRV2605_MODE_INTTRIG); // default, internal trigger when sending GO command

  drv.selectLibrary(1);
  drv.setWaveform(0, 82);  // ramp up medium 1, see datasheet part 11.2
  drv.setWaveform(0, 52);  // ramp up medium 1, see datasheet part 11.2
  drv.setWaveform(0, 71);  // strong click 100%, see datasheet part 11.2
  drv.setWaveform(1, 0);  // end of waveforms
}

void loop() {
    drv.go();
    delay(1000);
}
`}
        />

        <Header>Motor Arrays.</Header>
        <ExternalText>
          In this experiment we branch out into using multiple vibration motors.
          The purpose of this is to generate sensations that travel across the
          an area of the body or simultaneously stimulate multiple locations on
          the skin.
          <br></br>
          <br></br>
          Extension wires are needed to we can position the motors on different
          parts of the body. <br></br>
          <br></br>Activate in Unison - Working from the Blink example, write
          and test code to activate all motors as part of the Blink sequence.{" "}
          <br></br>
          <br></br>
          Activate Individually - Write code to activate them in a sequence, so
          that each motor turns on one at a time. For instance: Turn on Motor 1
          for 1 second, then turn it off. Turn on Motor 2 for 1 second, then
          turn it off. Turn on Motor 3 for 1 second, then turn it off. Position
          them somewhere on the body, such as the forearm, and explore how it
          feels. Medical tape can be used to connect the motor to the skin. Play
          with physical spacing and timing of your activation.
          <br></br>
          <br></br> Play with bleed – as in the first motor only turning off
          after the second one starts. <br></br>
          <br></br> Patterns - Write code to activate the motors in different
          patterns. Explore what sensations you can discover. Write a program
          that attempts to simulate the effect of being touched by another
          person. It can be a poke, stroke, scratch, or whatever else you can
          come up with. Pay attention to see if you encounter any sensory
          illusions such as: sensory funneling illusion – when brief tactile
          stimuli are presented at several closely spaced locations on the skin
          they are often perceived as occurring at a single focal point at the
          center of the stimuli phi phenomena – when a number of discrete taps
          are delivered to the skin and are experienced as a single stimulus
          moving across the skin rather than as isolated taps sensory saltation
          (was first known as “cutaneous rabbit”) – when a series of short
          pulses delivered at three different locations on the skin are
          perceived as stimulus that is moving progressively across the skin
        </ExternalText>
        <Text>
          This was an interesting exercise as I tried the three different
          sensory illusions. The first one was the sensory funneling illusion
          and it felt really kind of weird. But for me it actually felt like it
          was moving towards the middle more than it being originating at the
          middle? Maybe I'm overthinking this? While the other two felt as
          described but these illusions seem really interesting and I wonder if
          they could be used as some kind of an interesting interaction method
          that is less a feedback but more of a co-feeling with the
          object/experience or whatever form it might take?
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-2.mp4"
          alt="Description of video"
        />
        <Subheader>Sensory Funneling Illusion</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-3.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-4.mp4"
          alt="Description of video"
        />
        <CodeSnippets
          language="arduino"
          code={`void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  digitalWrite(2, HIGH);
  digitalWrite(3, HIGH);
  digitalWrite(4, HIGH);
  delay(1000);
}
`}
        />
        <Subheader>Phi Phenomena</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-5.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-6.mp4"
          alt="Description of video"
        />
        <CodeSnippets
          language="arduino"
          code={`void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  digitalWrite(2, HIGH);
  digitalWrite(3, HIGH);
  digitalWrite(4, HIGH);
  delay(1000);
  digitalWrite(2, LOW);
  digitalWrite(3, LOW);
  digitalWrite(4, LOW);
  delay(1000);
}
`}
        />
        <Subheader>Sensory Saltation</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-7.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-8.mp4"
          alt="Description of video"
        />
        <CodeSnippets
          language="arduino"
          code={`void setup() {
  pinMode(2, OUTPUT);
  pinMode(3, OUTPUT);
  pinMode(4, OUTPUT);
}

void loop() {
  digitalWrite(2, HIGH);
  delay(500);
  digitalWrite(2, LOW);
  digitalWrite(3, HIGH);
  delay(500);
  digitalWrite(3, LOW);
  digitalWrite(4, HIGH);
  delay(500);
  digitalWrite(4, LOW);
}
`}
        />
        <Header>Shareable Haptic Experience.</Header>
        <ExternalText>
          Your task is to develop and implement a unique or bespoke haptic
          feedback “sketch” that can be shared with the group. You can work in a
          small group or individually – just arrive at a decision before the
          start of class on Sunday. You are encouraged to combine your outside
          superpowers (skills and interests that you haven’t utilized in this
          class yet) with the learnings from this weekend. You can draw on your
          coding abilities, hardware prowess, fabrication expertise, etc.
          Overall, use your new knowledge of haptics to explore and experiment
          and report back via your documentation with your results!
          <br></br>
          <br></br>
          Here are a variety of topics that your project could engage with.
          servos mechanisms to tickle, poke, prod, scratch, tap, or squeeze
          heating and/or cooling airflow larger vibe motors DIY vibe motors
          linear resonance actuators (LRAs) vibrational grid or matrix
          programming sophisticated vibratory effects For whatever topic you
          choose, determine a method for embedding the vibrating motors in a
          wearable, on the body, or in an object such that the vibrations can be
          perceived well by the user. Move beyond motors dancing on a
          breadboard!
        </ExternalText>
        <Subheader>Idea</Subheader>
        <Text>
          Saw the pipe cleaners and wanted to create something wearable, as we
          spun it around we realised it looked like the loading logo, so we
          decided to put in our heads to create a thinking cap, for when you
          need just a bit more stimulation to stay awake and think it tickles
          your head and your brain.
          <br></br>
          <br></br>
          Was interesting to see people's reaction to our project, well I guess
          most people found it really weird, I mean I did too but it was a fun
          project to work on and I would like to think that it kind of works,
          really got people "scratching their heads". And it for sure keeps you
          up and thinking so mission accomplish?
        </Text>
        <Subheader>User Testers!</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-15.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-16.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-17.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-18.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-19.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-20.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-21.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-22.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-23.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-24.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2457-haptics-videos/itpg-gt-2457-haptics-25.mp4"
          alt="Description of video"
        />
        <Subheader>Code</Subheader>
        <CodeSnippets
          language="arduino"
          code={`// Simple sketch to control it using the Sweep Servo example from the Servo Library
 /* Sweep
 by BARRAGAN <http://barraganstudio.com>
 This example code is in the public domain.

 modified 8 Nov 2013
 by Scott Fitzgerald
 https://www.arduino.cc/en/Tutorial/LibraryExamples/Sweep
*/
         
#include <Servo.h>

Servo myservo;  // create servo object to control a servo
// twelve servo objects can be created on most boards

int pos = 0;    // variable to store the servo position

void setup() {
  myservo.attach(9);  // attaches the servo on pin 9 to the servo object
}

void loop() {
  for (pos = 0; pos <= 180; pos += 1) { // goes from 0 degrees to 180 degrees
    // in steps of 1 degree
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15 ms for the servo to reach the position
  }
  for (pos = 180; pos >= 0; pos -= 1) { // goes from 180 degrees to 0 degrees
    myservo.write(pos);              // tell servo to go to position in variable 'pos'
    delay(15);                       // waits 15 ms for the servo to reach the position
  }
}
`}
        />
      </div>
    </Container>
  )
}
export default BlogPost
