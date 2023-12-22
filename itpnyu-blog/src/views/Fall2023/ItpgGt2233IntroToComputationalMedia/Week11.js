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
        <Header>Week 11</Header>
        <ExternalText>
          A theremin is an electronic musical instrument controlled without
          physical contact. It is a quintessential example of how gesture and
          movement can create sound. Think about how this idea can be extended
          into the realm of digital interactivity and sound synthesis. For this
          assignment, how might you create your own version of a theremin or a
          similar gesture-controlled sound synthesizer using p5.sound for sound
          generation and manipulation and ml5.js for gesture or pose
          recognition. Experiment with different types of oscillators (sine,
          square, triangle, sawtooth) and their effects on the sound. How does
          changing the frequency or amplitude with your gestures alter the
          sound? What interactions can you create? Document your process and the
          challenges you faced in a blog post. Include visual and auditory
          documentation such as screen recordings, videos, or sound clips. 🚨
          Remember, this is just one path for your assignment! Feel free to
          diverge from the idea of a traditional theremin and explore other
          possibilities around visualizing waves, generating sound, and/or
          interaction through gesture. 🚨
        </ExternalText>
        <Text>
          Decided to be a conductor this week, growing up playing the violin I
          was always intrigued by my instructor who would stand up there in the
          middle and conduct the ensemble, I always thought that he was just
          waving his hands around and as I learnt more I kind of got what he was
          doing but just thought that it was a really interesting motion.
          <br></br>
          <br></br>
          With that idea in mind, I expanded on the ml5 next gen handpose parts
          sketch that had mapped out a pinch gesture, that quite resemble how
          the conductor would hold their batons. I then mapped the x location of
          the finger to the frequency of the tone and the y frequency to the
          pan. That made sense to me as the conductor would point to the side of
          ensemble that was to play by moving around his y axis and then conduct
          the sound by moving around his x axis moving the baton up and down to
          get different sounds. I then mapped the pinch distance to the
          amplitude of the sound to signify a larger movement made. I also kept
          the circle in the pinch as a visual cue, I switched the colour mode to
          HSB as that gave a different range of values compared to RGB and I
          thought that it would be interesting to see how the frequency could
          represent the "Saturation" of the sound and the panning could
          represent the range of the frequency.
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/MuH74FX_X"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/MuH74FX_X"
          height="50vh"
        />
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/MuH74FX_X
// Copyright (c) 2023 ml5
// https://editor.p5js.org/ml5/sketches/DNbSiIYKB
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let handpose;
let video;
let hands = [];
let osc, fft;

// A variable to track a pinch between thumb and index
let pinch = 0;

function preload() {
  // Load the handpose model.
  handpose = ml5.handpose();
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  // start detecting hands from the webcam video
  handpose.detectStart(video, gotHands);

  osc = new p5.TriOsc(); // set frequency and type
  osc.amp(0.5);

  fft = new p5.FFT();
  osc.start();
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // If there is at least one hand
  if (hands.length > 0) {
    // Find the index finger tip and thumb tip
    let finger = hands[0].index_finger_tip;
    let thumb = hands[0].thumb_tip;

    // Draw circles at finger positions
    let centerX = (finger.x + thumb.x) / 2;
    let centerY = (finger.y + thumb.y) / 2;
    // Calculate the pinch "distance" between finger and thumb
    let pinch = dist(finger.x, finger.y, thumb.x, thumb.y);
    
    let freq = map(finger.y, 0, width, 880, 40);
    osc.freq(freq);

    let amp = map(pinch, 0, height, 0.01, 10);
    osc.amp(amp);

    let pan = map(finger.x, 0, height, -1, 1); 
    osc.pan(pan);
    
    // Colour Mapping
    colorMode(HSB, 100);
    freq = map(finger.y, 0, width, 0, 360);
    pan = map(finger.x, 0, height, 0, 100);
    
    // This circle's size is controlled by a "pinch" gesture
    fill(pan, freq, 100);
    stroke(0);
    strokeWeight(2);
    circle(centerX, centerY, pinch);
  }
}

// Callback function for when handpose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
  console.log(hands);
}

`}
        />
      </div>
    </Container>
  )
}

export default BlogPost
