import React from "react";
import { Link } from "react-router-dom";

const Side = () => {
  const tabs = [
    { name: "Dashboard", id: "/dashboard" },
    { name: "Transactions", id: "/transaction-history" },
    { name: "Budget", id: "/budget" },
    { name: "Add Transaction", id: "/transaction-add" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-50 bg-white border-r-4 border-r-red-400 flex flex-col items-center justify-start">
      <div className="h-10 w-[90%] text-center text-xl font-bold mt-20">
        Expense tracker
      </div>
      <div className="h-[70%] w-[90%]  flex flex-col space-y-4 pt-10 pl-4 ">
        {tabs.map(({name , id}) => (
          <Link to={id} key={name}>
            <nav className="text-xl font-medium text-left " key={name}>{name}</nav>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Side;
