import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useToDoList } from "../../context/ToDoList";
import IncompleteTaskPage from "../IncompleteTasksPage/IncompleteTaskPage";
import CompletedTaskPage from "../CompletedTaskPage/CompletedTaskPage";

const TasksListPage = () => {
  return (
    <ul>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Completed Tasks</Accordion.Header>
          <Accordion.Body>
            <CompletedTaskPage />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Incomplete Tasks</Accordion.Header>
          <Accordion.Body>
            <IncompleteTaskPage />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </ul>
  );
};

export default TasksListPage;
