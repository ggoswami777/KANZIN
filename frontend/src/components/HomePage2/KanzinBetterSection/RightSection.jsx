import React from "react";
import { KanzinBenefitsDetails } from "./KanzinBenifitsDetails";
import { SlideLeft } from "../../../utility/Animation";
import { motion } from "framer-motion";

const RightSection = () => {
  return (
    <motion.div
      variants={SlideLeft(0.3)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      style={{ fontFamily: "var(--font-tasa)" }}
      className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        gap-5
      "
    >
      {KanzinBenefitsDetails.map((detail) => (
        <div
          key={detail.title}
          className="
            flex flex-col gap-2
            text-[#d4d4d4]
            px-4 py-5
            rounded-2xl
            bg-white/10 backdrop-blur-md
            border border-white/20
            shadow-[0_0_25px_rgba(238,122,201,0.2)]
            hover:shadow-[0_0_45px_rgba(238,122,201,0.35)]
            transition-all duration-500
          "
        >
          <h1 className="
            flex items-center gap-3
            text-lg sm:text-xl
            font-semibold text-white
            drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]
          ">
            <span className="
              text-3xl sm:text-4xl
              text-[#EE7AC9]
              drop-shadow-[0_0_12px_rgba(238,122,201,0.8)]
            ">
              <i className={detail.icon}></i>
            </span>
            {detail.title}
          </h1>

          <p className="text-sm sm:text-base leading-relaxed">
            {detail.desc}
          </p>
        </div>
      ))}
    </motion.div>
  );
};

export default RightSection;
