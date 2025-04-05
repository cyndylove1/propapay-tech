import BuyerSidebar from "@/components/Buyer/Sidebar/BuyerSidebar";
// import CustomTrigger from "@/components/Buyer/Sidebar/CustomTrigger";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/pages/BuyerPages/Header";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  return (
    <>
      <SidebarProvider>
        <BuyerSidebar />
        <main className="w-full">
          <div className="flex">
            {/* <CustomTrigger /> */}
            <Header
                        
                      />
          </div>
          
          <Outlet />
        </main>
      </SidebarProvider>
    </>
  );
}
