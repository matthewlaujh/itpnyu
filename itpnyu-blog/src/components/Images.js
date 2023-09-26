import React from "react"
import "./components.css"

function Images({ src, alt }) {
  return (
    <div className="componentContainer">
      <img src={src} alt={alt} className="image" />
    </div>
  )
}

export default Images
