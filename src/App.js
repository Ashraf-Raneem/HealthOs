import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import PublicRoute from "./utils/PublicRoutes";
import PrivateRoute from "./utils/PrivateRoutes";
import CustomerList from "./pages/customer-list/CustomerList";
import Dashboard from "./pages/dashboard/Dashboard";
import OrderListPage from "./pages/order-list/OrderList";
import Payment from "./pages/payment/Payment";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index path="/" element={<Dashboard />} />
          <Route path="home" element={<Dashboard />} />
          <Route path="customers" element={<CustomerList />} />
          <Route path="orders" element={<OrderListPage />} />
          <Route path="payment" element={<Payment />} />
        </Route>
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </React.Fragment>
  );
};

export default App;
