import React from "react";

const TodoList = () => {
  const handleChange = () => {
    console.log("On Chnage");
  };
  return (
    <>
      <li>
        <div>
          <input type="text" value="Todo" onChange={handleChange} />
        </div>
        <div>
          <button>Edit</button>
        </div>
        <div>
          <button>Cancel</button>
        </div>
      </li>
    </>
  );
};

export default TodoList;
