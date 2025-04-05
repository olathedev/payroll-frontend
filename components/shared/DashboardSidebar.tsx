"use client";
import Image from "next/image";
import Link from "next/link";
import {
  EmployeesIcon,
  Chart,
  Dashboard,
  Help,
  Logout,
  Payroll,
  Recruit,
  Reports,
  Schedule,
  Training,
  SettingsIcon,
} from "@/public/icons/icons";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  console.log(path);
  const [acttivePage, setActivePage] = useState("Dashboard");

  const menuItems = [
    {
      href: "/home",
      icon: (
        <Dashboard color={acttivePage === "Dashboard" ? "white" : "black"} />
      ),
      label: "Dashboard",
    },
    {
      href: "/home",
      icon: (
        <EmployeesIcon color={acttivePage === "Employee" ? "white" : "black"} />
      ),
      label: "Employee",
    },
    {
      href: "/home",
      icon: (
        <Recruit color={acttivePage === "Recruitment" ? "white" : "black"} />
      ),
      label: "Recruitment",
    },
    {
      href: "/home",
      icon: <Chart color={acttivePage === "Performance" ? "white" : "black"} />,
      label: "Performance",
    },
    {
      href: "/home",
      icon: <Payroll color={acttivePage === "Payroll" ? "white" : "black"} />,
      label: "Payroll",
    },
    {
      href: "/home",
      icon: (
        <Training
          color={acttivePage === "Training and Development" ? "white" : "black"}
        />
      ),
      label: "Training and Development",
    },
    {
      href: "/home",
      icon: <Schedule color={acttivePage === "Schedule" ? "white" : "black"} />,
      label: "Schedule",
    },
    {
      href: "/home",
      icon: (
        <Reports
          color={acttivePage === "Reports and Analytics" ? "white" : "black"}
        />
      ),
      label: "Reports and Analytics",
    },
  ];

  const personal = [
    {
      href: "/home",
      icon: <Help color={acttivePage === "Help" ? "white" : "black"} />,
      label: "Help",
    },
    {
      href: "/settings",
      icon: (
        <SettingsIcon color={acttivePage === "Settings" ? "white" : "black"} />
      ),
      label: "Settings",
    },
    {
      href: "/home",
      icon: <Logout color={acttivePage === "Logout" ? "white" : "black"} />,
      label: "Logout",
    },
  ];
  return (
    <div className="py-10 px-6 bg-[#F5F5F5] w-[20%] h-full flex flex-col">
      <div className="pb-10 flex gap-2 items-center">
        <Image src="/images/logo.png" alt="logo" width={38} height={38} />
        <p className="font-semibold text-lg text-primary-700">Paytron</p>
      </div>
      <ul className="flex flex-col gap-1 font-light">
        {menuItems.map(({ href, icon, label }, index) => (
          <li
            key={index}
            className={`p-3 rounded-lg text-sm ${
              acttivePage === label
                ? "bg-primary-600 text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => setActivePage(label)}
          >
            <Link href={href} className="flex items-center gap-3">
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className="mt-auto flex flex-col font-light">
        {personal.map(({ href, icon, label }, index) => (
          <li
            key={index}
            className={`p-3 rounded-lg text-sm ${
              acttivePage === label
                ? "bg-primary-600 text-white"
                : "bg-transparent text-black"
            }`}
            onClick={() => setActivePage(label)}
          >
            <Link href={href} className="flex items-center gap-3">
              {icon}
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
