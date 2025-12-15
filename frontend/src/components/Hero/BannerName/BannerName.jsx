import { motion } from "framer-motion";
import React from "react";
import { SlideUp } from "../../../utility/Animation";

const BannerName = () => {
  return (
    <motion.h1
      variants={SlideUp(0.3)}
      initial="hidden"
      animate="visible"
      className="
        relative flex flex-col items-center
        font-extrabold tracking-[0.2em]
        text-[#ff8fcf]
        transition-all duration-700 hover:scale-105
        mt-20 lg:mt-0
        text-6xl sm:text-6xl md:text-7xl lg:text-8xl
      "
      style={{ fontFamily: "var(--font-stack)" }}
    >
      {/* Glow background */}
      <span className="absolute inset-0 blur-[100px] bg-gradient-to-b from-[#ee7ac9]/70 to-[#b84b9e]/40 rounded-full opacity-70"></span>

      {/* English */}
      <span
        className="
          relative
          drop-shadow-[0_0_5px_rgba(0,0,0,0.9)]
          [text-shadow:_0_0_25px_#ff8fcf,0_0_50px_#ff69b4]
          animate-softFloat
        "
      >
        KANZIN
      </span>

      {/* Japanese */}
      <p
        className="
          relative font-bold
          text-[#f08bc9]
          animate-softFloatDelay
          drop-shadow-[0_0_5px_rgba(240,139,201,0.5)]
          hover:drop-shadow-[0_0_8px_rgba(240,139,201,1)]

          text-6xl sm:text-5xl md:text-6xl lg:text-7xl
        "
        style={{ fontFamily: "var(--font-stack)" }}
      >
        カンジン
      </p>
    </motion.h1>
  );
};

export default BannerName;
