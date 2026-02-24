"use client"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaCheckCircle, FaShieldAlt, FaUndoAlt } from "react-icons/fa"

const regularCourses = [
  {
    id: "iit-focused",
    title: "IIT Focused Batch",
    image: "/iit-course.png",
    tag: "Future Engineers",
    points: [
      "Early IIT-JEE foundation",
      "Strong conceptual clarity",
      "Advanced problem solving",
      "Competitive mindset training"
    ],
    description: "Structured syllabus aligned with IIT-JEE preparation from school level.",
    color: "from-blue-50 to-indigo-50",
    accent: "bg-blue-600"
  },
  {
    id: "40-day-booster",
    title: "40-Day Exam Booster",
    image: "/40-day.png",
    tag: "Exam Ready",
    points: [
      "Smart revision strategy",
      "High scoring questions",
      "Time management mastery",
      "Exam-focused preparation"
    ],
    description: "Intensive 40-day Mathematics & Science program focused on fast improvement.",
    color: "from-orange-50 to-red-50",
    accent: "bg-orange-500"
  }
]

export default function SpecialCourses() {
  return (
    <section id="special-courses" className="w-full md:py-24 py-16 relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            Accelerate Learning
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Special Courses</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Specially designed academic programs that build strong fundamentals and deliver measurable academic results.
          </p>
        </div>

        {/* ===================================== */}
        {/* GUARANTEE BATCH - PREMIUM UI */}
        {/* ===================================== */}

        <div className="relative group bg-white border border-gray-100 rounded-[3rem] p-5 sm:p-8 md:p-14 shadow-md shadow-gray-200 mb-16 overflow-hidden">
          {/* Animated Background Glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px]"></div>

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">

            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col sm:items-start items-center justify-center">
              <div className="inline-flex items-center w-fit gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 mb-6">
                <FaShieldAlt className="text-amber-400 text-xs" />
                <span className="text-[10px] font-black uppercase sm:tracking-[0.2em] text-amber-400">
                  Performance Assurance Batch
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black mb-6">
                The Guarantee <span className="text-amber-400 underline decoration-2 underline-offset-8">Batch</span>
              </h3>

              <p className="text-slate-700 sm:text-lg text-sm sm:text-start text-center leading-relaxed mb-8 sm:max-w-xl max-w-[16rem]">
                A high-accountability system for serious students. We don't just teach; we ensure results through a scientifically backed roadmap.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Minimum 85%+ score commitment",
                  "1-to-1 & small focused batches",
                  "Personalized improvement roadmap",
                  "Full Fee Refund Policy"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-700">
                    <FaCheckCircle className="text-amber-400 shrink-0 text-xl" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="https://wa.me/917042662602?text=I'm%20interested%20in%20the%20Guarantee%20Batch.%20Please%20provide%20more%20details."
                  target="_blank"
                  className="px-10 py-4 rounded-2xl text-base bg-amber-400 text-slate-900 font-bold hover:bg-amber-300 transition-all hover:scale-105 shadow-xl shadow-amber-400/20 flex items-center gap-3"
                >
                  Apply for Admission <FaArrowRight />
                </Link>

                {/* REFUND HIGHLIGHT */}
                <div className="flex items-center gap-3 py-2 px-4 border border-black/20 rounded-2xl  backdrop-blur-sm">
                  <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <FaUndoAlt className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-bold text-base">Full Fee Refund</p>
                    <p className="text-slate-600 text-xs italic">If no result outcome*</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image - HIGHLIGHTED */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 sm:bg-amber-400 bg-amber-50 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-72 h-72 md:w-96 md:h-96 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 flex items-center justify-center shadow-2xl group-hover:rotate-2 transition-transform duration-500">
                  <Image
                    src="/guaranteed-batch.png"
                    alt="Guarantee Batch"
                    width={320}
                    height={320}
                    className="object-contain drop-shadow-[0_20px_50px_rgba(251,191,36,0.3)] sm:h-full h-[90%]"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ===================================== */}
        {/* REGULAR TWO COURSES */}
        {/* ===================================== */}

        <div className="grid lg:grid-cols-2 gap-8">
          {regularCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className={`shrink-0 w-full md:w-48 h-48 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center`}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={160}
                  height={160}
                  className="object-contain"
                />
              </div>

              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <span className={`w-2 h-2 rounded-full ${course.accent}`}></span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                    {course.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {course.title}
                </h3>

                <p className="text-gray-700 mb-6 text-base leading-relaxed">
                  {course.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {course.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all"
                >
                  Explore Course
                  <FaArrowRight className="ml-2 text-xs" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}