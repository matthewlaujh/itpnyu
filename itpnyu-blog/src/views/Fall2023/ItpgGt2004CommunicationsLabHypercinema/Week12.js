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
        <Header>Week 12</Header>
        <Subheader>Conceptualizing the Cornell Box.</Subheader>
        <Text>
          Ok back from break and we now have an idea that we like, we're not
          convinced if we can sell this idea as a Cornell Box but we really like
          the idea. We want to trap the "randomness" of a physical space in a
          box. We want to create a sort of sound installation-esque artefact
          that would record the sound of a space, split it into 3 channels and
          play it back through speakers. The speakers (hopefully) would be able
          to then create enough wind to blow an arduino that is dangling in the
          middle of them. We would then send the gyro values of the arduino into
          unity to control an object. Therefore visualizing the randomness of
          sound in a space. It's a bit of a crazy idea, and we're not even sure
          if it's possible to "move" the arduino in that way, but basically the
          idea we like is capturing the randomness of a soundscape and
          visualizing it, how we do it, let's see where we get haha.
          <br></br>
          <br></br>
          In terms of the visuals, we considered a couple of ideas, from
          narrative/literal driven ones like capturing sound in a park and then
          moving a tree, or sounds from the city then wobbling a skyscraper, but
          personally for me I am leaning more towards a abstract visualization,
          going with one of those might feel too tacky/cliche as they're not
          exactly narrative driven and it feels like we're trying too hard to
          stretch this concept (well it's already kind of a stretch) but that
          just feels like over justification. I'd rather just own the
          abstractness of the project and make something visually simple and
          abstract.
          <br></br>
          <br></br>
          This week's in-class tutorials were great to learn more about creating
          AR apps with Vuforia, which is cool I guess but with the amount of AR
          platforms nowadays, I don't think I would look to unity? Especially if
          the content was meant for social media, it would make more sense to
          just build them on Meta's Spark or Snapchat's Lens Studio, but still
          cool nonetheless especially since it would probably be more powerful
          than the other platforms and less restrictive. But the fun thing in
          this week's class is playing around with lighting and post processing
          in Unity, with most of my work before ITP revolving around light
          sculptures this was the class for me. I love the idea of being able to
          test out certain light-colour mixtures and combinations and I can
          really see this being a part of my future workflow when I need mock up
          installations.
        </Text>
      </div>
    </Container>
  )
}

export default BlogPost
