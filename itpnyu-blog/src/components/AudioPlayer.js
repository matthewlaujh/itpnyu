import React from "react";

function AudioPlayer({ src, alt }) {
  return (
    <audio controls>
      <source src={src} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
}

export default AudioPlayer;
