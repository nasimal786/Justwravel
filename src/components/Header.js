import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="text-gray-400 bg-cyan-950 body-font shadow-lg">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-cyan-950 p-2 bg-gray-100 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <Link to={"/Justwravel"}>
              <span className="ml-3 hover:text-gray-400 text-xl cursor-pointer">
                Assignment
              </span>
            </Link>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              to={"/Justwravel"}
              className="mr-5 text-white hover:text-gray-400 cursor-pointer"
            >
              Home
            </Link>
            <Link className="mr-5 text-white hover:text-gray-400 cursor-pointer">
              About Us
            </Link>
            <Link className="mr-5 text-white hover:text-gray-400 cursor-pointer">
              Careers
            </Link>
            <Link className="mr-5 text-white hover:text-gray-400 cursor-pointer">
              Contact Us
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 text-cyan-950 border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 hover:text-gray-100 rounded text-base font-bold mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
