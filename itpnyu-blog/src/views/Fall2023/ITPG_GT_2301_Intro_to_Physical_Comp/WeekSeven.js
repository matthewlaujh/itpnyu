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
        <Header>Week Seven.</Header>
        <Subheader>Asynchronous Serial Communication.</Subheader>
        <Text>
          I last worked with the p5.js to Arduino and Arduino to p5.js Serial
          Communication back in Undergrad Dissertation and Final Year Project in
          2022 using the p5.serialport Library GUI interface. I remember seeing
          the p5.webserial library and thought that I looked too complicated and
          decided that it would be easier to use the p5.serialport Library's GUI
          but in hindsight the p5.webserial library is much more reliable that
          the p5.serialport library and I after having gone through these labs
          and learning how simple it really is I now have my regrets.
          <br></br>
          <br></br>
          On top of that I've now learnt something new as well the difference
          between sending ASCII Serial Data and ASCII String Data, one of the
          other problems besides the unreliability of the p5.serialport library
          was that the data I was sending wasn't very smooth, I believe I was
          sending ASCII Serial Data instead of ASCII String Data. I noticed
          through these labs that sending String was smoother than serial bytes.
          Which was interesting to me, I probably have to practice sending data
          more often to see what else I can notice between the two.
        </Text>
        <Header>Lab: Intro to Asynchronous Serial Communications.</Header>
        <Subheader>Send the data in many formats.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-1.mov"
          alt="Description of video"
        />
        <Subheader>Send the values for all three sensors.</Subheader>
        <Images src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-images/itpg-gt2301-introtophysicalcomp-labSeven-1.jpg" />
        <Subheader>Formatting Multiple Serial Data: Punctuation.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-2.mov"
          alt="Description of video"
        />
        <Subheader>
          Formatting Multiple Serial Data: Punctuation - Three Sensors.
        </Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-3.mov"
          alt="Description of video"
        />
        <Subheader>Flow Control: Call and Response (Handshaking).</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-4.mov"
          alt="Description of video"
        />
        <Header>Lab: Serial Input to P5.js using WebSerial.</Header>
        <Subheader>Reading Incoming Serial Data.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-5.mov"
          alt="Description of video"
        />
        <Subheader>Draw a Graph With the Sensor Values.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-6.mov"
          alt="Description of video"
        />
        <Subheader>Reading Serial Data as a String.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-8.mov"
          alt="Description of video"
        />
        <Header>Lab: Serial Output From P5.js using WebSerial</Header>
        <Subheader>The P5.js Sketch.</Subheader>
        <Subheader>Sending ASCII-Encoded Serial Data.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-10.mov"
          alt="Description of video"
        />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-12.mov"
          alt="Description of video"
        />
        <Subheader>Processing ASCII-Encoded Strings With Arduino.</Subheader>
        <VideoPlayer src="" alt="Description of video" />
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2301-introtophysicalcomp-videos/itpg-gt2301-introtophysicalcomp-labSeven-14.mov"
          alt="Description of video"
        />
      </div>
    </Container>
  )
}
export default WeekSeven
