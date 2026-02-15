"use client";

import Image from "next/image";

export default function TeacherSpotlight() {
    return (
        <section id="tutors" className="relative w-full md:py-24 py-16 md:my-12 bg-blue-50 overflow-hidden">

            {/* Decorative Background Blobs */}
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>

            <div className="absolute top-20 right-20 w-16 h-16 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute sm:bottom-44 bottom-40 sm:left-0 -left-3 w-12 h-12 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-1/3 left-[41.5%] w-8 h-8 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-[22%] w-6 h-6 bg-blue-400 rounded-full "></div>
            <div className="absolute -bottom-2 right-[72%] w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>

            <div className="relative max-w-6xl mx-auto md:px-6 px-4 lg:px-12 grid lg:grid-cols-2 gap-20 items-center">

                {/* LEFT - IMAGE SIDE */}
                <div className="relative flex justify-center">

                    {/* Experience Badge */}
                    <div className="absolute -top-6 z-10 sm:-left-6 -left-4 bg-gray-50 text-black border border-gray-400 sm:px-5 px-3 sm:py-3 py-2 rounded-2xl shadow-lg">
                        <p className="text-sm font-medium">10+ Years Experience</p>
                    </div>

                    {/* Image Container */}
                    <div className="relative w-[300px] h-[400px] md:w-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-md border border-gray-100">
                        <Image
                            src="/faculty3.jpeg"  // place teacher image in public folder
                            alt="Teacher"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* <p className="uppercase absolute -right-8 bottom-40 font-bold text-3xl rotate-90 text-transparent stroke-text">
                        Tushar Vaid
                    </p> */}

                    {/* Decorative Floating Card */}
                    <div className="absolute sm:-bottom-6 -bottom-8 sm:-right-6 -right-0 bg-white p-4 rounded-2xl shadow-lg border-gray-400 border">
                        <p className="text-sm font-semibold text-slate-900">⭐ 4.9 Rating</p>
                        <p className="text-xs text-slate-500">500+ Happy Students</p>
                    </div>
                </div>

                {/* RIGHT - CONTENT SIDE */}
                <div>

                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                        Meet Your Mentor
                    </h2>

                    <p className="mt-6 md:text-lg text-slate-500 leading-relaxed">
                        Dedicated to helping students achieve academic excellence with
                        personalized guidance and structured learning. With over a decade
                        of teaching experience, our mentor ensures conceptual clarity,
                        exam-focused preparation, and continuous performance improvement.
                    </p>

                    <div className="mt-8 space-y-4">

                        <div className="flex items-start gap-3">
                            <span className="sm:w-6 h-6 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                                ✓
                            </span>
                            <p className="text-slate-700">
                                IIT-JEE & Competitive Exam Focused Preparation
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="sm:w-6 h-6 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                                ✓
                            </span>
                            <p className="text-slate-700">
                                Strong foundation building in Maths & Science
                            </p>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="sm:w-6 h-6 w-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm">
                                ✓
                            </span>
                            <p className="text-slate-700">
                                Personalized doubt-solving & performance tracking
                            </p>
                        </div>

                    </div>

                    <button className="mt-10 mx-auto w-fit px-8 py-4 primary-bg text-white rounded-xl shadow-lg hover:bg-orange-600 transition duration-300 hover:scale-105">
                        Schedule a Demo Class
                    </button>

                </div>
            </div>
        </section>
    );
}
