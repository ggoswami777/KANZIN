import { motion } from "framer-motion";
import React from "react";
import { SlideUp } from "../../../utility/Animation";

const Heading = () => {
  return (
    <>
      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        animate="visible"
        className="
          text-sm sm:text-base
          p-2
          text-white
          tracking-[0.3em]
          text-center
        "
      >
        KANZIN
      </motion.div>

      <motion.div
        variants={SlideUp(0.3)}
        initial="hidden"
        animate="visible"
        className="
          w-full
          flex flex-col
          items-center
          justify-center
          gap-6 sm:gap-8
          text-center
          pt-8 sm:pt-12
          px-4
        "
      >
        <h1
          style={{ fontFamily: "var(--font-stack)" }}
          className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl
            font-semibold
            text-white
            leading-tight
          "
        >
          Begin Your{" "}
          <span className="text-[#EE7AC9]">Japanese Journey</span>
        </h1>

        <div className="flex flex-col gap-3 sm:gap-4">
          <h2
            style={{ fontFamily: "var(--font-stack)" }}
            className="
              text-xl sm:text-2xl md:text-3xl
              tracking-[0.15em]
              text-white
            "
          >
            日本語の旅を始めよう
          </h2>

          <p
            style={{ fontFamily: "var(--font-tasa)" }}
            className="
              text-sm sm:text-base
              text-white/70
              max-w-xl
              mx-auto
              leading-relaxed
            "
          >
            Choose where you want to start.
            <br className="hidden sm:block" />
            Whether you're completely new or ready for JLPT prep,
            <br className="hidden sm:block" />
            KANZIN guides you step-by-step.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Heading;
