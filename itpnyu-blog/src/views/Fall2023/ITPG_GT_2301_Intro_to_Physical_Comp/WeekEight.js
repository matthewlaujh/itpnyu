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

const WeekEight = () => {
  return (
    <Container>
      <div>
        <Header>Week Seven.</Header>
        <Text></Text>
        <Header>
          Lab: Two-Way (Duplex) Serial Communication Using An Arduino and the
          p5.webserial Library
        </Header>
        <Subheader>Formatting Multiple Serial Data: Punctuation.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labEight-1.mov"
          alt="Description of video"
        />
        <Subheader>Flow Control: Call and Response (Handshaking).</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labEight-2.mov"
          alt="Description of video"
        />
      </div>
    </Container>
  )
}
export default WeekEight
