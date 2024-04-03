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
        <Header>Week 9</Header>
        <Subheader>Homework - HTTP.</Subheader>
        <ExternalText>
          Create a simple cloud-hosted Node-RED HTTP server that processes GET
          and POST requests and does things with them. The POST requests should
          give a client a way to add or update data in the server, and the GET
          request should retrieve the data from the server.
        </ExternalText>
        <Text>
          Working off my midterm project I created a simple Node-RED HTTP server
          that processes GET and POST requests. My physical prototypes were in a
          half-way state so I made use of them as is, one being in the form it
          was for midterm, while the other was trying out a new set of keys with
          a different arduino. This new prototype had 4 keys connected over i2c
          and had a library that could detect the edge rising and falling making
          it easier to detect key presses. The arduino would pick up on the key
          presses store them in a string and another button would send them to
          node-red. The other prototype I simplified as a receiver that would
          pick up and display those messages.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekNine-HTTP.mp4"
          alt="Description of video"
        />
        <Subheader>Github.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/tree/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week9">
            Link to Repo.
          </Links>
        </Text>
      </div>
    </Container>
  )
}
export default BlogPost
