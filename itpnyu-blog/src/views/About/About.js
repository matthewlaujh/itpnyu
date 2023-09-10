import React from "react";

// Components
import { Container } from "../../components/Container";
import { Header } from "../../components/Header";
import { Subheader } from "../../components/Subheader";
import { Text } from "../../components/Text";
import { ExternalText } from "../../components/ExternalText";
import { Quotes } from "../../components/Quotes";
import { Images } from "../../components/Images";
import { CodeSnippets } from "../../components/CodeSnippets";
import { Iframe } from "../../components/Iframes";
import { AudioPlayer } from "../../components/AudioPlayer";
import { VideoPlayer } from "../../components/VideoPlayer";

const About = () => {
  return (
    <Container>
      <Header text="About me" />
      <Subheader text="Introduction" />
    </Container>
  );
};

export default About;
