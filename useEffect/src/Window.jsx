import React, { useState, useEffect } from "react";

function Window() {
  const [width, setwidth] = useState(window.innerWidth);
  const [height, setheight] = useState(window.innerHeight);

  function handleSize() {
    setwidth(window.innerWidth);
    setheight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleSize);
    console.log("Event Listner Added!");

    return () => {
      window.removeEventListener("resize", handleSize);
      console.log("Event Listner Removed!");
    };
  }, []);

  useEffect(() => {
    document.title = `Window: ${width} x ${height}`;
  }, [width, height]);

  return (
    <div>
      <h2>Width : {width}px</h2>
      <h2>Height: {height}px</h2>
    </div>
  );
}

export default Window;
