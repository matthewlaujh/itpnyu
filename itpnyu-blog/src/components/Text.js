import React from "react";
import "./components.css";

function Text({ text, children }) {
  if (text) {
    return <p className="text">{text}</p>;
  }

  return <p className="text">{children}</p>;
}

export default Text;
