import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const totalLessons = 50;
  const completed = 40;
  const progress = (completed / totalLessons) * 100;

  return (
    <div
      style={{ fontFamily: "var(--font-tasa)" }}
      className="h-screen w-[18vw] flex flex-col gap-6 bg-[#0b090a] border-r border-[#3d1f27] px-5 py-6 rounded-xl relative"
    >

      <Link
        to="/Kanzin"
        className="text-white/60 flex gap-3 items-center hover:text-[#EE7AC9] transition"
      >
        <i className="ri-home-4-line text-xl"></i>
        <span>Back to Start</span>
      </Link>


      <div>
        <h2 className="text-[#EE7AC9] text-xl font-semibold ">
          Basics
        </h2>
        <h3 className="text-white/40 text-sm mt-1">基礎を学ぼう</h3>
      </div>


      <div className="flex flex-col w-full pt-4 border-t border-white/10 text-lg">
        <NavLink
          to="/Kanzin/basics/introduction"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center gap-3
              ${
                isActive
                  ? "text-[#EE7AC9] shadow-[0_0_40px_rgba(238,122,201,0.25)] font-semibold bg-[#EE7AC9]/10 "
                  : "text-white/70 hover:bg-[#EE7AC9]/10 hover:text-[#EE7AC9]"
              } `
          }
        >
          <i className="ri-book-open-line text-xl"></i>
          <span>Introduction</span>
        </NavLink>

        <NavLink
          to="/Kanzin/basics/content"
          className={({ isActive }) =>
            `p-3 rounded-xl transition flex items-center gap-3
              ${
                isActive
                  ? "text-[#EE7AC9] shadow-[0_0_40px_rgba(238,122,201,0.25)] font-semibold bg-[#EE7AC9]/10 "
                  : "text-white/70 hover:bg-[#EE7AC9]/10 hover:text-[#EE7AC9]"
              }`
          }
        >
          <i className="ri-file-text-line text-xl"></i>
          <span>Content</span>
        </NavLink>
      </div>

    
      <div className="absolute bottom-4 left-0 right-0 px-5 border border-t-white/40 py-8">
        <p className="text-[14px] text-white/60 mb-1">Progress</p>

        <div className="flex justify-between text-xs text-white/40">
          <span>{completed}/{totalLessons}</span>
          <span>{Math.round(progress)}%</span>
        </div>

        <div className="w-full bg-white/10 h-2 rounded-full mt-1 overflow-hidden">
          <div
            className="h-full bg-[#EE7AC9] transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
