import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

function Links({ to, external = false, children }) {
  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className="custom-link"
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className="custom-link">
      {children}
    </Link>
  );
}

export default Links;
