import React from "react";
import { CgAdd } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import TransactionCard from "./TransactionCard";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Hamburger from "./Hamburger";

const TransactionPage = () => {
  
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex">
        <Hamburger/>
        <h1 className="text-5xl font-bold text-center mt-2 w-full">Transactions</h1>
      </div>
      <Outlet/>
    </div>
  );
};

export default TransactionPage;
