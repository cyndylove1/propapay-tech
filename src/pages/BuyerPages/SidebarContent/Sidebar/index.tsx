import DesktopSidebar from "../DesktopSidebar";
import MobileSidebar from "../MobileSidebar";

interface SidebarProps {
  isCollapsed: boolean;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  isSidebarOpen,
  toggleSidebar,
}) => {
  return (
    <>
      <div className="">
        <DesktopSidebar isCollapsed={isCollapsed} />
      </div>

      <div className="">
        <MobileSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </>
  );
};
export default Sidebar;
