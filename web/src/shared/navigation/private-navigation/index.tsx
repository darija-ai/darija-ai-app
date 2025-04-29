import { ReactNode } from "@tanstack/react-router";
import {
  SidebarProvider,
  SidebarTrigger,
} from "../../../../@/shared/components/ui/sidebar";
import { AppSidebar } from "../../../features/sidebar/sidebar";

const PrivateNavigation = ({ children }: { children: ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  );
};

export default PrivateNavigation;
