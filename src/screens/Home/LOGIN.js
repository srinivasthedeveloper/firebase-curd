import { useState } from "react";
import { Form, Button, Container, Card, Col } from "react-bootstrap";

function Login() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleSubmit = (e) => {
    if (email === "user" && Password === "user@123")
      localStorage.setItem("loggedin", "true");
    else {
      alert("Invalid username and password");
    }
  };

  return (
    <Container>
      <Card className="col-lg-8">
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
          <Col style={{left:'40%'}}>
            <Button type="submit">Login</Button>
          </Col>

    </Form>
    </Card>
    </Container>
  );
}

export default Login;
