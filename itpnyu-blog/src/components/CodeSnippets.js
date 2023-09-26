import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./components.css";

function CodeSnippets({ language, code }) {
  return (
    <div className="componentContainer">
      <SyntaxHighlighter
        language={language}
        style={atomDark}
        className="code-snippet"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeSnippets;
