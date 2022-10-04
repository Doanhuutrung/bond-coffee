import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Checkout from '../pages/Checkout'
import Cart from '../pages/Cart'

const Routers = () => {
  return <Routes>
    <Route path='Home' element={<Home/>} />
    <Route path='Shop' element={<Shop/>} />
    <Route path='Shop/:id' element={<Product/>} />
    <Route path='Login' element={<Login/>} />
    <Route path='Signup' element={<Signup/>} />
    <Route path='Checkout' element={<Checkout/>} />
    <Route path='Cart' element={<Cart/>} />
  </Routes>
}

export default Routers