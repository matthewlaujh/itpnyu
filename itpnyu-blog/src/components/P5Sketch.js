import React, { useRef, useEffect } from "react";
import p5 from "p5";

function P5Sketch({ sketch }) {
  const sketchRef = useRef();

  useEffect(() => {
    new p5(sketch, sketchRef.current);
  }, [sketch]);

  return <div ref={sketchRef}></div>;
}

export default P5Sketch;
