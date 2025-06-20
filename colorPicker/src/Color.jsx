import React, { useState } from "react";

function Color() {
  const [color, setcolor] = useState("#FFFFFF");

  const handleChange = (e) => {
    setcolor(e.target.value);
  };

  const handleClick = (e) => {
    setcolor(e.target.value);
  }
  return (
    <div className="w-full h-screen p-5 flex flex-col items-center">
      <h1 className="font-extrabold text-6xl m-5">Color Picker App</h1>

      <h3 className="text-3xl font-bold mt-5 mb-5">Selected Color:</h3>
      <p className="mb-2 font-bold text-2xl">{color}</p>

      <div
        className="colorBox h-38 w-52 mb-5 rounded-md border-2"
        style={{ backgroundColor: color }}
      ></div>

      <label className="text-2xl mb-2">Choose Color: </label>
      <input type="color" value={color} onChange={handleChange} />

      <button className="mt-10 bg-emerald-400 p-3 rounded-md text-lg font-bold cursor-pointer"
      onClick={handleClick}>
        Reset color
      </button>
    </div>
  );
}

export default Color;
