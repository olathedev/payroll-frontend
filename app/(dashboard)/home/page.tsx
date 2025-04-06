// import { CreditCardIcon } from "lucide-react";
// import EyeIconClosed from "@/public/icons/EyeIconClosed";
import DepartmentPayrollChart from "@/components/charts/PayrollBydepartmentPieChart";
import PayrollTrendChart from "@/components/charts/PayrollTrendChart";
import KycNotice from "@/components/dashboardHome/KycNotice";
import StatsCards from "@/components/dashboardHome/StatsCards";

import React from "react";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-6 px-8">
      <div className="w-full flex flex-col gap-6">
        <div className="font-medium text-[19px]">
          Good Morning <span className="">, KD constrcutions 👋🏾</span>
        </div>

        <KycNotice />
        <StatsCards />
       

       <div className="w-full flex gap-6">
        <div className="w-[60%] bg-white border border-text-50 rounded-xl p-4">
            <h3 className="text-text-700 font-medium ">Payroll Growth Trend</h3>
            <PayrollTrendChart />
        </div>

        <div className="w-[40%] bg-white border border-text-50 rounded-xl p-4">
            <h3 className="text-text-700 font-medium ">Payroll by Department</h3>
            <DepartmentPayrollChart />
        </div>
       </div>
      </div>
    </div>
  );
};

export default Home;
