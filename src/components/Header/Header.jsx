import React from 'react';

import { NavLink } from 'react-router-dom';
import './Header.css';
import { motion } from 'framer-motion';
import logo from '../../assets/images/Logoshop.png';
import user from '../../assets/images/avata.png';
import { Container, Row } from 'reactstrap';


const nav__link = [
  {
    path:'Home',
    display:'Home'
  },
  {
    path:'Shop',
    display:'Shop'
  },
  {
    path:'Cart',
    display:'Cart'
  },
]

const Header = () => {


  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo'/>
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
                        <NavLink to={item.path} className={(navClass)=>navClass.isActive ? 'nav_active':''}>{item.display} </NavLink>
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
              <span className='cart__icon'>
                <i className="ri-cup-line"></i>
                <span className='badge'>1</span>
              </span>
              <span>
                <motion.img whileTap={{ scale: 1.1 }} src={user} alt="" />
              </span>
            </div>

            <div className="mobile_menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header