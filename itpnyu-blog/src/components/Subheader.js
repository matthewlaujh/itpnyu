import React from "react"
import "./components.css"

function Subheader({ children }) {
  return (
    <div className="componentContainer">
      <h2 className="subheader">{children}</h2>
    </div>
  )
}

export default Subheader
