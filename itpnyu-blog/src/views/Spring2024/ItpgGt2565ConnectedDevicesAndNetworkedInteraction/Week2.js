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
        <Subheader>Homework - HTML Webpage.</Subheader>
        <ExternalText>
          Create an HTML file including at least 4 different element types and
          at least 10 elements total. At least one element should be an input
          element. Create a stylesheet and link it to your webpage to style your
          elements. Create a JS script for your page, either inside a script tag
          or in a separate .js file, containing 3 different event listeners, all
          of which should manipulate the appearance of your webpage by changing
          some attribute of an element on the page: One of the event listeners
          should be attached to your input element and do something with the
          inputted value. One of the event listeners should be attached to the
          window and respond to a mouse event (click, drag, move, etc.) or the
          keyboard Create a GitHub repo for your assignment. Commit your source
          code to the repo at least 3 different times throughout the coding
          process using the Git command line tools, giving each commit a helpful
          message that describes what changes you made. Document your process on
          your blog, including important code snippets, a video of the
          interaction and a link to the corresponding GitHub repo.
        </ExternalText>
        <Text>
          Wrote a simple page that allowed the user to control a variable font
          by giving text input to change the words displayed, mouse horizontal
          movement to control the slant of the typeface, mouse vertical movement
          to control the boldness and when holding shift it will trigger
          alternate characters.
        </Text>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-spring2024-itpg-gt2565-connectednetworked-videos/itpg-gt-2565-connectedDevicesAndNetworkedInteraction-weekTwo-HTMLwebpage.mp4"
          alt="Description of video"
        />
        <Subheader>HTML.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week2/index.html">
            Link to Github.
          </Links>
        </Text>
        <CodeSnippets
          language="html"
          code={`<html>
<head>
  <title>Week 2 Homework</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div>
  <div id="home">
    <div id="header:">
    <h4>Week 2 Homework</h1>
      <br></br>
      <h5>Assignment #2 HTML Webpage</h5>
    <h6>
      <ul>
      Create an HTML file including at least 4 different element types and at
      least 10 elements total.
      </ul>
      <ul>
      At least one element should be an input element.
      </ul>
      <ul>Create a stylesheet and link it to your webpage to style your
        elements.
      </ul>
      <ul>
        Create a JS script for your page, either inside a script tag
        or in a separate .js file, containing 3 different event listeners, all
        of which should manipulate the appearance of your webpage by changing
        some attribute of an element on the page.
        <ul>
          One of the event listeners should be attached to your input element and do something with the inputted value.
        </ul>
        <ul>
          One of the event listeners should be attached to the
          window and respond to a mouse event (click, drag, move, etc.) or the
          keyboard.
        </ul>
      </ul>
    </h6>
  </div>
  
  <div id="content">
    <label for="text">Input text here:</label>
    <input type="text" id="inputText" name="text"></input>
    <p id="displayText"></p>
  </div>
  <div>
    <p id="footer">Moving the mouse changes the weight and slant of the text while holding shift triggers alternate characters.</p>
  </div>
    <script src="script.js"></script>
</div>
</body>
<html>
`}
        />
        <Subheader>CSS.</Subheader>
        <Text>
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week2/style.css">
            Link to Github.
          </Links>
        </Text>
        <CodeSnippets
          language="css"
          code={`@font-face {
  font-family: "Favorit Variable";
  font-weight: 300;
  font-style: normal;
  src: url("ABCFavoritVariableEdu.ttf") format("opentype");
}
 
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Favorit Variable";
  font-weight: 400;
  line-height: normal;
}
 
#home {
  background-color: rgb(215, 215, 215);
  color: rgb(85, 90, 110);
  width: 100%;
  height: 100%;
  padding: 2vw 2vh;
}
 
#content {
  padding-top: 2vh;
}
 
#inputText {
  background-color: rgb(215, 215, 215);
  border: none;
  /* border-bottom: 1px dotted rgb(85, 90, 110); */
}
 
#displayText {
  font-size: 10vw;
  text-align: center;
  padding: 20vh 10vw;
  word-wrap: break-word;
}
 
#footer {
  position: fixed;
  bottom: 2vw;
}
`}
        />
        <Subheader>JavaScript.</Subheader>
        <Text>
          Javascript code here is abit broken for some reason the snippet
          component I have didn't alow for some elements so I removed them but
          full code at{" "}
          <Links to="https://github.com/matthewlaujh/itpnyu/blob/main/itpnyu-courses/itpggt2565-connectedDevicesAndNetworkedInteraction/week2/script.js">
            here on github.
          </Links>
        </Text>
        <CodeSnippets
          language="javascript"
          code={`const inputText = document.getElementById("inputText")
          const displayText = document.getElementById("displayText")
          displayText.contentEditable = "true"
          function updateText() {
            displayText.textContent = inputText.value
          }
          inputText.addEventListener("input", updateText)
          
          window.addEventListener("mousemove", function (event) {
            const mouseX = event.clientX
            const mouseY = event.clientY
          
            const fontWeight = mapRange(mouseY, 0, window.innerHeight, 200, 700)
          
            const fontItalic = mapRange(mouseX, 0, window.innerWidth, 0, 12)
          
            displayText.style.fontVariationSettings = 'wght' $fontWeight, 'ital' $fontItalic
            displayText.style.transition = "font-variation-settings 0.3s ease"
          })
          
          function mapRange(value, inMin, inMax, outMin, outMax) {
            return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin
          }
          
          document.addEventListener("keydown", function (event) {
            if (event.shiftKey) {
              displayText.style.fontFeatureSettings = "calt" 1, "liga" 1, "rlig" 1, "rvrn" 1, "kern" 1, "rclt" 1, "ss01" 1, "ss02" 1, "ss03" 1, "ss04" 1, "ss05" 1, "ss06" 1, "aalt" 1, "ss07" 1, "case" 1, "dlig" 1, "dnom" 1, "frac" 1, "lnum" 1, "numr" 1, "onum" 1, "ordn" 1, "pnum" 1, "salt" 1, "sinf" 1, "subs" 1, "sups" 1, "tnum" 1, "zero" 1, "locl" 1
            }
          })
          document.addEventListener("keyup", function (event) {
            if (event.key === "Shift") {
              displayText.style.fontFeatureSettings = "normal"
            }
          })
          
`}
        />
      </div>
    </Container>
  )
}
export default BlogPost
