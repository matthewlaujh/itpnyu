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

const WeekThree = () => {
  return (
    <Container>
      <div>
        <Header>Week Five</Header>
        <Text>
          Well, this week was interesting for sure having to do the ICM
          Assessment. Haven't done an exam in years, and have never done a
          coding related one, on paper (and forms I guess) no less. I think I
          did ok? Not sure actually but I feel like I did ok, like I manage to
          spot some of the "trick questions" or questions that needed a bit more
          thinking but as exams goes, I probably got some carelessly wrong
          especially in the matching exercise. But this was a good test of my
          knowledge and for the questions that I had to rewrite as loops, I
          don't think I wrote the most elegant loop, but at least they worked?
          So thats a win in my book.
          <br></br>
          The worksheet questions and homework were also a good way to practice
          functions and sort of learn to determine what should be in draw and
          what should be an external function, be them for just being neat or
          actually creating useful functions that can have variable functions
          from having different input parameters. But this exercise of
          refactoring code actually feels quite therapeutic and I might actually
          revisit code that I've written before ITP and refactor them when I get
          some free time.
        </Text>
        <Subheader>ICM Assessment Questions</Subheader>
        <ExternalText>
          Questions 1-3:<br></br>How many times will the code execute?
        </ExternalText>
        <ImagesCarousel
          images={[
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2233-introtocompmedia-images/itpg-gt-2233-introtocompmedia-weekFive-ICMAssessment-1.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2233-introtocompmedia-images/itpg-gt-2233-introtocompmedia-weekFive-ICMAssessment-2.png",
            "https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2233-introtocompmedia-images/itpg-gt-2233-introtocompmedia-weekFive-ICMAssessment-3.png",
          ]}
          orientation="landscape"
        />
        <Text>
          Question One - 11.<br></br>
          Question Two - 4.<br></br>
          Question Three - 6.
        </Text>
        <ExternalText>Questions 4: Rewrite as loop.</ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/jQF4fMKQV
// function setup() {
//   createCanvas(100, 100);
//   background(220);
//   rect(0, 0, 10, 100);
//   rect(10, 0, 10, 100);
//   rect(20, 0, 10, 100);
//   rect(30, 0, 10, 100);
//   rect(40, 0, 10, 100);
//   rect(50, 0, 10, 100);
//   rect(60, 0, 10, 100);
//   rect(70, 0, 10, 100);
//   rect(80, 0, 10, 100);
//   rect(90, 0, 10, 100);
// }
  
function setup() {
  createCanvas(100,100);
  background(220);
}

function draw() {
  for(let i = 0; i < 10; i++){
    rect(i * 10, 0, 10, 100);
  }
}
`}
        />
        <ExternalText>Questions 5: Rewrite as loop.</ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/bzygEIdGR
// function setup() {
//   createCanvas(100, 100);
//   background(220);
//   rect(0, 0, 100, 100);
//   rect(10, 10, 90, 90);
//   rect(20, 20, 80, 80);
//   rect(30, 30, 70, 70);
//   rect(40, 40, 60, 60);
//   rect(50, 50, 50, 50);
//   rect(60, 60, 40, 40);
//   rect(70, 70, 30, 30);
//   rect(80, 80, 20, 20);
//   rect(90, 90, 10, 10);
// }
  
function setup() {
  createCanvas(100,100);
  background(220);
}

function draw() {
  for(let i = 0; i < 10; i++){
    rect(i * 10, i * 10, i + 110 - 10, i + 110 - 10);
  }
}
`}
        />
        <ExternalText>Questions 6: Matching Exercise.</ExternalText>
        <Text>
          A - 2.<br></br>B - 5.<br></br>C - 1.<br></br>D - 4.<br></br>E - 10.
          <br></br>F - 10.<br></br>G - 7.<br></br>H - 6.<br></br>I - 11.
          <br></br>J - 3.<br></br>K - 3.<br></br>L - 8.<br></br>M - 11.<br></br>
        </Text>
        <Subheader>Worksheet Questions</Subheader>
        <Text>Answers to questions from Week Four's Worksheet</Text>
        <ExternalText>
          Question One — Organize the
          <Links to="https://editor.p5js.org/mimiyin/sketches/SiMFwzSGS">
            example Zoog portrait
          </Links>
          into functions so that you can understand what it’s doing without
          right comments and you can easily turn different parts of the sketch
          on/off by commenting in/out calls to your functions.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={` // https://editor.p5js.org/matthewlaujh-itpnyu/sketches/pIeD6CPcs
function setup() {
  createCanvas(400, 400);
  background(120);

  face();
  eyes();
  pupils();
  eyebrows();
  antenna();
  mouth();
  arms();
  body();
}

function face() {
  fill(127, 0, 127);
  ellipse(200, 200, 150, 200);
}

function eyes() {
  fill(0, 200, 127);
  ellipse(150, 150, 70, 40);
  ellipse(250, 150, 40, 60);
}

function pupils() {
  fill(0);
  ellipse(170, 150, 5, 5);
  ellipse(270, 150, 10, 10);
}

function eyebrows() {
  stroke(255, 100, 100);
  strokeWeight(15);
  line(130, 110, 170, 120);
  line(230, 105, 270, 100);
}

function antenna() {
  stroke(255);
  strokeWeight(5);
  line(200, 125, 200, 50);
  noFill();
  ellipse(200, 40, 20, 20);
}

function mouth() {
  noStroke();
  fill(255, 0, 127);
  ellipse(200, 250, 50, 20);
}

function arms() {
  stroke(0);
  strokeWeight(30);
  line(150, 350, 300, 300);
}

function body() {
  noStroke();
  fill(255, 255, 0);
  rect(150, 275, 100, 200);
}          
`}
        />
        <ExternalText>
          Question Two — Take one of the functions from your re-factored Zoog
          portrait and re-write it so that you can call the same function twice
          and have it draw slightly different versions of the same thing. (e.g.
          Draw a big eye. Draw a little eye.) Alternatively you can try doing
          this on your own self-portrait.
        </ExternalText>

        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/WFhU5ugL0
function setup() {
  createCanvas(400, 400);
  background(120);

  face();
  eyes(150, 150, 70, 40);
  eyes(250, 150, 40, 60);
  pupils();
  eyebrows();
  antenna();
  mouth();
  arms();
  body();
}

function face() {
  fill(127, 0, 127);
  ellipse(200, 200, 150, 200);
}

function eyes(x, y, width, height) {
  fill(0, 200, 127);
  ellipse(x, y, width, height);
}

function pupils() {
  fill(0);
  ellipse(170, 150, 5, 5);
  ellipse(270, 150, 10, 10);
}

function eyebrows() {
  stroke(255, 100, 100);
  strokeWeight(15);
  line(130, 110, 170, 120);
  line(230, 105, 270, 100);
}

function antenna() {
  stroke(255);
  strokeWeight(5);
  line(200, 125, 200, 50);
  noFill();
  ellipse(200, 40, 20, 20);
}

function mouth() {
  noStroke();
  fill(255, 0, 127);
  ellipse(200, 250, 50, 20);
}

function arms() {
  stroke(0);
  strokeWeight(30);
  line(150, 350, 300, 300);
}

function body() {
  noStroke();
  fill(255, 255, 0);
  rect(150, 275, 100, 200);
}       
`}
        />
        <ExternalText>
          Question Three — Define a portable function that adds two numbers
          together and returns the sum. You should be able to copy and paste
          this function definition and only this function definition into a
          different sketch and use it without creating errors.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/PYj9T5k0N
function setup() {
  let num1 = 10;
  let num2 = 8;
  let sum = addNumbers(num1, num2);

  print(sum);
}

function addNumbers(num1, num2) {
  return num1 + num2;
}
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/sketches/PYj9T5k0N"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/PYj9T5k0N"
          height="50vh"
        />
        <ExternalText>
          Question Four — Re-organize your bouncing ball code from Week 3’s quiz
          into at least 2 functions. Challenge: Create a reusable bounce()
          function that can be used to bounce positions, colors, anything you
          can think of.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/jw9WB-IZ1
let x, y;
let xSpeed, ySpeed;
let radius = 25;
let colorChange = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xSpeed = random(3, 5);
  ySpeed = random(3, 5);
}

function draw() {
  background(220);

  movement();
  bounce();

  fill(colorChange);
  ellipse(x, y, radius * 2);
}

function movement() {
  x += xSpeed;
  y += ySpeed;
}

function bounce() {
  if (x + radius > width || x - radius < 0) {
    xSpeed = -xSpeed;
    colorChange = changeColor();
  }
  if (y + radius > height || y - radius < 0) {
    ySpeed = -ySpeed;
    colorChange = changeColor();
  }
}

function changeColor() {
  if (colorChange === 0) {
    return 127;
  } else if (colorChange === 127) {
    return 255;
  } else {
    return 0;
  }
}          
`}
        />
        <ExternalText>
          Question Two B — Create 20 columns that turn red only when you hover
          over the column. Make the left half turn blue, right half turn red.
        </ExternalText>

        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/CqPfkXFPG
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let columns = 20;
  let colWidth = windowWidth / columns;

  for (let i = 0; i < columns; i++) {
    if (mouseX >= i * colWidth && mouseX < (i + 1) * colWidth) {
      if (i + 1 <= 10) {
        fill(0, 0, 255);
      } else {
        fill(255, 0, 0);
      }
    } else {
      noFill();
      stroke(0);
    }

    rect(i * colWidth, 0, colWidth, windowHeight);
  }
}             
`}
        />
        <ExternalText>
          Homework — Functions are the basic unit of labor in your code. Take a
          sketch you’ve already done and re-organize the code into functional
          units of labor that you define. You can also conceive of an entirely
          new world of labor. What kinds of labor does it take to make your
          sketch run? Aim to keep setup() and draw() as clean as possible, and
          do everything (calculations, drawing, etc.) in functions that you
          define. Take care to name your functions precisely and accurately.
          Whenever possible, use verbs to name your functions. A good test of
          whether your functions are well-named is: Can someone else comment
          in/out individual function calls and predict what behaviors will start
          / stop working in your sketch? Challenge: Write a re-usable function,
          a function you can call in multiple ways to do the same thing slightly
          differently each time. Here is an example with three functions, two
          re-usable. Challenge: Incorporate recursion into your function. You
          can read more about recursion in the Nature of Code, though note this
          chapter also uses concepts we haven't covered yet. And here is a
          recursion code example, and recursion video tutorial.
        </ExternalText>
        <Text>W3-Conditional Rule Based Animation-Refactored</Text>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/9jKZBLE09
// Adapted from https://thecodingtrain.com/challenges/14-fractal-trees-recursive

let angle = 0.1;
let depth = 0;
let length;
let split = false;
let initiallength;

function setup() {
  createCanvas(windowWidth, windowHeight);
  initiallength = height;
  length = initiallength;
}

function draw() {
  drawProperties();
  drawTree(length, depth);

  if (split) {
    incrementTreeDepth();
  }
}

function drawProperties() {
  background(0);
  stroke(255);
  strokeWeight(2);
  translate(width * 0.5, height);
}

function drawTree(length, currentDepth) {
  // Draw the main branch
  line(0, 0, 0, -length);
  translate(0, -length);
  
  if (currentDepth > 0) {
    const reducedLength = length * 0.7;

    drawRotatedSubBranch(reducedLength, currentDepth - 1, angle);

    drawRotatedSubBranch(reducedLength, currentDepth - 1, -angle);
  }
}

function drawRotatedSubBranch(length, currentDepth, rotationAngle) {
  push();
  rotate(rotationAngle);
  drawTree(length, currentDepth);
  pop();
}


function incrementTreeDepth() {
  depth++;
  split = false;
}

function mouseMoved() {
  length = map(mouseY, height, 0, height / 10, height);
  angle = map(mouseX, width, 0, width / 10, width);
}

function mousePressed() {
  split = true;
}
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/9jKZBLE09"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/9jKZBLE09"
          height="50vh"
        />
      </div>
    </Container>
  )
}

export default WeekThree
