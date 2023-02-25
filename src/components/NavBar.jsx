import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    { id: 1, link: "home" },
    // { id: 2, link: "about" },
    { id: 2, link: "projects" },
    { id: 3, link: "techs" },
    { id: 4, link: "contact" },
  ];

  return (
    <div
      id="menubar"
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-neutral-900 bg-opacity-90 fixed z-20"
    >
      <div>
        <Link to={"home"} smooth duration={600}>
          <h1 className="text-4xl font-brand pl-2 cursor-pointer text-transparent bg-gradient-to-br from-cyan-300 to-purple-700 bg-clip-text duration-300 hover:scale-110">
            Sandesh
          </h1>
        </Link>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer font-medium capitalize text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={600}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center absolute items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 py-6 cursor-pointer capitalize text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
