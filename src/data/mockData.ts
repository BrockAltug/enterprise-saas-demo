// Static data for the Enterprise SaaS Platform demo

export const kpis = {
  mrr: { value: 482900, delta: 12.5, trend: "up" as const },
  activeUsers: { value: 10287, delta: 8.2, trend: "up" as const },
  churn: { value: 2.4, delta: -0.3, trend: "down" as const },
  uptime: { value: 99.98, delta: 0.02, trend: "up" as const },
}

export const timeseriesData = Array.from({ length: 24 }, (_, i) => ({
  hour: i,
  users: Math.floor(Math.random() * 1000) + 500,
  revenue: Math.floor(Math.random() * 5000) + 2000,
}))

export const segmentData = [
  { region: "North America", users: 4521, percentage: 44 },
  { region: "Europe", users: 3102, percentage: 30 },
  { region: "Asia Pacific", users: 2156, percentage: 21 },
  { region: "Latin America", users: 508, percentage: 5 },
]

export const planDistribution = [
  { plan: "Starter", users: 6172, percentage: 60 },
  { plan: "Pro", users: 3086, percentage: 30 },
  { plan: "Enterprise", users: 1029, percentage: 10 },
]

export const users = [
  { id: 1, name: "Sarah Chen", email: "sarah.chen@acme.com", role: "Admin", status: "Active" },
  { id: 2, name: "Michael Rodriguez", email: "m.rodriguez@techcorp.com", role: "Manager", status: "Active" },
  { id: 3, name: "Emily Johnson", email: "emily.j@startup.io", role: "Viewer", status: "Invited" },
  { id: 4, name: "David Kim", email: "david.kim@enterprise.com", role: "Admin", status: "Active" },
  { id: 5, name: "Lisa Wang", email: "lisa.wang@company.com", role: "Manager", status: "Disabled" },
  { id: 6, name: "James Wilson", email: "j.wilson@business.com", role: "Viewer", status: "Active" },
  { id: 7, name: "Maria Garcia", email: "maria.g@solutions.com", role: "Manager", status: "Active" },
  { id: 8, name: "Robert Taylor", email: "r.taylor@corp.com", role: "Viewer", status: "Invited" },
]

export const invoices = [
  { id: "INV-001", date: "2024-01-15", amount: 2499, status: "Paid" },
  { id: "INV-002", date: "2024-01-01", amount: 4999, status: "Paid" },
  { id: "INV-003", date: "2023-12-15", amount: 1299, status: "Paid" },
  { id: "INV-004", date: "2023-12-01", amount: 9999, status: "Overdue" },
  { id: "INV-005", date: "2023-11-15", amount: 2499, status: "Paid" },
  { id: "INV-006", date: "2023-11-01", amount: 4999, status: "Paid" },
  { id: "INV-007", date: "2023-10-15", amount: 1299, status: "Paid" },
]

export const recentActivity = [
  { id: 1, action: "User login", user: "sarah.chen@acme.com", timestamp: "2 minutes ago" },
  { id: 2, action: "Invoice generated", details: "INV-008 for $2,499", timestamp: "5 minutes ago" },
  { id: 3, action: "New user invited", user: "john.doe@newcorp.com", timestamp: "12 minutes ago" },
  { id: 4, action: "Payment received", details: "$4,999 from TechCorp", timestamp: "18 minutes ago" },
  { id: 5, action: "User role updated", user: "emily.j@startup.io", timestamp: "25 minutes ago" },
  { id: 6, action: "API key generated", details: "New production key created", timestamp: "32 minutes ago" },
]

export const pricingPlans = [
  {
    name: "Starter",
    price: 29,
    features: ["Up to 5 users", "Basic analytics", "Email support", "10GB storage"],
  },
  {
    name: "Pro",
    price: 99,
    features: ["Up to 25 users", "Advanced analytics", "Priority support", "100GB storage", "API access"],
  },
  {
    name: "Enterprise",
    price: 299,
    features: [
      "Unlimited users",
      "Custom analytics",
      "24/7 phone support",
      "1TB storage",
      "Full API access",
      "SSO integration",
    ],
  },
]
