import React, { useId } from "react";
import { useForm } from "react-hook-form";
import { useTodo } from "../../context/Todo";
import uuid from "react-uuid";

const TodoListForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { setTodoList } = useTodo();

  const onSubmit = (data) => {
    const id = uuid();
    console.log(id);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        {...register("todoItem")}
        placeholder="Enter text here..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoListForm;
