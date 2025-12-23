import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet } from "react-router-dom";
import { N5VocabLessons } from "./ContentN5/ContentN5Data";
import { N5GrammarLessons } from "./ContentN5/N5GrammarLessons";
import { N5Kanji } from "./ContentN5/N5Kanji";

const N5 = () => {
  const totalLessons =
    N5VocabLessons.length + N5GrammarLessons.length+N5Kanji.length;

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

export default N5;
