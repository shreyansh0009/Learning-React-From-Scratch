import React, { useState } from "react";

function ToDo() {
  const [tasks, settasks] = useState(["Eat", "Sleep", "Code", "Repeat"]);
  const [newTask, setnewTask] = useState("");

  function handleChange(e) {
    setnewTask(e.target.value)
  }

  function addTask() {

  }

  return (
    <div className="w-full h-screen p-5">
      <h1 className="font-extrabold text-5xl ">To-Do-App</h1>
      <input
        type="text"
        placeholder="Enter new task..."
        value={newTask}
        onChange={handleChange}
      />
      <button onClick={addTask}>Add</button>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button>Completed</button>
            <button>Delete</button>
            <button>Move up</button>
            <button>Move down</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
