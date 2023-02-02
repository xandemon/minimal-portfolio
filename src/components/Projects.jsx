import React from "react";
import reactPortfolio from "../assets/portfolio/reactPortfolio2.jpg";
// import installNode from "../assets/portfolio/installNode.jpg";
// import navbar from "../assets/portfolio/navbar.jpg";

const Projects = () => {
    // const projects = [
    //     {
    //         id: 1,
    //         src: arrayDestruct
    //     },
    //     {
    //         id: 2,
    //         src: installNode
    //     },
    //     {
    //         id: 3,
    //         src: navbar
    //     }
    // ];
    return (
        <div
            name="projects"
            className="w-full flex justify-center items-center bg-gradient-to-b from-zinc-800 via-neutral-900 to-neutral-900 text-white min-h-screen"
        >
            <div className="max-w-screen-lg px-4 md:px-10 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8 text-center">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6 text-gray-400">
                        Check out some of my work right here:
                    </p>
                </div>
                <div className="">
                    <div className="grid grid-cols-2 bg-opacity-50">
                        <div className="flex flex-col">
                            <div className="flex flex-row">
                                <img src={reactPortfolio} alt="" className="rounded-md w-96" />
                                <div className="flex flex-col m-2">
                                    <span className="bg-gray-500 pl-2 py-1 m-1 rounded-[4px]">
                                        React
                                    </span>
                                    <span className="bg-gray-500 pl-2 py-1 m-1 rounded-[4px]">
                                        Tailwind
                                    </span>
                                    <span className="bg-gray-500 pl-2 py-1 m-1 rounded-[4px]">
                                        Javascript
                                    </span>
                                </div>
                            </div>
                            <div className="pt-2">
                                <h3 className="text-2xl font-bold">Project Number 1</h3>
                                <p className="text-gray-400">
                                    This will be a brief description of the projects
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
