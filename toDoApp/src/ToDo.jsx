import React, { useState } from "react";

function ToDo() {
  const [tasks, settasks] = useState(["Eat", "Sleep", "Code", "Repeat"]);
  const [newTask, setnewTask] = useState("");

  function handleChange(e) {
    setnewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") {
      alert("Field cann't be empty!");
      return;
    }
    const isDuplicate = tasks.some(
      (task) => task.toLowerCase() === newTask.toLowerCase()
    );
    if(isDuplicate) {
      alert("Task already exists!")
      return;
    }
    settasks([...tasks, newTask]);
    setnewTask("");
  }

  return (
    <div className="w-full h-screen p-5 flex-col flex items-center ">
      <h1 className="font-extrabold text-5xl mt-5">To-Do-App</h1>
      <input
        className="border-1 m-3 py-1 rounded-md ml-5"
        id="new"
        type="text"
        placeholder="Enter new task..."
        value={newTask}
        onChange={handleChange}
      />
      <button
        className=" rounded-md px-5 py-1 bg-emerald-400 cursor-pointer mb-3"
        onClick={addTask}
      >
        Add
      </button>

      <ol className="list-decimal list-outside ml-6">
        {tasks.map((task, index) => (
          <li key={index} className="m-3">
            <span className="m-3">{task}</span>
            <button className="m-1 bg-emerald-300 px-1 rounded-sm cursor-pointer">
              Completed
            </button>
            <button className="m-1 bg-red-300 px-1 rounded-sm cursor-pointer">
              Delete
            </button>
            <button className="m-1 bg-yellow-300 px-1 rounded-sm cursor-pointer">
              Move up
            </button>
            <button className="m-1 bg-orange-300 px-1 rounded-sm cursor-pointer">
              Move down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDo;
