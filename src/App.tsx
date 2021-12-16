import React from 'react';
import { Accordion, Button, Container, Dropdown, Form, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div>
      <div className="App" >
        <Navbar expand="md">
          <Container>
            <Navbar.Brand href="/">Personal Discipleship Plan</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <Button className="plain-link" variant="link">PDF</Button>
                <Button className="plain-link" variant="link">Print</Button>
                <Button variant="outline-primary">Sign In</Button>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>About this PDP</Accordion.Header>
            <Accordion.Body>
              <p>A PDP is the best tool we have for the most important thing, which is looking more like Jesus. It helps us mature as disciples and live out God’s calling on our lives by crafting a plan to take tangible, specific next steps as we follow Jesus.</p>
              <p>It’s also a great way for us to practically live out our four commitments as a church - Live for Jesus, Live as Family, Live on Mission, and Live to Multiply. For that reason, on the pages that followyou’ll find some questions and prompts related to each commitment. As you engage these, your PDP will take shape.</p>
              <p>To help, we’ve included some resources and tips at the end of this document for each commitment. And here are some tips for you as you engage the process of making a PDP</p>
              <ul>
                <li><strong>Pray:</strong> Before you fill our your PDP, pray. Ask God to help you.</li>
                <li><strong>Remember the Gospel:</strong> God is for you because of Jesus' performance, not your own.</li>
                <li><strong>Be Brief:</strong> Brevity is good. Keep your PDP short and sweet.</li>
                <li><strong>Be Specific:</strong> Specificity helps you know where you are at in terms of your goals.</li>
                <li><strong>Fill in the Blanks:</strong> Simply fill in the blanks that follow to fill out your PDP.</li>
                <li><strong>Revise and Look at Your PDP Regularly:</strong> Print it out. Put it on your device.</li>
                <li><strong>Share your PDP:</strong> Find someone to ask you how your PDP is going (see "Next Step").</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>About the Digital Version</Accordion.Header>
            <Accordion.Body>
              <p>This is a digital copy of the Personal Discipleship Plan. To fill out by hand, click on the PDF link above.</p>
              <p>If you fill this out online, you can print out your results with the print button above and save the results by signing in.</p>
              <p>This site is a project of <a href="https://redeemernw.org">Redeemer Church</a> in Bellingham, WA.</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <Form className="initial-form">
          <Form.Group className="m-6">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form>
        <h3 className='commitment-header'>Live For Jesus</h3>
        <p>This section focuses on Bible reading, prayer, and an area of your life that you feel God might want you to focus on as you seek to live for Jesus.</p>
        <h5>Bible</h5>
        <Form>
          <Form.Group className="mb-3 mx-6">
            <Form.Label>This is my Bbile reading plan (for ideas, see suggestions at the end of the PDP):</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3 mx-6">
            <Form.Label>How many times per week do I want to read the Bible?</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 mx-6">
            <Form.Label>How many minutes per day do I want to read the Bible?</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 mx-6">
            <Form.Label>What time slot during the day do I want to read the Bible?</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form>
        <h5>Prayer</h5>
        <Form>
          <Form.Group className="mb-3 mx-6">
            <Form.Label>How many minutes per day do I want to set aside to pray?</Form.Label>
            <Form.Control type="number" />
          </Form.Group>
          <Form.Group className="mb-3 mx-6">
            <Form.Label>What time slot during the day do I want to pray?</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Form>
      </div>
      
      <div className='footer'>
        <a href="https://redeemernw.org" className='footer-link'>Redeemer Church</a>
      </div>
    </div>
  );
}

export default App;
