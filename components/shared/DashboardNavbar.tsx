import {
  ChevronDown,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
} from "@/public/icons/icons";
import Image from "next/image";

const DashboardNavbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-8 h-[80px] border-b border-black/10  bg-white">
      <h3 className="text-lg">
      Dashboard
      </h3>

      <div className="flex items-center gap-6">

        <span className="py-1.5 px-6 text-xs rounded-xl text-[#FB923B] bg-[#FB923B]/10">Company Admin</span>

        <div className="flex items-center gap-3">
          <span>
            <SettingsIcon />
          </span>
          <span>
            <MessageIcon />
          </span>
          <span>
            <NotificationIcon />
          </span>
        </div>

        <div className="flex gap-2 items-center">
          <div className="h-[40px] w-[40px] bg-primary-50 rounded-full relative overflow-hidden">
            <Image src="/images/user.png" alt="" fill className="object-cover" />
          </div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
