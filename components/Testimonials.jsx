"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import { motion, AnimatePresence } from "framer-motion"

const testimonials = [
    {
        id: 1,
        name: "Shikhar Tomar",
        role: "Parent",
        rating: 5,
        review:
            "The teacher teaches with so much dedication and patience. Concepts are explained in a very structured and clear manner. My child has improved tremendously in confidence and understanding."
    },
    {
        id: 2,
        name: "Naksha Reddy",
        role: "Student",
        rating: 4,
        review:
            "Divya ma’am is extremely kind and cooperative. She makes maths feel easy and interesting. I now enjoy studying and scoring well in exams."
    },
    {
        id: 3,
        name: "Tehseen Javaid",
        role: "Parent",
        rating: 5,
        review:
            "Fantastic experience. My son’s performance improved drastically. The teaching method is systematic, patient and highly effective."
    },
    {
        id: 4,
        name: "Suba Ashok",
        role: "Parent",
        rating: 5,
        review:
            "English became fun and engaging. The feedback given helped my child grow significantly."
    }
]

export default function Testimonials() {
    const [selected, setSelected] = useState(null)

    return (
        <section className="py-20 bg-gradient-to-b overflow-hidden">

            <div className="max-w-6xl mx-auto md:px-0">

                {/* Heading */}
                <div className="mb-16 text-center">
                    <p className="text-orange-500 uppercase tracking-widest text-sm font-semibold mb-4">
                        Testimonials
                    </p>
                    <h2 className="text-4xl font-bold text-[#002855]">
                        Happy Students, Successful Futures
                    </h2>
                </div>

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    loop={true}
                    speed={1400}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id} className="min-h-[20rem] p-2">
                            <motion.div
                                whileHover={{
                                    rotateX: 8,
                                    rotateY: -8,
                                    scale: 1.05
                                }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="cursor-pointer backdrop-blur-xl bg-white/40 border border-white/30 shadow-lg rounded-3xl p-8 min-h-[280px] flex flex-col justify-between"
                                onClick={() => setSelected(item)}
                                style={{
                                    transformStyle: "preserve-3d",
                                    perspective: 1000
                                }}
                            >
                                <p className="text-gray-700 leading-relaxed mb-6 line-clamp-4">
                                    {item.review}
                                </p>

                                {/* Animated Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.span
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="text-yellow-500 text-lg"
                                        >
                                            {i < item.rating ? "★" : "☆"}
                                        </motion.span>
                                    ))}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-[#002855] text-lg">
                                        {item.name}
                                    </h4>
                                    <p className="text-sm text-gray-500">
                                        {item.role}
                                    </p>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-black/40 backdrop-blur-md flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-3xl p-10 max-w-xl w-full shadow-2xl relative"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-5 text-gray-400 hover:text-gray-600 text-xl"
                            >
                                ✕
                            </button>

                            <p className="text-gray-700 leading-relaxed text-center mb-6">
                                {selected.review}
                            </p>

                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-lg">
                                        {i < selected.rating ? "★" : "☆"}
                                    </span>
                                ))}
                            </div>

                            <h4 className="text-center font-semibold text-lg text-[#002855]">
                                {selected.name}
                            </h4>
                            <p className="text-center text-sm text-gray-500">
                                {selected.role}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </section>
    )
}
