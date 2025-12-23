import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Topbar = ({ completed, total }) => {
  const location = useLocation();
  const page = location.pathname.split("/")[2] || "basics";
  const section = location.pathname.split("/")[3] || "introduction";
  const progress = Math.round((completed / total) * 100);

  return (
    <div className="md:hidden sticky top-0 z-50 w-full">
      
      {/* TOP HEADER */}
      <div
        className="
          flex items-center justify-between
          px-4 py-3
          bg-gradient-to-b from-black/80 to-black/60
          backdrop-blur-xl
          border-b border-white/10
        "
      >
        {/* Left */}
        <NavLink
          to="/Kanzin"
          className="flex items-center gap-2 text-white/70"
        >
          <i className="ri-arrow-left-line text-xl"></i>
          <span className="text-sm">Back</span>
        </NavLink>

        {/* Center */}
        <h1 className="text-[#EE7AC9] font-semibold tracking-wide">
          {page.toUpperCase()}
        </h1>

        {/* Right */}
        <div className="flex gap-4 text-xl text-[#EE7AC9]">
            <NavLink to={`/Kanzin/${page}/introduction`}><i className="ri-book-open-line"></i></NavLink>
          
          <NavLink to={`/Kanzin/${page}/content`}><i className="ri-file-list-3-line"></i></NavLink>
        </div>
      </div>

      {/* TABS */}
      <div
        className="
          flex justify-center gap-8
          bg-black/60 backdrop-blur-xl
          border-b border-white/10
          py-2
        "
      >
        <NavLink
          to={`/Kanzin/${page}/introduction`}
          className={({ isActive }) =>
            `text-sm tracking-wide pb-1 ${
              isActive
                ? "text-[#EE7AC9] border-b-2 border-[#EE7AC9]"
                : "text-white/50"
            }`
          }
        >
          Introduction
        </NavLink>

        <NavLink
          to={`/Kanzin/${page}/content`}
          className={({ isActive }) =>
            `text-sm tracking-wide pb-1 ${
              isActive
                ? "text-[#EE7AC9] border-b-2 border-[#EE7AC9]"
                : "text-white/50"
            }`
          }
        >
          Content
        </NavLink>
      </div>

      {/* PROGRESS */}
      <div className="bg-black/60 backdrop-blur-xl px-4 py-3">
        <div className="flex justify-between text-xs text-white/60 mb-1">
          <span>Progress</span>
          <span className="text-[#EE7AC9]">
            {completed}/{total} ({progress}%)
          </span>
        </div>

        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#EE7AC9] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
