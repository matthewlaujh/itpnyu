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

const blogPost = () => {
  return (
    <Container>
      <div>
        <Header>Week 8</Header>
        <ExternalText>Worksheet 7</ExternalText>
        <Text></Text>
        <CodeSnippets
          language="javascript"
          code={`
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/xc0KwUhpE"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/xc0KwUhpE"
          height="50vh"
        />
      </div>
    </Container>
  )
}

export default blogPost
