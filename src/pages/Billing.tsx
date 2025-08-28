"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/src/components/UI/Badge"
import { invoices, pricingPlans } from "@/src/data/mockData"
import {
  CreditCard,
  Download,
  Calendar,
  DollarSign,
  TrendingUp,
  CheckCircle,
  Star,
  Zap,
  MoreVertical,
} from "lucide-react"

export function BillingPage() {
  const [selectedPlan, setSelectedPlan] = useState("Pro")
  const [showPaymentModal, setShowPaymentModal] = useState(false)

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName)
    setShowPaymentModal(true)
  }

  const handleModalClose = () => {
    setShowPaymentModal(false)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowPaymentModal(false)
  }

  const getInvoiceStatusVariant = (status: string) => {
    switch (status) {
      case "Paid":
        return "success"
      case "Overdue":
        return "destructive"
      case "Pending":
        return "warning"
      default:
        return "default"
    }
  }

  const currentPlan = pricingPlans.find((plan) => plan.name === "Pro") || pricingPlans[1]
  const nextBillingDate = "February 15, 2024"
  const currentUsage = {
    users: 18,
    storage: 67,
    apiCalls: 1.2,
  }

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Billing & Subscription</h1>
            <p className="text-muted-foreground mt-1">Manage your subscription, billing, and payment methods.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" disabled aria-disabled="true">
              <Download className="h-4 w-4 mr-2" />
              Download Invoice
            </Button>
            <Button size="sm" disabled aria-disabled="true">
              <CreditCard className="h-4 w-4 mr-2" />
              Update Payment
            </Button>
          </div>
        </div>

        {/* Current Subscription Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Current Subscription</CardTitle>
              <p className="text-sm text-muted-foreground">Your active plan and usage details</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{currentPlan.name} Plan</h3>
                    <p className="text-sm text-muted-foreground">
                      ${currentPlan.price}/month • Next billing: {nextBillingDate}
                    </p>
                  </div>
                </div>
                <Badge variant="success">Active</Badge>
              </div>

              {/* Usage Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Users</span>
                    <span className="text-sm text-muted-foreground">{currentUsage.users}/25</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(currentUsage.users / 25) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Storage</span>
                    <span className="text-sm text-muted-foreground">{currentUsage.storage}GB/100GB</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${currentUsage.storage}%` }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">API Calls</span>
                    <span className="text-sm text-muted-foreground">{currentUsage.apiCalls}M this month</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Billing Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">Monthly Cost</span>
                </div>
                <span className="text-lg font-bold">${currentPlan.price}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Annual Savings</span>
                </div>
                <span className="text-sm text-green-600">Save 20%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4 text-purple-500" />
                  <span className="text-sm font-medium">Next Billing</span>
                </div>
                <span className="text-sm text-muted-foreground">{nextBillingDate}</span>
              </div>

              <div className="pt-4 border-t">
                <Button className="w-full" disabled aria-disabled="true">
                  Switch to Annual
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Plans */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-semibold">Available Plans</CardTitle>
            <p className="text-sm text-muted-foreground">Choose the plan that best fits your needs</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative p-6 rounded-lg border-2 transition-all ${
                    plan.name === currentPlan.name
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  {plan.name === "Pro" && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="h-3 w-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-3xl font-bold mb-1">
                      ${plan.price}
                      <span className="text-sm font-normal text-muted-foreground">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full"
                    variant={plan.name === currentPlan.name ? "outline" : "default"}
                    onClick={() => handlePlanSelect(plan.name)}
                    disabled={plan.name === currentPlan.name}
                    aria-disabled={plan.name === currentPlan.name ? "true" : "false"}
                  >
                    {plan.name === currentPlan.name ? "Current Plan" : "Select Plan"}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Payment Methods & Invoice History */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Payment Methods */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Payment Methods</CardTitle>
                <p className="text-sm text-muted-foreground">Manage your payment methods</p>
              </div>
              <Button variant="outline" size="sm" disabled aria-disabled="true">
                Add Method
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <div className="font-medium">•••• •••• •••• 4242</div>
                    <div className="text-sm text-muted-foreground">Expires 12/26</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="success">Primary</Badge>
                  <Button variant="ghost" size="sm" disabled aria-disabled="true">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-6 bg-gradient-to-r from-red-600 to-red-400 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">MC</span>
                  </div>
                  <div>
                    <div className="font-medium">•••• •••• •••• 8888</div>
                    <div className="text-sm text-muted-foreground">Expires 08/25</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" disabled aria-disabled="true">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Invoice History */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <CardTitle className="text-lg font-semibold">Recent Invoices</CardTitle>
                <p className="text-sm text-muted-foreground">Your billing history</p>
              </div>
              <Button variant="outline" size="sm" disabled aria-disabled="true">
                View All
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices.slice(0, 5).map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                        <DollarSign className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-medium">{invoice.id}</div>
                        <div className="text-sm text-muted-foreground">{invoice.date}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${invoice.amount.toLocaleString()}</div>
                      <Badge variant={getInvoiceStatusVariant(invoice.status) as any} className="text-xs">
                        {invoice.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Plan Selection Modal */}
        {showPaymentModal && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleModalClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="payment-modal-title"
          >
            <Card className="w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle id="payment-modal-title">Upgrade to {selectedPlan}</CardTitle>
                <p className="text-sm text-muted-foreground">Confirm your plan change and billing details</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaymentSubmit} className="space-y-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{selectedPlan} Plan</span>
                      <span className="font-bold">
                        ${pricingPlans.find((p) => p.name === selectedPlan)?.price}/month
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">Billed monthly • Cancel anytime</p>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Payment Method</label>
                    <select className="w-full p-2 border rounded-md" disabled>
                      <option>•••• •••• •••• 4242 (Primary)</option>
                      <option>•••• •••• •••• 8888</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-input" disabled />
                    <label className="text-sm text-muted-foreground">
                      I agree to the terms of service and privacy policy
                    </label>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button type="submit" className="flex-1" disabled aria-disabled="true">
                      Confirm Upgrade
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handleModalClose}
                      className="flex-1 bg-transparent"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
