"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const courses = [
    {
        badge: "Classes 6 – 8",
        slug: "foundation-program",
        title: "Foundation Program",
        description: "Strong conceptual learning for Maths, Science, English & Social Studies with practical understanding.",
        button: "Explore Now",
        bg: "bg-[#FDF7E7]", // Lightened for better readability
        accent: "text-yellow-600",
        buttonColor: "bg-yellow-500 hover:bg-yellow-600",
        circleBg: "bg-yellow-400",
        image: "/foundation6-8.png",
    },
    {
        badge: "Classes 9 – 10",
        slug: "board-preparation",
        title: "Board Preparation",
        description: "Complete syllabus coverage for all subjects with test series, revisions & exam-focused practice.",
        button: "Explore Now",
        bg: "bg-[#FFF1E6]",
        accent: "text-orange-600",
        buttonColor: "bg-orange-500 hover:bg-orange-600",
        circleBg: "bg-orange-400",
        image: "/board-preparation.png",
    },
    {
        badge: "Classes 11 – 12",
        slug: "all-streams",
        title: "All Streams",
        description: "Science, Commerce & Arts streams with in-depth subject clarity and practical-based learning.",
        button: "Explore Now",
        bg: "bg-[#EBF7F1]",
        accent: "text-green-600",
        buttonColor: "bg-green-500 hover:bg-green-600",
        circleBg: "bg-green-500",
        image: "/iit-course.png",
    },
    {
        badge: "Special Focus",
        slug: "practical-learning",
        title: "Practical Learning",
        description: "Interactive sessions, doubt solving, real-life examples & weekly assessments for better understanding.",
        button: "Explore Now",
        bg: "bg-[#EEF0FF]",
        accent: "text-indigo-600",
        buttonColor: "bg-indigo-500 hover:bg-indigo-600",
        circleBg: "bg-indigo-500",
        image: '/practical-learning.png',
    },
];

export default function AvailableCourses() {
    return (
        <section id="courses" className="w-full md:py-24 py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between sm:mb-16 mb-12 gap-6">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-blue-600 sm:text-start text-center block font-bold tracking-widest uppercase text-sm"
                        >
                            Educational Excellence
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="sm:text-4xl sm:text-start text-center text-3xl md:text-5xl font-extrabold mt-2 sm:mb-6 tracking-tight"
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Discover Available</span> Courses
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-gray-500 max-w-sm sm:text-start text-center"
                    >
                        Choose the right path for your academic journey with our specialized curriculum.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {courses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`${course.bg} rounded-3xl p-6 md:p-8 relative overflow-hidden group flex flex-col sm:flex-row items-center sm:items-start gap-8 shadow-sm`}
                        >
                            {/* Content */}
                            <div className="flex-1 z-10 text-center sm:text-left">
                                <span className={`inline-block px-4 py-1 rounded-full bg-white/60 text-xs font-bold ${course.accent} mb-6 shadow-sm`}>
                                    {course.badge}
                                </span>

                                <h3 className="text-3xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
                                    {course.title}
                                </h3>

                                <p className="text-slate-600 leading-relaxed mb-8 text-[15px] font-medium opacity-80">
                                    {course.description}
                                </p>

                                <Link
                                    href={`/courses/${course.slug}`}
                                    className={`${course.buttonColor} text-white px-8 py-3.5 rounded-2xl font-bold transition-all inline-flex items-center gap-2 shadow-lg shadow-black/5 hover:shadow-xl hover:scale-105 active:scale-95`}
                                >
                                    {course.button}
                                    <FiArrowUpRight className="text-lg" />
                                </Link>
                            </div>

                            {/* Image Visual */}
                            <div className="relative z-10 shrink-0">
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    className={`w-40 h-40 ${course.circleBg} rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden`}
                                >
                                    {course.image ? (
                                        <Image
                                            src={course.image}
                                            alt={course.title}
                                            fill
                                            className="object-cover p-2 rounded-3xl"
                                        />
                                    ) : (
                                        <div className="text-white text-5xl font-black opacity-40">
                                            {course.title.charAt(0)}
                                        </div>
                                    )}

                                    {/* Glass reflection effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            </div>

                            {/* Decorative Background Element */}
                            <div className={`absolute -bottom-10 -right-10 w-48 h-48 rounded-full border-[16px] border-white/20 group-hover:scale-125 transition-transform duration-700`} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}