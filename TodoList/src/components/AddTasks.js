import React, { useState } from "react";
import { useToDoList } from "../context/ToDoList";
import uuid from "react-uuid";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";

const AddTasks = () => {
  const { setTasks } = useToDoList();
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName) {
      setTasks((previousTasks) => [
        ...previousTasks,
        {
          id: uuid(),
          taskName,
          isComplete: false,
          isEditable: false,
        },
      ]);
      setTaskName("");
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>To-Do List</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter the task..."
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
              <Button variant="primary" onClick={addTask}>
                Add Task
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddTasks;
