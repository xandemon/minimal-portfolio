import React from "react";
import sandeshPortfolio from "../assets/portfolio/SandeshPortfolio.png";
import modernDigitalClock from "../assets/portfolio/ModernDigitalClock.png";
import modernAnalogClock from "../assets/portfolio/ModernAnalogClock.png";
import mobileCalculator from "../assets/portfolio/MobileCalculator.png";
import realtimeChatWebApp from "../assets/portfolio/RealtimeChatWebApp.png";
import { VscGithub } from "react-icons/vsc";
import { HiOutlineExternalLink } from "react-icons/hi";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: sandeshPortfolio,
      title: "Personal Portfolio Website",
      descr: "Responsive minimal portfolio website you're on right now",
      link: "https://sandeshkatwal.com.np",
      github: "https://github.com/deadclown09/Personal-Portfolio-Website",
      skills: ["React", "Tailwind", "Javascript"],
    },

    {
      id: 2,
      src: modernAnalogClock,
      title: "Modern Analog Clock",
      descr: "A modern dark-themed analog clock with animations",
      link: "https://analogclock-sandesh.netlify.app",
      github: "https://github.com/deadclown09/Modern-Analog-Clock",
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 3,
      src: mobileCalculator,
      title: "Mobile Calculator Replica",
      descr: "A replication of my smartphone's calculator as webapp",
      link: "https://mobilecalculator-sandesh.netlify.app",
      github: "https://github.com/deadclown09/Mobile-Calculator-Replica",
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 4,
      src: modernDigitalClock,
      title: "Dynamic Digital Clock",
      descr:
        "A mobile-friendly modern digital clock with dynamic theme support",
      link: "https://digitalclock-sandesh.netlify.app",
      github: "https://github.com/deadclown09/Dynamic-Digital-Clock",
      skills: ["HTML", "CSS", "Javascript"],
    },
    {
      id: 5,
      src: realtimeChatWebApp,
      title: "Realtime Chat Web App",
      descr:
        "A web-based chat application with realtime data syncing in backend",
      link: "https://github.com/deadclown09/Realtime-Chat-WebAppp",
      github: "https://github.com/deadclown09/Realtime-Chat-WebAppp",
      skills: ["React", "TypeScript", "SASS", "Firebase"],
    },
  ];
  return (
    <div
      name="projects"
      className="flex justify-center items-center bg-gradient-to-b from-zinc-800 via-neutral-900 to-neutral-900 w-full text-white min-h-screen"
    >
      <div className="w-[85vw] p-2 md:p-4 mx-auto flex flex-col justify-center h-full">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-red-400">
            PROJECTS
          </p>
          <p className="py-6 text-gray-400">
            Check out some of my main projects here.
            <br />
            (You can find all other minor or ongoing projects in my GitHub
            profile 🤓)
          </p>
        </div>
        <div>
          {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-7"> */}
          <div className="flex flex-wrap justify-center items-center gap-8">
            {projects.map(({ id, src, title, descr, link, github, skills }) => (
              <div
                key={id}
                className="flex flex-col rounded-md shadow-md hover:scale-[1.02] duration-300 bg-white bg-opacity-[0.03]  drop-shadow shadow-zinc-700 min-w-[280px] w-[30%] p-3"
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
                    <h3 className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-transparent bg-clip-text text-base font-bold cursor-pointer hover:underline">
                      {title}
                    </h3>
                  </a>
                  <p className="text-sm text-gray-100">{descr}</p>
                </div>
                <div className="flex flex-row text-sm text-gray-100">
                  {console.log(skills)}
                  {skills.map((skill) => (
                    <span
                      key={id}
                      className="px-2 py-0.5 mr-1.5 w-fit rounded-[4px] text-xs font-semibold text-black bg-blue-300"
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
