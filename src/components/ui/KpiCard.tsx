import { TrendingUp, TrendingDown } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface KpiCardProps {
  title: string
  value: string | number
  delta: number
  trend: "up" | "down"
  format?: "currency" | "percentage" | "number"
}

export function KpiCard({ title, value, delta, trend, format = "number" }: KpiCardProps) {
  const formatValue = (val: string | number) => {
    if (format === "currency") {
      return `$${Number(val).toLocaleString()}`
    }
    if (format === "percentage") {
      return `${val}%`
    }
    return Number(val).toLocaleString()
  }

  const formatDelta = (val: number) => {
    const sign = val > 0 ? "+" : ""
    if (format === "percentage") {
      return `${sign}${val}%`
    }
    return `${sign}${val}%`
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className={cn("flex items-center text-xs", trend === "up" ? "text-green-600" : "text-red-600")}>
          {trend === "up" ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
          {formatDelta(delta)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{formatValue(value)}</div>
      </CardContent>
    </Card>
  )
}
