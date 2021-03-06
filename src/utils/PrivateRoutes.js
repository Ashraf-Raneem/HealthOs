import React from "react";
import { Navigate } from "react-router-dom";

const auth = localStorage.getItem("accessToken");

const PrivateRoute = ({ children }) => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  return auth ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
