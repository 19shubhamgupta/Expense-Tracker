import React from "react";
import { MdEdit } from "react-icons/md";
import BudgetForm from "./BudgetForm";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Hamburger from "../Hamburger";

const BudgetPage = () => {
  const navigate = useNavigate();
  const { budget, goaldetail, goalMoney } = useSelector(
    (state) => state.budget
  );
  const handleOnClick = () => {
    navigate("/budget-form");
  };
  return (
    <div className="flex-1 bg-white p-6">
      <div className="flex">
        <Hamburger/>
        <h1 className="text-5xl font-bold text-center mt-2 w-full -ml-4">Budget</h1>
      </div>

      {budget ? (
        <>
          <div className="flex items-center justify-center gap-4 mt-20">
            <MdEdit
              className="text-red-800 size-20 md:size-15  cursor-pointer mt-2  -mr-5 md:mr-0 "
              onClick={()=> handleOnClick()}
            />
            <div className="text-4xl text-red-800 font-bold text-center">
              Your Budget of this Month is ₹{budget}
            </div>
          </div>

          <div className="w-full max-w-3xl mx-auto mt-20 relative">
            <span className="absolute right-0 -top-8 text-xl font-semibold text-red-800">
              ₹{goalMoney}
            </span>
            <div className="w-full bg-gray-200 rounded-full h-10 border-red-800 border-2 border-solid">
              <div
                className="bg-red-600 h-10 rounded-full transition-all duration-300"
                style={{ width: "0%" }} // Initially empty, fill dynamically later
              ></div>
            </div>
          </div>
        </>
      ) : (
        <BudgetForm title="Set your budget" />
      )}
    </div>
  );
};

export default BudgetPage;
