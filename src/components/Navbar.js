import React from "react";
import logo from "../assets/video-call.png";

const Navbar = () => {
  return (
    <div className="bg-gray-100">
      <div className="h-[5rem] flex items-center justify-between px-4 md:max-w-[98vw] mx-auto">
        <div className="flex items-center">
          <div className="w-[3rem] h-[3rem] bg-white rounded-full flex-shrink-0">
            <img src={logo} alt="Logo" className="object-cover w-full h-full" />
          </div>
          <div className="font-bold pl-2">
            <p className="text-[18px] sm:text-[21px]">Video Call App</p>
          </div>
        </div>

        <div>
          <ul className="hidden sm:flex font-bold items-center gap-5 cursor-pointer">
            <li className="hover:text-blue-500 transition-colors duration-200">
              About Us
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              Product
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              Blogs
            </li>
          </ul>

          <div className="sm:hidden flex items-center">
            <button
              className="text-black hover:text-blue-500 focus:outline-none"
              aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
