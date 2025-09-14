import { Button } from "@/shared/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/shared/components/ui/sheet";
import { Menu } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Features", to: "/features" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const NavigationSheet = () => {
  const navigate = useNavigate();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-white border border-white/20 hover:bg-white/10"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-black/70 backdrop-blur-md border-white/10 px-15 h-full flex flex-col justify-between pb-10">
        <SheetClose asChild>
          <div className="text-white">
            <img
              src="/logo.webp"
              width={60}
              className="invert hover:opacity-50"
              onClick={() => navigate({ to: "/" })}
            />
          </div>
        </SheetClose>

        <nav className="mt-12 flex flex-col space-y-6 ">
          {navItems.map((item) => (
            <SheetClose asChild>
              <Link
                key={item.label}
                to={item.to}
                className="text-white/90 hover:text-white transition-colors text-lg font-medium"
              >
                {item.label}
              </Link>
            </SheetClose>
          ))}
        </nav>

        <div className="mt-12 flex flex-col space-y-4">
          <SheetClose asChild>
            <Button
              variant="ghost"
              className="w-full rounded-full bg-transparent text-white border border-white/20 hover:bg-white/10 hover:text-white"
              onClick={() => navigate({ to: "/sign-up" })}
            >
              Login
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button
              className="w-full rounded-full bg-white text-black hover:bg-amber-100"
              onClick={() => navigate({ to: "/sign-up" })}
            >
              Sign Up
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
