import React from "react";
import { FaArrowRight, FaFileDownload } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="max-w-xl w-full text-center m-auto pt-36 pb-10">
      <h1 className="text-4xl sm:text-4xl pl-8">
        Interested in working together?
      </h1>
      <div className="flex space-x-4 flex-wrap flex-row justify-center pt-2 pl-9">
        <a href="mailto:yusufprawiro14@gmail.com">
          <span className="mt-6 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <span className="mr-3">Get in touch</span>
              <FaArrowRight color="white" />
            </div>
          </span>
        </a>
        <p className="flex flex-wrap pt-9">Or</p>
        <a href="https://drive.google.com/file/d/159NgjnTEIVx3mFJkZYfdSMviN2KHRr1R/view?usp=sharing">
          <span className="mt-6 inline-block w-auto bg-black font-display text-white text-base md:text-xl py-4 px-7 cursor-pointer">
            <div className="flex flex-row items-center">
              <span className="mr-3">Download Resume</span>
              <FaFileDownload color="white" />
            </div>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
