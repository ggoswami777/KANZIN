import { motion } from "framer-motion";
import React from "react";
import { SlideLeft } from "../../../utility/Animation";
import { NavLink } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";

const IntroductionBasics = () => {
  return (
    <>
      <motion.div
        variants={SlideLeft(0.3)}
        initial="hidden"
        animate="visible"
        className="overflow-x-hidden px-4 sm:px-6"
      >
        {/* Logo */}
        <div className="text-lg sm:text-xl px-1 text-white tracking-[0.2em] mb-6">
          KANZIN
        </div>

        <div className="flex flex-col items-center text-center gap-10">
          
          {/* Heading Section */}
          <div className="flex flex-col gap-3">
            <h1
              style={{ fontFamily: "var(--font-stack)" }}
              className="text-3xl sm:text-5xl lg:text-6xl text-white font-semibold"
            >
              Japanese <span className="text-[#EE7AC9]">Fundamentals</span>
            </h1>

            <h1
              style={{ fontFamily: "var(--font-stack)" }}
              className="text-xl sm:text-3xl lg:text-4xl tracking-[0.1em] text-[#EE7AC9]"
            >
              「日本語の基礎を学ぼう。」
            </h1>

            <div className="w-32 sm:w-40 h-1 bg-gradient-to-r mt-3 from-pink-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* WHY */}
          <div
            style={{ fontFamily: "var(--font-tasa)" }}
            className="flex flex-col gap-5 text-[#d4d4d4]
              px-5 sm:px-10 py-6 sm:py-8
              rounded-2xl shadow-[0_0_40px_rgba(238,122,201,0.25)]
              bg-white/10 backdrop-blur-md border border-white/20
              max-w-4xl w-full"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent">
              Why Learn Hiragana & Katakana?
            </h1>
            <p className="text-sm sm:text-base">
              Hiragana and Katakana are the two phonetic writing systems that form
              the foundation of Japanese. Unlike Kanji, these scripts represent
              sounds.
            </p>
          </div>

          {/* EVOLUTION */}
          <div
            style={{ fontFamily: "var(--font-tasa)" }}
            className="flex flex-col gap-3 text-[#d4d4d4]
              px-5 sm:px-10 py-6 sm:py-8
              rounded-2xl shadow-[0_0_40px_rgba(238,122,201,0.25)]
              bg-white/10 backdrop-blur-md border border-white/20
              max-w-4xl w-full"
          >
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent">
              The Evolution of Japanese Writing
            </h1>
            <p className="text-sm sm:text-base">
              Japanese writing evolved from Chinese characters (Kanji) brought to
              Japan around the 5th century.
            </p>
            <p className="flex gap-2 sm:gap-4 text-sm sm:text-base">
              <span className="text-[#EE7AC9] font-semibold">ひらがな</span>
              Used for native words and grammar.
            </p>
            <p className="flex gap-2 sm:gap-4 text-sm sm:text-base">
              <span className="text-purple-400 font-semibold">カタカナ</span>
              Used for foreign words.
            </p>
          </div>

          {/* WHAT YOU'LL LEARN */}
          <div
            className="flex flex-col text-[#d4d4d4]
              px-5 sm:px-10 py-6 sm:py-8
              rounded-2xl shadow-[0_0_40px_rgba(238,122,201,0.25)]
              bg-white/10 backdrop-blur-md border border-white/20
              max-w-4xl w-full"
          >
            <h1
              style={{ fontFamily: "var(--font-tasa)" }}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-5
              bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent"
            >
              What You'll Learn
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["46 Hiragana Characters", "text-[#EE7AC9]"],
                ["46 Katakana Characters", "text-purple-400"],
                ["Pronunciation & Rhythm", "text-[#EE7AC9]"],
                ["Basic Vocabulary", "text-purple-400"],
              ].map(([title, color], i) => (
                <div
                  key={i}
                  className="flex flex-col gap-2 px-5 py-4 rounded-2xl
                  bg-black/20 backdrop-blur-xl border border-white/30
                  shadow-[0_0_40px_rgba(238,122,201,0.25)]"
                >
                  <h1 className={`text-lg ${color}`}>{title}</h1>
                  <p className="text-sm">
                    Build strong foundations step by step.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="h-20 mb-5 flex items-center justify-center">
            <NavLink
              to="/Kanzin/basics/content"
              className="
                px-8 sm:px-10 py-3 sm:py-4
                rounded-xl text-white font-semibold tracking-wide
                bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF]
                shadow-[0_0_20px_rgba(255,0,150,0.4)]
                hover:shadow-[0_0_30px_rgba(255,0,200,0.6)]
                hover:scale-105 transition-all duration-300
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

export default IntroductionBasics;
