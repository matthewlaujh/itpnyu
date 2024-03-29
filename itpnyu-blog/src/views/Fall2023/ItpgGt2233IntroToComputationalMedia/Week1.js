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
          Write a blog post about how you anticipate computation applying to
          your interests. This could be a subject you've studied, a job you've
          worked, a personal hobby, or a cause you care about. What projects do
          you imagine making this term? What projects do you love? (You can
          review and contribute to the ICM Inspiration Wiki page). In the same
          post (or a new one), document the process of creating your sketch.
          What pitfalls did you run into? What could you not figure out how to
          do? How was the experience of using the web editor?
        </ExternalText>
        <Text>
          Coming from a design communications background from diploma, I went
          back and did it again for my undergrad but something always didn't
          feel quite right or something was lacking, until one of my
          supervisors, Andreas Schlegel (He has also contributed libraries for
          processing and p5.js) in school at LASALLE, showed me p5.js and
          Processing. They were trying something new that year I went back
          (2020), and luckily they did cause that just introduced a whole new
          world computation in design that I was never quite aware of. They
          introduced computation in design and actually asides from the course
          material they developed, they also recommended The Coding Train.
          <br></br>
          <br></br>
          From then on I always searched "Computation Concept" + The Coding
          Train on youtube, even before google or stackoverflow. I learnt a lot
          from Andreas and also The Coding Train, but I've always absorbed the
          information in bits and pieces, in kind of a "hacky" way. Where I only
          learnt what I needed to get what I wanted done. I've never had
          "formal" training so much of my basics and foundations are shaky at
          best and I thought going through the whole of ICM would be a good way
          just to reinforce the fundamentals that I've picked up. I'm not too
          good with using for p5.js for illustration but I've mainly used it for
          interfacing with hardware and more generative work.
          <br></br>
          <br></br>
          Since undergrad I've been exploring the intersection of computation
          and design and well my tools shifted, I started using p5.js and
          Processing (as well as Arduino) for most of my work through undergrad
          and even when I was working for a bit doing Creative Technology in
          Advertising and Consulting. I didn't quite want to use traditional
          design tools anymore. I really love looking at computational tools and
          I still love design, so I think I would love to be able to build some
          fun and functional tools for designing. Some tools and work that I
          really like are
          <Links to="https://www.schultzschultz.com/tools.html">
            Schultz Schultz's typography tools
          </Links>
          ,<Links to="https://cotton.design/launch/">Talia Cotton's Work</Links>
          ,
          <Links to="https://www.eliashanzer.com/phase/">
            Elias Hanzer's Phase
          </Links>
          and
          <Links to="https://spacetypegenerator.com/">
            Space Type Generator
          </Links>
          . Or even for augmenting and changing design processes
          <Links to="https://www.itsnicethat.com/news/wieden-and-kennedy-formula-1-custom-software-digital-151220">
            F1 Custom Design Software by Wieden and Kennedy
          </Links>
          Computation in design just opens so many new and fun opportunities to
          approach design. So I would like to focus on making tools or some kind
          of augment to a design process in ICM this semester.
        </Text>
        <Subheader>Worksheet Questions</Subheader>
        <Text>Answers to questions from Week One's Worksheet</Text>
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
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2233-introtocompmedia-images/itpg-gt-2233-introtocompmedia-weekOne-referenceImage.png"
          alt="Reference Image Provided."
        />
        <Text>
          I decided to download and sketch the image out in Illustrator to be as
          precise as possible being able to calculate the pixel location and
          sizes of the elements in the image. This also allowed me to get the
          colour codes.
        </Text>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2233-introtocompmedia-images/itpg-gt-2233-introtocompmedia-weekOne-w1q3.jpg"
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
  )
}

export default BlogPost
