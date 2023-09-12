// Components
import { Container } from "../../../components/Container";
import { Header } from "../../../components/Header";
import { Subheader } from "../../../components/Subheader";
import Text from "../../../components/Text";
import ExternalText from "../../../components/ExternalText";
import { Quotes } from "../../../components/Quotes";
import { Images } from "../../../components/Images";
import CodeSnippets from "../../../components/CodeSnippets";
import { Iframes } from "../../../components/Iframes";
import { AudioPlayer } from "../../../components/AudioPlayer";
import { VideoPlayer } from "../../../components/VideoPlayer";
import Links from "../../../components/Links";
import P5Sketch from "../../../components/P5Sketch";

const WeekOne = () => {
  return (
    <Container>
      <div>
        <Header text="Week One" />
        <ExternalText>
          Write a blog post about how you anticipate computation applying to
          your interests. This could be a subject you've studied, a job you've
          worked, a personal hobby, or a cause you care about. What projects do
          you imagine making this term? What projects do you love? (You can
          review and contribute to the ICM Inspiration Wiki page). In the same
          post (or a new one), document the process of creating your sketch.
          What pitfalls did you run into? What could you not figure out how to
          do? How was the experience of using the web editor?
        </ExternalText>
        <Text>To be completed.</Text>
        <Subheader text="Worksheet Questions" />
        <Text text="Answers to questions from Week One's Worksheet" />
        <ExternalText>
          Question One —
          <Links to="https://editor.p5js.org/icm4.0/sketches/GxwuX757i">
            https://editor.p5js.org/icm4.0/sketches/GxwuX757
          </Links>
          - Where should createCanvas() go?
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ss4UNoJA5
function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {}
`}
        />
        <ExternalText>
          Question Two —
          <Links to="https://editor.p5js.org/icm4.0/sketches/EIwtIgXzd">
            https://editor.p5js.org/icm4.0/sketches/EIwtIgXzd
          </Links>
          - Move the commented code at the top to where you think it should go:
          setup(), draw()or leave it where it is."
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/2XwTGARFb

let x = 50

// Added this to get the sketch to work but it wasn't provided in the question.
let y = 200


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  x++;
  rect(x, y, 50, 50);
  if(mouseX > x && mouseX < x + 50) {
  x = mouseX;
}
}
`}
        />
        <Text>
          This code doesn't run cause it's not declaring y anywhere, I added in
          the y declaration just so it runs.
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/2XwTGARFb"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/2XwTGARFb"
          height="450px"
        />
        <ExternalText>
          Question 3 — Reproduce this image with code. Be as precise and
          accurate as possible.
        </ExternalText>
        <Images
          src="/assets/images/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/Week One/reference-image.png"
          alt="Reference Image Provided."
        />
        <Text>
          I decided to download and sketch the image out in Illustrator to be as
          precise as possible being able to calculate the pixel location and
          sizes of the elements in the image. This also allowed me to get the
          colour codes.
        </Text>
        <Images
          src="/assets/images/Fall2023/ITPG_GT_2233_Intro_to_Comp_Media/Week One/itpg-gt-2233-intro-to-comp-media—W1Q3.jpg"
          alt="Sketched Image."
        />
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/97KX2qRaN
function setup() {
    createCanvas(800, 600);
  }
  
  function draw() {
    background('#00ffff');
    
    // Stroke
    push()
      stroke('#ff0200');
      strokeWeight(50);
      line(0, 0, 800, 600);
    pop()
    
    // Ellipse
    push()
      fill('#00c801');
      noStroke();
      ellipse(400, 300, 400, 300);
    pop()
    
    // Square
    push()
      fill('#05007f');
      noStroke();
      square(550,250, 50);
    pop()
  }
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/97KX2qRaN"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/97KX2qRaN"
          height="650px"
        />
        <ExternalText>
          Create a "self" portrait using 2D primitive shapes. Play with symmetry
          in your portrait. Shapes include – arc(), curve(), ellipse(), line(),
          point(), quad(), rect(), triangle() – and basic color functions –
          background(), colorMode(), fill(), noFill(), noStroke(), stroke().
          Remember to use createCanvas() to specify the dimensions of your
          window and wrap all of your code inside a setup() function.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ATS6nizXe
function setup() {
    createCanvas(800, 1200);
  }
  
  function draw() {
    background(220);
    
    // Coordinate checker
    // push();
    // fill(0);
    // textSize(16);
    // text("X: " + mouseX + ", Y: " + mouseY, 10, 30);
    // pop();
    
    // Body
    push();
      stroke('#000000');
      strokeWeight(5);
      fill('#000000');
      ellipse(400, 1000, 1000, 1200);
      rect(400, 800, 55, 55, 20);
    pop();
    push();
      stroke('#000000');
      strokeWeight(5);
      fill('#ffffff');
      ellipse(400, 1100, 600, 1400);
    pop();
    push();
      stroke('#ffffff');
      strokeWeight(5);
      fill('#000000');
      ellipse(400, 1350, 600, 1600);
    pop();
    
    // Hair
    push();
      stroke('#000000');
      strokeWeight(5);
      fill('#000000');
      ellipse(400,400, 500, 600);
    pop();
    
    // Head
    push();
      stroke('#000000');
      strokeWeight(5);
      ellipse(400, 430, 500, 475);
    pop();
    
    // Eyebrows
    push();
      stroke('#000000');
      strokeWeight(5);
      fill('#000000');
      ellipse(300, 360, 120, 50);
      ellipse(500, 360, 120, 50);
    pop();
    
    // Eyes
    push();
      stroke('#000000');
      strokeWeight(5);
      ellipse(300, 375, 100, 50);
      ellipse(500, 375, 100, 50);
    pop();
    push();
      fill('#000000');
      circle(300, 375, 50);
      circle(500, 375, 50);
    pop();
    
    // Ears
      push();
      stroke('#000000');
      strokeWeight(5);
      ellipse(150, 420, 50, 120);
      ellipse(650, 420, 50, 120);
    pop();
    push();
      fill('#000000');
      ellipse(155, 430, 40, 80);
      ellipse(645, 430, 40, 80);
    pop();
    
    // Nose
    push();
      stroke('#000000');
      strokeWeight(5);
      fill('#000000')
      rect(350, 450, 100, 25, 20);
      rect(345, 430, 110, 40, 50, 50, 20, 20);
      rect(370, 410, 60, 30, 20, 20, 0, 0);
    pop();
    
    //Nostrils
    push();
      stroke('#000000');
      strokeWeight(5);
      fill('#ffffff')
      ellipse(425, 465, 35, 25)
      ellipse(375, 465, 35, 25)
    pop();
    
    // Stache
    push();
      stroke('#000000');
      strokeWeight(5);
      fill('#000000');
      ellipse(400, 550, 225, 100);
    pop();
    
    // Mouth
    ellipse(400, 550, 225, 35);
  }
`}
        />
        <Text>
          Just had some fun with this, I'm not the best with illustrating with
          p5.js, I usually use it to interface with hardware or for more
          generative graphics but this was fun just messing around and trying to
          create shapes using positive and negative space.
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/ATS6nizXe"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/ATS6nizXe"
          height="1250px"
        />
      </div>
    </Container>
  );
};

export default WeekOne;
