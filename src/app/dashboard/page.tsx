import React from 'react'
import Notification from './notification/page'
import Sidebar from '@/components/DashboardSidebar/Sidebar'

const settings = () => {
  return (
    <>
      <div className="min-h-screen flex">
        <div className="w-1/4 p-4">
          <Sidebar />
        </div>
        <div className="w-3/4 p-4">
          <Notification />
        </div>
      </div>

    </>
  )
}

export default settings