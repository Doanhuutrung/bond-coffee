import React, { useRef, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import Logo from '../components/Logo/Logo'
import MenuDrink from '../components/Product/MenuDrink';
import '../styles/drink-details.css';
import { motion } from 'framer-motion'
import Products from '../components/Product/Products';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import { toast } from 'react-toastify';
import { db } from '../firebase/firebase.config';
import {doc, getDoc} from 'firebase/firestore';
import { useEffect } from 'react';
import useGetData from '../custom/useGetData';


const DrinkDetail = () => {
  const [drink,setDrink] = useState({})
  const [view, setView] = useState('description');
  const reviewbyUser = useRef('');
  const reviewMessage = useRef('');
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const {data: drinks} = useGetData('drinks');
  // const drink = Drinks.find(item => item.id === id);
  const docRef = doc(db,'drinks',id);
  useEffect(() => {
    const getDrink = async() => {
      const docSnap = await getDoc(docRef);
      if(docSnap.exists()){
        setDrink(docSnap.data())
      }else{
        console.log('no product is found !!!')
      }
    }
    getDrink();
  },[docRef])
  const { imgUrl, productName, price, description, avgRating, shortDesc, category } = drink;
  const related = drinks.filter((item) => item.category === category);

  const submitHandler = (a) => {
    a.preventDefault()
    const reviewUserName = reviewbyUser.current.value;
    const reviewUserMessage = reviewMessage.current.value;
    const objectReview = {
      userName: reviewUserName,
      text: reviewUserMessage,
      rating:rating,
    };
    console.log(objectReview);
    toast.success('you just submitted 1 review to help us grow')
  };

  const addtoCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    })
    );
    toast.success('Drink added successfully')
  }

  return (
    <Logo title={productName}>
      <MenuDrink title={productName} />
      <section className='pt-1'>
        <Container>
          <Row>
            <Col className='product_image'>
              <img src={imgUrl} alt='' />
            </Col>
            <Col lg=''>
              <div className="drink_detail">
                <h2>{productName}</h2>
                <div className='drink_rating gap-4'>
                  <div >
                    <span onClick={() => setRating(1)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(2)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(3)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(4)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(5)}> <i className="ri-star-fill"></i></span>
                  </div>
                  <p>(<span> {avgRating} </span> ratings)</p>
                </div>
                <div className='d-flex align-items-center gap-4'>
                  <span className='drink_price'>{price}</span>
                  {/* <span> Category: {category.toUpperCase()}</span> */}
                </div>
                <p className='drink_des'>{shortDesc}</p>
                <motion.button whileTap={{ scale: 1.2 }} className='buy_btn' onClick={addtoCart}> Add to Cart DrinkDetail </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='15'>
              <div className='desc_wrapper gap-5'>
                <h6 className={`${view === 'description' ? 'active_desc' : ''}`} onClick={() => setView('description')}>
                  Description
                </h6>
                <h6 className={`${view === 'review' ? 'active_desc:' : ''}`} onClick={() => setView('review')}>
                  Reviews</h6>
              </div>
              {view === 'description' ? (<div className='desc_title mt-4'>
                <p> {description}</p>
              </div>
              ) : (
                <div className='drink_review mt-4 '>
                  <div className='review_wraper'>
                    {/* <ul>
                      {
                        review?.map((item, index) => (
                          <li key={index} className='mb-5'>
                            <h6> Le Anh Tuan </h6>
                            <span> {item.rating} (rating) </span>
                            <p>{item.text}</p>
                          </li>
                        ))}
                    </ul> */}
                    <div className='comment_form'>
                      <h4> Drink experience </h4>
                      <form action='' onSubmit={submitHandler}>
                        <div className='form_group'>
                          <input type='text' placeholder='Enter your name' ref={reviewbyUser} />
                        </div>

                        <div className='form_group gap-5 align-items-center '>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}><i className="ri-star-fill"></i> </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}><i className="ri-star-fill"></i> </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}><i className="ri-star-fill"></i> </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}><i className="ri-star-fill"></i> </motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}><i className="ri-star-fill"></i> </motion.span>
                        </div>
                        <div className='form_group'>
                          <textarea ref={reviewMessage} rows={10} type='text' placeholder='let me know how you feel about this drink ^^' />
                        </div>
                        <button type='submit' className='buy_btn'> Submit </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg='12'>
              <h2 className="relate_content"> Other water dishes you may like</h2>
            </Col>
            <Products data={related} />
          </Row>
        </Container>
      </section>
    </Logo>
  )
};

export default DrinkDetail