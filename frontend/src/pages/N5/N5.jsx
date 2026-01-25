import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";
import { N5VocabLessons } from "./ContentN5/ContentN5Data";
import { N5GrammarLessons } from "./ContentN5/N5GrammarLessons";
import { N5Kanji } from "./ContentN5/N5Kanji";
import Menubar from "../../components/menubar/Menubar";
import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
const N5 = () => {
  const totalLessons =
    N5VocabLessons.length + N5GrammarLessons.length + N5Kanji.length;
  const { backendURL, token } = useContext(ShopContext);
  const [completed, setCompleted] = useState([]);

  const location = useLocation();
  const isContentPage = location.pathname.includes("/content");
  useEffect(() => {
    const fetchCompletedLessons = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/lesson/completed`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data.success) {
          setCompleted(res.data.completedLessons);
        }
      } catch (error) {
        console.error("Failed to load completed lessons", error);
      }
    };

    if (token) fetchCompletedLessons();
  }, [token]);

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
        <Topbar completed={completed.length} total={totalLessons} />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet context={{ completed, setCompleted }} />
          {isContentPage && <Menubar />}
        </div>
      </div>
    </div>
  );
};

export default N5;
