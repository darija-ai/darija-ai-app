import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/shared/components/ui/navigation-menu"
import type { NavigationMenuProps } from "@radix-ui/react-navigation-menu"
import { Link } from "@tanstack/react-router"

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="hidden md:flex gap-6 space-x-0 flex-row items-start">
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="#" className="text-white/90 hover:text-white transition-colors">
            Home
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="#" className="text-white/90 hover:text-white transition-colors">
            Features
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="#" className="text-white/90 hover:text-white transition-colors">
            About
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild>
          <Link to="#" className="text-white/90 hover:text-white transition-colors">
            Contact
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)
