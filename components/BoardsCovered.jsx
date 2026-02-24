import React from "react";
import Image from "next/image";

const boardsData = [
  {
    board: "CBSE",
    img: "/cbselogo.png",
    gradient: "from-yellow-400/20 to-yellow-600/10",
    border: "border-yellow-500/30",
    accent: "bg-yellow-500",
  },
  {
    board: "ICSE",
    img: "/icselogo.png",
    gradient: "from-blue-400/20 to-blue-600/10",
    border: "border-blue-500/30",
    accent: "bg-blue-500",
  },
  {
    board: "ISC",
    img: "/icselogo.png",
    gradient: "from-orange-400/20 to-orange-600/10",
    border: "border-orange-500/30",
    accent: "bg-orange-500",
  },
  {
    board: "IB",
    img: "/iblogo.png",
    gradient: "from-purple-400/20 to-purple-600/10",
    border: "border-purple-500/30",
    accent: "bg-purple-500",
  },
];

const BoardsCovered = () => {
  return (
    <section className="w-full px-4 py-10 bg-white">
      <div className="lg:max-w-4xl max-w-3xl mx-auto bg-white/20 shadow-sm backdrop-blur-sm sm:-mt-14 flex flex-col items-center justify-center sm:p-5 p-3 rounded-xl">

        {/* Header Section */}
        <div className="flex flex-col items-center">
          {/* <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
            Curriculum
          </span> */}
          <h1 className="text-base md:text-xl font-semibold text-white mb-6 text-center bg-[#FFB800] px-4 py-1 rounded-full w-fit">
            All Boards, #1 Platform
          </h1>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 sm:gap-4 gap-2 mx-auto lg:gap-0 w-full">
          {boardsData.map((item, index) => (
            <div
              key={index}
              className={`group relative flex flex-col items-center justify-center overflow-hidden 
                p-6 md:p-6 md:py-6 py-4 lg:max-w-50 rounded-xl border-2 transition-all duration-500 
                bg-gradient-to-br ${item.gradient} ${item.border}
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:-translate-y-2`}
            >
              {/* Animated Background Circle */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 rounded-full opacity-0 
                opacity-10 transition-opacity duration-500 ${item.accent}`}
              />

              {/* Logo Container */}
              <div className="relative w-18 h-18 md:w-24 md:h-24 sm:mb-4 mb-2 z-10">
                <div className="absolute inset-0 bg-white rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300" />
                <div className="relative w-full h-full md:p-4">
                  <Image
                    src={item.img}
                    alt={item.board}
                    fill
                    className="object-contain md:p-2 p-1"
                  />
                </div>
              </div>

              {/* Text */}
              <h3 className="relative z-10 text-sm md:text-xl font-bold text-gray-800 group-hover:text-gray-900">
                {item.board}
              </h3>

              {/* <p className="mt-2 text-xs md:text-sm text-gray-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View Curriculum
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BoardsCovered; 