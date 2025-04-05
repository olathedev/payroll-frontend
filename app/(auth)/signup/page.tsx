import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-[75%]">
      <header className="flex flex-col items-center gap-0.5 pb-4">
        <div className=" flex gap-2 mb-1 items-center">
          <Image src="/images/logo.png" alt="logo" width={38} height={38} />
          <p className="font-semibold text-lg text-primary-700">Paytron</p>
        </div>
        <h1 className="text-[23px] font-semibold text-text-900">
          Create your account
        </h1>
        <p className="text-text-300">
          Join the future of payroll—AI-powered, seamless, and secure.
        </p>
      </header>

      <form action="" className="w-full mt-6 flex flex-col gap-4">
        <div className="w-full flex gap-3">
          <div className="flex w-1/2 flex-col gap-1">
            <label className="font-medium text-sm text-text-800">
              FirstName
            </label>
            <input
              type="text"
              className="w-full py-3 px-3 border border-text-100 rounded-md text-sm"
              placeholder="Deborah"
            />
          </div>

          <div className="flex w-1/2 flex-col gap-1">
            <label className="font-medium text-sm text-text-800">
              LastName
            </label>
            <input
              type="text"
              className="w-full py-3 px-3 border border-text-100 rounded-md text-sm"
              placeholder="Kudaru"
            />
          </div>
        </div>

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

        <div className="flex flex-col gap-1">
          <label className="font-medium text-sm text-text-800">
            Confirm Password
          </label>
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
          Already have an account{" "}
          <Link href="/signin" className="text-primary-500 font-medium">
            Signin{" "}
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default page;
