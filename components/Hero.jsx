"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BoardsCovered from "./BoardsCovered";

const images = [
    "/banner1.1.png",
    "/banner2.png",
    // "/bann.png",
];

const Hero = () => {
    const [current, setCurrent] = useState(0);

    // Auto Slide
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div id="home" className="w-full">
            <div className="relative w-full h-[220px] sm:h-[350px] md:h-[430px] overflow-hidden">

                {/* Slides */}
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {images.map((img, index) => (
                        <div key={index} className="relative min-w-full h-full">
                            <Image
                                src={img}
                                alt={`banner-${index}`}
                                fill
                                priority={index === 0}
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrent(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index
                                    ? "bg-white scale-110"
                                    : "bg-white/50"
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
