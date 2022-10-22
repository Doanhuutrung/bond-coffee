
import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../components/Logo/Logo';
import { Form, FormGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';

import { auth, storage } from '../firebase/firebase.config';
import { async } from '@firebase/util';
import { toast } from 'react-toastify';
import { db } from '../firebase/firebase.config';


const Signup = () => {
  const [email, setEmail] = useState('email');
  const [username, setuserName] = useState('username');
  const [password, setPassword] = useState('password');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const signup = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadUser = uploadBytesResumable(storageRef, file);
      const user = userCredential.user;
      uploadUser.on((error) => {
        toast.error(error.message)
      }, () => {
        getDownloadURL(uploadUser.snapshot.ref).then(async (downloadURL) => {
          //update profile of user
         await updateProfile(user,{
            displayName: username,
            photoURL: downloadURL,
          });

          //store user's data 
          await setDoc(doc(db,'users',user.uid),{
            uid: user.uid,
            displayName: username,
            email,
            photoURL: downloadURL,
          });
        });
      })
      console.log(user)
    } catch (error) {
      toast.error('something went wrong !!!')
    }
  }
  return (
    <Logo title='Sign up'>
      <section>
        <Container>
          <Row>
            <Col lg='5' className='m-auto text-center'>
              <h3 className='fw-bold fs-4'> Create an account </h3>
              <Form className="auth_form" onSubmit={signup}>
                <FormGroup className='form_group'>
                  <input type='name' placeholder='Enter Username' value={username} onChange={e => setuserName(e.target.value)} />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='email' placeholder='Enter your email' value={email} onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                <FormGroup className='form_group'>
                  <input type='password' placeholder='Enter your password' value={password} onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                <p> Please upload your profile picture </p>
                <FormGroup className='form_group'>
                  <input type='file' onChange={e => setFile(e.target.files[0])} />
                </FormGroup>
                <button type='submit' className='login_btn auth_btn'>Create an account </button>
                <p> Already have an account ? {''}
                  <Link to='/Login'> Login </Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Logo>
  )
}

export default Signup