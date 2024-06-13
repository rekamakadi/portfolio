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
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-[800px] mx-auto p-6 md:my-20 relative" id="portfolio">
      <Slider {...settings}>
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="glass p-6 border-2 max-w-[600px] mx-auto">
              <ShinyEffect left={-50} top={-50} size={200} />
              <h2 className="text-4xl text-white mb-2 text-center">
                {project.experience}
              </h2>
              <h4 className="text-xl text-white mb-2 text-center">
                {project.title}
              </h4>
              <div className="w-full h-80 mb-4">
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>

              <p
                className="text-gray-200 my-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: project.description.replace(/\n/g, "<br />"),
                }}
              ></p>
              <div className="p-2 flex flex-wrap gap-2 text-2xl justify-center">
                {project.techIcons.map((iconName, index) => (
                  <div key={index} className="group relative">
                    <div className="relative p-2 bg-gradient-to-r from-teal-100 to-purple-300 rounded-full shadow-lg flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300 backdrop-filter backdrop-blur-lg rounded-full p-3">
                      {iconDetails[iconName]?.icon}
                    </div>
                    <span
                      className="absolute inset-0 flex items-center justify-center left-1/2 transform -translate-x-1/2 translate-y-full 
              text-sm w-full h-full bg-gray-900 bg-opacity-90 text-white p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                    >
                      {iconDetails[iconName]?.name}
                    </span>
                  </div>
                ))}
                <ShinyEffect right={-50} bottom={-50} size={200} />
              </div>
              <div className="flex space-x-4 justify-center mt-4">
                {project.links.site && (
                  <a
                    href={project.links.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:scale-105 hover:bg-slate-700 transition duration-300"
                  >
                    View Site
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:scale-105 hover:bg-gray-600 transition duration-300"
                  >
                    <AiFillGithub />
                  </a>
                )}
                {project.links.figma && (
                  <a
                    href={project.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-pink-500 text-gray-200 text-2xl rounded-lg hover:scale-105 hover:bg-pink-600 transition duration-300"
                  >
                    <SiFigma />
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
