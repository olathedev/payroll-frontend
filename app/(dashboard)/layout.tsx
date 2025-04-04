import DashboardNavbar from "@/components/shared/DashboardNavbar";
import Sidebar from "@/components/shared/DashboardSidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = ({ children }: Props) => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <Sidebar />

      <div className="flex-1 grow">
        <DashboardNavbar />
        {children}
      </div>
    </div>
  );
};

export default layout;
