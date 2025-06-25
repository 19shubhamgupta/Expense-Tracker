import React from "react";
import { useSelector } from "react-redux";
import { selectTotalExpense } from "../store/selectors/expenseSelctor";
import ExpensePieChart from "./PieChart";
import MonthlyExpenseChart from "./BarChart";
import Hamburger from "./Hamburger";

const Dashboard = () => {
  const totalExpense = useSelector(selectTotalExpense);
  const { budget , goalMoney} = useSelector((state) => state.budget);
  return (
    <div className="w-full bg-white flex-col md:p-4">
      <div className="flex">
        <Hamburger/>
        <h1 className="text-5xl font-bold text-center mt-2 w-full">Dashboard</h1>
      </div>
      <div className="h-60 w-full flex justify-center items-center gap-4 mt-1">
        <div className="w-100 h-40 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex flex-col items-center justify-center gap-2">
          <div className="text-4xl font-medium text-white">Total Earning</div>
          <div className="text-2xl font-light text-white">&#8377; {budget}</div>
        </div>

        <div className="w-100 h-40 bg-gradient-to-r from-red-400 to-pink-500 rounded-xl flex flex-col items-center justify-center gap-2">
          <div className="text-4xl font-medium text-white">Total Expense</div>
          <div className="text-2xl font-light text-white">
            &#8377; {totalExpense}
          </div>
        </div>

        <div className="w-100 h-40 bg-gradient-to-r from-green-400 to-teal-500 rounded-xl flex flex-col items-center justify-center gap-2">
          <div className="text-4xl font-medium text-white">Goal</div>
          <div className="text-2xl font-light text-white">&#8377; {goalMoney}</div>
        </div>
      </div>
      
        <ExpensePieChart/>
        <MonthlyExpenseChart/>
    </div>
  );
};

export default Dashboard;
