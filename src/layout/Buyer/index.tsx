import Header from "../../pages/BuyerPages/Header";
import { Outlet } from "react-router-dom";

import Sidebar from "../../pages/BuyerPages/SidebarContent/Sidebar";
import { useState } from "react";

const Buyer:React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <>
      <div className=" flex">
        <Sidebar
          isCollapsed={isCollapsed}
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-[#000] opacity-50 lg:hidden flex"
            onClick={toggleSidebar}
          ></div>
        )}
        <div className="w-full">
          <Header
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            onMenuClick={toggleSidebar}
          />
          <div className="dark:bg-[#111827]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};
export default Buyer;
