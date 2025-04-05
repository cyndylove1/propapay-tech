import { SidebarContext, SidebarContextProps } from "@/components/ui/sidebar";
import { useContext } from "react";

export default function useSidebar(): SidebarContextProps {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}
