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
        <Header>Week 13</Header>
        <Subheader>Ok final concepting phase for real this time.</Subheader>
        <Text>
          Ok we've got the idea for real this time, the moving flying arduino
          idea, wasn't going to work out. But we still really liked this
          concept, so the new idea was similar, but we would put a piezo sensor
          on the speakers to pick up on the vibration instead. We thought this
          would work better but turns out the microphone component could not
          pick up sounds as well as we'd like to and cause we rigged these up in
          an analog circuit, we actually fried the amp and speaker trying to
          mess with it.
          <br></br>
          <br></br>
          However the good thing here was that we have now decided to go out and
          get some actual amplifiers and microphones which would definitely work
          better and give us some better results. although this means our box
          would not have the raw aesthetic look and will have to be quite alot
          bigger, this means better sound and a stronger concept so that's a
          trade off I'm ok with. Also we decided that we liked the idea of going
          full analog and also to get better sounds, we're adding a delay pedal
          to the set up as well. Let's hope this goes well.
          <br></br>
          <br></br>
          Visuals wise we decided to go abstract. I've started playing around
          with some abstract movements of shapes to create overlaps but it's
          looking too Ryoji Ikeda at the moment, gotta figure out how to make it
          less Ryoji Ikeda.
        </Text>
      </div>
    </Container>
  )
}

export default BlogPost
