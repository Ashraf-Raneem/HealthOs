import React from "react";
import ReactSwitch from "react-switch";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Dashboard = () => {
  return (
    <div className="w-100 h-28 bg-primary">
      <div className="flex justify-between p-5">
        <p className="text-white text-lg font-bold flex">
          Mono Super Market <BsFillCheckCircleFill color="#ffffff" size="1.2em" className="ml-2 mt-1" />
        </p>
        <ReactSwitch
          width={70}
          onColor="#ffffff"
          onHandleColor="#e6e6e6"
          uncheckedIcon={<div className="text-white font-bold">Off</div>}
          checkedIcon={<div className="text-primary font-bold">On</div>}
        />
      </div>
    </div>
  );
};

export default Dashboard;
