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
        <Header>Week Two.</Header>
        <Subheader>Readings.</Subheader>
        <Text>
          The readings helped me better understand data types. I never quite
          paid much attention to data types usually just following what the
          tutorial suggested or just randomly trying each data type until it
          would hold the information that I wanted it to hold. But now I have a
          slightly better understanding of how to use each variable and the
          difference between storing small variables and large ones and why it
          matters to use the right data type. I'm still trying to understand
          binary and the notation systems but this was a good reading that I
          would definitely refer back to in the future.
        </Text>
        <Header>Lab Exercises from the Second Week.</Header>
        <Text>
          This week's exercise got me back into the groove of some light Arduino
          programming, last week I focused more on executing the labs using just
          electricity, so this week was more of a warmup to Arduino programming
          for me. It's been a couple of months since I last wrote Arduino code
          so this was helpful as it helped me get back into the understanding
          it's syntaxes and just the style of Arduino Code. Also this series of
          labs reminded me of some experiments I did to learn Arduino back in
          undergrad —{" "}
          <Links to="https://matthewlaujh.com/A-Series-of-Explorations-and-Technical-Challenges-2021">
            A Series of Explorations and Technical Challenges
          </Links>
          , where I messed around with different inputs to control LED outputs.
          It was developed as a guide for myself to understand simple
          interactions through a series of various inputs.
          <br></br>
          <br></br>
          Having come from using the Arduino UNO mainly for my work (although
          I've also used it wifi variant and the Nano 33 BLE SENSE for some
          machine learning based work), the Nano 33 IOT was somewhat new to me,
          although similar to the Nano 33 BLE SENSE, but something about not
          being able to see the pins and their labels threw me off, causing me
          to make a couple of mistakes when wiring up the board. But I got the
          hang of it after a while and it was a good learning experience to get
          familiar with the board.
        </Text>
        <Header>Lab: Digital Input and Output with an Arduino.</Header>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-1.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-2.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-3.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-4.jpg",
          ]}
          orientation="landscape"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-1.mov"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-2.mov"
          alt="Description of video"
        />
        <Header>Lab: Analog In with an Arduino.</Header>
        <Subheader>Add a Potentiometer and LED.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-5.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-6.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>Add Force Sensing Resistors.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-7.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-8.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-9.jpg",
          ]}
          orientation="landscape"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-3.mov"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-5.mov"
          alt="Description of video"
        />
        <Header>Lab: Sensor Change Detection.</Header>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-10.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-11.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>
          Add a pushbutton — Program the Microcontroller to Read the
          Pushbutton’s State Change.
        </Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-9.mov"
          alt="Description of video"
        />
        <Subheader>Add a pushbutton — Count Button Presses.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-10.mov"
          alt="Description of video"
        />
        <Subheader>Add a pushbutton — Long Press, Short Press</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-11.mov"
          alt="Description of video"
        />
        <Subheader>
          Analog Sensor Threshold Detection — Program the Microcontroller to
          Read a Sensor Threshold Crossing.
        </Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-6.mov"
          alt="Description of video"
        />
        <Subheader>
          Analog Sensor Threshold Detection — Detecting a Peak.
        </Subheader>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-12.jpg"
          alt=" "
        />
        <Subheader>
          Analog Sensor Threshold Detection — Dealing with Noise.
        </Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labTwo-8.mov"
          alt="Description of video"
        />
      </div>
      <Header>Bonus content — Pcomp x Hypercinema crossover</Header>
      <Text>
        The labs wasn't the only time I worked on Physical Computing this week —
        I also did up a quick prototype for an interactive piece for
        Hypercinema's first project creating a Sound Sculpture. But more on that
        on my Hypercinema Blog Post.
      </Text>
      <Images
        src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labTwo-13.jpg"
        alt=" "
      />
    </Container>
  )
}
export default WeekTwo
