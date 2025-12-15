import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlideLeft, SlideRight } from "../../utility/Animation";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      layout
      className="
        mx-auto w-[90%]
        px-6 py-4
        rounded-3xl
        backdrop-blur bg-white/5
        border border-white/10 shadow-lg
        overflow-hidden
      "
    >
      <div className="flex items-center justify-between">
        <motion.h1
          variants={SlideRight(0.3)}
          initial="hidden"
          animate="visible"
          className="text-2xl sm:text-3xl font-bold tracking-[0.25rem] text-white"
          style={{ fontFamily: "var(--font-stack)" }}
        >
          KANZIN
        </motion.h1>

        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          animate="visible"
          className="hidden md:flex gap-6"
        >
          <button className="text-[#f5e1c8] hover:text-[#f35faf] transition">
            Login
          </button>
          <button className="bg-[#f35faf]/80 hover:bg-[#d64694] text-white px-6 py-2 rounded-full transition">
            Register
          </button>
        </motion.div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          <i className={open ? "ri-close-line" : "ri-menu-3-line"} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden mt-6 flex flex-col gap-4"
          >
            <button className="text-white/80 hover:text-[#f35faf] transition">
              Login
            </button>
            <button className="bg-[#f35faf]/80 hover:bg-[#d64694] text-white py-2 rounded-full transition">
              Register
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
