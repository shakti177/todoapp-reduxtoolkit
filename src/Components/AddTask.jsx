import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Features/Todo/todoSlice";

const AddTask = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addNewTask = (e) => {
    e.preventDefault();
    dispatch(addTask(input));
    setInput("");
  };

  return (
    <form onSubmit={addNewTask} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a New Task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
