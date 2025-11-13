import React from "react";

const Title = () => {
  return (
    <h1
      className="text-3xl font-semibold flex flex-col gap-2 items-center 
                 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] 
                 transition-all duration-700 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.5)]"
      style={{ fontFamily: "var(--font-tasa)" }}
    >
      Learn Japanese from the foundation up.
      <p
        className="text-3xl font-bold text-white 
                   drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] 
                   hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] 
                   transition-all duration-700"
        style={{ fontFamily: "var(--font-tasa)" }}
      >
        基礎から日本語を築き上げよう。
      </p>
    </h1>
  );
};

export default Title;
