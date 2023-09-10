import React from "react";
import "./components.css";

export function Iframes({ src, title }) {
  return <iframe src={src} title={title} className="iframe"></iframe>;
}
