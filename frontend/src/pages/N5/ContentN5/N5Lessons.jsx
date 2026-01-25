import React, { useContext } from "react";
import axios from "axios";
import { Check } from "lucide-react";

import { ShopContext } from "../../../context/ShopContext";


const N5Lessons = ({
  id,
  lessons,
  data,
  onPlayVideo,
  completed,
  setCompleted,
}) => {
  const { backendURL, token } = useContext(ShopContext);


  const toggleComplete = async (lessonId) => {
    try {
      await axios.post(
        `${backendURL}/api/lesson/complete`,
        {
          lessonId,
        },
        {
          headers: {
           Authorization: `Bearer ${token}`,
          },
        }
      );

      setCompleted((prev) =>
        prev.includes(lessonId)
          ? prev.filter((x) => x !== lessonId)
          : [...prev, lessonId]
      );
    } catch (error) {
      console.error("Error updating lesson status", error);
    }
  };

  return (
    <div
      id={id}
      style={{ fontFamily: "var(--font-tasa)" }}
      className="
        w-[95%] sm:w-[92%] max-w-6xl mx-auto
        flex flex-col gap-6 sm:gap-8
        px-4 sm:px-8 lg:px-12
        py-6 sm:py-8 lg:py-10
        rounded-3xl
        bg-black/40 backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_60px_rgba(0,0,0,0.6)]
        mb-10
      "
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-2 sm:px-4">
        <h1 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#FF2BC2] via-[#D742F5] to-[#7E5CFF] bg-clip-text text-transparent">
          {data}
        </h1>

        <h1 className="text-sm sm:text-xl font-semibold text-white/40">
          {lessons.length} Lessons
        </h1>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {lessons.map((item) => {
          const isDone = completed.includes(item.lessonId);

          return (
            <div
              key={item.lessonId}
              className="
                relative flex flex-col gap-3 sm:gap-4 p-5 sm:p-6
                bg-black/10 border border-white/10
                rounded-2xl backdrop-blur-xl
                shadow-[0_0_20px_rgba(0,0,0,0.5)]
                hover:shadow-[0_0_30px_rgba(255,60,200,0.4)]
                transition-all duration-300
              "
            >
              {/* Complete Button */}
              <button
                onClick={() => toggleComplete(item.lessonId)}
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

              <p className="text-sm sm:text-base text-white/60">
                Lesson {item.lesson}
              </p>

              <h1 className="text-lg sm:text-xl font-semibold text-white">
                {item.topic}
              </h1>

              {/* Actions */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => onPlayVideo(item.youtube)}
                  className="
                    flex-1 py-2 rounded-full
                    bg-red-500/20
                    text-white/80 text-sm sm:text-base font-medium
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
                    className="
                      flex-1 py-2 rounded-full
                      bg-[#FF2BC2]/20
                      text-[#FF2BC2]/70 text-sm sm:text-base text-center font-medium
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
                      text-white/20 text-sm sm:text-base text-center font-medium
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

export default N5Lessons;
