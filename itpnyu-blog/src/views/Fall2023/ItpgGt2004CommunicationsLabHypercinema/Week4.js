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
        <Subheader>Three Expressions</Subheader>
        <ExternalText>
          Try at least 3 expressions in After Effects and post screen captures
          to your blog.
        </ExternalText>
        <Text>
          I've used After Effects for some light motion graphics in the past
          when I did design work, but I've never quite learnt how to use
          expressions. This was a good intro to learning about expressions and
          the power of them. For the exercise I did some simple testing out but
          I went and did some reading about it online and found out that it's
          actually quite close to scripting in p5.js for doing animations there.
          Like we can use conditionals and loops (well, they're just computing
          concepts, that are generally used everywhere), but would be excited to
          learn more and try it out more over the course of the next project.
          <br></br>
          <br></br>I actually wanted to make a sequence using the expression to
          do a bouncing ball, but I couldn't quite figure it out for the moment.
          But I want to wiggle the ball using wiggle() in position, have it
          rotated and moving down using time, bounce and "squish" at the bottom
          of the frame using random size for scale before coming back up.
          Thought that would look abit like a comical bounce considering the
          random size squish on contact. But I could not figure out how to
          "keyframe" the expressions? Not sure how that works but I saw online
          that they would create variables and use conditional statements to
          sort of time the expressions? Let me try this again when I've got some
          extra time to experiment.
        </Text>

        <Subheader>
          Circle moving with 3 expressions (wiggle, random and time) + loopOut
          used.
        </Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekFour-ThreeExpressionsAnimation.mp4"
          alt="Description of video"
        />
        <Subheader>Expressions used:</Subheader>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekFour-ThreeExpressionsAnimation.png"
          alt=""
        />
      </div>
    </Container>
  )
}

export default BlogPost
