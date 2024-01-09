import React from "react";
import { useForm } from "react-hook-form";

const TodoListForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("Form data ", data);
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
