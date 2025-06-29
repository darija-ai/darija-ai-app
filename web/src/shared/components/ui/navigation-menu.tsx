import * as React from "react"
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { cva } from "class-variance-authority"
import { ChevronDownIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        "./src:group/navigation-menu ./src:relative ./src:flex ./src:max-w-max ./src:flex-1 ./src:items-center ./src:justify-center",
        className
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        "./src:group ./src:flex ./src:flex-1 ./src:list-none ./src:items-center ./src:justify-center ./src:gap-1",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("./src:relative", className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  "./src:group ./src:inline-flex ./src:h-9 ./src:w-max ./src:items-center ./src:justify-center ./src:rounded-md ./src:bg-background ./src:px-4 ./src:py-2 ./src:text-sm ./src:font-medium ./src:hover:bg-accent ./src:hover:text-accent-foreground ./src:focus:bg-accent ./src:focus:text-accent-foreground ./src:disabled:pointer-events-none ./src:disabled:opacity-50 ./src:data-[state=open]:hover:bg-accent ./src:data-[state=open]:text-accent-foreground ./src:data-[state=open]:focus:bg-accent ./src:data-[state=open]:bg-accent/50 ./src:focus-visible:ring-ring/50 ./src:outline-none ./src:transition-[color,box-shadow] ./src:focus-visible:ring-[3px] ./src:focus-visible:outline-1"
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), "./src:group", className)}
      {...props}
    >
      {children}{" "}
      <ChevronDownIcon
        className="./src:relative ./src:top-[1px] ./src:ml-1 ./src:size-3 ./src:transition ./src:duration-300 ./src:group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "./src:data-[motion^=from-]:animate-in ./src:data-[motion^=to-]:animate-out ./src:data-[motion^=from-]:fade-in ./src:data-[motion^=to-]:fade-out ./src:data-[motion=from-end]:slide-in-from-right-52 ./src:data-[motion=from-start]:slide-in-from-left-52 ./src:data-[motion=to-end]:slide-out-to-right-52 ./src:data-[motion=to-start]:slide-out-to-left-52 ./src:top-0 ./src:left-0 ./src:w-full ./src:p-2 ./src:pr-2.5 ./src:md:absolute ./src:md:w-auto",
        "./src:group-data-[viewport=false]/navigation-menu:bg-popover ./src:group-data-[viewport=false]/navigation-menu:text-popover-foreground ./src:group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in ./src:group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out ./src:group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 ./src:group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 ./src:group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 ./src:group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 ./src:group-data-[viewport=false]/navigation-menu:top-full ./src:group-data-[viewport=false]/navigation-menu:mt-1.5 ./src:group-data-[viewport=false]/navigation-menu:overflow-hidden ./src:group-data-[viewport=false]/navigation-menu:rounded-md ./src:group-data-[viewport=false]/navigation-menu:border ./src:group-data-[viewport=false]/navigation-menu:shadow ./src:group-data-[viewport=false]/navigation-menu:duration-200 ./src:**:data-[slot=navigation-menu-link]:focus:ring-0 ./src:**:data-[slot=navigation-menu-link]:focus:outline-none",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className={cn(
        "./src:absolute ./src:top-full ./src:left-0 ./src:isolate ./src:z-50 ./src:flex ./src:justify-center"
      )}
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          "./src:origin-top-center ./src:bg-popover ./src:text-popover-foreground ./src:data-[state=open]:animate-in ./src:data-[state=closed]:animate-out ./src:data-[state=closed]:zoom-out-95 ./src:data-[state=open]:zoom-in-90 ./src:relative ./src:mt-1.5 ./src:h-[var(--radix-navigation-menu-viewport-height)] ./src:w-full ./src:overflow-hidden ./src:rounded-md ./src:border ./src:shadow ./src:md:w-[var(--radix-navigation-menu-viewport-width)]",
          className
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "./src:data-[active=true]:focus:bg-accent ./src:data-[active=true]:hover:bg-accent ./src:data-[active=true]:bg-accent/50 ./src:data-[active=true]:text-accent-foreground ./src:hover:bg-accent ./src:hover:text-accent-foreground ./src:focus:bg-accent ./src:focus:text-accent-foreground ./src:focus-visible:ring-ring/50 ./src:[&_svg:not([class*=text-])]:text-muted-foreground ./src:flex ./src:flex-col ./src:gap-1 ./src:rounded-sm ./src:p-2 ./src:text-sm ./src:transition-all ./src:outline-none ./src:focus-visible:ring-[3px] ./src:focus-visible:outline-1 ./src:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        "./src:data-[state=visible]:animate-in ./src:data-[state=hidden]:animate-out ./src:data-[state=hidden]:fade-out ./src:data-[state=visible]:fade-in ./src:top-full ./src:z-[1] ./src:flex ./src:h-1.5 ./src:items-end ./src:justify-center ./src:overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="./src:bg-border ./src:relative ./src:top-[60%] ./src:h-2 ./src:w-2 ./src:rotate-45 ./src:rounded-tl-sm ./src:shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}
