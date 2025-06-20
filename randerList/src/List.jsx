import React from "react";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const highCalFruits = itemList.filter(
    (item) => item.calories >= 100
  );

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: <b>{item.calories}</b>
    </li>
  ));

  const highCalItems = highCalFruits.map((highCalItem) => (
    <li key={highCalItem.id}>
      {highCalItem.name}: <b>{highCalItem.calories}</b>
    </li>
  ));

  return (
    <div>
      <h3>{category}</h3>
      <ul>{listItems}</ul>
      <h3>High Calorie {category}</h3>
      <ul>{highCalItems}</ul>
    </div>
  );
}

export default List;
