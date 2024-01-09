import React from "react";
import TodoListForm from "../../components/ToDoListForm/TodoListForm";
import TodoList from "../../components/TodoList/TodoList";
import { useTodo } from "../../context/Todo";

const TodoListPage = () => {
  const { todolist } = useTodo();
  console.log(todolist);
  return (
    <>
      <TodoListForm />
      <TodoList />
    </>
  );
};

export default TodoListPage;
