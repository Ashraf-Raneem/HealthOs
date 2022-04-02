import React from "react";
import { AiOutlineInfoCircle, AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import TransList from "../../components/transaction-list/TransactionList";
import Head from "../../layout/head/Head";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Head title="Payments"></Head>
      <div className="w-100">
        <div className="h-18 bg-primary">
          <div className="flex flex-row justify-between p-5">
            <AiOutlineArrowLeft
              size="1.5rem"
              color="#ffffff"
              className="cursor-pointer"
              onClick={() => navigate("/home")}
            />
            <p className="text-white text-lg font-bold flex text-left">Payment</p>
            <AiOutlineInfoCircle size="1.5rem" color="#ffffff" />
          </div>
        </div>
        <div className="px-4">
          <div className="flex flex-col py-2">
            <div className="flex flex-row justify-between my-1">
              <h4 className="font-medium">Default Method</h4>
              <span className="text-gray-400 flex flex-row">
                Both Options <IoIosArrowForward size="1.2rem" className="ml-2" />
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <h4 className="font-medium">Payment Profile</h4>
              <span className="text-gray-400 flex flex-row">
                Bank Account <IoIosArrowForward size="1.2rem" className="ml-2" />
              </span>
            </div>
          </div>
          <div className="border-t-1 border-secondary py-2">
            <div className="flex flex-row justify-between my-4">
              <h4 className="font-bold">Payment Overview</h4>
              <span className="text-gray-400 flex flex-row">
                Lifetime <IoIosArrowDown size="1.2rem" className="ml-2 mt-1" />
              </span>
            </div>
            <div className="flex flex-row text-white">
              <div className="bg-warning p-3 text-left w-6/12 mx-1 rounded-lg">
                <h4 className="uppercase text-lg">Amount on hold</h4>
                <span className="text-2xl">$912</span>
              </div>
              <div className="bg-success p-3 text-left w-6/12 mx-1 rounded-lg">
                <h4 className="uppercase text-lg">Amount received</h4>
                <span className="text-2xl">$2432</span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <TransList />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Payment;
