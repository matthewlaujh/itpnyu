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

const WeekEight = () => {
  return (
    <Container>
      <div>
        <Header>Week Eight</Header>
        <Subheader>The Ascension Algorithm.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekEight-syntheticMedia-theAscensionAlgorithm.mov"
          alt="Description of video"
        />
        <Text>
          Workign with Julio Cotazar’s Instructions on How to Climb a Staircase.
          Jasmine and I got ChatGPT to interpret the text:
        </Text>
        <ExternalText>
          Title: Mastery of Ascending a Staircase
          <br></br>
          <br></br>Introduction:
          <br></br>This guide will take you through the detailed and precise
          steps required to ascend a staircase. This common activity, often
          taken for granted, involves a series of coordinated movements that,
          when executed properly, will allow you to move from the ground floor
          to the first floor with ease.
          <br></br>
          <br></br>Step 1:
          <br></br>Analyzing the Staircase Notice the structure of the
          staircase: each step consists of a vertical and a horizontal part,
          creating a right angle. Observe how the steps are arranged in a spiral
          or broken line, each one higher and further than the previous.
          <br></br>
          <br></br>Step 2:
          <br></br>Proper Stance and Hand Placement Stand upright, with your
          arms at your sides and your head erect, ensuring you can see the steps
          immediately above you. Duck down slightly, placing your left hand on
          the vertical part of the step and your right hand on the corresponding
          horizontal part. You now have control of a step.
          <br></br>
          <br></br>Step 3:
          <br></br>Commencing the Ascent Begin by lifting your right foot (the
          part of your body located below and to the right, usually encased in
          leather or deerskin). Place the right foot on the first step.
          <br></br>
          <br></br>Step 4:
          <br></br>Coordinating the Movement Now, draw up your left foot (also
          encased, but not to be confused with the right foot mentioned
          earlier). Lift the left foot to the level of the right foot and set it
          down on the second step. Ensure the right foot is now resting on the
          first step.
          <br></br>
          <br></br>Step 5:
          <br></br>Continuing the Ascent Repeat these movements alternately,
          ensuring you do not lift both feet at the same time. Continue this
          pattern until you reach the top of the staircase.
          <br></br>
          <br></br>Step 6:
          <br></br>Finalizing the Ascent Once at the top, give a light tap of
          the heel to ensure stability. Confirm that the staircase will remain
          stationary until you decide to descend.
          <br></br>
          <br></br>Conclusion:
          <br></br>Ascending a staircase may initially present challenges,
          especially in coordinating the movements of each foot. However, with
          practice, this activity will become second nature. Remember the
          crucial difference between the foot and "the foot" as you follow this
          guide, and you will find yourself reaching new elevations with ease
          and confidence.
        </ExternalText>
        <Text>
          From there we got it to reinterpret the text as logically as possible.
        </Text>
        <ExternalText>
          Title: Algorithm for Staircase Ascension
          <br></br>
          <br></br>Introduction:
          <br></br>This document outlines a detailed algorithm for a robotic
          system to ascend a staircase efficiently and safely. Staircase
          ascension is a task that requires precise coordination of movement,
          which can be achieved through systematic programming and sensor
          integration.
          <br></br>
          <br></br>Step 1: Staircase Analysis
          <br></br>1.1. Scan the staircase using onboard sensors to gather data
          on the dimensions and arrangement of the steps.
          <br></br>1.2. Identify the height (rise) and depth (tread) of each
          step, and note any variations in size or irregularities.
          <br></br>1.3. Determine the total number of steps and the overall
          height and depth of the staircase.
          <br></br>1.4. Recognize the pattern of the staircase, whether it is
          straight, spiral, or another configuration.
          <br></br>
          <br></br>Step 2: Initial Positioning and Sensor Calibration
          <br></br>2.1. Position the robot at the base of the staircase,
          ensuring it is perpendicular to the first step and adequately aligned.
          <br></br>2.2. Calibrate sensors to ensure accurate distance and
          orientation measurements.
          <br></br>2.3. Ensure all movement actuators are operational and ready
          for the ascension task.
          <br></br>
          <br></br>Step 3: Ascend First
          <br></br>Step 3.1. Activate the appropriate actuators to lift the
          robot's front part.
          <br></br>3.2. Move forward until the front sensors detect the edge of
          the first step.
          <br></br>3.3. Lift the robot's mobility system to the height of the
          first step.
          <br></br>3.4. Advance onto the first step, ensuring stability before
          proceeding.
          <br></br>
          <br></br>Step 4: Ascension Coordination
          <br></br>4.1. Utilize feedback from sensors to maintain balance and
          orientation.
          <br></br>4.2. Sequentially lift and advance the robot's mobility
          system to the next step, ensuring each movement is complete and stable
          before proceeding.
          <br></br>4.3. Continuously monitor sensor data to adjust movements as
          necessary, accounting for any irregularities or obstacles.
          <br></br>
          <br></br>Step 5: Continue Ascension
          <br></br>5.1. Repeat Steps 3 and 4 until the robot's sensors indicate
          that it has reached the top of the staircase.
          <br></br>5.2. Constantly update the robot's internal model of its
          position relative to the staircase to ensure accuracy.
          <br></br>
          <br></br>Step 6: Conclude Ascension
          <br></br>6.1. Once at the top, perform a final stability check using
          onboard sensors.
          <br></br>6.2. Confirm that all systems are operational and the robot
          is securely positioned.
          <br></br>6.3. Update the robot's status to indicate that the staircase
          ascension task is complete.
          <br></br>
          <br></br>Conclusion: Ascending a staircase is a complex task that
          requires precise coordination and real-time sensor feedback. By
          following this algorithm, a robotic system can efficiently and safely
          ascend a staircase, adapting to various configurations and overcoming
          potential obstacles. Continuous practice and updates to the algorithm
          can further enhance the robot's performance, ensuring reliable
          staircase ascension in diverse environments.
        </ExternalText>
        <Text>
          Using this logically interpreted text, we then got it to write our
          image description prompts for us.
        </Text>
        <ExternalText>
          Title: Algorithm for Staircase Ascension
          <br></br>
          <br></br>Image Descriptions:
          <br></br>
          <br></br>
          Introduction Image:
          <br></br>A robotic system, equipped with sensors and a mobility
          system, is poised at the base of a staircase. The image emphasizes
          different components of the robot, annotating the sensors, actuators,
          and its central processing unit. A staircase with uniform steps is
          visible in front of the robot, highlighted to showcase its standard
          construction. The robot’s sensors are directed towards the staircase,
          ready to commence the ascension algorithm.
          <br></br>
          <br></br>
          Step 1: Staircase Analysis Image:
          <br></br>1.1. The robot’s sensors are actively scanning the staircase,
          with laser beams and infrared signals visibly emanating from the robot
          and interacting with the steps. Data regarding the step dimensions is
          being collected and displayed on a digital overlay.
          <br></br>1.2. A close-up of the robot’s sensor data showcases the
          measurements of each step, highlighting any variations in size or
          irregularities. The image emphasizes the importance of these details
          for accurate movement.
          <br></br>1.3. The overall structure of the staircase is analyzed, with
          the total number of steps, as well as the overall height and depth,
          being calculated and displayed. The data is represented in a clear,
          visual format for easy interpretation.
          <br></br>1.4. The staircase pattern is outlined and annotated,
          indicating whether it is a straight, spiral, or another configuration.
          The image guides the viewer through the robot’s process of recognizing
          and adapting to different staircase types.
          <br></br>
          <br></br>Step 2: Initial Positioning and Sensor Calibration Image:
          <br></br>2.1. A top-down view of the robot positioned at the base of
          the staircase, aligned and ready for ascension. The image highlights
          the importance of proper alignment for successful ascension.
          <br></br>
          2.2. Sensor calibration is visually represented, with axes adjusting
          and calibrating to ensure accurate distance and orientation
          measurements. Calibration markers and annotations guide the viewer
          through the process.
          <br></br>2.3. The robot’s actuators are spotlighted, with annotations
          pointing out their readiness for the task ahead. Visual cues indicate
          the operational status of each actuator.
          <br></br>
          <br></br>Step 3: Ascend First Step Image:
          <br></br>3.1. The robot is shown initiating the ascent, lifting its
          front part using its actuators. The image highlights the active
          components and provides annotations to guide the viewer through the
          process.
          <br></br>3.2. The robot’s sensors are focused on the edge of the first
          step, ensuring precise placement of the mobility system. Laser guides
          and visual markers aid in illustrating this precision.
          <br></br>3.3. The robot lifts its mobility system to the height of the
          first step. The image captures this moment, showcasing the
          coordination between sensors and actuators.
          <br></br>3.4. The robot advances onto the first step, ensuring
          stability before proceeding. Visual stability indicators and
          annotations are provided to highlight this crucial aspect of the
          ascension process.
          <br></br>
          <br></br>Step 4: Ascension Coordination Image:
          <br></br>4.1. A dynamic image of the robot mid-ascension, showcasing
          real-time balance and orientation adjustments. Sensor feedback is
          represented through connecting lines and annotations.
          <br></br>4.2. The robot is depicted sequentially lifting and advancing
          its mobility system to the next step. Each movement is captured in
          detail, emphasizing the precision and coordination required.
          <br></br>4.3. Continuous monitoring and adjustments are highlighted,
          with sensor data and visual cues illustrating the robot’s adaptability
          to irregularities or obstacles.
          <br></br>
          <br></br>Step 5: Continue Ascension Image:
          <br></br>5.1. A series of images depict the robot in various stages of
          ascension, demonstrating the repeated application of the ascension
          coordination steps. Each image is annotated to guide the viewer
          through the process.
          <br></br>5.2. The robot’s internal model of its position relative to
          the staircase is updated in real-time, ensuring accuracy throughout
          the ascension. Visual representations of this internal model are
          provided for clarity.
          <br></br>
          <br></br>Step 6: Conclude Ascension Image:
          <br></br>6.1. At the top of the staircase, the robot performs a final
          stability check, ensuring it is securely positioned. Sensors and
          stability indicators are highlighted to guide the viewer through this
          final step.
          <br></br>6.2. A system check is visually represented, confirming all
          systems are operational. Annotations provide additional information on
          each system’s status.
          <br></br>6.3. The robot updates its status to indicate the successful
          completion of the staircase ascension task. A visual representation of
          this status update is provided, bringing closure to the ascension
          process.
          <br></br>
          <br></br>Conclusion Image: A panoramic view captures the robot’s
          successful ascension, highlighting the journey from base to top.
          Annotations and visual cues draw attention to key elements of the
          task, emphasizing the robot’s precision, stability, and adaptability.
          The image serves as a visual summary of the entire staircase ascension
          algorithm.
        </ExternalText>
        <Text>
          Those worked as narrative prompts but we had a particular style in
          mind and we came up with a style prompt to add to the end of each of
          those prompts. The style prompt was "Reinforcement learning diagram
          intertwined with robotics simulation 3d engine, grainy aesthetic of
          early 20th century black and white cinema." Although even with that it
          took a lot of trial and error to get the right look and to have the
          image be what we envisioned (Video of all the prompts we did below).
          <br></br>
          <br></br>
          We then took the images that we generated in Midjourney and turned
          them into videos using RunwayML's Gen 2. We aimed to keep this early
          20th century look so we didn't use any of the camera motion and
          focused trying to get the elements in the frame to animate instead.
          <br></br>
          <br></br>
          Once we got all the footage together, we pieced it together in After
          Effects and had adjustment layers to get the color correction just the
          way we liked it and applying textures like noise and scratches to get
          the look we wanted. We also spent time editing the Title cards and
          subtitles to have the right look, just a touch of glow and dark shadow
          and also a slight wobble to simulate how they might've done it in the
          past which I imagined was having the text on something transparent and
          placing it in front of the camera. Also for the background audio we
          tried to simulate it to how they might've done it in the past as well
          but creating a sound that was more hollow, simulating it being played
          in the background and being recorded straight into the camera, instead
          of a clean crisp modern sound.
          <br></br>
          <br></br>
          Also major thanks and shoutout to Octavio for helping be our voice
          actor, reading and recording the text for us and giving us tips and
          advice for the background track. It really helped bring the video
          together.
          <br></br>
          <br></br>
          With the voiceover over the initial cut of the video. The clips
          generated out of RunwayML was great but they were very stagnant 4-8
          seconds clips, and it made the pacing of the video feel too flat and
          uninteresting. Using the pacing of the voiceover, we recut the film
          stretching out and cutting down on some clips to give it better pacing
          and flow to better match the audio and also bring some rhythm and
          character to the video.
          <br></br>
          <br></br>
          Overall this project was really fun to work on, it was great that
          Jasmine and I had very similar ideas and starting points around this
          topic of Synthetic Media and we wanted to create this sort of meta
          conceptual piece based off the idea of Simulacra and Simulation,
          without it being too literal in the sense. I think we managed to
          achieve that through the various levels of conceptual depth that we
          put the idea through and it's very Simulacra, this sort of
          juxtaposition between the reality of how to climb a staircase and this
          simulation of training a robot to climb a staircase as if it was
          human, but that logic that a robot needs takes away from the poetry of
          Cotazar’s's text. But it was this contrast that creates this meta
          conversational piece around Synthetic Media, how distant is it from
          it's original media form? How much of the original media form is
          retained in the generated content. And much of these machine learning
          models are modelled after the neural networks in our brains but how
          much of it can the machines actually replicate? Can they even climb
          stairs poetically?
        </Text>
        <Subheader>Many..many Midjourney Prompts.</Subheader>
        <VideoPlayer
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-videos/itpg-gt-2004-cl-hypercinema-weekEight-syntheticMedia-theAscensionAlgorithm-midjourneyPrompting.mov"
          alt="Description of video"
        />
        <Subheader>After Effects Timeline.</Subheader>
        <Images
          src="https://itpnyublog.blob.core.windows.net/itpnyu-blog-fall2023-itpg-gt2004-cl-hypercinema-images/itpg-gt-2004-cl-hypercinema-weekEight-syntheticMedia-theAscensionAlgorithm-afterEffects.png"
          alt=""
        />
      </div>
    </Container>
  )
}

export default WeekEight
