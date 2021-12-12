import React from 'react';
import { Form } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App" >
      <h2>Personal Discipleship Plan</h2>
      <Form>
        <Form.Group className="m-6">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Full name" />
        </Form.Group>
      </Form>
      <h3>Live For Jesus</h3>
      <Form>
        <Form.Group className="mb-3 mx-6">
          <Form.Label>This is my Bbile reading plan (for ideas, see suggestions at the end of the PDP):</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </div>
  );
}

export default App;
