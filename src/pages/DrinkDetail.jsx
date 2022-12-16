import React from 'react';
import { Container,Row,Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import Drinks from '../assets/data/Drinks';
import Logo from '../components/Logo/Logo';
import MenuDrink from '../components/Product/MenuDrink';
import { useState, useRef } from 'react';
import '../styles/drink-details.css';
import {motion} from 'framer-motion';
import Products from '../components/Product/Products';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';






const DrinkDetail = () => {
  const [view,setView] = useState('description');
  const reviewbyUser = useRef('');
  const reviewMessage = useRef('');
  const {id} = useParams();
  const dispatch = useDispatch();
  const [rating, setRating] = useState(null);
  const drink = Drinks.find(item => item.id === id);
  const {imgUrl, productName, price, avgRating, review, description, shortDesc, category} = drink;
  const related = Drinks.filter((item) => item.category === category);



  const addtoCart = () => {
    dispatch(cartActions.addItem({
      id,
      image: imgUrl,
      productName,
      price,
    })
    );
    toast.success('Drink added successfully')
  };
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
  return (
    <Logo className={productName}>
      <MenuDrink title={productName}/>
      <section className='pt-0'>
        <Container>
          <Row>
            <Col lg='3'>
                <img src={imgUrl} alt="" />
            </Col>

            <Col lg='4'>
              <div className='drink__details'>
                <h2> Product Name </h2>
                <div className='drink_rating '>
                <div >
                    <span onClick={() => setRating(1)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(2)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(3)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(4)}> <i className="ri-star-fill"></i></span>
                    <span onClick={() => setRating(5)}> <i className="ri-star-fill"></i></span>
                  </div>
                <p>(<span> {avgRating} </span> ratings)</p>
                </div>
                <div className='d-flex align-items-center gap-5'>
                <span className='drink_price'>{price}</span>
                <span> Category: {category.toUpperCase()}</span>
                </div>
                <p className='drink_desc'>{shortDesc}</p>
                <motion.button whileTap={{scale: 1.2}} className="buy_btn" onClick={addtoCart}>Add to cart </motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab_wrapper">
              <h6 className={`${view === 'description' ? 'active_desc' : ''}`} onClick={() => setView('description')}>Description </h6>
              <h6 className={`${view === 'review' ? 'active_desc:' : ''}`} onClick={() => setView('review')}> Reviews</h6>
              </div>
              {
                view === 'description' ? (<div className='tab_content'> <p> {description}</p></div>) : (
                <div className=' drink_review'>
                  <div className='review_wrapper'>
                    <ul>
                      {review?.map((item, index) => (
                        <li key={index} className='mb-5'>
                          <h6> Doan Huu Trung </h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>
                      <div className="review_form ">
                        <h4> Drinks Experience </h4>
                        <form action="" onSubmit={submitHandler}> 
                      <div className="form_group">
                        <input type="text" placeholder='Enter name' ref={reviewbyUser} />   
                      </div>
                      <div className='form_group'>
                      <div className='form_group gap-5 align-items-center d-flex'>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(1)}>1<i className="ri-star-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(2)}>2<i className="ri-star-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(3)}>3<i className="ri-star-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(4)}>4<i className="ri-star-fill"></i></motion.span>
                          <motion.span whileTap={{ scale: 1.2 }} onClick={() => setRating(5)}>5<i className="ri-star-fill"></i></motion.span>
                      </div>
                      <div className='form_group'>
                          <textarea ref={reviewMessage} rows={4} type='text' placeholder='let me know how you feel about this drink ^^' />
                        </div>
                      </div>
                      <button type='submit' className='buy_btn'> Submit </button>
                        </form>
                      </div>
                  </div>
                </div>)}
            </Col>
            <Col lg='12' className='mt-6'>
              <h2 className="relate_content"> Other water dishes you may like</h2>
            </Col>
            <Products data={related} />
          </Row>
        </Container>
      </section>
    </Logo>
  )
}

export default DrinkDetail