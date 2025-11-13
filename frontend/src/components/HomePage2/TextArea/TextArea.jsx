import { motion } from "framer-motion";
import React from "react";
import { SlideLeft, SlideRight } from "../../../utility/Animation";

const TextArea = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 px-6">
      

      <motion.div
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers when 30% in view
        className="flex flex-col items-center justify-center mt-5 font-semibold text-center"
      >
        <h1
          style={{ fontFamily: "var(--font-stack)" }}
          className="text-6xl text-white"
        >
          KANZIN isn't just a platform—
        </h1>
        <h1
          style={{ fontFamily: "var(--font-stack)" }}
          className="text-6xl text-[#EE7AC9]"
        >
          it's your foundation
        </h1>
      </motion.div>

      <motion.div
        variants={SlideLeft(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[65ch] text-center leading-relaxed"
      >
        <p
          style={{ fontFamily: "var(--font-tasa)" }}
          className="text-[#d1d1d1] text-lg"
        >
          KANZIN (<span className="text-[#EE7AC9]">カンジン</span>): Foundation.
          The solid ground beneath your Japanese journey. Transform your
          fascination into fluency, your study sessions into breakthroughs.
          Whether your goal is acing the JLPT, understanding anime without
          subtitles, or speaking with confidence—start here.
        </p>
      </motion.div>

      <motion.div
        variants={SlideRight(0.4)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-[#EE7AC9] text-lg font-semibold tracking-wider"
      >
        Strategic. Effective. Essential.
      </motion.div>
    </div>
  );
};

export default TextArea;
