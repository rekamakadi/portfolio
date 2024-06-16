import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const underlineEffectStyle = `absolute bottom-0 left-0 w-full h-1 bg-purple-600 transform scale-x-0 group-hover:scale-x-100
                transition-transform duration-300 ease-in-out`;

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#232323] z-50 flex justify-between text-2xl text-gray-200 items-center px-6 md:px-12 w-full h-16">
      <a href="">Réka Makádi</a>

      <ul className="hidden md:flex gap-12 z-10 cursor-pointer">
        <li className="relative group">
          <Link to="about" smooth={true} offset={50} duration={500}>
            About
          </Link>
          <span
            className={underlineEffectStyle}
          ></span>
        </li>
        <li className="relative group">
          <Link to="portfolio" smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
          <span
            className={underlineEffectStyle}
          ></span>
        </li>
        <li className="relative group">
          <Link to="contact" smooth={true} offset={50} duration={500}>
            Contact
          </Link>
          <span
            className={underlineEffectStyle}
          ></span>
        </li>
      </ul>

      <div onClick={toggleNav} className="md:hidden z-30">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      <div
        className={
          nav
            ? "text-center z-20 fixed h-full w-full left-0 top-0 bg-[#232323]"
            : "fixed left-[-100%]"
        }
      >
        <ul className="font-semibold text-4xl space-y-8 mt-24">
          <li>
            <Link
              to="about"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={closeNav}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
