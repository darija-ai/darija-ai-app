import { ReactNode } from "@tanstack/react-router";
import {
  SidebarProvider,
  SidebarTrigger,
} from "../../../../@/shared/components/ui/sidebar";
import { AppSidebar } from "../../../features/sidebar/sidebar";
import Cookies from "js-cookie";

const PrivateNavigation = ({ children }: { children: ReactNode }) => {
  const defaultOpen = Cookies.get("sidebar_state") === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  );
};

export default PrivateNavigation;
