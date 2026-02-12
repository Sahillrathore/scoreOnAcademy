"use client";
import Image from "next/image";

export default function SpecialCourses() {
  return (
    <section className="w-full py-20 bg-white overflow-hidden relative">

      {/* <div className="absolute z-0 top-[-120px] left-[-120px] w-[400px] h-[400px] bg-green-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute z-0 bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-orange-200 rounded-full blur-3xl opacity-40"></div> */}

      <div className="max-w-6xl mx-auto px-0 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="w-fit">
          <h2 className="text-4xl relative z-10 md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Our{" "}
            <span className="text-orange-500">Special </span>
            Courses
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-6 max-w-lg">
            Specially designed academic programs to give students a competitive
            edge from school itself. Focused preparation, conceptual clarity,
            and result-driven strategies.
          </p>

          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        {/* RIGHT CARDS */}
        <div className="grid sm:grid-cols-2 gap-8  w-full">

          {/* CARD 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-5">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                <Image
                  src="/allstreams.png"
                  alt="IIT Focused"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              IIT Focused Batch
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Structured syllabus aligned with IIT-JEE preparation from
              school level. Students build strong fundamentals early and stay
              ahead instead of starting preparation after 12th.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white relative z-10 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300">
            <div className="mb-5">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                <Image
                  src="/images/40days.png"
                  alt="40 Days"
                  width={40}
                  height={40}
                />
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-3">
              40-Day Exam Booster
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Intensive 40-day Maths & Science program focused on exam
              preparation. Quick revision, important questions, smart
              strategies, and score-boosting techniques.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
