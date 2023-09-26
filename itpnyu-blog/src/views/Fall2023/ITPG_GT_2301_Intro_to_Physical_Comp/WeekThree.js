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

const WeekTwo = () => {
  return (
    <Container>
      <div>
        <Header>Week Three.</Header>
        <Subheader>Readings.</Subheader>
        <Quotes>
          Approach:
          <br></br> By outlining a design method that is useful in creating a
          broad class of interactions, we seek to complement technology-based
          approaches which focus for instance on sensors and architectures that
          enable implicit interaction), or analysis-based approaches (which
          would investigate implicit interaction through studies and controlled
          experiments) towards implicit interaction design. This design-based
          approach has two main objectives: to be "generative"-that is, to guide
          designers in a constructive fashion in designing implicit inter
          actions and to be "generalizable"-that is, to suggest techniques and
          methods that are applicable to interaction designers working on a wide
          array of ubiquitous computing scenarios. — The Design of Implicit
          Interactions: Making Interactive Systems Less Obnoxious by Wendy Ju
          and Larry Leifer
        </Quotes>
        <Text>
          Really enjoyed this week's reading on "The Design of Implicit
          Interactions" — I've come across this concept of implicit interactions
          once before during undergrad so the concept wasn't new to me, but it
          was interesting to read more into the framework and better understand
          it. Also now I've got the opportunity to view it from a different lens
          — While doing the reading one thought that kept popping up in my head
          was that, while there was the other framework about building more
          intelligent proactive systems, one inbetween ground that could be
          explored nowadays is using Edge Computing with IOT and Generative AI.
          The combination of learning and pattern analysis through IOT devices
          and Edge Computing and being able to generate solutions on the spot
          with Generative AI, that could be an interesting thought on how it
          could provide predictive behaviours as well as contextual awareness.
          <br></br>
          <br></br>
          The other reading I enjoyed was about the tech industry. It reminded
          me of this podcast (can't quite remember the name now) but it talked
          about Dyson as a brand and how they were able to create a brand that
          is ubiquitous with innovation and technology and is positioned as a
          tech company but at it's core it's really a gears and motor company.
          They make gears and motors that suck or push air. Which was very
          interesting to me at the time cause I was also caught up with the
          whole "tech industry" idea but since coming across that podcast and
          now this reading, My perspective has really shifted and I am trying to
          see companies for what they are fundamentally without the tech — as
          mentioned in the reading, almost all companies are powered by tech, so
          it's a fun exercise to try to strip the tech away from them and figure
          what they really are.
        </Text>
        <Header>Lab: Analog Output.</Header>
        <Text>
          Never knew that the analogWrite was a psuedo-analog voltage or pulse
          width modulation (PWM) before this. I always thought that it was
          actually analog. But thinking back to work I've done in the past, this
          makes sense. Through my work working with LEDS, I think (correct me if
          I'm wrong), but I've had the occasional trouble with transitions
          between different brightness levels, I've had a couple of works that
          had pulsing brightnesses, and you can see the occasional flickers or
          staggering in them. Which I am guessing is because of the stepping of
          the PWM.
        </Text>
        <Header>Lab: Tone Output Using An Arduino.</Header>
        <Subheader>Connect the Sensors and the Speaker.</Subheader>
        <Subheader>Check the sensor input range.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-1.mov"
          alt="Description of video"
        />
        <Subheader>Check that the Speaker Works.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-2.mov"
          alt="Description of video"
        />
        <Subheader>Play Tones.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-3.mov"
          alt="Description of video"
        />
        <Subheader>Play it Loud.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-4.mov"
          alt="Description of video"
        />
        <Subheader>Use Headphones.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-5.mov"
          alt="Description of video"
        />
        <Subheader>A more complex example.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-6.mov"
          alt="Description of video"
        />
        <Subheader>A Musical Instrument</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-7.mov"
          alt="Description of video"
        />
        <Header>Lab: Servo Motor Control with an Arduino</Header>
        <Subheader>Connect an Analog Input Sensor and a Servo</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labThree-8.mov"
          alt="Description of video"
        />
      </div>
    </Container>
  )
}
export default WeekTwo
