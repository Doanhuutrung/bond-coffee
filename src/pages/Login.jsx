
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../components/Logo/Logo';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email,setEmail] = useState('email');
  const [password,setPassword] = useState('password');

  return (
      <Logo title='Login'>
          <section>
            <Container>
              <Row>
                <Col lg='5' className='m-auto text-center'>
                  <h3 className='fw-bold fs-4'> Login </h3>
                  <Form className="auth_form">
                    <FormGroup className='form_group'>
                        <input type='email' placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                    </FormGroup>
                    <FormGroup className='form_group'>
                        <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)}/>
                    </FormGroup>
                    <button type='submit' className='login_btn auth_btn'>Login</button>
                    <p>Don't have an account ? 
                      <Link to ='/signup'> Create an account !</Link>
                    </p>
                  </Form>
                </Col>
              </Row>
            </Container>
          </section>
    </Logo>
  )
}

export default Login