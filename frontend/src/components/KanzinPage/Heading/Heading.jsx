import { motion } from "framer-motion";
import React from "react";
import { SlideUp } from "../../../utility/Animation";

const Heading = () => {
  return (
    <>
      <motion.div variants={SlideUp(0.3)}
            initial="hidden"
            animate="visible"  className="text-xl text-white tracking-[0.2em] ">KANZIN</motion.div>
      <motion.div variants={SlideUp(0.3)}
            initial="hidden"
            animate="visible" className="w-full flex flex-col items-center gap-7 text-center justify-center pt-10 ">
        <h1
          style={{ fontFamily: "var(--font-stack)" }}
          className="text-6xl text-white font-semibold"
        >
          Begin Your{" "}
          <span
            style={{ fontFamily: "var(--font-stack)" }}
            className="text-6xl text-[#EE7AC9]"
          >
            Japanese Journey
          </span>
        </h1>
        <div className="flex flex-col gap-3"> 
             <h1
          style={{ fontFamily: "var(--font-stack)" }}
          className="text-4xl tracking-[0.1em] text-white"
        >
          日本語の旅を始めよう
        </h1>
        <p style={{ fontFamily: "var(--font-tasa)" }} className="text-white/60 text-center ">
            Choose where you want to start.<br/> Whether you're completely new or ready for JLPT prep, <br/>KANZIN guides you step-by-step.
        </p>
        </div>
       
      </motion.div>
    </>
  );
};

export default Heading;
