import React from "react";
import background from "../../assets/background/bg.jpg";
import Heading from "../../components/KanzinPage/Heading/Heading";
import SyllabusCards from "../../components/HomePage2/SyllabusCards/SyllabusCards";
import Cards from "../../components/KanzinPage/Cards/Cards";
const Kanzin = () => {
  return (
    <div
        className="h-full  w-full
             bg-gradient-to-b from-[#000000] via-[#52292f] to-[#000000] relative"
      > 
      <Heading/>
      <Cards/>
        
      </div>
  );
};

export default Kanzin;
