import Image from "next/image";
import Link from "next/link";
import {
  Chart,
  Dashboard,
  Help,
  Logout,
  Payroll,
  Recruit,
  Reports,
  Schedule,
  Training,
  User,
} from "@/public/icons/icons";

const menuItems = [
  { href: "/home", icon: <Dashboard />, label: "Dashboard" },
  { href: "/home", icon: <User />, label: "Employee" },
  { href: "/home", icon: <Recruit />, label: "Recruitment" },
  { href: "/home", icon: <Chart />, label: "Performance" },
  { href: "/home", icon: <Payroll />, label: "Payroll" },
  { href: "/home", icon: <Training />, label: "Training and Development" },
  { href: "/home", icon: <Schedule />, label: "Schedule" },
  { href: "/home", icon: <Reports />, label: "Reports and Analytics" },
  { href: "/home", icon: <Help />, label: "Help" },
  { href: "/home", icon: <Logout />, label: "Logout" },
];

const Sidebar = () => {
  return (
    <div className="p-7 bg-[#F5F5F5]">
      <div className="pb-10">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
      </div>
      <ul className="flex flex-col gap-8 font-light">
        {menuItems.map(({ href, icon, label }, index) => (
          <li key={index}>
            <Link href={href} className="flex items-center gap-5">
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
