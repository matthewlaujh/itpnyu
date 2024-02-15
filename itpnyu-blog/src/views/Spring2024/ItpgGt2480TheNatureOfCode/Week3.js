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
        <Header>Week 3</Header>
        <ExternalText>
          Develop a sketch with motion driven by forces (vectors).
        </ExternalText>
        <Text>
          Played arround with the mutual attraction sketch from the Nature of
          Code examples. Was quite drawn to the idea of attraction and things
          moving around an orbit and decided to just play around with this
          sketch and apply some shaders to it. This time I started to play
          around with having multiple shader files and applying them to
          alternate objects in the sketch. I also applied a glow effect to the
          shaders so that they're not just flat colours just to get a bit of a
          neon look. I had an idea in my head about the look I wanted to
          achieve, I initially wanted to have this soft glow, sort of like a
          motion blur effect, but I couldn't figure out how to do it so I just
          went with a simple glow effect for now instead.
          <br></br>
          <br></br>I attempted to combine a blur glsl shader sketch that I found
          here:
          <Links to="https://editor.p5js.org/matthewlaujh-itpnyu/sketches/gMXYyIaNN">
            Failed Blur Sketch
          </Links>{" "}
          which was based off this sketch I found{" "}
          <Links to="https://editor.p5js.org/agw62/sketches/rP8EYR7NR">
            blur-shader sketch by agw62
          </Links>{" "}
          but couldnt quite figure out how to get it to work with what I had.
          <br></br>
          <br></br>
          But I'll try it again next time round. For this sketch I decide to
          play around with it till I got some interesting visuals, interestingly
          enough after leaving it to run for long you start to see the sun in
          the middle naturally form and everything else looks like stars in it's
          orbit. I think it's quite a beautiful visual and I'm quite happy with,
          try leaving it to run for a long time, felt quite nice to stare at
          like a screensaver although this would be a terrible screensaver. Also
          couldn't decide between black and white so toggle the background in
          the setup to see two versions!
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/sxQjePgPa"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/sxQjePgPa"
          height="50vh"
        />

        <Subheader>
          Mock up of motion blur effect I wanted to try to achieve (ok maybe not
          quite this, but it should a softer streaky kind of look)
        </Subheader>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2480-natureofcode-images/itpnyu-blog-spring2024-itpg-gt2480-natureofcode-w3-motionBlur.png"
          alt=" "
        />

        <Subheader>p5.js code</Subheader>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/full/sxQjePgPa
// Mutual Attract// The Nature of Code

// Shaders applied by me using https://itp-xstory.github.io/p5js-shaders/#/./docs/setting-up-shaders-in-p5 + https://github.com/aferriss/p5jsShaderExamples/blob/gh-pages/2_texture-coordinates/2-4_random/texcoord.vert

// Shader colours applied using code adapted from https://thebookofshaders.com/06/

let shaderCanvasA;
let shaderCanvasB;
let shaderTexture;

let movers = [];
let sun;

function preload() {
  shaderCanvasA = loadShader("shader.vert", "shaderA.frag");
  shaderCanvasB = loadShader("shader.vert", "shaderB.frag");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  shaderTexture = createGraphics(400, 400, WEBGL);
  shaderTexture.noStroke();
  
  for (let i = 0; i < 200; i++) {
    let pos = p5.Vector.random2D();
    let vel = pos.copy();
    vel.setMag(random(1, 100));
    pos.setMag(random(1, 10));
    vel.rotate(PI / 2);
    let m = random(1, 2);
    movers[i] = new Mover(pos.x, pos.y, vel.x, vel.y, m);
  }
  sun = new Mover(0, 0, 0, 0, 500);

  // background(255); Toggle for white or black background I kinda can't decide
  
}

function draw() {
  
  for (let i = 0; i < movers.length; i++) {
    let mover = movers[i];
    if (i % 2 === 0) {
      shaderTexture.shader(shaderCanvasA);
      shaderCanvasA.setUniform("u_resolution", [width, height]);
      shaderCanvasA.setUniform("u_time", millis() / 1000.0);
    } else {
      shaderTexture.shader(shaderCanvasB);
      shaderCanvasB.setUniform("u_resolution", [width, height]);
      shaderCanvasB.setUniform("u_time", millis() / 1000.0);
    }

    shaderTexture.rect(0, 0, width, height);

    // Attraction forces and updates
    sun.attract(mover);
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other);
      }
    }

    // Update and show the mover with the applied shader
    mover.update();
    mover.show();
  }

}

class Mover {
  constructor(x, y, vx, vy, m) {
    this.pos = createVector(x, y);
    this.vel = createVector(vx, vy);
    this.acc = createVector(0, 0);
    this.mass = m;
    this.r = sqrt(this.mass) * 2;
  }

  applyForce(force) {
    let f = p5.Vector.div(force, this.mass);
    this.acc.add(f);
  }

  attract(mover) {
    let force = p5.Vector.sub(this.pos, mover.pos);
    let distanceSq = constrain(force.magSq(), 100, 1000);
    let G = 1;
    let strength = (G * (this.mass * mover.mass)) / distanceSq;
    force.setMag(strength);
    mover.applyForce(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    push();
    texture(shaderTexture);
    rect(this.pos.x, this.pos.y, this.r * 0.5);
    pop();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}          
`}
        />

        <Subheader>GLSL Code for Fragment Shader One</Subheader>

        <CodeSnippets
          language="glsl"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/full/sxQjePgPa
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(0.0, 0.5, 0.5);
vec3 colorB = vec3(0.0, 0.1, 0.1);

void main() {
    vec2 st = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    float time = mod(u_time, PI * 2.0) / (PI * 2.0);

    float movingX = st.x + time * 0.5; // Adjust the multiplier for speed

    float distToMovingPoint = distance(st, vec2(movingX, 0.5));
    float glowIntensity = 0.2 / distToMovingPoint;
    glowIntensity = clamp(glowIntensity, 0.0, 1.0);

    color = mix(colorA, colorB, fract(movingX));

    color += glowIntensity * colorA;
  
    color = clamp(color, 0.0, 1.0);

    float alpha = 0.6 + glowIntensity * 0.4;
    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
}          
`}
        />

        <Subheader>GLSL Code for Fragment Shader Two</Subheader>

        <CodeSnippets
          language="glsl"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/full/sxQjePgPa
#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.14159265359

uniform vec2 u_resolution;
uniform float u_time;

vec3 colorA = vec3(1.0, 0.3, 0.0);
vec3 colorB = vec3(0.01, 0.01, 0.0);

void main() {
vec2 st = gl_FragCoord.xy / u_resolution.xy;
vec3 color = vec3(0.0);

float time = mod(u_time, PI * 2.0) / (PI * 2.0);

float movingX = st.x + time * 0.5; // Adjust the multiplier for speed

float distToMovingPoint = distance(st, vec2(movingX, 0.5));
float glowIntensity = 0.2 / distToMovingPoint;
glowIntensity = clamp(glowIntensity, 0.0, 1.0);

color = mix(colorA, colorB, fract(movingX));

color += glowIntensity * colorA;

color = clamp(color, 0.0, 1.0);

float alpha = 0.6 + glowIntensity * 0.4;
alpha = clamp(alpha, 0.0, 1.0);

gl_FragColor = vec4(color, alpha);
}          
`}
        />
      </div>
    </Container>
  )
}

export default BlogPost
