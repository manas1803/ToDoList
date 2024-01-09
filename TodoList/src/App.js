import React, { useState } from "react";
import { ToDoListContextProvider } from "./context/ToDoList";
import AddTasks from "./components/AddTasks";
import TasksListPage from "./pages/TasksListPage/TasksListPage";

const App = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <ToDoListContextProvider value={{ tasks, setTasks }}>
      <AddTasks />
      <TasksListPage />
    </ToDoListContextProvider>
  );
};

export default App;
