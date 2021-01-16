import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Form,
  FormControl,
  FormLabel,
  FormGroup,
  FormText,
  Button,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/scss/scss.css";
import useRouter from "use-react-router";
import { useState } from "react";

const Register = () => {
  const { history } = useRouter();

  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
    email: '',
    id:Math.random(),
  });

  const onChangeField = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const users = JSON.parse(localStorage.getItem('users'))

    if (!users || users.length === 0) {
      localStorage.setItem(
        'users', JSON.stringify([registerData])
      )
    } else {
      localStorage.setItem(
        'users', JSON.stringify([...users, registerData])
      )
    }
    history.push('/login')
  }

  return (
    <Container className="register-page">
      <Form onSubmit={onSubmit}>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              required
              type="Text"
              placeholder="Username"
              name='username'
              value={registerData.username}
              onChange={onChangeField}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              name='email'
              placeholder="Enter email"
              value={registerData.email}
              onChange={onChangeField}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              name='password'
              placeholder="Password"
              value={registerData.password}
              onChange={onChangeField}
            />
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <p> Sudah punya akun? <Button size="sm" variant="outline-primary" onClick={()=>history.push('/login')} style={{color:'black'},{height:'30px'}}>Sign In</Button> </p>
      </Form>
    </Container>
  );
};
export default Register;
