import { XIcon } from "lucide-react";
import React from "react";

const KycNotice = () => {
  return (
    <div className="w-full bg-[#FB923B] rounded-2xl text-white  px-8 py-3 flex items-center justify-between">
      <div className="flex flex-col g">
        <h5 className="text-sm font-semibold">Update KYC Information</h5>
        <p className="text-text-50 text-sm">
          Submit your KYC information to unlock the rest of paytron features.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <button className="py-1.5 px-4 bg-white text-text-900 text-xs rounded-full cursor-pointer">
          Update KYC
        </button>

        <span className="p-1 rounded-full bg-white text-text-800">
          <XIcon size={10} />
        </span>
      </div>
    </div>
  );
};

export default KycNotice;
