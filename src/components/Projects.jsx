import React from "react";
import reactPortfolio from "../assets/portfolio/reactPortfolio2.jpg";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";

const Projects = () => {
  const skills = [
    {
      id: 1,
      skill: "React",
    },
    {
      id: 2,
      skill: "Tailwind",
    },
    {
      id: 3,
      skill: "Javascript",
    },
  ];
  const projects = [
    {
      id: 1,
      src: reactPortfolio,
      title: "Project no. #",
      descr: "This is a brief description of this project.",
      link: "https://bing.com",
      github: "https://github.com/deadclown09",
    },
    {
      id: 2,
      src: reactPortfolio,
      title: "Project no. #",
      descr: "This is a brief description of this project.",
      link: "https://bing.com",
      github: "https://github.com/deadclown09",
    },
    {
      id: 3,
      src: reactPortfolio,
      title: "Project no. #",
      descr: "This is a brief description of this project.",
      link: "https://bing.com",
      github: "https://github.com/deadclown09",
    },
  ];
  return (
    <div
      name="projects"
      className="flex justify-center items-center bg-gradient-to-b from-zinc-800 via-neutral-900 to-neutral-900 text-white min-h-screen"
    >
      <div className="max-w-5xl p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6 text-gray-400">
            Check out some of my work right here:
          </p>
        </div>
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7">
            {projects.map(({ id, src, title, descr, link, github }) => (
              <div
                key={id}
                className="flex flex-col rounded-md shadow-lg hover:scale-[1.02] duration-300 bg-white bg-opacity-[0.03] drop-shadow-sm shadow-black w-full p-3"
              >
                <div className="group relative">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md group-hover:blur-[2px]"
                  />
                  <span className="w-full h-full absolute top-0 right-0 p-2 flex flex-col gap-2 items-end rounded-md text-gray-100 bg-black bg-opacity-30  opacity-0 group-hover:opacity-100 duration-300">
                    <a href={link} rel="noreferrer" target="_blank">
                      <HiOutlineExternalLink
                        size={30}
                        className="cursor-pointer"
                      />
                    </a>
                    <a href={github} rel="noreferrer" target="_blank">
                      <VscGithub size={30} className="cursor-pointer" />
                    </a>
                  </span>
                </div>
                <div className="my-3">
                  <a href={link} rel="noreferrer" target="_blank">
                    <h3 className="text-xl font-bold cursor-pointer hover:underline">
                      {title}
                    </h3>
                  </a>
                  <p className="text-gray-100">{descr}</p>
                </div>
                <div className="flex flex-row text-sm text-gray-100">
                  {skills.map(({ id, skill }) => (
                    <span
                      key={id}
                      className="px-2 py-0.5 mr-1.5 w-fit rounded-[4px] bg-gray-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
