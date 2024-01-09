import React, { createContext, useContext } from "react";

const TodoContext = createContext({
  todoList: [],
  setTodoList: () => {},
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => useContext(TodoContext);
