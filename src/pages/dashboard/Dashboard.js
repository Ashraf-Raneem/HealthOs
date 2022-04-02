import React from "react";
import ReactSwitch from "react-switch";
import { RiWhatsappLine } from "react-icons/ri";
import { BsFillCheckCircleFill } from "react-icons/bs";
import DashboardBox from "../../components/dashboard-box/DashboardBox";
import OrderList from "../../components/order-list/OrderList";

const Dashboard = () => {
  return (
    <div>
      <div className="w-100 h-32 bg-primary">
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
        <div className="flex flex-col bg-white rounded w-11/12 border border-secondary mx-auto p-3 shadow-lg">
          <h4 className="font-bold text-md">Share more to Earn More</h4>
          <span className="text-gray-700">
            Your customer can visit your online store and store the orders from this link
          </span>
          <div className="flex flex-row justify-between mt-2">
            <p className="text-orange font-bold underline">mydokan.io/mano</p>
            <div className="flex bg-success items-center rounded-md px-2">
              <RiWhatsappLine color="#ffffff"></RiWhatsappLine>
              <span className="text-white text-sm">Share</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 my-2 p-6">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-bold">Overview</h3>
        </div>
        <div></div>
      </div>
      <div className="grid grid-cols-2 gap-4 mx-6">
        <DashboardBox title="orders" value="33" />
        <DashboardBox title="Total Sales" value="$2,918" />
        <DashboardBox title="Store Views" value="301" />
        <DashboardBox title="Product Views" value="19,121" />
      </div>
      <div className="my-2 p-6">
        <div className="flex flex-row justify-between">
          <h3 className="text-xl font-bold">Active Orders</h3>
          <div></div>
        </div>
        <OrderList />
      </div>
    </div>
  );
};

export default Dashboard;
