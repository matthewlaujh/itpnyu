import React from "react"
import "./components.css"

function Header({ children }) {
  return (
    <div className="componentContainer">
      <h1 className="header">{children}</h1>
    </div>
  )
}

export default Header
