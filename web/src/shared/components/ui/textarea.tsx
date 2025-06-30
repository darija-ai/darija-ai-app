import * as React from "react"

import { cn } from "@/shared/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "./src:border-input ./src:placeholder:text-muted-foreground ./src:focus-visible:border-ring ./src:focus-visible:ring-ring/50 ./src:aria-invalid:ring-destructive/20 ./src:dark:aria-invalid:ring-destructive/40 ./src:aria-invalid:border-destructive ./src:dark:bg-input/30 ./src:flex ./src:field-sizing-content ./src:min-h-16 ./src:w-full ./src:rounded-md ./src:border ./src:bg-transparent ./src:px-3 ./src:py-2 ./src:text-base ./src:shadow-xs ./src:transition-[color,box-shadow] ./src:outline-none ./src:focus-visible:ring-[3px] ./src:disabled:cursor-not-allowed ./src:disabled:opacity-50 ./src:md:text-sm",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
