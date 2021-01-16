import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';     
import {Container,Form, FormControl,FormLabel,FormGroup,FormText,Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/scss/scss.css'
import useRouter from 'use-react-router';
import { useState } from 'react';

const Login =() => {
    const {history} = useRouter()

    const[loginData, setLoginData]= useState({
        username: '',
        password:''
    })
    const onChangeField = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        const users = JSON.parse(localStorage.getItem('users'))
    
        if (!users || users.length === 0) {
          alert('Registrasi dulu gais')
        } else {
          const index = users.findIndex(
            user => user.username === loginData.username && 
            user.password === loginData.password
          )
          
          if (index === -1) {
            alert('Registrasi dulu gais')
          } else {
            localStorage.setItem('isLogin', JSON.stringify(true))
            localStorage.setItem('accLogin', JSON.stringify(loginData.username))
            history.push('/')
          }
        }
      }
      
    return(
        <Container className='login-page'>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username / Email address</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Enter username / email"
                    name='username'
                    value={loginData.username}
                    onChange    ={onChangeField}
                     />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="password"
                    placeholder="Password"
                    name='password'
                    value={loginData.password}
                    onChange={onChangeField}
                     />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button >
                <p> Belum punya akun? <Button size="sm" variant="outline-primary" onClick={()=>history.push('/register')} style={{color:'black'},{height:'30px'}}>Daftar</Button> </p>
            </Form>
        </Container>
    )
}
export default Login;