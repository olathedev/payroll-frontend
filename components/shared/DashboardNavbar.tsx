import {
  ChevronDown,
  MessageIcon,
  NotificationIcon,
  SettingsIcon,
} from "@/public/icons/icons";

const DashboardNavbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-6 h-[88px] border-b border-black/20  bg-white">
      <h3 className="text-lg">
        <span className="font-light">Welcome back</span>, Archadis Tech 👋🏾
      </h3>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
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
          <div className="h-[40px] w-[40px] bg-primary-50 rounded-full"></div>
          <ChevronDown />
        </div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
