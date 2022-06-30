import React from "react";
import { FaGithub, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="py-5 border-t-3/2">
      <div className="flex justify-center mt-4">
        <a
          className="text-xl m-1 p-1 sm:m-2text-xl sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
          href="https://github.com/YPrawiroCode/"
        >
          <FaGithub />
          <span class="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2text-xl sm:m-2 sm:p-2 text-gray-800 hover:bg-cyan-500 rounded-full hover:text-white transition-colors duration-300"
          href="https://www.linkedin.com/in/yprawiro/"
        >
          <FaLinkedin />
          <span class="sr-only">LinkedIn</span>
        </a>
        <a
          className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-black-500 hover:bg-green-200 rounded-full hover:text-white transition-colors duration-300"
          href="https://mailto:yusufprawiro14@gmail.com"
        >
          <FaEnvelope />
          <span class="sr-only">Email</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4">
          Made with{" "}
          <span className="mr-2" role="link" aria-label="Heart">
            React and Tailwind
          </span>
          By{" "}
          <a
            className="text-blue-500 hover:underline"
            href="https://mailto:yusufprawiro14@gmail.com"
          >
            Yusuf Prawiro
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
