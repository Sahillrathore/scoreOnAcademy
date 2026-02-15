"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BoardsCovered from "./BoardsCovered";
import Link from "next/link";

const images = [
  { img: "/banner1.1.png", route: "/#about" },
  { img: "/banner2.png", route: "/#special-courses" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="w-full bg-gray-100">
      {/* aspect-[16/9] mobile par image ko natural rakhega.
         md:aspect-[21/9] desktop par wide dikhayega.
         Height ab fix nahi hai, width ke saath change hogi.
      */}
      <div className="relative w-full aspect-[21/6] overflow-hidden">

        {/* Slides */}
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((item, index) => (
            <Link 
              href={item.route} 
              key={index} 
              className="relative min-w-full h-full block"
            >
              <Image
                src={item.img}
                alt={`banner-${index}`}
                fill
                priority={index === 0}
                // 'object-contain' image ko poora dikhayega bina kate
                // 'w-full h-full' width adjust karne ke liye
                className="object-contain md:object-cover bg-white" 
              />
            </Link>
          ))}
        </div>

        {/* Navigation Dots - Positioning adjusted for dynamic height */}
        <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 md:h-2 transition-all duration-300 rounded-full ${
                current === index 
                ? "w-6 md:w-8 bg-blue-600" 
                : "w-1.5 md:w-2 bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>

      <BoardsCovered />
    </div>
  );
};

export default Hero;