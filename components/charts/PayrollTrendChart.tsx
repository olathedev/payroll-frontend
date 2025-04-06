'use client'
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const payrollData = [
  { month: "Jan", amount: 45000 },
  { month: "Feb", amount: 47500 },
  { month: "Mar", amount: 46800 },
  { month: "Apr", amount: 48200 },
  { month: "May", amount: 51000 },
  { month: "Jun", amount: 52400 },
  { month: "Jul", amount: 54800 },
  { month: "Aug", amount: 53200 },
  { month: "Sep", amount: 55900 },
  { month: "Oct", amount: 57200 },
  { month: "Nov", amount: 59500 },
  { month: "Dec", amount: 62000 },
];

// Helper function to format currency
const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(value);
};

interface PayrollTrendChartProps {
  className?: string;
}

const PayrollTrendChart: React.FC<PayrollTrendChartProps> = ({ className }) => {
  return (
    <div
      className={`w-full h-full${className}`}
    >
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={payrollData}
            margin={{
              top: 50,
              right: 0,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 14 }}
              tickLine={{ stroke: "#e0e0e0" }}
              axisLine={{ stroke: "#e0e0e0" }}
            />
            <YAxis
              tickFormatter={formatCurrency}
              tick={{ fontSize: 14 }}
              tickLine={{ stroke: "#e0e0e0" }}
              axisLine={{ stroke: "#e0e0e0" }}
              width={80}
            />
            <Tooltip
              formatter={(value: number) => [
                formatCurrency(value),
                "Payroll Amount",
              ]}
              contentStyle={{
                fontSize: "14px",
                borderRadius: "4px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              }}
            />
            {/* <Legend wrapperStyle={{ fontSize: "14px", paddingTop: "10px" }} /> */}
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#7165e3"
              strokeWidth={3}
              dot={{ r: 4, strokeWidth: 2, fill: "white", stroke: "#7165e3" }}
              activeDot={{ r: 6, stroke: "#7165e3", strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PayrollTrendChart;
