"use client"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaCheckCircle } from "react-icons/fa"

const courses = [
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
    description: "Intensive 40-day Maths & Science program focused on fast improvement.",
    color: "from-orange-50 to-red-50",
    accent: "bg-orange-500"
  }
]

export default function SpecialCourses() {
  return (
    <section className="w-full py-20 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Heading Section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            Accelerate Learning
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">Special Courses</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto leading-relaxed">
            Specially designed academic programs that build strong fundamentals and deliver measurable academic results.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-[2rem] p-8 md:p-10 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Image Container with Floating Animation */}
              <div className={`shrink-0 w-full md:w-48 h-48 rounded-2xl bg-gradient-to-br ${course.color} flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-xl animate-float"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                    <span className={`w-2 h-2 rounded-full ${course.accent}`}></span>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{course.tag}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                  {course.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {course.points.map((point, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                      <FaCheckCircle className="text-green-500 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/courses/${course.id}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-all group-hover:shadow-lg active:scale-95"
                >
                  Explore Course
                  <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}