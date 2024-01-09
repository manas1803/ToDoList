import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import RemoveTask from "../../components/RemoveTask";
import { useToDoList } from "../../context/ToDoList";
import NoTaskPage from "../NoTaskPage/NoTaskPage";
import TaskCheckbox from "../../components/TaskCheckbox";
import EditTask from "../../components/EditTask";
import { ButtonGroup } from "react-bootstrap";

const IncompleteTaskPage = () => {
  const [taskName, setTaskName] = useState("");
  const { tasks } = useToDoList();
  const incompleteTasks = tasks.filter((task) => !task.isComplete);

  if (incompleteTasks.length === 0) return <NoTaskPage />;
  return (
    <>
      {incompleteTasks.map((task) => {
        return (
          <>
            <InputGroup className="mb-3 tasks-list" key={task.id}>
              <TaskCheckbox task={task} />
              <Form.Control
                type="text"
                value={task.isEditable ? taskName : task.taskName}
                disabled={!task.isEditable}
                onChange={(event) => {
                  setTaskName(event.target.value);
                }}
              />
            </InputGroup>
            <EditTask
              taskName={taskName}
              setTaskName={setTaskName}
              task={task}
            />
            <RemoveTask task={task} />
          </>
        );
      })}
    </>
  );
};

export default IncompleteTaskPage;
