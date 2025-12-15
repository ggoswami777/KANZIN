import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { N5VocabLessons } from './ContentN5/ContentN5Data'
import { N5GrammarLessons } from './ContentN5/N5GrammarLessons'

const N5 = () => {
  const totalLessons = N5VocabLessons.length + N5GrammarLessons.length;
  
    const [completed, setCompleted] = useState([]); 
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-[#52292f] to-black flex overflow-x-hidden">

      <Sidebar 
      totalLessonsHaving={totalLessons} 
        TotalcompletedLesson={completed.length}
      />

      <div className="flex-1 overflow-y-auto overflow-x-hidden">


        <Outlet context={{ completed, setCompleted }}  />
      </div>
    </div>
  )
}

export default N5
