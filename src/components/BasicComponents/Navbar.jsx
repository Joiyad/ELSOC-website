import React, { useState } from "react";

const Navbar = () => {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between flex-wrap bg-gray-800 bg-opacity-20 backdrop-blur-sm px-16 py-3 z-20">
      <div className="text-2xl font-semibold items-center flex-shrink-0 text-white ml-2">
        {/* <img alt="logo" src="/elsoc.png" width="50" height="50"/> */}
        ELSOC
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full flex justify-center lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex gap-x-8 lg:mr-12 font-k2d">
          <a
            href="/"
            className="block mt-4 hover:font-black hover:drop-shadow-4xl hover:transition-all lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            HOME
          </a>
          <a
            href="/about"
            className="block mt-4 hover:font-black  hover:drop-shadow-4xl hover:transition-all lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
          >
            ABOUT
          </a>
          <a
            href="/notes"
            className="block mt-4  hover:font-black hover:drop-shadow-4xl hover:transition-alllg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            NOTES
          </a>
          <a
            href="/contact"
            className="block mt-4  hover:font-black hover:drop-shadow-4xl hover:transition-alllg:inline-block lg:mt-0 text-teal-200 hover:text-white"
          >
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
