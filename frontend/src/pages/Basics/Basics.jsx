import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

const Basics = () => {
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-[#52292f] to-black flex">
      <Sidebar />
      <div className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default Basics
