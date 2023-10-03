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
        <Header>Week Four.</Header>
        <Subheader>Mid-Term Project.</Subheader>
        <Text>
          Working with{" "}
          <Links to="https://www.itp.jnackash.com/">Jasmine Nackash</Links> for
          this Mid-Term project. We met to come up with a concept and some ideas
          and landed on this spider web visual inspired ouija board-esque
          interactive piece using stretch sensors and electromagnets.
        </Text>
        <Images src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekFour-ideationSketch.jpg" />
      </div>
    </Container>
  )
}
export default WeekTwo
