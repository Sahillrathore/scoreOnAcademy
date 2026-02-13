import Image from "next/image"
import Link from "next/link"
import { use } from "react"

const courseData = {
    "iit-focused": {
        title: "IIT Focused Batch",
        image: "/allstreams.png",
        description:
            "Our IIT Focused Batch is structured to prepare students from early grades with advanced problem-solving skills and competitive exam mindset.",
        features: [
            "Complete IIT-JEE aligned syllabus",
            "Weekly assessments",
            "Advanced problem solving sessions",
            "Personal mentoring",
            "Olympiad exposure"
        ]
    },
    "40-day-booster": {
        title: "40-Day Exam Booster",
        image: "/images/40days.png",
        description:
            "An intensive fast-track program designed to improve exam performance within 40 days through strategic revision and focused practice.",
        features: [
            "Rapid concept revision",
            "Important expected questions",
            "Time management strategy",
            "Daily practice tests",
            "Score improvement tracking"
        ]
    },

    "foundation-program": {
        badge: "Classes 6 – 8",
        title: "Foundation Program",
        image: "/childsitting.png",
        description:
            "Our Foundation Program builds strong academic fundamentals from early grades through conceptual clarity and structured learning.",
        features: [
            "Strong Maths & Science base",
            "Logical reasoning development",
            "English communication skills",
            "Weekly assessments",
            "Olympiad exposure"
        ],
    },

    "board-preparation": {
        badge: "Classes 9 – 10",
        title: "Board Preparation",
        image: "/board.png",
        description:
            "Complete board syllabus coverage with structured test series and exam-focused preparation strategy.",
        features: [
            "Full syllabus completion",
            "Regular test series",
            "Revision plans",
            "Previous year questions",
            "Score improvement tracking"
        ],
    },
    "all-streams": {
        badge: "Classes 11 – 12",
        title: "All Streams",
        image: "/allstreams.png",
        description:
            "In-depth preparation for Science, Commerce & Arts with practical clarity and competitive exam readiness.",
        features: [
            "Stream specific guidance",
            "Advanced subject mentoring",
            "Competitive exam support",
            "Concept clarity sessions",
            "Career counselling"
        ],
    },
    "practical-learning": {
        badge: "Special Focus",
        title: "Practical Learning",
        image: "/practical.png",
        description:
            "Interactive sessions with real-life examples and weekly assessments to improve application-based understanding.",
        features: [
            "Interactive learning",
            "Doubt solving sessions",
            "Application-based problems",
            "Case study discussions",
            "Weekly progress evaluation"
        ],
    },

}

export default function CourseDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)

    const course = courseData[slug]

    if (!slug) {
        return <div className="py-20 text-center">Course Not Found</div>
    }

    return (
        <section className="py-24 px-6 bg-white">
            <div className="max-w-5xl mx-auto">

                <Link href="/" className="text-orange-500 mb-8 inline-block">
                    ← Back to Courses
                </Link>

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    <div>
                        <h1 className="text-4xl font-bold mb-6">
                            {course.title}
                        </h1>

                        <p className="text-gray-600 mb-8">
                            {course.description}
                        </p>

                        <ul className="space-y-4">
                            {course.features.map((feature, i) => (
                                <li key={i} className="flex gap-3 items-center">
                                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-xl">
                        <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}
