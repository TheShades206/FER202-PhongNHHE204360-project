import { useState } from 'react';
import { Form, Button, ListGroup, Row, Col } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Row>
      <Col md={5} className="mb-3">
        <Form.Group className="mb-2">
          <Form.Control 
            type="text" 
            placeholder="Please input a Task" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </Form.Group>
        <Button onClick={handleAddTodo} className="w-100">Add Todo</Button>
      </Col>
      
      <Col md={5}>
        <h3>Todo List</h3>
        <ListGroup>
          {todos.map((todo, index) => (
            <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
              <span className="text-break">{todo}</span>
              <Button variant="danger" size="sm" onClick={() => handleDeleteTodo(index)}>Delete</Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default TodoList;