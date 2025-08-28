import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { KpiCard } from "@/src/components/UI/KpiCard"
import { LineArea } from "@/src/components/Charts/LineChart"
import { BarArea } from "@/src/components/Charts/BarChart"
import { Badge } from "@/src/components/UI/Badge"
import { kpis, timeseriesData, recentActivity, segmentData } from "@/src/data/mockData"
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  AlertCircle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  MoreHorizontal,
  RefreshCw,
} from "lucide-react"

export function DashboardPage() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
            <p className="text-muted-foreground mt-1">
              Welcome back! Here's what's happening with your business today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" disabled aria-disabled="true">
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
            <Button size="sm" disabled aria-disabled="true">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Monthly Recurring Revenue"
            value={kpis.mrr.value}
            delta={kpis.mrr.delta}
            trend={kpis.mrr.trend}
            format="currency"
          />
          <KpiCard
            title="Active Users"
            value={kpis.activeUsers.value}
            delta={kpis.activeUsers.delta}
            trend={kpis.activeUsers.trend}
          />
          <KpiCard
            title="Churn Rate"
            value={kpis.churn.value}
            delta={kpis.churn.delta}
            trend={kpis.churn.trend}
            format="percentage"
          />
          <KpiCard
            title="Uptime"
            value={kpis.uptime.value}
            delta={kpis.uptime.delta}
            trend={kpis.uptime.trend}
            format="percentage"
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Activity Chart - Takes 2 columns on large screens */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">User Activity</CardTitle>
                <p className="text-sm text-muted-foreground">Active users over the last 24 hours</p>
              </div>
              <Button variant="ghost" size="sm" disabled aria-disabled="true">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <LineArea data={timeseriesData} xKey="hour" yKey="users" />
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">New Signups</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">127</div>
                  <div className="text-xs text-green-600">+12% today</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Revenue Today</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">$8,429</div>
                  <div className="text-xs text-green-600">+8% vs yesterday</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Activity className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">API Calls</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">2.4M</div>
                  <div className="text-xs text-muted-foreground">Last hour</div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Success Rate</span>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">99.7%</div>
                  <div className="text-xs text-green-600">Excellent</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Regional Performance */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Regional Performance</CardTitle>
                <p className="text-sm text-muted-foreground">User distribution by region</p>
              </div>
              <Button variant="ghost" size="sm" disabled aria-disabled="true">
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <BarArea data={segmentData} xKey="region" yKey="users" />
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                <p className="text-sm text-muted-foreground">Latest system events</p>
              </div>
              <Button variant="ghost" size="sm" disabled aria-disabled="true">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div
                    key={activity.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      {activity.user && <p className="text-sm text-muted-foreground">{activity.user}</p>}
                      {activity.details && <p className="text-sm text-muted-foreground">{activity.details}</p>}
                      <div className="flex items-center mt-1 space-x-2">
                        <Clock className="h-3 w-3 text-muted-foreground" />
                        <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">System Status</CardTitle>
            <p className="text-sm text-muted-foreground">Current operational status of all services</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">API Gateway</span>
                </div>
                <Badge variant="success">Operational</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Database</span>
                </div>
                <Badge variant="success">Operational</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <span className="text-sm font-medium">CDN</span>
                </div>
                <Badge variant="warning">Degraded</Badge>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg border">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Auth Service</span>
                </div>
                <Badge variant="success">Operational</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
