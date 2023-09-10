import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./components.css";

function CodeSnippets({ language, code }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={atomDark}
      className="code-snippet"
    >
      {code}
    </SyntaxHighlighter>
  );
}

export default CodeSnippets;
