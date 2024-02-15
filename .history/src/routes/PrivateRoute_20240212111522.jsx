// En PrivateRoute.js

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { user } = useUser();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (user && roles.includes(user.role)) {
          return <Component {...props} />;
        } else if (user) {
          return <Redirect to="/unauthorized" />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
