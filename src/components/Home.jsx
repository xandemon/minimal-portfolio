import React from "react";
import mainCharacter from "../assets/mainCharacter.webp";
import { TiArrowRight } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center min-h-screen w-full bg-gradient-to-b from-neutral-900 via-neutral-900 to-zinc-800"
    >
      <div className="max-w-screen-lg mx-auto h-full flex flex-col-reverse px-4 justify-between items-center md:flex-row">
        <div class="flex flex-col justify-center h-full md:px-10 lg:mr-30">
          <div className="pt-[20px] text-center md:text-left font-bold">
            <h2 className="text-2xl md:text-3xl text-gray-100">
              Hey there👋! I am
            </h2>
            <h2 className="text-4xl md:text-6xl text-white">Sandesh Katwal</h2>
          </div>

          <div className="text-justify md:text-left text-gray-400 py-[20px] max-w-md">
            <p>
              a passionate Front-End Developer on a mission to build ideas to
              life in the form of user-friendly and visually appealing websites.
              I am excited to share my portfolio with you and hope you enjoy my
              work as much as I enjoyed creating it.
            </p>
          </div>
          <div className="flex justify-center md:justify-start">
            <Link to="projects" smooth duration={300}>
              <button className="group text-white font-semibold flex items-center w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500">
                Portfolio
                <span className="group-hover:rotate-[360deg] duration-[500ms]">
                  <TiArrowRight size={25} className="ml-1" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={mainCharacter}
            alt="Sandesh Katwal"
            className="rounded-full w-1/2 mx-auto md:w-[350px] lg:ml-20 hover:scale-105 duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
