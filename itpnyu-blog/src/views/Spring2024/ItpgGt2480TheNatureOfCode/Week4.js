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
        <Header>Week 4</Header>
        <ExternalText>
          The idea for this week is to use trigonometric functions and/or
          oscillating motion in a sketch.
        </ExternalText>
        <Text>
          Experimented around with the additive waves examples and something
          about slow generating waves caught my eye so I decided to slow down
          the sketch and use really small numbers in creating the waves so that
          it will build up over time and even as the canvas fills up, it just
          makes the motion more pronounced as some key points in the wave get
          darker than others. Also something about a zoomed in view of the waves
          was interesting to me, instead of viewing the waves as a whole, it's a
          different way of getting a sense of the flow and motion.
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/wTgIfEQrl"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/wTgIfEQrl"
          height="50vh"
        />
        <Subheader>p5.js code</Subheader>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/wTgIfEQrl
// Based on:
// Additive Waves
// The Nature of Code
// The Coding Train / Daniel Shiffman
// https://youtu.be/okfZRl4Xw-c
// https://thecodingtrain.com/learning/nature-of-code/3.7-additive-waves.html
// https://editor.p5js.org/codingtrain/sketches/qcRsZ_O5a

// Shaders applied by me using https://itp-xstory.github.io/p5js-shaders/#/./docs/setting-up-shaders-in-p5 + https://github.com/aferriss/p5jsShaderExamples/blob/gh-pages/2_texture-coordinates/2-4_random/texcoord.vert

// Shader colours applied using code adapted from https://thebookofshaders.com/06/

let shaderCanvas;
let shaderTexture;

let waves = [];

function preload() {
  shaderCanvas = loadShader("shader.vert", "shader.frag");
}


function setup() {
  createCanvas(800, 400, WEBGL);

  waves[0] = new Wave(
    random(1000, 2000),
    random(100, 600),
    random(TWO_PI),
    1,
    1000,
    2000
  );
  waves[1] = new Wave(
    random(1000, 2000),
    random(100, 600),
    random(TWO_PI),
    -1,
    1000,
    2000
  );
  
  shaderTexture = createGraphics(400, 400, WEBGL);
  shaderTexture.noStroke();
  background(255);
}

function draw() {
  
  shaderTexture.shader(shaderCanvas);
  shaderCanvas.setUniform("u_resolution", [width, height]);
  shaderCanvas.setUniform("u_time", millis() / 1000.0);
  
  shaderTexture.rect(0, 0, width, height);
  
  for (let x = -width / 2; x < width / 2; x += 5) {
    let y = 0;
    for (let wave of waves) {
      y += wave.evaluate(x + width / 2); 
    }
    noStroke();
    texture(shaderTexture);
    rect(x, y, 1);
  }

  for (let wave of waves) {
    wave.update();
  }
}

class Wave {
  constructor(amp, period, phase, direction, minAmp, maxAmp) {
    this.baseAmplitude = amp;
    this.basePeriod = period;
    this.basePhase = phase;
    this.direction = direction;
    this.minAmp = minAmp;
    this.maxAmp = maxAmp;
    this.ampChangeSpeed = 0.01;
    this.periodChangeSpeed = 0.0001;
    this.phaseChangeSpeed = 0.0003;
  }

  evaluate(x) {
    return (
      sin(this.basePhase + (TWO_PI * x) / this.basePeriod) * this.baseAmplitude
    );
  }

  update() {
    this.basePhase += 0.05 * this.direction;
    this.baseAmplitude =
      this.minAmp +
      ((this.maxAmp - this.minAmp) *
        (sin(this.ampChangeSpeed * frameCount) + 2)) /
        2;

    this.basePeriod += sin(this.periodChangeSpeed * frameCount) * 20;

    this.basePhase += sin(this.phaseChangeSpeed * frameCount);
  }
}          
`}
        />
        <Subheader>GLSL Code for Fragment Shader</Subheader>
        <CodeSnippets
          language="glsl"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/wTgIfEQrl
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

    gl_FragColor = vec4(vec3(rnd),0.1);
}          
`}
        />
      </div>
    </Container>
  )
}

export default BlogPost
