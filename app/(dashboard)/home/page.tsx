// import { CreditCardIcon } from "lucide-react";
// import EyeIconClosed from "@/public/icons/EyeIconClosed";
import EyeOpen from "@/public/icons/EyeOpen";
import React from "react";

const Home = () => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full bg-[#FB923B] text-white  px-8 py-3 flex items-center justify-between">
        <div className="flex flex-col g">
          <h5 className="text-sm font-semibold">Update KYC Information</h5>
          <p className="text-text-50 text-sm">
            Submit your KYC information to unlock the rest of paytron features.
          </p>
        </div>

        <div>
          <button className="py-2 px-4 bg-white text-text-900 text-sm rounded-full cursor-pointer">
            Update KYC
          </button>
        </div>
      </div>

      <div className="px-8 w-full flex flex-col gap-6">
        <div className="font-medium text-lg">
          Welcome back <span className="">, KD constrcutions 👋🏾</span>
        </div>
        <div className="flex gap-8">
          <div className="w-1/2 border border-text-50 rounded-2xl flex flex-col gap-3 px-5 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h5 className="text-text-600">Upcomming Payroll</h5>
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

            <div className="flex items-center gap-1">
              <span className="h-2.5 w-2.5 flex items-center justify-center rounded-full ">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1H7.5V0.5H7V1ZM6.64645 0.646448L0.646445 6.6465L1.35355 7.3536L7.35355 1.35355L6.64645 0.646448ZM3.5 1.5H7V0.5H3.5V1.5ZM6.5 1V4.5H7.5V1H6.5Z"
                    fill="#099137"
                  />
                </svg>
              </span>
              <p className="text-xs text-[#099137]">
                {10}% increase from last payroll
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
