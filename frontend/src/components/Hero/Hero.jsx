import React from "react";
import BannerName from "./BannerName/BannerName";
import Title from "./Title/Title";
import StartButton from "./StartButton/StartButton";

const Hero = () => {
  return (
    <section>
      <div className="flex flex-col gap-8 sm:gap-10 md:gap-12 justify-center items-center pt-6 sm:pt-8">
        <BannerName />
        <Title />
        <StartButton />
      </div>
    </section>
  );
};

export default Hero;
