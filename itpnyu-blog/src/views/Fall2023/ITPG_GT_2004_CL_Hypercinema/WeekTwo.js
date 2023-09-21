// Components
import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Subheader } from "../../../components/Subheader";
import Text from "../../../components/Text";
import ExternalText from "../../../components/ExternalText";
import { Quotes } from "../../../components/Quotes";
import { Images } from "../../../components/Images";
import CodeSnippets from "../../../components/CodeSnippets";
import { Iframes } from "../../../components/Iframes";
import AudioPlayer from "../../../components/AudioPlayer";
import VideoPlayer from "../../../components/VideoPlayer";
import Links from "../../../components/Links";
import P5Sketch from "../../../components/P5Sketch";
import ImagesCarousel from "../../../components/ImagesCarousel";

const WeekTwo = () => {
  return (
    <Container>
      <div>
        <Header text="Week Two" />
        <Text>
          I really appreciated the list of sound artist shared during class —
          amongst those I really liked and resonated with the works of Haroon
          Mirza, Samsoon Young, Tristan Perich, Kouichi Okamoto, Nick Yulman,
          Grönlund Nisunen, Nelo Akamatsu and Anders Lind. I have not had the
          opportunity to come across their works before so really glad they were
          shared in class.
          <br></br>
          <br></br>
          What drew me to those pieces were the use of physical objects or space
          to create something both visually and sonically interesting. I think
          i've mentioned before that most of the sound works that I was drawn to
          in the past had a visual component to them as well. I think maybe it's
          because of my background as more of a designer/visual artist. But
          these works they also have some form of narrative or playful
          interactions to them. I think that's what I'm drawn to the most. The
          quality of the storytelling and playfulness in addition to being both
          visually and sonically drawing. Also some of them had this aesthetic
          of rawness and like semi mechanical showing it's components but still
          having a clean look.
          <br></br>
          <br></br>
          Also Grönlund Nisunen's work reminded me of a piece I worked on before
          when I was working with this collective called Neuewave. We did a
          piece for Archifest 2021 in Singapore titled{" "}
          <Links to="https://matthewlaujh.com/Archifest-2021-Sea-of-Debris-2021">
            Sea of Debris
          </Links>
          , where we did a piece similar to Nisunen's Unstable Matter but we did
          it with smashed glass and other dangerous materials collected from the
          beach to create this sound of waves that you would hear there.
        </Text>
        <Subheader text="" />
        <ExternalText>
          Create a sound installation that uses physical objects or properties
          to mimic the mood or environment of a recorded sound (which you
          record).
        </ExternalText>
        <Text>
          Working with my group member Baiyuan, we decided to create a piece
          titled Hypercinema for this Hypercinema class project. It started with
          collecting sounds at a cinema where we realised that we had this same
          habit of fiddling around with our popcorn and the straws in the
          plastic cups whenever something we thought was boring was showing. It
          was meant as this way of fidgeting to get past a boring scene to make
          the movie kind of go faster in a sense. So we decided to use that as
          the concept for our Sound Sculpture.
          <br></br>
          <br></br>
          We created this piece that would replicate the sounds of the plastic
          straw moving and the popcorn moving around. We used two servo motors
          to achieve this, one to move the straw, the other to "stir" the
          popcorn. We also decided to make this an interactive piece by
          introducing two Potentiometers that would control the "speed" of the
          motors and also connect them to a movie to speed up the clip being
          shown.
          <br></br>
          Having worked with physical computing before, I was familiar with
          motors and potentiometers so getting this up and running was not too
          difficult (admittedly not my best soldering and cable management job
          though, but at least it works). Ok but one issue here was that I
          realised I actually could not control the speed of the motors
          (limitations of the motors I picked, or maybe it's me), maybe I forgot
          how to and could not find the right documentation to get that to work.
          So the workaround I thought of for this was to use the potentiometers
          to control the delay of the motor movements instead to mimick this
          pause of movement. To simulate actually consuming the popcorn and
          drink instead of just moving things around, so I guess that worked in
          the favour of the concept and was like a happy mistake on my part.
          <br></br>
          <br></br>
          Where I had trouble was connecting with TouchDesigner. I have used
          TouchDesigner in the past in a similar way (making vibration motors
          move to the beat of music) but that was awhile ago and I am quite
          rusty with it now so this took some figuring out and tinkering around
          to get it to work.
          <br></br>
          <br></br>
          Another point where we struggled was getting this to work reliably.
          Usually I would solder the wires and then hot glue everything but we
          loaned the motors from the shop so I didn't want to do that. So we
          kept having issues with bad connection and things "breaking".
          Eventually I decided to just tape everything up and it was slightly
          more reliably but I really hope it doesn't "break" in class.
          <br></br>
          <br></br>
          Lastly we had a bunch of problems with "mounting" the motor in the
          popcorn section of the box. Popcorn would jam the motor and also cause
          it to move out of the place we taped it to, so I decided to just put a
          few layers of tape around the motor and then hot glue it down,
          hopefully when we remove it after class the motor would still be clean
          and I can return it safely.
          <br></br>
          <br></br>I think the piece turned out quite well. I think it's quite
          decent for something we created in about a week. That being said, this
          feels more like a first prototype than a final project — the finishing
          could be improved greatly, the reliability of the hardware can be
          improved and worked upon more, and I'm not quite satisfied with the
          sound of the moving popcorn. I love the sound of the moving straw — it
          gets quite annoying sometimes but that means it works. But the popcorn
          could benefit from more iterations. I think it's a good start and if
          there's an opportunity I would love to develop this more. I already
          have some ideas on how we can make things more intuitive and even mix
          up the concept a little. Something that I thought about was what if
          the interactions themselves controlled the speed of the movie — doing
          away with the potentiometers. The potentiometers work as this sort of
          prototype to get the idea across for now. But if we were to develop
          this further what if as the amount of popcorn in the box decreases the
          speed of the movie increases. So the more popcorn you eat the faster
          the movie goes. I think that would be a fun way to play with the
          concept of the piece. Same with the straw, the more you fidget with it
          the faster the movie goes. I think that would be a fun way to make
          this "interface" more intuitive and less intrusive.
        </Text>
        <Subheader text="Recorded Sounds" />
        <Subheader text="Dialogue Popcorn" />
        <AudioPlayer
          src="/assets/audio/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo/audio-sculpture-1.mp3"
          type="audio/mp3"
        />
        <Subheader text="Popcorn Straw" />
        <AudioPlayer
          src="/assets/audio/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo/audio-sculpture-1.mp3"
          type="audio/mp3"
        />

        <Subheader text="Documentation" />
        <Subheader text="Video of single motor, single potentiometer" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-1.mov"
          alt="Description of video"
        />
        <Subheader text="Video of dual motor, dual potentiometer" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-2.mov"
          alt="Description of video"
        />
        <Subheader text="Video of dual motor, dual potentiometer to control the speed of the delay" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-3.mov"
          alt="Description of video"
        />
        <Subheader text="Testing the components in the box we made" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-4.mov"
          alt="Description of video"
        />
        <Subheader text="Testing the link to Touchdesigner" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-5.mov"
          alt="Description of video"
        />
        <Subheader text="Testing the sculpture without interaction" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-6.mov"
          alt="Description of video"
        />
        <Subheader text="Controlling a narrative building but slow scene" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-7.mov"
          alt="Description of video"
        />
        <Subheader text="Controlling a action packed but narratively slow scene" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-8.mov"
          alt="Description of video"
        />
        <Text>
          Some images of my shoddy wiring and soldering, and sketchy at best
          "mounting".
        </Text>
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-4.png",
            "/assets/images/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-5.png",
          ]}
          orientation="landscape"
        />
        <ImagesCarousel
          images={[
            "/assets/images/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-1.jpg",
            "/assets/images/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-2.jpg",
            "/assets/images/Fall2023/ITPG_GT_2004_CL_Hypercinema/WeekTwo/itpg-gt-2004-cl-hypercinema-weekTwo-audioSculpture-3.jpg",
          ]}
          orientation="landscape"
        />
      </div>
    </Container>
  );
};

export default WeekTwo;
