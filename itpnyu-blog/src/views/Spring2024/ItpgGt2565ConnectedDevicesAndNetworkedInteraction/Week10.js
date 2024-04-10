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
        <Header>Week 10</Header>
        <Subheader>Homework - HTTP Part 2.</Subheader>
        <ExternalText>
          Expand your HTTP server to have it log data to a persistent global
          variable or text file. Use query params to allow multiple devices to
          post data and keep their data separate from each other, and to allow
          clients to request information from one specific device.
        </ExternalText>
        <Text>
          Building on last week's assignment, I added a second device gave them
          different deviceIDs and had them write their inputs to different txt
          files in node-red. I then tweaked the receiver to be able to read the
          fetch the data using different endpoints to get from different files,
          with one button pulling from one file and the other from the other.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-Week10.MOV"
          alt="Description of video"
        />
        <Subheader>Github.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/tree/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week10">
            Link to Repo.
          </Links>
        </Text>
      </div>
    </Container>
  )
}
export default BlogPost
