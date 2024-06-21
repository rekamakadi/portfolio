import React from "react";
import { TypeAnimation } from "react-type-animation";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  return (
    <div className="relative grid md:grid-cols-2 place-items-center max-w-[1300px] mx-auto mb-8 md:mb-32 mt-14 px-4">
      <div className="max-w-[800px] w-full">
        <p className="text-gray-200 md:text-6xl text-3xl tracking-tight">
          HEY, I'm <br />
          <span className="">RÉKA MAKÁDI</span> <br />
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "UX/UI Designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
          <a
            href="/portfolio/Réka_Makádi_CV.pdf"
            id="download"
            download="Réka_Makádi_CV.pdf"
            className="flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-2xl text-gray-200 w-full md:w-1/2 mt-6 p-2 bg-gradient-to-r from-[#9333ea] via-[#DE7AFF] to-[#61BAAD] rounded-xl"
          >
            Download CV
          </a>
          <div className="flex w-full md:w-1/2 mt-6 space-x-4">
            <a
              href="https://www.linkedin.com/in/rekamakadi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full bg-gradient-to-r from-[#0077B5] to-[#00A0DC] rounded-xl transform transition-transform hover:scale-105 hover:shadow-lg z-10"
            >
              <AiFillLinkedin className="text-gray-200" size={30} />
            </a>
            <a
              href="https://www.github.com/rekamakadi"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-105 hover:shadow-lg z-10 flex items-center justify-center w-full p-2 bg-gradient-to-r from-[#333333] to-[#6e5494] rounded-xl"
            >
              <AiFillGithub className="text-gray-200" size={30} />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full flex justify-center md:justify-end mt-8 md:mt-0">
        <img
          src="/portfolio/profilepic.png"
          className="rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 mx-auto md:mx-0"
          alt="profilepicture"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={200} size={1400} />
        </div>
        <ShinyEffect left={-100} top={0} size={1200} />
      </div>
    </div>
  );
};

export default Hero;
