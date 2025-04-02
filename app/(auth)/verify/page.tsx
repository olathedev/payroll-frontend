import React from "react";

const Verify = () => {
  return (
    <div className="w-2/3 flex flex-col gap-1 items-center text-enter">
      <div className="h-16 w-16 bg-primary-100 mb-4 rounded-full"></div>
      <h2 className="font-semibold text-[22px] text-text-900">
        Verify your email
      </h2>
      <p className="text-text-300 text-center">
        We’ve sent a verification link to your email. Please check your inbox
        and follow the instructions to activate your account.
      </p>

      <button className="cursor-pointer text-sm py-2 px-6 bg-primary-600 rounded-md text-white mt-4">
        Go back to login
      </button>
    </div>
  );
};

export default Verify;
