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

const WeekThree = () => {
  return (
    <Container>
      <div>
        <Header>Week Three</Header>
        <Subheader>Stop Motion Animation</Subheader>
        <ExternalText>
          In teams of two to three, create one stop motion loop. Export them as
          Animated Gifs for next class.
        </ExternalText>
        <Text>
          Worked with Octavio and Myrah on creating this stop motion loop. We
          were inspired by animated turntable slipmats and zoetropes and thought
          it would be interesting to use that technique to create our stop
          motion. Octavio and I came up with a simple story of a chicken flying
          by and dropping an egg. Then the egg cracks and another bird flys out
          of it creating a loop. A simple story but depending on how you view it
          kinds of asks the age old question of which came first the chicken or
          the egg.
          <br></br>
          <br></br>
          However to make things a bit more interesting Myrah thought of drawing
          the chicken as a pterodactyl instead, we thought that was cool so why
          not as a visual choice, the story remains. Through our paper
          prototypes we also decided to move some of the elements to create a
          psuedo 3D effect mixed with 2D. Most of the pterodactyl flying is in
          2D, but we mixed in some psuedo 3D for the egg dropping and cracking
          by adjusting the sizes of the elements. (Not quite sure if people can
          see it, but it's part of the experimenting process to see if it could
          work, I think it kind of worked?) For the finishing wise, it looked
          quite bland on paper so we decided to try out the laser cutter to cut
          the circle and engrave our animation. This gave us the opportunity to
          test out the laser cutter in the fab lab and get some experience with
          it for future use as well. Visually it also made for a more polished
          end product.
          <br></br>
          <br></br>
          For the spinning, we quickly rigged up a stepper motor to a button and
          had it rotate while we took each frame. Each rotation moved about 1-2
          degrees or "60 steps" of the motor, it's hard to get the exact as the
          documentation on the motor wasn't that accurate but that was the
          closet math I could do. I believe this gave us the best control over
          the animation so that we could get a smooth and consistent feel to it
          while keeping some of stop motion's more slightly jittery movement
          through the amount of frames we got. We took about 300 frames in total
          and that gave us the possibility to choose what kind of frame rate we
          wanted to explore. We have some options below ranging from the full
          300 frames down to just 30 frames with each option removing about 1
          frame every 3 frames each time.
          <br></br>
          <br></br>I thought this was a simple way to make a simple story
          interesting and explore the idea of frame by frame animation through
          playing with different frame rates. Well technically this was still
          made frame by frame by moving the object so it's still within scope,
          although there were some concerns by the group that this might be
          breaking the brief abit too far. But to me it felt like a worthwhile
          experiment to try out and experiment with instead of usual stop motion
          techniques. And how often do we get the opportunity to just toy with
          an idea and see if it works. I think it's a good way to learn and
          through this we actually had kind of a "happy accident" that we didn't
          expect.
          <br></br>
          <br></br>
          Through the final gif we also realised that there was actually
          multiple ways of looking at it. Initially I planned for it to be
          clockwise and for that to work your eyes kind of have to move with the
          frames to understand the story. But Myrah pointed out that if you kept
          your eyes at one spot, clockwise looked reversed, so we also did a
          version that was counterclockwise and then you could see the animation
          by staring at a single spot in the middle. Not sure if this makes
          sense to anyone else but I thought it was an interesting by product of
          what we've done and how the same thing could be experienced in
          different ways.
        </Text>

        <Subheader>Staring at one spot.</Subheader>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-stopmotionReversed.gif"
          alt=""
        />

        <Subheader>
          Reading the object moving your eyes left to right.
        </Subheader>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-stopmotion.gif"
          alt=""
        />

        <Subheader>
          Various Framerates, each one removing 1 frame from every 3 frames.
        </Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-1.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-2.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-3.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-4.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-5.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-6.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-7.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-8.gif",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-frameRateExploration-9.gif",
          ]}
          orientation="landscape"
        />

        <Subheader>Process photos (by Octavio).</Subheader>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-process-1.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-process-2.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekThree-process-3.jpg",
          ]}
          orientation="landscape"
        />

        <Subheader>Creating the frames.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekThree-process.mp4"
          alt="Description of video"
        />
        <Subheader>Testing the motor that will move our frames.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekThree-prototype-1.mov"
          alt="Description of video"
        />
        <Subheader>Some paper prototypes to test the animation.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekThree-prototype-2.mov"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekThree-prototype-3.mov"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekThree-prototype-4.mov"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekThree-prototype-5.mov"
          alt="Description of video"
        />
        <Subheader>Lasercutter Timelapse (by Myrah).</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekThree-timelapse.mp4"
          alt="Description of video"
        />
      </div>
    </Container>
  )
}

export default WeekThree
