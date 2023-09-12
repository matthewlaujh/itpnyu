import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Subheader } from "../../../components/Subheader";
import Text from "../../../components/Text";
import ExternalText from "../../../components/ExternalText";
import { Quotes } from "../../../components/Quotes";
import { Images } from "../../../components/Images";
import CodeSnippets from "../../../components/CodeSnippets";
import { Iframes } from "../../../components/Iframes";
import { AudioPlayer } from "../../../components/AudioPlayer";
import { VideoPlayer } from "../../../components/VideoPlayer";
import Links from "../../../components/Links";
import P5Sketch from "../../../components/P5Sketch";
import ImagesCarousel from "../../../components/ImagesCarousel";

const LabOne = () => {
  return (
    <Container>
      <div>
        <Header text="Week One" />
        <Subheader text="Introduction to my Physical Computing Background" />
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
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/heyWhatsUp-1.jpg",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/deconstructedColours-5.jpg",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/deconstructedColours-1.jpg",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/theOortCloudAndBlueMountainSAW-4.jpg",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/aSeriesOfExplorationsAndTechnicalChallenges-5.jpg",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/helloImHere-1.jpg",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/theLasalleShowFacultyOfDesignBaHonsGraduateExhibitionFrontage-1.jpg",
          ]}
        />
        <Subheader text="Lab Exercises from the First Week" />
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
        <Subheader text="Lab: Setting Up A Breadboard & Measuring Voltage" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_1.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_2.JPG",
          ]}
        />
        <Subheader text="Lab: Electronics" />
        <Subheader text="A Switched LED Circuit" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_3.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_4.JPG",
          ]}
        />
        <Subheader text="Components in Series" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_5.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_6.JPG",
          ]}
        />
        <Subheader text="Components in Parallel/Measuring Amperage" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_7.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_8.JPG",
          ]}
        />
        <Subheader text="Generating a Variable Voltage with a Potentiometer" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_9.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_10.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_11.JPG",
          ]}
        />
        <Subheader text="Lab: Switches and Pushbuttons" />
        <Subheader text="Project 1: Three switches in parallel" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_12.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_13.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_14.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_15.JPG",
          ]}
        />
        <Subheader text="Project 2: Three switches in series" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_16.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_17.JPG",
          ]}
        />
        <Subheader text="Project 3: Switching a DC motor" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_18.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_19.JPG",
          ]}
        />
        <Subheader text="Project 3: Switching a DC motor and an LED" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_20.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_21.JPG",
          ]}
        />
      </div>
    </Container>
  );
};
export default LabOne;
