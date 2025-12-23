import { motion } from "framer-motion";
import React from "react";
import { SlideUp } from "../../../utility/Animation";

const Title = () => {
  return (
    <motion.h1
      variants={SlideUp(0.3)}
      initial="hidden"
      animate="visible"
      className="
        text-2xl sm:text-xl md:text-2xl lg:text-3xl
        font-semibold flex flex-col gap-2 items-center
        text-white text-center
        drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]
        transition-all duration-700
        hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]
      "
      style={{ fontFamily: "var(--font-tasa)" }}
    >
      Discover Japan through its language.
      <p
        className="
          text-2xl sm:text-xl md:text-2xl lg:text-3xl
          font-bold text-white
          drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]
          hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
          transition-all duration-700
        "
        style={{ fontFamily: "var(--font-tasa)" }}
      >
        言葉を通して日本を感じよう。
      </p>
      <p className="
          text-2xl sm:text-xl md:text-2xl lg:text-3xl
          font-bold text-white
          drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]
          hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]
          transition-all duration-700
        ">
          (EARLY RELEASE)
        </p>
    </motion.h1>
  );
};

export default Title;
