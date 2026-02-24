"use client";

import Image from "next/image";
import Link from "next/link";
import { BiCheckCircle } from "react-icons/bi";
import { BsRainbow } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { SiTarget } from "react-icons/si";

export default function TeacherSpotlight() {
    return (
        <section id="tutors" className="relative w-full md:py-24 py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">

            {/* Decorative Elements */}
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-40"></div>

            {/* Floating accent circles */}
            <div className="hidden lg:block absolute top-20 right-10 w-4 h-4 bg-orange-400 rounded-full animate-bounce"></div>
            <div className="hidden lg:block absolute bottom-40 left-10 w-6 h-6 bg-blue-400 rounded-full opacity-20"></div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* LEFT - IMAGE SIDE */}
                <div className="relative flex justify-center lg:justify-end">
                    {/* Main Experience Badge */}
                    <div className="absolute sm:-top-4 -top-6 left-0 md:-left-4 z-20 bg-white sm:border-2 border border-orange-500 px-4 py-2 rounded-xl shadow-xl transform -rotate-3">
                        <p className="text-orange-600 font-bold text-lg">15+ Years</p>
                        <p className="text-gray-600 text-xs font-medium uppercase tracking-wider">Expertise</p>
                    </div>

                    {/* Image Wrapper with decorative border */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-blue-600 rounded-[2rem] rotate-3 group-hover:rotate-1 transition-transform duration-300"></div>
                        <div className="relative w-[300px] h-[400px] md:w-[400px] md:h-[500px] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl">
                            <Image
                                src="/faculty3.jpeg"
                                alt="Expert Faculty - ScoreOn Academy"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Floating Stats Card */}
                    <div className="absolute -bottom-6 right-4 md:-right-6 z-20 bg-white p-3 rounded-2xl shadow-lg border border-blue-100 flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                            <SiTarget className="w-6 h-6 fill-current" />
                        </div>
                        <div>
                            <p className="text-xl font-bold text-slate-900">2000+</p>
                            <p className="text-sm text-slate-500 font-medium">Students Mentored</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT - CONTENT SIDE */}
                <div className="flex flex-col">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-lg font-semibold w-fit mb-4">
                        <FaGraduationCap className="w-4 h-4" />
                        <span className="text-sm">Meet your expert</span>TUSHAR VAID
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-[1.15] mb-6">
                        Transforming Challenges into <span className="text-blue-600">Success Stories.</span>
                    </h2>

                    <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        An accomplished and result-oriented educator with over <strong>15 years of
                            experience</strong> in mentoring students up to Class 12th. With strong academic
                        credentials and psychological expertise, he transforms academic
                        challenges into measurable success stories.
                    </p>

                    {/* Specialization Grid */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-10">
                        <div className="flex items-center gap-4 p-4 px-2 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="mt-1"><BsRainbow className="w-8 h-8 text-orange-500" /></div>
                            <div>
                                <p className="font-bold text-slate-800 text-sm">Academic Credentials</p>
                                <p className="text-sm mt-1 text-slate-600">B.Sc., M.A. (Psychology), M.A. (English), B.Ed.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="mt-1"><BiCheckCircle className="w-8 h-8 text-green-500" /></div>
                            <div>
                                <p className="font-bold text-slate-800 text-sm">Specialisation</p>
                                <p className="text-sm mt-1 text-slate-600">Neurological Disorders & PG Diploma in Guidance & Counseling</p>
                            </div>
                        </div>
                    </div>

                    {/* Key Points */}
                    <ul className="space-y-4 mb-10">
                        {[
                            "Expert in Mathematics & Science for all classes",
                            "Concept-based, experimental & application-oriented teaching approach",
                            "Career guidance, confidence building & structured performance tracking",
                            "Concept-based, application-oriented methodology",
                            "Specialized support for students with SLD learning difficulties like Dyslexia & Dyscalculia"
                        ].map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-slate-700 font-medium">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="https://wa.me/917042662602" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 transition duration-300 transform hover:-translate-y-1">
                            Schedule a Demo
                        </Link>
                        <div className="flex items-center gap-2 px-6 py-4 text-slate-600 italic text-sm">
                            "Every child can learn with the right method."
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}