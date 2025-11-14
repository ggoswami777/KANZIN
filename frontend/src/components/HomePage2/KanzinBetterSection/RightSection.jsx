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
      className="flex flex-col gap-5 " style={{ fontFamily: "var(--font-tasa)" }}
    >
      {KanzinBenefitsDetails.map((detail) => {
        return (
          <div
            className="flex flex-col gap-1 text-[#d4d4d4]  justify-center 
                  px-5 py-3 rounded-2xl
                 bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-[0_0_40px_rgba(238,122,201,0.25)]
                 transition-all duration-700 hover:shadow-[0_0_60px_rgba(238,122,201,0.45)]
                 max-w-sm mx-auto"
          >
            <h1
              style={{ fontFamily: "var(--font-tasa)" }}
              className="flex gap-3 text-xl font-semibold items-center text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]"
            >
              <span className=" text-5xl drop-shadow-[0_0_12px_rgba(238,122,201,0.8)]">
                <i className={detail.icon}></i>
              </span>
              {detail.title}
            </h1>
            <p>{detail.desc}</p>
          </div>
        );
      })}
    </motion.div>
  );
};

export default RightSection;
