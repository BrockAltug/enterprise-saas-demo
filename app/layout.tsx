import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import ErrorBoundary from "../src/components/ErrorBoundary"
import { ThemeProvider } from "../src/components/ThemeProvider"

export const metadata: Metadata = {
  title: "Enterprise SaaS Platform Demo",
  description: "A comprehensive multi-tenant SaaS platform demonstration",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
