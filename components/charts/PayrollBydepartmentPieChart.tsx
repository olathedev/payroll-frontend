'use client'
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Sector,
} from "recharts";

// Mock data for department payroll distribution
const departmentData = [
  { name: "Engineering", value: 125000 },
  { name: "Marketing", value: 74000 },
  { name: "Sales", value: 86000 },
  { name: "Finance", value: 65000 },
  { name: "HR", value: 42500 },
  { name: "Operations", value: 58000 },
];

// Custom colors with primary color as the first one
const COLORS = [
  "#7165e3",
  "#34c3ff",
  "#ff8042",
  "#00c49f",
  "#ffbb28",
  "#9c88ff",
];

// Helper function to format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

// Calculate total for percentage
const total = departmentData.reduce((sum, entry) => sum + entry.value, 0);

interface DepartmentPayrollChartProps {
  className?: string;
}

const DepartmentPayrollChart: React.FC<DepartmentPayrollChartProps> = ({
  className,
}) => {
  const [activeIndex, setActiveIndex] = React.useState<number | undefined>(
    undefined
  );

  // Custom active shape for better highlighting
  const renderActiveShape = (props: any) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
      props;

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 8}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 8}
          outerRadius={outerRadius + 12}
          fill={fill}
        />
      </g>
    );
  };

  // Custom tooltip content
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const department = payload[0].name;
      const value = payload[0].value;
      const percentage = ((value / total) * 100).toFixed(1);

      return (
        <div
          className="bg-white p-3 shadow-md rounded border border-gray-100"
          style={{ fontSize: "14px" }}
        >
          <p className="font-medium text-gray-800">{department}</p>
          <p className="text-gray-600">{formatCurrency(value)}</p>
          <p className="text-gray-500">{percentage}% of total payroll</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={` ${className}`}>
      <div className="h-68">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              activeIndex={activeIndex}
              activeShape={renderActiveShape}
              data={departmentData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={100}
              dataKey="value"
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(undefined)}
              paddingAngle={4}
            >
              {departmentData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
        {departmentData.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: COLORS[index % COLORS.length] }}
            />
            <span
              className="text-sm text-gray-700"
              style={{ fontSize: "14px" }}
            >
              {entry.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentPayrollChart;
