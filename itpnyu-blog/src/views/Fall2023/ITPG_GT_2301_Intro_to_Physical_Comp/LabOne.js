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
        <Header text="Lab Exercises from the First Week" />
        <Text>Write up to be added.</Text>
        <Text>Lab: Setting Up A Breadboard & Measuring Voltage</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_1.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_2.JPG",
          ]}
        />
        <Text>Lab: Electronics</Text>
        <Text>A Switched LED Circuit</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_3.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_4.JPG",
          ]}
        />
        <Text>Components in Series</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_5.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_6.JPG",
          ]}
        />
        <Text>Components in Parallel/Measuring Amperage</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_7.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_8.JPG",
          ]}
        />
        <Text>Generating a Variable Voltage with a Potentiometer</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_9.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_10.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_11.JPG",
          ]}
        />
        <Text>Lab: Switches and Pushbuttons</Text>
        <Text>Project 1: Three switches in parallel</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_12.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_13.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_14.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_15.JPG",
          ]}
        />
        <Text>Project 2: Three switches in series</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_16.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_17.JPG",
          ]}
        />
        <Text>Project 3: Switching a DC motor</Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_18.JPG",
            "/assets/images/Fall2023/ITPG_GT_2301_Intro_to_Physical_Comp/LabOne/ITPG_GT_2301_Intro_to_Physical_Comp_Lab_One_19.JPG",
          ]}
        />
        <Text>Project 3: Switching a DC motor and an LED</Text>
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
