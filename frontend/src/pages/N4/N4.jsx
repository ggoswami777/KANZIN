import React, { useState, useEffect, useContext } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";
import { N4VocabLessons } from "./ContentN4/N4VocabLessons";
import { N4GrammarLessons } from "./ContentN4/N4GrammarLessons";
import { N4KanjiLessons } from "./ContentN4/N4KanjiLessons";
import Menubar from "../../components/menubar/Menubar";
import axios from "axios";
import { ShopContext } from "../../context/ShopContext";

const N4 = () => {
  const totalLessons =
    N4VocabLessons.length +
    N4GrammarLessons.length +
    N4KanjiLessons.length;

  const level = "N4";

  const [completed, setCompleted] = useState([]);
  const [N4Completed, setN4Completed] = useState([]);

  const { backendURL, token } = useContext(ShopContext);
  const location = useLocation();
  const isContentPage = location.pathname.includes("/content");

  // ✅ 1. Fetch ALL completed lessons
  useEffect(() => {
    const fetchCompletedLessons = async () => {
      try {
        const res = await axios.get(
          `${backendURL}/api/lesson/completed`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (res.data.success) {
          setCompleted(res.data.completedLessons);
        }
      } catch (error) {
        console.error("Failed to load completed lessons", error);
      }
    };

    if (token) fetchCompletedLessons();
  }, [token, backendURL]);

  // ✅ 2. Derive N4 completed whenever completed changes
useEffect(() => {
  const filtered = completed.filter(
    (lessonId) => lessonId.includes("N4")
  );
  setN4Completed(filtered);
}, [completed]);


  return (
    <div className="h-screen w-screen bg-gradient-to-b from-black via-[#52292f] to-black flex overflow-hidden">
      
      {/* Sidebar – Desktop only */}
      <div className="hidden md:block">
        <Sidebar
          totalLessonsHaving={totalLessons}
          TotalcompletedLesson={N4Completed.length}
        />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Topbar – Mobile only */}
        <Topbar
          completed={N4Completed.length}
          total={totalLessons}
        />

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet context={{ completed, setCompleted }} />
          {isContentPage && <Menubar />}
        </div>

      </div>
    </div>
  );
};

export default N4;
