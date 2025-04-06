"use client";

// import { redirect } from "next/navigation";/

export default function Home() {
  // redirect("/signin");
  return (
    <div className="">
      <div>
        <p>Shows your real-time credit score.</p>
        <h1>All your money in one place</h1>
        <p>
          This app tracks your credit and debit card purchases and rounds them
          up to the nearest dollar then it invests the difference for you in
          safe exchange-traded funds.
        </p>
        <div>
          <button>Get started</button>
        </div>
      </div>
    </div>
  );
}
