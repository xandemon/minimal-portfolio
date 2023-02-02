import React from 'react';
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from '../assets/portfolio/navbar.jpg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: arrayDestruct
        },
        {
            id: 2,
            src: installNode
        },
        {
            id: 3,
            src: navbar
        }
    ];
  return (
    <div
    name="projects" className="w-full flex justify-center items-center bg-gradient-to-b from-zinc-800 via-neutral-900 to-neutral-900 text-white min-h-screen">
        <div
        className="max-w-screen-lg px-4 md:px-10 mx-auto flex flex-col justify-center w-full h-full">
            <div
            className="pb-8 text-center">
                <p
                className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
                <p
                className="py-6 text-gray-400">Check out some of my work right here:</p>
            </div>
            <div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    projects.map(({id, src}) => (
                        <div
                        key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                            src={src} alt="" className="rounded-md hover:scale-105 duration-200" />
                            <div
                            className="flex items-center justify-center">
                                <button className="w-1/2 px-6 py-3 m-1 hover:scale-105 duration-500">Demo</button>
                                <button className="w-1/2 px-6 py-3 m-1 hover:scale-105 duration-500">Code</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
};

export default Projects;