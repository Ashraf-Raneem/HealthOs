import React, { useState } from "react";
import Slider from "react-slick";
import { orderList } from "../../utils/Data";
import OrderCard from "../order-cards/OrderCard";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
};

const OrderList = () => {
  const [activeFilter, setActiveFilter] = useState("All Time");

  return (
    <div>
      <Slider {...settings} className="my-5">
        <div
          className={`${
            activeFilter === "All Time" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("All Time")}
        >
          <h3>All Time (22)</h3>
        </div>
        <div
          className={`${
            activeFilter === "Today" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("Today")}
        >
          <h3>Today (12)</h3>
        </div>
        <div
          className={`${
            activeFilter === "Yesterday" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("Yesterday")}
        >
          <h3>Yesterday (10)</h3>
        </div>
        <div
          className={`${
            activeFilter === "Active Order" ? "bg-primary text-white" : "bg-secondary"
          } p-2 rounded-3xl text-center cursor-pointer`}
          onClick={() => setActiveFilter("Active Order")}
        >
          <h3>Active Order (2)</h3>
        </div>
      </Slider>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {orderList.map((item) => (
          <OrderCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default OrderList;
