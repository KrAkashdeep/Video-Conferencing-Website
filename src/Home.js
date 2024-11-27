import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const Home = () => {
  const [RoomCode, setRoomCode] = useState("");
  const [RoomPass, setRoomPass] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="relative flex-1 flex items-center justify-center bg-gray-100">
        <div className="absolute inset-0 h-full w-full flex overflow-hidden bg-cover bg-center bg-no-repeat" />
        <div className="lg:flex lg:pt-20 flex-col items-center justify-center relative z-10 px-6 md:max-w-[90vw] m-auto bg-white rounded-lg shadow-md w-[90%] sm:w-[70%] lg:w-[50%]">
          <div className="flex flex-col items-center justify-center pb-8">
            <h1 className="text-[36px] sm:text-[50px] md:text-[60px] font-bold text-center pt-6">
              Video Chat App
            </h1>
          </div>
          <form
            onSubmit={submitCode}
            className="md:pt-8 flex flex-col items-center justify-center w-full"
          >
            <div className="flex flex-col justify-center items-center w-full">
              <label className="text-[20px] sm:text-[25px] md:text-[30px] font-bold pt-6 text-center">
                Enter Room Code
              </label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
                className="py-2 px-4 rounded-full shadow-md max-w-[14rem] w-full mt-4 outline-none"
              />
              <label className="text-[20px] sm:text-[25px] md:text-[30px] font-bold pt-4 mt-6 text-center">
                Enter Room Password
              </label>
              <input
                type="text"
                required
                placeholder="Enter Room Password"
                value={RoomPass}
                onChange={(e) => setRoomPass(e.target.value)}
                className="py-2 px-4 rounded-full shadow-md max-w-[14rem] w-full mt-4 outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold w-[7rem] sm:w-[10rem] rounded-full py-2 mt-6 transition duration-200 ease-in-out"
            >
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
