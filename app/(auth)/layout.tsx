import Image from "next/image";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="flex h-screen p-6">
      <div className="w-1/2 h-full bg-[#7165E3] rounded-4xl relative overflow-hidden">
        <Image src="/images/authBg.webp" alt="" fill className="absolute" />

        <div className="flex flex-col p-10">
          <header className="font-bold mb-4">
            <h1 className="text-white text-4xl  tracking-wide mb-1 ">
              Smart Payroll:{" "}
            </h1>
            <h1 className="text-white text-4xl  tracking-wide">
              {" "}
              Simplified, Efficient, and Secure
            </h1>
          </header>

          <h3 className="text-text-50 text-lg">
            Effortless payroll management with AI-powered precision. Automate
            calculations, ensure compliance, and pay your team
            seamlessly—smarter, faster, and stress-free.
          </h3>
          {/* <div className="flex absolute -bottom-20  mt-10">
            <Image
              src="/images/auth.png"
              alt=""
              height={450}
              width={400}
              className="object-cover"
            />
          </div> */}
        </div>
      </div>

      <div className="w-1/2 py-10 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default layout;
