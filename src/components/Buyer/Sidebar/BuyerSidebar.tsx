import { main, others } from "@/constants/buyer.constants";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "../../ui/sidebar";
import { NavLink, useLocation } from "react-router";
import { NamedLogo, Logo } from "@/assets/icons";
import useSidebar from "@/hooks/useSidebar";
import NavUser from "./NavUser";

export default function BuyerSidebar() {
  const { pathname } = useLocation();
  const { open } = useSidebar();
  const user = {
    name: "Josiah Ovo",
    email: "josiahovo@gmail.com",
    avatar:
      "https://res.cloudinary.com/di3qlrrgj/image/upload/v1742938995/26364dc17ad40120217008c73c625960_kgz2sr.png",
  };

  return (
    <>
      <Sidebar collapsible="icon" className="">
        <SidebarHeader
          className={`h-[72px] ${
            open
              ? "border-b border-sidebar-border px-6 py-[21.95px]"
              : "border-b border-sidebar-border"}`
          }
        >
          <SidebarMenu>
            <SidebarMenuItem>
              {/* w-[126px] [&>svg]:size-10  */}
              <SidebarMenuButton
                className={`hover:bg-transparent ${open ? " w-[126px] h-full p-0 " : ""}`}
                asChild
              >
                {open ? <NamedLogo /> : <Logo />}
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* Main */}
        <SidebarContent className="group-data-[collapsible=icon]:px-2">
          <SidebarGroup>
            <SidebarGroupLabel>MAIN</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0">
                {main.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className="flex p-0 group-data-[collapsible=icon]:flex-row group-data-[collapsible=icon]:justify-center"
                  >
                    <SidebarMenuButton
                      className="gap-3 px-3 py-[10px] group-data-[collapsible=icon]:size-11 data-[active=true]:bg-gradient-to-r data-[active=true]:from-brand-base data-[active=true]:to-brand-500 text-neutral-700 data-[active=true]:text-white"
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      asChild
                    >
                      <NavLink to={item.url} className={ `flex items-center gap-3 `}>
                        <item.icon />
                        <span className="font-labil text-sm font-semibold leading-5  group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          {/* Other */}
          <SidebarGroup>
            <SidebarGroupLabel>OTHER</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="gap-0">
                {others.map((item) => (
                  <SidebarMenuItem
                    key={item.title}
                    className={`flex p-0 group-data-[collapsible=icon]:flex-row group-data-[collapsible=icon]:justify-center ${item.title === "Settings" ? "mt-8 group-data-[collapsible=icon]:mt-5" : ""}`}
                  >
                    <SidebarMenuButton
                      className="gap-3 px-3 py-[10px] group-data-[collapsible=icon]:size-11 data-[active=true]:bg-gradient-to-r data-[active=true]:from-brand-base data-[active=true]:to-brand-500 text-neutral-700 data-[active=true]:text-white"
                      tooltip={item.title}
                      isActive={pathname === item.url}
                      asChild
                    >
                      <NavLink to={item.url} className={`flex items-center gap-3`}>
                        <item.icon />
                        <span className="font-labil text-sm font-semibold leading-5  group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter
          className={`border-t border-sidebar-border py-2 pl-2 pr-0`}
        >
          <NavUser user={user} />
        </SidebarFooter>
      </Sidebar>
    </>
  );
}
