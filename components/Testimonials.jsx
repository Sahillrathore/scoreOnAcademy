"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import { motion, AnimatePresence } from "framer-motion"
import { FaQuoteLeft, FaStar } from "react-icons/fa"

const testimonials = [
    {
        id: 1,
        name: "Shikhar Tomar",
        role: "Parent",
        rating: 5,
        review: "The teacher teaches with so much dedication and patience. Concepts are explained in a very structured and clear manner. My child has improved tremendously in confidence and understanding."
    },
    {
        id: 2,
        name: "Naksha Reddy",
        role: "Student",
        rating: 5,
        review: "Tushar Sir is extremely kind and cooperative. He makes maths feel easy and interesting. I now enjoy studying and scoring well in exams."
    },
    {
        id: 3,
        name: "Tehseen Javaid",
        role: "Parent",
        rating: 5,
        review: "Fantastic experience. My son’s performance improved drastically. The teaching method is systematic, patient and highly effective."
    },
    {
        id: 4,
        name: "Suba Ashok",
        role: "Parent",
        rating: 5,
        review: "English became fun and engaging. The feedback given helped my child grow significantly."
    }
]

export default function Testimonials() {
    const [selected, setSelected] = useState(null)

    return (
        <section className="md:py-24 py-20 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-7xl mx-auto px-4">
                {/* Heading */}
                <div className="sm:mb-20 mb-12 text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 mb-4 text-xs tracking-[0.1rem] font-semibold text-blue-600 uppercase bg-blue-100 rounded-full"
                    >
                        Real Stories
                    </motion.p>
                   
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl text-gray-900 font-black sm:mb-6 mb-4 tracking-tight "
                    >
                        Happy Students, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Successful Futures</span>
                    </motion.h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-orange-500 mx-auto rounded-full" />
                </div>

                {/* Swiper Carousel */}
                <div className="testimonial-swiper-container">
                    <Swiper
                        modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        loop={true}
                        speed={1000}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true
                        }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                        className="pb-16"
                    >
                        {testimonials.map((item) => (
                            <SwiperSlide key={item.id} className="p-4">
                                <motion.div
                                    whileHover={{ y: -10 }}
                                    onClick={() => setSelected(item)}
                                    className="relative group cursor-pointer bg-white border border-slate-200 shadow-sm hover:shadow-2xl hover:border-orange-200 transition-all duration-500 rounded-[2.5rem] p-10 flex flex-col h-full min-h-[320px]"
                                >
                                    <FaQuoteLeft className="text-orange-200 text-4xl mb-6 group-hover:text-orange-400 transition-colors duration-300" />

                                    <p className="text-slate-600 leading-relaxed italic mb-8 flex-grow line-clamp-4">
                                        "{item.review}"
                                    </p>

                                    <div className="pt-6 border-t border-slate-100 mt-auto">
                                        <div className="flex gap-1 mb-3">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={i < item.rating ? "text-yellow-400" : "text-slate-200"} />
                                            ))}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-slate-900 text-lg">
                                                {item.name}
                                            </h4>
                                            <p className="text-sm font-medium text-blue-600 uppercase tracking-wider">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Subtle Gradient Corner on Hover */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 rounded-tr-[2.5rem] transition-opacity" />
                                </motion.div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Modal / Detailed View */}
            <AnimatePresence>
                {selected && (
                    <motion.div
                        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex items-center justify-center z-[100] md:px-6 px-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[3rem] md:p-12 p-8 max-w-2xl w-full shadow-2xl relative border border-white/20"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-8 right-8 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-orange-500 hover:text-white transition-all"
                            >
                                ✕
                            </button>

                            <FaQuoteLeft className="text-5xl text-blue-100 mb-6" />

                            <p className="text-xl text-slate-700 leading-relaxed font-medium mb-10 text-center italic">
                                {selected.review}
                            </p>

                            <div className="flex flex-col items-center">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className={`text-2xl ${i < selected.rating ? "text-yellow-400" : "text-slate-200"}`} />
                                    ))}
                                </div>
                                <h4 className="font-black text-2xl text-slate-900">
                                    {selected.name}
                                </h4>
                                <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mt-2">
                                    {selected.role}
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .testimonial-swiper-container .swiper-pagination-bullet-active {
                    background: #2563eb !important; /* blue-600 */
                    width: 24px !important;
                    border-radius: 4px !important;
                }
                .testimonial-swiper-container .swiper-pagination {
                    bottom: 0 !important;
                }
            `}</style>
        </section>
    )
}