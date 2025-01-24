"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsGrid3X3GapFill } from "react-icons/bs";
function Header({isRunning}) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const toggleFullscreen = () => {
    const element = document.documentElement; // The whole document
    if (isFullscreen) {
      document.exitFullscreen(); // Exit fullscreen
    } else {
      element.requestFullscreen(); // Request fullscreen
    }
    setIsFullscreen(!isFullscreen);
  };
  return (
    <div className={`absolute top-0 left-0 w-screen z-50 p-6 ${!isRunning && "bg-black text-white"} `}>
      <div className="flex items-center justify-center relative">
      <button className="absolute top-2 left-2" onClick={toggleFullscreen}>
        <Image src={"/prc-official.png"} width={100} height={100} alt=".." />
        </button>
        <div className="flex flex-col items-center gap-2 mt-4">
          <h1 className={`mt-1 text-3xl font-extrabold leading-5 `}>
            Hello Desk
          </h1>
          <p className="text-xs uppercase text-neutral-500">
            Providence College of Engineering
          </p>
        </div>

       
        {/* </button> */}
      </div>
    </div>
  );
}

export default Header;
