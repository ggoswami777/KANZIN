import { motion } from "framer-motion";
import React from "react";
import { SlideUp } from "../../../utility/Animation";

const ExistsCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
      className="flex flex-col gap-5 text-[#d4d4d4] items-center justify-center 
                 mt-20 px-10 py-8 rounded-2xl
                 bg-white/10 backdrop-blur-md border border-white/20 
                 shadow-[0_0_40px_rgba(238,122,201,0.25)]
                 transition-all duration-700 hover:shadow-[0_0_60px_rgba(238,122,201,0.45)]
                 max-w-4xl mx-auto"
    >
      <h1 className="flex gap-3 text-4xl font-semibold items-center text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]">
        <span className="text-[#EE7AC9] text-5xl drop-shadow-[0_0_12px_rgba(238,122,201,0.8)]">
          <i className="ri-trophy-line"></i>
        </span>
        Why KANZIN Exists?
      </h1>

      <p
        style={{ fontFamily: "var(--font-tasa)" }}
        className="text-lg leading-relaxed text-center text-[#f2f2f2]/90 drop-shadow-[0_0_6px_rgba(0,0,0,0.4)]"
      >
        Most Japanese learning apps are designed to keep you busy, not fluent.{" "}
        <span className="text-[#EE7AC9] font-semibold">KANZIN</span> is designed
        for results. We cut through the industry's bloat and focus on what moves
        the needle. Whether your goal is understanding anime or landing that
        Tokyo job—{" "}
        <span className="text-[#EE7AC9] font-semibold">
          we weaponize your study time.
        </span>
      </p>
    </motion.div>
  );
};

export default ExistsCard;
