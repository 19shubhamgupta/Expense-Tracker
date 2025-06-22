import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useSelector } from "react-redux";
import { selectTransactionsByMonth } from "../store/selectors/expenseByMonth";

const MonthlyExpenseChart = () => {
  // 1. Figure out the current year as a string (selector expects a string)
  const year = String(new Date().getFullYear());

  // 2. Get only the months that actually have transactions
  const data = useSelector((state) =>
    selectTransactionsByMonth(state, { year })
  );
  // data is e.g. [{ month: "11", total: 150 }, { month: "12", total: 1249 }]

  // 3. Define all months
  const monthNames = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  // 4. Build the full chart data: fill every month with existing total or 0
  const chartData = Object.entries(monthNames).map(([key, name]) => {
    const entry = data.find((d) => d.month === key);
    return {
      month: name,
      total: entry ? entry.total : 0,
    };
  });

  return (
    <div className="w-full h-96 flex flex-col gap-10 -mt-18 overflow-visible">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent text-center  ">
        {`Monthly Expenses`}
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="total" fill="#f01f06" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyExpenseChart;
