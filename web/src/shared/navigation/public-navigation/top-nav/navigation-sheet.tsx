import { Button } from "@/shared/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/shared/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "@tanstack/react-router"
import { Logo } from "./logo"

const navigationItems = [
  { href: "#", label: "Home" },
  { href: "#", label: "Features" },
  { href: "#", label: "About" },
  { href: "#", label: "Contact" },
]

export const NavigationSheet = () => {
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
      <SheetContent className="bg-black/95 backdrop-blur-md border-white/10 px-15">
        <div className="text-white">
          <Logo />
        </div>
        <nav className="mt-12 flex flex-col space-y-6 ">
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-white/90 hover:text-white transition-colors text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="mt-12 flex flex-col space-y-4">
          <Button
            variant="ghost"
            className="w-full rounded-full bg-transparent text-white border border-white/20 hover:bg-white/10 hover:text-white"
          >
            Login
          </Button>
          <Button className="w-full rounded-full bg-white text-black hover:bg-amber-100">Sign Up</Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
