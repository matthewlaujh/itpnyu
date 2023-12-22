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
        <Header>Finals Preparation.</Header>
        <Subheader>Plan for finals.</Subheader>
        <Text>
          Moving forward with finals, Jasmine and I decided to continue working
          on what we started for mid-terms. In general there were things that
          worked but also things that did not work as well. Based on that we
          made some changes. We decided to keep the same basic but focus more on
          the interaction and play. Based on the feedback on intimacy, We
          decided that we should make this a 4 person interaction, forming a
          circle around the object. We also didn't quite like the shape of the
          knobs and the board and think that they should be more organic and
          rounder to better encourage the interaction that we wanted. We wanted
          people to move more freely around the board so a softer shape would
          better encourage that instead of the some of the more edged designs
          that we had currently. We also wanted to further refine the design of
          the board to better conceal some aspects of it and better integrate
          the electronics into the board through some exploration in layer
          pieces of wood and having different thicknesses.
          <br></br>
          <br></br>
          We also loved the sense of exploration and wonder that people had with
          object as they were trying to figure out how to use it. We wanted to
          expand on that — creating the "magic" of the interaction. For that to
          happen we decided to remove the stretch sensor which was causing us a
          bunch of issues. By removing that, we removed the complex logic of
          having to know which pair of sensors were being triggered, and
          although that took the sound bending element away, we will find
          another way to incorporate that. By removing the stretch sensor that
          also allowed us to keep our knobs wireless, making the interaction
          less clunky and gives opportunities for a more "magical" experience.
          Technically wise we would be placing the hall sensors below the board
          now and the magnets in the knobs instead of the way that we have it
          now. We also wanted to give a second form of feedback for the users
          which was to integrate some LED lights into the object both within the
          board and in the knobs. We wanted the lights to correspond with the
          sound and create this secondary visual component to the experience.
          The idea was to have LEDs integrate that would create a glow coming
          out of the board.
        </Text>
      </div>
    </Container>
  )
}
export default BlogPost
