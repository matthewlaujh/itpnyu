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
        <ExternalText>
          Your "end of semester sketch" is a two week assignment to be completed
          in two stages (planning and presenting). Your work should build off or
          be inspired by any of the concepts we've covered this semester. You
          should feel free to think non-traditionally, projects do not need to
          be screen-based and there is no requirement to use a particular aspect
          of JavaScript or programming. Final projects can be collaborations
          with anyone in any class. Final projects can be a part of a larger
          project from one of your other classes (like PCOMP or Hypercinema).
          You may also expand on a previous assignment (from any week this
          semester) or create something new, for example, a "word counting"
          visualization inspired by the material from this week. For next class,
          please write a short post proposing a sketch you'd like to present in
          the final class. You can document your idea any way you like, but here
          are some prompts to help you get started. In one sentence, what is it
          you hope to create? What topics, assignments, or other material from
          this semester are you drawing from? What other inspirations,
          resources, references do you hope to draw from? What challenges do you
          expect to face? What are you unsure of (technically or conceptually)?
          Who is this for? (What is your audience?)
        </ExternalText>
        <Text>
          My plan is to carry on with the sketch that I started for midterms
          with the moving gradient but bring in more interactions and some
          elements of what I've learnt in the second semester like pixel
          manipulations and loading data. I think combining the sketch I did
          that used Pantone Colour would be an interesting mix and also bringing
          in more mouse interactions fining a way to create the soft smooth
          gradient that I liked.
        </Text>
      </div>
    </Container>
  )
}

export default BlogPost
