import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Content = () => {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["AI Financial Services", "AI Investment Services"],
      typeSpeed: 120,
      backSpeed: 140,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy(); // Cleanup on component unmount
    };
  }, []);

  return (
    <div className="text-white">
      <div className="flex flex-col text-center justify-center w-full h-screen mt-[-96px] mx-auto max-w-[800px]">
        <p className="text-lime-600 font-bold p-2 md:text-3xl sm:text-2xl text-xl">
          welcome to our company 
        </p>
        <h1 className="font-bold md:text-6xl sm:text-5xl text-3xl md:py-6">
          We provide AI Financial Services
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-3xl text-xl font-bold">
            Learn more about us
            
          </p>
          <span
            className="md:text-5xl sm:text-3xl text-xl font-bold pl-2"
            ref={typedElement}
          />
        </div>
        <button className="bg-lime-600 text-black mx-auto py-3 my-6 font-medium w-[150px] rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Content;
