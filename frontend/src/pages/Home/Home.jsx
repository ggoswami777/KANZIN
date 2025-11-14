import React from "react";
import background from "../../assets/background/bg.jpg";
import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import TextArea from "../../components/HomePage2/TextArea/TextArea";
import ExistsCard from "../../components/HomePage2/KanzinExistsCard/ExistsCard";
import KanzinBetterSection from "../../components/HomePage2/KanzinBetterSection/KanzinBetterSection";

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden ">
      {/* Background image */}
      <img
        className="absolute h-full w-full object-cover bg-center"
        src={background}
      />

      {/* Slight dark overlay for overall dimming */}
      <div className="absolute h-full w-full bg-black/40" />

      {/* Bottom gradient overlay to make transition smooth */}
      <div
        className="absolute bottom-0 h-[40vh] w-full 
                   bg-gradient-to-b from-transparent to-black"
      />
      <div className="relative z-10 h-full pt-5">
        <Header />
        <Hero />
      </div>
      <div
        className="h-auto flex flex-col w-full items-center 
             bg-gradient-to-b from-[#000000] via-[#75363f] to-[#000000]"
      >
        <TextArea />
        <ExistsCard/>
        <KanzinBetterSection/>
      </div>
    </div>
  );
};

export default Home;
