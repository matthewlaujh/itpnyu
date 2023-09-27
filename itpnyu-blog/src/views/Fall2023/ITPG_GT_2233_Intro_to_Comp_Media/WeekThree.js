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
        <Header>Week Three</Header>
        <Text>
          Really enjoyed this week's work as it gave me a chance to play around
          with interactions and really kind of figure out how to make them
          without relying too much on functions, allowing for more
          transferrable/translatable code to do more and just better
          understanding and possible applications overall.
          <br></br>
          <br></br>I got stuck on a couple of things, Question two has a
          flickering issue that I haven't got the chance to fix and I have some
          ideas from the homework prompt that I haven't gotten the chance to
          figure out.
        </Text>
        <Subheader>Worksheet Questions</Subheader>
        <Text>Answers to questions from Week Three's Worksheet</Text>
        <ExternalText>
          Question One — Divide the canvas into 3 columns. Make each column turn
          red when you hover over it.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/TjD6FyI8z
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(220);

  let colWidth = width / 3;

  if (mouseX < colWidth) {
    fill(255, 0, 0);
    rect(0, 0, colWidth, height);
  } else if (mouseX < 2 * colWidth) {
    fill(255, 0, 0);
    rect(colWidth, 0, colWidth, height);
  } else {
    fill(255, 0, 0);
    rect(colWidth * 2, 0, colWidth, height);
  }
}
             
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/TjD6FyI8z"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/TjD6FyI8z"
          height="50vh"
        />
        <ExternalText>
          Question Two — Challenge: Change the behavior so that when you mouse
          over a column, you turn it red and it stays red until the next time
          you mouse over it again, at which point the column goes back to white.
          (Just get this working for one column.)
        </ExternalText>

        <Text>
          Not quite sure why it is flickering here, I think it might be cause
          the mouse is being detected in a loop so it's always updating the
          color? I thought the states would fix it but maybe I'd have to
          introduce a second set of conditionals around the states to check if
          it is true, if true then stay true?
        </Text>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/LrjfwYxLy
let columnWidth;
let column1IsRed = false;
let column2IsRed = false;
let column3IsRed = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  columnWidth = width / 3;
}

function draw() {
  background(220);

  // Draw the first column
  if (mouseX >= 0 && mouseX <= columnWidth && mouseY >= 0 && mouseY <= height) {
    if (!column1IsRed) {
      fill(255, 0, 0); 
      column1IsRed = true;
    } else {
      fill(200); 
      column1IsRed = false;
    }
  } else if (column1IsRed) {
    fill(255, 0, 0);
  } else {
    fill(200); 
  }
  rect(0, 0, columnWidth, height);

  // Draw the second column
  if (mouseX >= columnWidth && mouseX <= 2 * columnWidth && mouseY >= 0 && mouseY <= height) {
    if (!column2IsRed) {
      fill(255, 0, 0); 
      column2IsRed = true;
    } else {
      fill(200); 
      column2IsRed = false;
    }
  } else if (column2IsRed) {
    fill(255, 0, 0); 
  } else {
    fill(200); 
  }
  rect(columnWidth, 0, columnWidth, height);

  // Draw the third column
  if (mouseX >= 2 * columnWidth && mouseX <= width && mouseY >= 0 && mouseY <= height) {
    if (!column3IsRed) {
      fill(255, 0, 0);
      column3IsRed = true;
    } else {
      fill(200);
      column3IsRed = false;
    }
  } else if (column3IsRed) {
    fill(255, 0, 0);
  } else {
    fill(200);
  }
  rect(2 * columnWidth, 0, columnWidth, height);
}
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/LrjfwYxLy"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/LrjfwYxLy"
          height="50vh"
        />
        <ExternalText>
          Question Three — Challenge: Code a slider widget by hand. As in, don’t
          use the p5 createSlider() function. Hint: Get started by writing out
          the logic in plain human language.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/HGWA6AUFA
let lineLength;
let lineY;
let circleX;
const circleRadius = 20;
let lineColor = 255;
let isDragging = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  lineY = height / 2;
  circleX = width / 2;
  lineLength = 0.5 * windowWidth;
}

function draw() {
  let bgColor = map(circleX, width / 2 - lineLength / 2, width / 2 + lineLength / 2, 0, 255);
  background(bgColor);

  lineColor = map(circleX, width / 2 - lineLength / 2, width / 2 + lineLength / 2, 255, 0);
  stroke(lineColor);
  strokeWeight(2);
  line(width / 2 - lineLength / 2, lineY, width / 2 + lineLength / 2, lineY);

  fill(255, 0, 0);
  noStroke();
  ellipse(circleX, lineY, circleRadius * 2);

  if (isDragging) {
    circleX = constrain(mouseX, width / 2 - lineLength / 2 + circleRadius, width / 2 + lineLength / 2 - circleRadius);
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, circleX, lineY);
  if (d < circleRadius) {
    isDragging = true;
  }
}

function mouseReleased() {
  isDragging = false;
}
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/HGWA6AUFA"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/HGWA6AUFA"
          height="50vh"
        />
        <ExternalText>
          Question Four — Draw a rectangle to the screen every half a second (it
          can be exact or approximate). In between, just draw the background.
          What information do you need to accomplish this?
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/MPjxQsu4J
let redSquareX, redSquareY;
let lastSquareTime = 0;
const squareInterval = 500;

function setup() {
  createCanvas(windowWidth, windowHeight);
  redSquareX = random(width);
  redSquareY = random(height);
}

function draw() {
  background(220);

  // Check if it's time to create a new square
  if (millis() - lastSquareTime >= squareInterval) {
    redSquareX = random(width);
    redSquareY = random(height);
    lastSquareTime = millis();
  }

  // Display the red square
  fill(255, 0, 0);
  rect(redSquareX, redSquareY, 50, 50); // Draw a red square at the specified coordinates
}
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/MPjxQsu4J"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/MPjxQsu4J"
          height="50vh"
        />
        <ExternalText>
          Question Five — Create a bouncing ball (You can build it while looking
          at a reference example or watching a video tutorial. Or see how far
          you get before checking the answer!)
        </ExternalText>

        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/TCviyB4nb
let x, y;
let xSpeed, ySpeed;
let radius = 25;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xSpeed = random(3, 5);
  ySpeed = random(3, 5);
}

function draw() {
  background(220);

  x += xSpeed;
  y += ySpeed;

  // Check for collisions with canvas edges
  if (x + radius > width || x - radius < 0) {
    xSpeed *= -1;
  }
  if (y + radius > height || y - radius < 0) {
    ySpeed *= -1;
  }

  fill(255, 0, 0);
  ellipse(x, y, radius * 2);
}         
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/TCviyB4nb"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/TCviyB4nb"
          height="50vh"
        />
        <ExternalText>
          Question Six — Challenge: Make the ball’s fill color bounce back and
          forth fading from white through gray to black and then back to white
          again. Challenge: Make the fill color bouncing back and forth sync up
          with the ball bouncing back and forth. Extra-challenge: Can you do it
          without using the map() function?
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/s8KvkVDwo
let x, y;
let xSpeed, ySpeed;
let radius = 25;
let colorChange 
function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  xSpeed = random(3, 5);
  ySpeed = random(3, 5);

function draw() {
  background(220);

  x += xSpeed;
  y += ySpeed;

  if (x + radius > width || x - radius < 0) {
    xSpeed *= -1;
    changeColor();
  }
  if (y + radius > height || y - radius < 0) {
    ySpeed *= -1;
    changeColor();
  }

  fill(colorChange);
  ellipse(x, y, radius * 2);

function changeColor() {
  if (colorChange === 0) {
    colorChange = 127; // Gray
  } else if (colorChange === 127) {
    colorChange = 255; // White
  } else {
    colorChange = 0; // Black
  }
}
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/s8KvkVDwo"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/s8KvkVDwo"
          height="50vh"
        />
        <ExternalText>
          Homework — Two roads diverged in a yellow wood, And sorry I could not
          travel both... Life is full of difficult choices, use conditional
          statements to control the flow of your programs. In general this week,
          you should work with rule-based animation, motion, and interaction.
          You can use the ideas below or invent your own scenario. Try making a
          rollover, button, or slider from scratch. Compare your code to these
          interface element examples. Later we'll look at how this compare to
          built-in "DOM" elements in the browser. Create an algorithmic design
          with simple parameters. (One example is 10PRINT, see: 10PRINT code
          example and this accompanying video. Tie the above two together and
          have an interface element control the visual design or behavior of
          other elements in your sketch.
        </ExternalText>
        <Text>
          When I read the poem, I associated the roads diverging with this
          recursive fractal tree visual that I've seen before on the coding
          train. As roads diverge it's similar to how the branches of a tree
          diverge, and with each branch it splits into more splits. And it's
          unique each time and it can only go the way it went. Sometimes they
          might "overlap" but they will never be the same as each other taking
          the same path or growing the same way.
          <br></br>
          <br></br>
          Based on the sketch from the coding train, I added some mouse
          interactions that would control it. Mouse pressed creates a split in
          the road and the mouse locations determines the angle and length of
          the roads. I wanted the drawing to stay drawn each time I mouse
          pressed to show that the paths are permanent but I could not quite
          figure out how to do it. Another idea I had was to have a random
          branch change colour each time to show that that was the road taken. I
          also wanted to animate the lines have them be drawn slowly with each
          press.
        </Text>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/7xI4bsbqI
        // Adapted from https://thecodingtrain.com/challenges/14-fractal-trees-recursive
        let angle = 0.1;
        let depth = 0;
        let len;
        let split = false;
        let initialLen;
        
        function setup() {
          createCanvas(windowWidth, windowHeight);
          initialLen = height / 1;
          len = initialLen;
        }
        
        function draw() {
          background(0);
          stroke(255);
          strokeWeight(2);
          translate(width * 0.5, height);
          branch(len, depth);
        
          if (split) {
            splitTree();
          }
        }
        
        function branch(len, depth) {
          line(0, 0, 0, -len);
          translate(0, -len);
        
          if (depth > 0) {
            push();
            rotate(angle);
            branch(len * 0.7, depth - 1);
            pop();
            push();
            rotate(-angle);
            branch(len * 0.7, depth - 1);
            pop();
          }
        }
        
        function splitTree() {
          depth++;
          split = false;
        }
        
        function mouseMoved() {
          len = map(mouseY, height, 0, height / 10, height);
          angle = map(mouseX, width, 0, width / 10, width);
        }
        
        function mousePressed() {
          split = true;
        }
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/7xI4bsbqI"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/7xI4bsbqI"
          height="50vh"
        />
      </div>
    </Container>
  )
}

export default WeekThree
