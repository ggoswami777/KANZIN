import React from "react";
import { JapaneseCourseCards } from "./SyllabusCardsData";

const SyllabusCards = () => {
  return (
    <div className="mt-20 mb-5 flex flex-col gap-8">
    <h1 style={{ fontFamily: "var(--font-stack)" }}
          className="text-6xl text-white">EXPLORE WITH US</h1>
    <div className="flex flex-row flex-wrap justify-center gap-10  px-5">
      {JapaneseCourseCards.map((data) => {
        return (
          <div
            key={data.id}
            className="
              group
              relative
              flex flex-col gap-4 
              text-[#e5e5e5] 
              px-6 py-3
              rounded-2xl 
              max-w-xs w-full
              bg-black/20 
              backdrop-blur-md
              border border-white/10 
              shadow-[0_0_40px_rgba(238,122,201,0.15)]
              hover:shadow-[0_0_70px_rgba(238,122,201,0.55)]
              transition-all duration-500
              hover:-translate-y-2
              overflow-hidden
            "
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* TOP CONTENT */}
              <div className="flex flex-col gap-4 flex-1">
                <div className="text-pink-400 text-5xl drop-shadow-[0_0_20px_rgba(238,122,201,0.8)] flex justify-center">
                  <i className={data.icon}></i>
                </div>

                <h1
                  style={{ fontFamily: "var(--font-tasa)" }}
                  className="text-2xl font-semibold text-center tracking-wide text-white"
                >
                  {data.title}
                </h1>

                <h3 className="text-center text-pink-300/90 text-lg tracking-wide">
                  {data.jp}
                </h3>

                {data.vocab && data.kanji && (
                  <div className="flex justify-center gap-6 text-sm text-pink-200">
                    <p className="font-medium">{data.vocab}</p>
                    <p className="font-medium">{data.kanji}</p>
                  </div>
                )}

                <p className="text-center text-sm leading-relaxed text-gray-200/90">
                  {data.description}
                </p>
              </div>

              <button
                className=" cursor-pointer
      mt-6
      flex items-center justify-center gap-2 
      px-8 py-3 
      rounded-xl text-white text-md font-medium
      bg-white/10
      border border-white/30 
      backdrop-blur-md 
      hover:bg-white/20 hover:border-white/50
      transition-all duration-300
      group-hover:shadow-[0_0_25px_rgba(238,122,201,0.4)]
    "
              >
                {data.button}
                <span className="text-xl">
                  <i className={data.icon}></i>
                </span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default SyllabusCards;
