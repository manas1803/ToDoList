import React from "react";
import { Button } from "react-bootstrap";
import { FaRegSave } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

import { getTaskId } from "../utilities/getTaskId";
import { makeTaskEditable } from "../utilities/makeTaskEditable";
import { getTask } from "../utilities/getTask";
import { useToDoList } from "../context/ToDoList";
import { updateTasks } from "../utilities/updateTasks";
import { makeTaskNonEditable } from "../utilities/makeTaskNonEditable";

const EditTask = ({ setTaskName, task, taskName }) => {
  const { tasks, setTasks } = useToDoList();

  const editTask = () => {
    const taskId = getTaskId(event);
    const updatedTasks = makeTaskEditable(tasks, taskId);
    setTaskName(getTask(tasks, taskId).taskName);
    setTasks(updatedTasks);
  };

  const updateTask = () => {
    const taskId = getTaskId(event);
    const updatedTasks = updateTasks(tasks, taskId, taskName);
    setTasks(updatedTasks);
  };

  const cancelUpdate = () => {
    const taskId = getTaskId(event);
    const updatedTasks = makeTaskNonEditable(tasks, taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      {" "}
      <Button variant="primary" onClick={editTask} data-id={task.id}>
        <FaRegEdit />
        Edit Task
      </Button>{" "}
      {task.isEditable && (
        <>
          <Button variant="success" onClick={updateTask} data-id={task.id}>
            <FaRegSave />
            Save
          </Button>
          <Button variant="secondary" onClick={cancelUpdate} data-id={task.id}>
            <FaRegWindowClose />
            Close
          </Button>
        </>
      )}
    </>
  );
};

export default EditTask;
