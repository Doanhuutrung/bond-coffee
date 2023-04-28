import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Product from "../pages/DrinkDetail";
import SignIn from "../pages/SignIn";
import Signup from "../pages/Signup";
import Checkout from "../pages/Checkout";
import Cart from "../pages/Cart";
import ManageRouter from "./ManageRouter";
import AddDrink from "../admin/AddDrink";
import ManageDrink from "../admin/ManageDrink";
import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import Payment from "../Payment/Payment";

const Routers = () => {
  return (
    <Routes>
      <Route path="Home" element={<Home />} />
      <Route path="Shop" element={<Shop />} />
      <Route path="Shop/:id" element={<Product />} />
      <Route path="Cart" element={<Cart />} />

      <Route path="/*" element={<ManageRouter />}>
        <Route path="Checkout" element={<Checkout />} />
        <Route path="Dashboard" element={<Dashboard />} />
        <Route path="Dashboard/Manage-Drink" element={<ManageDrink />} />
        <Route path="Dashboard/Add-Drink" element={<AddDrink />} />
        <Route path="Dashboard/Users" element={<Users />} />
      </Route>
      <Route path="Payment" element={<Payment/>} />
      <Route path="SignIn" element={<SignIn />} />
      <Route path="Signup" element={<Signup />} />

      {/* <Route path='Checkout' 
    element={
      <ManageRouter>
       <Checkout/>
      </ManageRouter>
    }/> */}
    </Routes>
  );
};

export default Routers;
