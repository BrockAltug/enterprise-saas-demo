"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/src/components/UI/Badge"
import { LineArea } from "@/src/components/Charts/LineChart"
import { BarArea } from "@/src/components/Charts/BarChart"
import { PieArea } from "@/src/components/Charts/PieChart"
import { timeseriesData, segmentData, planDistribution } from "@/src/data/mockData"
import {
  Filter,
  Download,
  Calendar,
  TrendingUp,
  Users,
  DollarSign,
  Target,
  MoreVertical,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export function AnalyticsPage() {
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d")

  const handleFilterClick = () => {
    setShowFilterModal(true)
  }

  const handleModalClose = () => {
    setShowFilterModal(false)
  }

  const handleExport = (e: React.FormEvent) => {
    e.preventDefault()
    // Non-functional as per requirements
  }

  const analyticsKpis = [
    {
      title: "Total Sessions",
      value: "847,392",
      change: "+12.5%",
      trend: "up" as const,
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      trend: "up" as const,
      icon: Target,
    },
    {
      title: "Avg. Session Duration",
      value: "4m 32s",
      change: "-0.3%",
      trend: "down" as const,
      icon: TrendingUp,
    },
    {
      title: "Revenue per User",
      value: "$47.82",
      change: "+5.2%",
      trend: "up" as const,
      icon: DollarSign,
    },
  ]

  const topPages = [
    { page: "/dashboard", views: 45672, bounce: "32%", conversion: "4.2%" },
    { page: "/analytics", views: 23891, bounce: "28%", conversion: "3.8%" },
    { page: "/users", views: 18234, bounce: "45%", conversion: "2.1%" },
    { page: "/billing", views: 12456, bounce: "22%", conversion: "8.9%" },
    { page: "/settings", views: 8901, bounce: "38%", conversion: "1.4%" },
  ]

  const trafficSources = [
    { source: "Direct", visitors: 34521, percentage: 42 },
    { source: "Organic Search", visitors: 28934, percentage: 35 },
    { source: "Social Media", visitors: 12456, percentage: 15 },
    { source: "Referral", visitors: 6789, percentage: 8 },
  ]

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted-foreground mt-1">
              Deep insights into your platform performance and user behavior.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleFilterClick} disabled aria-disabled="true">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm" disabled aria-disabled="true">
                <Calendar className="h-4 w-4 mr-2" />
                {selectedTimeRange === "7d" ? "Last 7 days" : "Last 30 days"}
              </Button>
            </div>
            <Button size="sm" onClick={handleExport} disabled aria-disabled="true">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {analyticsKpis.map((kpi, index) => {
            const Icon = kpi.icon
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{kpi.value}</div>
                  <div className="flex items-center text-xs mt-1">
                    {kpi.trend === "up" ? (
                      <ArrowUpRight className="h-3 w-3 text-green-600 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-3 w-3 text-red-600 mr-1" />
                    )}
                    <span className={kpi.trend === "up" ? "text-green-600" : "text-red-600"}>{kpi.change}</span>
                    <span className="text-muted-foreground ml-1">vs last period</span>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Main Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* User Activity Over Time */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">User Activity Trends</CardTitle>
                <p className="text-sm text-muted-foreground">Active users and revenue over time</p>
              </div>
              <Button variant="ghost" size="sm" disabled aria-disabled="true">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <LineArea data={timeseriesData} xKey="hour" yKey="users" />
            </CardContent>
          </Card>
        </div>

        {/* Secondary Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Regional Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Regional Performance</CardTitle>
              <p className="text-sm text-muted-foreground">Users by geographic region</p>
            </CardHeader>
            <CardContent>
              <BarArea data={segmentData} xKey="region" yKey="users" />
            </CardContent>
          </Card>

          {/* Plan Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Plan Distribution</CardTitle>
              <p className="text-sm text-muted-foreground">User distribution across plans</p>
            </CardHeader>
            <CardContent>
              <PieArea data={planDistribution} nameKey="plan" valueKey="users" />
            </CardContent>
          </Card>

          {/* Traffic Sources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Traffic Sources</CardTitle>
              <p className="text-sm text-muted-foreground">Where your users come from</p>
            </CardHeader>
            <CardContent className="space-y-4">
              {trafficSources.map((source, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div
                      className="w-3 h-3 rounded-full bg-primary"
                      style={{
                        backgroundColor: `hsl(var(--chart-${(index % 5) + 1}))`,
                      }}
                    ></div>
                    <span className="text-sm font-medium">{source.source}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{source.visitors.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">{source.percentage}%</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Detailed Analytics Table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Top Pages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Top Pages</CardTitle>
              <p className="text-sm text-muted-foreground">Most visited pages and their performance</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-4 gap-4 text-xs font-medium text-muted-foreground border-b pb-2">
                  <div>Page</div>
                  <div className="text-right">Views</div>
                  <div className="text-right">Bounce Rate</div>
                  <div className="text-right">Conversion</div>
                </div>
                {topPages.map((page, index) => (
                  <div key={index} className="grid grid-cols-4 gap-4 text-sm py-2 hover:bg-muted/50 rounded">
                    <div className="font-mono text-xs">{page.page}</div>
                    <div className="text-right font-medium">{page.views.toLocaleString()}</div>
                    <div className="text-right">{page.bounce}</div>
                    <div className="text-right font-medium text-green-600">{page.conversion}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Performance Metrics</CardTitle>
              <p className="text-sm text-muted-foreground">Key performance indicators</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <div className="text-sm font-medium">Page Load Time</div>
                  <div className="text-xs text-muted-foreground">Average across all pages</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">1.2s</div>
                  <Badge variant="success">Excellent</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <div className="text-sm font-medium">Core Web Vitals</div>
                  <div className="text-xs text-muted-foreground">LCP, FID, CLS scores</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">95/100</div>
                  <Badge variant="success">Good</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <div className="text-sm font-medium">Error Rate</div>
                  <div className="text-xs text-muted-foreground">4xx and 5xx errors</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">0.03%</div>
                  <Badge variant="success">Low</Badge>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div>
                  <div className="text-sm font-medium">API Response Time</div>
                  <div className="text-xs text-muted-foreground">Average API latency</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">89ms</div>
                  <Badge variant="success">Fast</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filter Modal */}
        {showFilterModal && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleModalClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-modal-title"
          >
            <Card className="w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle id="filter-modal-title">Filter Analytics</CardTitle>
                <p className="text-sm text-muted-foreground">Customize your analytics view with filters</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Date Range</label>
                  <select className="w-full p-2 border rounded-md" disabled>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">User Segment</label>
                  <select className="w-full p-2 border rounded-md" disabled>
                    <option>All Users</option>
                    <option>New Users</option>
                    <option>Returning Users</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Region</label>
                  <select className="w-full p-2 border rounded-md" disabled>
                    <option>All Regions</option>
                    <option>North America</option>
                    <option>Europe</option>
                    <option>Asia Pacific</option>
                  </select>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button className="flex-1" disabled aria-disabled="true">
                    Apply Filters
                  </Button>
                  <Button variant="outline" onClick={handleModalClose} className="flex-1 bg-transparent">
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
