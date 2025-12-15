import React from "react";

const LeftSection = () => {
  return (
    <h1
      style={{ fontFamily: "var(--font-tasa)" }}
      className="
        text-2xl sm:text-3xl lg:text-4xl
        text-white text-center sm:text-left
        leading-tight
      "
    >
      Kanzin isn't just better —
      <span
        style={{ fontFamily: "var(--font-stack)" }}
        className="text-[#EE7AC9]"
      >
        {" "}
        it's faster
      </span>
    </h1>
  );
};

export default LeftSection;
