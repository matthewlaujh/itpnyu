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

const WeekSix = () => {
  return (
    <Container>
      <div>
        <Header>Week Six.</Header>
        <Subheader>Mid-Term Project - Progress update.</Subheader>
        <Text></Text>
        <Subheader></Subheader>
        <CodeSnippets
          language="arduino"
          code={`
`}
        />
        <VideoPlayer src="" alt="Description of video" />

        <Images src="" />
        <ImagesCarousel images={["", ""]} orientation="landscape" />
      </div>
    </Container>
  )
}
export default WeekSix
