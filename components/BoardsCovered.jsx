import React from "react";
import Image from "next/image";

const boardsData = [
  { board: "CBSE", img: "/cbselogo.png", color: "yellow-500", color2: "yellow-200" },
  { board: "ICSE", img: "/icselogo.png", color: "blue-500",  color2: "blue-200" },
  { board: "ISC", img: "/icselogo.png", color: "orange-500" ,  color2: "orange-200"},
  { board: "IB", img: "/iblogo.png", color: "purple-500" ,  color2: "purple-200"},
];

const classes = "from-yellow-500 from-blue-500 from-orange-500 from-purple-500 to-yellow-200 to-blue-200 to-orange-200 to-purple-200"
const BoardsCovered = () => {
  return (
    <div className="w-full py-6 rounded-md px-6 md:px-16 flex flex-col justify-center items-center  max-w-5xl mx-auto bg-white/30 backdrop-blur-sm shadow-md -mt-6 ">
      <h1 className="text-base md:text-xl font-semibold text-white mb-6 text-center bg-[#FFB800] px-4 py-1 rounded-full w-fit">
        Boards Covered
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {boardsData.map((item, index) => (
          <div
            key={index}
            className={`group w-full relative rounded-md p-8 py-5 bg-gradient-to-br from-${item.color} to-${item.color2} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden`}
          >
            {/* Soft Glow Effect */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-md rounded-2xl"></div>

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center gap-3">
              <div className="relative w-20 h-20">
                <Image
                  src={item.img}
                  alt={item.board}
                  fill
                  className="object-contain bg-white rounded-full"
                />
              </div>

              <h2 className="text-gray-600 text-base font-semibold tracking-wide">
                {item.board}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardsCovered;
