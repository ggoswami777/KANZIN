import { motion } from "framer-motion";
import React from "react";
import { SlideUp } from "../../../utility/Animation";
const BannerName = () => {
  return (
    <motion.h1
      variants={SlideUp(0.3)}
      initial="hidden"
      animate="visible"
      className="text-8xl font-extrabold flex flex-col items-center tracking-[0.2em]
                 relative text-[#ff8fcf] 
                   drop-shadow-[0_0_20px_rgba(0,0,0,0.8)]
              
                   [text-shadow:_0_0_25px_#ff8fcf,0_0_50px_#ff69b4]
                 transition-all duration-700 hover:scale-105"
      style={{ fontFamily: "var(--font-stack)" }}
    >
      <span className="absolute inset-0 blur-[100px] bg-gradient-to-b from-[#ee7ac9]/70 to-[#b84b9e]/40 rounded-full opacity-70"></span>

      <span
        className="relative drop-shadow-[0_0_25px_rgba(0,0,0,0.9)] 
                   
                   animate-softFloat"
      >
        KANZIN
      </span>
      <p
        className="text-7xl font-bold text-[#f08bc9] relative drop-shadow-[0_0_25px_rgba(240,139,201,0.9)] 
                   hover:drop-shadow-[0_0_40px_rgba(240,139,201,1)] animate-softFloatDelay"
        style={{ fontFamily: "var(--font-stack)" }}
      >
        カンジン
      </p>
    </motion.h1>
  );
};

export default BannerName;
