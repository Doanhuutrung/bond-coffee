import React from 'react';
import '../styles/cart.css';
import Logo from '../components/Logo/Logo';
import MenuDrink from '../components/Product/MenuDrink';
import { Col, Container, Row } from 'reactstrap';
import { motion } from 'framer-motion';
import { cartActions } from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';


const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  // const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (<Logo title='cart'>
    <MenuDrink title='Drink Cart' />
    <section>
      <Container>
        <Row>
          <Col lg='12'>
            {cartItems.length === 0 ? (
              <h2 className='fs-4 text-center'> Oops! you have no drink in your cart </h2>
            ) : (
              <table className='table bordered'>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    cartItems.map((item, index) => (
                      <Tr item={item} key={index} />
                    ))
                  }
                </tbody>
              </table>
            )}
          </Col>

          <Col lg='8'>
            <div>
              <h6> Here is your bill </h6>
              {/* <span> ${totalAmount} </span> */}
            </div>
            <div>
              <p className='fs-5 mt-6'> Bill will be free shipping within 5km or over $200 </p>
              <button className='buy_btn'><Link to='/Shop'> Let get more Drink !
              </Link></button>
              <button className='buy_btn'><Link to='/Checkout'> Checkout
              </Link></button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Logo>
  );
};


const Tr = ({ item }) => {
  const dispatch = useDispatch()
  const deleteDrinks = () => {
    dispatch(cartActions.deleteItem(item.id))

  }
  return <tr>
    <td><img src={item.imgUrl} alt="" /></td>
    <td> {item.productName}</td>
    <td> {item.price}</td>
    <td> {item.quantity}</td>
    <td>
      <motion.i whileTap={{ scale: 1.2 }} onClick={deleteDrinks} className="ri-delete-bin-7-line">
      </motion.i>
    </td>
  </tr>
}

export default Cart;