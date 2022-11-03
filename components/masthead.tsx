import React from "react";
import Image from "next/image";

const Masthead: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="./masthead-bg1.mp4" type="video/mp4" />
      </video>
      <div
        className={"flex-grow-0 pt-10 transition-opacity duration-1000"}
      ></div>
      <div className="p-12 font-bold z-11 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.8)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl ">asvanyviz2</h1>
        <h2 className="mb-2 text-2xl">
          <span>the vault is opening,</span> <span>brace yourself</span>
        </h2>
      </div>
    </div>
  );
};

export default Masthead;
