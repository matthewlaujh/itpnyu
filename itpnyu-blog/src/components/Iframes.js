import React from "react";
import "./components.css";

function Iframes({ src, title, height = "500px" }) {
  return (
    <div className="componentContainer">
      <div className="iframe-container" style={{ height: height }}>
        <iframe src={src} title={title} className="iframe"></iframe>
      </div>
    </div>
  );
}

export default Iframes;
