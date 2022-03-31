import React from "react";

const DashboardBox = ({ title, value }) => {
  return (
    <div className="flex flex-col align-left shadow-lg rounded-sm bg-white p-4 w-48">
      <h4 className="text-gray-400 font-medium text-sm uppercase">{title}</h4>
      <p className="font-bold text-xl">{value}</p>
    </div>
  );
};

export default DashboardBox;
