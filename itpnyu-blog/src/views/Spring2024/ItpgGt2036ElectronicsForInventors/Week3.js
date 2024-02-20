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
        <Header>Week 3</Header>
        <Subheader>
          Integrated Circuits, Oscillators and Timers, 555 Timer IC: Astable
          Mode, Reading and Designing Schematics and Oscilloscopes 101.{" "}
        </Subheader>

        <Subheader>555 LED Flasher</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekOne-arduinoAccelerometer-nodeRedClassifyFastMovementTextAndData.mp4"
          alt="Description of video"
        />
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2480-natureofcode-images/itpnyu-blog-spring2024-itpg-gt2480-natureofcode-w3-motionBlur.png"
          alt=" "
        />

        <Subheader>555 LED Breather</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekOne-arduinoAccelerometer-nodeRedClassifyFastMovementTextAndData.mp4"
          alt="Description of video"
        />
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2480-natureofcode-images/itpnyu-blog-spring2024-itpg-gt2480-natureofcode-w3-motionBlur.png"
          alt=" "
        />
      </div>
    </Container>
  )
}
export default BlogPost
