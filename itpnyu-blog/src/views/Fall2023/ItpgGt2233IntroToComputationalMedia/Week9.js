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

const blogPost = () => {
  return (
    <Container>
      <div>
        <Header>Week 9</Header>
        <ExternalText>
          Create and/or manipulate an image (or images or video) to create an
          alternative reality than depicted in the source image(s). Describe how
          the result feels different from the source image(s). Write a blog post
          documenting your process and result. Work with any kind of imagery you
          want. Whatever you choose, you might consider these elements of a
          photograph in your computational approach. Here are a few ideas:
          Create a photobooth with snapshots from a camera. What happens if you
          slice off sections of an image? Create a "painting" system that colors
          pixels according to an image or video. (Note the video provided uses
          old non-classes syntax for the Particle objects, the accompanying code
          is updated to use classes.) These "coding challenge" videos all
          demonstrate various effects with pixels. Most are coded with
          Processing rather than p5.js, but there are p5.js ports of the code.
        </ExternalText>
        <Text>
          Decided to push what was taught in class further by using the
          techniques but trying to create some sort of filter like effect while
          keeping it simple and just manipulating the pixels in the pixel array.
          Instead of treating the pixels as pixels I wanted to experiment with
          having them as animated shapes instead. I decided to use a wiggly line
          animation to create this looks of like splicing a pixel. Sort of like
          bending a piece of film or well accidentally cutting it or tearing in
          the darkroom, if you know you know :(.
          <br></br>
          <br></br>
          But this was not the interesting part, there was a happy accident
          where I accidentally commented out my background and because there was
          no background and the video layered over each other it actually
          created this interesting tracing effect which we've actually covered
          earlier in the class weeks ago, but the really interesting thing was
          if the video was still but had slight changes, the animation of the
          wiggly lines would be subtle due to slight changes in colours creating
          this nice gradient texture look. And because they form this kind of
          rectangle gradient it looks like a film strip forming the image.
        </Text>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/xc0KwUhpE
          let video;

          function setup() {
            createCanvas(640, 480);
            video = createCapture(VIDEO);
            video.size(640, 480);
            video.hide();
            noStroke();
            fill(0);
          }
          
          function draw() {
            // background(0);
            video.loadPixels();
            let size = round(map(mouseX, 0, width, 1, 50));
          
            for (let y = 0; y < height; y += size) {
              for (let x = 0; x < width; x += size) {
                let i = (y * width + x) * 4;
                let r = video.pixels[i + 100];
                let g = video.pixels[i + 200];
                let b = video.pixels[i + 300];
                let a = video.pixels[i + 400];
                let brightness = (r + g + b) / 3;
                let darkness = (255 - brightness) / 255;
                let radius = size * darkness;
                fill(r, g, b, a);
                // rect(x, y, radius, radius);
                
                beginShape();
                for (let wx = 0; wx <= size; wx += 5) {
                  let wiggleY = sin(wx * 0.1 + frameCount * 0.1) * 10;
                  vertex(x + wx, y + size / 2 + wiggleY);
                }
                endShape();
              }
            }
          }
          
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/xc0KwUhpE"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/xc0KwUhpE"
          height="50vh"
        />
      </div>
    </Container>
  )
}

export default blogPost
