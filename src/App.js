import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CustomerList from "./pages/customer-list/CustomerList";
import Dashboard from "./pages/dashboard/Dashboard";
import OrderListPage from "./pages/order-list/OrderList";
import Payment from "./pages/payment/Payment";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/home" element={<Dashboard />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/order-list" element={<OrderListPage />}></Route>
      <Route path="/customer-list" element={<CustomerList />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
  );
};

export default App;
