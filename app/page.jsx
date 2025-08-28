"use client"

import { useState, useEffect } from "react"
import {
  BarChart3,
  Users,
  CreditCard,
  Shield,
  Settings,
  Search,
  Bell,
  User,
  Moon,
  Sun,
  TrendingUp,
  TrendingDown,
  Copy,
  Trash2,
  Download,
  Filter,
  MoreHorizontal,
  ChevronDown,
  Menu,
  X,
  Zap,
  Activity,
  Globe,
  Star,
  Award,
  Briefcase,
  Database,
  Eye,
  Plus,
  Edit,
  LogOut,
  UserPlus,
  SettingsIcon,
  HelpCircle,
  Command,
  MessageSquare,
  Calendar,
  FileText,
  CheckCircle,
  AlertCircle,
  Info,
  Key,
} from "lucide-react"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, LineChart, Line } from "recharts"

const kpiData = [
  {
    title: "Monthly Recurring Revenue",
    value: "$847K",
    change: "+12.3%",
    trend: "up",
    icon: TrendingUp,
    description: "vs last month",
  },
  {
    title: "Customer Satisfaction",
    value: "4.9/5",
    change: "+0.2",
    trend: "up",
    icon: Star,
    description: "avg rating",
  },
  { title: "System Uptime", value: "99.98%", change: "+0.01%", trend: "up", icon: Activity, description: "this month" },
  { title: "Active Users", value: "24,847", change: "+8.7%", trend: "up", icon: Users, description: "monthly active" },
]

const chartData = [
  { month: "Jan", revenue: 65000, users: 2400, conversion: 3.2, churn: 2.1, ltv: 1250, cac: 180 },
  { month: "Feb", revenue: 72000, users: 2800, conversion: 3.8, churn: 1.9, ltv: 1320, cac: 165 },
  { month: "Mar", revenue: 68000, users: 2600, conversion: 3.5, churn: 2.3, ltv: 1180, cac: 195 },
  { month: "Apr", revenue: 78000, users: 3200, conversion: 4.1, churn: 1.7, ltv: 1450, cac: 155 },
  { month: "May", revenue: 85000, users: 3600, conversion: 4.3, churn: 1.5, ltv: 1580, cac: 140 },
  { month: "Jun", revenue: 92000, users: 4100, conversion: 4.7, churn: 1.2, ltv: 1720, cac: 125 },
  { month: "Jul", revenue: 98000, users: 4500, conversion: 5.1, churn: 1.1, ltv: 1850, cac: 115 },
  { month: "Aug", revenue: 105000, users: 4900, conversion: 5.3, churn: 1.0, ltv: 1950, cac: 110 },
]

const performanceData = [
  { metric: "API Response Time", value: "145ms", trend: "down", change: "-12ms" },
  { metric: "Error Rate", value: "0.02%", trend: "down", change: "-0.01%" },
  { metric: "Throughput", value: "2.4K/min", trend: "up", change: "+180/min" },
  { metric: "Cache Hit Rate", value: "94.2%", trend: "up", change: "+2.1%" },
]

const cohortData = [
  { week: "W1", retention: 100, revenue: 45000 },
  { week: "W2", retention: 85, revenue: 38250 },
  { week: "W3", retention: 72, revenue: 32400 },
  { week: "W4", retention: 65, revenue: 29250 },
  { week: "W8", retention: 58, revenue: 26100 },
  { week: "W12", retention: 52, revenue: 23400 },
]

const userData = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah.chen@company.com",
    role: "Enterprise Admin",
    department: "Engineering",
    status: "Active",
    lastLogin: "2 minutes ago",
    avatar: "SC",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    email: "m.rodriguez@company.com",
    role: "Team Lead",
    department: "Product",
    status: "Active",
    lastLogin: "1 hour ago",
    avatar: "MR",
  },
  {
    id: 3,
    name: "Emily Johnson",
    email: "emily.j@company.com",
    role: "Manager",
    department: "Operations",
    status: "Active",
    lastLogin: "3 hours ago",
    avatar: "EJ",
  },
  {
    id: 4,
    name: "David Kim",
    email: "david.kim@company.com",
    role: "Analyst",
    department: "Analytics",
    status: "Inactive",
    lastLogin: "2 days ago",
    avatar: "DK",
  },
  {
    id: 5,
    name: "Lisa Wang",
    email: "lisa.wang@company.com",
    role: "Developer",
    department: "Engineering",
    status: "Active",
    lastLogin: "30 minutes ago",
    avatar: "LW",
  },
]

const subscriptionTiers = [
  {
    name: "Professional",
    price: "$49",
    period: "/user/month",
    features: [
      "Up to 100 users",
      "500GB storage",
      "Priority support",
      "Advanced analytics",
      "API access",
      "SSO integration",
    ],
    popular: false,
    color: "from-gray-500 to-gray-600",
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/user/month",
    features: [
      "Unlimited users",
      "2TB storage",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
      "SLA guarantee",
      "White-label options",
    ],
    popular: true,
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Enterprise Plus",
    price: "Custom",
    period: "pricing",
    features: [
      "Everything in Enterprise",
      "On-premise deployment",
      "Custom development",
      "Dedicated success manager",
      "Advanced compliance",
      "Custom SLA terms",
    ],
    popular: false,
    color: "from-gray-600 to-gray-700",
  },
]

const invoiceData = [
  { id: "INV-2024-001", date: "2024-01-15", amount: "$4,950.00", status: "Paid", method: "ACH Transfer" },
  { id: "INV-2024-002", date: "2024-02-15", amount: "$4,950.00", status: "Paid", method: "Wire Transfer" },
  { id: "INV-2024-003", date: "2024-03-15", amount: "$5,445.00", status: "Processing", method: "ACH Transfer" },
  { id: "INV-2024-004", date: "2024-04-15", amount: "$5,445.00", status: "Overdue", method: "Check" },
]

const apiKeys = [
  {
    id: 1,
    name: "Production API v3",
    key: "pk_live_51H7...",
    permissions: "Full Access",
    lastUsed: "2 minutes ago",
    created: "2024-01-15",
  },
  {
    id: 2,
    name: "Development API",
    key: "pk_test_51H7...",
    permissions: "Read Only",
    lastUsed: "1 hour ago",
    created: "2024-02-01",
  },
  {
    id: 3,
    name: "Analytics Integration",
    key: "pk_live_51H8...",
    permissions: "Read & Write",
    lastUsed: "5 hours ago",
    created: "2024-02-15",
  },
]

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3, description: "Overview & analytics" },
  { id: "users", label: "Team Management", icon: Users, description: "Users & permissions" },
  { id: "billing", label: "Billing & Plans", icon: CreditCard, description: "Subscriptions & invoices" },
  { id: "security", label: "Security Center", icon: Shield, description: "Auth & compliance" },
  { id: "settings", label: "Settings", icon: Settings, description: "System configuration" },
]

const notifications = [
  {
    id: 1,
    title: "System Update Available",
    message: "Version 2.4.2 is ready to install",
    type: "info",
    time: "2 min ago",
    unread: true,
  },
  {
    id: 2,
    title: "New User Registered",
    message: "John Doe joined your organization",
    type: "success",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 3,
    title: "Payment Processed",
    message: "Monthly subscription renewed successfully",
    type: "success",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 4,
    title: "Security Alert",
    message: "Unusual login activity detected",
    type: "warning",
    time: "1 day ago",
    unread: false,
  },
]

const commands = [
  { id: 1, title: "Add New User", description: "Create a new team member", icon: UserPlus, shortcut: "⌘+U" },
  { id: 2, title: "Generate API Key", description: "Create new API access key", icon: Database, shortcut: "⌘+K" },
  { id: 3, title: "View Analytics", description: "Open detailed analytics", icon: BarChart3, shortcut: "⌘+A" },
  { id: 4, title: "Security Settings", description: "Manage security options", icon: Shield, shortcut: "⌘+S" },
  { id: 5, title: "Export Data", description: "Download reports and data", icon: Download, shortcut: "⌘+E" },
]

export default function EnterpriseApp() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showApiKeyModal, setShowApiKeyModal] = useState(false)
  const [showUserModal, setShowUserModal] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [notificationDropdownOpen, setNotificationDropdownOpen] = useState(false)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.metaKey || e.ctrlKey) {
        switch (e.key) {
          case "k":
            e.preventDefault()
            setCommandPaletteOpen(true)
            break
          case "u":
            e.preventDefault()
            setShowUserModal(true)
            break
          case "/":
            e.preventDefault()
            document.querySelector('input[placeholder*="Search"]')?.focus()
            break
        }
      }
      if (e.key === "Escape") {
        setCommandPaletteOpen(false)
        setProfileDropdownOpen(false)
        setNotificationDropdownOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  const renderDashboard = () => (
    <div className="space-y-8">
      {/* Enhanced Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground mt-1">Monitor your business performance and key metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors">
            <Download className="h-4 w-4" />
            <span>Export Report</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
            <Plus className="h-4 w-4" />
            <span>Add Widget</span>
          </button>
        </div>
      </div>

      {/* Enhanced KPI Cards with perfect grid alignment and sub-cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => {
          const IconComponent = kpi.icon
          return (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-secondary/30"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-gradient-to-br from-secondary/10 to-primary/5 rounded-xl group-hover:from-secondary/20 group-hover:to-primary/10 transition-all duration-300">
                  <IconComponent className="h-7 w-7 text-secondary" />
                </div>
                <div
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm ${
                    kpi.trend === "up"
                      ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800"
                      : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400 border border-red-200 dark:border-red-800"
                  }`}
                >
                  {kpi.trend === "up" ? (
                    <TrendingUp className="h-3.5 w-3.5" />
                  ) : (
                    <TrendingDown className="h-3.5 w-3.5" />
                  )}
                  <span>{kpi.change}</span>
                </div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                <p className="text-sm font-medium text-muted-foreground mb-2">{kpi.title}</p>
                <p className="text-3xl font-bold text-card-foreground mb-2 tracking-tight">{kpi.value}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{kpi.description}</p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Enhanced Charts Section with advanced analytics */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-6">
        {/* Multi-metric Revenue Dashboard */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-card-foreground">Revenue Analytics</h3>
                <p className="text-sm text-muted-foreground mt-1">Multi-dimensional performance</p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                  Revenue
                </button>
                <button className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border hover:bg-accent transition-colors">
                  Users
                </button>
                <button className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border hover:bg-accent transition-colors">
                  Conversion
                </button>
              </div>
            </div>
          </div>

          <div className="bg-muted/20 rounded-lg p-4 border border-border/30 mb-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.05} />
                    </linearGradient>
                    <linearGradient id="usersGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                      color: "hsl(var(--card-foreground))",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value, name) => [
                      name === "revenue" ? `$${(value / 1000).toFixed(0)}K` : value.toLocaleString(),
                      name === "revenue" ? "Revenue" : name === "users" ? "Users" : "Conversion Rate",
                    ]}
                  />
                  <Area
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--chart-1))"
                    fillOpacity={1}
                    fill="url(#revenueGradient)"
                    strokeWidth={3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Performance Metrics Sub-cards */}
          <div className="grid grid-cols-2 gap-3">
            {performanceData.map((metric, index) => (
              <div key={index} className="bg-muted/20 rounded-lg p-3 border border-border/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">{metric.metric}</p>
                    <p className="text-sm font-semibold text-card-foreground">{metric.value}</p>
                  </div>
                  <div
                    className={`flex items-center gap-1 text-xs ${
                      metric.trend === "up" ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {metric.trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                    {metric.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advanced User Analytics */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-card-foreground">User Analytics</h3>
                <p className="text-sm text-muted-foreground mt-1">Growth & retention insights</p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <BarChart3 className="h-4 w-4 text-muted-foreground" />
                </button>
                <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                  <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-muted/20 rounded-lg p-4 border border-border/30 mb-4">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                  <XAxis
                    dataKey="month"
                    stroke="hsl(var(--muted-foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "12px",
                      color: "hsl(var(--card-foreground))",
                      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    }}
                    formatter={(value, name) => [
                      value.toLocaleString(),
                      name === "users" ? "Active Users" : name === "conversion" ? "Conversion Rate %" : name,
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="users"
                    stroke="hsl(var(--chart-2))"
                    strokeWidth={3}
                    dot={{ fill: "hsl(var(--chart-2))", strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, stroke: "hsl(var(--chart-2))", strokeWidth: 2, fill: "hsl(var(--background))" }}
                  />
                  <Line
                    type="monotone"
                    dataKey="conversion"
                    stroke="hsl(var(--chart-3))"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ fill: "hsl(var(--chart-3))", strokeWidth: 2, r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Key Metrics Sub-cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Churn Rate</p>
                  <p className="text-sm font-semibold text-card-foreground">1.2%</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingDown className="h-3 w-3" />
                  -0.3%
                </div>
              </div>
            </div>
            <div className="bg-muted/20 rounded-lg p-3 border border-border/30">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">LTV/CAC</p>
                  <p className="text-sm font-semibold text-card-foreground">15.6x</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-emerald-600">
                  <TrendingUp className="h-3 w-3" />
                  +2.1x
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Cohort Analysis Chart */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm mb-6">
        <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-card-foreground">Cohort Retention Analysis</h3>
              <p className="text-sm text-muted-foreground mt-1">User retention and revenue correlation over time</p>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
                12 Weeks
              </button>
              <button className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border hover:bg-accent transition-colors">
                6 Months
              </button>
            </div>
          </div>
        </div>

        <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cohortData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="retentionGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(var(--chart-4))" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="hsl(var(--chart-4))" stopOpacity={0.05} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
                <XAxis
                  dataKey="week"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "12px",
                    color: "hsl(var(--card-foreground))",
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  }}
                  formatter={(value, name) => [
                    name === "retention" ? `${value}%` : `$${(value / 1000).toFixed(0)}K`,
                    name === "retention" ? "Retention Rate" : "Revenue",
                  ]}
                />
                <Area
                  type="monotone"
                  dataKey="retention"
                  stroke="hsl(var(--chart-4))"
                  fillOpacity={1}
                  fill="url(#retentionGradient)"
                  strokeWidth={3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Enhanced Activity Feed with sub-cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">Recent Activity</h3>
          </div>

          <div className="space-y-3">
            {[
              { action: "New user registration", user: "Sarah Chen", time: "2 minutes ago", type: "user" },
              { action: "Payment processed", amount: "$4,950", time: "1 hour ago", type: "payment" },
              { action: "API key generated", user: "Development Team", time: "3 hours ago", type: "api" },
              { action: "Security scan completed", result: "No issues found", time: "6 hours ago", type: "security" },
            ].map((activity, index) => (
              <div
                key={index}
                className="bg-muted/20 rounded-lg p-4 border border-border/30 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        activity.type === "user"
                          ? "bg-blue-500"
                          : activity.type === "payment"
                            ? "bg-green-500"
                            : activity.type === "api"
                              ? "bg-purple-500"
                              : "bg-orange-500"
                      }`}
                    ></div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">
                        {activity.user || activity.amount || activity.result}
                      </p>
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">Quick Actions</h3>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: UserPlus, label: "Add User", color: "bg-blue-500" },
              { icon: CreditCard, label: "Process Payment", color: "bg-green-500" },
              { icon: Key, label: "Generate API Key", color: "bg-purple-500" },
              { icon: Shield, label: "Security Scan", color: "bg-orange-500" },
            ].map((action, index) => (
              <div
                key={index}
                className="bg-muted/20 rounded-lg p-4 border border-border/30 hover:bg-muted/30 transition-all duration-200 cursor-pointer group"
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className={`p-3 ${action.color} rounded-lg group-hover:scale-110 transition-transform`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-card-foreground">{action.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderUsers = () => (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Team Management</h2>
          <p className="text-muted-foreground">Manage your team members and their permissions</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-card text-card-foreground rounded-lg border border-border hover:bg-accent transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>
          <button
            onClick={() => setShowUserModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Add User</span>
          </button>
        </div>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr>
                <th className="text-left p-4 font-semibold text-muted-foreground">User</th>
                <th className="text-left p-4 font-semibold text-muted-foreground">Role</th>
                <th className="text-left p-4 font-semibold text-muted-foreground">Department</th>
                <th className="text-left p-4 font-semibold text-muted-foreground">Status</th>
                <th className="text-left p-4 font-semibold text-muted-foreground">Last Login</th>
                <th className="text-left p-4 font-semibold text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => (
                <tr key={user.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-medium text-sm">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.role === "Enterprise Admin"
                          ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                          : user.role === "Team Lead" || user.role === "Manager"
                            ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                            : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {user.role}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{user.department}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="p-4 text-muted-foreground">{user.lastLogin}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                        <Edit className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                        <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderBilling = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Billing & Plans</h2>
        <p className="text-muted-foreground">Manage your subscription and billing information</p>
      </div>

      {/* Enhanced Subscription Tiers with sub-cards */}
      <div>
        <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
          <h3 className="text-xl font-semibold text-foreground">Available Plans</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {subscriptionTiers.map((tier, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl border-2 p-6 relative transition-all duration-300 hover:shadow-xl ${
                tier.popular ? "border-secondary shadow-lg scale-105" : "border-border hover:border-secondary/50"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-secondary to-primary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="bg-muted/20 rounded-lg p-4 border border-border/30 text-center mb-6">
                <h4 className="text-xl font-bold text-card-foreground">{tier.name}</h4>
                <div className="mt-3">
                  <span className="text-4xl font-bold text-card-foreground">{tier.price}</span>
                  <span className="text-muted-foreground ml-1">{tier.period}</span>
                </div>
              </div>

              <div className="bg-muted/20 rounded-lg p-4 border border-border/30 mb-6">
                <ul className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular
                    ? "bg-gradient-to-r from-secondary to-primary text-white hover:shadow-lg hover:scale-105"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {tier.popular ? "Current Plan" : "Upgrade"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Invoice History with sub-card */}
      <div>
        <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
          <h3 className="text-xl font-semibold text-foreground">Invoice History</h3>
        </div>
        <div className="bg-card rounded-xl border border-border overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Invoice ID</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Date</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Amount</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Status</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Payment Method</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.map((invoice) => (
                  <tr key={invoice.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-mono text-sm text-card-foreground">{invoice.id}</td>
                    <td className="p-4 text-muted-foreground">{invoice.date}</td>
                    <td className="p-4 font-semibold text-card-foreground">{invoice.amount}</td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          invoice.status === "Paid"
                            ? "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : invoice.status === "Processing"
                              ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                              : "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{invoice.method}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                          <Download className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                          <Eye className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )

  const renderSecurity = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Security Center</h2>
        <p className="text-muted-foreground">Manage your security settings and API access</p>
      </div>

      {/* API Keys Section */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-foreground">API Keys</h3>
            <p className="text-muted-foreground">Manage your API access keys</p>
          </div>
          <button
            onClick={() => setShowApiKeyModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>Generate Key</span>
          </button>
        </div>

        <div className="bg-card rounded-lg border border-border overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Name</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Key</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Permissions</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Last Used</th>
                  <th className="text-left p-4 font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {apiKeys.map((key) => (
                  <tr key={key.id} className="border-t border-border hover:bg-muted/30 transition-colors">
                    <td className="p-4 font-semibold text-card-foreground">{key.name}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <code className="px-2 py-1 bg-muted rounded text-sm font-mono">{key.key}</code>
                        <button className="p-1 hover:bg-accent rounded transition-colors">
                          <Copy className="h-4 w-4 text-muted-foreground" />
                        </button>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          key.permissions === "Full Access"
                            ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                            : key.permissions === "Read & Write"
                              ? "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                              : "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {key.permissions}
                      </span>
                    </td>
                    <td className="p-4 text-muted-foreground">{key.lastUsed}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                          <Edit className="h-4 w-4 text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-destructive/10 rounded-lg transition-colors">
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Enhanced Security Settings with sub-cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">Two-Factor Authentication</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Secure your account with an additional verification step
            </p>
          </div>

          <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-card-foreground">Enable 2FA</span>
              <button
                onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  twoFactorEnabled ? "bg-secondary" : "bg-muted"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    twoFactorEnabled ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">Password Settings</h3>
          </div>

          <div className="space-y-3">
            <div className="bg-muted/20 rounded-lg border border-border/30 hover:bg-muted/30 transition-colors">
              <button className="w-full text-left p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-card-foreground">Change Password</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
            </div>
            <div className="bg-muted/20 rounded-lg border border-border/30 hover:bg-muted/30 transition-colors">
              <button className="w-full text-left p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-card-foreground">Password Requirements</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Active Sessions with sub-cards */}
      <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
        <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
          <h3 className="text-lg font-semibold text-card-foreground">Active Sessions</h3>
        </div>
        <div className="space-y-3">
          {[
            {
              device: 'MacBook Pro 16"',
              browser: "Chrome 120",
              location: "San Francisco, CA",
              ip: "192.168.1.100",
              lastActive: "2 minutes ago",
              current: true,
            },
            {
              device: "iPhone 15 Pro",
              browser: "Safari Mobile",
              location: "San Francisco, CA",
              ip: "192.168.1.101",
              lastActive: "1 hour ago",
              current: false,
            },
            {
              device: "Windows Desktop",
              browser: "Edge 120",
              location: "New York, NY",
              ip: "203.0.113.45",
              lastActive: "2 days ago",
              current: false,
            },
          ].map((session, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-accent/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Globe className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="font-medium text-card-foreground">
                    {session.device} {session.current && <span className="text-xs text-secondary">(Current)</span>}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {session.browser} • {session.location} • {session.ip}
                  </p>
                  <p className="text-xs text-muted-foreground">Last active: {session.lastActive}</p>
                </div>
              </div>
              {!session.current && (
                <button className="px-3 py-1 text-xs text-destructive hover:bg-destructive/10 rounded transition-colors">
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderSettings = () => (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Settings</h2>
        <p className="text-muted-foreground">Configure your application preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Enhanced General Settings with sub-cards */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">General</h3>
          </div>
          <div className="space-y-4">
            <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
              <label className="block text-sm font-medium text-card-foreground mb-2">Organization Name</label>
              <input
                type="text"
                defaultValue="Acme Corporation"
                readOnly
                className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
              <label className="block text-sm font-medium text-card-foreground mb-2">Time Zone</label>
              <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Pacific Standard Time (PST)</option>
                <option>Eastern Standard Time (EST)</option>
                <option>Central Standard Time (CST)</option>
              </select>
            </div>
            <div className="bg-muted/20 rounded-lg p-4 border border-border/30">
              <label className="block text-sm font-medium text-card-foreground mb-2">Language</label>
              <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                <option>English (US)</option>
                <option>English (UK)</option>
                <option>Spanish</option>
                <option>French</option>
              </select>
            </div>
          </div>
        </div>

        {/* Enhanced Notification Settings with sub-cards */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">Notifications</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: "Email Notifications", description: "Receive updates via email", enabled: true },
              { label: "Push Notifications", description: "Browser push notifications", enabled: false },
              { label: "SMS Alerts", description: "Critical alerts via SMS", enabled: true },
              { label: "Weekly Reports", description: "Weekly summary reports", enabled: true },
            ].map((setting, index) => (
              <div key={index} className="bg-muted/20 rounded-lg p-4 border border-border/30">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-card-foreground">{setting.label}</p>
                    <p className="text-xs text-muted-foreground">{setting.description}</p>
                  </div>
                  <button
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      setting.enabled ? "bg-secondary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        setting.enabled ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Integration Settings with sub-cards */}
        <div className="bg-card rounded-xl border border-border p-6 shadow-sm">
          <div className="bg-muted/30 rounded-lg p-4 border border-border/50 mb-6">
            <h3 className="text-lg font-semibold text-card-foreground">Integrations</h3>
          </div>

          <div className="space-y-4">
            {[
              { name: "Slack", status: "Connected", icon: MessageSquare },
              { name: "Google Calendar", status: "Connected", icon: Calendar },
              { name: "Jira", status: "Not Connected", icon: Briefcase },
              { name: "GitHub", status: "Connected", icon: Database },
            ].map((integration, index) => {
              const IconComponent = integration.icon
              return (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/10 rounded-lg">
                      <IconComponent className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{integration.name}</p>
                      <p className="text-xs text-muted-foreground">{integration.status}</p>
                    </div>
                  </div>
                  <button
                    className={`px-3 py-1 text-xs rounded transition-colors ${
                      integration.status === "Connected"
                        ? "bg-green-50 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                    }`}
                  >
                    {integration.status === "Connected" ? "Disconnect" : "Connect"}
                  </button>
                </div>
              )
            })}
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">Advanced</h3>
          <div className="space-y-4">
            <button className="w-full text-left p-3 hover:bg-accent rounded-lg transition-colors border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">Export Data</p>
                  <p className="text-xs text-muted-foreground">Download all your data</p>
                </div>
                <Download className="h-4 w-4 text-muted-foreground" />
              </div>
            </button>
            <button className="w-full text-left p-3 hover:bg-accent rounded-lg transition-colors border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-card-foreground">API Documentation</p>
                  <p className="text-xs text-muted-foreground">View API reference</p>
                </div>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </div>
            </button>
            <button className="w-full text-left p-3 hover:bg-destructive/10 rounded-lg transition-colors border border-destructive/20">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-destructive">Delete Account</p>
                  <p className="text-xs text-muted-foreground">Permanently delete your account</p>
                </div>
                <Trash2 className="h-4 w-4 text-destructive" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "users":
        return renderUsers()
      case "billing":
        return renderBilling()
      case "security":
        return renderSecurity()
      case "settings":
        return renderSettings()
      default:
        return renderDashboard()
    }
  }

  return (
    <div className={`min-h-screen bg-background ${darkMode ? "dark" : ""}`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Enhanced Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-72 bg-sidebar border-r border-sidebar-border z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-sidebar-foreground">Enterprise SaaS</h1>
              <p className="text-xs text-muted-foreground">v2.4.2</p>
            </div>
          </div>
        </div>

        <nav className="px-4 space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 group ${
                  activeSection === item.id
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                <div>
                  <span className="font-medium">{item.label}</span>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              </button>
            )
          })}
        </nav>

        {/* Enhanced Sidebar Footer */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-4 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-lg flex items-center justify-center">
                <Award className="h-4 w-4 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium text-card-foreground">Enterprise Plan</p>
                <p className="text-xs text-muted-foreground">24/7 support included</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Enhanced Header with interactive elements */}
        <header className="bg-card/80 backdrop-blur-sm border-b border-border px-6 py-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
              >
                <Menu className="h-5 w-5" />
              </button>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search or type a command..."
                  className="pl-10 pr-16 py-2 w-80 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring transition-all"
                  onFocus={() => setCommandPaletteOpen(true)}
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <kbd className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded border">⌘K</kbd>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 hover:bg-accent rounded-lg transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>

              {/* Enhanced Notifications Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setNotificationDropdownOpen(!notificationDropdownOpen)}
                  className="p-2 hover:bg-accent rounded-lg transition-colors notification-dot"
                >
                  <Bell className="h-5 w-5" />
                </button>
                {notificationDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-popover border border-border rounded-lg shadow-lg z-50 animate-slide-in-right">
                    <div className="p-4 border-b border-border">
                      <h3 className="font-semibold text-popover-foreground">Notifications</h3>
                      <p className="text-sm text-muted-foreground">You have 2 unread notifications</p>
                    </div>
                    <div className="max-h-80 overflow-y-auto custom-scrollbar">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className={`p-4 border-b border-border hover:bg-accent/50 transition-colors ${
                            notification.unread ? "bg-accent/20" : ""
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`p-2 rounded-lg ${
                                notification.type === "success"
                                  ? "bg-green-50 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                                  : notification.type === "warning"
                                    ? "bg-yellow-50 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                                    : notification.type === "info"
                                      ? "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
                                      : "bg-gray-50 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                              }`}
                            >
                              {notification.type === "success" && <CheckCircle className="h-4 w-4" />}
                              {notification.type === "warning" && <AlertCircle className="h-4 w-4" />}
                              {notification.type === "info" && <Info className="h-4 w-4" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-popover-foreground">{notification.title}</p>
                              <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                              <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
                            </div>
                            {notification.unread && <div className="w-2 h-2 bg-secondary rounded-full"></div>}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-4 border-t border-border">
                      <button className="w-full text-center text-sm text-secondary hover:text-secondary/80 transition-colors">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Enhanced Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 p-2 hover:bg-accent rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                    JD
                  </div>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-popover border border-border rounded-lg shadow-lg z-50 animate-slide-in-right">
                    <div className="p-4 border-b border-border">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center text-white font-medium">
                          JD
                        </div>
                        <div>
                          <p className="font-semibold text-popover-foreground">John Doe</p>
                          <p className="text-sm text-muted-foreground">john.doe@company.com</p>
                          <p className="text-xs text-muted-foreground">Enterprise Admin</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {[
                        { icon: User, label: "Profile Settings", shortcut: "⌘P" },
                        { icon: SettingsIcon, label: "Account Settings", shortcut: "⌘," },
                        { icon: HelpCircle, label: "Help & Support", shortcut: "⌘?" },
                        { icon: LogOut, label: "Sign Out", shortcut: "⌘Q", danger: true },
                      ].map((item, index) => {
                        const IconComponent = item.icon
                        return (
                          <button
                            key={index}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                              item.danger
                                ? "hover:bg-destructive/10 text-destructive"
                                : "hover:bg-accent text-popover-foreground"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <IconComponent className="h-4 w-4" />
                              <span className="text-sm">{item.label}</span>
                            </div>
                            <kbd className="text-xs text-muted-foreground">{item.shortcut}</kbd>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6 pb-20">{renderContent()}</main>
      </div>

      {/* Enhanced Command Palette */}
      {commandPaletteOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 animate-fade-in">
          <div className="command-palette rounded-lg w-full max-w-2xl mx-4 animate-scale-in">
            <div className="p-4 border-b border-border">
              <div className="relative">
                <Command className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Type a command or search..."
                  className="w-full pl-10 pr-4 py-3 bg-transparent border-none outline-none text-lg"
                  autoFocus
                />
              </div>
            </div>
            <div className="max-h-80 overflow-y-auto custom-scrollbar">
              <div className="p-2">
                <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  Quick Actions
                </div>
                {commands.map((command) => {
                  const IconComponent = command.icon
                  return (
                    <button
                      key={command.id}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors text-left"
                      onClick={() => setCommandPaletteOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <IconComponent className="h-4 w-4 text-muted-foreground" />
                        <div>
                          <p className="text-sm font-medium">{command.title}</p>
                          <p className="text-xs text-muted-foreground">{command.description}</p>
                        </div>
                      </div>
                      <kbd className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">{command.shortcut}</kbd>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced API Key Modal */}
      {showApiKeyModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-card rounded-lg border border-border p-6 w-full max-w-md animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-card-foreground">Generate API Key</h3>
              <button onClick={() => setShowApiKeyModal(false)} className="p-2 hover:bg-accent rounded-lg">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Key Name</label>
                <input
                  type="text"
                  placeholder="e.g., Production API v3"
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Permissions</label>
                <input
                  type="text"
                  placeholder="e.g., Production API v3"
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Expiration</label>
                <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                  <option>Never</option>
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>1 year</option>
                </select>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowApiKeyModal(false)}
                  className="flex-1 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowApiKeyModal(false)}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Generate Key
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced User Modal */}
      {showUserModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-card rounded-lg border border-border p-6 w-full max-w-lg animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-card-foreground">Add New User</h3>
              <button onClick={() => setShowUserModal(false)} className="p-2 hover:bg-accent rounded-lg">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                <input
                  type="email"
                  placeholder="john.doe@company.com"
                  className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Role</label>
                  <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>User</option>
                    <option>Manager</option>
                    <option>Admin</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Department</label>
                  <select className="w-full px-3 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring">
                    <option>Engineering</option>
                    <option>Product</option>
                    <option>Operations</option>
                    <option>Analytics</option>
                  </select>
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowUserModal(false)}
                  className="flex-1 px-4 py-2 bg-muted text-muted-foreground rounded-lg hover:bg-accent transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowUserModal(false)}
                  className="flex-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
                >
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
