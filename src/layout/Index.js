import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

const Layout = () => {
  return (
    <div className="mb-24">
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
