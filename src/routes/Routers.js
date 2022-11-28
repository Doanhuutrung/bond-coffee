import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Product from '../pages/DrinkDetail';
import SignIn from '../pages/SignIn';
import Signup from '../pages/Signup';
import Checkout from '../pages/Checkout';
import Cart from '../pages/Cart';
import ManageRouter from './ManageRouter';
import Main from '../pages/admin/Main';

import NewDrink from '../pages/admin/NewDrink';
import ManageDrink from '../pages/admin/ManageDrink';



const Routers = () => {
  return ( 
  <Routes>
    <Route path='Home' element={<Home/>} />
    <Route path='Main' element={<Main/>} />
    <Route path='Shop' element={<Shop/>} />
    <Route path='Shop/:id' element={<Product/>} />
    <Route path='SignIn' element={<SignIn/>} />
    <Route path='Signup' element={<Signup/>} />
    <Route path='Cart' element={<Cart/>} />




    <Route path='/*' element={<ManageRouter/>}>
        <Route path = 'Checkout' element ={<Checkout/>} />
        <Route path = 'Dashboard/Manage-Drink' element ={<ManageDrink/>} />
        <Route path = 'Dashboard/Add-Drink' element={<NewDrink/>} />
    </Route>

    {/* <Route path='Checkout' 
    element={
      <ManageRouter>
       <Checkout/>
      </ManageRouter>
    }/> */}


  </Routes>
  );
}

export default Routers