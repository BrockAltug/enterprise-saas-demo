import type { ReactNode } from "react"

interface PageShellProps {
  title: string
  children: ReactNode
}

export function PageShell({ title, children }: PageShellProps) {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        </div>
        {children}
      </div>
    </div>
  )
}
