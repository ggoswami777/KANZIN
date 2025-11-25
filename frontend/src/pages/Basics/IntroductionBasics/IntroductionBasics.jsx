import { motion } from "framer-motion";
import React from "react";
import { SlideLeft, SlideUp } from "../../../utility/Animation";
import { NavLink } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";

const IntroductionBasics = () => {
  return (
    <>
     <motion.div
      variants={SlideLeft(0.3)}
      initial="hidden"
      animate="visible"
      className="overflow-x-hidden  "
    >
      <div className="text-xl px-3 text-white tracking-[0.2em] mb-6">KANZIN</div>

      <div className="flex flex-col items-center text-center gap-10">
        {/* Heading Section */}
        <div className="flex flex-col gap-3">
          <h1
            style={{ fontFamily: "var(--font-stack)" }}
            className="text-6xl text-white font-semibold"
          >
            Japanese <span className="text-[#EE7AC9]">Fundamentals</span>
          </h1>

          <h1
            style={{ fontFamily: "var(--font-stack)" }}
            className="text-4xl tracking-[0.1em] text-[#EE7AC9]"
          >
            「日本語の基礎を学ぼう。」
          </h1>

          <div className="w-40 h-1 bg-gradient-to-r mt-3 from-pink-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* WHY HIRAGANA / KATAKANA */}
        <div
          style={{ fontFamily: "var(--font-tasa)" }}
          className="flex flex-col shadow-[0_0_40px_rgba(238,122,201,0.25)] gap-5 text-[#d4d4d4] px-10 py-8 rounded-2xl 
                     bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto"
        >
          <h1 className="bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent text-4xl font-semibold drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]">
            Why Learn Hiragana & Katakana?
          </h1>
          <p>
            Hiragana and Katakana are the two phonetic writing systems that form
            the foundation of Japanese. Unlike Kanji, these scripts represent
            sounds. Mastering them is essential for reading, writing, and
            progressing in Japanese.
          </p>
        </div>

        {/* EVOLUTION */}
        <div
          style={{ fontFamily: "var(--font-tasa)" }}
          className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-3 text-[#d4d4d4] px-10 py-8 rounded-2xl 
                     bg-white/10 backdrop-blur-md border border-white/20 max-w-4xl mx-auto"
        >
          <h1 className="bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent text-4xl font-semibold drop-shadow-[0_0_8px_rgba(0,0,0,0.2)]">
            The Evolution of Japanese Writing
          </h1>
          <p>
            Japanese writing evolved from Chinese characters (Kanji) brought to
            Japan around the 5th century. The Japanese later developed two
            phonetic scripts:
          </p>
          <p className="flex gap-4">
            <span className="text-[#EE7AC9] font-semibold">ひらがな</span>
            Used for native words, grammar particles, and verb endings.
          </p>
          <p className="flex gap-4">
            <span className="text-purple-400 font-semibold">カタカナ</span>
            Used for foreign words, emphasis, and onomatopoeia.
          </p>
        </div>

        {/* WHAT YOU'LL LEARN */}
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
            {/* 46 HIRAGANA */}
            <div
              className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
            >
              <h1 className="text-[#EE7AC9] text-xl">46 Hiragana Characters</h1>
              <p className="text-sm">
                Master the core Japanese syllabary used in everyday writing.
              </p>
            </div>

            {/* 46 KATAKANA */}
            <div
              className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
            >
              <h1 className="text-purple-400 text-xl">46 Katakana Characters</h1>
              <p className="text-sm">
                Learn the script for loanwords and modern terminology.
              </p>
            </div>

            {/* PRONUNCIATION */}
            <div
              className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
            >
              <h1 className="text-[#EE7AC9] text-xl">Pronunciation & Rhythm</h1>
              <p className="text-sm">
                Understand the natural flow and sound patterns of Japanese.
              </p>
            </div>

            {/* VOCAB */}
            <div
              className="flex shadow-[0_0_40px_rgba(238,122,201,0.25)] flex-col gap-2 text-[#d4d4d4] px-5 py-4 rounded-2xl 
                            bg-black/20 backdrop-blur-xl border border-white/30"
            >
              <h1 className="text-purple-400 text-xl">Basic Vocabulary</h1>
              <p className="text-sm">
                Build your foundation with essential daily-use words.
              </p>
            </div>
          </div>
        </div>

        
        <div className="h-20 mb-5 flex items-center justify-center">
          <NavLink
            to="/Kanzin/basics/content"
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
    <Footer/>
    </>
   
  );
};

export default IntroductionBasics;
