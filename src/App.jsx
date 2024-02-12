import React from "react";
import "./App.css";

import AddTask from "./Components/AddTask";
import AllTask from "./Components/AllTask";

const App = () => {
  return (
    <div>
      <div className="text-4xl text-medium">Todo List</div>
      <AddTask />
      <AllTask />
    </div>
  );
};

export default App;
