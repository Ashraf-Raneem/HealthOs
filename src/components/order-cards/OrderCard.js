import React from "react";
import {MdKeyboardArrowRight} from "react-icons/md";

const OrderCard = () => {
    return (
        <div className="bg-white rounded-xl p-2 px-4 shadow-lg my-4">
            <div className="flex flex-row justify-between">
                <h4 className="font-bold">Order #281217</h4>
                <span className="text-muted text-gray-500">Today, 11:11 PM</span>
            </div>
            <div className="flex flex-row justify-between items-center mt-3 mb-1">
                <div className="flex">
                    <img className="w-12 h-12" alt="product"></img>
                    <div className="flex flex-col ml-4">
                        <span className="text-gray-500">1 Item</span>
                        <span className="text-primary font-medium">$10,201</span>
                    </div>
                </div>
                <div>
                    <div className="bg-red-200 p-1 px-3 rounded">
                        <span className="font-bold text-danger uppercase">Paid</span>
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-gray mt-4 pt-4 pb-2 flex flex-row justify-between">
                <span className="flex flex-row items-center font-medium text-gray-700">
                    <div className="bg-orange h-4 w-4 mx-1 rounded-full"></div>
                    Pending
                </span>
                <button className="border border-slate-300 px-2">
                    <span className="flex flex-row items-center">Details <MdKeyboardArrowRight/> </span>
                </button>
            </div>
        </div>
    )
}

export default OrderCard;