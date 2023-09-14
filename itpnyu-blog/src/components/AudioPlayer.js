import React from "react";

function AudioPlayer({ src, type }) {
  return (
    <audio controls>
      <source src={src} type={type} />
      Your browser does not support the audio element.
    </audio>
  );
}

export default AudioPlayer;
