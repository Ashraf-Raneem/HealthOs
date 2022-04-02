import React from "react";
import { returnInitials } from "../../utils/utilityFunctions";

const CustomerCard = ({ name, order }) => {
  return (
    <div className="flex flex-row bg-white rounded-xl p-2 px-4 shadow-lg my-4">
      <div className="bg-gray-200 p-2 mr-4">
        <span className="font-bold text-lg tracking-tighter">{returnInitials(name)}</span>
      </div>
      <div className="flex flex-col">
        <p className="font-bold text-md">{name}</p>
        <span className="text-gray-500 text-sm">{order} orders</span>
      </div>
    </div>
  );
};

export default CustomerCard;
