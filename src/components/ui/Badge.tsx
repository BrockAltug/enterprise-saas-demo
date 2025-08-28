import type React from "react"
import { cn } from "@/lib/utils"

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "success" | "warning" | "destructive"
  className?: string
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-muted text-muted-foreground": variant === "default",
          "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300": variant === "success",
          "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300": variant === "warning",
          "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300": variant === "destructive",
        },
        className,
      )}
    >
      {children}
    </span>
  )
}
