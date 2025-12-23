import React from "react";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/Animation";
import { NavLink } from "react-router-dom";

const IntroductionN5 = () => {
  return (
    <>
      <motion.div
        variants={SlideLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="overflow-x-hidden px-3 sm:px-6"
      >
        {/* Brand */}
        <div className="text-lg sm:text-xl text-white tracking-[0.2em] mb-6">
          KANZIN
        </div>

        <div className="flex flex-col items-center text-center gap-10">
          {/* Heading */}
          <div className="flex flex-col gap-3">
            <h1
              style={{ fontFamily: "var(--font-stack)" }}
              className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold"
            >
              JLPT <span className="text-[#EE7AC9]">N5</span>
            </h1>

            <h1
              style={{ fontFamily: "var(--font-stack)" }}
              className="text-2xl sm:text-3xl lg:text-4xl tracking-[0.1em] text-[#EE7AC9]"
            >
              「日本語能力試験 N5」
            </h1>

            <div className="w-32 sm:w-40 h-1 bg-gradient-to-r mt-3 from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* What is JLPT */}
          <div
            style={{ fontFamily: "var(--font-tasa)" }}
            className="flex flex-col gap-5 text-[#d4d4d4] px-6 sm:px-10 py-6 sm:py-8 rounded-2xl 
              bg-white/10 backdrop-blur-md border border-white/20 
              max-w-4xl mx-auto shadow-[0_0_40px_rgba(238,122,201,0.25)]"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent">
              What is JLPT N5?
            </h1>
            <p className="text-sm sm:text-base">
              JLPT N5 is the first level of the Japanese Language Proficiency
              Test, designed for beginners who can understand basic Japanese
              used in everyday situations. At this level, you'll be able
              to read and understand typical expressions written in hiragana,
              katakana, and basic kanji, and follow simple conversations.
            </p>
          </div>

          {/* Why N5 */}
          <div
            style={{ fontFamily: "var(--font-tasa)" }}
            className="flex flex-col gap-3 text-[#d4d4d4] px-6 sm:px-10 py-6 sm:py-8 rounded-2xl 
              bg-white/10 backdrop-blur-md border border-white/20 
              max-w-4xl mx-auto shadow-[0_0_40px_rgba(238,122,201,0.25)]"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent">
              Why JLPT N5 Matters
            </h1>
            <p className="text-sm sm:text-base">
              N5 is your gateway to Japanese fluency. It builds the essential
              foundation you need for all future learning—from daily
              conversations to reading manga, watching anime, or traveling to
              Japan.
            </p>
          </div>

          {/* What you'll learn */}
          <div
            className="flex flex-col text-[#d4d4d4] px-6 sm:px-10 py-6 sm:py-8 rounded-2xl 
              bg-white/10 backdrop-blur-md border border-white/20 
              max-w-4xl mx-auto shadow-[0_0_40px_rgba(238,122,201,0.25)]"
          >
            <h1
              style={{ fontFamily: "var(--font-tasa)" }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent mb-6"
            >
              What You'll Learn
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["700+ Vocabulary Words", "Essential words for daily life and common situations.", "text-[#EE7AC9]"],
                ["100+ Kanji Characters", "The most fundamental kanji used in everyday Japanese.", "text-purple-400"],
                ["Core Grammar Patterns", "です/ます forms, particles, verb conjugations.", "text-[#EE7AC9]"],
                ["Practical Communication", "Greetings, shopping, directions, time expressions.", "text-purple-400"]
              ].map(([title, desc, color], i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 px-5 py-4 rounded-2xl 
                    bg-black/20 backdrop-blur-xl border border-white/30 
                    shadow-[0_0_40px_rgba(238,122,201,0.25)]"
                >
                  <h1 className={`${color} text-lg sm:text-xl`}>{title}</h1>
                  <p className="text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="h-20 flex items-center justify-center mb-8">
            <NavLink
              to="/Kanzin/N5/content"
              className="px-8 sm:px-10 py-3 sm:py-4 rounded-xl text-white font-semibold tracking-wide
                bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF]
                shadow-[0_0_20px_rgba(255,0,150,0.4)]
                hover:shadow-[0_0_30px_rgba(255,0,200,0.6)]
                hover:scale-105 transition-all duration-300"
            >
              Start Learning →
            </NavLink>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
};

export default IntroductionN5;
