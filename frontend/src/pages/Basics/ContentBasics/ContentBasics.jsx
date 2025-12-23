import React, { useState } from "react";
import KanaCharts from "./KanaCharts";
import { hiragana, katakana, romaji } from "./ContentData";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../../utility/Animation";
import Lessons from "./Lessons";
import VideoPlay from "../../../components/VideoPlay/VideoPlay";
import Footer from "../../../components/Footer/Footer";
import { useOutletContext } from "react-router-dom";

const ContentBasics = () => {
  const { completed, setCompleted } = useOutletContext();
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const handlePlayVideo = (url) => {
    setPlayVideo(true);
    setPlayVideoId(url);
  };

  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden">
        {/* Branding */}
        <div className="text-lg sm:text-xl z-10 px-3 absolute text-white tracking-[0.2em] mb-6">
          KANZIN
        </div>

        {/* Background */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://i.pinimg.com/736x/4f/ae/83/4fae83b8c83afdfb4b21260608fe573f.jpg"
          alt=""
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

        {/* Main Content */}
        <motion.div className="relative flex flex-col items-center text-center pb-20 px-2 sm:px-4">
          {/* Heading */}
          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3 py-10 sm:py-12"
          >
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl text-white font-semibold"
              style={{ fontFamily: "var(--font-stack)" }}
            >
              Basic Learning <span className="text-[#EE7AC9]">Hub</span>
            </h1>

            <h1
              className="text-xl sm:text-3xl lg:text-4xl tracking-[0.1em] text-white/60"
              style={{ fontFamily: "var(--font-stack)" }}
            >
              基礎学習センター
            </h1>
          </motion.div>

          {/* Kana Sections */}
          <motion.div
            variants={SlideUp(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-10 sm:gap-14 lg:gap-16 w-full items-center text-white/40"
          >
            <KanaCharts titleJP="ローマ字" titleEN="Romaji" data={romaji} />
            <KanaCharts titleJP="ひらがな" titleEN="Hiragana" data={hiragana} />
            <KanaCharts titleJP="カタカナ" titleEN="Katakana" data={katakana} />
          </motion.div>
        </motion.div>

        {/* Lessons */}
        <Lessons
          onPlayVideo={handlePlayVideo}
          completed={completed}
          setCompleted={setCompleted}
        />

        {/* Video Modal */}
        {playVideo && (
          <VideoPlay
            data={playVideoId}
            close={() => setPlayVideo(false)}
          />
        )}
      </div>

      <Footer />
    </>
  );
};

export default ContentBasics;
