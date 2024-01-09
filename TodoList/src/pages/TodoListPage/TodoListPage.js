import React from "react";
import TodoListForm from "../../components/ToDoListForm/TodoListForm";
import TodoList from "../../components/TodoList/TodoList";

const TodoListPage = () => {
  return (
    <>
      <TodoListForm />
      <TodoList />
    </>
  );
};

export default TodoListPage;
