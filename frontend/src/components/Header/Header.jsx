import React from "react";
import { SlideLeft, SlideRight } from "../../utility/Animation";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <nav className="mx-auto w-[90%] flex justify-between items-center px-9 py-4 rounded-full backdrop-blur-[3px] bg-white/5 border border-white/10 shadow-lg">
      <motion.h1
        variants={SlideRight(0.3)}
        initial="hidden"
        animate="visible"
        className="text-3xl font-bold tracking-[0.25rem] text-white"
        style={{ fontFamily: "var(--font-stack)" }}
      >
        KANZIN
      </motion.h1>
      <motion.div
        variants={SlideLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="flex gap-5"
      >
        <button
          onClick={() => {
            alert("Feature coming soon");
          }}
          className="text-[#f5e1c8]  hover:text-[#f35faf] transition-all duration-300"
        >
          Login
        </button>
        <button
          onClick={() => {
            alert("Feature coming soon");
          }}
          className="bg-[#f35faf]/80 hover:bg-[#d64694] text-white  px-6 py-2 rounded-full shadow-md transition-all duration-300"
        >
          Register
        </button>
      </motion.div>
    </nav>
  );
};

export default Header;
