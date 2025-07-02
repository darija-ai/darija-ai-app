import { Button } from "@/shared/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./nav-sheet";
import { useNavigate } from "@tanstack/react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-6 inset-x-4 h-16 bg-black/20 backdrop-blur-md border border-white/10 max-w-7xl mx-auto rounded-full z-50">
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <div className="text-white ml-4">
          <img
            src="/logo.webp"
            width={60}
            className="invert hover:opacity-50"
            onClick={() => navigate({ to: "/" })}
          />
        </div>

        <NavMenu className="hidden md:block text-white" />

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="hidden sm:inline-flex rounded-full bg-transparent text-white  border-white/20 hover:bg-white/10 hover:text-white"
            onClick={() => navigate({ to: "/login" })}
          >
            Login
          </Button>
          <Button
            className="rounded-full bg-white text-black hover:bg-amber-100"
            onClick={() => navigate({ to: "/sign-up" })}
          >
            Sign Up
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};
