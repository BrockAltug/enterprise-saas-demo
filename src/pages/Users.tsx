"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/src/components/UI/Badge"
import { users } from "@/src/data/mockData"
import { Search, Plus, Filter, Download, MoreVertical, Mail, Shield, UserCheck, UserX, Edit, Eye } from "lucide-react"

export function UsersPage() {
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const handleAddUser = () => {
    setShowAddUserModal(true)
  }

  const handleFilterClick = () => {
    setShowFilterModal(true)
  }

  const handleModalClose = () => {
    setShowAddUserModal(false)
    setShowFilterModal(false)
  }

  const handleUserSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowAddUserModal(false)
  }

  const handleSelectUser = (userId: number) => {
    setSelectedUsers((prev) => (prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]))
  }

  const handleSelectAll = () => {
    setSelectedUsers(selectedUsers.length === users.length ? [] : users.map((u) => u.id))
  }

  const getStatusVariant = (status: string) => {
    switch (status) {
      case "Active":
        return "success"
      case "Invited":
        return "warning"
      case "Disabled":
        return "destructive"
      default:
        return "default"
    }
  }

  const getRoleIcon = (role: string) => {
    switch (role) {
      case "Admin":
        return Shield
      case "Manager":
        return UserCheck
      case "Viewer":
        return Eye
      default:
        return Eye
    }
  }

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">User Management</h1>
            <p className="text-muted-foreground mt-1">Manage users, roles, and permissions across your organization.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" onClick={handleFilterClick} disabled aria-disabled="true">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
            <Button variant="outline" size="sm" disabled aria-disabled="true">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" onClick={handleAddUser}>
              <Plus className="h-4 w-4 mr-2" />
              Add User
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
              <UserCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
              <UserCheck className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter((u) => u.status === "Active").length}</div>
              <p className="text-xs text-green-600">87.5% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Pending Invites</CardTitle>
              <Mail className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter((u) => u.status === "Invited").length}</div>
              <p className="text-xs text-yellow-600">Awaiting response</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Admins</CardTitle>
              <Shield className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter((u) => u.role === "Admin").length}</div>
              <p className="text-xs text-blue-600">Full access</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Actions */}
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex-1">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search users by name, email, or role..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
              {selectedUsers.length > 0 && (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">{selectedUsers.length} selected</span>
                  <Button variant="outline" size="sm" disabled aria-disabled="true">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Invite
                  </Button>
                  <Button variant="outline" size="sm" disabled aria-disabled="true">
                    <UserX className="h-4 w-4 mr-2" />
                    Disable
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>
          <CardContent>
            {/* Users Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">
                      <input
                        type="checkbox"
                        checked={selectedUsers.length === users.length}
                        onChange={handleSelectAll}
                        className="rounded border-input"
                      />
                    </th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">User</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Role</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-muted-foreground">Last Active</th>
                    <th className="text-right py-3 px-4 font-medium text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user) => {
                    const RoleIcon = getRoleIcon(user.role)
                    return (
                      <tr key={user.id} className="border-b hover:bg-muted/50 transition-colors">
                        <td className="py-4 px-2">
                          <input
                            type="checkbox"
                            checked={selectedUsers.includes(user.id)}
                            onChange={() => handleSelectUser(user.id)}
                            className="rounded border-input"
                          />
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="text-sm font-medium text-primary">
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </span>
                            </div>
                            <div>
                              <div className="font-medium text-foreground">{user.name}</div>
                              <div className="text-sm text-muted-foreground">{user.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center space-x-2">
                            <RoleIcon className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm font-medium">{user.role}</span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <Badge variant={getStatusVariant(user.status) as any}>{user.status}</Badge>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-sm text-muted-foreground">
                            {user.status === "Active"
                              ? "2 hours ago"
                              : user.status === "Invited"
                                ? "Never"
                                : "1 week ago"}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center justify-end space-x-2">
                            <Button variant="ghost" size="sm" disabled aria-disabled="true">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" disabled aria-disabled="true">
                              <Mail className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" disabled aria-disabled="true">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {filteredUsers.length === 0 && (
              <div className="text-center py-8">
                <UserX className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">No users found</h3>
                <p className="text-muted-foreground">
                  {searchQuery ? "Try adjusting your search criteria." : "Get started by adding your first user."}
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Add User Modal */}
        {showAddUserModal && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleModalClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="add-user-title"
          >
            <Card className="w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle id="add-user-title">Add New User</CardTitle>
                <p className="text-sm text-muted-foreground">Invite a new user to join your organization.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleUserSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="user-name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input id="user-name" placeholder="Enter full name" disabled aria-disabled="true" />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="user-email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input
                      id="user-email"
                      type="email"
                      placeholder="Enter email address"
                      disabled
                      aria-disabled="true"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="user-role" className="text-sm font-medium">
                      Role
                    </label>
                    <select id="user-role" className="w-full p-2 border rounded-md" disabled>
                      <option>Select a role</option>
                      <option>Admin</option>
                      <option>Manager</option>
                      <option>Viewer</option>
                    </select>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="send-invite" className="rounded border-input" disabled />
                    <label htmlFor="send-invite" className="text-sm text-muted-foreground">
                      Send invitation email immediately
                    </label>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button type="submit" className="flex-1" disabled aria-disabled="true">
                      Add User
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

        {/* Filter Modal */}
        {showFilterModal && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={handleModalClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-title"
          >
            <Card className="w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <CardHeader>
                <CardTitle id="filter-title">Filter Users</CardTitle>
                <p className="text-sm text-muted-foreground">Filter users by role, status, and other criteria.</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Role</label>
                  <select className="w-full p-2 border rounded-md" disabled>
                    <option>All Roles</option>
                    <option>Admin</option>
                    <option>Manager</option>
                    <option>Viewer</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Status</label>
                  <select className="w-full p-2 border rounded-md" disabled>
                    <option>All Statuses</option>
                    <option>Active</option>
                    <option>Invited</option>
                    <option>Disabled</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Last Active</label>
                  <select className="w-full p-2 border rounded-md" disabled>
                    <option>Any time</option>
                    <option>Last 24 hours</option>
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
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
