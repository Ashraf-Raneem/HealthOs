import React from "react";
import { Navigate } from "react-router-dom";

const auth = localStorage.getItem("accessToken");

const PublicRoute = ({ children }) => {
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to home page
  return auth ? <Navigate to="/Home" /> : children;
};

export default PublicRoute;
