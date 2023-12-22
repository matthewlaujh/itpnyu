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
        <Header>Week 12</Header>
        <ExternalText>
          Load "external" data in a p5.js sketch. You may use data of any
          format, loading a file uploaded to the web editor, or data from an
          API. Use loadJSON() or loadTable() depending on the format. Some
          possibilities: Look through Corpora and download a JSON file for use
          in a p5.js sketch. Collect your own data and create a JSON or CSV
          file! Use any of the APIs from this example collection. Some require
          you to sign up for an API key, and some you can use without one.
          Wikipedia API Tomorrow Weather API Giphy API NYTimes API Datamuse More
          data sources to explore, add to this! Try an API not listed! Write a
          "data biography" (Thank you to Ellen Nickles for this term) for your
          data. Have the maintainers of this dataset or API made this
          information easily available? Here is a selection of questions to
          consider inspired by the readings. What is the purpose of this dataset
          and who created it?** What type of data is in the dataset and how many
          items does it contain? How was the data collected and what method was
          used to select the data? What are the known limitations, biases, or
          potential uses of this dataset? What is missing? In what types of
          projects or studies could this dataset be appropriately used?
        </ExternalText>
        <Text>
          I came from a design background and really love to make design tools.
          One of the reasons I got into computation in the first place was
          actually to integrate it into my design workflows. I was obsessed with
          creative coding tools that could play with typography, colours, help
          make visuals, actually one of my first sketches in p5.js was a
          typography tool of a sorts where you could manipulate letterforms. So
          for this exercise I decided to source a pantone colour dataset to work
          with that I could use to make a colour palette generator.
          <br></br>
          <br></br>I found a dataset on github that had a list of pantone
          colours and pick the JSON one, although the JSON was formatted really
          weirdly, it was more like a csv file, nonetheless it still worked.
          When I first started exploring creative coding in undergrad one of our
          early exercises was to create a sketch inspired by Josef Albers book
          "Interaction of Colour". I really loved the visuals in that and
          decided to use one of it for this sketch.
        </Text>
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/-ARwBaPUT"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/-ARwBaPUT"
          height="50vh"
        />
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/-ARwBaPUT
// Dataset from https://github.com/Margaret2/pantone-colors/blob/master/pantone-colors.
let color1, color2;
let colorValue1, colorValue2;
let colorName1, colorName2;

function preload() {
  loadJSON('pantoneColorData.json', pickRandomColors);
}

function setup() {
  createCanvas(800, 400);
  noStroke();
  let button = createButton('Scramble Colors');
  button.position(20, 420);
  button.mousePressed(reloadColors);
  let saveButton = createButton('Save Palette');
  saveButton.position(140, 420);
  saveButton.mousePressed(saveImage);
}

function draw() {
  fill(color1);
  rect(0, 0, 400, 400);

  fill(color2);
  rect(400, 0, 400, 400);

  fill(color2);
  rect(100, 100, 200, 200);

  fill(color1);
  rect(500, 100, 200, 200);
  
  drawColorInfo1(20, 30, colorName1, colorValue1, color2);
  drawColorInfo2(780, 30, colorName2, colorValue2, color1);
}

function pickRandomColors(data) {
  let index1 = floor(random(data.values.length));
  let index2 = floor(random(data.values.length));
  
  while (index1 === index2) {
    index2 = floor(random(data.values.length));
  }

  color1 = color(data.values[index1]);
  color2 = color(data.values[index2]);
  
  colorValue1 = data.values[index1];
  colorValue2 = data.values[index2];

  colorName1 = data.names[index1];
  colorName2 = data.names[index2];
}

function drawColorInfo1(x, y, name, value, color) {
  textAlign(LEFT);
  fill(color);
  textSize(16);
  text(name + " : " + value, x, y);
}

function drawColorInfo2(x, y, name, value, color) {
  textAlign(RIGHT);
  fill(color);
  textSize(16);
  text(name + " : " + value, x, y);
}

function reloadColors() {
  loadJSON('pantoneColorData.json', pickRandomColors);
}

function saveImage() {
  saveCanvas((colorName1) + "+" + (colorName2), 'png');
}

`}
        />
      </div>
    </Container>
  )
}

export default BlogPost
