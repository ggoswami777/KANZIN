import React from "react";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";

const KanzinBetterSection = () => {
  return (
    <div className="
      flex flex-col gap-12
      mt-16 sm:mt-20 lg:mt-30
      px-4 sm:px-6 lg:px-10
      max-w-6xl mx-auto
    ">
      <LeftSection />
      <RightSection />
    </div>
  );
};

export default KanzinBetterSection;
