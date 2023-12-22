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
        <Header>Week 4</Header>
        <Subheader>Mid-Term Project.</Subheader>
        <Text>
          Working with{" "}
          <Links to="https://www.itp.jnackash.com/">Jasmine Nackash</Links> for
          this Mid-Term project. We met to come up with a concept and some ideas
          and landed on this spider web visual inspired ouija board-esque
          interactive piece using stretch sensors and electromagnets. The idea
          is that we would create this string movement instrument-ish object
          that would control the sounds being played based on where the strings
          moved to (using the electromagnets) and the sound frequency/volume
          would be manipulated by the tension/resistance of the strings.
        </Text>
        <Images src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-weekFour-ideationSketch.jpg" />
        <Subheader>Technical Specifications.</Subheader>
        <Text>
          A microcontroller — Probably an Arduino NANO 33 IOT or an Arduino UNO
          <br></br>
          Conductive Rubber Cord (two or three)<br></br>
          Electro magnets. (8-12))<br></br>
          Speakers (two or three)<br></br>
          Wooden board (around 12" rectangular board we'll probably cut into a
          circle).<br></br>
          Nails and screws
        </Text>
        <Subheader>Questions for class.</Subheader>
        <Text>
          Do electromagnets offset the resistance of conductive string? If so,
          how might we address that?<br></br>
          Can we make our own electromagnets?<br></br>
          Can we make our own speakers? Can we perhaps turn this whole thing
          into a speaker?!<br></br>
          Can we somehow paint the conductive strings?<br></br>
          How unpredictable could electromagnets be? Do they have a range in
          which they operate? Are they stable enough for our purpose?<br></br>
        </Text>
      </div>
    </Container>
  )
}
export default BlogPost
