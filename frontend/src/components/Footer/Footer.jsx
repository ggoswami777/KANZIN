import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-10 border-white/10 bg-[#0c0c0f]">
      <div
        className="
          max-w-7xl mx-auto px-6 py-10
          flex flex-col gap-6
          md:flex-row md:items-center md:justify-between
          text-center md:text-left
        "
      >
        <div>
          <h1 className="text-2xl font-semibold text-[#EE7AC9] tracking-wide">
            KANZIN
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            基礎から日本語を築き上げよう。
          </p>
        </div>

        <div className="flex justify-center md:justify-end text-3xl gap-4 text-white">
          <a
            href="https://www.linkedin.com/in/gaurav-goswami-4567a1364?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            className="hover:text-[#EE7AC9] transition-all"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>

          <a
            href="https://github.com/ggoswami777"
            target="_blank"
            className="hover:text-pink-500 transition-all"
          >
            <i className="ri-github-fill"></i>
          </a>

          <a
            href="https://x.com/gauravnickk777?t=jG_PPx6xZJNg7J8lRHRNvA&s=09"
            target="_blank"
            className="hover:text-pink-500 transition-all"
          >
            <i className="ri-twitter-x-line"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="hover:text-pink-500 transition-all"
          >
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
