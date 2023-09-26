import React from "react"
import "./components.css"

function Quotes({ children }) {
  return (
    <div className="componentContainer">
      <p className="quotes">{children}</p>
    </div>
  )
}

export default Quotes
