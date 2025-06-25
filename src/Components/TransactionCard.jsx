import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { delTransaction } from "../store/transactionSlice";
import { useNavigate } from "react-router-dom";
const TransactionCard = ({ transaction , idx }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleOnClick = (event , idx) => {
    dispatch(delTransaction(idx))
  }
  const handleDetail = (event , idx) => {
    navigate(`/transaction-history/${idx}`)
  }
  return (
    <div className="h-20 w-150 flex items-center justify-center gap-10 cursor-pointer">
      <MdDelete className="text-3xl text-red-800 hidden md:block" onClick={(event)=>handleOnClick(event , idx)}/>
      <div className="flex items-center justify-center gap-40 border-b-4 border-b-red-800 border-solid w-100 " 
        onClick={(event) => handleDetail(event ,idx)}
      >
        <div className="flex flex-col">
          <div className="text-xl text-black font-medium">
            {transaction.title}
          </div>
          <div className="text-l text-black font-medium">
            {transaction.date}
          </div>
        </div>
        <div className="text-xl text-black font-medium">
          {transaction.amount}
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
