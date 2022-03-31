import React, { useState } from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdOutlineWindow } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

const Footer = () => {
  const [page, setPage] = useState("Home");
  return (
    <div className="flex flex-row justify-evenly bg-white border-top border-secondary absolute bottom-0 left-0 right-0 p-3">
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => setPage("Home")}
      >
        <BiHomeAlt size="1.5rem" color={page === "Home" ? "#0170ba" : ""} />
        <p className={`${page === "Home" ? "font-bold text-primary" : "font-medium"}`}>Home</p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => setPage("Orders")}
      >
        <RiMoneyDollarBoxLine size="1.5rem" color={page === "Orders" ? "#0170ba" : ""} />
        <p className={`${page === "Orders" ? "font-bold text-primary" : "font-medium"}`}>Orders</p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => setPage("Products")}
      >
        <MdOutlineWindow size="1.5rem" color={page === "Products" ? "#0170ba" : ""} />
        <p className={`${page === "Products" ? "font-bold text-primary" : "font-medium"}`}>Products</p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => setPage("Manage")}
      >
        <FiLayers size="1.5rem" color={page === "Manage" ? "#0170ba" : ""} />
        <p className={`${page === "Manage" ? "font-bold text-primary" : "font-medium"}`}>Manage</p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => setPage("Account")}
      >
        <BsPerson size="1.5rem" color={page === "Account" ? "#0170ba" : ""} />
        <p className={`${page === "Account" ? "font-bold text-primary" : "font-medium"}`}>Account</p>
      </div>
    </div>
  );
};

export default Footer;
