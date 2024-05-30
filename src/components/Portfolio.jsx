import React, {useState} from 'react';
// import project1 from '../assets/project1.png';
import { AiFillGithub } from 'react-icons/ai';
import ShinyEffect from './ShinyEffect';

const projects = [
    {
        // img: project1,
        title: "Project #1",
        description: "Description of Project #1",
        links: {
            site: "#",
            github: "#"
        }
    }
]

const Portfolio = () => {
    const [currentProject, setCurrentProject] = useState(0);

  return (
    <div className='relative max-w-[800px] mx-auto p-6 md:my-20 flex flex-col md:flex-row' id='portfolio'>
        <div className='glass p-6 w-full border-2 max-w-[600px]'>
            <div className='w-full h-80'>
                {/* <img src={project1} alt="project 1" className='w-full h-full object-cover rounded-lg mb-4' /> */}
            </div>

            <p className='text-gray-200 my-4'>
                Description
            </p>
            <div>
                <a href="#" className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slatee-700 transition duration-300'>View Site</a>
                <a href="#" className='px-4 py-2 bg-gray-800 text-gray-200 text-2xl rounded-lg hover:bg-gray-600 transition duration-300'><AiFillGithub/></a>
            </div>

        <div className="hidden md:block">
          <ShinyEffect left={100} top={0} size={900} />
        </div>
       
            {/* <ul className='ml-6 flex flex-row md:flex-col gap-6 flex-wrap justify-center mt-4 md:gap-1'>
                {projects.map((project, index) => (
                    <li key={index} onClick={() => setCurrentProject(index)} className=''>
                    </li>
                ))}
                
            </ul> */}
        </div>
    </div>
  )
}

export default Portfolio
