import React from "react";
import { CardsData } from "./CardsData";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div  className="flex flex-wrap justify-center gap-10   px-6 py-12">
      {CardsData.map((card) => (
        <div
          key={card.id}
          className="group w-full max-w-sm rounded-2xl overflow-hidden bg-[#0c0c0f] 
                     border border-white/5 shadow-[0_0_40px_rgba(255,0,128,0.08)] 
                     hover:shadow-[0_0_60px_rgba(255,0,128,0.18)] 
                     transition-all duration-500 hover:-translate-y-2"
        >
          <div className="relative h-60 w-full overflow-hidden">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover transition-transform duration-700 
                         group-hover:scale-110"
            />

            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2 rounded-full border border-white/10">
              <i className={`${card.icon} text-pink-300 text-xl`}></i>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
          </div>
          <div className="p-6 text-gray-200 flex flex-col gap-3 ">

            <h1
              className="
                text-2xl font-semibold tracking-wide text-white 
                transition-colors duration-300
                group-hover:text-pink-400
              "
              style={{ fontFamily: "var(--font-tasa)" }}
            >
              {card.title}
            </h1>
            <p>{card.level}</p>
            <p className="text-pink-300/90 text-sm">{card.jp}</p>

            {card.vocab && (
              <div className="flex items-center gap-6 text-sm text-pink-500">
                <p>{card.vocab}</p>
                <p className="text-purple-500">{card.kanji}</p>
              </div>
            )}

            <p style={{ fontFamily: "var(--font-tasa)" }} className="text-sm leading-relaxed text-gray-300">
              {card.description}
            </p>

            <Link
              to={`/start/${card.id === "intro" ? "basics" : card.id}`}
              className="
                mt-4 w-full text-center py-3 
                rounded-xl text-white font-medium 
                bg-gradient-to-r from-pink-500 to-purple-600
                hover:opacity-90 transition-all duration-300
              "
            >
              Start Learning  →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
