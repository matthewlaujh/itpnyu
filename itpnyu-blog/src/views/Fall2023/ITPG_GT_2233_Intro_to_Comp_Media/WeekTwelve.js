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

const WeekTwelve = () => {
  return (
    <Container>
      <div>
        <Header>Week Ten</Header>
        <ExternalText>
          Complete your end of semester sketch and prepare to present in class
          next week! See Week 5 below for guidelines. Prepare (which means
          rehearse!) a 5 minute presentation to demonstrate what your project
          does that emphasizes its computational aspects. Some ideas that might
          help: How to create a first-person perspective demo of your project.
          Post documentation in the form of a blog post. It's up to you to
          figure out how to best document your project, here are some loose
          guidelines if you aren't sure what to include. Title Sketch link One
          sentence description Project summary (250-500 words) Inspiration: How
          did you become interested in this idea? Audience/Context: Who is this
          for? How will people experience it? Code references: What examples,
          tutorials, references did you use to create the project? Next steps:
          If you had more time to work on this, what would you do next?
        </ExternalText>
        <Text>
          Decided to further improve the sketch from mid-terms but make it
          closer to what I had envisioned and use some of the new things taught
          in the second half of the semester like loading JSON data, but also
          some old things like mouse interactions. This sketch is called Color
          Waves (really original I know) and I as mentioned during mid-terms
          this was inspired by the background of my portfolio site that was
          built on cargo where they had a slit-scan effect that I applied over a
          gradient color image creating this effect. For the longest time I've
          wanted to recreate that in p5.js so that eventually I can take my
          website off cargo and build in from the scratch. I used this blog to
          learn react in hopes of building my own site, and this p5.js sketch
          assignment is also part of that, where ideally I'll be able to
          recreate how my current website looks like but add more features that
          cargo.site did not have. And I think the work I've done this semester
          for blog and ICM will help alot with that goal, I might even be able
          to build it during the winter break. The Color Waves were just meant
          to be a non-disruptive background animation for the homepage of my
          site, that is interesting enough a background to keep viewers
          interested but not too distracting so that they can look at my work.
          <br></br>
          <br></br>
          Also to be completely honest I didn't follow any tutorials for this
          sketch but I used a combination of github copilot, chatgpt and hi to
          p5js to aid in the coding process. This was a good exercise in
          augmented coding and it did a pretty good job in helping me reach my
          goal for the sketch, however there were a couple of issues that I
          could not quite resolve. One of them is that the top of the first wave
          and bottom of the last wave do not recognise each other and have
          different colour points of the gradient so that causes a solid line
          that is pretty distracting moving around the screen. So if I had more
          time that is something that I would love to be able to fix then I can
          truly say that I reached the end goal of the sketch.
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/FQtE3kNSG"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/full/FQtE3kNSG"
          height="50vh"
        />
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/edit/FQtE3kNSG
          // Global variable declarations for accessibility throughout the sketch
          // Classes
          let waveClass; // Declare a variable to hold an instance of the WaveClass
          
          // Colours
          let color1, color2; // Declare variables for primary colors used in waves
          let startColor, endColor; // Declare variables to define start and end colors for gradient
          
          // Animation 
          let waveHeight; // Declare a variable for the height of the wave
          let waveMovementSpeed; // Declare a variable for controlling the speed of wave movement
          let waveColourSpeed; // Declare a variable for the speed at which the wave color changes
          
          // Mouse Interaction
          let prevMouseY; // Declare a variable to keep track of the previous mouse Y position
          
          function preload() {
            loadJSON("pantoneColorData.json", pickRandomColors); // Preload function to load color data from a JSON file
          }
          
          function setup() {
            // Initialize the canvas with dynamic dimensions
            createCanvas(windowWidth, windowHeight);
          
            // Call function to initialize variabless
            initializeVariables();
          
            // Create an instance of the WaveClass
            waveClass = new WaveClass();
            
            // Set the initial value of prevMouseY to the current mouse Y position
            prevMouseY = mouseY;
            
            noStroke();
          }
          
          function draw() {
            // Update and display the wave animations
            waveClass.update();
            waveClass.display();
          
            // Draw a fading overlay on the canvas
            drawFadingOverlay();
            
            // Handle mouse interactions for dynamic wave behavior
            handleMouseInteraction();
            
            // Smoothening the wave movement to slow it down over time
            if (waveMovementSpeed !== waveColourSpeed) {
              waveMovementSpeed *= 0.9; // Apply a smoothening factor to the wave movement speed
            }
          }
          
          function initializeVariables() {
            // Assign initial values to animation variables
            waveHeight = windowHeight / 8; // Set the wave height relative to the window height
            waveMovementSpeed = 3; // Initialize the wave movement speed
            waveColourSpeed = 1; // Initialize the speed of wave color transition
          }
          
          function drawFadingOverlay() {
            // Create a dynamic fading effect over the canvas
            let alpha = (sin(millis() * 0.001) + 1) / 2; // Generate a value that oscillates over time
            alpha = map(alpha, 1, 0, 0, 126); // Map alpha to a range suitable for color transparency
          
            // Interpolate between two colors for the overlay
            let overlayColor = lerpColor(color1, color2, alpha);
            overlayColor.setAlpha(alpha); // Set the alpha component of the color for transparency
          
            // Apply the color as fill and draw a rectangle covering the entire canvas
            fill(overlayColor);
            rect(0, 0, windowWidth, windowHeight);
          }
          
          class MovingWaves {
            // Constructor to initialize a MovingWaves object
            constructor(
              startColor,
              endColor,
              startWave,
              waveHeight,
              waveMovementSpeed,
              waveColourSpeed
            ) {
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
              // Create and display a vertical gradient for each wave
              for (let j = this.y; j < this.y + this.height; j++) {
                let inter = map(j, this.y, this.y + this.height, 0, 1);
                let col = lerpColor(this.startColor, this.endColor, inter);
                stroke(col);
                line(0, j, this.width, j);
              }
          
              // Use blend mode for softer color transitions
              blendMode(SOFT_LIGHT);
          
              // Additional loop for creating a gradient with varying transparency
              let midPoint = this.y + this.height / 2; // Calculate the midpoint for alpha interpolation
          
              // Adjust the midpoint for waves wrapping around the screen
              if (midPoint > windowHeight) {
                midPoint -= windowHeight;
              } else if (midPoint < 0) {
                midPoint += windowHeight;
              }
          
              for (let j = this.y; j < this.y + this.height; j++) {
                let actualJ = j; // Determine the actual position of the wave
          
                // Wrap around the drawing for continuous wave effect
                if (j >= windowHeight) {
                  actualJ -= windowHeight;
                } else if (j < 0) {
                  actualJ += windowHeight;
                }
          
                let inter = map(actualJ, this.y, this.y + this.height, 0, 1);
                let col = lerpColor(this.startColor, this.endColor, inter);
          
                // Calculate alpha based on distance from the midpoint
                let alpha = map(abs(actualJ - midPoint), 0, this.height / 2, 255, 0);
          
                stroke(color(red(col), green(col), blue(col), alpha));
                line(0, actualJ, this.width, actualJ);
              }
          
              // Reset blend mode to default
              blendMode(BLEND);
            }
          
            move() {
              // Update the wave position based on the mouse-controlled speed
              this.y += waveMovementSpeed;
          
              // Implement screen wrapping for the waves
              if (this.y > windowHeight) {
                this.y = -this.height;
              } else if (this.y < -this.height) {
                this.y = windowHeight;
              }
            }
          }
          
          // Define the WaveClass
          class WaveClass {
            constructor() {
              // Initialize an array to store individual wave objects
              this.waves = [];
          
              // Create waves to fill the screen
              let numwaves = ceil(windowHeight / waveHeight) + 1; // Determine the number of waves needed
              for (let i = 0; i < numwaves; i++) {
                let startWave = i * waveHeight - waveHeight; // Calculate the starting position of each wave
                if (i % 2 === 0) {
                  // Alternate start and end colors for each wave
                  startColor = color1;
                  endColor = color2;
                } else {
                  startColor = color2;
                  endColor = color1;
                }
          
                // Instantiate MovingWaves objects and add them to the waves array
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
              // Update the position of each wave in the array
              for (let i = 0; i < this.waves.length; i++) {
                this.waves[i].move();
              }
            }
          
            display() {
              // Display each wave on the canvas
              for (let i = 0; i < this.waves.length; i++) {
                this.waves[i].display();
              }
            }
          }
          
          function handleMouseInteraction() {
            // Calculate the vertical movement of the mouse
            let mouseDelta = mouseY - prevMouseY;
          
            // Determine wave movement direction based on mouse position
            if (mouseY < windowHeight / 2) {
              waveColourSpeed = abs(waveColourSpeed); // Set waves to move downwards
            } else {
              waveColourSpeed = -abs(waveColourSpeed); // Set waves to move upwards
            }
          
            // Update wave speed based on mouse movement
            if (abs(mouseDelta) > 0) {
              waveMovementSpeed = -mouseDelta * 0.2; // Adjust sensitivity of wave speed to mouse movement
            } else {
              waveMovementSpeed = waveColourSpeed; // Revert to base speed when there's no significant mouse movement
            }
          
            prevMouseY = mouseY; // Update the previous mouse Y position for the next frame
          }
          
          function pickRandomColors(data) {
            // Function to pick two random and distinct colors from the loaded JSON data
            let index1 = floor(random(data.values.length));
            let index2 = floor(random(data.values.length));
          
            // Ensure the two color indices are distinct
            while (index1 === index2) {
              index2 = floor(random(data.values.length));
            }
          
            // Assign the picked colors to global color variables
            color1 = color(data.values[index1]);
            color2 = color(data.values[index2]);
          }
          
`}
        />
      </div>
    </Container>
  )
}

export default WeekTwelve
