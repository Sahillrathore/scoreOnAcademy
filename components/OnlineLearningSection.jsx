"use client";

import Image from "next/image";

const features = [
    {
        title: "Classes for All Streams & Subjects",
        desc: "We offer online classes for all stremas and subjects.",
        icon: "/classroom.png",
    },
    {
        title: "Book Demo Class",
        desc: "Choose your subject/course and take a free trial class.",
        icon: "/free-demo-classes.png",
    },
    //   {
    //     title: "Classes in Regional Language",
    //     desc: "Find teachers who teach you in your mother tongue.",
    //     icon: "/.png",
    //   },
    {
        title: "Diverse Courses",
        desc: "Coding, Foreign languages, Dance, Music. Classes for all.",
        icon: "/diverse-course.png",
    },
    {
        title: "Experienced Teachers",
        desc: "Take lessons from the best teachers.",
        icon: "/experienced-teacher.png",
    },
    {
        title: "Student's Results",
        desc: "Every student's results & reviews are important to us.",
        icon: "/student-result.png",
    },
];

export default function OnlineLearningSection() {
    return (
        <section id="learning" className="relative w-full py-20 my-12 overflow-hidden bg-gradient-to-br from-[#f5f8f3] to-[#eaf3e6]">

            {/* Decorative Blur Background */}
            <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-green-200 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-40"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-16 items-center">

                {/* LEFT SIDE CONTENT */}
                <div className=" w-fit">
                    <h2 className="text-4xl max-w-sm md:text-5xl font-bold leading-tight text-slate-900">
                        Online Learning With{" "}
                        <span className="secondary-text">ScoreOn Academy</span>
                    </h2>

                    <p className="mt-6 text-lg max-w-sm text-slate-600 leading-relaxed max-w-lg">
                        We connect you to expert teachers and peers. Discover what makes us one
                        of the best online tuition platforms.
                    </p>

                    <button className="mt-8 px-6 py-3 secondary-bg text-white rounded-xl shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105">
                        Explore Courses
                    </button>
                </div>

                {/* RIGHT SIDE CARDS */}
                <div className="grid col-span-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full ">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-md border border-gray-100 rounded-xl p-6 shadow-[0px_4px_14px_-8px_rgba(0,_0,_0,_0.1)] hover:shadow-md transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="w-14 h-14 relative mb-4">
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    fill
                                    className="object-contain group-hover:scale-110 transition duration-300"
                                />
                            </div>

                            <h3 className="text-lg font-semibold text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
