import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updatebudget } from "../../store/budgetSlice";

const BudgetForm = ({title}) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const goalMoneyMatch = data.goal.match(/\d+/);
    const goalMoney = goalMoneyMatch ? parseInt(goalMoneyMatch[0]) : 0;

    dispatch(
      updatebudget({
        budget: parseInt(data.budget),
        goaldetail: data.goal,
        goalMoney: goalMoney,
      })
    );
  };
  return (
    <div className="flex-1 bg-white p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-8 mt-5">
        {title}
      </h1>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto bg-gray-50 p-6 rounded-xl shadow-md space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Monthly Budget (₹)
        </label>
        <input
          type="number"
          placeholder="Enter your monthly budget"
          {...register("budget", { required: true, min: 1 })}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-red-800"
        />
        {errors.budget && (
          <p className="text-red-500 text-sm mt-1">Budget is required</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Goal (optional)
        </label>
        <input
          type="text"
          placeholder="e.g. Save ₹2000 this month"
          {...register("goal")}
          className="w-full border border-gray-300 rounded-md px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-red-800"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-600 hover:bg-red-800 text-white text-lg font-medium py-2 rounded-md"
      >
        Save Budget
      </button>
    </form>
    </div>
  );
};

export default BudgetForm;
