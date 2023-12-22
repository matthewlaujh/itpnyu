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
        <Header>Week 14</Header>
        <Subheader>Cornell Box Final — Noise.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekEight-syntheticMedia-theAscensionAlgorithm.mov"
          alt="Description of video"
        />
        <Text>
          Noise is a semi-interactive object that captures the randomness of
          noise within a space and visualizes it through abstract patterns.
          Inspired by capturing soundscapes and the idea that there is no real
          randomness in a computer (even the cloudflare servers uses pictures of
          lavalmaps to generate random encryptionn keys), we wanted to explore
          the idea of capturing randomness and then creating a random visual
          based on it. We used the Cornell Box as a space to capture the
          randomnes by having a microphone facing a mini amplifier which would
          pick up the sounds (created in the space or by a person) processed
          through a delay pedal contributing to the feedback loop creating a
          sense of chaos, through that chaos the sound reverberates and
          resonates within a wooden box which vibrates. The vibrations are then
          picked up by a piezo which sends the analog input to unity giving us
          values betweeen 0 and 1025. These values are then mapped to rectangles
          being constantly instantiated in Unity, determining the Y Height each
          rectangle can travel between while the X position remains the same and
          the Z position creating each rectangle one behind another. These
          rectangles have a translucent material and they emit light so as each
          rectangle moves up and down on it's own axis, the main camera views it
          from the front creating this chaos of overlapping with different
          greyscale tones. Post processing effects were added to create a blur
          and bloom effect creating a more abstract visual (hopefully less
          similar to Ryoji Ikeda's sharp and crisp visuals).
          <br></br>
          <br></br>
          The process behind the analog audio took a lot of experimenting from
          us to find the right delay pedal settings and the correct distance
          between the microphone and amplifier create a pleasant feedback loop.
          Once we had that we experimented between using the piezo on the
          amplifier (which is what we've been doing from the start) but as we
          noticed that the box was vibrating alot, we decided to place it on the
          top of the box instead and found that we got much more interesting
          readings from that, having it on the amplifier peaked too often.
          <br></br>
          <br></br>
          The process behind the visuals was also a lot of experimenting, being
          new to unity, it was scary looking into using script to control the
          rectangles, but that was the only way to do it where it made sense.
          Luckily large language models were quite helpful in writing the C#
          scripts needed for this. We got it to write scripts to instantiate the
          rectangles and to control the movement. Then we just took the script
          Gabe provided for serial transform and incorporated it into the
          movement script we got from the LLMs.
          <br></br>
          <br></br>
          Although we did hit a roadblock when the performance of the visuals
          were super laggy and after talking to Gabe, we deduced that it was
          most likely because the script was constantly calling for input from
          the serial connection at the same time, and that was bad cause we were
          drawing atleast 100-200 rectangles. And also because we weren't
          destroying rectangles as we went, so this turned out to be somewhat of
          an infinity loop in a sense. Took abit more figuring out and back and
          forth with the help of LLMs to fixed those issues where we had
          rectangles being destroyed in a loop and also storing the values from
          the serial input before feeding it to the movement so as to not affect
          the performance of the visuals.
        </Text>
      </div>
    </Container>
  )
}

export default BlogPost
