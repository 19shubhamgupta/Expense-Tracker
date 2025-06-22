import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { delTransaction } from "../store/transactionSlice";

const TransactionDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const transactions = useSelector((state) => state.transaction);
  const { id } = useParams();
  const transaction = transactions[id];

  const handleEdit = () => {
    navigate(`/transaction-edit/${id}`); 
  };

  const handleDelete = () => {
    dispatch(delTransaction(Number(id)));
    navigate("/transaction-history");
  };

  return (
    <div className="flex-1 flex items-center justify-center p-6 flex-col mt-15">
      {transaction ? (
        <>
          <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-lg p-8 space-y-6">
            {/* Title & Amount */}
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-gray-800">
                {transaction.title}
              </h2>
              <span className="text-2xl font-semibold text-red-600">
                ₹{transaction.amount}
              </span>
            </div>

            {/* Category & Date */}
            <div className="flex flex-wrap text-md text-gray-500">
              <div className="mr-6">
                <strong>Category:</strong> {transaction.category}
              </div>
              <div>
                <strong>Date:</strong> {transaction.date}
              </div>
            </div>

            {/* Detail */}
            <div className="text-gray-700 leading-relaxed">
              {transaction.detail}
            </div>
          </div>
          {/* Actions */}
          <div className="flex space-x-4 pt-4 justify-evenly w-full ">
            <button
              onClick={handleEdit}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
            >
              Edit
            </button>
            <button
              onClick={handleDelete}
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
            >
              Delete
            </button>
          </div>
        </>
      ) : (
        <h1 className="text-4xl text-gray-500 font-medium text-center">
          No detail found!
        </h1>
      )}
    </div>
  );
};

export default TransactionDetail;
