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
        <Header>Week 5-8</Header>
        <Subheader>Midterm.</Subheader>
        <ExternalText>
          In groups of 2-3 or individually, create a project that involves
          networked interaction between a human user and 2 or more devices,
          using a protocol of your choice. Be prepared to justify your choice of
          protocols!
          <br></br>
          <br></br>
          Human input examples: An HTML page responding to input fields, mouse
          clicks or key presses A P5 sketch using webcam data and a machine
          learning model (posenet, handpose, image classifier??) An Arduino
          using an interactive sensor (gesture, proximity, light, microphone?
          etc.)
          <br></br>
          <br></br>
          Receiver device examples: An HTML page or P5 sketch with data-reactive
          graphics An Arduino connected to some sort of actuator (motor,
          speaker, LED strip, etc.)
          <br></br>
          <br></br>
          The project should involve at least 2 different values being
          transmitted between the devices, or at least one value transmitted
          bi-directionally.
        </ExternalText>
        <Text>
          Slow communicators rethink how we communicate in this modern age by
          remixing old methods of and formats of communication in the form of
          modern artefacts. With texting, calling and teleconferencing a lot of
          times now we take the ease of communication for granted and much of
          communication has lost its meaning. Slow communicators is meant to
          encourage thoughtful communication through a slowed down process
          making each message sent more meaningful.
          <br></br>
          <br></br>I think of these as a prototype for a more developed project
          down the road. The first prototype is a physical device that has 2
          buttons and a mini screen. They are used to send psuedo-morse
          code-esque messages to each other, although while playing around with
          them I think it could be fun as just random secret messages like a
          secret knock or something.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-Midterm-Prototype.mp4"
          alt="Description of video"
        />
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-images/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-Midterm-Prototype.jpg"
          alt=" "
        />
        <Subheader>Github.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/tree/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week5-8-midterm">
            Link to Repo.
          </Links>
        </Text>
      </div>
    </Container>
  )
}
export default BlogPost
