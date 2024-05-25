import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div
      className="px-6 max-w-[1000px] mx-auto glass grid md:grid-cols-2 place-items-center"
      id="contact"
    >
      <ul className="my-auto pr-6">
        <li className="flex">
          <AiFillLinkedin className="w-[70px] h-auto text-gray-300" />
          <div>
            <h3 className="text-lg font-bold text-gray-200">Contact</h3>
            <p className="text-gray-400">Mobile: xxx</p>
            <p className="text-gray-400">Email: xxx</p>
          </div>
        </li>

        <li className="flex">
          <AiFillGithub className="w-[70px] h-auto text-gray-300" />
        </li>
      </ul>
      <form className='max-w-6xl p-5 md:p-12' id="form" action="" method="POST">
        <input 
            type="text"
            id="name"
            placeholder="Your Name ..."
            name="name"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4" 
        />
        <input 
            type="text"
            id="email"
            placeholder="Your Email ..."
            name="email"
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4" 
        />
        <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="4"
            placeholder="Your Message ..."
            className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4" 
        />

        <button type="submit" className='w-full transform transition-transform hover:scale-105 hover:shadow-lg
                z-10 cursor-pointer font-bold text-gray-200 w-1/2 mt-6 p-2
                bg-gradient-to-r from-[#9333ea] via-[#DE7AFF] to-[#61BAAD] rounded-xl'>Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
