import React from "react";
import "./components.css";

export function Images({ src, alt }) {
  return <img src={src} alt={alt} className="image" />;
}
