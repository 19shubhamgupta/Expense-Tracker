import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTransaction, editTransaction } from "../store/transactionSlice";
import { useNavigate } from "react-router-dom";

export default function TransactionForm({ transaction , idx }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: transaction?.title || "",
      amount: transaction?.amount || "",
      detail: transaction?.detail || "",
      date: transaction?.date || "",
      category: transaction?.category || "",
    },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onSubmitHandle = (data) => {
    if(transaction){
      dispatch(editTransaction({
        idx : idx ,
        editedTransaction : data
      }));
    }
    else dispatch(addTransaction(data));
  };
  let Title = "Add Transaction";
  let btnText = "Add"
  if (transaction) {
    Title = "Edit Transaction";
    btnText = "Update"
  }

  const handleBtnClick = () => {
    navigate('/dashboard')
  }
  return (
    <div className="flex items-center justify-center w-full">
      <div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <form
          className="mx-auto w-full max-w-3xl"
          onSubmit={handleSubmit(onSubmitHandle)}
        >
          {/* Page Title */}
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{Title}</h2>

          {/* Title & Amount Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                placeholder="Title"
                {...register("title")}
                className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
            </div>

            {/* Amount */}
            <div>
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Amount
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
                  ₹
                </span>
                <input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  {...register("amount")}
                  className="block w-full border border-gray-300 rounded-md pl-8 pr-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
                />
              </div>
            </div>
          </div>

          {/* Detail Row */}
          <div className="mb-6">
            <label
              htmlFor="detail"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Detail
            </label>
            <textarea
              id="detail"
              rows={4}
              placeholder="Enter details..."
              {...register("detail")}
              className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
          </div>

          {/* Category & Date Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                {...register("category")}
                className="block w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-red-800"
              >
                <option value="">Select category</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="shopping">Shopping</option>
                <option value="bills">Bills</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="others">Others</option>
              </select>
            </div>

            {/* Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date
              </label>
              <input
                id="date"
                type="date"
                {...register("date")}
                className="block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-800"
              />
            </div>
          </div>

          {/* Add Button */}
          <div>
            <button
              type="submit"
              className="w-full inline-flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-red-600 hover:bg-red-800 font-medium text-lg"
              onClick={() => handleBtnClick()}
            >
              {btnText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
