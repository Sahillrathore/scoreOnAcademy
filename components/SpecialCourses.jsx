"use client"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"

const courses = [
  {
    id: "iit-focused",
    title: "IIT Focused Batch",
    image: "/allstreams.png",
    points: [
      "Early IIT-JEE foundation",
      "Strong conceptual clarity",
      "Advanced problem solving",
      "Competitive mindset training"
    ],
    description:
      "Structured syllabus aligned with IIT-JEE preparation from school level."
  },
  {
    id: "40-day-booster",
    title: "40-Day Exam Booster",
    image: "/images/40days.png",
    points: [
      "Smart revision strategy",
      "High scoring questions",
      "Time management mastery",
      "Exam-focused preparation"
    ],
    description:
      "Intensive 40-day Maths & Science program focused on fast improvement."
  }
]

export default function SpecialCourses() {
  return (
    <section className="w-full py-24 bg-white relative">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="secondary-text">Special Courses</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specially designed academic programs that build strong fundamentals,
            improve confidence and deliver measurable academic results.
          </p>
          <div className="w-24 h-1 secondary-bg mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">

          {courses.map((course) => (
            <div
              key={course.id}
              className="group border border-gray-200 rounded-3xl p-10 hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-orange-50 rounded-2xl flex items-center justify-center mb-6">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={50}
                  height={50}
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {course.title}
              </h3>

              <p className="text-gray-600 mb-6">
                {course.description}
              </p>

              {/* Feature Points */}
              <ul className="space-y-3 mb-8">
                {course.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 primary-bg rounded-full"></div>
                    {point}
                  </li>
                ))}
              </ul>

              <Link
                href={`/courses/${course.id}`}
                className="inline-flex items-center gap-2 secondary-text font-semibold group-hover:gap-4 transition-all"
              >
                View Details
                <FaArrowRight className="text-sm" />
              </Link>

              {/* subtle hover border accent */}
              <div className="absolute bottom-0 left-0 w-0 h-1 secondary-bg transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
