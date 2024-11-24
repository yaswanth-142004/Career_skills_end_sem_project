import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";

const Content = () => {
  const typedElement = useRef(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const options = {
      strings: ["AI Financial Services", "AI Investment Solutions", "AI-Driven Wealth Management"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="text-white bg-gray-900">
      <div className="flex flex-col text-center justify-center w-full h-screen mt-[-96px] mx-auto max-w-[800px]">
        {/* Header Section */}
        <p className="text-lime-300 font-bold p-2 md:text-3xl sm:text-2xl text-xl animate-pulse">
          Welcome to Our Company
        </p>
        <h1 className="font-extrabold md:text-6xl sm:text-5xl text-3xl md:py-6 drop-shadow-lg">
          Your Partner in <span className="text-lime-500">AI-Driven Success</span>
        </h1>

        {/* Typing Effect Section */}
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold text-gray-300">
            Learn more about
          </p>
          <span
            className="md:text-5xl sm:text-3xl text-xl font-bold pl-2 text-lime-400"
            ref={typedElement}
          />
        </div>

        {/* Button Section */}
        <button
          onClick={() => navigate("/about")} // Navigate to the "About" page
          className="bg-lime-600 text-black mx-auto py-3 px-6 my-6 font-medium rounded-md shadow-md hover:shadow-lg hover:bg-lime-700 transform hover:scale-105 transition-all duration-300"
        >
          Get Started
        </button>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-base mt-4">
          Empowering businesses and individuals with cutting-edge AI financial solutions.
        </p>
      </div>
    </div>
  );
};

export default Content;
