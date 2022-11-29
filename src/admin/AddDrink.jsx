
import React from 'react';
import { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import {toast} from 'react-toastify';
import {db, storage} from '../firebase/firebase.config';
import { ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



const AddDrink = () => {

  const [enterTitle, setEnterTitle] = useState('');
  const [enterDescription,setEnterDescription] = useState('');
  const [enterCategory,setEnterCategory] = useState('');
  const [enterPrice,setEnterPrice] = useState('');
  const [enterDrinkImg,setEnterDrinkImg] = useState(null);
  const [loading,setLoading] = useState(false);

  const navigate = useNavigate();

  const addDrink = async(e) => {
    e.preventDefault();
    setLoading(true);
    // const Drink = {
    //   title: enterTitle,
    //   description: enterDescription,
    //   category : enterCategory,
    //   price: enterPrice,
    //   imgURL: enterDrinkImg
    // };
    //add Drink data to the Firebase
    try {
      const docRef = await collection(db,'drinks')
      const storageRef = ref(storage, `drinkImages/${Date.now() + enterDrinkImg.name}`)
      const uploadTask = uploadBytesResumable(storageRef, enterDrinkImg);
      uploadTask.on(()=>{
        toast.error('images not upload. Pls try again !!')
      }, () =>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
          await addDoc(docRef, {
            drink: enterTitle,
            description: enterDescription,
            category : enterCategory,
            price: enterPrice,
            imgURL: downloadURL,
          });
        });
      });
      setLoading(false);
      toast.success('Add Drink successfully !!!');
      navigate('/Dashboard/Manage-Drink');
    } catch (error) {
      setLoading(false);
      toast.error('Add Drink failed. Pls try again !!');
    }

    // console.log(Drink);
  }

  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {
              loading ? (<h4> Loading...........</h4>) : (
                <>
              <h4> Add new Drink </h4>
            <Form onSubmit={addDrink}>
              <FormGroup className='form-group'>
                <span>Product title:</span>
                <input type='text' placeholder='' value={enterTitle} onChange={e => setEnterTitle(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form-group'>
                <span>Description:</span>
                <input type='text' placeholder='' value={enterDescription} onChange={e => setEnterDescription(e.target.value)} required/>
              </FormGroup>
        <div className='d-flex align-items-center justify-content-between'>
              <FormGroup className='form-group w-100'>
                <span>Price:</span>
                <input type='text' placeholder='100.000vnd' value={enterPrice} onChange={e => setEnterPrice(e.target.value)} required/>
              </FormGroup>
              <FormGroup className='form-group'>
                <span>Category:</span>
                <select className='w-100 p-2' value={enterCategory} onChange={e => setEnterCategory(e.target.value)}>
                  <option value='Coffee'> Coffee </option>
                  <option value='Tea'> Tea </option>
                  <option value='Smoothie'> Smoothie </option>
                </select>
              </FormGroup>
        </div>
        <div>
              <FormGroup className='form-group'>
                <span>Image:</span>
                <input type='file' onChange={e=> setEnterDrinkImg(e.target.files[0])} required/>
              </FormGroup>
        </div>
        <button className="buy_btn" type='submit'> Add new Drink </button>
            </Form>
                </>
              )
            }
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AddDrink