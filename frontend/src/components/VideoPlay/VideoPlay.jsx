import React from 'react'

const VideoPlay = ({ data, close }) => {

  const convertToEmbed = (url) => {
  let id = "";

  if (url.includes("youtu.be/")) {
    id = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("watch?v=")) {
    id = url.split("v=")[1].split("&")[0];
  }

  return `https://www.youtube.com/embed/${id}`;
};

  return (
    <section className="fixed inset-0 flex bg-black/70 backdrop-blur-md z-50 justify-center items-center">
      <div className="bg-black w-full max-w-screen-lg aspect-video rounded relative">
        
        <button
          onClick={close}
          className="absolute right-2 top-2 text-3xl text-white hover:text-pink-400"
        >
          <i className="ri-close-fill"></i>
        </button>

        <iframe
          src={convertToEmbed(data)}
          className="w-full h-full rounded"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </section>
  );
};

export default VideoPlay;
