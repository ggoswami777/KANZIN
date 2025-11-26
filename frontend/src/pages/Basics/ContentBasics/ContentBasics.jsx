import React, { useState } from "react";
import KanaCharts from "./KanaCharts";
import { hiragana, katakana, romaji } from "./ContentData";
import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../../utility/Animation";
import Lessons from "./Lessons";
import VideoPlay from "../../../components/VideoPlay/VideoPlay";
import Footer from "../../../components/Footer/Footer";

const ContentBasics = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const handlePlayVideo = (url) => {
    setPlayVideo(true);
    setPlayVideoId(url);
  };
  return (
    <>
      <div className="relative min-h-screen w-full overflow-x-hidden ">
        <div className="text-xl z-10 px-3 absolute text-white tracking-[0.2em] mb-6">
          KANZIN
        </div>
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://i.pinimg.com/736x/4f/ae/83/4fae83b8c83afdfb4b21260608fe573f.jpg"
        />

        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

        <motion.div className="relative  flex flex-col items-center text-center pb-20">
          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-3  py-12"
          >
            <h1
              className="text-6xl text-white font-semibold"
              style={{ fontFamily: "var(--font-stack)" }}
            >
              Basic Learning <span className="text-[#EE7AC9]">Hub</span>
            </h1>
            <h1
              className="text-4xl tracking-[0.1em] text-white/60"
              style={{ fontFamily: "var(--font-stack)" }}
            >
              基礎学習センター
            </h1>
          </motion.div>

          <motion.div
            variants={SlideUp(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-16 w-full items-center text-white/40"
          >
            <KanaCharts titleJP="ローマ字" titleEN="Romaji" data={romaji} />
            <KanaCharts titleJP="ひらがな" titleEN="Hiragana" data={hiragana} />
            <KanaCharts titleJP="カタカナ" titleEN="Katakana" data={katakana} />
          </motion.div>
        </motion.div>
        <Lessons onPlayVideo={handlePlayVideo} />

        {playVideo && (
          <VideoPlay data={playVideoId} close={() => setPlayVideo(false)} />
        )}
      </div>
      <Footer/>
    </>
  );
};

export default ContentBasics;
