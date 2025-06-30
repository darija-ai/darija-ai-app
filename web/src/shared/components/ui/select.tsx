import * as React from "react"
import * as SelectPrimitive from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "./src:border-input ./src:data-[placeholder]:text-muted-foreground ./src:[&_svg:not([class*=text-])]:text-muted-foreground ./src:focus-visible:border-ring ./src:focus-visible:ring-ring/50 ./src:aria-invalid:ring-destructive/20 ./src:dark:aria-invalid:ring-destructive/40 ./src:aria-invalid:border-destructive ./src:dark:bg-input/30 ./src:dark:hover:bg-input/50 ./src:flex ./src:w-fit ./src:items-center ./src:justify-between ./src:gap-2 ./src:rounded-md ./src:border ./src:bg-transparent ./src:px-3 ./src:py-2 ./src:text-sm ./src:whitespace-nowrap ./src:shadow-xs ./src:transition-[color,box-shadow] ./src:outline-none ./src:focus-visible:ring-[3px] ./src:disabled:cursor-not-allowed ./src:disabled:opacity-50 ./src:data-[size=default]:h-9 ./src:data-[size=sm]:h-8 ./src:*:data-[slot=select-value]:line-clamp-1 ./src:*:data-[slot=select-value]:flex ./src:*:data-[slot=select-value]:items-center ./src:*:data-[slot=select-value]:gap-2 ./src:[&_svg]:pointer-events-none ./src:[&_svg]:shrink-0 ./src:[&_svg:not([class*=size-])]:size-4",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="./src:size-4 ./src:opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          "./src:bg-popover ./src:text-popover-foreground ./src:data-[state=open]:animate-in ./src:data-[state=closed]:animate-out ./src:data-[state=closed]:fade-out-0 ./src:data-[state=open]:fade-in-0 ./src:data-[state=closed]:zoom-out-95 ./src:data-[state=open]:zoom-in-95 ./src:data-[side=bottom]:slide-in-from-top-2 ./src:data-[side=left]:slide-in-from-right-2 ./src:data-[side=right]:slide-in-from-left-2 ./src:data-[side=top]:slide-in-from-bottom-2 ./src:relative ./src:z-50 ./src:max-h-(--radix-select-content-available-height) ./src:min-w-[8rem] ./src:origin-(--radix-select-content-transform-origin) ./src:overflow-x-hidden ./src:overflow-y-auto ./src:rounded-md ./src:border ./src:shadow-md",
          position === "popper" &&
            "./src:data-[side=bottom]:translate-y-1 ./src:data-[side=left]:-translate-x-1 ./src:data-[side=right]:translate-x-1 ./src:data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "./src:p-1",
            position === "popper" &&
              "./src:h-[var(--radix-select-trigger-height)] ./src:w-full ./src:min-w-[var(--radix-select-trigger-width)] ./src:scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("./src:text-muted-foreground ./src:px-2 ./src:py-1.5 ./src:text-xs", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "./src:focus:bg-accent ./src:focus:text-accent-foreground ./src:[&_svg:not([class*=text-])]:text-muted-foreground ./src:relative ./src:flex ./src:w-full ./src:cursor-default ./src:items-center ./src:gap-2 ./src:rounded-sm ./src:py-1.5 ./src:pr-8 ./src:pl-2 ./src:text-sm ./src:outline-hidden ./src:select-none ./src:data-[disabled]:pointer-events-none ./src:data-[disabled]:opacity-50 ./src:[&_svg]:pointer-events-none ./src:[&_svg]:shrink-0 ./src:[&_svg:not([class*=size-])]:size-4 ./src:*:[span]:last:flex ./src:*:[span]:last:items-center ./src:*:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span className="./src:absolute ./src:right-2 ./src:flex ./src:size-3.5 ./src:items-center ./src:justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="./src:size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("./src:bg-border ./src:pointer-events-none ./src:-mx-1 ./src:my-1 ./src:h-px", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "./src:flex ./src:cursor-default ./src:items-center ./src:justify-center ./src:py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="./src:size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "./src:flex ./src:cursor-default ./src:items-center ./src:justify-center ./src:py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="./src:size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}
