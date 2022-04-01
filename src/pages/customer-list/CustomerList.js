import React from "react";
import {AiOutlineArrowLeft} from "react-icons/ai";
import CustomerCard from "../../components/customer-cards/CustomerCard";
import { customerData } from "../../utils/Data";

const CustomerList = () => {
  return (
      <div>
          <div className="w-100 h-32 bg-primary">
            <div className="flex flex-row justify-between p-5">
                <AiOutlineArrowLeft size="1.5rem" color="#ffffff"/>
                <p className="text-white text-lg font-bold flex text-left">
                    My Customers
                </p>
                <div></div>
            </div>
            <input
                className="shadow appearance-none border ml-6 rounded w-11/12 py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Search with customer name"
            />
        </div>
        <div className="px-5">
          {
            customerData.map(customer => <CustomerCard name={customer.name} order={customer.orderNum}/>)
          }
        </div>
      </div>
  );
};

export default CustomerList;
