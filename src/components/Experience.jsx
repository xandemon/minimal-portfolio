import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: reactImage,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        }
    ]

    return (
        <div
        name="experience" className="flex items-center bg-gradient-to-b from-neutral-900 via-neutral-900 to-zinc-800 w-full min-h-screen">
            <div
            className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div className="text-center">
                    <p
                    className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">Experience</p>
                    <p
                    className="py-6 text-gray-500">These are the technologies I use:</p>
                </div>
                <div
                className="w-full grid grid-cols-2 sm:grid-cols-3 gap-10 text-center p-8 sm:px-0">
                    {
                        techs.map(({id, src, title, style}) => (
                            <div
                            key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4 text-gray-400">{title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Experience;