import React from 'react';

const Contact = () => {
    return (
        <div
            name="contact" className="w-full h-screen bg-gradient-to-br from-black to-gray-800 text-white p-4">
            <div
                className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div
                    className="pb-8">
                    <p
                    className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
                    <p
                    className="py-6">Submit this form to get in touch with me.</p>
                </div>
                <div
                className="flex justify-center items-center">
                    <form action=""
                    className="flex flex-col w-full md:w-1/2">
                        <input
                            type="text" name="name" placeholder="Enter your name"
                            className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none" />
                        <input
                            type="text" name="email" placeholder="Enter your email"
                            className="my-4 p-2 border-2 bg-transparent rounded-md text-white focus:outline-none" />
                        <textarea
                            name="message" rows="10" placeholder="Your message"
                            className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none">
                        </textarea>
                        <button
                            className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500  px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">
                            Let's talk!
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;