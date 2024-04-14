import React from 'react';
import { Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists
  const navigate = useNavigate();

  if (!isAuthenticated) {
    // Redirect to login page
    navigate('/about');
    return null; // Return null to prevent rendering of the protected component
  }

  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
