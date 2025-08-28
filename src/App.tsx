"use client"

import { useState } from "react"
import { Sidebar } from "./components/Layout/Sidebar"
import { Topbar } from "./components/Layout/Topbar"
import { DashboardPage } from "./pages/Dashboard"
import { AnalyticsPage } from "./pages/Analytics"
import { UsersPage } from "./pages/Users"
import { BillingPage } from "./pages/Billing"
import { SettingsPage } from "./pages/Settings"
import { LoginPage } from "./pages/Login"
import { ThemeProvider } from "./components/ThemeProvider"
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <ErrorBoundary>
          <LoginPage onLogin={() => setIsAuthenticated(true)} />
        </ErrorBoundary>
      </ThemeProvider>
    )
  }

  const renderPage = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardPage />
      case "analytics":
        return <AnalyticsPage />
      case "users":
        return <UsersPage />
      case "billing":
        return <BillingPage />
      case "settings":
        return <SettingsPage />
      default:
        return <DashboardPage />
    }
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <ErrorBoundary>
        <div className="flex h-screen bg-background">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <div className="flex flex-col flex-1 overflow-hidden">
            <Topbar />
            {renderPage()}
          </div>
        </div>
      </ErrorBoundary>
    </ThemeProvider>
  )
}

export default App
