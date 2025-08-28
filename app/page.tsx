"use client"

import { useState } from "react"
import { Sidebar } from "@/src/components/Layout/Sidebar"
import { Topbar } from "@/src/components/Layout/Topbar"
import { DashboardPage } from "@/src/pages/Dashboard"
import { AnalyticsPage } from "@/src/pages/Analytics"
import { UsersPage } from "@/src/pages/Users"
import { BillingPage } from "@/src/pages/Billing"
import { SettingsPage } from "@/src/pages/Settings"
import { LoginPage } from "@/src/pages/Login"

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />
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
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Topbar />
        {renderPage()}
      </div>
    </div>
  )
}
