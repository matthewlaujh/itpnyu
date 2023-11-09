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

const WeekSeven = () => {
  return (
    <Container>
      <div>
        <Header>Week Seven</Header>
        <Subheader>Synthetic Media Video.</Subheader>
        <ExternalText>
          Synthetic Media :: Due in two weeks (Week 9) Create a short video
          entirely created by AI generated stills. This story should include,
          sound, voice over or narration and also be cohesive visually. How do
          you tell a story using generative media? What story do you want to
          tell and why? This assignment is about experimentation, not about
          doing this correctly. It’s alright to go down a path that doesn’t work
          as long as you show documentation and explain the intent behind your
          concept and the thinking that brought you there. Bring examples of
          your generated stills to our next class.
        </ExternalText>
        <Text>
          Jasmine and I were talking about the project and we realised that we
          both had very similar starting points that we wanted to work with. We
          wanted to play with Jean Baudrillard's theory of Simulacra and
          Simulation and create something that's self-aware of the medium
          itself. These image generation tools could be though of as like
          simulacra models creating things that are like in the fourth stage of
          simulacrum where it creates things that resemble what they were
          trained on but have been stripped away from the original meaning.
          <br></br>
          <br></br>
          We started coming up with concepts by looking at texts that could be
          interesting to work with. We’ve looked through A Pattern Language, The
          Whole Earth Catalog, The Futuristic Manifesto and a few short stories
          by renowned writers. Eventually we settled on Julio Cotazar’s
          Instructions on How to Climb a Staircase. The text goes as follows:
        </Text>
        <Quotes>
          “No one will have failed to observe that frequently the floor bends in
          such a way that one part rises at a right angle to the plane formed by
          the floor and then the following section arranges itself parallel to
          the flatness, so as to provide a step to a new perpendicular, a
          process which is repeated in a spiral or in a broken line to highly
          variable elevations. Ducking down and placing the left hand on one of
          the vertical parts and the right hand upon the corresponding
          horizontal, one is in momentary possession of a step or stair. Each
          one of these steps, formed as we have seen by two elements, is
          situated somewhat higher and further than the one prior, a principle
          which gives the idea of a staircase, while whatever other combination,
          producing perhaps more beautiful or picturesque shapes, would be
          incapable of translating one from the ground floor to the first floor.
          You tackle a stairway face on, for if you try it backwards or
          sideways, it ends up being particularly uncomfortable. The natural
          stance consists of holding oneself upright, arms hanging easily at the
          sides, head erect but not so much so that the eyes no longer see the
          steps immediately above, while one tramps up, breathing lightly and
          with regularity. To climb a staircase one begins by lifting that part
          of the body located below and to the right, usually encased in leather
          or deerskin, and which, with a few exceptions, fits exactly on the
          stair. Said part set down on the first step (to abbreviate we shall
          call it "the foot"), one draws up the equivalent part on the left side
          (also called "foot" but not to be confused with "the foot" cited
          above), and lifting this other part to the level of "the foot," makes
          it continue along until it is set in place on the second step, at
          which point the foot will rest, and "the foot" will rest on the first.
          (The first steps are always the most difficult, until you acquire the
          necessary coordination. The coincidence of names between the foot and
          "the foot" makes the explanation more difficult. Be especially careful
          not to raise, at the same time, the foot and "the foot.") Having
          arrived by this method at the second step, it's easy enough to repeat
          the movements alternately, until one reaches the top of the staircase.
          One gets off it easily, with a light tap of the heel to fix it in
          place, to make sure it will not move until one is ready to come down.”
        </Quotes>
        <Text>
          We thought that the text was a very poetic piece of writing describing
          something so mundane and silly and it reminded us of prompt
          engineering images where we had to get to a level of descriptiveness
          and "silliness" to create these images. There's this interesting
          juxtaposition to work with here because the text is super poetic but
          also very logical and robotic at the same time. And while climbing up
          stairs is a very intuitive and obvious task for humans, computational
          logic makes it a much more complex task for machines. The logic for
          how a machine might climb stairs have to be broken down into such
          simple and fundamental steps so that the robot might be able to follow
          and understand.
          <br></br>
          <br></br>
          We looked at how robotics labs have been trying to teach robots to
          have human motor functions, like Boston Dynamic's dog-like robot
          learning how to move through natural terrains and other computer
          rendered physics simulations that use reinforcement learning to teach
          humanoids how to walk like humans. However they tend to have a
          different method or different considerations or affordances compared
          to humans. We considered how these neural networks are supposed to be
          modeled after our brains but they're not actual humans so they don't
          quite work the same way? So we that thought we thought it would be
          interesting to get a machine's interpretation of the text, breaking it
          down into a set of steps that machines could follow. Cause who better
          than a machine to tell other machines what to do right? ;)
          <br></br>
          <br></br>
          So we that we decided to feed the text into ChatGPT and get it's
          interpretation of it and how it would break things down so that
          machines could understand it. In a similar vein we also got ChatGPT to
          describe those steps in an image prompt style which we could use to
          prompt images. We're still in the midst of tuning these prompts and
          figuring out what's the best art direction for the video but we're
          really interested in going with a scientific physics simulation
          content but in the style of like early cinema art direction like the
          film Metropolis or other early sci-fi films. We're still experimenting
          with the different image synthesis tools and trying to see what feels
          right. We're also thinking of mixing techniques for this and maybe
          generation some images and then apply style transfer to them.
        </Text>
        <Subheader>Early test generations.</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekSeven-syntheticMedia-generationTest-1.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekSeven-syntheticMedia-generationTest-2.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekSeven-syntheticMedia-generationTest-3.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekSeven-syntheticMedia-generationTest-4.png",
          ]}
          orientation="landscape"
        />

        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSeven-syntheticMedia-generationTest-1.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSeven-syntheticMedia-generationTest-2.mp4"
          alt="Description of video"
        />
      </div>
    </Container>
  )
}

export default WeekSeven
