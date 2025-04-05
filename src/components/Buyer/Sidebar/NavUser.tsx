

import { ArrowIcon } from "@/assets/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export default function NavUser({
  user,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}) {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground h-[64px] gap-3"
        >
          <Avatar className="h-10 w-10 rounded-full">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="rounded-lg">JO</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left ">
            <span className="truncate font-semibold text-sm leading-5 text-neutral-base">{user.name}</span>
            <span className="truncate font-medium leading-4 text-xs text-neutral-700">{user.email}</span>
          </div>
          <span className="ml-auto w-5 h-5 pt-[5px] pb-1">
            <ArrowIcon className="stroke-neutral-500 w-full h-full" />
          </span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
