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
        <Text>
          This week's exercises were a good way for me to get back into
          animating the graphics drawn on p5.js. It was good to revisit things
          like calculating the location of objects drawn and setting up checkers
          to detect when they've reached a certain location and should change
          action. I also enjoyed the challenge of drawing making things move and
          interact with simple mouse interactions.
          <br></br>
          <br></br>I think the hardest part for me this week was just getting
          back into thinking about the location of things and the math behind
          that. I think I'm still a little rusty and need to practice more to
          get better at knowing how to calculate when things "hit" or is near a
          border.
        </Text>
        <Subheader>Worksheet Questions</Subheader>
        <Text>Answers to questions from Week Two's Worksheet</Text>
        <ExternalText>
          Question Two —
          <Links to="https://editor.p5js.org/icm4.0/sketches/lUwaSJS4V">
            https://editor.p5js.org/icm4.0/sketches/lUwaSJS4V
          </Links>
          - What are possible arguments for rect()? Come up with 2 sets.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/IvgcylTRJ
          function setup() {
            createCanvas(400, 400);
            // Arguments for rect 1
            // e.g. rect(topRightX, topRightY, bottomLeftX, bottomLeftY);
            rect(0,0, 10, 10);
            // Arguments for rect 2
            rect(20,20, 30, 30);
            // Come up with as many as you can think of!
            rect(40, 40, 50, 50);
            rect(60, 60, 70, 70);
            rect(80, 80, 90, 90);
            rect(100, 100, 110, 110);
            rect(120, 120, 130, 130);
            rect(140, 140, 150, 150);
          }         
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/IvgcylTRJ"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/IvgcylTRJ"
          height="450px"
        />
        <ExternalText>
          Question Two — Draw a rectangle in the middle of the screen that is
          half the width and half the height of the canvas. Write it so that you
          can change the size of the canvas and the rectangle will stay in the
          center and maintain its size relationship to the canvas.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/jEJTRm6ex
          let canvasWidth = 400;
let canvasHeight = 400;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  background(220);

  // Calculate the position and size of the rectangle
  let rectWidth = canvasWidth / 2;
  let rectHeight = canvasHeight / 2;
  let rectX = (canvasWidth - rectWidth) / 2;
  let rectY = (canvasHeight - rectHeight) / 2;

  // Draw the rectangle
  rect(rectX, rectY, rectWidth, rectHeight);
}
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/jEJTRm6ex"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/jEJTRm6ex"
          height="450px"
        />
        <ExternalText>
          Question 3 — Re-draw the rectangle using line(). Challenge: Write it
          so that you can easily change the location and size relationship with
          the canvas. Question 6 - Challenge: Move your rectangle from Q3
          towards the mouse.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/CwJBo-L9A
          let canvasWidth = 400;
          let canvasHeight = 400;
          let rectXdist = 25;
          let rectYdist = 25;
          let rectWidthDist = 50;
          let rectHeightDist = 50;
          
          function setup() {
            createCanvas(canvasWidth, canvasHeight);
          }
          
          function draw() {
            background(220);
          
            // Calculate the translation based on mouse position
            let translateX = mouseX - (canvasWidth / 2);
            let translateY = mouseY - (canvasHeight / 2);
          
            // Wrap the drawing in push and pop
            push();
            translate(translateX, translateY);
          
            let rectXpos = (canvasWidth * rectXdist) / 100;
            let rectYpos = (canvasHeight * rectYdist) / 100;
            let rectWidth = (canvasWidth * rectWidthDist) / 100;
            let rectHeight = (canvasHeight * rectHeightDist) / 100;
          
            // Draw the rectangle using lines
            line(rectXpos, rectYpos, rectXpos + rectWidth, rectYpos);
            line(rectXpos + rectWidth, rectYpos, rectXpos + rectWidth, rectYpos + rectHeight);
            line(rectXpos + rectWidth, rectYpos + rectHeight, rectXpos, rectYpos + rectHeight);
            line(rectXpos, rectYpos + rectHeight, rectXpos, rectYpos);
          
            pop();
          }
          
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/CwJBo-L9A"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/CwJBo-L9A"
          height="450px"
        />
        <ExternalText>
          Question 4 — Move a circle from the middle of the screen to the right
          side of the screen.<br></br>4A — Add 3 more, 1 moving left, 1 moving
          up, 1 moving down.<br></br>4B —Add 4 more, each moving towards each of
          the 4 corners of the canvas.<br></br>4C — Make one of your circles
          move 10 times faster than the other circles.<br></br>4D —Challenge:
          Re-write 4b. so if I change the width of the canvas, the circles still
          go to the corners without having to change any other code.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/eGiH_THsq

          let centerX;
          let centerY;
          
          let circleXright;
          let circleXleft;
          let circleYup;
          let circleYdown;
          
          let directionXright = 1;
          let directionXleft = 1;
          let directionYup = -1;
          let directionYdown = -1;
          
          let circleTopLeftX;
          let circleTopLeftY;
          let circleTopRightX;
          let circleTopRightY;
          let circleBottomLeftX;
          let circleBottomLeftY;
          let circleBottomRightX;
          let circleBottomRightY;
          
          let directionTopLeftX = 1;
          let directionTopLeftY = 1;
          let directionTopRightX = 1;
          let directionTopRightY = -1;
          let directionBottomLeftX = -1;
          let directionBottomLeftY = 1;
          let directionBottomRightX = -1;
          let directionBottomRightY = -1;
          
          let circleX;
          let circleY;
          let circleSpeed = 50;
          
          let speed = 5;
          
          function setup() {
            createCanvas(windowWidth, windowHeight);
          
            // Calculate the center of the canvas
            centerX = width / 2;
            centerY = height / 2;
          
            circleXright = centerX;
            circleYup = centerY;
            circleXleft = centerX;
            circleYdown = centerY;
          
            circleTopLeftX = centerX;
            circleTopLeftY = centerY;
            circleTopRightX = centerX;
            circleTopRightY = centerY;
            circleBottomLeftX = centerX;
            circleBottomLeftY = centerY;
            circleBottomRightX = centerX;
            circleBottomRightY = centerY;
          
            circleX = random(width);
            circleY = random(height);
          }
          
          function draw() {
            background(100, 100, 100);
          
            // Circle Right
            push();
            stroke(0, 0, 0);
            strokeWeight(10);
            noFill();
            circle(circleXright, centerY, 100);
            pop();
          
            // Circle Up
            push();
            stroke(255, 0, 0);
            strokeWeight(10);
            noFill();
            circle(centerX, circleYup, 100);
            pop();
          
            // Circle Left
            push();
            stroke(0, 255, 0);
            strokeWeight(10);
            noFill();
            circle(circleXleft, centerY, 100);
            pop();
          
            // Circle Down
            push();
            stroke(0, 0, 255);
            strokeWeight(10);
            noFill();
            circle(centerX, circleYdown, 100);
            pop();
          
            // Circle Top Left
            push();
            stroke(255, 255, 0);
            strokeWeight(10);
            noFill();
            circle(circleTopLeftX, circleTopLeftY, 100);
            pop();
          
            // Circle Top Right
            push();
            stroke(0, 255, 255);
            strokeWeight(10);
            noFill();
            circle(circleTopRightX, circleTopRightY, 100);
            pop();
          
            // Circle Bottom Left
            push();
            stroke(255, 0, 255);
            strokeWeight(10);
            noFill();
            circle(circleBottomLeftX, circleBottomLeftY, 100);
            pop();
          
            // Circle Bottom Right
            push();
            stroke(255, 255, 255);
            strokeWeight(10);
            noFill();
            circle(circleBottomRightX, circleBottomRightY, 100);
            pop();
          
            circleXright += speed * directionXright;
            circleXleft += speed * directionXleft;
            circleYup += speed * directionYup;
            circleYdown += speed * directionYdown;
          
            circleTopLeftX += speed * directionTopLeftX;
            circleTopLeftY += speed * directionTopLeftY;
            circleTopRightX += speed * directionTopRightX;
            circleTopRightY += speed * directionTopRightY;
            circleBottomLeftX += speed * directionBottomLeftX;
            circleBottomLeftY += speed * directionBottomLeftY;
            circleBottomRightX += speed * directionBottomRightX;
            circleBottomRightY += speed * directionBottomRightY;
          
            // Check and change directions for each circle
            if (circleXright >= width - 50) {
              directionXright = -1;
            } else if (circleXright <= centerX) {
              directionXright = 1;
            }
          
            if (circleXleft <= 50) {
              directionXleft = 1;
            } else if (circleXleft >= centerX) {
              directionXleft = -1;
            }
          
            if (circleYup <= 50) {
              directionYup = 1;
            } else if (circleYup >= centerY) {
              directionYup = -1;
            }
          
            if (circleYdown >= height - 50) {
              directionYdown = -1;
            } else if (circleYdown <= centerY) {
              directionYdown = 1;
            }
          
            // Diagonals
            if (circleTopLeftX <= 50 || circleTopLeftY <= 50) {
              directionTopLeftX = 1; // Change direction to right
              directionTopLeftY = 1; // Change direction to down
            } else if (circleTopLeftX >= centerX || circleTopLeftY >= centerY) {
              directionTopLeftX = -1; // Change direction to left
              directionTopLeftY = -1; // Change direction to up
            }
          
            if (circleTopRightX >= width - 50 || circleTopRightY <= 50) {
              directionTopRightX = -1; // Change direction to left
              directionTopRightY = 1; // Change direction to down
            } else if (circleTopRightX <= centerX || circleTopRightY >= centerY) {
              directionTopRightX = 1; // Change direction to right
              directionTopRightY = -1; // Change direction to up
            }
          
            if (circleBottomLeftX <= 50 || circleBottomLeftY >= height - 50) {
              directionBottomLeftX = 1; // Change direction to right
              directionBottomLeftY = -1; // Change direction to up
            } else if (circleBottomLeftX >= centerX || circleBottomLeftY <= centerY) {
              directionBottomLeftX = -1; // Change direction to left
              directionBottomLeftY = 1; // Change direction to down
            }
          
            if (circleBottomRightX >= width - 50 || circleBottomRightY >= height - 50) {
              directionBottomRightX = -1; // Change direction to left
              directionBottomRightY = -1; // Change direction to up
            } else if (circleBottomRightX <= centerX || circleBottomRightY <= centerY) {
              directionBottomRightX = 1; // Change direction to right
              directionBottomRightY = 1; // Change direction to down
            }
          
            // White Circle at 10x Speed
          
            push();
            noStroke();
            fill(255, 255, 255);
            circle(circleX, circleY, 50);
            pop();
          
            circleX += random(-circleSpeed, circleSpeed);
            circleY += random(-circleSpeed, circleSpeed);
          
            circleX = constrain(circleX, 0, width);
            circleY = constrain(circleY, 0, height);
          
            if (mouseIsPressed) {
              circleX = mouseX;
              circleY = mouseY;
            }
          }
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/eGiH_THsq"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/eGiH_THsq"
          height="450px"
        />
        <ExternalText>
          Homework — Consider the following cliches / pearls of wisdom: No man
          is an island. There is no such thing as a new idea. Everything is
          related to everything else. It’s all relative. The world is defined
          through relationships and those relationships shape our perspectives.
          Use variables to build in some relationships between two or more
          elements in your sketch and think about how the perception of what’s
          happening is different depending on which element's perspective you
          take on. Think about: What’s related to what? How are they related? Is
          it a positive or negative relationship? Example sketch. Is it an
          amplifying or diminishing relationship? Example sketch. You should
          definitely take a mathematical approach to answering these questions
          but you can also take a figurative, metaphorical approach. The
          elements common to all of your sketches are: position, dimensions,
          stroke thickness, color values. Can you relate one or more of these
          elements to: itself over time (so it changes over time) a different
          element in your sketch frameCount (which frame of animation is now)
          mouseX or mouseY or the combined (mouseX, mouseY) mouse position or
          something else! You can revisit your self-portrait to build
          relationships (link the eyeballs together!) or create something new.
        </ExternalText>
        <Text>
          Added Moving eyes according to mouse location, mouseclick opens and
          closes mouth and nose breathing is animated.
        </Text>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/M5vEPFKAJY
          let mouthOpen = true;
          let noseY = 450;
          
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
            stroke("#000000");
            strokeWeight(5);
            fill("#000000");
            ellipse(400, 1000, 1000, 1200);
            rect(400, 800, 55, 55, 20);
            pop();
            push();
            stroke("#000000");
            strokeWeight(5);
            fill("#ffffff");
            ellipse(400, 1100, 600, 1400);
            pop();
            push();
            stroke("#ffffff");
            strokeWeight(5);
            fill("#000000");
            ellipse(400, 1350, 600, 1600);
            pop();
          
            // Hair
            push();
            stroke("#000000");
            strokeWeight(5);
            fill("#000000");
            ellipse(400, 400, 500, 600);
            pop();
          
            // Head
            push();
            stroke("#000000");
            strokeWeight(5);
            ellipse(400, 430, 500, 475);
            pop();
          
            // Eyebrows
            push();
            stroke("#000000");
            strokeWeight(5);
            fill("#000000");
            ellipse(300, 360, 120, 50);
            ellipse(500, 360, 120, 50);
            pop();
          
            // Eyes
            push();
            stroke("#000000");
            strokeWeight(5);
            ellipse(300, 375, 100, 50);
            ellipse(500, 375, 100, 50);
            pop();
          
            // Calculate the eye boundaries
            let eyeLeftX = 300 - 50;
            let eyeRightX = 400 - 50;
            let eyeY = 375;
            let eyeRadius = 25;
          
            let eyeballX = constrain(mouseX, eyeLeftX + eyeRadius, eyeRightX - eyeRadius);
          
            // Eyeballs
            push();
            fill("#000000");
            circle(eyeballX, eyeY, 50);
            circle(eyeballX + 200, eyeY, 50);
            pop();
          
            // Ears
            push();
            stroke("#000000");
            strokeWeight(5);
            ellipse(150, 420, 50, 120);
            ellipse(650, 420, 50, 120);
            pop();
            push();
            fill("#000000");
            ellipse(155, 430, 40, 80);
            ellipse(645, 430, 40, 80);
            pop();
          
            let breathing = sin(frameCount * 0.02) * 5;
          
            // Nose
            push();
            stroke("#000000");
            strokeWeight(5);
            fill("#000000");
            rect(350, noseY + breathing, 100, 25, 20);
            rect(345, 430, 110, 40, 50, 50, 20, 20);
            rect(370, 410, 60, 30, 20, 20, 0, 0);
            pop();
          
            // Nostrils
            push();
            stroke("#000000");
            strokeWeight(5);
            fill("#ffffff");
            ellipse(425, 465 + breathing, 35, 25);
            ellipse(375, 465 + breathing, 35, 25);
            pop();
          
            // Stache
            push();
            stroke("#000000");
            strokeWeight(5);
            fill("#000000");
            ellipse(400, 550, 225, 100);
            pop();
          
            // Mouth
            if (mouthOpen) {
              ellipse(400, 550, 225, 35);
            } else {
              // Draw a closed mouth
            }
          }
          
          function mouseClicked() {
            // Toggle the mouth open/close state on mouse click
            mouthOpen = !mouthOpen;
          }
                 
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/M5vEPFKAJY"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/M5vEPFKAJY"
          height="1050px"
        />
      </div>
    </Container>
  )
}

export default BlogPost
