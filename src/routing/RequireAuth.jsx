import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import authService from '../services/auth.service';

const RequireAuth = ({ children, roles }) => {
  let location = useLocation();
  const userValue = authService.userValue;
  if (!userValue)
    return <Navigate to="/login" state={{ from: location }} replace />;

  if (roles && !roles.includes(userValue.role))
    authService.logout();

  return children;
};

export default RequireAuth;