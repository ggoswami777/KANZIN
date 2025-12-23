import React from "react";
import { BasicsLessons } from "./BasicLessons";
import { Check } from "lucide-react";

const Lessons = ({ onPlayVideo, completed, setCompleted }) => {
  const toggleComplete = (id) => {
    setCompleted((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div
      style={{ fontFamily: "var(--font-tasa)" }}
      className="
        w-[90%] max-w-6xl mx-auto 
        flex flex-col gap-8
        px-4 py-5
        sm:px-6 sm:py-6
        md:px-12 md:py-10
        rounded-3xl
        bg-black/40 backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_60px_rgba(0,0,0,0.6)]
        mb-10
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between px-2 sm:px-4 py-2 gap-2">
        <h1 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent">
          Lessons
        </h1>

        <h1 className="text-sm sm:text-2xl font-semibold text-white/40">
          {completed.length}/{BasicsLessons.length} completed
        </h1>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {BasicsLessons.map((item) => {
          const isDone = completed.includes(item.lesson);

          return (
            <div
              key={item.lesson}
              className="
                relative flex flex-col gap-4
                p-4 sm:p-5 lg:p-6
                bg-black/30 border border-white/10 
                rounded-2xl backdrop-blur-xl
                shadow-[0_0_20px_rgba(0,0,0,0.5)]
                hover:shadow-[0_0_30px_rgba(255,60,200,0.4)]
                transition-all duration-300
              "
            >
              {/* Complete Button */}
              <button
                onClick={() => toggleComplete(item.lesson)}
                className={`
                  absolute top-4 right-4 w-8 h-8 rounded-full
                  border transition-all flex items-center justify-center
                  ${
                    isDone
                      ? "bg-gradient-to-br from-[#FF2BC2] to-[#7E5CFF] shadow-[0_0_10px_rgba(255,60,200,0.9)] border-transparent"
                      : "bg-black/30 border-white/20 hover:border-white/40"
                  }
                `}
              >
                <Check
                  size={18}
                  className={isDone ? "text-white" : "text-white/40"}
                />
              </button>

              <p className="text-base sm:text-lg text-white/60">
                Lesson {item.lesson}
              </p>

              <h1 className="text-lg sm:text-xl font-semibold text-white">
                {item.topic}
              </h1>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => onPlayVideo(item.youtube)}
                  className="
                    flex-1 py-2 rounded-full 
                    bg-red-500/20 
                    text-white/80 text-center font-medium
                    transition duration-200
                    hover:bg-red-500/30 
                    hover:shadow-[0_0_7px_rgba(255,0,0,0.6),0_0_20px_rgba(255,0,0,0.5)]
                  "
                >
                  <i className="ri-video-line"></i> Video
                </button>

                {item.pdf ? (
                  <a
                    href={item.pdf}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex-1 py-2 rounded-full 
                      bg-[#FF2BC2]/20
                      text-[#FF2BC2]/70 text-center font-medium
                      transition-all
                    "
                  >
                    <i className="ri-file-pdf-line"></i> PDF
                  </a>
                ) : (
                  <div
                    className="
                      flex-1 py-2 rounded-full 
                      bg-white/10 
                      text-white/20 text-center font-medium
                    "
                  >
                    PDF
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Lessons;
