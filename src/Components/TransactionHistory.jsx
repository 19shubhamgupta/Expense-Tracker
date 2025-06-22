import React, { useState } from "react";
import { CgAdd } from "react-icons/cg";
import { IoFilterSharp } from "react-icons/io5";
import TransactionCard from "./TransactionCard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTransactionsByCategory } from "../store/selectors/filterByCatgeory";
import { selectTransactionsByMonth } from "../store/selectors/groupBydate";

const TransactionHistory = () => {
  const [category, setCategory] = useState("");
  
  const d = new Date()
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  
  const allTransactions = useSelector((state) =>
    category ? selectTransactionsByCategory(state, { category }) : selectTransactionsByMonth(state, { year , month })
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setCategory(e.target.value);
    }
  };

  return (
    <>
      <div className="h-20 w-full flex items-center justify-center gap-4 mt-10">
        <IoFilterSharp className="text-5xl text-red-800" />
        <div className="flex items-center bg-red-300 md:w-96 h-12 px-4 rounded-xl space-x-3 border-3 border-red-800">
          <img src="/black-search.svg" className="w-5 h-5" alt="search icon" />
          <input
            type="search"
            className="bg-transparent outline-none text-black placeholder:text-black w-full"
            placeholder="Search for the transaction"
            onKeyDown={handleKeyDown}
          />
        </div>
        <Link to={"/transaction-add"}>
          <CgAdd className="text-5xl text-red-800" />
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center mt-6">
        {allTransactions.map(
          (transaction) =>
            transaction.title && (
              <TransactionCard
                transaction={transaction}
                key={transaction.id}
                idx={transaction.id}
              />
            )
        )}
      </div>
    </>
  );
};

export default TransactionHistory;
