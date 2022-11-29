import React, { useEffect, useRef } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
import { motion } from 'framer-motion';
import logo from '../../assets/images/Logoshop.png';
import user from '../../assets/images/avata.png';
import { Container, Row } from 'reactstrap';
import { useSelector } from 'react-redux';
import useAuth from '../../custom/useAuth';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { toast } from 'react-toastify';



const nav__link = [
  {
    path: 'Home',
    display: 'Home'
  },
  {
    path: 'Shop',
    display: 'Shop'
  },
  {
    path: 'Cart',
    display: 'Cart'
  },
  {
    path: 'SignIn',
    display: 'SignIn'
  }
]

const Header = () => {

  const headerRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const profileACtionRef = useRef(null);
  // const menuRef = useRef(null);
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const stickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        headerRef.current.classList.add('sticky_header_scrolling')
      } else {
        headerRef.current.classList.remove('sticky_header_scrolling')
      }
    });
  };

  const Logout = () => {
    signOut(auth).then(() => {
      toast.success('Bye Bye ! hope to see you again !!')
    }).catch(err => {
      toast.error(err.message)
    })
  }


  useEffect(() => {
    stickyHeader()
    return () => window.removeEventListener('scroll', stickyHeader);
  });

  // const menuToggle = () => menuRef.current.classList.toggle('active_menu')
  const navigateToCart = () => {
    navigate('/Cart');
  }

  const toogleProfile = () => profileACtionRef.current.classList.toggle('show__profile_actions')

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo' />
              <div>
                <h1>TrungCoffee</h1>
                <p>Since 2022</p>
              </div>
            </div>
            <div className="navigatiion">
              <ul className='menu'>
                {
                  nav__link.map(item => (
                    <li className='nav_item'>
                      <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active' : ''}>{item.display} </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>

            <div className="nav_icons">
              <span className='fav__icon'>
                <i className="ri-star-line"></i>
                <span className='badge'>1</span>
              </span>
              <span className='cart__icon' onClick={navigateToCart}>
                <i className="ri-cup-line"></i>
                <span className='badge'>{totalQuantity}</span>
              </span>

              <div className='profile' >
                <motion.img
                  whileTap={{ scale: 1.1 }}
                  src={currentUser ? currentUser.photoURL : user}
                  alt=""
                  onClick={toogleProfile} />


                <div className="profile_actions" ref={profileACtionRef} onClick={toogleProfile}>
                  {currentUser ? (<span onClick={Logout} > Log out </span>) : (
                    <div>
                      <Link to='/SignIn'> SignIn </Link>
                      <Link to='/SignUp'> SignUp </Link>
                      <Link to='/Dashboard'> Dashboard </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header