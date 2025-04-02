import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-[75%]">
      <header className="flex flex-col gap-0.5">
        <h1 className="text-[22px] font-semibold text-text-900">
          Login to your account
        </h1>
        <p className="text-text-300">Securely login to you payroll account</p>
      </header>

      <form action="" className="w-full mt-6 flex flex-col gap-4">
       

        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm text-text-800">Email</label>
          <input
            type="email"
            className="w-full py-3 px-3 border border-text-100 rounded-md text-sm"
            placeholder="deborahk@gmail.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm text-text-800">Password</label>
          <input
            type="password"
            className="w-full py-3 px-3 border border-text-100 rounded-md text-sm"
            placeholder="********"
          />
        </div>

        <button className="cursor-pointer py-3 bg-primary-600 rounded-md text-white mt-2">
          Continue
        </button>

        <p className="text-sm text-center">
          Dont have an account?{" "}
          <Link href="/signup" className="text-primary-500 font-medium">
            Create one{" "}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default page;
