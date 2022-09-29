import React, { useState } from "react";
import Navbar from "./Navbar";
import { MdOutlineLocationOn } from "react-icons/md";
import {
  BsFillTelephoneInboundFill,
  BsFillBellFill,
  BsFillMicFill,
} from "react-icons/bs";
const HomePage = () => {
  const [currentLocation, setCurrentLocaton] = useState("Connaught Place");
  
 
  function play() {
    var audio = document.getElementById('a1');
    audio.play();
  }

  return (
    <div className="flex flex-col h-screen bg-gray-200">
      <div className="flex w-3/4 pt-8 ml-4 gap-1">
        <MdOutlineLocationOn className="lg:md:text-4xl  text-3xl lg:md:mt-0 mt-0.5 text-gray-500" />
        <p className="lg:md:text-3xl text-xl font-black text-gray-500 hover:underline underline-offset-4">
          {currentLocation}
        </p>
      </div>
      <div className="mx-auto mt-24">
        <div className="flex">
          <div className="cursor-pointer border bg-[#b59e0e] hover:bg-[#b59e0e]/80 w-44 h-44 flex items-center justify-center rounded-tl-full">
            <BsFillTelephoneInboundFill className="lg:md:text-4xl text-3xl lg:md:mt-6 text-gray-100 ml-8" />
          </div>
          <div onClick={play} className="cursor-pointer border bg-[#a157f9] hover:bg-[#a157f9]/80 w-44 h-44 flex items-center justify-center rounded-tr-full">
            <BsFillBellFill className="lg:md:text-4xl  text-3xl lg:md:mt-6 text-gray-100 mr-4" />
            <audio id='a1' src='/sirenSound.mp3'></audio>
          </div>
        </div>
        <div className="flex">
          <div className="cursor-pointer border bg-[#53b175] hover:bg-[#53b175]/80 w-44 h-44 flex items-center justify-center rounded-bl-full">
            <BsFillMicFill className="lg:md:text-4xl  text-3xl lg:md:mt-0 text-gray-100 ml-8" />
          </div>
          <div className="cursor-pointer border bg-[#f94c57] hover:bg-[#f94c57]/80 w-44 h-44 flex items-center justify-center rounded-br-full">
            <span className="lg:md:text-4xl  text-3xl lg:md:mt-0 text-gray-100 mr-8">
              SOS
            </span>
          </div>
         
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default HomePage;
