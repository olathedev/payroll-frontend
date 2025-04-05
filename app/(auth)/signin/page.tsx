import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-[68%]">
      <header className="flex items-center flex-col gap-0.5 pb-3">
        <div className=" flex gap-2 mb-4 items-center">
          <Image src="/images/logo.png" alt="logo" width={34} height={34} />
          <p className="font-semibold text-lg text-primary-500">Paytron</p>
        </div>
        <h1 className="text-[24px] font-medium text-text-900">
          Login to your account
        </h1>

        <p className="text-text-300">Access your paytron account securely and effortlessly</p>
      </header>
      <form action="" className="w-full mt-6 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm text-text-800">Email</label>
          <input
            type="email"
            className="w-full py-3 px-3 border border-text-100 rounded-xl text-sm focus:border-primary-300 focus:ring-1 focus:bg-primary-50"
            placeholder="deborahk@gmail.com"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm text-text-800">Password</label>
          <input
            type="password"
            className="w-full py-3 px-3 border border-text-100 rounded-xl text-sm focus:border-primary-300 focus:ring-1 focus:bg-primary-50"
            placeholder="********"
          />
        </div>

        <button className="cursor-pointer py-3 bg-primary-600 rounded-xl text-white mt-2">
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
