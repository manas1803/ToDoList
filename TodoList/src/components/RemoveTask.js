import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { Button } from "react-bootstrap";

import { filterTasks } from "../utilities/filterTasks";
import { useToDoList } from "../context/ToDoList";
import { getTaskId } from "../utilities/getTaskId";

const RemoveTask = ({task}) => {
  const { tasks, setTasks } = useToDoList();

  const removeTasks = () => {
    const taskId = getTaskId(event);
    const filteredTasks = filterTasks(tasks, taskId);
    setTasks(filteredTasks);
  };
  return (
    <Button variant="danger" onClick={removeTasks} data-id={task.id}>
      <AiOutlineDelete />
      Remove
    </Button>
  );
};

export default RemoveTask;
