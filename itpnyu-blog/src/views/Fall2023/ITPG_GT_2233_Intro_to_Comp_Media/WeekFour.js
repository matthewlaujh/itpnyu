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
        <Header>Week Four</Header>
        <Quotes>
          My ego was appropriately deflated. Up until that moment, I took pride
          in my ability to get work done by sheer brute force—manually. But I
          realized that if I instead could think in LOOPS the way a computer
          natively thinks, it could get my work done with
          elegance—automatically. It just required me to learn the right way to
          formulate a repetitive task for the computer. — John Maeda, How To
          Speak Machine p.11.
        </Quotes>
        <Text>
          I. LOVE. LOOPS. This week reminded me of the first chapter of John
          Maeda's How to Speak Machine (it was actually one of the two books I
          brought to re-read on my flight to New York while moving here (the
          other being Radical Technologies by Adam Greenfield), although I've
          read it like 2 and half times and some things still just go over my
          head, but LOOPS, LOOPS are great). I think it's because like Maeda, I
          used to believe in brute forcing things and just getting things done
          no matter what and no matter how much work it takes. But learning
          loops has taught me that well Machines are here to help, why bother
          trying to brute force it when we could do things automatically. Which
          also reminded me of what one of my early design lecturers said when
          teaching us how to use design tools like Illustrator or Photoshop —
          "If you find yourself doing a repetitive task that is taking up more
          time than you expect it would, you're using the tool wrong", which I
          guess applies here as well as with any computer aided tasks. I wish
          humans could auto run loops as well, imagine how much more we could
          get done.
        </Text>
        <Subheader>Worksheet Questions</Subheader>
        <Text>Answers to questions from Week Four's Worksheet</Text>
        <ExternalText>
          Question One A — Create 20 columns that turn red only when you hover
          over the column. Do it without a loop.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={` // https://editor.p5js.org/matthewlaujh-itpnyu/sketches/xTzWBZmiR
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let colWidth = width / 20;

  if (mouseX < colWidth) {
    fill(255, 0, 0);
    rect(0, 0, colWidth, windowHeight);
  } else if (mouseX < 2 * colWidth) {
    fill(255, 0, 0);
    rect(colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 3 * colWidth) {
    fill(255, 0, 0);
    rect(2 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 4 * colWidth) {
    fill(255, 0, 0);
    rect(3 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 5 * colWidth) {
    fill(255, 0, 0);
    rect(4 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 6 * colWidth) {
    fill(255, 0, 0);
    rect(5 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 7 * colWidth) {
    fill(255, 0, 0);
    rect(6 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 8 * colWidth) {
    fill(255, 0, 0);
    rect(7 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 9 * colWidth) {
    fill(255, 0, 0);
    rect(8 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 10 * colWidth) {
    fill(255, 0, 0);
    rect(9 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 11 * colWidth) {
    fill(255, 0, 0);
    rect(10 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 12 * colWidth) {
    fill(255, 0, 0);
    rect(11 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 13 * colWidth) {
    fill(255, 0, 0);
    rect(12 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 14 * colWidth) {
    fill(255, 0, 0);
    rect(13 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 15 * colWidth) {
    fill(255, 0, 0);
    rect(14 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 16 * colWidth) {
    fill(255, 0, 0);
    rect(15 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 17 * colWidth) {
    fill(255, 0, 0);
    rect(16 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 18 * colWidth) {
    fill(255, 0, 0);
    rect(17 * colWidth, 0, colWidth, windowHeight);
  } else if (mouseX < 19 * colWidth) {
    fill(255, 0, 0);
    rect(18 * colWidth, 0, colWidth, windowHeight);
  } else {
    fill(255, 0, 0);
    rect(19 * colWidth, 0, colWidth, windowHeight);
  }
}

`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/xTzWBZmiR"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/xTzWBZmiR"
          height="50vh"
        />
        <ExternalText>
          Question One B — Create 20 columns that turn red only when you hover
          over the column. Do it with a for loop.
        </ExternalText>

        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/zuBccNBNN
function setup() {
  createCanvas(windowWidth, windowHeight);
}
 
function draw() {
  background(220);
 
  let columns = 20;
  let colWidth = windowWidth / columns;
 
  for (let i = 0; i < columns; i++) {
    if (mouseX >= i * colWidth && mouseX < (i + 1) * colWidth) {
      fill(255, 0, 0);
    } else {
      noFill();
      stroke(0);
    }
    rect(i * colWidth, 0, colWidth, windowHeight);
  }
}
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/zuBccNBNN"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/zuBccNBNN"
          height="50vh"
        />
        <ExternalText>
          Question One C — Create 20 columns that turn red only when you hover
          over the column. Do it with a while loop.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/L9QojI-49
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let columns = 20;
  let colWidth = windowWidth / columns;
  let i = 0;

  while (i < columns) {
    if (mouseX >= i * colWidth && mouseX < (i + 1) * colWidth) {
      fill(255, 0, 0);
    } else {
      noFill();
      stroke(0);
    }
    rect(i * colWidth, 0, colWidth, windowHeight);
    i++;
  }
}
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/L9QojI-49"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/L9QojI-49"
          height="50vh"
        />
        <ExternalText>
          Question Two A — Create 20 columns that turn red only when you hover
          over the column. Skip over col #7.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/2dqKr7N_4
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let columns = 20;
  let colWidth = windowWidth / columns;

  for (let i = 0; i < columns; i++) {
    if (i !== 6) {
      if (mouseX >= i * colWidth && mouseX < (i + 1) * colWidth) {
        fill(255, 0, 0);
      } else {
        noFill();
        stroke(0);
      }
      rect(i * colWidth, 0, colWidth, windowHeight);
    }
  }
}
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/2dqKr7N_4"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/2dqKr7N_4"
          height="50vh"
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
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/CqPfkXFPG"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/CqPfkXFPG"
          height="50vh"
        />
        <ExternalText>
          Question Two C — Create 20 columns that turn red only when you hover
          over the column. Make every other column blue.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/fX-ttS_XF
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let columns = 20;
  let colWidth = windowWidth / columns;

  for (let i = 0; i < columns; i++) {
    if (mouseX >= i * colWidth && mouseX < (i + 1) * colWidth) {
      if (i % 2 === 0) {
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
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/fX-ttS_XF"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/fX-ttS_XF"
          height="50vh"
        />

        <ExternalText>
          Question Two D — Create 20 columns that turn red only when you hover
          over the column. Make every column a different color.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ySQRu6xUf
let columnColors = []; // Array to store colors for each column

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  let columns = 20;
  let colWidth = windowWidth / columns;

  for (let i = 0; i < columns; i++) {
    if (mouseX >= i * colWidth && mouseX < (i + 1) * colWidth) {
      if (!columnColors[i]) {
        columnColors[i] = color(random(255), random(255), random(255));
      }
      fill(columnColors[i]);
    } else {
      noFill();
      stroke(0);
    }

    rect(i * colWidth, 0, colWidth, windowHeight);
  }
}
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/ySQRu6xUf"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ySQRu6xUf"
          height="50vh"
        />
        <ExternalText>
          Question Three — Create a grid of 100 cells that turn red when you
          hover over them.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/hOjXYphEu
let cols = 10;
let rows = 10;
let spacing;

function setup() {
  createCanvas(400, 400);
  spacing = width / cols;
}

function draw() {
  background(220);

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      if (mouseX >= x && mouseX < x + spacing && mouseY >= y && mouseY < y + spacing) {
        fill(255, 0, 0);
      } else {
        fill(0);
        stroke(255);
      }
      square(x, y, spacing);
    }
  }
}

  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/hOjXYphEu"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/hOjXYphEu"
          height="50vh"
        />

        <ExternalText>
          Question Four — Challenge: Create a checkerboard grid of 100 cells.
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ZjVSyda81
let cols = 10;
let rows = 10;
let spacing;

function setup() {
  createCanvas(400, 400);
  spacing = width / cols;
}

function draw() {
  background(220);

  for (let x = 0; x < width; x += spacing) {
    for (let y = 0; y < height; y += spacing) {
      if (((x / spacing) + (y / spacing)) % 2 === 0) {
        fill(0);
      } else {
        fill(255);
      }
      stroke(255);
      square(x, y, spacing);
    }
  }
}

  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/ZjVSyda81"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ZjVSyda81"
          height="50vh"
        />
        <ExternalText>
          Question Five — Challenge: (If you’ve watched the videos for next week
          on functions...) How might you make something loop without using a for
          loop or a while loop?
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ryLKKnOSh
let y = 0;
let x = 0;
let spacing = 50;

function setup() {
  createCanvas(400, 400);
  background(0);
  frameRate(30);
}

function draw() {
  drawX();
}

function drawX() {
  let bright = random(255);
  fill(bright);
  x = x + spacing;
  y = y + spacing;

  if (x >= width) {
    x = 0;
  }
  x++;

  if (y >= height) {
    y = 0;
  }
  y++;
  square(x, y, spacing);
}

  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/ryLKKnOSh"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/ryLKKnOSh"
          height="50vh"
        />
        <ExternalText>
          Homework — Our ability to see patterns is what makes us human. However
          we also see patterns where none exist because our brains are biased
          towards detecting certain kinds of patterns over others (e.g. faces).
          Create a pattern by making something with a lot of repetition. Is the
          resulting pattern easy to see or hard to see? What would it mean to
          create the illusion of pattern? Can you predict what the pattern will
          be when you run your code or does it surprise you? You could take
          something you've already done where there was a lot of repetition in
          the code (e.g. your self-portrait) and see if you can re-write it
          using a loop so that instead of 28 lines of code that call rect(), you
          have 1 line of code calls rect() inside of a loop that goes around 28
          times. How do you need to rework the way you position that rect() in
          order to make it work in a loop? Try creating an algorithmic design
          with simple parameters. (Feel free to continue exploring 10PRINT, but
          now using a for or while loop!
        </ExternalText>
        <Text>
          Since I skipped out on trying 10PRINT last week, decided to try it
          this week but instead of lines using alphabets. I also decided to
          leave a bunch of things to chance and made most parameters random
          (within reason), to create a slightly more interesting pattern. Well,
          I'm not quite sure if you could still call this a pattern but it kind
          of reminds me of like a whiteboard in a kindergarten classroom with
          magentic alphabets that kids would move around.
          <br></br>
          <br></br>
          Technically wise, I'm can't remember if we've covered arrays in this
          class, but I tried using a string and couldn't quite figure out how to
          get it to pick random characters out of it, so I ended up using an
          array instead which made it easier to pick random characters out of it
          by just using "Random".
        </Text>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/1Gmj-0c_C
let x = 0;
let y = 0;
let minSpacing = 10;
let maxSpacing = 50;
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  frameRate(30);
}

function draw() {
  fill(random(255), random(255), random(255));
  
  let char = random(alphabet);
  let spacing = random(minSpacing, maxSpacing);
  textSize(spacing);
  
  push();
  translate(x + spacing / 2, y + spacing / 2);
  rotate(random(TWO_PI));
  text(char, 0, 0);
  pop();
  
  x += spacing;
  
  if (x > width) {
    x = 0;
    y += spacing;
    if (y > height) {
      background(255);
      y = 0;
    }
      }
}          
  `}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/1Gmj-0c_C"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/1Gmj-0c_C"
          height="50vh"
        />
      </div>
    </Container>
  )
}

export default WeekThree
