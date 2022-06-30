import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

const About = (prop) => {
  return (
    <div className="max-w-4xl mt-20 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center ">
        &#10100; Hello World &#10101;
      </p>
      <p className="text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4">
        IT Staff support and software engineer as FullStack.
      </p>
      <p className="text-base md:text-xl text-center text-gray-600 leading-relaxed mt-4">
        Experience 3 years and more since 2017.
      </p>

      <ScrollIntoView selector="#tech">
        <div className="mx-auto p-20">
          <FaChevronDown className="animate-bounce mx-auto text-3xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
};

export default About;
