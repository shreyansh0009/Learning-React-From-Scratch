import React, { useEffect, useState } from "react";
import Window from "./Window";

// useEffect: It's a react hook, it tells DOM to perform some operations or do some code when:
//               i. When component re-randers.
//               ii. when there is change in component.
//               iii. or change in state or value

// useEffect(function(), [dependencies]) => function call be callback, or normal fun

function App() {
  // A counter program to demonstrate the useEffect.

  const [count, setcount] = useState(0);
  const [color, setcolor] = useState("green");

  // useEffect(() => {
  //   document.title = `Count: ${count} ${color}`;
  // }, [count]) 

  // here only count changes in the title, cause only count written as dependencies. If we include color, then color will change as well. we can do this with core js, but it makes code more clean and easy to get dependencies
  
  // useEffect(() => {
  //   document.title = `Count: ${count} ${color}`;
  // }, [count, color]) 

  

  function addCount() {
    setcount(count + 1);
  }

  function subCount() {
    setcount(count - 1);
  }

  function changeColor() {
    setcolor(color === "green" ? "red" : "green");
  }

  return (
    <div>
      <h1 style={{color: color}}>Count is: {count}</h1>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Sub</button>
      <button onClick={changeColor}>Change color</button>
      <br />
      <br />

      <Window />
    </div>
  );
}

export default App;
