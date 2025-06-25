import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../store/sideBarSlice";

const Side = () => {
  const tabs = [
    { name: "Dashboard", id: "/dashboard" },
    { name: "Transactions", id: "/transaction-history" },
    { name: "Budget", id: "/budget" },
    { name: "Add Transaction", id: "/transaction-add" },
  ];
  const dispatch = useDispatch();
   const isOpen = useSelector(state => state.sideBar)
  return (
    <div
      className={`
        fixed top-0 left-0 h-screen w-[200px]
        bg-white border-r-4 border-red-400
        transform transition-transform duration-200
        md:translate-x-0 md:flex
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        flex-col items-center justify-start
      `}
    >
      {/* close button on small screens */}
      <button
        className="md:hidden self-start p-2 m-2 text-3xl text-red-800"
        onClick={() => dispatch(toggleSideBar(false))}
      >
        <IoMdClose />
      </button>

      {/* Logo / Title */}
      <div className="h-10 w-[90%] text-center text-xl font-bold mt-20">
        Expense tracker
      </div>

      {/* Nav Links */}
      <div className="h-[70%] w-[90%] flex flex-col space-y-4 pt-10 pl-4">
        {tabs.map(({ name, id }) => (
          <Link to={id} key={name} onClick={() => dispatch(toggleSideBar(false))}>
            <nav className="text-xl font-medium text-left">
              {name}
            </nav>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Side;
