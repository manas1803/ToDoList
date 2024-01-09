import React, { useState } from "react";
import TodoListPage from "../TodoListPage/TodoListPage";
import { TodoContextProvider } from "../../context/Todo";

const App = () => {
  const [todoList, setTodoList] = useState([]);
  return (
    <TodoContextProvider value={{ todoList, setTodoList }}>
      <TodoListPage />
    </TodoContextProvider>
  );
};

export default App;
