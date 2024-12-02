import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Link } from "@remix-run/react"

export function MainNav() {
  return (
    <div className="py-2 px-2">
      <NavigationMenu>
        <NavigationMenuLink>
          <Link to="/">Home</Link>
        </NavigationMenuLink>
      </NavigationMenu>
    </div>
  )
}
