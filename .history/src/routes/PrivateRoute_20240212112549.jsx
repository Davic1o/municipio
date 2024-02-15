// En PrivateRoute.js

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';

const PrivateRoute = ({ element: Element, roles, ...rest }) => {
  const { user } = useUser();

  return (
    <Route
      {...rest}
      element={
        user && roles.includes(user.role) ? (
          <Element />
        ) : user ? (
          <Navigate to="/unauthorized" replace />
        ) : (
          <Navigate to="/login" replace />
        )
      }
    />
  );
};

export default PrivateRoute;

