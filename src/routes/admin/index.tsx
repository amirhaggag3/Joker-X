import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import AdminDashboard from '@/components/AdminDashboard'
import { useAuthStore } from '@/stores/auth'

function AdminPage() {
  const navigate = useNavigate()
  const { isAdmin, isAuthenticated } = useAuthStore()

  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen bg-black py-12 px-4 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
          <p className="text-gray-400 mb-6">You don't have permission to access this page.</p>
          <button
            onClick={() => navigate({ to: '/' })}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  return <AdminDashboard />
}

export const Route = createFileRoute('/admin/')({
  component: AdminPage,
})
