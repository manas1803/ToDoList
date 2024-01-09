import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useToDoList } from "../../context/ToDoList";
import NoTaskPage from "../NoTaskPage/NoTaskPage";
import TaskCheckbox from "../../components/TaskCheckbox";

const CompletedTaskPage = () => {
  const { tasks } = useToDoList();
  const completedTasks = tasks.filter((task) => task.isComplete);

  if (completedTasks.length === 0) return <NoTaskPage />;
  return (
    <>
      {completedTasks.map((task) => {
        return (
          <InputGroup
            className="mb-3 tasks-list is-complete"
            key={task.id}
            data-id={task.id}
          >
            <TaskCheckbox task={task} />
            <Form.Control
              type="text"
              value={task.taskName}
              disabled={!task.isEditable}
              onChange={() => {}}
            />
          </InputGroup>
        );
      })}
    </>
  );
};

export default CompletedTaskPage;
