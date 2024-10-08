import React, { useState, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiFigma } from "react-icons/si";
import ShinyEffect from "./ShinyEffect";
import projectsData from "../assets/projects.json";
import Slider from "react-slick";
import iconDetails from "../assets/iconDetails";

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
              <h4 className="text-xl text-white mb-2 text-center underline">
                {project.title}
              </h4>

              <p
                className="text-gray-200 m-4 text-center"
                dangerouslySetInnerHTML={{
                  __html: project.description.replace(/\n/g, "<br />"),
                }}
              ></p>
              <div className="p-2 flex flex-wrap gap-2 text-2xl justify-center m-4">
                {project.techIcons.map((iconName, index) => (
                  <div key={index} className="group relative">
                    <div className="relative p-2 bg-gradient-to-r from-teal-100 to-purple-300 rounded-full shadow-lg flex items-center justify-center opacity-70 hover:opacity-100 transition duration-300 backdrop-filter backdrop-blur-lg p-3">
                      {iconDetails[iconName]?.icon}
                    </div>
                    <span className="absolute inset-0 flex items-center justify-center text-sm bg-gray-900 text-white rounded-full bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      {iconDetails[iconName]?.name}
                    </span>
                  </div>
                ))}

                <div className="w-full h-80 my-4">
                  {project.img && (
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  )}
                </div>

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
