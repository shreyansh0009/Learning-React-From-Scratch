import React, { useState } from "react";

function Food() {
  const [food, setfood] = useState(["Apple", "Banana", "Mango"]);

  function handleAddFood() {
    const newFood = document.getElementById("new").value;
    setfood([...food, newFood]);
    document.getElementById("new").value = "";
  }

  function handleRemoveFood() {}

  return (
    <div>
      <h1>List of food items:</h1>
      <ul>
        {food.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
      <br />
      <input type="text" placeholder="Enter food you like" id="new" />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
}

export default Food;
