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
        <ExternalText>
          Using the random walker as a model, develop a sketch that experiments
          with motion. Here are some ideas but you should feel free to develop
          your own. Another way of thinking about the assignment is to apply the
          rules of motion to another medium of expression: sound, color, number,
          scale...
        </ExternalText>
        <Text>
          Was excited when Dan said that we could use this class to touch on
          other programming languages and one method was to port code across
          languages, my mind instantly went to Shaders (GLSL). Shaders have
          always been this BANE OF MY EXISTENCE, back when I first started
          working as a Creative Technologist at R/GA one of my very first
          projects was to write a form of GLSL called SparkSL for some
          backgrounds for an instagram filter and it was so hard to understand I
          had to port from ShaderToy to GLSLto SparkSL and finding documentation
          was so difficult. I managed to fumble my way through that by combining
          a bunch of ShaderToy and Book Of Shader examples but I never really
          understood what I was doing. So I thought this would be a great
          opportunity to revisit that and try to understand it better.
          <br></br>
          <br></br>
          I've also been super drawn to shaders as I've seen some really
          beautiful generative graphics and art made with them. I love looking
          at generative art and I think this might be my opportunity to get more
          into that. Also because of the limitations of p5 and how sketches
          start to get slow after leaving them to run for awhile, I thought it
          would be a good idea to learn how to use shaders so that I could look
          at creating more complex graphics without slowing down the sketch and
          bringing my computer to a crawl.
          <br></br>
          <br></br>
          Ok those were initial excitements and thoughts but I've also just
          spent the last 8 hours trying to figure out how to firstly, get GLSL
          to run as a react component on my blog (which I have still not figured
          out), secondly try to draw a moving dot on the screen and have it move
          randomly (which I also have not figured out), and thirdly I've been
          researching and I can't figure out if it is even possible to do most
          of what I see on the nature of code syllabus using GLSL with my
          limited knowledge. But time's running out and I need to start with
          something manageable so I switched focus for the time being to
          something simpler like using the random walker example and then try to
          apply a shader to it to manipulate the colour.
          <br></br>
          <br></br>
          Managed to cobble something together hectically and frantically
          changing values in code and trying to undertsand them using the Random
          Walker Class example with this tutorial from ITP Alumni on{" "}
          <Links to="https://itp-xstory.github.io/p5js-shaders/#/./docs/setting-up-shaders-in-p5">
            how to use shaders with p5.js
          </Links>{" "}
          and some colour examples from{" "}
          <Links to="https://thebookofshaders.com/06/">
            The Book of Shaders
          </Links>
          . Although I didn't quite manage to do what I wanted to do, I think
          this is a good start? A cold and slow start but a start nonetheless!
          Nothing fancy but I might need to rethink my plans to learn GLSL or
          maybe find a more manageable way to learn it while learning the stuff
          from the Nature of Code.
          <br></br>
          <br></br>
          Although not sure if it's just me but the colours from the Shaders
          kinda look better than using RGB in p5.js? Or maybe I'm just blinded
          by the fact that I managed to get it to work.
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/CXNMEpVja"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/CXNMEpVja"
          height="50vh"
        />
        <Subheader>p5.js code for Walker Object</Subheader>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/full/CXNMEpVja
// Based off the Random Walker Class from https://natureofcode.com/random/ and https://editor.p5js.org/natureofcode/sketches/5C69Xy

// Shaders applied by me using https://itp-xstory.github.io/p5js-shaders/#/./docs/setting-up-shaders-in-p5 + https://github.com/aferriss/p5jsShaderExamples/blob/gh-pages/2_texture-coordinates/2-4_random/texcoord.vert

// Shader colours applied using code adapted from https://thebookofshaders.com/06/

let shaderCanvas;
let shaderTexture;
let walker;


function preload() {
  shaderCanvas = loadShader('shader.vert', 'shader.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
  
  walker = new Walker();
  shaderTexture = createGraphics(400, 400, WEBGL);
  shaderTexture.noStroke();
  background(255);
}

function draw() {
  // background(255); 
  shaderTexture.shader(shaderCanvas);
  
  shaderCanvas.setUniform("u_resolution", [width, height]);
  shaderCanvas.setUniform("u_time", millis() / 1000.0);
  shaderCanvas.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);
  
  shaderTexture.rect(0,0,width,height);
  walker.step();
  walker.show();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

class Walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.size = 20;
  }

  show() {
    push();
    texture(shaderTexture);
    ellipse(this.x - width / 2, this.y - height / 2, this.size, this.size);
    pop();
  }

  step() {
    
    this.x += random(-1, 1);
    this.y += random(-1, 1);
    
    this.xstep = this.x + random(-10, 10);
    this.ystep = this.y + random(-10, 10);

    this.x = lerp(this.x, this.xstep, 0.1);
    this.y = lerp(this.y, this.ystep, 0.1);
  }
}
`}
        />

        <Subheader>
          GLSL code for Vertex Shader (Boilerplate to make GLSL work with p5.js){" "}
        </Subheader>

        <CodeSnippets
          language="glsl"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/full/CXNMEpVja
// From https://itp-xstory.github.io/p5js-shaders/#/./docs/setting-up-shaders-in-p5 + https://github.com/aferriss/p5jsShaderExamples/blob/gh-pages/2_texture-coordinates/2-4_random/texcoord.vert

// Combined by me

/*
vert file and comments from adam ferriss
https://github.com/aferriss/p5jsShaderExamples
with additional comments from Louise Lessel
*/ 


// These are necessary definitions that let you graphics card know how to render the shader
#ifdef GL_ES
precision mediump float;
#endif


// This “vec3 aPosition” is a built in shader functionality. You must keep that naming.
// It automatically gets the position of every vertex on your canvas

attribute vec3 aPosition;

// our texcoordinates
attribute vec2 aTexCoord;

// We always must do at least one thing in the vertex shader:
// tell the pixel where on the screen it lives:

// this is a variable that will be shared with the fragment shader
// we will assign the attribute texcoords to the varying texcoords to move them from the vert shader to the frag shader
// it can be called whatever you want but often people prefiv it with 'v' to indicate that it is a varying
varying vec2 vTexCoord;

void main() {
  
  // copy the texture coordinates
  vTexCoord = aTexCoord;
  
  // copy the position data into a vec4, using 1.0 as the w component
  vec4 positionVec4 = vec4(aPosition, 1.0);
  
  // Make sure the shader covers the entire screen:
  // scale the rect by two, and move it to the center of the screen
  // if we don't do this, it will appear with its bottom left corner in the center of the sketch
  // try commenting this line out to see what happens
  positionVec4.xy = positionVec4.xy * 2.0 - 1.0;

  // Send the vertex information on to the fragment shader
  // this is done automatically, as long as you put it into the built in shader function “gl_Position”
  gl_Position = positionVec4;
}
`}
        />

        <Subheader>GLSL Code for Fragment Shader (Color Changing)</Subheader>

        <CodeSnippets
          language="glsl"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/full/CXNMEpVja
// Adapted from https://thebookofshaders.com

#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;

// Function from Iñigo Quiles
// https://www.shadertoy.com/view/MsS3Wc
vec3 hsb2rgb(in vec3 c){
    vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                             6.0)-3.0)-1.0,
                     0.0,
                     1.0 );
    rgb = rgb*rgb*(3.0-2.0*rgb);
    return c.z * mix(vec3(1.0), rgb, c.y);
}

void main() {
    // Define colorA and colorB in HSB space (Hue, Saturation, Brightness)
    vec3 colorA = vec3(0.0, 1.0, 1.0);
    vec3 colorB = vec3(1.0, 1.0, 0.5);

    // Sinwave time interpolation
    float pct = abs(sin(u_time));
    float alpha = abs(cos(u_time));

    // Interpolate between the two HSB colors based on time
    vec3 colorHSB = mix(colorA, colorB, pct);

    // Convert the HSB to RGB
    vec3 colorRGB = hsb2rgb(colorHSB);

    gl_FragColor = vec4(colorRGB, alpha);
}
`}
        />
      </div>
    </Container>
  )
}

export default BlogPost
