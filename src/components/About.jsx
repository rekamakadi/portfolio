import React from 'react'
// import project1 from '../assets/project1.png'
import {
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiHtml5,
    DiCss3,
    DiBootstrap,
    DiMongodb,
    DiGithubBadge
} from 'react-icons/di';

const About = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 grid md:grid-cols-2 gap-8 place-items-center' id="about">

        <div className='md:hidden bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 flex flex-wrap gap-4 text-4xl justify-center'>
            <DiHtml5 className='text-orange-600' />
            <DiCss3 className='text-blue-600' />
            <DiBootstrap className='text-purple-600' />
            <DiJavascript1 className='text-yellow-600' />
            <DiReact className='text-cyan-600' />
            <DiNodejsSmall className='text-green-600' />
            <DiGithubBadge className='text-gray-500' />
            <DiMongodb className='text-lime-600' />
        </div>

        <div className='relative group'>
            <div className='w-full h-full absolute -inset-1 bg-gradient-to-r from-purple-100 to-purple-900 rounded-lg
            blur opacity-25 group-hover:opacity-100 transition duration-300'>
            </div>
            <div>
              {/* <img src={project1} alt="project 1" className='rounded-lg md:max-w-[500px]'/> */}
            </div>
        </div>

        <div className='p-6'>
          <h2 className='text-gray-200 text-3xl font-bold mb-4'>Fullstack experience</h2>
          <p className='text-gray-300 mb-4'>
            Description
          </p>
          <div className='md:flex flex-wrap gap-4 text-4xl justify-center hidden'>
            <DiHtml5 className='text-orange-600' />
            <DiCss3 className='text-blue-600' />
            <DiBootstrap className='text-purple-600' />
            <DiJavascript1 className='text-yellow-600' />
            <DiReact className='text-cyan-600' />
            <DiNodejsSmall className='text-green-600' />
            <DiGithubBadge className='text-gray-500' />
            <DiMongodb className='text-lime-600' />
          </div>
        </div>      
    </div>
  )
}

export default About
