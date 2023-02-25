import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="flex justify-center items-center w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg px-4 max-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-400">
            About
          </p>
        </div>
        <div className="text-xl pt-3 pb-3">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti
            debitis cupiditate dicta corrupti facilis eum odio ipsam? Sint
            maxime eligendi distinctio facere quo doloribus enim doloremque!
            Odio praesentium consequuntur est?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
