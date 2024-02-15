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
        <Header>Week 2</Header>
        <ExternalText>
          Find any sketch you previously created in p5.js with separate x,y
          variables for elements on the sketch. Can you rewrite the sketch with
          createVector() for each of these pairs? For example, rework your
          sketch from week 1 and use vectors! Try incorporating the concept of
          acceleration. Can you create a methodology for calculating a dynamic
          acceleration, one that changes over time based on any number of
          factors? What is a random "acceleration" walk?
        </ExternalText>
        <Text>
          I am still struggling trying to do GLSL natively but I hope I'll get
          there at some point this semester but here's a sketch based on last
          week's sketch but using createVector() and play around with
          acceleration. I also changed the fragment shader colours to use random
          noise as the texture.
          <br></br>
          <br></br>
          As I was working on the sketch I realised that it look like dust or
          like microorganisms moving around. Or like that one camera lens that I
          messed up and let fungus grow inside, there's something interesting
          about this micro random walk behaviour and the shapes it forms.
          <br></br>
          <br></br>
          Also just because I was curious I left the sketch to run for about 30
          minutes and surprisngly it did not lag up my whole computer and was
          still running fine. Fans were whirring on my computer but the sketch
          was still going strong! :)
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/9RA5mg2nK"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/9RA5mg2nK"
          height="50vh"
        />

        <Subheader>p5.js code for Walker Object</Subheader>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/9RA5mg2nK
// Based off the Random Walker Class from https://natureofcode.com/random/ and https://editor.p5js.org/natureofcode/sketches/5C69XyrlsR

// Shaders applied by me using https://itp-xstory.github.io/p5js-shaders/#/./docs/setting-up-shaders-in-p5 + https://github.com/aferriss/p5jsShaderExamples/blob/gh-pages/2_texture-coordinates/2-4_random/texcoord.vert

// Shader colours applied using code adapted from https://thebookofshaders.com/06/
let shaderCanvas;
let shaderTexture;
let walkers = [];
let numWalkers = 1000;

function preload() {
  shaderCanvas = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  
  shaderTexture = createGraphics(400, 400, WEBGL);
  shaderTexture.noStroke();
  background(0);

  for (let i = 0; i < numWalkers; i++) {
    walkers.push(new Walker());
  }
}

function draw() {
  shaderTexture.shader(shaderCanvas);
  
  shaderCanvas.setUniform("u_resolution", [width, height]);
  shaderCanvas.setUniform("u_time", millis() / 1000.0);
  
  shaderTexture.rect(0, 0, width, height);

  // Update and display each Walker
  for (let walker of walkers) {
    walker.step();
    walker.show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
class Walker {
  constructor() {
    this.pos = createVector(random(width) - width / 2, random(height) - height / 2);
    this.vel = createVector(0, 0); // Start with zero velocity
    this.acc = createVector(0, 0); // Start with zero acceleration
    this.size = 0.5;
  }

  applyForce(force) {
    this.acc.add(force); // Add the force to the acceleration
  }

  step() {
    // Update acceleration randomly
    let randomAcc = createVector(random(-0.5, 0.5), random(-0.5, 0.5));
    this.applyForce(randomAcc);

    // Update velocity
    this.vel.add(this.acc);
    this.vel.limit(0.5);
    // Update position
    this.pos.add(this.vel);

    // Reset acceleration each frame
    this.acc.mult(0);
  }

  show() {
    push();
    texture(shaderTexture);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
    pop();
  }
}
`}
        />

        <Subheader>GLSL Code for Fragment Shader (Noise)</Subheader>

        <CodeSnippets
          language="glsl"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/full/CXNMEpVja
// Adapted from https://thebookofshaders.com/10/
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    float rnd = random( st );

    gl_FragColor = vec4(vec3(rnd),0.5);
}
`}
        />
      </div>
    </Container>
  )
}

export default BlogPost
