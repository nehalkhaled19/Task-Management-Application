import React, { useState } from "react";
import img from "../Images/icon (1).png";
import Tasks from "./Tasks";

export default function InputTask() {
  const [tasks, setTasks] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    let newTask = e.target[0].value;
    setTasks([...tasks, newTask]);
    e.target[0].value = "";
  }
  return (
    <div>
      <div>
        <h1 className="text-center mb-3">
          To-Do List <img src={img} width="30px" alt="to-do-list-img" />
        </h1>
        <div className="position-relative w-75 m-auto">
          <form onSubmit={handleSubmit}>
            <input
              id="taskText"
              type="text"
              className=" form-control px-md-3 py-3 border-0 rounded-5"
            />
            <button
              type="submit"
              id="addTask"
              className="btn px-md-4 new-button rounded-5 "
            >
              Add
            </button>
          </form>
        </div>
      </div>
      <Tasks tasks={tasks}/>
    </div>
  );
}
