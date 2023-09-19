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
import VideoPlayer from "../../../components/VideoPlayer";
import Links from "../../../components/Links";
import P5Sketch from "../../../components/P5Sketch";
import ImagesCarousel from "../../../components/ImagesCarousel";

const LabTwo = () => {
  return (
    <Container>
      <div>
        <Header text="Week Two" />
        <Subheader text="Readings" />
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
        <Subheader text="Lab Exercises from the Second Week" />
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
        <Subheader text="Lab: Digital Input and Output with an Arduino" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_1.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_2.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_3.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_4.JPG",
          ]}
          orientation="landscape"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_1.mov"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_2.mov"
          alt="Description of video"
        />
        <Subheader text="Lab: Analog In with an Arduino" />
        <Subheader text="Add a Potentiometer and LED" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_5.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_6.JPG",
          ]}
          orientation="landscape"
        />
        <Subheader text="Add Force Sensing Resistors" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_7.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_8.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_9.JPG",
          ]}
          orientation="landscape"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_3.MOV"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_5.MOV"
          alt="Description of video"
        />
        <Subheader text="Lab: Sensor Change Detection" />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_10.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_11.JPG",
          ]}
          orientation="landscape"
        />
        <Subheader text="Add a pushbutton — Program the Microcontroller to Read the Pushbutton’s State Change" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_9.MOV"
          alt="Description of video"
        />
        <Subheader text="Add a pushbutton — Count Button Presses" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_10.MOV"
          alt="Description of video"
        />
        <Subheader text="Add a pushbutton — Long Press, Short Press" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_11.MOV"
          alt="Description of video"
        />
        <Subheader text="Analog Sensor Threshold Detection — Program the Microcontroller to Read a Sensor Threshold Crossing" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_6.MOV"
          alt="Description of video"
        />
        <Subheader text="Analog Sensor Threshold Detection — Detecting a Peak" />
        <Images
          src="/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_12.JPG"
          alt=" "
        />
        <Subheader text="Analog Sensor Threshold Detection — Dealing with Noise" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_8.MOV"
          alt="Description of video"
        />
      </div>
      <Subheader text="Bonus content — Pcomp x Hypercinema crossover" />
      <Text>
        The labs wasn't the only time I worked on Physical Computing this week —
        I also did up a quick prototype for an interactive piece for
        Hypercinema's first project creating a Sound Sculpture. But more on that
        on my Hypercinema Blog Post.
      </Text>
      <Images
        src="/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabTwo/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_Two_13.JPG"
        alt=" "
      />
    </Container>
  );
};
export default LabTwo;
