import { ReactNode } from "@tanstack/react-router";
import {
  SidebarProvider,
} from "../../components/ui/sidebar";
import  AppSidebar  from "../../sidebar/sidebar";
import Cookies from "js-cookie";

const PrivateNavigation = ({ children }: { children: ReactNode }) => {
  const defaultOpen = Cookies.get("sidebar_state") === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
};

export default PrivateNavigation;
