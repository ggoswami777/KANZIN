import React from "react";
import Footer from "../../../components/Footer/Footer";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../../utility/Animation";
import { NavLink } from "react-router-dom";

const IntroductionN5 = () => {
  return (
    <>
      <motion.div
        variants={SlideLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="overflow-x-hidden  "
      >
        <div className="text-xl px-3 text-white tracking-[0.2em] mb-6">
          KANZIN
        </div>

        <div className="flex flex-col items-center text-center gap-10">
          {/* Heading Section */}
          <div className="flex flex-col gap-3">
            <h1
              style={{ fontFamily: "var(--font-stack)" }}
              className="text-6xl text-white font-semibold"
            >
              JLPT <span className="text-[#EE7AC9]">N5</span>
            </h1>

            <h1
              style={{ fontFamily: "var(--font-stack)" }}
              className="text-4xl tracking-[0.1em] text-[#EE7AC9]"
            >
              「日本語能力試験 N5」
            </h1>

            <div className="w-40 h-1 bg-gradient-to-r mt-3 from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div
            style={{ fontFamily: "var(--font-tasa)" }}
            className="flex flex-col shadow-[0_0_40px_rgba(238,122,201,0.25)] gap-5 text-[#d4d4d4] px-10 py-8 rounded-2xl 
                     bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto"
          >
            <h1 className="bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent text-4xl font-semibold drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]">
              What is JLPT N5?
            </h1>
            <p>
              JLPT N5 is the first level of the Japanese Language Proficiency
              Test, designed for beginners who can understand basic Japanese
              used in everyday situations. <br /> At this level, you'll be able
              to read and understand typical expressions and sentences written
              in hiragana, katakana, and basic kanji. You'll also comprehend
              simple conversations about familiar topics.
            </p>
          </div>

          <div
            style={{ fontFamily: "var(--font-tasa)" }}
            className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-3 text-[#d4d4d4] px-10 py-8 rounded-2xl 
                     bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto"
          >
            <h1 className="bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent text-4xl font-semibold drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]">
              Why JLPT N5 Matters
            </h1>
            <p>
              N5 is your gateway to Japanese fluency. It builds the essential
              foundation you need for all future learning—from daily
              conversations to reading manga, watching anime, or traveling to
              Japan. Mastering N5 proves you have a solid grasp of basic
              grammar, can handle simple interactions, and are ready to progress
              to more complex language structures.
            </p>
            
          </div>

          <div
            className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col text-[#d4d4d4] px-10 py-8 rounded-2xl 
                     bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto"
          >
            <h1
              style={{ fontFamily: "var(--font-tasa)" }}
              className="bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent text-4xl font-semibold drop-shadow-[0_0_8px_rgba(0,0,0,0.2)] mb-5"
            >
              What You'll Learn
            </h1>

            <div className="w-full grid grid-cols-2 gap-4">
              
              <div
                className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
              >
                <h1 className="text-[#EE7AC9] text-xl">
                  700+ Vocabulary Words
                </h1>
                <p className="text-sm">
                  Essential words for daily life, basic conversations, and common situations.
                </p>
              </div>

             
              <div
                className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
              >
                <h1 className="text-purple-400 text-xl">
                  100+ Kanji Characters
                </h1>
                <p className="text-sm">
                  The most fundamental kanji used in everyday Japanese.
                </p>
              </div>

              
              <div
                className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
              >
                <h1 className="text-[#EE7AC9] text-xl">
                  Core Grammar Patterns
                </h1>
                <p className="text-sm">
                  です/ます forms, particles, verb conjugations, and basic sentence structures.
                </p>
              </div>

              {/* VOCAB */}
              <div
                className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
              >
                <h1 className="text-purple-400 text-xl">Practical Communication</h1>
                <p className="text-sm">
                  Simple greetings, introductions, shopping, directions, and time expressions.
                </p>
              </div>
            </div>
          </div>

          <div className="h-20 mb-5 flex items-center justify-center">
            <NavLink
              to="/Kanzin/N5/content"
              className="
      px-10 py-4 rounded-xl text-white font-semibold tracking-wide
      bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF]
      shadow-[0_0_20px_rgba(255,0,150,0.4)]
      hover:shadow-[0_0_30px_rgba(255,0,200,0.6)]
      hover:scale-105 transition-all duration-300
      inline-block
    "
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
