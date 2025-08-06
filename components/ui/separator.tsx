"use client"

import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@/lib/utils"

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0",
        // Horizontal gradient
        orientation === "horizontal"
          ? "h-px w-full bg-gradient-to-r from-white dark:from-primary via-dodgerblue-500 to-white dark:to-primary"
          // Vertical gradient
          : "w-px h-full bg-gradient-to-b from-white via-dodgerblue-500 to-primary",
        className
      )}
      {...props}
    />
  )
}

export { Separator }
