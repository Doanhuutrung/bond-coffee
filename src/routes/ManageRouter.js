import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../custom/useAuth';
import { Outlet } from 'react-router-dom';

const ManageRouter = (children) => {
    const {currentUser} = useAuth()

  return currentUser ? <Outlet/>  : <Navigate to="/SignIn" />
}

export default ManageRouter;