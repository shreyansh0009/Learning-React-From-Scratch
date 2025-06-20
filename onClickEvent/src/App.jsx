import React, { useState } from "react";
import Profile from "./Profile";

function App() {
  const handleClick = () => console.log("ouchhh...!!!");

  const handleClick2 = (name) => console.log(`${name} stop clicking mee!!`);

  let count = 0;

  const handleClick3 = (name) => {
    if (count < 3) {
      count++;
      console.log(`${name} you clicked me ${count} times!`);
    } else {
      console.log(`${name} stop clicking mee..!!`);
    }
  };

  const handleClick4 = (name) => console.log(`${name} you clicked me 2 times`);

  return (
    <>
      <button onClick={handleClick}>Click me....</button>

      <button onClick={() => handleClick2("Saurabh")}>
        Don't Click me....
      </button>

      {/* We can also use wiht some condiditons as welll */}
      <button onClick={() => handleClick3("Saurabh")}>Click me</button>

      {/* There is also a doubleClick event listner, it's same as onClick but works on double click */}
      <button onDoubleClick={() => handleClick4("Saurabh")}>clk me</button>
      
      {/* onClick on an image */}
      <Profile />
    </>
  );
}

export default App;
