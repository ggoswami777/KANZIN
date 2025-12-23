import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import { N4VocabLessons } from "./ContentN4/N4VocabLessons";
import { N4GrammarLessons } from "./ContentN4/N4GrammarLessons";
import { N4KanjiLessons } from "./ContentN4/N4KanjiLessons";


const N4 = () => {
  const totalLessons =
    N4VocabLessons.length+ N4GrammarLessons.length+N4KanjiLessons.length

  const [completed, setCompleted] = useState([]);

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-[#52292f] to-black flex overflow-hidden">
      
      {/* Sidebar – Desktop only */}
      <div className="hidden md:block">
        <Sidebar
          totalLessonsHaving={totalLessons}
          TotalcompletedLesson={completed.length}
        />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Topbar – Mobile only */}
        <Topbar
          completed={completed.length}
          total={totalLessons}
        />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet context={{ completed, setCompleted }} />
        </div>

      </div>
    </div>
  );
};

export default N4
