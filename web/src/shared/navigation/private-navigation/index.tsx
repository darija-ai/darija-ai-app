import { ReactNode } from "@tanstack/react-router";

const navigationItems = [
  "Home",
  "Models",
  "Playground",
  "Documentation",
  "Settings",
];

const PrivateNavigation = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row w-full max-h-screen">
      <div className="flex flex-col w-1/5 px-6 items-center">
        <div className="mt-10">
          <div className="pb-6 text-3xl">Logo</div>
        </div>
        <div className="flex flex-col items-center w-full space-y-4">
          {navigationItems.map((item) => (
            <div
              key={item}
              className="bg-sky-950 text-white rounded-full py-2 px-2 w-full"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white border-[1px] border-gray-200 w-full rounded-t-2xl mt-10 mr-1 overflow-y-auto hide-scrollbar">
        {children}
      </div>
    </div>
  );
};

export default PrivateNavigation;