import { ReactNode } from "@tanstack/react-router";
import AppSidebar from "../../sidebar/sidebar";

const PrivateNavigation = ({ children }: { children: ReactNode }) => {

  return (
    <div className="flex flex-row">
      <AppSidebar />
      <div className="w-full">
        {children}
      </div>
    </div>
  );
};

export default PrivateNavigation;
