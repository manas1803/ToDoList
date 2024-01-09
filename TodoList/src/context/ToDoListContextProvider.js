import React, { useState } from "react";
import ToDoListContext from "./ToDoListContext";

const ToDoListContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  return (
    <ToDoListContext.Provider value={{ tasks, setTasks }}>
      {children}
    </ToDoListContext.Provider>
  );
};

export default ToDoListContextProvider;
