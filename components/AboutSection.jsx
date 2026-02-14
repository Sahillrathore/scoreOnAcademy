"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BiCheck, BiRocket } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuUserRoundPen } from "react-icons/lu";
import { RiRocket2Fill } from "react-icons/ri";
import Link from "next/link";

export default function AboutSection() {
    const [open, setOpen] = useState(false);

    const checkItems = [
        "Expert Certified Trainers",
        "Personalized 1-on-1 Live Tuition",
        "Flexible Timings for Students",
        "Interactive Digital Classrooms"
    ];

    return (
        <>
            <section id="about" className="relative w-full py-24 px-6 md:px-16 overflow-hidden bg-white">
                {/* Background Decorative Elements */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-60 -z-10" />
                <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60 -z-10" />

                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT SIDE: Visual Montage */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        {/* Dot Grid Pattern */}
                        <div className="absolute -top-12 -left-12 grid grid-cols-6 gap-4 opacity-20">
                            {[...Array(24)].map((_, i) => (
                                <div key={i} className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                            ))}
                        </div>

                        {/* Main Hero Image */}
                        <div className="relative w-full max-w-[500px] aspect-[5/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-slate-100">
                            <Image
                                src="/rocket-kid.jpg"
                                alt="Student Success"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Floating Video Preview Card */}
                        <motion.div 
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-10 -right-4 md:-right-12 bg-white/80 backdrop-blur-md rounded-[2rem] shadow-2xl p-3 w-[240px] md:w-[240px] border border-white"
                        >
                            <div className="relative w-full h-[120px] rounded-2xl overflow-hidden group">
                                <Image
                                    src="/video-thumbnail.png"
                                    alt="Live Class Preview"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                                <button
                                    onClick={() => setOpen(true)}
                                    className="absolute inset-0 flex items-center justify-center group"
                                >
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform text-white">
                                        <FaPlay className="ml-1" />
                                    </div>
                                    <div className="absolute w-12 h-12 bg-orange-500 rounded-full animate-ping opacity-30" />
                                </button>
                            </div>
                            <div className="mt-4 px-2">
                                <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-1">Live Demo</p>
                                <p className="text-sm font-bold text-slate-800">1-on-1 Personalized Session</p>
                            </div>
                        </motion.div>

                        {/* Enrolled Statistics Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-8 -left-4 md:-left-10 bg-white rounded-3xl shadow-xl p-6 flex items-center gap-5 border border-slate-50"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white shadow-lg shadow-green-200">
                                <LuUserRoundPen size={28} />
                            </div>
                            <div>
                                <h2 className="text-3xl font-black text-slate-900">200+</h2>
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-tight">Active Learners</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT SIDE: Content */}
                    <div className="flex flex-col">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-4"
                        >
                            Future-Ready Education
                        </motion.span>

                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-black leading-[1.15] mb-8 text-slate-900"
                        >
                            India's best <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">
                                online learning
                            </span>{" "}
                            platform for quality education
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base text-slate-600 mb-10 leading-relaxed"
                        >
                            We don't just teach; we inspire. Our personalized approach ensures 
                            that every child receives the attention they deserve to excel 
                            academically and beyond.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
                            {checkItems.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3 group"
                                >
                                    <div className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors shadow-sm">
                                        <BiCheck size={20} className="text-blue-600 group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-[15px] text-slate-700 font-bold group-hover:text-blue-600 transition-colors">{item}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link href="https://wa.me/917042662602" target="_blank" className="w-fit bg-slate-900 cursor-pointer flex items-center gap-2 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200 active:scale-95">
                                <BiRocket size={22}/> Start Your Journey
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* VIDEO MODAL */}
            <AnimatePresence>
                {open && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center z-[100] px-4"
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="relative w-full max-w-4xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setOpen(false)}
                                className="absolute top-5 right-5 z-50 bg-white/20 hover:bg-white text-white hover:text-black rounded-full p-3 transition-all"
                            >
                                <IoClose size={24} />
                            </button>

                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/-j0rjlfmDx4?autoplay=1"
                                title="YouTube video"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="border-0"
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}