import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import IceCream from "../../assets/images/icecream.jpg";

const OrderCard = ({ item }) => {
  return (
    <div className="bg-white rounded-xl p-2 px-4 shadow-lg my-4 lg:max-w-lg">
      <div className="flex flex-row justify-between">
        <h4 className="font-bold">Order #{item.id}</h4>
        <span className="text-muted text-gray-500">{item.timeStamp}</span>
      </div>
      <div className="flex flex-row justify-between items-center mt-3 mb-1">
        <div className="flex">
          <img className="w-12 h-12" src={IceCream} alt="product"></img>
          <div className="flex flex-col ml-4">
            <span className="text-gray-500">{item.quantity} Item</span>
            <span className="text-primary font-medium">${item.price}</span>
          </div>
        </div>
        <div>
          <div className={`${item.customerStatus === "Paid" ? "bg-red-200" : "bg-orange-200"} p-1 px-3 rounded`}>
            <span className={`font-bold ${item.customerStatus === "Paid" ? "text-danger" : "text-warning"} uppercase`}>
              {item.customerStatus}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray mt-4 pt-4 pb-2 flex flex-row justify-between">
        <span className="flex flex-row items-center font-medium text-gray-700">
          <div
            className={`${
              item.orderStatus === "Accepted"
                ? "bg-success"
                : item.orderStatus === "Pending"
                ? "bg-yellow-500"
                : "bg-warning"
            } h-4 w-4 mx-1 rounded-full`}
          ></div>
          {item.orderStatus}
        </span>
        <button className="border border-slate-300 px-2">
          <span className="flex flex-row items-center">
            Details <MdKeyboardArrowRight />{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
