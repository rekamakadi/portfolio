import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import ShinyEffect from "./ShinyEffect";
import projectsData from "../assets/projects.json";
import Slider from "react-slick";

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

const iconDetails = {
  DiHtml5: { icon: <DiHtml5 className="text-[#E34F26]" />, name: "HTML5" },
  DiCss3: { icon: <DiCss3 className="text-[#1572B6]" />, name: "CSS3" },
  DiBootstrap: {
    icon: <DiBootstrap className="text-[#7952B3]" />,
    name: "Bootstrap",
  },
  DiJavascript1: {
    icon: <DiJavascript1 className="text-[#F7DF1E]" />,
    name: "JavaScript",
  },
  DiReact: { icon: <DiReact className="text-[#61DAFB]" />, name: "React" },
  DiNodejsSmall: {
    icon: <DiNodejsSmall className="text-[#339933]" />,
    name: "Node.js",
  },
  DiGithubBadge: {
    icon: <DiGithubBadge className="text-[#181717]" />,
    name: "GitHub",
  },
  DiMongodb: {
    icon: <DiMongodb className="text-[#47A248]" />,
    name: "MongoDB",
  },
  DiMsqlServer: {
    icon: <DiMsqlServer className="text-[#CC2927]" />,
    name: "SQL Server",
  },
  DiPostgresql: {
    icon: <DiPostgresql className="text-[#336791]" />,
    name: "PostgreSQL",
  },
  DiDocker: { icon: <DiDocker className="text-[#2496ED]" />, name: "Docker" },
  BiLogoTailwindCss: {
    icon: <BiLogoTailwindCss className="text-[#38B2AC]" />,
    name: "Tailwind CSS",
  },
  SiDotnet: { icon: <SiDotnet className="text-[#512BD4]" />, name: ".NET" },
  SiCsharp: { icon: <SiCsharp className="text-[#239120]" />, name: "C#" },
  SiFigma: { icon: <SiFigma className="text-[#F24E1E]" />, name: "Figma" },
};

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  if (projects.length === 0) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-[800px] mx-auto p-6 md:my-20" id="portfolio">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index}>
            <div className="glass p-6 border-2 max-w-[600px] mx-auto">
              <div className="w-full h-80">
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg mb-4"
                  />
                )}
              </div>

              <h2 className="text-xl text-white mb-2 text-center">{project.title}</h2>
              <p className="text-gray-200 my-4 text-center">{project.description}</p>
              <div className="p-6 flex flex-wrap gap-4 text-4xl justify-center">
                {project.techIcons.map((iconName, index) => (
                  <div key={index} className="group relative">
                    <div
                      className="-inset-1 bg-gradient-to-r from-stone-300 to-stone-900 rounded-full
            bg-blur opacity-70 hover:opacity-100 transition duration-300 backdrop-filter backdrop-blur-lg rounded-full p-4 bg-opacity-50"
                    >
                      {iconDetails[iconName]?.icon}
                    </div>
                    <span
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full 
              text-sm bg-gray-700 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {iconDetails[iconName]?.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex space-x-e">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slatee-700 transition duration-300"
                  >
                    View Site
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300"
                  >
                    <AiFillGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Portfolio;
