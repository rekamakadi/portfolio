import React from "react";
import cv from "../assets/reka-makadi-cv.pdf";
import profilepic from "../assets/profilepic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.setAttribute("download", cv);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid md:grid-cols-2 place-items-center max-w-[1250px] mx-auto mb-8 md:mb-32 mt-14">
      <div className="max-w-[800px]">
        <p className="text-gray-200 md:text-6xl text-3xl min-w-[600px] tracking-tight">
          HEY, I Am <br />
          <span className="">RÉKA MAKÁDI</span> <br />
          <TypeAnimation
            sequence={["Full Stack Developer", 1000, "UX/UI Designer", 1000]}
            speed={50}
            repeat={Infinity}
            className="font-bold italic"
          />
        </p>

        <div className="flex flex-row gap-4 mb-4 md:mb-0">
          <button
            onClick={handleDownloadCV}
            className="transform transition-transform hover:scale-105 hover:shadow-lg
                z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2
                bg-gradient-to-r from-[#9333ea] via-[#DE7AFF] to-[#61BAAD] rounded-xl"
          >
            Download CV
          </button>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden md:overflow-visible">
        <div className="hidden md:block">
          <ShinyEffect left={100} top={200} size={1400} />
        </div>
        <ShinyEffect left={-100} top={0} size={1200} />
      </div>

      <img src={profilepic} className="rounded-full" alt="profilepicture" />
    </div>
  );
};

export default Hero;
