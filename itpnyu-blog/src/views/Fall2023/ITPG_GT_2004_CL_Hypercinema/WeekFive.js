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

const WeekFive = () => {
  return (
    <Container>
      <div>
        <Header>Week Five</Header>
        <Subheader>Speculative Future Video.</Subheader>
        <ExternalText>
          In teams of two (or three), create a short (less than 2 minutes) video
          in which animation is overlaid onto video to present a speculative
          future. This future video could be informative, expressive, an
          interactive game or whatever you design but it should use motion
          tracking, animation and speculative design to bring your “future” to
          life.
        </ExternalText>
        <Text>
          Working with Octavio and Melika on this project. There was alot of
          contest coming up with an idea initially but somethign just clicked in
          my head when Gabe mentioned in class "This class is about hypercinema,
          so what's hypercinema, what's next for cinema?" Thats when I got the
          idea for creating this speculative future where it was like "What if
          you could change a movie based on what you like?". Was glad that my
          teammates agreed with the idea and we decided to go with it.
          <br></br>
          <br></br>
          We decided to work with a clip from The Shining, where it's an iconic
          enough movie where most people have seen it and we could change things
          and people would still somewhat recognise it. We picked a scene from
          early in the movie where Jack Nicholson's family has just arrived at
          the Colorado Lounge and he's talking to the manager of the hotel and
          bringing his family through the longue. But also because this was a
          very manageable shot to work with as it had consistent movement but
          also enough elements in the scene that we could manipulate. We split
          the scene up into 3 parts starting from when the leave the elevator to
          when they reach the other end of the lobby, saving him talking to the
          manager for an intro part which won't be edited and the next scene
          when they enter a hallway for an outro scene. Melika took the first
          scene, Octavio the second and I took the last part.
        </Text>
        <Subheader>Original clip for my part.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-1.mp4"
          alt="Description of video"
        />
        <Subheader>Manipulated clip for my part.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-2.mp4"
          alt="Description of video"
        />
        <Text>
          For my part I actually worked with ai-generated elements to add to the
          clip and prepared my clip using RunwayML in sort of a compositing
          workflow where I broke it down to the seconds needed and what effects
          had to be applied to them, separating backgrounds from characters,
          having individual files for each elements so that they can come
          together in After Effects. I also used a couple of RunwayML's
          AI-powered editing tools like inpainting to remove elements from the
          scene, green screen to separate characters from the background, and
          GEN-1 to style transfer to change the style of the scene and GEN-2 to
          generate the ski-lodge background.
          <br></br>
          <br></br>
          Then in After Effects I added the generated elements to the scene and
          and also did tracking for the objects and played with blending styles
          to blend the elements and scenes to the original footage.
        </Text>
        <Subheader>Windows Removed.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-3.mp4"
          alt="Description of video"
        />
        <Subheader>Middle Photos Removed.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-4.mp4"
          alt="Description of video"
        />
        <Subheader>Middle Images Removed.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-5.mp4"
          alt="Description of video"
        />
        <Subheader>Piano + Plant Removed.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-6.mp4"
          alt="Description of video"
        />
        <Subheader>Piano Cleaner.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-7.mp4"
          alt="Description of video"
        />
        <Subheader>Man carrying Rug.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-8.mp4"
          alt="Description of video"
        />
        <Subheader>People walking front.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-9.mp4"
          alt="Description of video"
        />
        <Subheader>Couch Cleaner.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-10.mp4"
          alt="Description of video"
        />
        <Subheader>People walking back.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-11.mp4"
          alt="Description of video"
        />
        <Subheader>Various AI-Generated style transferred clips.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-12.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-13.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-14.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-15.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-16.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-17.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-18.mp4"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekSix-speculativeFutureVideo-19.mp4"
          alt="Description of video"
        />
      </div>
    </Container>
  )
}

export default WeekFive
