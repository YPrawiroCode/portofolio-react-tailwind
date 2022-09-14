import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";

const Portfolio = () => {
  return (
    <div className="max-w-4xl mx-auto justify-center py-12" id="tech">
      <p className="text-2xl text-black text-center sm:text-4xl pt-4 font-bold">
        Project Portfolio
      </p>
      <div className="flex flex-wrap justify-center pt-2">
        <a
          href="https://yprawirocode.github.io/order-pizza/"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
            <FaPizzaSlice
              color="#FFC35A"
              className="mx-auto text-2xl sm:text-4xl"
            />
            <p className="mt-6 text-xl sm:text-xl font-semibold text-center">
              Order Pizza
            </p>
            <p className="text-xl sm:text-xl font-semibold text-center">
              Click Me
            </p>
          </div>
        </a>
        <a
          href="https://dashboard-yprawirocode.netlify.app"
          rel="noreferrer"
          target="_blank"
        >
          <div className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
            <MdSpaceDashboard
              color="#00FFFF"
              className="mx-auto text-2xl sm:text-4xl"
            />
            <p className="mt-3 text-l sm:text-l font-semibold text-center">
              Simple Dashboard
            </p>
            <p className="text-l sm:text-l font-semibold text-center">
              Click Me
            </p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
