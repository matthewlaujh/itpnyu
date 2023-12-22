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
        <Header>Week 1</Header>
        <Subheader>Sound Installation References</Subheader>
        <Text>
          Looking at the references shared in class — especially Janet Cardiff's
          work reminded me of the exhibition that I went to at the Marina Bay
          Sand Art Science Museum —{" "}
          <Links to="https://www.marinabaysands.com/museum/exhibitions/orchestral-manoeuvres.html">
            Orchestral Manoeuvres: See Sound. Feel Sound. Be Sound
          </Links>
          , back home in Singapore last year where I got to experience Janet
          Cardiff's Choral in person. I remember it being quite a surreal
          experience, walking past each speaker, hearing each voice, trying to
          catch two or more voices together by position myself inbetween
          speakers. And just walking around and sitting in the middle of the
          space. Each location I was at felt the same yet slightly different. I
          remember that I couldn't quite hear a complete piece, cause you can't
          hear some of the speakers if you're at the other end of the
          installation but that made for a more interesting experience trying to
          piece it all together. Sorry no photos and videos of this as it was
          not allowed.
          <br></br>
          <br></br>
          The exhibition also had a few other sound installations that I really
          liked especially Rage Fluids by Hannah Perry and Milch by Carsten
          Nicolai. Rage Fluids was an interesting one as well, it was that
          combination of distorted sound and image that created this sense of
          uneasiness that was kind of weird but also kind of engaging in a
          sense. Walking around the installation and watching your reflection
          get distorted with the sound was quite a sensory experience. Lastly
          Carsten Nicolai's Milch was just really nice to see in person, I'm a
          big fan of Alva Noto as a musician but also his work as an artist.
          I've collected some of his books back home and I'm just a fan of how
          he blends music with technology and art so seamlessly creating such
          visually and sonically interesting work. Some other work I found
          interesting there was Toshi Ichiyanagi's Music for Piano No.7, it was
          an visually interesting reinterpretation of music notations and also
          Christine Sun Kim's The Sound of series where the artist was born deaf
          but has devised her own method of understanding visualizing sounds
          that she can perceive but cannot hear. These I have pictures and
          videos for, in the carousell in the order that I mentioned them (sorry
          haven't done the caption component yet for the site, will edit this
          later).
          <br></br>
          <br></br>
          In retrospect, I think I was more drawn to the visualization of sound
          from these works with the exception of Choral. But it was nice to
          think about these work in retrospect and go through the images I have
          to kind of relieve the experience of being there.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekOne-soundInstallation.mov"
          alt="Video of Rage fluids by Hannah Perry"
        />
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-1.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-2.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-3.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-4.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-5.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-6.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-7.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-8.jpg",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekOne-9.jpg",
          ]}
          orientation="portrait"
        />
        <Subheader text="Sound Recordings" />
        <Text>
          As part of the class exercise I collected some sounds with Tobi based
          on our interpretation of what the subject was. Also the zoom recorder
          is really good, I've seen the hype around these things but now that
          I've handled it, I get it. The sounds we recorded some were quite
          literal like "A metal sound" or "The Sound of Cold" is the air
          conditioning in the room. But some were more abstract like "The Sound
          of Purple" where its a purple NYU card tapping access. Also the zoom
          recorder messed up the file naming and they weren't in sequence for
          some reason, so listening back to them and trying to figure out what's
          what was quite fun. Trying to piece the sound to the description to
          what I remember recording.
        </Text>
        <Subheader>The Feeling of Loneliness</Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-1.mp3"
          type="audio/mp3"
        />
        <Subheader>The Feeling of Happiness </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-2.mp3"
          type="audio/mp3"
        />
        <Subheader>The Sound of Betrayal </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-3.mp3"
          type="audio/mp3"
        />
        <Subheader>The Sound of Cold </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-4.mp3"
          type="audio/mp3"
        />
        <Subheader>A Hum </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-5.mp3"
          type="audio/mp3"
        />
        <Subheader>A Metal Sound </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-6.mp3"
          type="audio/mp3"
        />
        <Subheader>A Ticking Sound" </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-7.mp3"
          type="audio/mp3"
        />
        <Subheader>The Sound of Purple </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-8.mp3"
          type="audio/mp3"
        />
        <Subheader>Squishiness </Subheader>
        <AudioPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-audio/itpg-gt-2004-cl-hypercinema-weekOne-soundRecordings-9.mp3"
          type="audio/mp3"
        />
      </div>
    </Container>
  )
}
export default BlogPost
