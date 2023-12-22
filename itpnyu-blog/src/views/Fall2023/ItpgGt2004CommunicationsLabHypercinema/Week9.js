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
        <Header>Week 9</Header>
        <Subheader>Intro to Real Time Game Engines.</Subheader>
        <ExternalText>
          Final Project: Create a Digital Cornell Box. Think about the objects
          you place in your Cornell Box, what do these objects represent
          poetically, personally or metaphorically? How will you use animation,
          interactivity and real time environments to bring these objects to
          life? Will this be a screen based work? A mobile piece? A projected
          work? What sort of style or theme do you want your box to have? This
          piece is due in our final class week 14. For next week: Do a sketch of
          a possible design for your Cornell Box. Begin to gather 3d assets and
          “storyboard” out how this Box will work.
        </ExternalText>
        <Text>
          Decided to work with Octavio on this final project, some initial ideas
          we had were around the creation of soundscapes. We both loved the idea
          of creating/visualizing something that we could not see. Don't quite
          have an idea for now, but this is a starting point.
        </Text>
      </div>
    </Container>
  )
}

export default BlogPost
