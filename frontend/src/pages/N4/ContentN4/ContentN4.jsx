import React, { useState } from "react";
import { motion } from "framer-motion";
import { SlideLeft } from "../../../utility/Animation";
import Footer from "../../../components/Footer/Footer";
import { useOutletContext } from "react-router-dom";
import VideoPlay from "../../../components/VideoPlay/VideoPlay";
import { N4VocabLessons } from "./N4VocabLessons";
import N5Lessons from "../../N5/ContentN5/N5Lessons";
import { N4GrammarLessons } from "./N4GrammarLessons";
import { N4KanjiLessons } from "./N4KanjiLessons";


const ContentN4 = () => {
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
        {/* Brand */}
        <div className="absolute top-4 left-3 z-10 text-white tracking-[0.2em] text-lg sm:text-xl">
          KANZIN
        </div>

        {/* Background */}
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://i.pinimg.com/1200x/8e/7f/89/8e7f8987a2508e2f9a854df1791b706c.jpg"
          alt="N4 Background"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md" />

        {/* Hero */}
        <motion.div className="relative flex flex-col items-center text-center pt-24 sm:pt-28 pb-16 sm:pb-20">
          <motion.div
            variants={SlideLeft(0.3)}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-2 sm:gap-3"
          >
            <h1
              className="text-3xl sm:text-5xl lg:text-6xl text-white font-semibold"
              style={{ fontFamily: "var(--font-stack)" }}
            >
              N4 Learning <span className="text-[#EE7AC9]">Hub</span>
            </h1>

            <h2
              className="text-lg sm:text-3xl lg:text-4xl tracking-[0.1em] text-white/60"
              style={{ fontFamily: "var(--font-stack)" }}
            >
              N4学習センター
            </h2>
          </motion.div>
        </motion.div>

        {/* Lessons */}
        <N5Lessons
          lessons={N4VocabLessons}
          data="Vocabulary N4"
          onPlayVideo={handlePlayVideo}
          completed={completed}
          setCompleted={setCompleted}
        />
        <N5Lessons
          lessons={N4GrammarLessons}
          data="Grammar N4"
          onPlayVideo={handlePlayVideo}
          completed={completed}
          setCompleted={setCompleted}
        />
        <N5Lessons
          lessons={N4KanjiLessons}
          data="Kanjis N4"
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

export default ContentN4;
