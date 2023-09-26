import React from "react"
import "./components.css"

function VideoPlayer({ src, alt }) {
  return (
    <div className="componentContainer">
      <video className="video-player" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer
