import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import javascript from "../assets/experience/javascript.png";
import reactImage from "../assets/experience/react.png";
import github from "../assets/experience/github.png";
import tailwind from "../assets/experience/tailwind.png";

const Techs = () => {
  const techs = [
    {
      id: 1,
      src: html,
      alt: "HTML5",
      title: "HTML",
      style: "shadow-orange-500/20",
    },
    {
      id: 2,
      src: css,
      alt: "CSS3",
      title: "CSS",
      style: "shadow-blue-500/20",
    },
    {
      id: 3,
      src: javascript,
      alt: "Javascript",
      title: "Javascript",
      style: "shadow-yellow-500/20",
    },
    {
      id: 4,
      src: reactImage,
      alt: "React JS",
      title: "React",
      style: "shadow-blue-500/20",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-500/20",
    },
    {
      id: 6,
      src: github,
      alt: "GitHub",
      title: "GitHub",
      style: "shadow-gray-400/20",
    },
  ];

  return (
    <div
      name="techs"
      className="flex items-center bg-gradient-to-b from-neutral-900 via-neutral-900 to-zinc-800 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center">
          <p className="text-4xl font-bold inline border-b-4 border-red-400 p-2">
            TECHS
          </p>
          <p className="py-6 text-gray-500">
            Below are some tools/technologies that I use very often.
            <br />
            (I wonder if I should include other skills like Photoshop, WordPress
            too 🤔)
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {techs.map(({ id, src, alt, style }) => (
            <div
              key={id}
              className={`flex flex-col justify-center items-center shadow-lg hover:scale-110 duration-300 rounded-full w-20 h-20 md:w-28 md:h-28 m-3 md:m-5 opacity-80 hover:opacity-100 ${style}`}
            >
              <img src={src} alt={alt} className="w-11 md:w-16 mx-auto" />
              {/* <p className="text-gray-400 mt-1">{title}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Techs;
