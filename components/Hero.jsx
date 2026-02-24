"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BoardsCovered from "./BoardsCovered";
import Link from "next/link";

const images = [
  { img: "/banner/banner1.png", route: "/#special-courses" },
  { img: "/banner/banner2.png", route: "/#about" },
  { img: "/banner/banner3.png", route: "/#whychoseus" },
  // { img: "/banner2.png", route: "/#special-courses" },
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
    <div id="home" className="w-full">
      <div className="relative w-full aspect-[1920/650] overflow-hidden">

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
                className="object-cover"
              />
            </Link>
          ))}
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 transition-all duration-300 rounded-full ${current === index
                  ? "w-4 bg-blue-600"
                  : "w-2 bg-white/50"
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