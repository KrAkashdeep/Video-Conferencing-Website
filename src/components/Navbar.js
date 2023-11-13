import React from "react";
import logo from "../assets/video-call.png";
const Navbar = () => {
  return (
    <div>
      <div className=" h-[5rem] flex items-center justify-between px-4 md:max-w-[98vw] mx-auto">
        <div className="flex items-center">
          <div className="flex w-[3rem] h-[3rem] bg-white rounded-full">
            <img src={logo} alt="" className="object-cover " />
          </div>
          <div className="font-bold">
            <p className="text-[21px] pl-2">Video Call App</p>
          </div>
        </div>

        <div className="">
          <ul className="font-bold flex items-center gap-5 cursor-pointer">
            <li>About Us</li>
            <li>Product</li>
            <li>Blogs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
