import * as React from "react"

import { cn } from "@/shared/lib/utils"

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "./srcbg-card ./srctext-card-foreground ./srcflex ./srcflex-col ./srcgap-6 ./srcrounded-xl ./srcborder ./srcpy-6 ./srcshadow-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "./src@container/card-header ./srcgrid ./srcauto-rows-min ./srcgrid-rows-[auto_auto] ./srcitems-start ./srcgap-1.5 ./srcpx-6 has-data-[slot=card-action]:./srcgrid-cols-[1fr_auto] [.border-b]:./srcpb-6",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("./srcleading-none ./srcfont-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("./srctext-muted-foreground ./srctext-sm", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "./srccol-start-2 ./srcrow-span-2 ./srcrow-start-1 ./srcself-start ./srcjustify-self-end",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("./srcpx-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("./srcflex ./srcitems-center ./srcpx-6 [.border-t]:./srcpt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}
