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

const WeekSix = () => {
  return (
    <Container>
      <div>
        <Header>Week Six</Header>
        <Text>
          Took some time to work on a new sketch for this week. I have this
          gradient animation on
          <Links to="https://www.matthewlaujh.com">my portfolio site</Links>
          that has a gradient with a slitscan-like effect that moves in the
          background and the direction is affected by the mouse movement. I've
          been trying to recreate this for the longest time using an image and
          pixel manipulating but I've never quite had success. I also wanted to
          create one for my ITP Blog background and this is my chance to get
          started on it.
          <br></br>
          <br></br>
          After going through the last few weeks of ICM I realised like I could
          actually draw this sketch out and not use images and pixels. So I put
          together the things taught in the last few weeks and got something
          decent working. But I managed to use aspects of what we've learnt from
          Objects, Arrays and Loops down to just drawing shapes and animating
          them. It's not quite what I want yet, like it's too clean and
          polished, it should have like some noise/grain as well as more
          blending between each wave and I have not started on the interaction
          yet but I think this is a decent starting point and I can continue
          refining it more down the road.
        </Text>
        <ExternalText>
          Prepare a short presentation of one of your sketches. You can focus on
          what's happening in your sketch computationally. Clarify the
          vocabulary. Plan in advance what you're going to say and prepare any
          diagrams that will help you explain what's going on. See Mimi's demo
          video (It is much longer than the time you will have!) Take your time
          to demo the sketch. Discuss something you learned in making your
          sketch. Feel free to talk about what programming concept(s) you are
          using (e.g. objects and arrays, nested for loops, toggle logic,
          portable functions) What sketch should you prepare? Take this
          opportunity to clean-up your code. You are welcome to pick a previous
          assignment. You don’t even need to add any functionality! Add
          descriptive comments. Carefully name your variables and functions.
          Remove unnecessary repetition. Another idea is to mash up a couple of
          your past assignments into a new sketch. You are not required to work
          with objects and arrays, but you could consider re-organizing a
          previous sketch into objects or creating a new one based on the
          "particle system" concepts explored in class. One idea is to augment
          this Confetti Party! How might you re-organize your sketch and break
          down the elements into classes. Can they be the "smallest functional
          units" possible? Are the objects interactive? Do they "communicate"
          with each other?
        </ExternalText>
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/0JkMHLlcy
// Declare variables globally to be accessible throughout the sketch

// Classes
let waveClass;

// Colours
let purple;
let ultraviolet;
let startColor;
let endColor;

// Animation Variables
let waveHeight;
let waveMovementSpeed;
let waveColourSpeed;

function setup() {
  // Initialize the canvas dimensions
  createCanvas(windowWidth, windowHeight);

  // Call functions to Initialize variables
  initializeVariables();

  // Create an instance of the class
  waveClass = new WaveClass();
}

function draw() {
  // Update the background color based on time
  updateBackground();

  // Update the position of rectangles
  waveClass.update();

  // Display the rectangles on the canvas
  waveClass.display();
}

function initializeVariables() {
  purple = color(87, 6, 140); // Purple Color
  ultraviolet = color(137, 0, 225); // Ultraviolet Color
  waveHeight = windowHeight / 8; // Size of Wave
  waveMovementSpeed = 3; // Speed of Wave movemnt
  waveColourSpeed = 1; // Speed of Wave lerp between the two colors.
}

function updateBackground() {
  // Use the sin function and millis function to Update a bgAnimation over time
  let bgAnimation = (sin(millis() * 0.001) + 1) / 2; // Oscillates between 0 and 1 over time

  // Assign a new color value by interpolating between Purple and Ultraviolet
  let bgColor = lerpColor(purple, ultraviolet, bgAnimation);

  // Use the bgColor value to update the background color
  background(bgColor);
}

// Define the MovingWaves class
class MovingWaves {
  constructor(startColor, endColor, startWave, waveHeight, waveMovementSpeed, waveColourSpeed) {
    // Assign values to properties of the MovingWaves object
    this.width = windowWidth;
    this.height = waveHeight;
    this.y = startWave;
    this.speed = waveMovementSpeed;
    this.waveColourSpeed = waveColourSpeed;
    this.startColor = startColor;
    this.endColor = endColor;
  }

  display() {
    // Use variables to calculate the lerpFactor based on the wave's y position
    let colorAnimation = map(this.y, 0, windowHeight, 0, this.waveColourSpeed);

    // Assign a new color value by interpolating between startColor and endColor
    let col = lerpColor(this.startColor, this.endColor, colorAnimation);

    // Use the col value to set the fill color, then display the wave
    fill(col);
    noStroke();
    rect(0, this.y, this.width, this.height);
  }

  move() {
    // Update the y position of the wave based on its speed
    this.y += this.speed;
    if (this.y > windowHeight) {
      this.y = -this.height;
    }
  }
}

// Define the WaveClass
class WaveClass {
  constructor() {
    // Initialize an empty array to hold waves
    this.waves = [];

    // Use a for loop to define the color animation of waves
    let numwaves = windowHeight / waveHeight; // Calculate the number of waves needed to fill the screen
    for (let i = 0; i < numwaves; i++) {
      let startWave = i * waveHeight; // Adjusted startWave position
      if (i % 2 === 0) {
        // Alternate colors based on the index
        startColor = purple;
        endColor = ultraviolet;
      } else {
        startColor = ultraviolet;
        endColor = purple;
      }
      // Create an instance of the movingWaves class and add it to the waves array
      this.waves.push(
        new MovingWaves(
          startColor,
          endColor,
          startWave,
          waveHeight,
          waveMovementSpeed,
          waveColourSpeed
        )
      );
    }
  }

  update() {
    // Use a for loop to Update each wave's position
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].move();
    }
  }

  display() {
    // Use a for loop to display each wave
    for (let i = 0; i < this.waves.length; i++) {
      this.waves[i].display();
    }
  }
}

`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/0JkMHLlcy"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/0JkMHLlcy"
          height="50vh"
        />
      </div>
    </Container>
  )
}

export default WeekSix
