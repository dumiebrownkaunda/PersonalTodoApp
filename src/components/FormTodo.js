import React from "react";
import "../App.css";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function FormTodo({ addTodo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>What you got planned up?</Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add new todo"
        ></Form.Control>
      </Form.Group>
      <div className="todo-submit">
        <Button variant="primary mb-3" type="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
}

export default FormTodo;