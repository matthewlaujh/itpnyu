import React from "react";
import "./components.css";

function VideoPlayer({ src, alt }) {
  return (
    <video className="video-player" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
