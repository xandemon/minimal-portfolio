import React from "react";
import reactPortfolio from "../assets/portfolio/reactPortfolio2.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";

const Projects = () => {
    const skills = [
        {
            id: 1,
            skill: "React"
        },
        {
            id: 2,
            skill: "Tailwind"
        },
        {
            id: 3,
            skill: "Javascript"
        }
    ];
    const projects = [
        {
            id: 1,
            src: reactPortfolio,
            title: "Project no. #",
            descr: "This is a brief description of this project."
        },
        {
            id: 2,
            src: reactPortfolio,
            title: "Project no. #",
            descr: "This is a brief description of this project."
        },
        {
            id: 3,
            src: reactPortfolio,
            title: "Project no. #",
            descr: "This is a brief description of this project."
        },
        // {
        //     id: 4,
        //     src: reactPortfolio,
        //     title: "Project no. #",
        //     descr: "This is a short description of this project."
        // }
    ];
    return (
        <div
            name="projects"
            className="flex justify-center items-center bg-gradient-to-b from-zinc-800 via-neutral-900 to-neutral-900 text-white min-h-screen"
        >
            <div className="max-w-6xl p-4 mx-auto flex flex-col justify-center w-full h-full border-blue-800 border-2">
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
                        {projects.map(({ id, src, title, descr }) => (
                            <div key={id} className="flex flex-col rounded-md shadow-lg bg-white bg-opacity-[0.03] drop-shadow-sm shadow-black w-full p-4">
                                <img src={src} alt="" className="rounded-md" />
                                <div className="my-3">
                                    <h3 className="text-xl font-bold">{title}</h3>
                                    <p className="text-gray-400">
                                        {descr}
                                    </p>
                                </div>
                                <div className="flex flex-row text-sm text-gray-300">
                                    {skills.map(({ id, skill }) => (
                                        <span key={id} className="bg-gray-600 px-2 py-0.5 mr-1.5 w-fit rounded-[4px]">
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
