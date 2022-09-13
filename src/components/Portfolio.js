import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { SiPostgresql, SiMongodb } from "react-icons/si";

const Portfolio = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
        Project Portfolio
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
          <FaPizzaSlice
            color="#FFC35A"
            className="mx-auto text-2xl sm:text-4xl"
          />
          <p className="mt-6 text-xl sm:text-xl font-semibold text-center">
            Order Pizza
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
