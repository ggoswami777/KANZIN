const KanaCharts = ({ titleJP, titleEN, data }) => {
  return (
    <div
      className="
        w-[90%] max-w-6xl mx-auto
        flex flex-col gap-6 px-12 py-10 
        rounded-3xl
        bg-black/40 backdrop-blur-2xl
        border border-white/10
        shadow-[0_0_60px_rgba(0,0,0,0.6)]
      "
    >

      <h2 className="text-3xl font-semibold text-[#EE7AC9] drop-shadow-[0_0_10px_rgba(238,122,201,0.5)]">
        {titleJP} ({titleEN})
      </h2>
      <div className="
        grid gap-4
        grid-cols-5
        sm:grid-cols-6
        md:grid-cols-8
        lg:grid-cols-10
        xl:grid-cols-12
        place-items-center
      ">
        {data.map((char, idx) => (
          <div
            key={idx}
            className="
              flex items-center justify-center
              w-14 h-14
              text-2xl font-medium
              rounded-xl
              bg-black/50 border border-white/10
              backdrop-blur-md
              shadow-[0_0_10px_rgba(0,0,0,0.3)]
              
              transition-all duration-300 cursor-default

              hover:-translate-y-1
              hover:scale-110
              hover:shadow-[0_0_25px_rgba(238,122,201,0.9)]
              hover:border-[#EE7AC9]/60
              hover:text-[#EE7AC9]
            "
          >
            {char}
          </div>
        ))}
      </div>
    </div>
  );
};
export default KanaCharts