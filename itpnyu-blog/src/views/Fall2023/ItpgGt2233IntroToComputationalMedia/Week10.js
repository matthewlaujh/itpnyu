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
        <Header>Week 10</Header>
        <ExternalText>
          Train your own image classifer with Teachable Machine. What works
          well? What fails? Experiment with different outputs and modes of
          interaction using the predicted labels. Document your work in a blog
          post: include visual documentation such as a recorded screen capture /
          video / GIFs of training the model and working in p5. 🚨 The above is
          just one option for your assignment! You may also take inspiration
          from anything related to images, pixels, or machine learning in the
          above materials or discussion from class! You are not required to use
          Teachable Machine! For example, you may prefer to explore the "pose"
          models in the new ml5.js. You are also welcome to continue to explore
          image processing and creative visualization of pixel data from last
          week. 🚨
        </ExternalText>
        <Text>
          I've actually used Teachable Machine quite a fair bit for my
          undergraduate dissertation a couple of years ago. I was using it to
          see how accessible training machine learning models were for Creatives
          or Designers to use to design interactive experiences. My topic then
          was an exploration of Affective Computing through a communication
          design lens for the recognition, communication and interpretation of
          affective states as forms of computer-mediated communication and
          interaction design practice. I was exploring the possibilities of
          using it to train your own models vs the ease of readily accessible
          online APIs. And I found that while Teachable Machine was largely
          accessible and easy to use, it was difficult to achieve good results,
          so in that case APIs might be better but if creatives could gather
          together a large enough dataset, Teachable Machine could definitely be
          a viable option to explore further.
          <br></br>
          <br></br>
          Even trying it now, it has the same issues even when it's a single
          person dataset for emotional expression using facial expressions. It
          still can't quite pick up the subtle differences in the face. But I
          thought it was worth revisiting this for this exercise. And maybe I
          should try to develop it further to see if I can get a model for my
          face stable and running properly. The p5.js sketch here overlays a
          colour (based on emotion colour theory) over the video depending on
          the emotions being show as a visual cue for what emotion you are
          showing.
        </Text>
        <Iframes
          src="https://https://teachablemachine.withgoogle.com/models/HpFsC_SpE/.p5js.org/matthewlaujh-itpnyu/full/sHkfsW_m0"
          title="Teachable Machine sketch of https://teachablemachine.withgoogle.com/models/HpFsC_SpE/"
          height="50vh"
        />
        <CodeSnippets
          language="javascript"
          code={`// https://editor.p5js.org/matthewlaujh-itpnyu/sketches/sHkfsW_m0
          // Copyright (c) 2019 ml5
          //
          // This software is released under the MIT License.
          // https://opensource.org/licenses/MIT
          
          /* ===
          ml5 Example
          Webcam Image Classification using a pre-trained customized model and p5.js
          This example uses p5 preload function to create the classifier
          === */
          
          // Classifier Variable
          let classifier;
          // Model URL
          let imageModelURL = "https://teachablemachine.withgoogle.com/models/HpFsC_SpE/";
          
          // Video
          let video;
          let flippedVideo;
          // To store the classification
          let label = "";
          let results;
          
          // Load the model first
          function preload() {
            classifier = ml5.imageClassifier(imageModelURL + "model.json");
          }
          
          function setup() {
            createCanvas(320, 260);
            // Create the video
            video = createCapture(VIDEO);
            video.size(320, 260);
            video.hide();
          
            flippedVideo = ml5.flipImage(video);
            // Start classifying
            classifyVideo();
            noStroke();
          }
          
          function draw() {
            background(0);
            image(flippedVideo, 0, 0);
          
            let neutral = color(0, 0, 0, 50);
            let happy = color(255, 255, 0, 50);
            let angry = color(255, 0, 0, 50);
            let sad = color(0, 0, 255, 50);
            let disgust = color(255, 0, 255, 50);
            let surprise = color(0, 255, 255, 50);
            let fear = color(0, 255, 0, 50);
          
            if (label === "Neutral") {
              fill(neutral);
            } else if (label === "Happy") {
              fill(happy);
            } else if (label === "Angry") {
              fill(angry);
            } else if (label === "Sad") {
              fill(sad);
            } else if (label === "Disgust") {
              fill(disgust);
            } else if (label === "Surprise") {
              fill(surprise);
            } else if (label === "Fear") {
              fill(fear);
            }
            rect(0, 0, 320, 260);
          }
          
          // Get a prediction for the current video frame
          function classifyVideo() {
            flippedVideo = ml5.flipImage(video);
            classifier.classify(flippedVideo, gotResult);
          }
          
          // When we get a result
          function gotResult(error, results) {
            // If there is an error
            if (error) {
              console.error(error);
              return;
            }
            // The results are in an array ordered by confidence.
            // We check if the first result matches any of our desired labels
            if (results.length > 0) {
              label = results[0].label;
            }
          
            // Classifiy again!
            classifyVideo();
          }
          
`}
        />
        <Iframes
          src="https://editor.p5js.org/matthewlaujh-itpnyu/full/sHkfsW_m0"
          title="p5.js sketch of https://editor.p5js.org/matthewlaujh-itpnyu/sketches/sHkfsW_m0"
          height="50vh"
        />
      </div>
    </Container>
  )
}

export default BlogPost
