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

const WeekOne = () => {
  return (
    <Container>
      <div>
        <Header>Week One</Header>
        <Subheader>Introduction to my Physical Computing Background.</Subheader>
        <Text>
          I've worked with Physical Computing a fair bit in my undergrad, at
          work previously and as part of my art practice having designed and
          built installations. And the way I learnt Physical Computing in the
          past was quite "hacky" I didn't have the opportunity to get formal
          instructions and to learn the technical terms of things. Below are
          some of my work (find out more at{" "}
          <Links to="https://matthewlaujh.com">matthewlaujh.com</Links>)
          involving Physical Computing most of them involve LED Strips but some
          of them are just experiments around interfacing with sensors or other
          methods of input and output such as voice and machine learning.
        </Text>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekOne-7.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekOne-4.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekOne-5.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekOne-2.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekOne-3.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekOne-6.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekOne-1.jpg",
          ]}
          orientation="landscape"
        />
        <Header>Lab Exercises from the First Week.</Header>
        <Text>
          The labs were a great way for me to get back into the groove of
          things, it's been a couple of months since I've last wired something
          up so this was a good warm up exercise just to get things going again.
          These labs were also a great resource to rebuild my knowledge and
          vocabulary around Physical Computing hardware and concepts. Deep
          diving into what each specific component was called and what's the
          difference between a Ceramic Capacitor vs a Electrolytic Capacitor was
          something that I did not know about before. Or even just what the
          colours on a resistor meant, I've always just looked up a guide and
          visually matched the colours.
          <br></br>
          <br></br>
          Especially so for electricity, I've always had a very basic
          understanding of electricity. I understand what's needed to power my
          work, for example if the LEDs i'm using run on 12V, I have to get a
          12V power supply but if I want to use that same Power Supply to power
          a 5V Arduino I'd need a step-down converter. And like if I have an
          output of a certain amperage I'd have to divide that amongst the
          components I've connected to it. But I've never really understood
          terms Ohm's law and how to calculate Voltage or Amperage. So this more
          technical dive into the concepts was helpful for me to actually learn
          what's going on behind the circuit I put together.
          <br></br>
          <br></br>
          But the most interesting thing from the labs for me was the schematics
          and technical drawings. I haven't seen a schematic in years (probably
          since secondary school). I was never the best student in physics and
          those drawings always messed me up in exams, but now that I'm working
          with hardware more it's a good time to learn them again and maybe
          understand them properly this time instead of winging it for exams.
        </Text>
        <Header>Lab: Setting Up A Breadboard & Measuring Voltage.</Header>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-1.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-2.jpg",
          ]}
          orientation="landscape"
        />
        <Header>Lab Electronics.</Header>
        <Subheader>A Switched LED Circuit.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-3.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-4.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>Components in Series.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-5.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-6.jpg",
          ]}
          orientation="landscape"
        />

        <Subheader>Components in Parallel/Measuring Amperage.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-7.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-8.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>
          Generating a Variable Voltage with a Potentiometer.
        </Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-9.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-10.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-11.jpg",
          ]}
          orientation="landscape"
        />
        <Header>Lab: Switches and Pushbuttons.</Header>
        <Subheader>Project 1: Three Switches in Parallel.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-12.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-13.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-14.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-15.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader text="Project 2: Three switches in series" />
        <Subheader>Project 2: Three Switches in Series.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-16.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-17.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader>Project 3: Switching a DC motor.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-18.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-19.jpg",
          ]}
          orientation="landscape"
        />
        <Subheader text="Project 3: Switching a DC motor and an LED" />
        <Subheader>Project 3: Switching a DC Motor and an LED.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-20.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labOne-21.jpg",
          ]}
          orientation="landscape"
        />
      </div>
    </Container>
  )
}
export default WeekOne
