import { motion } from "framer-motion";
import React from "react";
import { SlideUp } from "../../../utility/Animation";
import { Link } from "react-router-dom";

const StartButton = () => {
  return (
    <Link to="/Kanzin">
      <motion.button
        variants={SlideUp(0.5)}
        initial="hidden"
        animate="visible"
        className="flex cursor-pointer items-center gap-2 px-10 py-4 border border-white/70 rounded-xl text-white text-lg 
                 font-medium bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 
                 transition-all duration-300 shadow-sm drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
      >
        <span className="text-2xl font-semibold">始</span>
        <span>
          Start here <i className="ri-arrow-right-long-line ml-2"></i>
        </span>
      </motion.button>
    </Link>
  );
};

export default StartButton;
