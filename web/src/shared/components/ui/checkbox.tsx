import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"

import { cn } from "@/shared/lib/utils"

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "./src:peer ./src:border-input ./src:dark:bg-input/30 ./src:data-[state=checked]:bg-primary ./src:data-[state=checked]:text-primary-foreground ./src:dark:data-[state=checked]:bg-primary ./src:data-[state=checked]:border-primary ./src:focus-visible:border-ring ./src:focus-visible:ring-ring/50 ./src:aria-invalid:ring-destructive/20 ./src:dark:aria-invalid:ring-destructive/40 ./src:aria-invalid:border-destructive ./src:size-4 ./src:shrink-0 ./src:rounded-[4px] ./src:border ./src:shadow-xs ./src:transition-shadow ./src:outline-none ./src:focus-visible:ring-[3px] ./src:disabled:cursor-not-allowed ./src:disabled:opacity-50",
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="./src:flex ./src:items-center ./src:justify-center ./src:text-current ./src:transition-none"
      >
        <CheckIcon className="./src:size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }
