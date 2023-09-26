import React from "react";

function AudioPlayer({ src, type }) {
  return (
    <div className="componentContainer">
      <audio controls>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

export default AudioPlayer;
