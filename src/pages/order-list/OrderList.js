import React from "react";
import { GoSettings } from "react-icons/go";
import OrderList from "../../components/order-list/OrderList";

const OrderListPage = () => {
  return (
    <div>
      <div className="w-100 h-32 bg-primary">
        <div className="flex flex-row justify-between p-5">
          <div></div>
          <p className="text-white text-lg font-bold flex text-left">All Orders (102)</p>
          <GoSettings size="1.5rem" color="#ffffff" />
        </div>
        <input
          className="shadow appearance-none border ml-6 rounded w-11/12 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Search with order number"
        />
      </div>
      <div className="px-5">
        <OrderList />
      </div>
    </div>
  );
};

export default OrderListPage;
