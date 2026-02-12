import Image from "next/image";

const courses = [
    {
        badge: "Classes 6 – 8",
        title: "Foundation Program",
        description:
            "Strong conceptual learning for Maths, Science, English & Social Studies with practical understanding.",
        button: "Explore Now",
        bg: "bg-[#F6E2A5]",
        buttonColor: "bg-yellow-500 hover:bg-yellow-600",
        circleBg: "bg-yellow-400",
        image: "/childsitting.png",
    },
    {
        badge: "Classes 9 – 10",
        title: "Board Preparation",
        description:
            "Complete syllabus coverage for all subjects with test series, revisions & exam-focused practice.",
        button: "Explore Now",
        bg: "bg-[#F4C7A1]",
        buttonColor: "bg-orange-500 hover:bg-orange-600",
        circleBg: "bg-orange-400",
        // image: "/images/board.png",
    },
    {
        badge: "Classes 11 – 12",
        title: "All Streams",
        description:
            "Science, Commerce & Arts streams with in-depth subject clarity and practical-based learning.",
        button: "Explore Now",
        bg: "bg-[#C6E7D6]",
        buttonColor: "bg-green-500 hover:bg-green-600",
        circleBg: "bg-green-500",
        image: "/allstreams.png",
    },
    {
        badge: "Special Focus",
        title: "Practical Learning",
        description:
            "Interactive sessions, doubt solving, real-life examples & weekly assessments for better understanding.",
        button: "Explore Now",
        bg: "bg-[#D4D6F5]",
        buttonColor: "bg-indigo-500 hover:bg-indigo-600",
        circleBg: "bg-indigo-500",
        // image: "/images/practical.png",
    },
];

export default function AvailableCourses() {
    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">

                {/* Heading */}
                <h2 className="text-4xl font-bold mb-12 text-gray-700">
                    Discover Available{" "}
                    <span className="text-orange-500">Courses</span>
                </h2>

                {/* Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className={`${course.bg} rounded-3xl p-8 relative overflow-hidden flex flex-col md:flex-row items-center justify-between`}
                        >
                            {/* Left Content */}
                            <div className="max-w-md">
                                <p className="text-sm font-semibold text-gray-600 mb-3">
                                    {course.badge}
                                </p>

                                <h3 className="text-3xl font-bold text-gray-700 mb-4">
                                    {course.title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {course.description}
                                </p>

                                <button
                                    className={`${course.buttonColor} text-white px-6 py-3 rounded-lg font-medium transition`}
                                >
                                    {course.button}
                                </button>
                            </div>

                            {/* Right Image Circle */}
                            <div className="relative mt-8 md:mt-0">
                                <div
                                    className={`w-40 h-40 ${course.circleBg} rounded-full flex items-center justify-center shadow-lg`}
                                >
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        width={120}
                                        height={120}
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            {/* Decorative Circle */}
                            <div className="absolute bottom-0 right-0 w-40 h-40 border-[12px] border-white/30 rounded-full translate-x-10 translate-y-10"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
