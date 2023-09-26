import React from "react"
import "./components.css"

function ExternalText({ text, children }) {
  if (text) {
    return (
      <div className="componentContainer">
        <p className="external-text">{text}</p>
      </div>
    )
  }

  return (
    <div className="componentContainer">
      <p className="external-text">{children}</p>
    </div>
  )
}

export default ExternalText
