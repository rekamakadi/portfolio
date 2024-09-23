import React from "react";
import iconDetails from "../assets/iconDetails";

const About = () => {
  return (
    <div
      className="max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center"
      id="about"
    >
      <p className="text-gray-300 mb-6 text-center">
        I am passionate about tailoring solutions to meet customer requirements
        and desires, ensuring their vision comes to life. What I enjoy most is
        exploring different perspectives and presenting alternative approaches,
        ultimately selecting the most fitting and effective solution. My goal is
        to combine customer satisfaction with innovative problem-solving.
      </p>

      <div className="md:hidden p-6 flex flex-wrap gap-4 text-4xl justify-center">
        {Object.keys(iconDetails).map((key, index) => (
          <div key={index} className="group relative">
            <div
              className="relative p-2 bg-gradient-to-r from-teal-100 to-purple-300 rounded-full shadow-lg flex items-center justify-center
              bg-blur opacity-70 hover:opacity-100 transition duration-300 backdrop-filter backdrop-blur-lg p-4"
            >
              {iconDetails[key].icon}
            </div>
            <span className="absolute inset-0 flex items-center justify-center text-sm bg-gray-900 text-white rounded-full bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              {iconDetails[key].name}
            </span>
          </div>
        ))}
      </div>

      <div className="p-6">
        <div className="md:flex flex-wrap gap-4 text-4xl justify-center hidden">
          {Object.keys(iconDetails).map((key, index) => (
            <div key={index} className="group relative">
              <div
                className="relative p-2 bg-gradient-to-r from-teal-100 to-purple-300 rounded-full shadow-lg flex items-center justify-center
              bg-blur opacity-70 hover:opacity-100 transition duration-300 backdrop-filter backdrop-blur-lg p-4"
              >
                {iconDetails[key].icon}
              </div>
              <span className="absolute inset-0 flex items-center justify-center text-sm bg-gray-900 text-white rounded-full bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                {iconDetails[key].name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
