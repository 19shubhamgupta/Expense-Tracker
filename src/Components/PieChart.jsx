import { useSelector } from "react-redux";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { categoryWiseExpense } from "../store/selectors/groupSelector";

/*
Sample Data for Pie Chart

const data = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 700 },
  { name: "Shopping", value: 300 },
  { name: "Savings", value: 500 },
];

*/
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function ExpensePieChart() {
  const data = useSelector(categoryWiseExpense);
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      {/* Title */}
      <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent   -mb-18  ">
        Expense Breakdown
      </h2>

      {/* Chart */}
      <div className="w-140 max-w-5xl h-[500px] ">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="40%"
              cy="50%"
              outerRadius={140} // Bigger pie chart
              label
            >
              {data.map((entry, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              layout="vertical"
              verticalAlign="middle"
              align="right"
              wrapperStyle={{ fontSize: "16px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
