import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, GraduationCap, Languages, ChevronUp } from "lucide-react";

const Menubar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <div className="md:hidden fixed bottom-20 right-4 -translate-x-1/2 z-50">
      {/* Anchor */}
      <div className="relative flex flex-col items-center">
        {/* Expanded Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="
                 absolute bottom-full mb-3
                flex flex-col items-center justify-center
                gap-3 px-4 py-3
                rounded-2xl
                bg-black/70 backdrop-blur-xl
                border border-white/10
                shadow-[0_0_25px_rgba(238,122,201,0.4)]
              "
            >
              <button
                onClick={() => scrollTo("vocabulary")}
                className="flex flex-col items-center text-xs text-white/80 hover:text-[#EE7AC9]"
              >
                <BookOpen size={20} />
                Vocab
              </button>

              <button
                onClick={() => scrollTo("grammar")}
                className="flex flex-col items-center text-xs text-white/80 hover:text-[#EE7AC9]"
              >
                <GraduationCap size={20} />
                Grammar
              </button>

              <button
                onClick={() => scrollTo("kanji")}
                className="flex flex-col items-center text-xs text-white/80 hover:text-[#EE7AC9]"
              >
                <Languages size={20} />
                Kanji
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          onClick={() => setOpen(!open)}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="
            w-14 h-14 rounded-full
            flex items-center justify-center
            bg-gradient-to-br from-[#FF2BC2] to-[#7E5CFF]
            shadow-[0_0_20px_rgba(238,122,201,0.6)]
            text-white
          "
        >
          <ChevronUp size={26} />
        </motion.button>
      </div>
    </div>
  );
};

export default Menubar;
