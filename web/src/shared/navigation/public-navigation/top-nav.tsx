import { useNavigate } from "@tanstack/react-router";

const navElements = [
  {
    label: "services",
    value: "Services",
    route: "/services",
  },
  {
    label: "contribute",
    value: "Contribute",
    route: "/contribute",
  },
  {
    label: "about-us",
    value: "About Us",
    route: "/about-us",
  },
];

const TopNavigation = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex flex-row justify-between items-center h-16 px-4 w-full">
      <div className="cursor-pointern" onClick={() => navigate({ to: "/" })}>Open Darija</div>
      <ul className="flex space-x-2">
        {navElements.map((elm, i) => (
          <li key={i} className="cursor-pointer" onClick={() => navigate({ to: elm.route })}>{elm.value}</li>
        ))}
      </ul>
      <div className="flex space-x-2 ">
        <div className="cursor-pointer" onClick={() => navigate({ to: "/sign-in" })}>Login</div>
        <div className="cursor-pointer" onClick={() => navigate({ to: "/sign-up" })}>Sign Up</div>
      </div>
    </nav>
  );
};

export default TopNavigation;
