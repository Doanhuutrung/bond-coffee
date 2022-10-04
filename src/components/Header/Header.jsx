import React from 'react'

import { NavLink } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/images/Logoshop.png'
import user from '../../assets/images/avata.png'
import { Container, Row } from 'reactstrap'

const Header = () => {
  return (
    <header className='header'>
      <Container>
        <Row>
          <div className='nav_wrapper'>
            <div className='logo'>
              <img src={logo} alt='logo'/>
              <div>
                <h1>BondCoffee</h1>
                <p>Since 2022</p>
              </div>
            </div>
          </div>

            <div className="navigatiion">
              <ul className='menu'>
                <li className='nav_item'>
                  <NavLink to='Home'>Home</NavLink>
                </li>
                <li className='nav_item'>
                  <NavLink to='Home'>Shop</NavLink>
                </li>
                <li className='nav_item'>
                  <NavLink to='Home'>Cart</NavLink>
                </li>
              </ul>
            </div>
            
            <div className="nav__icons">

              <span className='fav__icon'>
                <i class="ri-star-line"></i>
              </span>
              <span className='cart__icon'>
                <i class="ri-cup-line"></i>
              </span>
              <span><img src={user} alt="user" /></span>
            </div>
        </Row>
      </Container>
    </header>
  )
}

export default Header