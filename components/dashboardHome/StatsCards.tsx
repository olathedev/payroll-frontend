import React from 'react'
import EyeOpen from "@/public/icons/EyeOpen";
import { EmployeesIcon } from "@/public/icons/icons";
import { TrendingUp, UserPen } from "lucide-react";
import Image from "next/image";

const StatsCards = () => {
  return (
    <div className="flex gap-6">
    <div className="w-1/2 border border-text-50 rounded-2xl flex flex-col gap-2 px-5 py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 border border-text-50 relative rounded-full overflow-hidden">
            <Image
              src="/svgs/nigeria.png"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <h5 className="text-text-600 text-sm">Upcomming Payroll</h5>
        </div>

        <p className="text-xs py-1 px-4 bg-primary-100 text-primary-600 rounded-full font-medium">
          20th April 2024
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-[25px] font-semibold">₦ 561,000.00</h2>

        <span className="px-4">
          <EyeOpen />
        </span>
      </div>

      <div className="flex items-center gap-3 mt-2">
        <div className="px-3 py-1 bg-[#E6F4EA] rounded-full flex items-center gap-1">

        <span className="h-2.5 w-2.5 flex items-center justify-center rounded-full ">
          
         <TrendingUp size={14} className='text-[#099137]' />
        </span>
        <p className="text-xs text-[#099137]">
          {10}% 
        </p>
        </div>

        {/* <p className='text-sm'>increase from last payroll</p> */}
      </div>
    </div>

    <div className="w-1/2 flex flex-col border border-text-50 rounded-2xl gap-4 py-2.5">
      <div className="px-6 flex items-center gap-4">
        <span className="h-9 w-9 rounded-full bg-blue-500 flex items-center justify-center">
          <EmployeesIcon color="white" />
        </span>
        <div className="flex flex-col">
          <h5 className="text-sm text-text-700">
            Total Workforce on payroll
          </h5>
          <h3 className="font-semibold text-lg">200</h3>
        </div>
      </div>
      <hr className="border border-text-50" />
      <div className="px-6 flex items-center gap-4">
        <span className="h-9 w-9 rounded-full bg-amber-500 flex items-center justify-center">
          <UserPen size={15} color="white" />
        </span>
        <div className="flex flex-col">
          <h5 className="text-sm text-text-700">Pending Applications</h5>
          <h3 className="font-semibold text-lg">10</h3>
        </div>
      </div>
    </div>
  </div>
  )
}

export default StatsCards