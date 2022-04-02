import React, { useState } from "react";
import Slider from "react-slick";
import { orderList } from "../../utils/Data";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
};

const TransList = () => {
  const [activeFilter, setActiveFilter] = useState("On Hold");

  return (
    <div>
      <Slider {...settings} className="my-5">
        <div
          className={`${
            activeFilter === "On Hold" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("On Hold")}
        >
          <h3>On Hold (12)</h3>
        </div>
        <div
          className={`${
            activeFilter === "Payouts" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("Payouts")}
        >
          <h3>Payouts (23)</h3>
        </div>
        <div
          className={`${
            activeFilter === "Refunds" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("Refunds")}
        >
          <h3>Refunds (1)</h3>
        </div>
        <div
          className={`${
            activeFilter === "Rejects" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("Rejects")}
        >
          <h3>Rejects (2)</h3>
        </div>
      </Slider>
      <div className="flex flex-col divide-y">
        {orderList.map((item) => (
          <div className="flex flex-row justify-between py-5">
            <div className="flex">
              <img className="w-14 h-14 mr-4"></img>
              <div className="flex flex-col">
                <p>Order #{item.id}</p>
                <span className="text-light">{item.timeStamp}</span>
              </div>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-primary font-medium">${item.price}</p>
              <div className="flex flex row items-center">
                {" "}
                <div className="bg-success h-4 w-4 mx-1 rounded-full"></div>
                {item.orderStatus}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransList;
