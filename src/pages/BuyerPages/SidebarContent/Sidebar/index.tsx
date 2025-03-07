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
      <div>
        <DesktopSidebar isCollapsed={isCollapsed} />
      </div>

      <div>
        <MobileSidebar
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </>
  );
};
export default Sidebar;
