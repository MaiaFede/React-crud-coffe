import React from 'react';
import { Col, Card, Button,Form, CardTitle } from "react-bootstrap";

const Login = () => {
    return (
        <div className='conatiner-fluid'>
        <div className='row justify-content-center'>
        <Col md={4} lg={6} className="mb-3">
      <Card className="h-100">
      <Card.Header >
        <CardTitle className="light-font">Login</CardTitle>
      </Card.Header>
        <Card.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="admin@rollingcode.com" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ingresar
      </Button>
    </Form>
        </Card.Body>
      </Card>
    </Col>
    </div>         
    </div>
    );
};

export default Login;