import { ReactNode } from "@tanstack/react-router";
import AppSidebar from "../../sidebar/sidebar";

const PrivateNavigation = ({ children }: { children: ReactNode }) => {

  return (
    <div className="flex flex-row bg-slate-800">
      <AppSidebar />
      <div className="w-full">
        <div className="h-16"></div>
        <div className="bg-white rounded-tl-4xl">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PrivateNavigation;
