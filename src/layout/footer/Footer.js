import React from "react";
import { BiHomeAlt } from "react-icons/bi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";
import { MdOutlineWindow } from "react-icons/md";
import { FiLayers } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row justify-evenly bg-white border-t-2 border-secondary fixed bottom-0 left-0 right-0 p-3">
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => {
          navigate("/home");
        }}
      >
        <BiHomeAlt size="1.5rem" color={window.location.pathname === "/home" ? "#0170ba" : ""} />
        <p className={`${window.location.pathname === "/home" ? "font-bold text-primary" : "font-medium"}`}>Home</p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => {
          navigate("/orders");
        }}
      >
        <RiMoneyDollarBoxLine size="1.5rem" color={window.location.pathname === "/orders" ? "#0170ba" : ""} />
        <p className={`${window.location.pathname === "/orders" ? "font-bold text-primary" : "font-medium"}`}>Orders</p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => {
          navigate("/payment");
        }}
      >
        <MdOutlineWindow size="1.5rem" color={window.location.pathname === "/payment" ? "#0170ba" : ""} />
        <p className={`${window.location.pathname === "/payment" ? "font-bold text-primary" : "font-medium"}`}>
          Payments
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => {
          navigate("/customers");
        }}
      >
        <FiLayers size="1.5rem" color={window.location.pathname === "/customers" ? "#0170ba" : ""} />
        <p className={`${window.location.pathname === "/customers" ? "font-bold text-primary" : "font-medium"}`}>
          Manage
        </p>
      </div>
      <div
        className="flex flex-col justify-center items-center text-gray-500 cursor-pointer"
        onClick={() => {
          localStorage.removeItem("accessToken");
          window.location.reload();
        }}
      >
        <BsPerson size="1.5rem" color={window.location.pathname === "Account" ? "#0170ba" : ""} />
        <p className={`${window.location.pathname === "Account" ? "font-bold text-primary" : "font-medium"}`}>Logout</p>
      </div>
    </div>
  );
};

export default Footer;
