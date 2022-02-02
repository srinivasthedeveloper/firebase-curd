import { useState } from "react";
import {Form,Button} from 'react-bootstrap'

function Login() {
    const [email,setEmail]=useState('');
    const [Password,setPassword]=useState('');
    const handleSubmit = (e) => {
        if(email==='user' && Password==='user@123')
            localStorage.setItem("loggedin","true");
        else{
            alert("Invalid username and password")
        }
      };

    return (  
<Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="text" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  );
}

export default Login;
