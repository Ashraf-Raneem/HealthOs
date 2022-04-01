import React from "react";
import {MdKeyboardArrowRight} from "react-icons/md";

const OrderCard = ({item}) => {
    return (
        <div className="bg-white rounded-xl p-2 px-4 shadow-lg my-4">
            <div className="flex flex-row justify-between">
                <h4 className="font-bold">Order #{item.id}</h4>
                <span className="text-muted text-gray-500">{item.timeStamp}</span>
            </div>
            <div className="flex flex-row justify-between items-center mt-3 mb-1">
                <div className="flex">
                    <img className="w-12 h-12" alt="product"></img>
                    <div className="flex flex-col ml-4">
                        <span className="text-gray-500">{item.quantity} Item</span>
                        <span className="text-primary font-medium">${item.price}</span>
                    </div>
                </div>
                <div>
                    <div className={`bg-${item.customerStatus === "Paid" ? "red-200" : item.customerStatus === "COD" ? "orange-300" : "green"} p-1 px-3 rounded`}>
                        <span className={`font-bold text-${item.customerStatus === "Paid" ? "red-400" : item.customerStatus === "COD" ? "orange" : "success"} uppercase`}>{item.customerStatus}</span>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray mt-4 pt-4 pb-2 flex flex-row justify-between">
                <span className="flex flex-row items-center font-medium text-gray-700">
                    <div className={`bg-${item.orderStatus === "Pending" ? "yellow-400" : item.orderStatus === "Shipped" ? "orange" : "success"} h-4 w-4 mx-1 rounded-full`}></div>
                    {item.orderStatus}
                </span>
                <button className="border border-slate-300 px-2">
                    <span className="flex flex-row items-center">Details <MdKeyboardArrowRight/> </span>
                </button>
            </div>
        </div>
    )
}

export default OrderCard;