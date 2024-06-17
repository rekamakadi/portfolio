import React from "react";

import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMongodb,
  DiGithubBadge,
  DiMsqlServer,
  DiPostgresql,
  DiDocker,
} from "react-icons/di";
import { BiLogoTailwindCss } from "react-icons/bi";
import { SiDotnet, SiCsharp, SiFigma } from "react-icons/si";

const iconDetails = [
  { icon: <DiHtml5 className="text-[#E34F26]" />, name: "HTML5" },
  { icon: <DiCss3 className="text-[#1572B6]" />, name: "CSS3" },
  { icon: <DiBootstrap className="text-[#7952B3]" />, name: "Bootstrap" },
  { icon: <DiJavascript1 className="text-[#F7DF1E]" />, name: "JavaScript" },
  { icon: <DiReact className="text-[#61DAFB]" />, name: "React" },
  { icon: <DiNodejsSmall className="text-[#339933]" />, name: "Node.js" },
  { icon: <DiGithubBadge className="text-[#181717]" />, name: "GitHub" },
  { icon: <DiMongodb className="text-[#47A248]" />, name: "MongoDB" },
  { icon: <DiMsqlServer className="text-[#CC2927]" />, name: "SQL Server" },
  { icon: <DiPostgresql className="text-[#336791]" />, name: "PostgreSQL" },
  { icon: <DiDocker className="text-[#2496ED]" />, name: "Docker" },
  {
    icon: <BiLogoTailwindCss className="text-[#38B2AC]" />,
    name: "Tailwind CSS",
  },
  { icon: <SiDotnet className="text-[#512BD4]" />, name: ".NET" },
  { icon: <SiCsharp className="text-[#239120]" />, name: "C#" },
  { icon: <SiFigma className="text-[#F24E1E]" />, name: "Figma" },
];

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <h2 className="text-gray-200 text-3xl font-bold mb-4">Tech skills</h2>
      <div className="md:hidden p-6 flex flex-wrap gap-4 text-4xl justify-center">
        {iconDetails.map((detail, index) => (
          <div key={index} className="group relative">
            <div
              className="relative p-2 bg-gradient-to-r from-teal-100 to-purple-300 rounded-full shadow-lg flex items-center justify-center
              bg-blur opacity-70 hover:opacity-100 transition duration-300 backdrop-filter backdrop-blur-lg p-4"
            >
              {detail.icon}
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-sm bg-gray-900 text-white rounded-full bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              {detail.name}
            </span>
          </div>
        ))}
      </div>

      <div className="p-6">
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          {iconDetails.map((detail, index) => (
            <div key={index} className="group relative">
              <div
                className="relative p-2 bg-gradient-to-r from-teal-100 to-purple-300 rounded-full shadow-lg flex items-center justify-center
              bg-blur opacity-70 hover:opacity-100 transition duration-300 backdrop-filter backdrop-blur-lg p-4"
              >
                {detail.icon}
              </div>
              <span className="absolute inset-0 flex items-center justify-center text-sm bg-gray-900 text-white rounded-full bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {detail.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
