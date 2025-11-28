import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


const N5 = () => {

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-[#52292f] to-black flex overflow-x-hidden">

      <Sidebar 
      
      />

      <div className="flex-1 overflow-y-auto overflow-x-hidden">


        <Outlet  />
      </div>
    </div>
  )
}

export default N5
