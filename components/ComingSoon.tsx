import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";

const ComingSoon = () => {
    return (
        <div className="relative w-full min-h-dvh overflow-hidden bg-white flex flex-col items-center justify-center gap-10 px-4 text-center">

            {/* 🔵 Subtle Gradient Blobs */}
            <div className="absolute -top-32 -left-32 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 -right-32 w-72 h-72 bg-indigo-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />

            {/* Logo */}
            <div className="absolute top-0 bg-white rounded-b-3xl px-6 py-2 shadow-md">
                <img src="/logoss.png" className="w-28 sm:w-36" alt="logo" />
            </div>

            {/* Icon */}
            <img src="/thumbsup.png" className="w-16 sm:w-20" alt="thumbs up" />

            {/* Text Content */}
            <div className="flex flex-col items-center gap-4 max-w-3xl">
                <h3 className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                    We are
                </h3>

                <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl text-blue-600 leading-tight">
                    Cooking Our Website.
                </h1>

                <p className="text-xs sm:text-base text-gray-600 uppercase mt-2">
                    We are going to launch our website very soon.
                </p>
            </div>

            {/* Instagram Button */}
            <Link
                href="https://www.instagram.com/scoreonacademy?utm_source=qr&igsh=cHhweHZveDRtZmQ1"
                target="_blank"
                className="relative mt-4 flex items-center gap-4 bg-[#181A3B] px-6 sm:px-10 py-3 sm:py-4 rounded-full shadow-xl text-white w-fit hover:scale-105 transition-transform"
            >
                <div className="absolute left-2 bg-white rounded-full p-2">
                    <BsInstagram className="text-[#181A3B] text-lg" />
                </div>
                <span className="sm:pl-6 pl-8 text-sm font-medium">Stay Tuned</span>
            </Link>

            {/* Decorative Images (hidden on mobile) */}
            <img
                src="/confetti.png"
                alt="confetti"
                className="hidden sm:block w-20 absolute bottom-28 left-36"
            />
            <img
                src="/shape2.png"
                alt="shape"
                className="hidden sm:block w-20 absolute bottom-28 right-36"
            />
        </div>
    );
};

export default ComingSoon;
