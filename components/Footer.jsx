"use client"

import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa"
import { BsWhatsapp, BsInstagram } from "react-icons/bs"
import Image from "next/image"
import Link from "next/link"

const tags = [
    "Professional Teachers",
    "Student Satisfaction",
    "Quality Education",
    "Personal Attention",
    "Concept Clarity",
    "Exam Preparation",
    "Affordable Learning",
    "Trusted by Parents"
]

export default function Footer() {

    return (
        <section className="relative primary-bg text-white overflow-hidden">

            {/* ================= MARQUEE STRIP ================= */}
            <div className="relative py-6 border-b border-white/10">

                {/* Gradient fade edges */}
                <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#032c5c] to-transparent z-10" />
                <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#032c5c] to-transparent z-10" />

                <motion.div
                    className="flex gap-0 whitespace-nowrap"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 22,
                        ease: "linear"
                    }}
                >
                    {[...tags, ...tags].map((tag, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 md:px-12 px-2 md:py-3 py-1 border-r border-gray-50 transition-all duration-300"
                        >
                            <FaStar className="md:block hidden text-yellow-400 text-sm" />
                            <span className="text-sm font-medium tracking-wide">
                                {tag}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* ================= FOOTER ================= */}
            <div className="max-w-7xl mx-auto md:px-6 px-4 py-16 grid md:grid-cols-3 gap-10">

                {/* Brand */}
                <div>
                    {/* <h3 className="text-2xl font-bold mb-4 tracking-wide">
                        
                    </h3> */}
                    <Image src="/logoss.png" alt="logo." className="mb-6" width={150} height={150} />

                    <p className="text-white/70 text-sm leading-relaxed">
                        Empowering students with structured learning, personal attention,
                        and strong conceptual foundations to build successful futures.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="w-fit">
                    <h4 className="font-semibold mb-4 text-lg">
                        Quick Links
                    </h4>
                    <ul className="space-y-3 text-sm text-white/70">
                        <Link href="#about" className="hover:text-white transition cursor-pointer block">About Us</Link>
                        <Link href="#courses" className="hover:text-white transition cursor-pointer block">Courses</Link>
                        <Link href="#testimonials" className="hover:text-white transition cursor-pointer block">Testimonials</Link>
                        <Link href="#contact" className="hover:text-white transition cursor-pointer block">Contact</Link>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="font-semibold mb-4 text-lg">
                        Contact
                    </h4>
                    <p className="text-white/70 text-sm mb-4">
                        +91 7042662602
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://wa.me/917042662602"
                            target="_blank"
                            className="p-3 bg-white/10 rounded-full hover:bg-green-600 transition-all duration-300"
                        >
                            <BsWhatsapp size={18} />
                        </a>

                        <a
                            href="https://www.instagram.com/scoreonacademy?utm_source=qr&igsh=cHhweHZveDRtZmQ1"
                            className="p-3 bg-white/10 rounded-full hover:bg-pink-600 transition-all duration-300"
                        >
                            <BsInstagram size={18} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center text-white/50 text-xs py-6 border-t border-white/10">
                © {new Date().getFullYear()} ScoreOn Academy. All Rights Reserved.
            </div>
        </section>
    )
}
