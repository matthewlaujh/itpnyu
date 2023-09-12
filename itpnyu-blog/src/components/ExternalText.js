import React from "react";
import "./components.css";

function ExternalText({ text, children }) {
  if (text) {
    return <p className="external-text">{text}</p>;
  }

  return <p className="external-text">{children}</p>;
}

export default ExternalText;
