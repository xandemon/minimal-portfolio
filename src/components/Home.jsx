import React from 'react'
import mainCharacter from "../assets/mainCharacter.png"
import { TiArrowRight } from 'react-icons/ti'

const Home = () => {
    return (
        <div
        name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
            <div
            className="max-w-screen-lg mx-auto h-full flex flex-col px-4 justify-center items-center md:flex-row">
                <div
                class="flex flex-col justify-center h-full">
                    <h2
                    className="text-4xl md:text-7xl font-bold text-white">I'm a Full stack Developer</h2>
                    <p
                    className="text-gray-500 py-4 max-w-md">
                        Hey there!<br/>I'm Sandesh Katwal, a passionate Frontend Developer on a mission to build user-friendly and visually appealing websites. <br/>
                        I am excited to share my portfolio with you and hope you enjoy my work as much as I enjoyed creating it. Let's build something amazing together!
                    </p>
                    <div>
                        <button className="group text-white flex items-center w-fit px-6 py-3 my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-[360deg] duration-[500ms]"><TiArrowRight size={25} className="ml-1" /></span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={mainCharacter} alt="Sandesh Katwal" className="rounded-full mx-auto w-1/2 md:w-[400px]" />
                </div>
            </div>
        </div>
    );
};

export default Home;