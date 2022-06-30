import React from "react";
import { FaNodeJs, FaReact, FaLinux, FaGitAlt } from "react-icons/fa";
import { SiPostgresql, SiMongodb } from "react-icons/si";

const Skill = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
        Tech I use
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaNodeJs color="#A3E635" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            NodeJS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiPostgresql
            color="#0891B2"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            PostgreSQL
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <SiMongodb color="#84CC16" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            MongoDB
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaReact color="#0891B2" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            ReactJS
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaLinux color="black" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Linux
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaGitAlt color="#EF4444" className="mx-auto text-2xl sm:text-4xl" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">
            Git
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
