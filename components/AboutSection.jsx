"use client";

import Image from "next/image";
import { useState } from "react";
import { BiCheck, BiUserCheck, BiUserPlus } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuUserRoundPen } from "react-icons/lu";

export default function AboutSection() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section id="about" className="relative w-full  py-20 px-6 md:px-16 overflow-hidden my-12">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 justify-center items-center">

                    {/* LEFT SIDE */}
                    <div className="relative flex justify-center lg:justify-start w-fit">

                        {/* Dots top left */}
                        <div className="absolute -top-10 -left-10 grid grid-cols-8 gap-3 opacity-40">
                            {[...Array(64)].map((_, i) => (
                                <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="relative w-[480px] h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/rocket-kid.jpg"   // <-- put your rocket image in public
                                alt="Student"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Video Card */}
                        <div className="absolute -top-10 -right-12 bg-white rounded-2xl shadow-xl p-4 w-[280px] animate-float">

                            <div className="relative w-full h-[140px] rounded-xl overflow-hidden">
                                <Image
                                    src="/video-thumbnail.png"  // <-- 1-on-1 thumbnail
                                    alt="1 on 1 Live"
                                    fill
                                    className="object-cover"
                                />

                                {/* Play Button */}
                                <button
                                    onClick={() => setOpen(true)}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition">
                                        <FaPlay className="text-white ml-1" />
                                    </div>
                                </button>
                            </div>

                            {/* Skeleton lines */}
                            <div className="mt-3 space-y-2">
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                                <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                            </div>
                        </div>

                        {/* Enrolled Card */}
                        <div className="absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                                <LuUserRoundPen size={27} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">200+</h2>
                                <p className="text-gray-500">Enrolled Learners</p>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        <p className="text-gray-500 text-sm font-medium uppercase tracking-wide mb-4">
                            About Us
                        </p>

                        <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-6">
                            India's best{" "}
                            <span className="secondary-text relative">
                                online learning
                                <span className="absolute left-0 bottom-1 w-full h-1 bg-green-300 -z-10"></span>
                            </span>{" "}
                            platform for quality education
                        </h1>

                        <p className="text-gray-500 mb-8 max-w-lg">
                            We are committed to providing personalised online classes that
                            cater to the unique learning needs of each student.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Expert Trainers",
                                "1-on-1 Live Tuition",
                                "Flexible Timings",
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                        <BiCheck size={16} className="text-green-600" />
                                    </div>
                                    <p className="text-lg text-gray-800 font-semibold">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Circle */}
                <div className="absolute right-24 bottom-20 w-24 h-24 border-5 border-green-400 rounded-full opacity-60"></div>

                <div className="absolute -right-24 top-36 w-44 h-44 border-20 border-green-400 rounded-full opacity-60"></div>
            </section>

            {/* VIDEO MODAL */}
            {open && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
                    <div className="relative w-[90%] md:w-[800px] aspect-video bg-black rounded-xl overflow-hidden">

                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-3 right-3 z-50 bg-white rounded-full p-2 shadow"
                        >
                            <IoClose size={20} />
                        </button>

                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/-j0rjlfmDx4?autoplay=1"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}

            {/* Floating Animation */}
            <style jsx>{`
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </>
    );
}
