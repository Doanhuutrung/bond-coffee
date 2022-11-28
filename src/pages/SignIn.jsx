import '../styles/login.css';
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../components/Logo/Logo';
import { Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {
  const [email,setEmail] = useState('email');
  const [password,setPassword] = useState('password');
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate()

  const signIn = async (e) =>{
    e.preventDefault()
    setLoading(true)
    try {
      const userCredential = await signInWithEmailAndPassword(auth,email,password)
      const user = userCredential.user;
      console.log(user)
      setLoading(false)
      toast.success("welcome to TrungCoffee")
      navigate('/Home')
    } catch (error) {
      setLoading(false)
      toast.error(error.message)
    }
  }

  return (
      <Logo title='Login'>
          <section>
            <Container>
              <Row>
                {
                  loading ? <Col lg='12' className='text-center'> 
                  <h5 className='fw-bold'> Wait a few minutes........</h5>
                  </Col> : <Col lg='5' className='m-auto text-center'>
                  <h3 className='fw-bold fs-4'> Login </h3>
                  <Form className="auth_form" onSubmit={signIn}>
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
                }
              </Row>
            </Container>
          </section>
    </Logo>
  )
}

export default SignIn