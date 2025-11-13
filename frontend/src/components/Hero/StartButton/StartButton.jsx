import React from 'react'


const StartButton = () => {
  return (
    <button
      className="flex items-center gap-2 px-10 py-4 border border-white/70 rounded-xl text-white text-lg 
                 font-medium bg-white/5 backdrop-blur-md hover:bg-white/10 hover:scale-105 
                 transition-all duration-300 shadow-sm drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
    >
      <span className="text-2xl font-semibold">始</span>
      <span>Start here <i className="ri-arrow-right-long-line ml-2"></i></span>
      
    </button>
  )
}

export default StartButton
