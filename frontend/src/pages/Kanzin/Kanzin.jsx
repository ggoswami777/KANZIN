import React from "react";
import background from "../../assets/background/bg.jpg";
const Kanzin = () => {
  return (
    <div className="relative h-screen w-screen overflow-x-hidden ">
      <img
        className="absolute h-full w-full object-cover bg-center"
        src={background}
      />
    </div>
  );
};

export default Kanzin;
