import React from 'react';
import { Navigate } from 'react-router-dom';
import Auth from '../custom/Auth';
import { Outlet } from 'react-router-dom';

const ManageRouter = (children) => {
    const {currentUser} = Auth()

  return currentUser ? <Outlet/>  : <Navigate to="Login" />
}

export default ManageRouter