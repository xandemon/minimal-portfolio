import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-zinc-800 via-neutral-900 to-neutral-900 text-white p-4"
    >
      <div className="flex flex-col justify-center max-w-screen-lg mx-auto h-full">
        <div className="text-center pb-6">
          <p className="text-4xl font-bold inline border-b-4 border-red-400">
            CONTACT
          </p>
          <p className="py-5">
            Submit this form to get in touch with me.
            <br />
            (Contacting through forms is so out-dated, but I prepared one just
            in case 😜)
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/ae8359e7-abec-4c4e-8175-757b6eca4c5b"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 border-2 bg-transparent rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Your message"
              className="p-2 border-2 bg-transparent rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="flex items-center text-white bg-gradient-to-r from-cyan-500 to-blue-500  px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-300">
              Let's talk!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
