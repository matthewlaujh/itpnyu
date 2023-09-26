import React from "react"
import "./components.css"

function Text({ text, children }) {
  if (text) {
    return (
      <div className="componentContainer">
        <p className="text">{text}</p>
      </div>
    )
  }

  return (
    <div className="componentContainer">
      <p className="text">{children}</p>
    </div>
  )
}

export default Text
