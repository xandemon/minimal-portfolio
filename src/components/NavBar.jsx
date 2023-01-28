import React, { useState } from 'react'
import { FaBars, FaTimes} from "react-icons/fa"

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {id: 1, link: "home"},
    {id: 2, link: "about"},
    {id: 3, link: "portfolio"},
    {id: 4, link: "experience"},
    {id: 5, link: "contact"}
  ]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div>
            <h1 className="text-4xl font-signature ml-2">Sandesh</h1>
        </div>
        
        <ul className="hidden md:flex">
          {links.map(({id, link}) => (
            <li
              key={id} className="px-4 cursor-pointer font-medium capitalize text-gray-500 hover:scale-105 duration-200">{link}
            </li>
          ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 text-gray-500 z-10 md:hidden">
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/*ask rijan what this below code is and if js codes are executed with curly braces. how to use if*/}
        {nav && (
          <ul className="flex flex-col justify-center absolute items-center top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({id, link}) => (
              <li
                key={id} className="px-4 py-6 cursor-pointer capitalize text-4xl">{link}
              </li>
            ))}
          </ul>
        )}
    </div>
  )
}

export default NavBar