import { ReactNode } from "react";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col w-full m-auto bg-purple-50 min-h-screen">
      {children}
    </div>
  );
};

export default LayoutProvider;
