import React from "react";
import { completedTasks } from "../utilities/completedTasks";
import { useToDoList } from "../context/ToDoList";
import InputGroup from "react-bootstrap/InputGroup";

const TaskCheckbox = ({ task }) => {
  const { tasks, setTasks } = useToDoList();

  const checkboxSelected = () => {
    const taskId = event.target.parentElement.parentElement.dataset.id;
    const filteredTasks = completedTasks(tasks, taskId);
    setTasks(filteredTasks);
  };

  return (
    <InputGroup.Checkbox
      value={task.taskName}
      name={task.taskName}
      onClick={checkboxSelected}
      disabled={task.isComplete}
    />
  );
};

export default TaskCheckbox;
