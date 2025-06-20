import React, { useState } from "react";
import './App.css'

function App() {
  const [count, setcount] = useState(0)
  const increment = (e) => {
    if (count < 10) {
      setcount(count + 1);
    } else {
      e.target.textContent = "Max limit reached!"
    }
  };

  const decrement = (e) => {
    if(count >= 1) {
      setcount(count - 1);
    } else {
      e.target.textContent = "Min limit reached!"
    }
  }

  const reset = () => {
    setcount(0)
  }
  return (
    <>
    <h1>Count is: {count}</h1>
      <button id="inc" onClick={increment}>Increase</button>

      <button id="dec" onClick={decrement}>Decrease</button>

      <button id="reset" onClick={reset}>Reset</button>
    </>
  );
}

export default App;
