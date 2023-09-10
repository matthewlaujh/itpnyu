import React from "react";

function VideoPlayer({ src, alt, width = 320, height = 240 }) {
  return (
    <video width={width} height={height} controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
