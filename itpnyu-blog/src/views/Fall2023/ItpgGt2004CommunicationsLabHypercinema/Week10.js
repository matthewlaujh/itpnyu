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
        <Header>Week 10</Header>
        <Subheader>Further thoughts on the Cornell Box.</Subheader>
        <Text>
          A thought Octavio and I had around the Cornell Box was to expand on
          the idea of creating a soundscape where we would not be able to see
          anything, but instead as the user moves through the "space" or well
          box, they would trigger different sounds that would then combine to
          form the soundscape of a space. This would be a way to create a
          "Cornell Box" that is collecting the sounds of a space creating an
          ephemeral feeling of a space instead of a lasting visual.
          <br></br>
          <br></br>
          An idea we had that was an extension of this was to create this in
          real time, where the user would be able to move through the space and
          experience sounds that are being recorded from a different space. That
          was one idea and another one which was also similar was to have the
          user move around a space and be able to create sounds that would then
          form the space. This would be a way to create a "Cornell Box" that is
          more interactive and sensory.
          <br></br>
          <br></br>
          Finally tried unity for the first time, 3D and game engines have
          always been a blind spot for me, I love so much of what can be done
          with these like 3D modelling, creating games, building mock up of
          installations, etc. But the only experience I've had with 3D so far is
          creating a mock of one of my installations that I did in undergrad
          using a combination of Rhino (basically just to build squares to form
          an exhibition space) and Keyshot to do the lighting and rendering. But
          I always thought that was kind of boring, it was just a static render
          of images, nothing quite interesting so this intro to Real Time Game
          Engines should be more interesting to me.
          <br></br>
          <br></br>I know that personally I'm not too interested in creating
          games or digital world building. But I really see this as a skill that
          I need to be able to push my creative visioning(?) or mocking up
          abilities(?) further. The in-class tutorial this week showed how
          simple it was to grasp the basic concepts of creating interactions and
          moving a character around, which seemed simple enough to me. Quite
          excited to see what other forms of interactions we can play with,
          especially if we can link them to an arduino.
        </Text>
      </div>
    </Container>
  )
}

export default BlogPost
