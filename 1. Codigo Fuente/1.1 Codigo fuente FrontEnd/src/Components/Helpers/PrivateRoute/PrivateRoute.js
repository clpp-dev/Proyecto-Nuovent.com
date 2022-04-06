import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { AuthUser } from '../AuthUser/AuthUser';

let currentUser = AuthUser();

export function PrivateRoute() {
  return currentUser ? <Outlet /> : <Navigate to="/" />;
}


