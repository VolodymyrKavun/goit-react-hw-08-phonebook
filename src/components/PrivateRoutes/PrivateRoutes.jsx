import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const { token = false } = useSelector(state => state);

  return token ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoutes;
