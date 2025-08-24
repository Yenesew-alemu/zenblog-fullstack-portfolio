// /client/src/components/ProtectedRoute.jsx

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {
  // Check for the authentication token in localStorage
  const token = localStorage.getItem('authToken');

  // If a token exists, render the child routes.
  // The <Outlet /> component is a placeholder provided by react-router-dom
  // where the nested child route components will be rendered.
  if (token) {
    return <Outlet />;
  }

  // If no token exists, redirect the user to the /login page.
  // The `replace` prop is used to replace the current entry in the
  // history stack instead of pushing a new one, which is better for login flows.
  return <Navigate to="/login" replace />;
}

export default ProtectedRoute;